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
    default:
      return state;
  }
};
