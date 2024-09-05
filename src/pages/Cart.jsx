import { useSelector } from "react-redux";
import CartItems from "../components/CartItem/CartItems";
import CardEmpty from "../components/CartItem/CartEmpty";
import Order from "../components/Order/order";
import Loader from "../components/loader/Loader";
import "../pages/pages_stlyle/Cart.scss";


export const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.item);
  const totalPrice = localStorage.getItem("totalPrice");
  const doneOrder = useSelector((state) => state.order.doneOrder);
  const status = useSelector((state) => state.order.status);




 

  if (cartProducts.length === 0 && status === null) {
    return (
      <>
        <CardEmpty />
      </>
    );
  } else
    return (
      <>
      
      
        {status === 'Loading' && <Loader />}
        {status === 'Error' && <div>не удалось создать заказ</div>}
        {doneOrder === true  ?
          <h3 className="orderSucces">Заказ успешно оформлен </h3>
         : 
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
          <Order />
          </>
        }
      </>
    );
};
