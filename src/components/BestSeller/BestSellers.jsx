import { useEffect } from "react";
import { Card } from "../products/card/card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSellerProducts } from "../../Utils/fetchBestSeller";
import Loader from "../loader/Loader";
import "./BestSellers.scss";

function BestSeller() {
  const items = useSelector((state) => state.productsBestSeller.items);
  const status = useSelector((state) => state.productsBestSeller.status);

  const getBestSeller = "top-sales";

  const dispatch = useDispatch();

  const getProducts = async () => {
    dispatch(fetchBestSellerProducts(getBestSeller));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="bestsellers-homepage">
      <p className="bestseller_title-homepage">Хиты продаж!</p>

      <div>{status === "Loading" && <Loader />}</div>

      {status === "Succes" && (
        <div className="card-container">
          <ul className="card-items">
            {items.map((item) => (
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

      {status === "Error" && <div>Сервер временно не доступен</div>}
    </section>
  );
}
export default BestSeller;
