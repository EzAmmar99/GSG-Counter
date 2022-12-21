import React from "react";

const Total = (props) => {
  console.log('props :>> ', props);
  return <div className="contatiner">Total: {props.total}</div>;
};

export default Total;
