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

export const getTeamApi = () => {
  // const apikey = process.env.REACT_APP_API_KEY;
  // const response = await fetch(
  //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  // );
  return async (dispatch) => {
    try {
      dispatch(fetchTeamRequest());
      const response = await fetch(`http://localhost:8000/homepage`);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchTeamSuccess(data.team));
      } else {
        throw new Error("Team");
      }
    } catch (error) {
      dispatch(fetchTeamFailure(error.message));
    }
  };
};
