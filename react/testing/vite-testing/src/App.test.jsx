import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("Setup test", () => {
  it("checks true", () => {
    expect(true).toBe(true);
  });
});

// screen is like document in javascript
// find methods in react testing library
// https://testing-library.com/docs/react-testing-library/cheatsheet
// you can check matchers in jest here https://github.com/testing-library/jest-dom

// describe("App", () => {
//   it("Should render a heading", () => {
//     render(<App />);
//     const heading = screen.getByText("Vite + React");
//     expect(heading).toBeInTheDocument();
//   });
// });
