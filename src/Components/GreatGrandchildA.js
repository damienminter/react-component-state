import React from "react";

export default function GreatGrandchildA(props) {
  const { state, handleClick } = props;
  return (
    <div>
      <div className="container">
        <h1>This is great GreatGrandchild A</h1>
        <h1>GreatGrandchild state = {state}</h1>
        <button type="click" onClick={() => handleClick("GreatGrandchild")}>
          Update State
        </button>
      </div>
    </div>
  );
}
