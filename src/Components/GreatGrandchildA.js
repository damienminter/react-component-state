import React, { useContext } from "react";

// Import Context
import { Context } from "../Components/Parent";

export default function GreatGrandchildA() {
  // Destructure Context
  const { state, handleClick } = useContext(Context);
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
