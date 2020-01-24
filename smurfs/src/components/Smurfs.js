import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Smurf from "./Smurf";

const Smurfs = ({ smurfs }) => {
  return (
    <SmurfContainer>
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf}></Smurf>
      ))}
    </SmurfContainer>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, {})(Smurfs);

const SmurfContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`;
