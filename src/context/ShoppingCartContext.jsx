import React, { createContext, useContext } from "react";
import useShoppingCart from "../hooks/useShoppingCart";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const cartMethods = useShoppingCart();

  return (
    <ShoppingCartContext.Provider value={cartMethods}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("useShoppingCartContext must be used within a ShoppingCartProvider");
  }
  return context;
};
