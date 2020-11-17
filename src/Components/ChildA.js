import React from "react";
import GrandchildA from "./GrandchildA";

export default function ChildA(props) {
  const [change, setChange] = React.useState("");
  // Use spread operator to add change and handleChange to props
  props = { change, handleChange, ...props };
  console.log(props); // change, handleChange, state, handleClick

  function handleChange(e) {
    setChange(e.target.value);
  }

  return (
    <div>
      <div className="container">
        <h1>This is a Child</h1>
        <p>{change}</p>
      </div>
      <GrandchildA {...props} />
    </div>
  );
}
