import React from "react";
import { connect } from "react-redux";

import { Smurf } from "./Smurf";

const Smurfs = ({ smurfs }) => {
  return (
    <>
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf}></Smurf>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, {})(Smurfs);
