import { useSelector } from "react-redux";
import "./Notification.scss";

export const Notification = () => {
  const quantity = useSelector((state) => state.cart.item);
  console.log(quantity);
  const calcQuantity = (quantity) => {
    return quantity.reduce((sum, obj) => obj.count + sum, 0);
  };

  if (calcQuantity(quantity) === 0) {
    return null;
  } else
    return (
      <div className="notification_bkg">
        <span>{calcQuantity(quantity)}</span>
      </div>
    );
};
