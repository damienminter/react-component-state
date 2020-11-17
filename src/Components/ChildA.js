import React from "react";
import GrandchildA from "./GrandchildA";

export default function ChildA({ children }) {
  const [change, setChange] = React.useState("");

  function handleChange(e) {
    setChange(e.target.value);
  }

  return (
    <div>
      <div className="container">
        <h1>This is a Child</h1>
        <p>{change}</p>
      </div>
      <GrandchildA change={change} handleChange={handleChange} />
      {children}
    </div>
  );
}
