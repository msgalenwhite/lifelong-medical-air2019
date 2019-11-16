import React from "react";

const NoImageSlice = props => {
  return (
    <div className="slice">
      <div className="sliceTextNoImage">{props.children}</div>
    </div>
  );
};

export default NoImageSlice;
