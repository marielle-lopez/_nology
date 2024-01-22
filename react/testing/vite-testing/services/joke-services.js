export const getJokesBySearch = async (searchTerm) => {
  if (searchTerm.trim() === "") {
    throw new Error("Must search for a value");
  }

  const response = await fetch(
    "https://icanhazdadjoke.com/search?=" + searchTerm,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch jokes`);
  }

  const data = await response.json();

  if (data.total_jokes === 0) {
    throw new Error("No jokes found for " + searchTerm);
  }

  return data.results;
};
