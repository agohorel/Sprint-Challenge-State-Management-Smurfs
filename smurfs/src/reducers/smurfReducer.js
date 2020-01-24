import {
  LOAD_SMURF,
  LOAD_SMURF_SUCCESS,
  LOAD_SMURF_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  EDIT_SMURF,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE,
  UPDATE_SMURF_FORM
} from "../actions/types";

const initialState = {
  loadingSmurf: false,
  loadingSmurfError: "",
  postingSmurf: false,
  postingSmurfError: "",
  deletingSmurf: false,
  deletingSmurfError: "",
  editingSmurf: false,
  editingSmurfError: "",
  smurfs: [],
  smurfFormData: {}
};

export const smurfReducer = (state = initialState, action) => {
  const { type, payload } = action;

  console.log(type, payload);

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
    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: true
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: payload
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        deletingSmurfError: payload
      };
    case EDIT_SMURF:
      return {
        ...state,
        editingSmurf: true
      };
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        editingSmurf: false,
        smurfs: payload
      };
    case EDIT_SMURF_FAILURE:
      return {
        ...state,
        editingSmurf: false,
        editingSmurfError: payload
      };
    case UPDATE_SMURF_FORM:
      return {
        ...state,
        smurfFormData: payload
      };
    default:
      return state;
  }
};
