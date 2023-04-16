import { actionTypes } from "../../types/actionTypes";

export const openModal = (data) => {
  return {
    type: actionTypes.OPEN_MODAL,
    payload: data, // true
  };
};

export const closeModal = (data) => {
  return {
    type: actionTypes.CLOSE_MODAL,
    payload: data, // false
  };
};
