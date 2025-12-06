export default function partOne(inputArray: string[][]): number {
  const operations = inputArray.at(-1);
  if (!operations) return 0;

  return operations.reduce((sum, operation, colIndex) => {
    const columnValues = inputArray
      .slice(0, -1)
      .map((row) => Number(row[colIndex]));

    const result =
      operation === '+'
        ? columnValues.reduce((sum, value) => sum + value, 0)
        : columnValues.reduce((product, value) => product * value, 1);

    return sum + result;
  }, 0);
}
