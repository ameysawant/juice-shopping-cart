import { actionTypes } from "../../types/actionTypes";

// export const fetchTeam = (data) => {
//   return {
//     type: actionTypes.FETCH_TEAM,
//     payload: data,
//   };
// };

export const fetchTeamRequest = () => {
  return {
    type: actionTypes.FETCH_TEAM_REQUEST,
  };
};
export const fetchTeamSuccess = (data) => {
  return {
    type: actionTypes.FETCH_TEAM_SUCCESS,
    payload: data,
  };
};
export const fetchTeamFailure = (error) => {
  return {
    type: actionTypes.FETCH_TEAM_FAILURE,
    payload: error,
  };
};
