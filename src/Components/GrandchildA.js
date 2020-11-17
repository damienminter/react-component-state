import React from "react";
import GreatGrandchildA from "./GreatGrandchildA";

export default function GrandchildA(props) {
  const { state, handleClick } = props;

  return (
    <div>
      <div className="container">
        <h1>This is a Grandchild</h1>
        <h1>Grandchild state = {state}</h1>
        <button type="click" onClick={() => handleClick("Grandchild")}>
          Update State
        </button>
      </div>
      <GreatGrandchildA />
    </div>
  );
}
