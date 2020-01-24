import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions/addSmurf";

const Form = ({ addSmurf }) => {
  const [formData, setFormData] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addSmurf(formData);
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

export default connect(undefined, { addSmurf })(Form);
