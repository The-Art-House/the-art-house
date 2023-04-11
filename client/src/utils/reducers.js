import createId from "./createId";

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
        const newID = createId();
        const newItem = {...action.item, id: newID};
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
        let total = 0;
        state.items.forEach((item) => {
            total += item.price * item.quantity;
        });
        return {
            ...state,
            total: total,
        };
    }
    default: {
      return state;
    }
  }
};
