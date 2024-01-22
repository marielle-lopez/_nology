import { describe } from "vitest";
import JokeList from "./JokeList";
import { render, screen } from "@testing-library/react";

describe("JokeList function", () => {
  it("Should have a heading with the right number of jokes", () => {
    const mockJokes = [{ id: 1, joke: "Joke 1" }];

    render(<JokeList jokes={mockJokes} />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Found 1 jokes");
  });

  it("Should render all jokes in the list", () => {
    const mockJokes = [{ id: 1, joke: "Joke 1" }];

    render(<JokeList jokes={mockJokes} />);
    const firstJoke = screen.getByText(/joke 1/i);
    expect(firstJoke).toBeInTheDocument();
  });
});
