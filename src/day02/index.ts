import { linesToArray } from "../utils.ts"

// Day 02: https://adventofcode.com/2023/day/2

export function part1(input: string, solution: number[]): number {
    return linesToArray(input)
        .map(game => {
            return game
                .split(': ')[1]
                .split(';')
                .map(draw => draw.split(',').map(item => item.replaceAll(" ", "").trim()))
                .flat()
        })
        .reduce((sum, game, index) => {
            const isPossible = game.every(item => {
                return ['red', 'green', 'blue'].find((color, index) => {
                    if (item.includes(color)) {
                        return parseInt(item.replace(color, '')) <= solution[index]
                    }
                    return false
                })
            })
            return isPossible ? sum + index + 1 : sum
        }, 0)
}

export function part2(input: string): number {
    return linesToArray(input)
        .map(game => {
            return game
                .split(': ')[1]
                .split(';')
                .map(draw => draw.split(',').map(item => item.replaceAll(" ", "").trim()))
                .flat()
        })
        .map(game => {
            return ['red', 'green', 'blue'].map((color) => {
                return game
                    .filter(item => item.includes(color))
                    .map(item => parseInt(item.replace(color, '')))
            })
        })
        .map(game => {
            return game
                .map(item => Math.max(...item))
                .reduce((result, item) => result * item, 1)
        })
        .reduce((sum, game) => sum + game, 0)
}