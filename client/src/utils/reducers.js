import createId from "./createId";
import { useReducer } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, UPDATE_CART_QUANTITY, UPDATE_TOTAL } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // const newID = createId();
      // const newItem = {...action.item, id: newID};
      return {
        ...state,
        items: [...state.items, action.items],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        items: [],
      };
    }
    case "UPDATE_CART_QUANTITY": {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            item.quantity = action.quantity;
          }
          return item;
        }),
      };
    }
    case "UPDATE_TOTAL": {
      return {
        ...state,
        total: action.total,
      };
    }
    default: {
      return state;
    }
  }
};

export function useCartReducer(initialState) {
  return useReducer(reducer, initialState);
}
