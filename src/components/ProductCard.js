import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const handleAddToCart = () => {
        console.log(`${product.title} added to cart!`);
        
      };

      const productDetails = (id) => {
        console.log(`Navigating to details of ${id}`);

      }
    return (
        <Link
        to={`/product/${product.id}/details`}
        state={{ product }}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="product-card" onClick={()=>productDetails(product.id)}>
        <img src={product.image} alt={product.title} className="product-image" />
        <h2 className="product-title">{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </Link>
    );
}
export default ProductCard;