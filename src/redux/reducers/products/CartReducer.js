import { actionTypes } from "../../types/actionTypes";

const cartiState = {
  cartItems: [],
};

export const cartReducer = (state = cartiState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const obj = action.payload;
      let x = [];
      // x = state.cartItems.slice().concat(obj);
      x = state.cartItems.slice().concat({ ...obj, quantity: 1 });
      return {
        ...state,
        // cartItems: [...state.cartItems, { ...obj }],
        cartItems: x,
      };

    case actionTypes.REMOVE_ITEM:
      // console.log(action.payload);
      // console.log(state.cartItems);
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case actionTypes.CLEAR_ALL:
      return {
        ...state,
        cartItems: action.payload,
      };

    case actionTypes.PLUS_QTY:
      const plusID = action.payload;
      const plusCartItems = state.cartItems.map((item) => {
        return item.id === plusID
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item;
      });
      return {
        ...state,
        cartItems: plusCartItems,
      };

    case actionTypes.MINUS_QTY:
      const minusID = action.payload;
      const minusCartItems = state.cartItems
        .map((item) => {
          if (item.id === minusID && item.quantity > 0) {
            return { ...item, quantity: (item.quantity || 1) - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
      return {
        ...state,
        cartItems: minusCartItems,
      };

    default:
      return state;
  }
};
