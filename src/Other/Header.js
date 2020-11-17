import React from "react";
import logo from "../logo.svg";
import "../App.css";

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <p>React Component State</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
