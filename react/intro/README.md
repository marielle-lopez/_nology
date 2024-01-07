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

`<></>` are React fragments.

- In JSX, we can only return one parent element. This one element can be a `div`, but this can cause unnecessary nesting. An alternative is to use React fragments!
- The downside to this is that you cannot at attributes to React fragments, but you can add `React.Fragment` to add attributes to them, like `key`.

```jsx
<React.Fragment></React.Fragment>
```

Do not forget that good HTML practices still apply, such as semantic HTML.

Name components starting with a capital letter.

## How to Create a React Application

Below is the way that's no longer supported (https://www.npmjs.com/package/create-react-app).

`npx create-react-app <name>`

We will be using the method below. With Vite, it gives you only what you need, whereas the above method gives you the extras. With Vite, you can have to add the extra stuff, like testing libraries. `npm run build` turns all JSX into plain JS.

The menu for installing is buggy on GitBash, take a look at the below link.

https://vitejs.dev/guide/

Asset folder in the `public` folder to hold images.

`npm create vite@latest`
`npm run build`

## Styling

Modules are a way to get a unique class name for each components so that you can reuse the class names for other components, makes it easier for you to make class names. Characters are added to the class name dynamically, so class names don't clash.

## Other Notes

Airbnb uses React.

https://babeljs.io/

- Turns JSX into JS

React Developer tools

SCSS is not in-built in a Vite project, we have to install it as a dependency. One of the benefits is that we don't have to run the compiler to keep watching our SCSS files, and when we run `npm run build`, SCSS is compiled for us automatically.

`npm i --save-dev sass`
