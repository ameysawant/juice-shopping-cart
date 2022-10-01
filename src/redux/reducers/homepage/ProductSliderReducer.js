const productSlideriState = {
  productSliderData: [],
};

export const productSliderReducer = (state = productSlideriState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTSLIDER":
      return {
        ...state,
        productSliderData: action.payload,
      };
    default:
      return state;
  }
};
