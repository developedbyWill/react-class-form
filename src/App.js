import React from "react";
import "./App.css";
import ClassForm from "./components/ClassForm";
import FunctionalForm from "./components/FunctionalForm";

function App() {
  return (
    <div className="App">
      <h1>React Forms</h1>
      <h2>Class Form</h2>
      <ClassForm />
      <hr />
      <h2>Functional Form</h2>
      <FunctionalForm />
    </div>
  );
}

export default App;
