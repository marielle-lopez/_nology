# State

You need to use React hooks to access features of React, such as making the special state variable. React hooks are functions that start with `use`.

The argument you pass into `useState()` is the default value you want the state variable to be when you load the application.

```js
useState(0);
```

Another argument you pass into `useState()` is a function that's known as a setter function. It updates the value of the state variable. This is why when you declare and initialise a state variable, you see destructuring.

```js
import { useState } from "react";

const [count, setCount] = useState(0);
```

We can pass state variables and the state functions as props as well. This can make components reusable and do different functions depending on the props passed to them! In addition, another benefit of this is that you can update state variables in a parent component from a child component.
