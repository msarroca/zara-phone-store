const CART_KEY = 'cart';

export const getCartFromStorage = () => {
  try {
    if (typeof window === 'undefined') return [];

    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    throw new Error('Error getting card ');
  }
};

export const setCartToStorage = (newCart) => {
  try {
    if (typeof window === 'undefined') return;
    localStorage.setItem(CART_KEY, JSON.stringify(newCart));
  } catch (error) {
    throw new Error('Error setting card ');
  }
};
