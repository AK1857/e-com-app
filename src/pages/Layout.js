import React, { useState } from "react";
import Header from "../components/Header";
import Products from "./Home";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  
    const selectCategory = (category) => {
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // remove if already selected
          : [...prev, category] // add if not selected
      );
    };
  
    return (
      <div className="layout">
        <div className="content">
          <Sidebar
            onCategoryToggle={selectCategory}
            selectedCategories={selectedCategories}
          />
          <Products selectedCategories={selectedCategories} />
        </div>
      </div>
    );
  };
  
  export default Layout;