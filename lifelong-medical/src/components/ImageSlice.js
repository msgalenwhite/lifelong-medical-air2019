import React from "react";

const ImageSlice = props => {
  return (
    <div className="slice">
      <div className="sliceText">{props.children}</div>
      <img className="sliceImage" src={props.imgSrc} alt={props.imgAlt} />
    </div>
  );
};

export default ImageSlice;
