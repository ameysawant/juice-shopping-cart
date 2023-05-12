import { actionTypes } from "../../types/actionTypes";

const initialState = {
  singleItem: [],
  isLoading: false,
  error: null,
  productID: null,
};

export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_PRODUCT_DETAIL:
    //   const { data, productID } = action.payload;
    //   const singleItem = data.filter((item) => item.id === parseInt(productID));
    //   return {
    //     ...state,
    //     productDetailItems: singleItem, //[{...}]
    //   };

    case actionTypes.FETCH_PRODUCTDETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actionTypes.FETCH_PRODUCTDETAIL_SUCCESS:
      const { data, productID } = action.payload;
      const x = data.filter((item) => item.id === parseInt(productID));
      return {
        ...state,
        isLoading: false,
        error: false,
        singleItem: x, //[{...}]
        productID,
      };

    case actionTypes.FETCH_PRODUCTDETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload, // error.message
      };

    default:
      return state;
  }
};
