"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const CART_KEY = "cart";

  const [cart, setCart] = useState([]);

  const getCart = () => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  const setCartStorage = (newCart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(newCart));
  };

  useEffect(() => {
    setCart(getCart());
  }, []);

  const addToCart = (newProduct) => {
    const currentCart = getCart();

    const { id, model, selectedCapacity, selectedColor } = newProduct;

    const isInCart = currentCart.some(
      (item) =>
        item.id === id &&
        item.model === model &&
        item.selectedCapacity?.id === selectedCapacity?.id &&
        item.selectedColor?.id === selectedColor?.id
    );

    if (!isInCart) {
      const updatedCart = [...currentCart, newProduct];
      setCartStorage(updatedCart);
      setCart(updatedCart);
    }
  };

  const removeFromCart = (removedProduct) => {
    const currentCart = getCart();
    const { id, model, selectedCapacity, selectedColor } = removedProduct;

    const updatedCart = currentCart.filter(
      (item) =>
        !(
          item.id === id &&
          item.model === model &&
          item.selectedCapacity?.id === selectedCapacity?.id &&
          item.selectedColor?.id === selectedColor?.id
        )
    );

    setCartStorage(updatedCart);
    setCart(updatedCart);
  };

  const clearCart = () => {
    localStorage.removeItem(CART_KEY);
    setCart([]);
  };

  const cartSize = cart.length;
  const totalPrice = cart.reduce(
    (total, { selectedCapacity }) => total + (selectedCapacity?.price ?? 0),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartSize,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart debe usarse dentro de un CartProvider");
  return context;
};
