import somme from "../src/Calcul";
import Calcul from "../src/Calcul";

describe("Calcul", () => {
  it("should return 13", () => {
    let a = 1;
    let b = 2;
    expect(somme(a, b)).toBe(3);
  });
});
