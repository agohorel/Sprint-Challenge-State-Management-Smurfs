import axios from "axios";
import { EDIT_SMURF, EDIT_SMURF_SUCCESS, EDIT_SMURF_FAILURE } from "./types";

export const editSmurf = (id, data) => dispatch => {
  dispatch({ type: EDIT_SMURF });

  try {
    setTimeout(async () => {
      const res = await axios.put(`http://localhost:3333/smurfs/${id}`, data);
      dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data });
    }, 1000);
  } catch (err) {
    console.error(err);
    dispatch({ type: EDIT_SMURF_FAILURE, payload: err });
  }
};
