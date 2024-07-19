import React from "react";
import "./App.css";
import AttributeList from "./components/AttributeList";
import AttributeProvider from "./context/AttributeContext";

function App() {
  return (
    <AttributeProvider>
      <div className="App">
        <header className="App-header">
          <h1>React Coding Exercise</h1>
        </header>
        <section className="App-section">
          <AttributeList />
        </section>
      </div>
    </AttributeProvider>
  );
}

export default App;
