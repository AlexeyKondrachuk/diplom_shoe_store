import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct } from "../../redux/slices/cartSlice";
import "./CartItems.scss";

export default function CartItems({ id, title, price, sizes, count, number }) {
  const dispatch = useDispatch();

  const handeleDelete = () => {
    dispatch(removeProduct(id));
  };

  return (
    <tbody>
      <tr className="unit">
        <td scope="row">{number}</td>
        <td>
          <Link to={`/catalog/${id}`} className="link_to_product">
            {title}
          </Link>
        </td>
        <td>{sizes}</td>
        <td>{count}</td>
        <td>{price}</td>
        <td>{price * count}</td>
        <td>
          <button className="cart_btn-delete" onClick={handeleDelete}>
            Удалить
          </button>
        </td>
      </tr>
    </tbody>
  );
}
