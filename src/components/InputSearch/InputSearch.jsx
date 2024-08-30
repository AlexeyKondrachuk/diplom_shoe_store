import { useDispatch, useSelector } from "react-redux";
import {
  setSearchValue,
  setSearchValueHeader,
} from "../../redux/slices/filterSlice";

import { useEffect, useRef, useState } from "react";
import "./inputSearch.scss";

export default function InputSearch() {
  const [search, setSearch] = useState();
  const [refState, setRefState] = useState(true);
  const searchValueHeader = useSelector(
    (state) => state.filter.searchValueHeader
  );

  const dispatch = useDispatch();

  const inputRef = useRef();

  useEffect(() => {
    const checkInput = (e) => {
      if (inputRef.current.contains(e.target)) {
        setRefState(true);
      } else {
        setRefState(false);
      }
    };
    document.body.addEventListener("click", checkInput);
    return () => {
      document.body.removeEventListener("click", checkInput);
    };
  }, [refState]);

  console.log(refState);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (refState === true) {
      dispatch(setSearchValue(search));
      dispatch(setSearchValueHeader(""));
    } else {
      setSearch(searchValueHeader);
    }
  }, [searchValueHeader, search]);

  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="Поиск"
          className="search"
          value={search || ""}
          onChange={handleSearch}
          ref={inputRef}
        />
      </form>
    </div>
  );
}
