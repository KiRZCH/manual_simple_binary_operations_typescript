# Manual Simple Binary Operations

A small TypeScript project for exploring Boolean operations on binary sequences. It lets you enter two sequences of bits, select a logical operation, and view the resulting sequence.

## Features

- Supports **AND**, **OR**, **NAND**, **NOR**, **XOR**, and **XNOR**.
- Applies the selected operation to matching positions in two sequences.
- If the sequences have different lengths, pads the shorter sequence on the left with zeroes before calculating the result.
- Checks interactive input and lets you cancel at any prompt.

## Run the project

You will need [Node.js](https://nodejs.org/) and npm installed.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The app uses browser prompt dialogs for input. Enter the length of each sequence, choose an operation, then enter each bit as `0` or `1`. The result appears in the browser's developer console.

To create a production build:

```bash
npm run build
```

## Example

For `1011` and `11`, the shorter sequence is left-padded to `0011`. Applying XOR gives `1000`.

## Project structure

- `src/main.ts` — interactive prompts, input validation, and output.
- `src/binary.ts` — binary types and sequence alignment/operation logic.
- `src/helpers.ts` — implementations of the six Boolean operations.
- `src/binary.test.ts` — tests for the binary sequence logic.

## Educational note and AI assistance

This project was created by a student for educational purposes. AI tools were used to help write code comments and this README, and to optimize the code.
