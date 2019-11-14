const React = require("React");

const PageSlice = props => {
  return (
    <div className="slice">
      <div className="sliceText">{props.children}</div>
      <img className="sliceImage" src={props.imgSrc} alt={props.imgAlt} />
    </div>
  );
};

module.exports = PageSlice;
