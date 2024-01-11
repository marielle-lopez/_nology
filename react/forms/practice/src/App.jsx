import { useState } from "react";
import "./App.css";
import ControlledForm from "./components/Form/ControlledForm";
import RefExample from "./components/Form/RefExample";
import RefForm from "./components/Form/RefForm";

function App() {
  return (
    <>
      <h1>Forms</h1>
      {/* <ControlledForm /> */}
      {/* <RefExample /> */}
      <RefForm />
    </>
  );
}

export default App;
