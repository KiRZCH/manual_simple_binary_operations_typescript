/**
 * Test suite for the binary sequence operations exported by `binary.ts`.
 *
 * The suite covers the following parts of the public contract:
 * - **Return type:** confirms that applying an operation to valid sequences
 *   returns a `Binary[]`.
 * - **Input validation:** verifies that an empty first sequence and an empty
 *   second sequence each cause an error with the message
 *   `Arrays cannot be empty`.
 * - **Unequal sequence lengths:** checks both directions of normalization.
 *   When the source is shorter, it is left-padded with zeroes to the key
 *   length; when the key is shorter, it is left-padded to the source length.
 *   Both cases assert the resulting XOR sequence.
 * - **AND truth table:** checks `0 AND 0`, `1 AND 0`, `0 AND 1`, and
 *   `1 AND 1`, expecting respectively `0`, `0`, `0`, and `1`.
 * - **OR truth table:** checks `0 OR 0`, `1 OR 0`, `0 OR 1`, and `1 OR 1`,
 *   expecting respectively `0`, `1`, `1`, and `1`.
 * - **NAND truth table:** checks `0 NAND 0`, `1 NAND 0`, `0 NAND 1`, and
 *   `1 NAND 1`, expecting respectively `1`, `1`, `1`, and `0`.
 * - **NOR truth table:** checks `0 NOR 0`, `1 NOR 0`, `0 NOR 1`, and
 *   `1 NOR 1`, expecting respectively `1`, `0`, `0`, and `0`.
 * - **XOR truth table:** checks `0 XOR 0`, `1 XOR 0`, `0 XOR 1`, and
 *   `1 XOR 1`, expecting respectively `0`, `1`, `1`, and `0`.
 * - **XNOR truth table:** checks `0 XNOR 0`, `1 XNOR 0`, `0 XNOR 1`, and
 *   `1 XNOR 1`, expecting respectively `1`, `0`, `0`, and `1`.
 *
 * Each truth-table case passes one-bit sequences to `applySequences` and
 * compares its one-bit output with the expected Boolean result. Together,
 * these checks exercise every possible pair of binary inputs for each
 * supported operation.
 * @module binary.test
 */

import {describe, expect, test, expectTypeOf} from "vitest";
import {Binary, applySequences} from "./binary";


describe("Manual Simple Binary Operation", () => {

    /**
     * Confirms that a valid call is statically typed to return an array of
     * `Binary` values, matching the function's public contract.
     */

    test("Expected Type: Binary[].", () => {
        expectTypeOf(applySequences([1,1,1], [1,1,1], "AND"))
            .toEqualTypeOf<Binary[]>();
    });

    describe("Expected to fail.", () => {
        /**
         * Confirms that an empty first sequence is rejected with the documented
         * error even when the second sequence contains a valid bit.
         */
        test("Empty array1.", () => {
            expect(() => applySequences([], [1], "AND"))
                .toThrow("Arrays cannot be empty");
        });
        /**
         * Confirms that an empty second sequence is rejected with the documented
         * error even when the first sequence contains a valid bit.
         */
        test("Empty array2.", () => {
            expect(() => applySequences([1], [], "AND"))
                .toThrow("Arrays cannot be empty");
        });
    });

    describe("Padding", () => {
        /**
         * Confirms that a shorter source `[1, 0]` is padded on the left with
         * zero to match the three-bit key before XOR is applied.
         */
        test("pads source on the left", () => {
            expect(applySequences([1, 0], [1, 1, 0], "XOR")).toEqual([1, 0, 0]);
        });

        /**
         * Confirms that a shorter key `[1, 0]` is padded on the left with zero
         * to match the three-bit source before XOR is applied.
         */

        test("pads key on the left", () => {
            expect(applySequences([1, 1, 0], [1, 0], "XOR")).toEqual([1, 0, 0]);
        });
    });

    describe("AND tests", () => {
        /** Checks the AND truth-table case `0 AND 0`, which must produce `[0]`. */
        test("0 AND 0", () => {
            expect(applySequences([0], [0], "AND")).toEqual([0])
        });
        /** Checks the AND truth-table case `1 AND 0`, which must produce `[0]`. */
        test("1 AND 0", () => {
            expect(applySequences([1], [0], "AND")).toEqual([0])
        });
        /** Checks the AND truth-table case `0 AND 1`, which must produce `[0]`. */
        test("0 AND 1", () => {
            expect(applySequences([0], [1], "AND")).toEqual([0])
        });
        /** Checks the AND truth-table case `1 AND 1`, which must produce `[1]`. */
        test("1 AND 1", () => {
            expect(applySequences([1], [1], "AND")).toEqual([1])
        });
    });

    describe("OR tests", () => {
        /** Checks the OR truth-table case `0 OR 0`, which must produce `[0]`. */
        test("0 OR 0", () => {
            expect(applySequences([0], [0], "OR")).toEqual([0])
        });
        /** Checks the OR truth-table case `1 OR 0`, which must produce `[1]`. */
        test("1 OR 0", () => {
            expect(applySequences([1], [0], "OR")).toEqual([1])
        });
        /** Checks the OR truth-table case `0 OR 1`, which must produce `[1]`. */
        test("0 OR 1", () => {
            expect(applySequences([0], [1], "OR")).toEqual([1])
        });
        /** Checks the OR truth-table case `1 OR 1`, which must produce `[1]`. */
        test("1 OR 1", () => {
            expect(applySequences([1], [1], "OR")).toEqual([1])
        });
    });

    describe("NAND tests", () => {
        /** Checks the NAND truth-table case `0 NAND 0`, which must produce `[1]`. */
        test("0 NAND 0", () => {
            expect(applySequences([0], [0], "NAND")).toEqual([1])
        });
        /** Checks the NAND truth-table case `1 NAND 0`, which must produce `[1]`. */
        test("1 NAND 0", () => {
            expect(applySequences([1], [0], "NAND")).toEqual([1])
        });
        /** Checks the NAND truth-table case `0 NAND 1`, which must produce `[1]`. */
        test("0 NAND 1", () => {
            expect(applySequences([0], [1], "NAND")).toEqual([1])
        });
        /** Checks the NAND truth-table case `1 NAND 1`, which must produce `[0]`. */
        test("1 NAND 1", () => {
            expect(applySequences([1], [1], "NAND")).toEqual([0])
        });
    });

    describe("NOR tests", () => {
        /** Checks the NOR truth-table case `0 NOR 0`, which must produce `[1]`. */
        test("0 NOR 0", () => {
            expect(applySequences([0], [0], "NOR")).toEqual([1])
        });
        /** Checks the NOR truth-table case `1 NOR 0`, which must produce `[0]`. */
        test("1 NOR 0", () => {
            expect(applySequences([1], [0], "NOR")).toEqual([0])
        });
        /** Checks the NOR truth-table case `0 NOR 1`, which must produce `[0]`. */
        test("0 NOR 1", () => {
            expect(applySequences([0], [1], "NOR")).toEqual([0])
        });
        /** Checks the NOR truth-table case `1 NOR 1`, which must produce `[0]`. */
        test("1 NOR 1", () => {
            expect(applySequences([1], [1], "NOR")).toEqual([0])
        });
    });

    describe("XOR tests.", () => {
        /** Checks the XOR truth-table case `0 XOR 0`, which must produce `[0]`. */
        test("0 XOR 0", () => {
            expect(applySequences([0], [0], "XOR")).toEqual([0])
        });
        /** Checks the XOR truth-table case `1 XOR 0`, which must produce `[1]`. */
        test("1 XOR 0", () => {
            expect(applySequences([1], [0], "XOR")).toEqual([1])
        });
        /** Checks the XOR truth-table case `0 XOR 1`, which must produce `[1]`. */
        test("0 XOR 1", () => {
            expect(applySequences([0], [1], "XOR")).toEqual([1])
        });
        /** Checks the XOR truth-table case `1 XOR 1`, which must produce `[0]`. */
        test("1 XOR 1", () => {
            expect(applySequences([1], [1], "XOR")).toEqual([0])
        });
    });

    describe("XNOR tests.", () => {
        /** Checks the XNOR truth-table case `0 XNOR 0`, which must produce `[1]`. */
        test("0 XNOR 0", () => {
            expect(applySequences([0], [0], "XNOR")).toEqual([1])
        });
        /** Checks the XNOR truth-table case `1 XNOR 0`, which must produce `[0]`. */
        test("1 XNOR 0", () => {
            expect(applySequences([1], [0], "XNOR")).toEqual([0])
        });
        /** Checks the XNOR truth-table case `0 XNOR 1`, which must produce `[0]`. */
        test("0 XNOR 1", () => {
            expect(applySequences([0], [1], "XNOR")).toEqual([0])
        });
        /** Checks the XNOR truth-table case `1 XNOR 1`, which must produce `[1]`. */
        test("1 XNOR 1", () => {
            expect(applySequences([1], [1], "XNOR")).toEqual([1])
        });
    })
})
