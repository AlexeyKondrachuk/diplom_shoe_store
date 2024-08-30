import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  addProduct,
  increment,
  decrement,
  setSizeCategory,
} from "../../redux/slices/cartSlice";
import { fetchProductId } from "../../Utils/fetchProfuctId";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";
import "./products.scss";

function Products() {
  const product = useSelector((state) => state.productId.items);
  const count = useSelector((state) => state.cart.count);
  const sizeCategory = useSelector((state) => state.cart.sizeCategory);
  const status = useSelector((state) => state.productId.status);
  const { id } = useParams();
  const productId = id;
  const dispatch = useDispatch();
  const [size, setSize] = useState();

  const getProductId = async () => {
    dispatch(fetchProductId(productId));
  };

  useEffect(() => {
    getProductId();
  }, [productId]);

  const disabledInc = () => {
    if (count < 10) {
      return false;
    } else return true;
  };

  const disabledDec = () => {
    if (count > 1) {
      return false;
    } else return true;
  };

  const disabledAddCart = () => {
    if (!size) {
      return true;
    } else return false;
  };

  const onClickAdd = () => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      sizes: size,
      count: count,
    };

    dispatch(addProduct(item));
  };

  const onSizeHandler = (sizeCategory) => {
    console.log(sizeCategory);
    dispatch(setSizeCategory(sizeCategory));
  };

  return (
    <section className="catalog-item">
      <div>{status === "Loading" && <Loader />}</div>

      {status === "Succes" && (
        <div>
          <h2 className="text-center">{product.title}</h2>
          <div className="row">
            <div className="col-5">
              <img
                src={product.images && product.images[0]}
                className="img-fluid"
                alt={product.title}
              />
            </div>
            <div className="col-7">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Артикул</td>
                    <td>{product.sku}</td>
                  </tr>
                  <tr>
                    <td>Производитель</td>
                    <td>{product.manufacturer}</td>
                  </tr>
                  <tr>
                    <td>Цвет</td>
                    <td>{product.color}</td>
                  </tr>
                  <tr>
                    <td>Материалы</td>
                    <td>{product.material}</td>
                  </tr>
                  <tr>
                    <td>Сезон</td>
                    <td>{product.season}</td>
                  </tr>
                  <tr>
                    <td>Повод</td>
                    <td>{product.reason}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center">
                <div className="sizes">
                  <p>Размеры в наличии: </p>
                  <div className="select-size">
                    {product.sizes &&
                      product.sizes.map((item, i) => (
                        <button
                          onClick={() => (onSizeHandler(i), setSize(item.size))}
                          disabled={item.available}
                          key={item.id}
                          className={
                            sizeCategory === i
                              ? "size_item-active"
                              : "size_item"
                          }
                        >
                          {item.available === false ? item.size : ""}
                        </button>
                      ))}
                  </div>
                </div>
                <p>
                  Количество:{" "}
                  <span className="btn-group btn-group-sm pl-2">
                    <button
                      className="btn-plus"
                      disabled={disabledDec(count)}
                      onClick={() => {
                        dispatch(decrement());
                      }}
                    >
                      -
                    </button>
                    <span className="count">{count}</span>
                    <button
                      className="btn-minus"
                      disabled={disabledInc(count)}
                      onClick={() => {
                        dispatch(increment());
                      }}
                    >
                      +
                    </button>
                  </span>
                </p>
              </div>
              <button
                className="add_to_cart"
                onClick={onClickAdd}
                disabled={disabledAddCart(size)}
              >
                В корзину
              </button>
            </div>
          </div>
        </div>
      )}

      {status === "Error" && <div>Сервер временно не доступен</div>}
    </section>
  );
}

export default Products;
