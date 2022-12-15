import { actionTypes } from "../../types/actionTypes";

const cartiState = {
  cartItems: [],
};

export const cartReducer = (state = cartiState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const obj = action.payload;
      let x = [];
      x = state.cartItems.slice().concat(obj);
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
    default:
      return state;
  }
};
