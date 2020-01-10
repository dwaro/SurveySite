import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // if payload is empty string "" it returns false
    default:
      return state;
  }
}
