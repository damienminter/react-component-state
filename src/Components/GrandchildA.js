import React from "react";
import GreatGrandchildA from "./GreatGrandchildA";

export default function GrandchildA(props) {
  return (
    <div>
      <div className="container">
        <h1>This is a Grandchild</h1>
      </div>
      <GreatGrandchildA {...props} />
    </div>
  );
}
