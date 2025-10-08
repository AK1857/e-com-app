
import React, { useContext } from "react";
import { CartContext } from "../cartContext";

const CartPage = () => {
  const { cartItems, totalValue, totalItems, removeFromCart,addToCart } = useContext(CartContext);
console.log(">>> cartItems",cartItems)
  return (
    <div className="cart-page">
      <h2> Cart Details</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Value: ${totalValue.toFixed(2)}</p>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
         {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>-- Remove One              </button>
              <button onClick={() => addToCart(item)}>  +Add One </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
