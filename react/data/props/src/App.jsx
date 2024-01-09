import { useState } from "react";
import "./App.scss";
import StudentList from "./containers/StudentList";
import FlexWrapper from "./containers/FlexWrapper/FlexWrapper";

function App() {
  return (
    <>
      <h1>React Props</h1>
      <FlexWrapper direction="row">
        <StudentList />
      </FlexWrapper>

      <FlexWrapper direction="column">
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </FlexWrapper>
    </>
  );
}

export default App;
