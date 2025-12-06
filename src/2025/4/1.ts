const MAX_ADJACENT_ROLLS = 3;

function hasEnoughRoom(warehouse: string[], row: number, col: number): boolean {
  let paperRollCount = 0;

  for (let i = -1; i <= 1; i++) {
    const rowIndex = row + i;
    if (rowIndex < 0 || rowIndex >= warehouse.length) continue;

    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue; // Skip center cell

      const columnIndex = col + j;
      if (columnIndex < 0 || columnIndex >= warehouse[rowIndex].length)
        continue;

      if (warehouse[rowIndex][columnIndex] === '@') {
        paperRollCount++;
        if (paperRollCount > MAX_ADJACENT_ROLLS) return false; // Early exit
      }
    }
  }

  return true;
}

export default function partOne(inputArray: string[]): number {
  let availableRolls = 0;

  for (let row = 0; row < inputArray.length; row++) {
    for (let col = 0; col < inputArray[row].length; col++) {
      if (inputArray[row][col] === '@' && hasEnoughRoom(inputArray, row, col)) {
        availableRolls++;
      }
    }
  }

  return availableRolls;
}
