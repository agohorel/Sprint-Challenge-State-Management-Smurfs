import {
  LOAD_SMURF,
  LOAD_SMURF_SUCCESS,
  LOAD_SMURF_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from "../actions/types";

const initialState = {
  loadingSmurf: false,
  loadingSmurfError: "",
  postingSmurf: false,
  postingSmurfError: "",
  smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_SMURF:
      return {
        ...state,
        loadingSmurf: true
      };
    case LOAD_SMURF_SUCCESS:
      return {
        ...state,
        loadingSmurf: false,
        smurfs: payload
      };
    case LOAD_SMURF_FAILURE:
      return {
        ...state,
        loading: false,
        loadingSmurfError: payload
      };
    case ADD_SMURF:
      return {
        ...state,
        postingSmurf: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        postingSmurf: false,
        smurfs: payload
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        postingSmurf: false,
        postingSmurfError: payload
      };
    default:
      return state;
  }
};
