# State

You need to use React hooks to access features of React, such as making the special state variable. React hooks are functions that start with `use`.

The argument you pass into `useState()`, which is the React hook we use initiate a state variable, is the default value you want the state variable to be when you load the application.

```js
useState(0);
```

Another argument you pass into `useState()` is a function that's known as a setter function. It updates the value of the state variable. This is why when you declare and initialise a state variable, you see destructuring. So, `useState()` returns an array containing the value of the state variable, and the setter function.

```js
import { useState } from "react";

const [count, setCount] = useState(0);
```

We can pass state variables and the state functions as props as well. This can make components reusable and do different functions depending on the props passed to them! In addition, another benefit of this is that you can update state variables in a parent component from a child component.

The component will re-render if one of its states changes.

If you're experiencing the issue of too many re-renders, put the function causing the issue in an arrow function. This most likely happens because you're calling the setter function inside of the `return` statement, like passing it to the `onClick` attribute of an element.

With Boolean values, you can use `!` to negate the value when toggling between `true` and `false`, which calls for cleaner code. Don't forget to use lazy evaluation as well.

Another thing to note is that state is only tied to the single render of the component. So, if you have multiple cards on your page and you have a state defined in the card component that determines whether its border is shown, toggling a single card's border on and off will only affect that card you're interacting with, not the other cards. If you wanted to toggle all of the cards' border, you'd put the state in the parent component of the cards.

## Other Notes

Implementing a search bar that searches while a user is typing on every keystroke should be avoided if you don't want to do too many API calls when you're working with a database (debounce). Also, best practise with a search bar is to put it in a `<form>`.
