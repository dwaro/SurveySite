import axios from "axios";
import { FETCH_USER } from "./types";

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
