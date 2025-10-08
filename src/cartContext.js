
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

    // Function to add a product to the cart
  const addToCart = (product) => {
   setCartItems((currentCartItems) => {
    const foundItem = currentCartItems.find((item) => item.id === product.id);

    if (foundItem) {
      // Increment quantity
      let updatedCart= currentCartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
        return updatedCart;
    } else {
      // Add new product with quantity 1
      return [...currentCartItems, { ...product, quantity: 1 }];
    }
  });
  };

    // Function to remove one quantity of a product from the cart
  const removeFromCart = (id) => {
    setCartItems((currentCartItems) =>
    currentCartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)
  );
  };


  let totalItems = 0;
  let totalValue = 0;
  
  for (let i = 0; i < cartItems.length; i++) {
    totalItems += cartItems[i].quantity;
    totalValue += cartItems[i].price * cartItems[i].quantity;
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalValue, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
