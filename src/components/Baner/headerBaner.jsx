import Baner from "../../assets/img/banner.jpg";
import "./Banner.scss";

export default function HeaderBanner() {
  return (
    <section className="banner-container">
      <img src={Baner} alt="К весне готовы" />
      <div className="blur">
        <h2>К весне готовы!</h2>
      </div>
    </section>
  );
}
