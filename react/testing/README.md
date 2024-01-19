# Testing

If Vite testing isn't working properly (Vite test), then use the default testing provided by the non-Vite build.

## Why Do We Test Our code?

To ensure the we're receiving the output we're expecting, and ensuring the code works as it should. It's also to make sure we don't accidentally break something in our application, especially when we're working on projects that involve team collaboration. In addition, to make sure our code is ready to be merged into the main branch. Good docs also serve as documentation.

## Test-Driven Development

You first develop tests, and then write enough code to make a test pass.

With this approach, you have to think about the overall behaviour of your application. It forces you to think about edge cases, and helps gather all the requirements before we start writing any code. In the end, this could lead to more modular code.

## Test Cases

One of the things you can do as a beginner developer is to have tests in your projects.

### CI/CD

Continues Integration / Continues Deployment.

## How to Test in React

- End-to-end testing involves testing the entire flow of the React application.
  - We use Playwright in this course
    - You can also use Test React or Cypress

### Component Testing

- Involves testing a single component
- Mocking is creating fake functions to pass to components to verify if they were called when they were needed to be called

We will be using the React Testing Library.

- https://testing-library.com/docs/react-testing-library/intro/

### What do we test in React?

- Does the component render?
- Does it render with the right data?
- Does it do what it's supposed to do?
  - Call the right functions
  - Remove elements from the dom
  - etc.
- Does it response to user events?

## How to Install Testing for Vite React Applications

Just a note, Vite uses Vitest, not Jest like the default React application.

1. Navigate to your project folder.
2. Install Vitest via `npm install vitest --save-dev` in the terminal.
3. Add a testing script to `package.json`
4. Create a dummy test in the `src` folder called `App.test.jsx`.

```jsx
import { describe, it, expect } from "vitest";

describe("Setup test", () => {
  it("checks true", () => {
    expect(true).toBe(true);
  });
});
```

To avoid having to import `describe`, `it`, and `expect` every time, do to your vite config and add global.

5. Add js-dom to be able to test it in a DOM-like environment via `npm install jsdom --save-dev`
6. Add jsdom to the vite config
7. Create your setup file in a config folder, which includes code that will unmount components after testing, and add it to your vite config
8. Install a user-event library which simulates user events `npm i @testing-library/user-event --save-dev`
