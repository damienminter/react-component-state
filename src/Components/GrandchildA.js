import React from "react";
import GreatGrandchildA from "./GreatGrandchildA";

// Use rest operator to extract change and handleChange into thsi component and leave state and handleClick for the next component
export default function GrandchildA({ change, handleChange, ...props }) {
  console.log(props); // state, handleClick
  return (
    <div>
      <div className="container">
        <h1>This is a Grandchild</h1>
        <input type="text" value={change} onChange={handleChange}></input>
      </div>
      <GreatGrandchildA {...props} />
    </div>
  );
}
