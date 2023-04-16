// import React, { createContext, useContext } from "react";
// import { useCartReducer } from "./reducers";

// const CartContext = createContext();
// const { Provider } = CartContext;

// const CartProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useCartReducer({
//     items: []
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useCartContext = () => useContext(CartContext);

// export { CartProvider, useCartContext };

import React, { useState, createContext, useContext } from "react";
// import createId from "./createId";
// export const CartContext = React.createContext();

import { useCartReducer } from "./reducers";
const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = (props) => {
  // const [state, dispatch] = useCartReducer({
  //   items: [],
  // });

  const [currentCart, setCurrentCart] = useState([]);

  // const [currentCart, setCurrentCart] = useState({
  //   items: [
  //     {
  //       id: 1,
  //       item: "",
  //       price: 0,
  //       quantity: 0,
  //     },
  //   ],
  // });

  // const addItem = (item) => {
  //   const newID = createId();
  //   const newItem = { ...item, id: newID };
  //   setCurrentCart([...currentCart, newItem]);
  // };
  // const removeItem = (id) => {
  //   const newCart = currentCart.filter((item) => item.id !== id);
  //   setCurrentCart(newCart);
  // };
  // const clearCart = () => {
  //   setCurrentCart([]);
  // };
  // const updateQuantity = (id, quantity) => {
  //   const newCart = currentCart.map((item) => {
  //     if (item.id === id) {
  //       item.quantity = quantity;
  //     }
  //     return item;
  //   });
  //   setCurrentCart(newCart);
  // };
  // const updateTotal = () => {
  //   let total = 0;
  //   currentCart.forEach((item) => {
  //     total += item.price * item.quantity;
  //   });
  //   return total;
  // };

  return <CartContext.Provider value={[currentCart, setCurrentCart]} {...props} />;
};

const useCartContext = () => {
  return useContext(CartContext);
};

// export { CartProvider, useCartContext };
export { CartProvider };
