import axios from "axios";
import { ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE } from "./types";

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  try {
    setTimeout(async () => {
      const res = await axios.post("http://localhost:3333/smurfs", smurf);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    }, 1000);
  } catch (err) {
    console.error(err);
    dispatch({ type: ADD_SMURF_FAILURE, payload: err });
  }
};
