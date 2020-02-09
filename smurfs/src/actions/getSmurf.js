import axios from "axios";
import { LOAD_SMURF, LOAD_SMURF_SUCCESS, LOAD_SMURF_FAILURE } from "./types";

export const getSmurfs = () => dispatch => {
  dispatch({ type: LOAD_SMURF });
  try {
    setTimeout(async () => {
      const res = await axios.get("http://localhost:3333/smurfs");
      dispatch({ type: LOAD_SMURF_SUCCESS, payload: res.data });
    }, 1000);
  } catch (err) {
    console.error(err);
    dispatch({ type: LOAD_SMURF_FAILURE, payload: err });
  }
};
