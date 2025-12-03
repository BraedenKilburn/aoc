function containsPattern(id: string): boolean {
  const totalLength = id.length;

  // We only need to check sizes up to half the length.
  // A pattern bigger than half cannot repeat at least twice.
  for (let size = 1; size <= totalLength / 2; size++) {
    // A pattern's length must not have any remainders
    if (totalLength % size !== 0) continue;

    // Possible pattern segment
    const pattern = id.slice(0, size);

    // How many times would this fit?
    const repeatsNeeded = totalLength / size;

    // Does it match original value when repeated?
    if (pattern.repeat(repeatsNeeded) === id) return true;
  }

  return false;
}

export default function partTwo(ranges: string[]): number {
  const ids: number[] = [];

  for (const range of ranges) {
    const [start, end] = range.split('-');

    const startId = parseInt(start, 10);
    const endId = parseInt(end, 10);

    for (let id = startId; id <= endId; id++) {
      if (containsPattern(id.toString())) ids.push(id);
    }
  }

  return ids.reduce((sum, current) => {
    return sum + current;
  }, 0);
}
