# useContext

Prop drilling is passing props down from a parent to its children.

Context allows you to create a global piece of state. You have to set up a component, and whatever is put in-between the opening and closing tags of such component, will have access to the states of the context component.

You still have to pass the state down as props, but not like you do with prop drilling; you only have to pass the props from the context component to the children components once.

You'd put context components into a separate `context` directory, much like how you put components into a `component` directory and containers into a `containers` directory. We call our context components 'providers', so the file names holding context have 'Provider' appended to the end (e.g., 'SearchContextProvider').

```jsx
import { createContext, useState } from "react";

export const SearchContext = createContext(null);

// this is what I will need to wrap my other components in to give them access to SearchContext
const SearchContextProvider = ({ children }) => {
  const [contextSearchTerm, setContextSearchTerm] = useState("");

  const dataForChildren = {
    contextSearchTerm,
    setContextSearchTerm,
  };

  return (
    <SearchContext.Provider value={dataForChildren}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
```

```jsx
import { createContext, useState } from "react";

// you pass in null because you don't need to pass anything
// when you createContext, you create a context object
// a context object has the property 'Provider'
export const DarkModeContext = createContext(null);

const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const dataForChildren = {
    darkMode,
    setDarkMode,
  };

  return (
    <DarkModeContext.Provider value={dataForChildren}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
```

Good examples to use context is when you're accessing the user's username to display it on different pages of your application, to let component knows when to toggle dark mode on or off, and to give components access to search-related information.
