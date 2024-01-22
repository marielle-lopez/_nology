import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import userEvent from "@testing-library/user-event";

describe("Search bar component", () => {
  it("Should call the submit function passed as a prop when search button is clicked", async () => {
    const mockFunction = vi.fn(() => console.log("Search happens"));
    render(<SearchBar formSubmit={mockFunction} />);
    const searchBtn = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(searchBtn);
    expect(mockFunction).toHaveBeenCalled();
  });

  it("Should call the submit function with the value typed into the input", async () => {
    const mockFn = vi.fn((value) =>
      console.log("Search happens with " + value)
    );
    render(<SearchBar formSubmit={mockFn} />);
    const searchBtn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
    const user = userEvent.setup();
    await user.type(input, "nology");
    await user.click(searchBtn);
    expect(mockFn).toHaveBeenCalled();
    console.log(mockFn.mock);
    console.log(mockFn.mock.calls);
    expect(mockFn.mock.calls[0][0]).toBe("nology");
    // expect(mockFn).toBeCalledWith("nology");
  });

  it("Should clear the input after the form is submitted", async () => {
    const mockFn = vi.fn((value) =>
      console.log("Search happens with " + value)
    );
    render(<SearchBar formSubmit={mockFn} />);
    const searchBtn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/search/i);
    const user = userEvent.setup();

    await user.type(input, "Hi!");
    expect(input).toHaveValue("Hi!");
    await user.click(searchBtn);
    expect(input).toHaveValue("");
  });

  it("Should call submit with the right value multiple times", async () => {
    const mockFn = vi.fn((value) =>
      console.log("Search happened with " + value)
    );
    render(<SearchBar formSubmit={mockFn} />);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/search/i);
    const user = userEvent.setup();
    await user.type(input, "hello");
    await user.click(btn);
    await user.type(input, "apple");
    await user.click(btn);
    expect(mockFn).toHaveBeenCalledTimes(2);
    console.log(mockFn.mock.calls);
    expect(mockFn.mock.calls[0][0]).toBe("hello");
    expect(mockFn.mock.calls[1][0]).toBe("apple"); // each time search button is clicked, another array is added to calls
  });
});
