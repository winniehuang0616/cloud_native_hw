export function devide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Zero division not allowed");
  }
  return a / b;
}
