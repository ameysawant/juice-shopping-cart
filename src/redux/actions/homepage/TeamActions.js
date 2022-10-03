import { actionTypes } from "../../types/actionTypes";

export const fetchTeam = (data) => {
  return {
    type: actionTypes.FETCH_TEAM,
    payload: data,
  };
};
