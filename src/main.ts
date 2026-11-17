/**
 * Interactive command-line-style entry point for the binary sequence program.
 *
 * The module asks the user for the lengths of two sequences, collects each bit,
 * and prompts for one of the supported Boolean operations. Input helpers repeat
 * their prompts until they receive valid values, and allow the user to cancel
 * at any prompt. If all input is supplied, `main` applies the selected
 * operation to both sequences through `applySequences` and writes the inputs,
 * operation, and result to the console. The module invokes `main` on load.
 * @module main
 */

// Imports
import {Binary, applySequences, Operation} from "./binary";

// Functions

/**
 * Prompts until the user enters a positive integer or cancels.
 * @param question The prompt shown to the user.
 * @returns The entered positive integer, or `null` if cancelled.
 */
export function arrayDimensionInteger(question: string): number | null {
    while (true) {
        const answer: string | null = prompt(question)
        // If press "cancel" it interrupts the request
        if (answer === null) return null

        try {
            const value: number = Number(answer)
            if (!Number.isInteger(value) || value <= 0) {
                throw new Error("Enter an integer greater than 0.")
            }
            return value
        } catch (error) {
            alert(error instanceof Error ? error.message : "Invalid value.")
        }
    }
}


/**
 * Prompts until the user enters a binary digit or cancels.
 * @param question The prompt shown to the user.
 * @returns The entered bit, or `null` if cancelled.
 */
export function insertBit(question: string): Binary | null {
    while (true) {
        const answer: string | null = prompt(question);

        // Cancel the input without throwing an error.
        if (answer === null) return null;

        try {
            const value: number = Number(answer.trim());

            if (answer.trim() === "" || (value !== 0 && value !== 1)) {
                throw new Error("Enter 0 or 1.");
            }

            return value;
        } catch (error) {
            alert(error instanceof Error ? error.message : "Invalid value.");
        }
    }
}

/**
 * Prompts until the user enters a supported operation or cancels.
 * @param question The prompt shown to the user.
 * @returns The selected operation, or `null` if cancelled.
 */
export function insertOp(question: string): Operation | null {
    const operations: Operation[] = ["AND", "OR", "NAND", "NOR", "XOR", "XNOR"]
    while (true) {
        const answer = prompt(question)

        if (answer === null) return null

        const normalized: string = answer.trim().toUpperCase()
        const operation: Operation | undefined = operations.find((op) => op === normalized)

        if (operation !== undefined) return operation

        alert("Choose AND, OR, NAND, NOR, XOR, or XNOR.")
    }
}


/** Collects two bit sequences and an operation, then logs their result. */
export function main(): void {
    const countsBits1: number | null = arrayDimensionInteger("How many bits for array 1?")
    if (countsBits1 === null) return;
    const countsBits2: number | null = arrayDimensionInteger("How many bits for array 2?")
    if (countsBits2 === null) return;
    const op: Operation | null = insertOp("What operation? (AND, OR, NAND, NOR, XOR, or XNOR)")
    if (op === null) return;

    const binArray: Binary[][] = [[],[]]

    for (let i: number = 0; i < countsBits1; i++) {
        const bit: Binary | null = insertBit(`Array 1, bit ${i + 1}:`)
        if (bit === null) return;
        binArray[0].push(bit)
    }
    for (let j: number = 0; j < countsBits2; j++) {
        const bit: Binary | null = insertBit(`Array 2, bit ${j + 1}:`)
        if (bit === null) return;
        binArray[1].push(bit)
    }


    const xorResult: Binary[] = applySequences(binArray[0], binArray[1], op)
    console.log(`${op}\n Array 1: ${binArray[0]}\nArray 2: ${binArray[1]}\n${op} result: ${xorResult}`)
}

main();

