import { actionTypes } from "../../types/actionTypes";

// export const fetchProductDetail = (data) => {
//   return {
//     type: actionTypes.FETCH_PRODUCT_DETAIL,
//     payload: data,
//   };
// };

export const fetchProductDetailRequest = () => {
  return {
    type: actionTypes.FETCH_PRODUCTDETAIL_REQUEST,
  };
};
export const fetchProductDetailSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTDETAIL_SUCCESS,
    payload: data,
  };
};
export const fetchProductDetailFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTDETAIL_FAILURE,
    payload: error,
  };
};

export const getProductDetailApi = (productID) => {
  // const apikey = process.env.REACT_APP_API_KEY;
  // const response = await fetch(
  //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  // );
  return async (dispatch) => {
    try {
      dispatch(fetchProductDetailRequest());
      const response = await fetch(`http://localhost:8000/shop`);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchProductDetailSuccess({ data: data.products, productID }));
      } else {
        dispatch(fetchProductDetailSuccess([]));
        throw new Error("Product Detail");
      }
    } catch (error) {
      dispatch(fetchProductDetailFailure(error.message));
    }
  };
};
