import { TestScheduler } from "jest";
import Age from "../src/js/calculator.js";


describe ("Age", () => {
  test("should return users Earth age", () => {
    let humanAge = new Age("41");
    expect(humanAge instanceof Age);
  });

test("should return the users age in seconds", () => {
  let secondsAge = new Age("1");
  expect(secondsAge.ageInSeconds()).toEqual(31536000);
});

test("should calculate users age in Mercury years", () => {
  let humanAge = new Age("41");
  expect(humanAge.ageMercury()).toEqual(170);
});

});



