import { actionTypes } from "../../types/actionTypes";

const productDetailiState = {
  productDetailItems: [],
};

export const productDetailReducer = (state = productDetailiState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_DETAIL:
      const { data, productID } = action.payload;
      const singleItem = data.filter((item) => item.id === parseInt(productID));
      return {
        ...state,
        productDetailItems: singleItem, //[{...}]
      };
    default:
      return state;
  }
};
