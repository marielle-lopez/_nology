# Document Object Model (DOM)

It is the presentation of the HTML document. It's an object of things in a HTML page.

DOM allows us to select things on a HTML page and interact with them, modify them, etc.

We can interact with the DOM in many different ways.

## Methods

All methods are of the `document` object, which is pretty much the DOM.

### `.getElementById("myDiv")`

This will only return one thing, because ids are unique by nature.

### `.getElementsByClassName("my-div)`

This will return a list of all elements associated with the specified class name. This is a different object type (HTML collection) and it is not a JavaScript array, so be careful with the methods you use on the returned list.

### `.getElementsByTagName("div")`

This will return a list (HTML collection) of all elements with the specified tag.

## Query Selectors

Query selectors are the preferred way of selecting elements on a HTML page.

### `.querySelector("div")`

This will return the first `div` on the page.

You can use class names as well, as shown below.

```js
const queryAllClassDivs = document.querySelectorAll("my-div");
```

### `.querySelectorAll("div")`

This will return all of the `div` elements on the page in a list (NodeList) that is not the same as a JavaScript array or HTML collection.

```js
myButton.addEventListener("action", "function that handles the action");
```

You can change the content inside of an element with the `.innerHTML` method. Use only `.textContent` instead if you just want to pass in a string with no HTML tags involved. If there are HTML tags involved, the HTML will just be printed on the screen instead when using `.textContext`.

```js
const myButton = document.querySelector("#myButton");

myButton.addEventListener("click", (event) => {
  const div = document.querySelector("#myDiv");
  div.innerHTML = "The div is changed " + new Date().getTime();
});
```

`classList` has methods like `.toggle()`, `.add()` and `.remove()` to modify the classes that are associated with an element.

## Adding Elements

We can create objects that don't yet exist on the page. We use the Node API to do this.

```js
const myParagraph = document.createElement("p"); // creates a paragraph, a DOM node
const myText = document.createTextNode("Hello!"); // creates a DOM node

myParagraph.appendChild(myText); // puts myText into myParagraph
container.appendChild(myParagraph); // puts myParagraph into container

function addTextElement(elementType, text, parentNode, classToAdd) {
  const newElement = document.createElement(elementType);
  newElement.classList.add(classToAdd);
  const newText = document.createTextNode(text);

  newElement.appendChild(newText);
  parentNode.appendChild(newElement);
}

addTextElement("p", "Hello again!", container, "red");

const redParagraph = document.querySelect("red");
setTimeout(() => {
  container.removeChild(redParagraph);
}, 2000); // delays passed in function by 2 seconds
```
