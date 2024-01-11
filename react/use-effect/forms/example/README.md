# Forms

Most of your job if you become a front-end developer, it's a way for users to interact with our applications.

It seems easy, but it can get complicated very quickly.

## Different Approaches

There are two different ways to create forms in React.

### Using State (Controlled Components)

The value of each input is stored in state. We keep track of all form values at all times.

#### Pros

- It gives us a lot of control over how our form looks on every keystroke
- We can add additional rendering
  - For example, some fields or buttons are disabled until I tick a checkbox
- Good for complex problems and interactions

#### Cons

- Because we are using state, it re-renders on every keystroke (affects performance in large applications)
- Complex state management
- Might need to use `useEffect` depending on how complex your form is

### `useRef`

This is another React hook that allows us to store values, but when we update that value, it doesn't cause a re-render, unlike `useState`.

It allows us to create a reference to DOM elements without going through the virtual DOM. However, just because we can directly access DOM elements using `useRef`, doesn't mean we should forget about React and abuse the power of `useRef`; the most typical use-case of `useRef` is with forms.

#### Pros

The advantage of using `useRef` is that you reduce the number of re-renders in comparison to `useState` and we don't have to manage complex pieces of state.

#### Cons

- Error management can be complex
- More difficult to implement condition rendering because we don't have access to the separate pieces of 'state'

So, avoid using `useRef` if you need to go condition rendering if you can.

### Creating Forms Using Libraries

We use libraries so we don't need to re-write boilerplate over and over again for every form we create

- React hook form
  - Uses refs
  - Great documentation
  - regularly updated
  - Created by an Australian

We can do validation via Zode, which makes it easier. You can use React hook form, but it would be a little bit more complicated.
