# Routing

React allows us to build single-page applications (SPAs), since we only have one HTML file. We still want to have different pages to go between, and React doesn't come with in-built support for this. We'll be using an external library to dynamically render different pages, depending on the URL that's displayed in the browser. This library is called [React Router DOM](https://reactrouter.com/en/main).

For example, we'll have different pages, each having their own URL:

- Home: localhost:5173/
- About: localhost:5173/about
- Home: localhost:5173/contact

This will allow us to have a functional navigation bar to redirect to these URLs.

## Installation

```
npm install react-router-dom
```

## Overview

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="*" element={<h1>Oh... this page doesn't exist!</h1>}>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/projects/:id" element={<h1>Project 1</h1>} />
      </Routes>

      <footer>Copyright © 2024</footer>
    </BrowserRouter>
  );
}

export default App;
```

We wrap our elements inside of `<BrowserRouter>` tags so we have access to the methods in the React Router DOM library. This is like `useContext`, where we wrap things in context providers so children have access to different states.

I might want components that are on every router, such as our navigation bar.

In-between `<Routes>` tags, we can specify the different endpoints (routes) we will have in our application. The `path` attribute is what we want to append to the domain, and `element` is what we want to display on the page (typically a component).

Pass `*` as the path for other routes that do not exist!

Path variables are things you append to a URL to see a specific subpage of. Path variables begin with `:`. The name of the path variable depends on you, but it's best to keep it self-explanatory. When you're linking the specific subpage in the primary page, use `Link`.

```jsx
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkStyles = ({ isActive }) => {
    return isActive ? `${styles.active - link}` : "";
  };

  return (
    <nav>
      <NavLink to="/" className={linkStyles}>
        Home
      </NavLink>

      <NavLink to="/about" className={linkStyles}>
        About
      </NavLink>

      <NavLink to="/projects" className={linkStyles}>
        Projects
      </NavLink>

      <NavLink to="/contact" className={linkStyles}>
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
```

```scss
.active-link {
  color: blue;
}
```

We use `NavLink` to redirect to another link. Under the hood, it is transformed into a `<a>` tag. We could also use `Link`, but `NavLink` contains a bit more context about where we are in the application. Additionally, it allows me to style the active link.

We add the `to` attribute specify the route the navigation link redirects the user to when it's clicked.

We would use `Link` when we want to prompt the user to go back to the homepage when they go to a page that doesn't exist.

## Extra

[JSON Server](https://www.npmjs.com/package/json-server) mimics a backend so we can have a "full-stack application".

```
npm init
```

```
npm install json-server
```

Create a `db.json` file with all the data you'd like to have in your backend.

```
json-server --watch db.json
```

When you're in Postman, you don't have to worry about the `id` as it will be automatically created and incremented when you make a POST request (through the `Body` tab and selecting `raw`).
