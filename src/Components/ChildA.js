import React from "react";
import GrandchildA from "./GrandchildA";

export default function ChildA(props) {
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
      {/* // Use spread operator to add change and handleChange to props */}
      <GrandchildA {...{ change, handleChange, ...props }} />
    </div>
  );
}
