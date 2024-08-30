import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img/header-logo.png";
import NavMenu from "./NavLinks/NavMenu";
import { CartBtn } from "./HeaderBtn/CartBtn";
import { useEffect, useRef, useState } from "react";
import { Notification } from "./Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValueHeader } from "../../redux/slices/filterSlice";
import "./Header.scss";

function Header() {
  const [InputBtn, setInputBtn] = useState(false);
  const [searhHeader, setSearchHeader] = useState("");
  const InputSearchRef = useRef();
  const searchState = useSelector((state) => state.filter.searchValueHeader);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();


  const handelerSwitch = () => {
    setInputBtn(true);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        InputBtn &&
        InputSearchRef.current &&
        !InputSearchRef.current.contains(e.target)
      ) {
        setInputBtn(false);
      }
    };
    document.body.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.body.removeEventListener("click", checkIfClickedOutside);
    };
  }, [InputBtn]);

  const handleClick = () => {
    if (searhHeader) {
      navigate("catalog", { replace: true });
    }
  };

  const handlerSearch = (e) => {
    setSearchHeader(e.target.value);
  };

  useEffect(() => {
    dispatch(setSearchValueHeader(searhHeader));
    setSearchHeader(searchState);
  }, [searchState, searhHeader]);

  console.log(searchState);

  return (
    <header className="header">
      <div className="wrapper">
        <Link to="\">
          <img src={logo} alt="logo" className="img_logo" />
        </Link>
        <NavMenu />
        <div ref={InputSearchRef} className="search_container-header">
          <div onClick={handelerSwitch}>
            <svg
              className={`${InputBtn ? "inInput" : ""} `}
              width="26px"
              height="26px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#a2afbe"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {InputBtn && (
            <div className="input-container">
              <form>
                <button
                  className="hidden-btn"
                  onClick={handleClick}
                  type="button"
                ></button>
                <input
                  type="text"
                  placeholder="Поиск"
                  value={searhHeader || ""}
                  className="search-header"
                  onChange={handlerSearch}
                />
              </form>
            </div>
          )}
        </div>
        <div className="cart_container">
          <Link to="/cart">
            <CartBtn />
          </Link>
          <Notification />
        </div>
      </div>
    </header>
  );
}

export default Header;
