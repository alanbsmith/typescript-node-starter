import {sumArgs} from './index';

describe('sumArgs function', () => {
  it('should return 0 if no args are provided', () => {
    expect(sumArgs()).toBe(0);
  });

  it('should return the sum of the arguments provided', () => {
    const expected = 15;
    expect(sumArgs(1, 2, 3, 4, 5)).toBe(expected);
  });
});
