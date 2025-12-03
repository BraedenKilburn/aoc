function isPattern(idStr: string): boolean {
  if (idStr.length % 2 !== 0) return false;

  const middle = idStr.length / 2;
  return idStr.slice(0, middle) === idStr.slice(middle);
}

export default function partOne(ranges: string[]): number {
  let totalSum = 0;

  for (const range of ranges) {
    const [startStr, endStr] = range.split('-');

    // If the range doesn't cross a digit boundary (same length)
    // AND that length is odd, we can skip the entire range.
    if (startStr.length === endStr.length && startStr.length % 2 !== 0)
      continue;

    const startId = parseInt(startStr, 10);
    const endId = parseInt(endStr, 10);

    for (let id = startId; id <= endId; id++) {
      if (isPattern(id.toString())) totalSum += id;
    }
  }

  return totalSum;
}
