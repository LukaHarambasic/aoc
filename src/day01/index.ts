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

// 54924

function calculation(lines: string[]) {
    const digits = lines
        .map(line => line.replace(/\D/g, ''))
        .map(line => line[0].toString() + line[line.length - 1].toString())
        .map(line => parseInt(line))
        console.log(digits)
    return digits
        .reduce((a, b) => a + b, 0)
}

function wordNumbersToNumbers(lines: string[]) {
    const wordNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    return lines.map((line, index) => {
        const firstOccurences = wordNumbers.map(searchWord => {
            return line.indexOf(searchWord) >= 0 ? line.indexOf(searchWord) : Number.POSITIVE_INFINITY
        })
        const firstOccurence = Math.min(...firstOccurences)
        const firstOccurenceWord = wordNumbers[firstOccurences.indexOf(firstOccurence)]
        const lastOccurences = wordNumbers.map(searchWord => {
            return line.lastIndexOf(searchWord) >= 0 ? line.lastIndexOf(searchWord) : Number.NEGATIVE_INFINITY
        })
        const lastOccurence = Math.max(...lastOccurences)
        const lastOccurenceWord = wordNumbers[lastOccurences.lastIndexOf(lastOccurence)]
        const firstNumberToReplaceWith = String(wordNumbers.indexOf(firstOccurenceWord) + 1)
        const lastNumberToReplaceWith = String(wordNumbers.indexOf(lastOccurenceWord) + 1)
        if (firstOccurence === Number.POSITIVE_INFINITY && lastOccurence === Number.NEGATIVE_INFINITY) {
            return line
        } else {
            const firstOccurenceReplaced = line
                .replace(firstOccurenceWord, firstNumberToReplaceWith)
            return replaceLastOccurrence(firstOccurenceReplaced, lastOccurenceWord, lastNumberToReplaceWith)
        }
    })
}


function replaceLastOccurrence(original: string, search: string, replacement: string) {
    const lastIndex = original.lastIndexOf(search);
    if (lastIndex === -1) return original;
    var beforeStr = original.substring(0, lastIndex);
    var afterStr = original.substring(lastIndex + search.length);
    return beforeStr + replacement + afterStr;
}
