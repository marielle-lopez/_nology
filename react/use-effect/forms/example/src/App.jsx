import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ControlledForm from "./components/Form/ControlledForm";
import RefExample from "./components/Form/RefExample";
import RefForm from "./components/Form/RefForm";

function App() {
  return (
    <>
      {/* <ControlledForm /> */}
      {/* <RefExample /> */}
      <RefForm />
    </>
  );
}

export default App;
