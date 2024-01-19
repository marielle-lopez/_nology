import { describe, it, expect } from "vitest";
import Card from "./Card";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Card component", () => {
  it("Should render a heading based on props", () => {
    render(<Card heading={"Card text"} content={"Card content"} />);
    const heading = screen.getByText(/card text/i);
    expect(heading).toBeInTheDocument();
  });

  it("Should not show content by default", () => {
    render(
      <Card heading={"This is a heading"} content={"This is some content"} />
    );
    const content = screen.queryByText(/this is my content/i);
    expect(content).not.toBeInTheDocument();
  });

  it("Should toggle card content when the button is clicked and content should be based on props", async () => {
    render(
      <Card heading={"React testing"} content={"React testing library"} />
    );
    const button = screen.getByRole("button");
    const user = userEvent.setup();

    await user.click(button);
    const content = screen.getByText(/react testing library/i);
    expect(content).toBeInTheDocument();
    await user.click(button);
    expect(content).not.toBeInTheDocument();

    screen.debug();
  });

  it("Should toggle button text, 'Show more' when content is hidden, and 'Hide more' when visible", async () => {
    render(<Card heading="Hello world!" content="Have a good day." />);
    const button = screen.getByRole("button");
    const user = userEvent.setup();

    expect(button).toHaveTextContent(/see more/i);
    await user.click(button);
    expect(button).toHaveTextContent(/see less/i);
    await user.click(button);
    expect(button).toHaveTextContent(/see more/i);
  });
});
