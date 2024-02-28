import React from "react";
import "./App.css";
import SafeDisplay from "./components/SafeDisplay";
import Keypad from "./components/Keypad";

function App() {
  return (
    <div className="app">
      <h1>Hotel Safe App</h1>
      <div className="layout">
        <Keypad />
        <SafeDisplay />
      </div>
    </div>
  );
}

export default App;
