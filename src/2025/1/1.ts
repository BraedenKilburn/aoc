export default function partOne(inputArray: string[]): number {
  let dialPosition = 50;
  let zeroHits = 0;

  for (const vector of inputArray) {
    const distance = parseInt(vector.slice(1), 10);
    const direction = vector[0] === 'L' ? -1 : 1;

    // Travel
    dialPosition += direction * distance;

    // Normalize
    dialPosition = ((dialPosition % 100) + 100) % 100;

    if (dialPosition === 0) zeroHits++;
  }

  return zeroHits;
}
