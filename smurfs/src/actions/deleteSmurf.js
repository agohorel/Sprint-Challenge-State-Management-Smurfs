import axios from "axios";
import {
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from "./types";

export const deleteSmurf = id => async dispatch => {
  dispatch({ type: DELETE_SMURF });
  try {
    const res = await axios.delete(`http://localhost:3333/smurfs/${id}`);
    dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_SMURF_FAILURE, payload: err });
  }
};
