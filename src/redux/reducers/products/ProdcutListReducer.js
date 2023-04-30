import { actionTypes } from "../../types/actionTypes";

const initialState = {
  productList: [],
  filteredData: [],
  checkedID: 1,
  isLoading: false,
  error: null,
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_PRODUCT_LIST:
    //   return {
    //     ...state,
    //     productList: action.payload, //array 25
    //   };

    case actionTypes.FETCH_PRODUCTLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actionTypes.FETCH_PRODUCTLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        productList: action.payload, //data
      };

    case actionTypes.FETCH_PRODUCTLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload, // error.message
      };

    case actionTypes.SEND_FILTERS:
      // console.log(state.productList);
      const productList = state.productList;
      const { id, name } = action.payload;
      console.log(id, name);
      let x = [];
      x = productList.filter(
        (item) =>
          item.category === name || item.size === name || item.packOf === name
      );
      x = name === "cleanses" ? { error: `${name} NOT FOUND` } : x;
      return {
        ...state,
        filteredData: x,
        checkedID: id,
      };
    default:
      return state;
  }
};
