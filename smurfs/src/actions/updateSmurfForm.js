import { UPDATE_SMURF_FORM } from "./types";

export const updateSmurfForm = input => dispatch => {
  dispatch({ type: UPDATE_SMURF_FORM, payload: input });
};
