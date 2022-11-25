import { actionTypes } from "../../types/actionTypes";

const productListiState = {
  productList: [],
};

export const productListReducer = (state = productListiState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
};
