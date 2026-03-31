/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

// Create Cart Context
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart (prevent duplicates)
  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Clear cart (for checkout)
  const clearCart = () => {
    setCart([]);
  };

  // Check if product is in cart
  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const value = {
    cart,
    cartCount: cart.length,
    addToCart,
    removeFromCart,
    clearCart,
    isProductInCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
