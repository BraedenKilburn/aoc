const MAX_ADJACENT_ROLLS = 3;

function hasEnoughRoom(
  warehouse: string[][],
  row: number,
  col: number,
): boolean {
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

function searchWarehouse(warehouse: string[][]) {
  let availableRolls = 0;

  for (let rowIndex = 0; rowIndex < warehouse.length; rowIndex++) {
    const row = warehouse[rowIndex];

    for (let column = 0; column < row.length; column++) {
      const item = row[column];
      if (item !== '@') continue;

      const hasRoom = hasEnoughRoom(warehouse, rowIndex, column);
      if (!hasRoom) continue;

      availableRolls++;
      warehouse[rowIndex][column] = '.';
    }
  }

  // Oooh, recursion
  if (availableRolls > 0) availableRolls += searchWarehouse(warehouse);

  return availableRolls;
}

export default function partTwo(inputArray: string[]): number {
  const warehouse = inputArray.map((row) => row.split(''));
  return searchWarehouse(warehouse);
}
