import React, { useState } from "react";
import ChildA from "./ChildA";

// Create React Context
export const Context = React.createContext();

export default function Parent() {
  const [state, setState] = useState("None");
  // Set context initial values to be state and function
  const value = { state, handleClick };

  function handleClick(component) {
    setState(component);
    console.log("clicked");
  }

  return (
    // Wrap compoents in Context using provider and initialise
    <Context.Provider value={value}>
      <div className="container">
        <h1>This is a parent</h1>
        <h1>Parent state = {state}</h1>
        <button type="click" onClick={() => handleClick("Parent")}>
          Update State
        </button>
      </div>
      <ChildA />
    </Context.Provider>
  );
}
