import { expect, test } from "bun:test";
// import input from './input.txt';
import inputTest from './input.test.txt';
import run from "./index";

test("starter", () => {
  expect(run()).toBe(inputTest);
});