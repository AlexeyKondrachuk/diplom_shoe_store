import emptyCartImg from "../../../src/assets/img/emptycart.png";
import { Link } from "react-router-dom";
import "./CartEmpty.scss";

export default function CardEmpty() {
  return (
    <div className="container-emptyCard">
      <img src={emptyCartImg} alt="Empty card" className="img-card_empty" />
      <h3>
        Корзина пока пуста. Для добавления товаров перейдите в
        <span>
          <Link to="/catalog" className="cartempty-link">
            {" "}
            каталог.
          </Link>
        </span>
      </h3>
    </div>
  );
}
