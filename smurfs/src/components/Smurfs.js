import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Smurf from "./Smurf";

const Smurfs = ({ smurfs, loadingSmurf, postingSmurf, editingSmurf }) => {
  if (loadingSmurf || postingSmurf || editingSmurf) {
    return (
      <SmurfContainer>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={300}
          width={300}
          style={{ marginTop: "8rem" }}
        />
      </SmurfContainer>
    );
  } else {
    return (
      <SmurfContainer>
        {smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf}></Smurf>
        ))}
      </SmurfContainer>
    );
  }
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loadingSmurf: state.loadingSmurf,
    postingSmurf: state.postingSmurf,
    editingSmurf: state.editingSmurf
  };
};

export default connect(mapStateToProps, {})(Smurfs);

const SmurfContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;
