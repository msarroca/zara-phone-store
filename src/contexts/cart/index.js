"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  getCartFromStorage,
  setCartToStorage,
  clearCartStorage,
} from "@/utils";

const CartContext = createContext(undefined);

const getProductIdentifier = (product) => {
  const capacityId = product.selectedCapacity?.id ?? "none";
  const colorId = product.selectedColor?.id ?? "none";
  return `${product.id}-${product.model}-${capacityId}-${colorId}`;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromStorage);

  useEffect(() => {
    setCartToStorage(cart);
  }, [cart]);

  const addToCart = useCallback((newProduct) => {
    const newProductIdentifier = getProductIdentifier(newProduct);

    setCart((currentCart) => {
      const isInCart = currentCart.some(
        (item) => getProductIdentifier(item) === newProductIdentifier
      );

      if (!isInCart) {
        return [...currentCart, newProduct];
      }
      return currentCart;
    });
  }, []);

  const removeFromCart = useCallback((removedProduct) => {
    const removedProductIdentifier = getProductIdentifier(removedProduct);

    setCart((currentCart) => {
      return currentCart.filter(
        (item) => getProductIdentifier(item) !== removedProductIdentifier
      );
    });
  }, []);

  const clearCart = useCallback(() => {
    clearCartStorage();
    setCart([]);
  }, []);

  const { cartSize, totalPrice } = useMemo(() => {
    const size = cart.length;
    const price = cart.reduce(
      (total, item) => total + (item.selectedCapacity?.price ?? 0),
      0
    );
    return { cartSize: size, totalPrice: price };
  }, [cart]);

  const contextValue = useMemo(
    () => ({
      cart,
      cartSize,
      totalPrice,
      addToCart,
      removeFromCart,
      clearCart,
    }),
    [cart, cartSize, totalPrice, addToCart, removeFromCart, clearCart]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
