import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../products/card/card";
import Filters from "../filter/Filters";
import { fetchProducts } from "../../Utils/fetchProducts";
import { setOffSet } from "../../redux/slices/filterSlice";
import useDebounce from "../../Utils/useDebounce";
import Loader from "../loader/Loader";
import "./catalogItems.scss";

function CatalogItems() {
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const selectId = useSelector((state) => state.filter.categoryId);
  const offSet = useSelector((state) => state.filter.offSet);
  const searchVal = useSelector((state) => state.filter.searchValue);
  const dispatch = useDispatch();

  console.log(searchVal);
  const handlerOffset = () => {
    if (products.length === 6) {
      dispatch(setOffSet(offSet + 6));
    }
  };

  const debouncedSearch = useDebounce(searchVal, 1200);

  let query;

  function querySearch() {
    if (debouncedSearch) {
      return (query = `&q=${debouncedSearch}`);
    } else return (query = "");
  }

  const qs = querySearch(debouncedSearch);
  console.log(searchVal);

  const productsCatalog = `?categoryId=${selectId}` + `&offset=${offSet}` + qs;

  console.log(productsCatalog);

  const getProducts = async () => {
    dispatch(fetchProducts(productsCatalog));
  };

  useEffect(() => {
    getProducts();
  }, [productsCatalog]);

  return (
    <section className="home">
      <Filters />

      <div>{status === "Loading" && <Loader />}</div>

      {status === "Succes" && (
        <div className="card-container">
          <ul className="card-items">
            {products.map((item) => (
              <Card
                key={item.id}
                image={item.images[0]}
                title={item.title}
                price={item.price}
                id={item.id}
              />
            ))}
          </ul>
        </div>
      )}

      {products.length < 6 ? null : (
        <button className="btn_another" onClick={handlerOffset}>
          еще
        </button>
      )}

      {status === "Error" && <div>Сервер временно не доступен</div>}
    </section>
  );
}

export default CatalogItems;
