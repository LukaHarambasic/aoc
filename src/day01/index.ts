import { linesToArray } from "../utils.ts"

// Day 01: https://adventofcode.com/2023/day/1

export function main01(input: string): number {
    const lines = linesToArray(input)
    return calculation(lines)
}

export function main02(input: string): number {
    const lines = linesToArray(input)
    const linesWithNumbers = wordNumbersToNumbers(lines)
    return calculation(linesWithNumbers)
}
function calculation(lines: string[]): number {
    return lines
        .map(line => line.replace(/\D/g, ''))
        .map(line => line[0].toString() + line[line.length - 1].toString())
        .map(line => parseInt(line))
        .reduce((a, b) => a + b, 0)
}

function wordNumbersToNumbers(lines: string[]): string[] {
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const regex = /(one|two|three|four|five|six|seven|eight|nine|ten)/g
    return lines.map(line => {
        console.log(line)
        const aMatches = line.search(regex)
        console.log(aMatches)
        // const firstInLine = numbers.findIndex(number => line.includes(number))
        // console.log('-')
        // console.log(line)
        // if (firstInLine >= 0) {
        //     line.replace(numbers[firstInLine], firstInLine.toString())
        // }
        // console.log(firstInLine, line)
        return ''
    })
}