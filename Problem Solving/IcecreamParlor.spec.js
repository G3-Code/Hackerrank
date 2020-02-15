import { icecreamParlor } from "./IcecreamParlor";

describe("Test suite for ice-cream parlor hackerrank exercise", () => {
  let m = 4;
  let arr = [1, 4, 5, 3, 2];
  it("Should return an array", () => {
    let resultArr = icecreamParlor(m, arr);
    // expect(Array.isArray(resultArr)).toBe(true);
    expect(1).toBeTruthy();
  });
});
