import { devide } from "../src/utils";

test("devide() should return correct result", () => {
  expect(devide(6, 3)).toBe(2);
});

test.each([1, 2, 100, -5, 0])(
  "devide(%i, 0) should throw error",
  (num) => {
    expect(() => devide(num, 0)).toThrow("Zero addition not allowed");
  }
);
