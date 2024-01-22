import { describe, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import JokeLoader from "./JokeLoader";
// import SearchContextProvider from "../../context/SearchContextProvider";
import { SearchContext } from "../../context/SearchContextProvider";
import * as jokesServices from "../../services/joke-services";

describe("JokeLoader function", () => {
  it("Should show default text", () => {
    // render(
    //   <SearchContextProvider>
    //     <JokeLoader />
    //   </SearchContextProvider>
    // );

    render(
      <SearchContext.Provider value={{ searchValue: null }}>
        <JokeLoader />
      </SearchContext.Provider>
    );
    const defaultMessage = screen.getByText("Enter a search term");
    expect(defaultMessage).toBeInTheDocument();
  });

  it("Should render loading text", () => {
    render(
      <SearchContext.Provider value={{ searchValue: "apple" }}>
        <JokeLoader />
      </SearchContext.Provider>
    );

    screen.debug();

    const loadingText = screen.getByText("Searching for jokes about apple");
    expect(loadingText).toBeInTheDocument();
  });

  it("Should call the getJokesBySearch function with the correct value", () => {
    const spyGetJokes = vi.spyOn(jokesServices, "getJokesBySearch");

    render(
      <SearchContext.Provider value={{ searchValue: "orange" }}>
        <JokeLoader />
      </SearchContext.Provider>
    );

    expect(spyGetJokes.mock.calls[0][0]).toBe("orange");
  });

  it("Should render a JokeList if getJokesBySearch returns a list of jokes", () => {
    const spyGetJokes = vi.spyOn(jokesServices, "getJokesBySearch");
    spyGetJokes.mockResolvedValue([{ id: 1, joke: "Joke 1" }]);

    render(
      <SearchContext.Provider value={{ searchValue: "orange" }}>
        <JokeLoader />
      </SearchContext.Provider>
    );

    const loadingText = screen.getByText("Searching for jokes about orange");
    waitFor(() => {
      expect(loadingText).not.toBeInTheDocument();
      const joke = screen.getByText("Joke 1");
      expect(joke).toBeInTheDocument();
    });
  });

  it("Should render an error message if getJokesBySearch fails", () => {
    const spyGetJokes = vi.spyOn(jokesServices, "getJokesBySearch");
    spyGetJokes.mockRejectedValue(new Error("Oh no!"));

    render(
      <SearchContext.Provider value={{ searchValue: "orange" }}>
        <JokeLoader />
      </SearchContext.Provider>
    );

    waitFor(() => {
      const errorParagraph = screenByText("Oh no!");
      expect(errorParagraph).toBeInTheDocument();
    });
  });
});
