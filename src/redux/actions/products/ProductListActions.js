import { actionTypes } from "../../types/actionTypes";

// export const fetchProductList = (data) => {
//   return {
//     type: actionTypes.FETCH_PRODUCT_LIST,
//     payload: data,
//   };
// };

export const fetchProductListRequest = () => {
  return {
    type: actionTypes.FETCH_PRODUCTLIST_REQUEST,
  };
};
export const fetchProductListSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTLIST_SUCCESS,
    payload: data,
  };
};
export const fetchProductListFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTLIST_FAILURE,
    payload: error,
  };
};

export const getProductListApi = () => {
  // const apikey = process.env.REACT_APP_API_KEY;
  // const response = await fetch(
  //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  // );
  return async (dispatch) => {
    try {
      dispatch(fetchProductListRequest());
      const response = await fetch(`http://localhost:8000/shop`);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchProductListSuccess(data.products));
      } else {
        dispatch(fetchProductListSuccess([]));
        throw new Error("Product List");
      }
    } catch (error) {
      dispatch(fetchProductListFailure(error.message));
    }
  };
};
