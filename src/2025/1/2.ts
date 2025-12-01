export default function partTwo(inputArray: string[]): number {
  let dialPosition = 50;
  let zeroHits = 0;

  for (const vector of inputArray) {
    const distance = parseInt(vector.slice(1), 10);

    const movingLeft = vector[0] === 'L';
    const direction = movingLeft ? -1 : 1;

    // Travel
    const finalPosition = dialPosition + direction * distance;

    // Count the number of 100s crossed
    if (direction === -1) {
      zeroHits +=
        Math.ceil(dialPosition / 100) - Math.ceil(finalPosition / 100);
    } else {
      zeroHits +=
        Math.floor(finalPosition / 100) - Math.floor(dialPosition / 100);
    }

    // Normalize
    dialPosition = ((finalPosition % 100) + 100) % 100;
  }

  return zeroHits;
}
