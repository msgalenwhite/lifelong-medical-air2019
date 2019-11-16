import React from "react";

export default ({ data }) => {
  return (
    <>
      <h1>Hi from the site!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
