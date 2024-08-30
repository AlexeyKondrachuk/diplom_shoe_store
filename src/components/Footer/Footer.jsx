import { Links } from "../Header/NavLinks/Links";
import { Link } from "react-router-dom";

import "./Footer.scss";

import iconPay from "../../assets/img/footer-sprite.png";

function Footer() {
  let footerLinks = Links.slice(1);

  return (
    <footer>
      <div className="footer-container">
        <section className="nav-footer">
          <h3 className="footer-title">Информация</h3>
          <ul className="menu_list">
            {footerLinks.map(({ id, menuitem, path }) => (
              <li key={id} className="nav_item-footer">
                <Link className="footer-link" to={path}>
                  {menuitem}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer-pay">
          <h3 className="footer-title">Принимаем к оплате</h3>
          <div className="image-pay">
            <img src={iconPay} alt="варианты платежных систем" />
          </div>
          <div className="footer-copyright">
            2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
            аксессуаров. Все права защищены.
            <span>Доставка по всей России!</span>
          </div>
        </section>

        <section className="footer-contacts">
          <h3 className="footer-title">Контакты:</h3>
          <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">
            +7 495 79 03 5 03
          </a>
          <span className="footer-contacts-working-hours">
            Ежедневно: с 09-00 до 21-00
          </span>
          <a className="footer-contacts-email" href="mailto:office@bosanoga.ru">
            office@bosanoga.ru
          </a>
          <div className="footer-social-links">
            <div className="twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 
              0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.581 15.997c.304 0 .429-.204.425-.458-.016-.958.356-1.474 1.03-.802.744.744.896 
              1.26 1.801 1.26h1.601c.403 0 .562-.13.562-.334 0-.432-.711-1.194-1.312-1.752-.844-.783-.882-.802-.156-1.744.9-1.169 2.079-2.667 1.037-2.667h-1.991c-.387
               0-.414.217-.551.542-.498 1.173-1.443 2.693-1.803 2.461-.377-.243-.204-1.203-.175-2.63.008-.377.006-.636-.571-.77-.314-.073-.621-.103-.903-.103-1.137 
               0-1.922.477-1.477.56.785.146.711 1.846.527 2.58-.319 1.278-1.518-1.012-2.018-2.152-.12-.275-.155-.488-.586-.488h-1.627c-.247 0-.394.08-.394.258 0 .301
                1.479 3.36 2.892 4.885 1.379 1.487 2.742 1.354 3.689 1.354z"
                />
              </svg>
            </div>
            <div className="vk">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609
               1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797
                6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 
                2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 
                2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
