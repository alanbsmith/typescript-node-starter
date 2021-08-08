/**
 * An example function that returns the sum for an arbitrary number of arguments.
 * @param args
 * @returns number
 */
export function sumArgs(...args: number[]): number {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }
  return sum;
}
