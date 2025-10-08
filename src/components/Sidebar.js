import React, { useState, useEffect } from "react";

const Sidebar = ({ onCategoryToggle, selectedCategories }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => {
          const isActive = selectedCategories.includes(category);
          return (
            <li
              key={index}
              onClick={() => onCategoryToggle(category)}
              className={isActive ? "active" : ""}
              style={{
                cursor: "pointer",
                padding: "8px",
                background: isActive ? "#f1f3f4" : "transparent",
                borderRadius: "5px",
                marginBottom: "6px",
              }}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;