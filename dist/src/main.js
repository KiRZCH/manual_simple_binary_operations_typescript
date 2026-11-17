"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const binary_1 = require("./binary");
// Functions
/**
 * Prompts until the user enters a positive integer or cancels.
 * @param question The prompt shown to the user.
 * @returns The entered positive integer, or `null` if cancelled.
 */
function arrayDimensionInteger(question) {
    while (true) {
        const answer = prompt(question);
        // If press "cancel" it interrupts the request
        if (answer === null)
            return null;
        try {
            const value = Number(answer);
            if (!Number.isInteger(value) || value <= 0) {
                throw new Error("Enter an integer greater than 0.");
            }
            return value;
        }
        catch (error) {
            alert(error instanceof Error ? error.message : "Invalid value.");
        }
    }
}
/**
 * Prompts until the user enters a binary digit or cancels.
 * @param question The prompt shown to the user.
 * @returns The entered bit, or `null` if cancelled.
 */
function insertBit(question) {
    while (true) {
        const answer = prompt(question);
        // Cancel the input without throwing an error.
        if (answer === null)
            return null;
        try {
            const value = Number(answer.trim());
            if (answer.trim() === "" || (value !== 0 && value !== 1)) {
                throw new Error("Enter 0 or 1.");
            }
            return value;
        }
        catch (error) {
            alert(error instanceof Error ? error.message : "Invalid value.");
        }
    }
}
/**
 * Prompts until the user enters a supported operation or cancels.
 * @param question The prompt shown to the user.
 * @returns The selected operation, or `null` if cancelled.
 */
function insertOp(question) {
    const operations = ["AND", "OR", "NAND", "NOR", "XOR", "XNOR"];
    while (true) {
        const answer = prompt(question);
        if (answer === null)
            return null;
        const normalized = answer.trim().toUpperCase();
        const operation = operations.find((op) => op === normalized);
        if (operation !== undefined)
            return operation;
        alert("Choose AND, OR, NAND, NOR, XOR, or XNOR.");
    }
}
/** Collects two bit sequences and an operation, then logs their result. */
function main() {
    const countsBits1 = arrayDimensionInteger("How many bits for array 1?");
    if (countsBits1 === null)
        return;
    const countsBits2 = arrayDimensionInteger("How many bits for array 2?");
    if (countsBits2 === null)
        return;
    const op = insertOp("What operation? (AND, OR, NAND, NOR, XOR, or XNOR)");
    if (op === null)
        return;
    const binArray = [[], []];
    for (let i = 0; i < countsBits1; i++) {
        const bit = insertBit(`Array 1, bit ${i + 1}:`);
        if (bit === null)
            return;
        binArray[0].push(bit);
    }
    for (let j = 0; j < countsBits2; j++) {
        const bit = insertBit(`Array 2, bit ${j + 1}:`);
        if (bit === null)
            return;
        binArray[1].push(bit);
    }
    const xorResult = (0, binary_1.applySequences)(binArray[0], binArray[1], op);
    console.log(`${op}\n Array 1: ${binArray[0]}\nArray 2: ${binArray[1]}\n${op} result: ${xorResult}`);
}
main();
