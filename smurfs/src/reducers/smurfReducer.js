const initialState = {
  loadingSmurf: false,
  loadingSmurfSuccess: false,
  loadingSmurfFailure: false,
  postingSmurf: false,
  postingSmurfSuccess: false,
  postingSmurfFailure: false,
  smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
