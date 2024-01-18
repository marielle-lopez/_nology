# Testing

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

We will be using the React Testing Library.

- Involves testing a single component
- Mocking is creating fake functions to pass to components to verify if they were called when they were needed to be called
