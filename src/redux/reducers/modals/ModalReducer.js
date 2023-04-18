import { actionTypes } from "../../types/actionTypes";

const modaliState = {
  modalState: false,
};

export const modalReducer = (state = modaliState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        modalState: action.payload, //cart-modal
      };

    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalState: action.payload, //false
      };

    default:
      return state;
  }
};
