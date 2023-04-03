import { actionTypes } from "../../types/actionTypes";

export const addToCart = (data) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: data, //{...}
  };
};

export const removeItem = (data) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: data, //1
  };
};

export const clearAll = (data) => {
  return {
    type: actionTypes.CLEAR_ALL,
    payload: data, //[]
  };
};

export const plusQty = (id) => {
  return {
    type: actionTypes.PLUS_QTY,
    payload: id, //123
  };
};

export const minusQty = (id) => {
  return {
    type: actionTypes.MINUS_QTY,
    payload: id, //123
  };
};
