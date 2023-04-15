import { actionTypes } from "../../types/actionTypes";

const productListiState = {
  productList: [],
  filteredData: [],
  checkedID: 1,
};

export const productListReducer = (state = productListiState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload, //array 25
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
