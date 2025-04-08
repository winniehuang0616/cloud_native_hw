import { devide } from "../src/utils";

test("devide() should return correct result", () => {
  expect(devide(6, 3)).toBe(2);
});

test("devide(6, 0) should throw error", () => {
  expect(() => devide(6, 0)).toThrow("Zero division not allowed");
});
