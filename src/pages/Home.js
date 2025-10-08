import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = ({ selectedCategories }) => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  
    const filteredProducts =
      selectedCategories.length > 0
        ? products.filter((p) => selectedCategories.includes(p.category))
        : products;
  
    return (
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };
  
  export default Products;