import React from "react";
import { connect } from "react-redux";

import { deleteSmurf } from "../actions/deleteSmurf";

const Smurf = ({ smurf, deleteSmurf }) => {
  const removeSmurf = id => {
    deleteSmurf(id);
  };

  return (
    <>
      <h2>{smurf.name}</h2>
      <h3>{smurf.age} years old</h3>
      <h3>{smurf.height} tall</h3>
      <button onClick={() => removeSmurf(smurf.id)}>delete</button>
    </>
  );
};

export default connect(undefined, { deleteSmurf })(Smurf);
