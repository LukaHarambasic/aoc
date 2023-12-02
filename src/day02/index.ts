import { linesToArray } from "../utils.ts"

// Day 02: https://adventofcode.com/2023/day/2

export function main01(input: string, solution: number[]): number {
    return linesToArray(input)
        // transform data in correct format
        .map(game => {
            return game
                .split(': ')[1]
                .split(';')
                .map(draw => draw.split(',').map(item => item.replace(" ", "").trim()))
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

export function main02(input: string): number {
    return -1
}