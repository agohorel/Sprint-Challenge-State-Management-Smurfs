import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

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
    <StyledForm>
      <label htmlFor="name">name</label>
      <input id="name" onChange={handleChange}></input>
      <label htmlFor="age">age</label>
      <input id="age" onChange={handleChange}></input>
      <label htmlFor="height">height</label>
      <input id="height" onChange={handleChange}></input>
      <button onClick={handleSubmit}>submit</button>
    </StyledForm>
  );
};

const mapStateToProps = state => {
  return {
    smurfFormData: state.smurfFormData
  };
};

export default connect(mapStateToProps, { addSmurf, updateSmurfForm })(Form);

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #1c1c1c;
  padding: 0.5rem 20%;
  min-width: 500px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

  label {
    color: #efefef;
  }

  input {
    border: none;
    background-color: #9c9c9c;
    color: #1c1c1c;
    padding: 0.25rem;
    font-family: "IBM Plex Mono", sans-serif;
    width: 50%;
    border-radius: 3px;
  }

  button {
    border: none;
    background-color: #3c3c3c;
    padding: 0.5rem;
    color: #fff;
    transition: 0.2s ease-out all;
    border-radius: 3px;

    :hover {
      cursor: pointer;
      background-color: #2c2c2c;
      color: #eee;
    }
  }

  * {
    margin: 0.25rem;
  }
`;
