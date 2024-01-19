import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter component", () => {
  it("Should render count of 0 when no props are passed", () => {
    render(<Counter />);
    const count = screen.getByTitle("count");
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent("0");
  });

  it("Should render the right initial value when a prop is passed", () => {
    render(<Counter initialValue={22} />);
    const count = screen.getByTitle("count");
    expect(count).toHaveTextContent("22");
  });

  it("Should increment the value when the + button is clicked", async () => {
    render(<Counter />);
    const count = screen.getByTitle("count");
    const incrementBtn = screen.getByText("+");
    expect(incrementBtn).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(incrementBtn);
    expect(count).toHaveTextContent("1");
  });

  it("Should decrement the value when the - button is clicked", async () => {
    render(<Counter initialValue={10} />);
    const decrementBtn = screen.getByText("-");
    expect(decrementBtn).toBeInTheDocument();
    const count = screen.getByTitle("count");

    const user = userEvent.setup();
    await user.click(decrementBtn);
    expect(count).toHaveTextContent("9");
  });

  it("Should disable the decrement button when count is less than 1", async () => {
    render(<Counter />);
    const decrementBtn = screen.getByText("-");
    const count = screen.getByTitle("count");
    expect(count).toHaveTextContent("0");
    expect(decrementBtn).toHaveAttribute("disabled");
    const user = userEvent.setup();
    await user.click(decrementBtn);
    expect(count).toHaveTextContent("0");
    const incrementBtn = screen.getByText("+");
    await user.click(incrementBtn);
    expect(decrementBtn).not.toHaveAttribute("disabled");
  });

  it("Should have the counter reset to initial value when the reset button is clicked", async () => {
    render(<Counter initialValue={4} />);
    const count = screen.getByTitle("count");
    const incrementBtn = screen.getByText("+");
    const user = userEvent.setup();
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    expect(count).toHaveTextContent("7");
    const resetBtn = screen.getByText(/reset/i);
    await user.click(resetBtn);
    expect(count).toHaveTextContent("4");
  });
});
