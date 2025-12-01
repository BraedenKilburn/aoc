# Advent of Code Solutions

This repository contains my solutions to [Advent of Code](https://adventofcode.com/) challenges over the years. All solutions are written in TypeScript and executed using [Bun](https://bun.sh/).

> **Note:** This repository is based on a template I created, which is available at [aoc-bun](https://github.com/BraedenKilburn/aoc-bun).

## Structure

Solutions are organized by year and day.

Each day contains:

- `1.ts` - Solution for Part One
- `2.ts` - Solution for Part Two
- `index.ts` - Entry point that runs both parts with benchmarking
- `input.txt` - Puzzle input
- `example.txt` - Example input (if used)

## Usage

### Running a Solution

Run a specific day's solution:

```bash
bun run aoc <year> <day>
```

Example:

```bash
bun run aoc 2025 1
```

This will execute both parts of the solution and display results with performance metrics.

### Generating a New Day

To scaffold a new day's solution structure and fetch the input:

```bash
bun run aoc:generate --day <day>
```

**Note:** This requires environment variables:

- `AOC_SESSION` - Your Advent of Code session cookie
- `YEAR` - The year of the puzzle you are working on (e.g., `2025`)

The script will:

- Create the day directory structure
- Fetch your personalized input from Advent of Code
- Generate template files for both parts
- Create an `index.ts` entry point

### Watch Mode

Run a solution in watch mode for development:

```bash
bun run aoc:watch <year> <day>
```

### Formatting

Format all TypeScript files:

```bash
bun run format
```

## Features

- **Benchmarking**: Each solution includes performance metrics (execution time and memory usage)
- **Type Safety**: Full TypeScript support with proper typing
- **Template Generation**: Automated scaffolding for new days
- **Input Fetching**: Automatic download of puzzle inputs from Advent of Code

## Requirements

- [Bun](https://bun.sh/) (latest version recommended)

## Author

Braeden Kilburn
