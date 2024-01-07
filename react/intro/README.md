# React

- A library of JavaScript based on the idea of components
  - They are small building blocks of our application, they are reusable, and we can customise the data they render, and you can dynamically render multiple of the same component
  - Components can be made from other components
  - Components are used to dynamically render different information but using the same skeleton
  - You decide how granular your code is
  - There are 3 categories of components:
    - Presentational component (dumb component) - their role is to display things, they will contain little to no logic
    - Container component (smart component) - their role is to fetch data and then display presentational components, so they contain the logic of our application
    - Page component - the entire layout of a page, they render multiple container and presentational components
  - You can treat page and container components the same depending on how you design your application
- Uses JSX, which is JS and HTML (JavaScript XML)
  - Every component is just a function that returns JSX
  - JSX gets translated into plain JavaScript
  - It's a language that was created for React
- State - if you we want to see a change in the DOM, we need to create a special state variable since React doesn't keep track or watch regular variables
- Virtual DOM - this is an in-memory copy of the actual DOM
  - Before updating the actual DOM, React updates the virtual DOM first
  - React compares the two versions of the DOM (actual and virtual) to see what needs updating
  - It uses a diffing algorithm to update the actual DOM in the most efficient way
  - Does batch updates to update the application efficiently
  - Be careful with saying that the virtual DOM is faster than the actual DOM
- Single-page applications
- Is it still worth learning React in 2024?
  - A very valid skill, and many jobs are still looking for people who know React
    - NextJS is what is used for the client project
    - React with extra stuff
      - React doesn't provide solutions for everything such as routing
    - Better server-side rendering
  - However, if you want to look at non-virtual DOM frameworks:
    - SolidJS
    - Svelte

Airbnb uses React.
