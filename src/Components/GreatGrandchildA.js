import React, { useContext } from "react";
import { Context } from "../Components/Parent";

export default function GreatGrandchildA() {
  const { state, setState } = useContext(Context);
  return (
    <div>
      <div className="container">
        <h1>This is great GreatGrandchild A</h1>
        <h1>GreatGrandchild state {state}</h1>
        <button type="click" onClick={() => setState("New State")}>
          Update State
        </button>
      </div>
    </div>
  );
}
