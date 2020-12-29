import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Graph } from "./Graph";

function App() {
  const graph = new Graph({
    a: ['b', 'c', 'e'],
    b: ['d'],
    c: ['a','c'],
    d: ['e'],
    e: ['a','c','b']
  });
  console.log(graph);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1
          style={{
            color: "black",
            marginTop: "100px",
          }}
        >
          Check your console for Bitonic Search in TypeScript... visit{" "}
          <a href="https://www.gabruism.com">Gabruism</a>
        </h1>
      </header>
    </div>
  );
}

export default App;
