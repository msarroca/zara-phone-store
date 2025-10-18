// cartStorage.js

const CART_KEY = "cart";

export const getCartFromStorage = () => {
  try {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error al leer el carrito de localStorage:", error);
    return [];
  }
};

export const setCartToStorage = (newCart) => {
  try {
    if (typeof window === "undefined") return;
    localStorage.setItem(CART_KEY, JSON.stringify(newCart));
  } catch (error) {
    console.error("Error al guardar el carrito en localStorage:", error);
  }
};

export const clearCartStorage = () => {
  try {
    if (typeof window === "undefined") return;
    localStorage.removeItem(CART_KEY);
  } catch (error) {
    console.error("Error al borrar el carrito de localStorage:", error);
  }
};
