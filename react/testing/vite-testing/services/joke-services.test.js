import { describe, vi } from "vitest";
import { getJokesBySearch } from "./joke-services";

describe("getJokesBySearch function", () => {
  it("Should throw an error when passed an empty string", async () => {
    expect(getJokesBySearch("")).rejects.toThrow(); // can also wrap this in a callback function rather than use .rejects();
    expect(getJokesBySearch("   ")).rejects.toThrow();
    expect(getJokesBySearch("")).rejects.toThrow("Must search for a value");
  });

  it("Should throw an error if response from API is not OK", async () => {
    const spyFetch = vi.spyOn(window, "fetch"); // web API used here is fetch
    spyFetch.mockResolvedValue({ ok: false });
    expect(getJokesBySearch("hello")).rejects.toThrow();
    expect(getJokesBySearch("asdasdasdasd123098123")).rejects.toThrow(
      "Failed to fetch jokes"
    );
  });

  it("Should throw an error there are 0 results", async () => {
    const spyFetch = vi.spyOn(window, "fetch"); // we are spying on fetch
    const mockedResponse = {
      ok: true,
      json() {
        return Promise.resolve({ results: [], total_jokes: 0 }); // do not require results: []
      },
    };

    spyFetch.mockResolvedValue(mockedResponse);
    expect(getJokesBySearch("hello")).rejects.toThrow();
    expect(getJokesBySearch("hello")).rejects.toThrow(
      "No jokes found for hello"
    );
  });

  it("Should resolve to an array of jokes if the fetch response includes such", async () => {
    const spyFetch = vi.spyOn(window, "fetch");
    const mockJokes = [{ id: 1, joke: "Joke 1" }];
    const mockedResponse = {
      ok: true,
      json() {
        return Promise.resolve({ results: mockJokes, total_jokes: 1 });
      },
    };

    spyFetch.mockResolvedValue(mockedResponse);
    expect(getJokesBySearch("hello")).resolves.toBeInstanceOf(Array);
  });
});
