import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useShoppingCart = () => {
  const COOKIE_NAME = "shopping_cart";

  const [cart, setCart] = useState(() => {
    const storedCart = Cookies.get(COOKIE_NAME);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    const storedCart = Cookies.get(COOKIE_NAME);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    Cookies.set(COOKIE_NAME, JSON.stringify(cart), { expires: 7, path: "/" });
  }, [cart]);

  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prevCart, { ...item, quantity }];
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
};

export default useShoppingCart;