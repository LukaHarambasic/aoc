import { expect, test } from "bun:test";
import { main01, main02 } from "./index";
import input01 from './input01.txt';
import sample01 from './sample01.txt';
import sample02 from './sample02.txt';

// test("day01 - main01 - sample01", () => {
//   expect(main01(sample01)).toBe(142);
// });

// test("day01 - main01 - input01", () => {
//   expect(main01(input01)).toBe(55172);
// });

// test("day01 - main02 - sample02", () => {
//   // original 281
//   expect(main02(sample02)).toBe(335);
// });

test("day01 - main02 - input01", () => {
  // 54914 is too low
  // original 281
  console.log('##################')
  expect(main02(input01)).toBe(1);
});