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
      x = state.cartItems.slice().concat({ ...obj, quantity: 0 });
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
      const id = action.payload;
      const updateCartItems = state.cartItems.map((item) => {
        return item.id === id
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item;
      });
      return {
        ...state,
        cartItems: updateCartItems,
      };

    default:
      return state;
  }
};
