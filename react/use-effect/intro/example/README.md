# useEffect

- Another React hook
- Allows us to perform side effects based on state change
- Run a piece of code when a state(s) it watches (dependency) changes

Takes in up to two parameters: a function, and an array (of dependencies).

When only a function is passed in, 'useEffect' will run when any state of the component it is in, changes. Very rarely you'll use this implementation. Usually, you'll want to watch a piece of state to run the `useEffect`.

```jsx
useEffect(() => {
  console.log("I run every time a piece of state in my component changes.");
});
```

The second parameter you can pass in is called a watchlist. This watchlist is an array of things you want to "watch" changes for. `useEffect` will run when the component first renders as well.

```jsx
useEffect(() => {
  console.log("I only run when `number` changes.");
}, [number]);
```

If you pass in an empty watchlist (empty array), the `useEffect` will only run when the component first mounts. You'd use this implementation for things like an API call, so that you have the data you want to work with on sequential component renders.

```jsx
useEffect(() => {
  console.log("I only run when my component first renders.");
}, []);
```

`useEffect` returns a clean-up function. This function contains code that runs when the components unmounts. The reason why we need cleanup functions is so that you don't listen to things or watch things that you don't need anymore when the component unmounts.

- So, things that cause live changes are things you want to unsubscribe from when its component unmounts, like time intervals you set to update a clock, and then hide the clock

```jsx
useEffect(() => {
  console.log("I only run when `number` changes.");

  return () => {
    console.log(
      "Hello, I'm the cleanup function. I run when the component unmounts!"
    );
  };
}, [number]);
```

## What Could be a Side Effect?

Any action or behaviour that isn't necessarily related to rendering.

- Subscription to webhooks
- Update the title of your document
- Making an API call
- Counters or timeouts

## Component Lifecycle

1. Load phase - before the component is rendered to the page
2. Mount phase - when the component is first rendered to the page
3. Update phase - when a component re-renders based on state change or change in props
4. Unmount phase - when a component is removed from the DOM

useEffect lets us run code for one of these phases.

**Disclaimer**: There is an experimental feature in React which causes everything to render twice (mounted, unmounted, then mounted again). This feature is called `StrictMode`. This is only in developer mode. This feature isn't finished yet. To get ride of it, is to comment out `StrictMode` in the `main.jsx` file.

## Other Notes

- Class-based components

You can mock a slower internet speed or slow API by going into the Network tab and selecting "Slow 3G".

`await/async` is syntactic sugar for plain JavaScript. So, in React, you can use `.then`.

Do not watch the same state you're updating inside of the `useEffect` callback function. This will cause an infinite loop.
