/**
 * Implements the six Boolean operations supported by the binary sequence API.
 *
 * Each exported helper accepts two `Binary` digits and returns one `Binary`
 * digit. `apply_and` returns `1` only when both inputs are `1`; `apply_or`
 * returns `1` when either input is `1`; `apply_nand` and `apply_nor` return
 * the respective complements of AND and OR. `apply_xor` returns `1` when the
 * inputs differ, while `apply_xnor` returns `1` when they are equal. These
 * functions contain the per-digit logic used by `binary.ts` when processing
 * sequences.
 * @module helpers
 */

import {Binary} from "./binary";


/** Returns the AND of two binary digits. */
export function apply_and(a: Binary, b: Binary): Binary {
    return a === 1 && b === 1 ? 1 : 0
}

/** Returns the OR of two binary digits. */
export function apply_or(a: Binary, b: Binary): Binary {
    return a === 1 || b === 1 ? 1 : 0
}

/** Returns the NAND of two binary digits. */
export function apply_nand(a: Binary, b: Binary): Binary {
    return a !== 1 || b !== 1 ? 1 : 0
}

/** Returns the NOR of two binary digits. */
export function apply_nor(a: Binary, b: Binary): Binary {
    return a !== 1 && b !== 1 ? 1 : 0
}

/** Returns the XOR of two binary digits. */
export function apply_xor(a: Binary, b:Binary): Binary {
    return a !== b ? 1 : 0
}

/** Returns the XNOR of two binary digits. */
export function apply_xnor(a: Binary, b: Binary): Binary {
    return a === b ? 1 : 0
}
