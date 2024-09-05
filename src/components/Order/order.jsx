import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrderOwner, addOrderItems, setDoneOrder, setStatus } from "../../redux/slices/orderSlice";
import { fetchPostOrder } from "../../Utils/fetchOrder";
import { itemsInCart } from "../../redux/slices/cartSlice";
import "./order.scss";
import { useLocation } from "react-router-dom";

const initialValues = {
  phone: "",
  address: "",
};

export default function Order() {
  const orderPost = useSelector((state) => state.order.order);
  const  status = useSelector((state) => state.order.status);
  const location = useLocation()



  const fields = ["id", "count", "price"];
  const orderItems = itemsInCart.map((i) =>
    Object.fromEntries(fields.map((f) => [f, i[f]]))
  );



  const [order, setOrder] = useState(initialValues);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(addOrderItems(orderItems));
    dispatch(addOrderOwner(order));
  }, [order]);


  const handleOrderPost = async () => {
    console.log(order);
    if (orderPost.length !== 0) {
      dispatch(fetchPostOrder(orderPost));
    }
  };

  useEffect(() => {
    if (status === 'Succes') {
      dispatch(setDoneOrder(true))
   
    }
  }, [handleOrderPost]);


  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card">
        <form className="card-body">
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              className="form-control"
              id="phone"
              placeholder="Ваш телефон"
              value={order.phone}
              onChange={handleInputChange}
              name="phone"
              required
              minLength="11"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input
              className="form-control"
              id="address"
              placeholder="Адрес доставки"
              value={order.address}
              onChange={handleInputChange}
              name="address"
              required
              minLength="4"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreement"
              required
            />
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами доставки
            </label>
          </div>
          <button
            type="button"
            className="button-submit"
            onClick={handleOrderPost}
          >
            Оформить
          </button>
        </form>
      </div>
    </section>
  );
}
