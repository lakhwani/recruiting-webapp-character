import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";
import Attribute from "./components/Attribute.js";
import AttributeList from "./components/AttributeList.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <AttributeList></AttributeList>
      </section>
    </div>
  );
}

export default App;
