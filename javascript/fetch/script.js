const button = document.querySelector("#getJokesButton");

const getRandomJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/s", {
    headers: {
      "Accept": "application/json" // tells server I'm requesting from that I'm only accepting responses in JSON
    }
  });

  const responseData = await response.json();

  // !response.ok
  if (response.status !== 200 ) {
    throw responseData;
  };

  return ;
}

button.addEventListener("click", async (event) => {
  let joke;

  try {
    joke = await getRandomJoke();
  } catch (e) {
    console.log(e.message);
    return;
  }

  const jokesContainer = document.querySelector("#jokesContainer");

  const textNode = document.createTextNode(joke.joke);
  const elementNode = document.createElement("p");
  elementNode.append(textNode);
  jokesContainer.append(elementNode);
})