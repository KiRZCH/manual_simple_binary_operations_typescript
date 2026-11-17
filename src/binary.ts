/**
 * Defines the binary sequence API and its public input types.
 *
 * `Binary` restricts each digit to `0` or `1`. `Operation` lists the six
 * supported Boolean operators: AND, OR, NAND, NOR, XOR, and XNOR. The exported
 * `applySequences` function applies one of these operators position by
 * position to two non-empty sequences. If their lengths differ, the shorter
 * sequence is left-padded with zeroes so the operation can be applied across
 * the full length of the longer sequence. The result has that same length.
 *
 * The operation-specific logic is delegated to the corresponding helpers in
 * `helpers.ts`; this module selects the helper and handles sequence validation
 * and alignment.
 * @module binary
 */

// TODO: Nothing
// Console Clear
// console.clear()

// Imports

import * as helpers from "./helpers";


// Types

/** A single binary digit. */
export type Binary = 0 | 1

/** A supported Boolean operation for binary digits. */
export type Operation = "AND" | "OR" | "NAND" | "NOR" | "XOR" | "XNOR"

// Functions


/** Applies the selected Boolean operation to two binary digits. */
function apply(a: Binary, b: Binary, operation: Operation): Binary {
    switch (operation) {
        case "AND":
            return helpers.apply_and(a, b)
        case "OR":
            return helpers.apply_or(a, b)
        case "NAND":
            return helpers.apply_nand(a, b)
        case "NOR":
            return helpers.apply_nor(a, b)
        case "XOR":
            return helpers.apply_xor(a, b)
        case "XNOR":
            return helpers.apply_xnor(a, b)
    }
}




/**
 * Applies a Boolean operation to two sequences of bits.
 *
 * - Arrays must contain `0` or `1` values
 *
 * The shorter sequence is left-padded with zeroes before applying the
 * operation to corresponding bits.
 * @param source The first bit sequence.
 * @param key The second bit sequence.
 * @param operation The Boolean operation to apply.
 * @returns The resulting bit sequence.
 * @throws {Error} if either one or both sequences are empty
 */

export function applySequences(source: Binary[], key: Binary[], operation: Operation): Binary[] {
    if (source.length === 0 || key.length === 0) {
        throw new Error("Arrays cannot be empty")
    }
    const result: Binary[] = []
    // Normalization
    const length: number = Math.max(source.length, key.length)
    for (let i: number = 0; i < length; i++) {
        const n_source: Binary = source[source.length - length + i] ?? 0
        const n_key: Binary = key[key.length - length + i] ?? 0
        result.push(apply(n_source, n_key, operation))
    }
    return result
}

// Tests
/*
    Crash!
    console.log(xor([],[]))
    console.log(xor([0,1,1,1,1],[]))

console.log(xor([0,1,1,1,0],[1,1,0,0,1]))
console.log(xor([1,1,1,0,0,0],[1,1]))
console.log(xor([0,1],[1,0,0,1,1,1]))
*/
