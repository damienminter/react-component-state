import React from "react";
import GrandchildA from "./GrandchildA";

export default function ChildA(props) {
  return (
    <div>
      <div className="container">
        <h1>This is a Child</h1>
      </div>
      <GrandchildA {...props} />
    </div>
  );
}
