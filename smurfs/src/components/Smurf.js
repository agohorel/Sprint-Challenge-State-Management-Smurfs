import React from "react";
import { connect } from "react-redux";

import { deleteSmurf } from "../actions/deleteSmurf";
import { editSmurf } from "../actions/editSmurf";

const Smurf = ({ smurf, deleteSmurf, editSmurf, smurfFormData }) => {
  const removeSmurf = id => {
    deleteSmurf(id);
  };

  const updateSmurf = (id, data) => {
    editSmurf(id, data);
  };

  return (
    <>
      <h2>{smurf.name}</h2>
      <h3>{smurf.age} years old</h3>
      <h3>{smurf.height} tall</h3>
      <button onClick={() => removeSmurf(smurf.id)}>delete</button>
      <button onClick={() => editSmurf(smurf.id, smurfFormData)}>edit</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfFormData: state.smurfFormData
  };
};

export default connect(mapStateToProps, { deleteSmurf, editSmurf })(Smurf);
