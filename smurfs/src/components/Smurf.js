import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { deleteSmurf } from "../actions/deleteSmurf";
import { editSmurf } from "../actions/editSmurf";

const Smurf = ({ smurf, deleteSmurf, editSmurf, smurfFormData }) => {
  return (
    <SmurfCard>
      <h2>{smurf.name}</h2>
      <h3>{smurf.age} years old</h3>
      <h3>{smurf.height} tall</h3>
      <Button onClick={() => deleteSmurf(smurf.id)}>delete</Button>
      <Button onClick={() => editSmurf(smurf.id, smurfFormData)}>edit</Button>
    </SmurfCard>
  );
};

const mapStateToProps = state => {
  return {
    smurfFormData: state.smurfFormData
  };
};

export default connect(mapStateToProps, { deleteSmurf, editSmurf })(Smurf);

const SmurfCard = styled.div`
  width: calc(33% - 6rem);
  background-color: #2c2c2c;
  padding: 1rem;
  margin: 2rem;
  color: #eee;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  @media (max-width: 1100px) {
    width: calc(50% - 6rem);
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Button = styled.button`
  border: none;
  background-color: #6c6c6c;
  padding: 0.5rem;
  color: #fff;
  transition: 0.2s ease-out all;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  :hover {
    cursor: pointer;
    background-color: #3c3c3c;
    color: #eee;
  }

  :not(:last-child) {
    margin-right: 2rem;
  }
`;
