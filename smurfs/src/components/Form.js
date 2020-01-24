import React from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions/addSmurf";
import { updateSmurfForm } from "../actions/updateSmurfForm";

const Form = ({ addSmurf, updateSmurfForm, smurfFormData }) => {
  const handleChange = e => {
    updateSmurfForm({ ...smurfFormData, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addSmurf(smurfFormData);
  };

  return (
    <form>
      <label htmlFor="name">name</label>
      <input id="name" onChange={handleChange}></input>
      <label htmlFor="age">age</label>
      <input id="age" onChange={handleChange}></input>
      <label htmlFor="height">height</label>
      <input id="height" onChange={handleChange}></input>
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    smurfFormData: state.smurfFormData
  };
};

export default connect(mapStateToProps, { addSmurf, updateSmurfForm })(Form);
