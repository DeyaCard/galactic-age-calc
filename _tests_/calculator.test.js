import { TestScheduler } from "jest";
import Age from "../src/js/calculator.js";


describe ("New Age", () => {
  test("should return users age in Earth years", () => {
    const earthAge = new Age("41", "Female", "Yes", "Bad", "Providence");
    expect(earthling.earthAge).toEqual("41");
    expect(earthling.gender).toEqual("Female");
    expect(earthling.exercise).toEqual("Yes");
    expect(earthling.diet).toEqual("Bad");
    expect(earthling.healthCare).toEqual("Providence");
  });

  test("should return users Earth age in Mercury years", () => {
    const mercury = new Age();
    expect(mercury.age).toEqual(170);
  });
})


