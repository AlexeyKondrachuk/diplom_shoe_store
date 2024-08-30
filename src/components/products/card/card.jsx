import { Link } from "react-router-dom";
import "./card.scss";

export const Card = ({ id, image, title, price }) => {
  return (
    <li className="card">
      <div className="item-container">
        <img className="img-item" src={image} alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price}</p>
          <Link to={`/catalog/${id}`} className="btn_order">
            Заказать
          </Link>
        </div>
      </div>
    </li>
  );
};
