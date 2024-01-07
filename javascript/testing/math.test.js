import { fibonacci } from "./math";

// contains all unit tests
// test and it are the same

// assertions are toBe, toNotBe, toBeCloseTo, toContain, etc.
describe("Testing fibonacci function", () => {
  it("Should return the right fibonacci number given a valid value for n", () => {
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(1);
    expect(fibonacci(9)).toBe(55);
  });

  it("Should return n when n < 2", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("Should throw an error when n < 0", () => {
    expect(() => fibonacci(-1)).toThrow(
      "n value must be greater than or equal to 0."
    );
    expect(() => fibonacci(-10)).toThrow(
      new Error("n value must be greater than or equal to 0.")
    );
  });
});

// npm run test
