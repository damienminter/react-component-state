import React from "react";

export default function GrandchildA({ change, handleChange }) {
  return (
    <div>
      <div className="container">
        <h1>This is a Grandchild</h1>
        <input type="text" value={change} onChange={handleChange}></input>
      </div>
    </div>
  );
}
