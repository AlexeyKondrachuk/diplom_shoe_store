import { NavLink } from "react-router-dom";
import { Links } from "./Links";
import "./NavMenu.scss";

export default function NavMenu() {
  return (
    <nav className="nav">
      <ul className="menu_list">
        {Links.map(({ id, menuitem, path }) => (
          <li key={id} className="nav_item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav_link-active" : "nav_link"
              }
              to={path}
            >
              {menuitem}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
