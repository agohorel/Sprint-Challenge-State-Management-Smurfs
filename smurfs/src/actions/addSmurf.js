import axios from "axios";
import { ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE } from "./types";

export const addSmurf = smurf => async dispatch => {
  dispatch({ type: ADD_SMURF });

  try {
    const res = await axios.post("http://localhost:3333/smurfs", smurf);
    console.log(res);
    dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err);
    dispatch({ type: ADD_SMURF_FAILURE, payload: err });
  }
};
