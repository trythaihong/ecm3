import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
// import { useState } from "react";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setcardItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setcardItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcardItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setcardItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const contactValue = {
    food_list,
    cartItems,
    setcardItem,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contactValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
