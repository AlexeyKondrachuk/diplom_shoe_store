import { useState, useEffect } from "react";
import "./FilterMenu.scss";

function FilterMenu({ value, onChangeCategory }) {
  const [categoryId, setCategoryId] = useState([]);

  const filter = [
    {
      id: 0,
      title: "Все",
    },
  ];

  useEffect(() => {
    fetch("http://localhost:7070/api/categories")
      .then((responce) => responce.json())
      .then((category) => setCategoryId(category));
  }, []);

  const allCategory = [...filter, ...categoryId];

  return (
    <div className="btn_filter-container">
      {allCategory.map((item, i) => (
        <button
          key={i}
          onClick={() => onChangeCategory(item.id)}
          className={value === item.id ? "menu_filter-active" : "menu_filter"}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

export default FilterMenu;
