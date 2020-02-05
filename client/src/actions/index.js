import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

// not positive if will be using this??
//
// export const changeLogin = shouldBeLoggedIn => {
//   return {
//     type: "change_auth",
//     payload: shouldBeLoggedIn
//   };
// };

export const fetchUser = () => async dispatch => {
  let res = await axios.get("/api/current_user"); // get retrieves data from a server
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token); // post asks a server to accept data
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
