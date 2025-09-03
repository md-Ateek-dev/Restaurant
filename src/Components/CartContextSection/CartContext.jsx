import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();
const CartContext = createContext({
  cartItems: [], // ✅ default empty array
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCart] = useState([]);

  // ✅ Mount hone par localStorage se data load karna
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // ✅ Jab bhi cart update ho, localStorage me save karna
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (dish, action = "add") => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === dish.id);

      if (action === "add") {
        if (existing) {
          return prev.map((item) =>
            item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prev, { ...dish, quantity: 1 }];
        }
      }

      if (action === "increase") {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      if (action === "decrease") {
        return prev
          .map((item) =>
            item.id === dish.id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0);
      }

      if (action === "remove") {
        return prev.filter((item) => item.id !== dish.id);
      }

      return prev;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Total items count
  const getTotalItems = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalItems }}>
        
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
