import { expect, test } from "bun:test";
import { part1, part2 } from "./index";
import input01 from './input01.txt';
import sample01 from './sample01.txt';
import sample02 from './sample02.txt';

test("day02 - part1 - sample01", () => {
  expect(part1(sample01, [12, 13, 14])).toBe(8);
});

test("day02 - part1 - input01", () => {
  expect(part1(input01, [12, 13, 14])).toBe(2632);
});

test("day02 - part2 - sample02", () => {
  expect(part2(sample02)).toBe(2286);
});

test("day02 - part2 - input01", () => {
  expect(part2(input01)).toBe(69629);
});