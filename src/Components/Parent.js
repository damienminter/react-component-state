import React, { useState } from "react";
import ChildA from "./ChildA";
import GreatGrandchildA from "./GreatGrandchildA";

export default function Parent() {
  const [state, setState] = useState("None");

  function handleClick(comp) {
    setState(comp);
    console.log("clicked");
  }

  return (
    <div>
      <div className="container">
        <h1>This is a parent</h1>
        <h1>Parent state = {state}</h1>
        <button type="click" onClick={() => handleClick("Parent")}>
          Update State
        </button>
      </div>
      <ChildA>
        {/* // Here we are wrapping GreatGrandchild component in child component and
        passing props directly - by passing Granchild component*/}
        <GreatGrandchildA
          state={state}
          handleClick={() => handleClick("GreatGrandchild")}
        />
      </ChildA>
    </div>
  );
}
