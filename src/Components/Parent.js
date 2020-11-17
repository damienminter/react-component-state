import React, { useState } from "react";
import ChildA from "./ChildA";

export default function Parent() {
  const [state, setState] = useState("");

  function handleClick() {
    setState("State Updated");
    console.log("clicked");
  }

  return (
    <div>
      <div className="container">
        <h1>This is a parent</h1>
        <h1>Parent state {state}</h1>
      </div>
      <ChildA state={state} handleClick={handleClick} />
    </div>
  );
}
