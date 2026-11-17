"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const binary_1 = require("./binary");
(0, vitest_1.describe)("Manual Simple Binary Operation", () => {
    /** Verifies: Expected Type: Binary[]. */
    (0, vitest_1.test)("Expected Type: Binary[].", () => {
        (0, vitest_1.expectTypeOf)((0, binary_1.applySequences)([1, 1, 1], [1, 1, 1], "AND"))
            .toEqualTypeOf();
    });
    (0, vitest_1.describe)("Expected to fail.", () => {
        /** Verifies: Empty array1. */
        (0, vitest_1.test)("Empty array1.", () => {
            (0, vitest_1.expect)(() => (0, binary_1.applySequences)([], [1], "AND"))
                .toThrow("Arrays cannot be empty");
        });
        /** Verifies: Empty array2. */
        (0, vitest_1.test)("Empty array2.", () => {
            (0, vitest_1.expect)(() => (0, binary_1.applySequences)([1], [], "AND"))
                .toThrow("Arrays cannot be empty");
        });
    });
    (0, vitest_1.describe)("Padding", () => {
        /** Verifies: pads source on the left. */
        (0, vitest_1.test)("pads source on the left", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1, 0], [1, 1, 0], "XOR")).toEqual([1, 0, 0]);
        });
        /** Verifies: pads key on the left. */
        (0, vitest_1.test)("pads key on the left", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1, 1, 0], [1, 0], "XOR")).toEqual([1, 0, 0]);
        });
    });
    (0, vitest_1.describe)("AND tests", () => {
        /** Verifies: 0 AND 0. */
        (0, vitest_1.test)("0 AND 0", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([0], [0], "AND")).toEqual([0]);
        });
        /** Verifies: 1 AND 0. */
        (0, vitest_1.test)("1 AND 0", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1], [0], "AND")).toEqual([0]);
        });
        /** Verifies: 0 AND 1. */
        (0, vitest_1.test)("0 AND 1", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([0], [1], "AND")).toEqual([0]);
        });
        /** Verifies: 1 AND 1. */
        (0, vitest_1.test)("1 AND 1", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1], [1], "AND")).toEqual([1]);
        });
    });
    (0, vitest_1.describe)("OR tests", () => {
        /** Verifies: 0 OR 0. */
        (0, vitest_1.test)("0 OR 0", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([0], [0], "OR")).toEqual([0]);
        });
        /** Verifies: 1 OR 0. */
        (0, vitest_1.test)("1 OR 0", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1], [0], "OR")).toEqual([1]);
        });
        /** Verifies: 0 OR 1. */
        (0, vitest_1.test)("0 OR 1", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([0], [1], "OR")).toEqual([1]);
        });
        /** Verifies: 1 OR 1. */
        (0, vitest_1.test)("1 OR 1", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1], [1], "OR")).toEqual([1]);
        });
    });
    (0, vitest_1.describe)("NAND tests", () => {
        /** Verifies: 0 NAND 0. */
        (0, vitest_1.test)("0 NAND 0", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([0], [0], "NAND")).toEqual([1]);
        });
        /** Verifies: 1 NAND 0. */
        (0, vitest_1.test)("1 NAND 0", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1], [0], "NAND")).toEqual([1]);
        });
        /** Verifies: 0 NAND 1. */
        (0, vitest_1.test)("0 NAND 1", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([0], [1], "NAND")).toEqual([1]);
        });
        /** Verifies: 1 NAND 1. */
        (0, vitest_1.test)("1 NAND 1", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1], [1], "NAND")).toEqual([0]);
        });
    });
    (0, vitest_1.describe)("NOR tests", () => {
        /** Verifies: 0 NOR 0. */
        (0, vitest_1.test)("0 NOR 0", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([0], [0], "NOR")).toEqual([1]);
        });
        /** Verifies: 1 NOR 0. */
        (0, vitest_1.test)("1 NOR 0", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1], [0], "NOR")).toEqual([0]);
        });
        /** Verifies: 0 NOR 1. */
        (0, vitest_1.test)("0 NOR 1", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([0], [1], "NOR")).toEqual([0]);
        });
        /** Verifies: 1 NOR 1. */
        (0, vitest_1.test)("1 NOR 1", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1], [1], "NOR")).toEqual([0]);
        });
    });
    (0, vitest_1.describe)("XOR tests.", () => {
        /** Verifies: 0 XOR 0. */
        (0, vitest_1.test)("0 XOR 0", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([0], [0], "XOR")).toEqual([0]);
        });
        /** Verifies: 1 XOR 0. */
        (0, vitest_1.test)("1 XOR 0", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1], [0], "XOR")).toEqual([1]);
        });
        /** Verifies: 0 XOR 1. */
        (0, vitest_1.test)("0 XOR 1", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([0], [1], "XOR")).toEqual([1]);
        });
        /** Verifies: 1 XOR 1. */
        (0, vitest_1.test)("1 XOR 1", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1], [1], "XOR")).toEqual([0]);
        });
    });
    (0, vitest_1.describe)("XNOR tests.", () => {
        /** Verifies: 0 XNOR 0. */
        (0, vitest_1.test)("0 XNOR 0", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([0], [0], "XNOR")).toEqual([1]);
        });
        /** Verifies: 1 XNOR 0. */
        (0, vitest_1.test)("1 XNOR 0", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1], [0], "XNOR")).toEqual([0]);
        });
        /** Verifies: 0 XNOR 1. */
        (0, vitest_1.test)("0 XNOR 1", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([0], [1], "XNOR")).toEqual([0]);
        });
        /** Verifies: 1 XNOR 1. */
        (0, vitest_1.test)("1 XNOR 1", () => {
            (0, vitest_1.expect)((0, binary_1.applySequences)([1], [1], "XNOR")).toEqual([1]);
        });
    });
});
