import { useSelector } from "react-redux";
import CartItems from "../components/CartItem/CartItems";
import CardEmpty from "../components/CartItem/CartEmpty";
import Order from "../components/Order/order";
import "../pages/pages_stlyle/Cart.scss";

export const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.item);
  const status = useSelector((state) => state.order.status);
  const totalPrice = localStorage.getItem("totalPrice");

  console.log(status);

  if (cartProducts.length === 0) {
    return (
      <>
        <CardEmpty />
      </>
    );
  } else
    return (
      <>
        <table className="cart">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>

          {cartProducts.map((item, index) => (
            <CartItems number={index + 1} key={item.id} {...item} />
          ))}

          <tbody>
            <tr>
              <td colSpan="5" className="total_price_title">
                Общая стоимость
              </td>
              <td className="total_price">{totalPrice}</td>
            </tr>
          </tbody>
        </table>

        {status === "Succes" ? (
          <h3 className="orderSucces">Заказ успешно оформлен </h3>
        ) : (
          <Order in />
        )}
      </>
    );
};
