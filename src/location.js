import React from "react";

const LocationDisplay = ({ latitude }) => {
  var region = latitude > 0 ? "Northern" : "Southern";
  return <div> You are in {region} hemisphere </div>;
};

export default LocationDisplay;
