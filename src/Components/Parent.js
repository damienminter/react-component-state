import React, { useState } from "react";
import ChildA from "./ChildA";

// Create React Context
export const Context = React.createContext();

export default function Parent() {
  const [state, setState] = useState("GoodBye");
  const value = { state, setState };

  function handleClick() {
    setState("State Updated");
    console.log("clicked");
  }

  return (
    <Context.Provider value={value}>
      <div className="container">
        <h1>This is a parent</h1>
        <h1>Parent state {state}</h1>
        <button type="click" onClick={handleClick}>
          Update State
        </button>
      </div>
      <ChildA />
    </Context.Provider>
  );
}
