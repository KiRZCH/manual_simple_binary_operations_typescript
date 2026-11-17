"use strict";
// TODO: Nothing
// Console Clear
// console.clear()
Object.defineProperty(exports, "__esModule", { value: true });
exports.applySequences = applySequences;
// Functions
/** Applies the selected Boolean operation to two binary digits. */
function apply(a, b, operation) {
    switch (operation) {
        case "AND":
            return apply_and(a, b);
        case "OR":
            return apply_or(a, b);
        case "NAND":
            return apply_nand(a, b);
        case "NOR":
            return apply_nor(a, b);
        case "XOR":
            return apply_xor(a, b);
        case "XNOR":
            return apply_xnor(a, b);
    }
}
/** Returns the AND of two binary digits. */
function apply_and(a, b) {
    return a === 1 && b === 1 ? 1 : 0;
}
/** Returns the OR of two binary digits. */
function apply_or(a, b) {
    return a === 1 || b === 1 ? 1 : 0;
}
/** Returns the NAND of two binary digits. */
function apply_nand(a, b) {
    return a !== 1 || b !== 1 ? 1 : 0;
}
/** Returns the NOR of two binary digits. */
function apply_nor(a, b) {
    return a !== 1 && b !== 1 ? 1 : 0;
}
/** Returns the XOR of two binary digits. */
function apply_xor(a, b) {
    return a !== b ? 1 : 0;
}
/** Returns the XNOR of two binary digits. */
function apply_xnor(a, b) {
    return a === b ? 1 : 0;
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
function applySequences(source, key, operation) {
    var _a, _b;
    if (source.length === 0 || key.length === 0) {
        throw new Error("Arrays cannot be empty");
    }
    const result = [];
    // Normalization
    const length = Math.max(source.length, key.length);
    for (let i = 0; i < length; i++) {
        const n_source = (_a = source[source.length - length + i]) !== null && _a !== void 0 ? _a : 0;
        const n_key = (_b = key[key.length - length + i]) !== null && _b !== void 0 ? _b : 0;
        result.push(apply(n_source, n_key, operation));
    }
    return result;
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
