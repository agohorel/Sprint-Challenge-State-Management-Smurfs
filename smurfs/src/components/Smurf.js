import React from "react";

export const Smurf = ({ smurf }) => {
  return (
    <>
      <h2>{smurf.name}</h2>
      <h3>{smurf.age} years old</h3>
      <h3>{smurf.height} tall</h3>
    </>
  );
};
