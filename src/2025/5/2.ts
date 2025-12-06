type IdRange = {
  min: number;
  max: number;
};

export default function partTwo(freshIngredientsRanges: string[]): number {
  const ranges = freshIngredientsRanges
    .map<IdRange>((range) => {
      const [min, max] = range.split('-').map(Number);
      return { min, max };
    })
    .sort((a, b) => a.min - b.min);

  const merged: Array<IdRange> = [];

  for (const range of ranges) {
    if (merged.length === 0) {
      merged.push(range);
      continue;
    }

    const last = merged[merged.length - 1];

    // Check if ranges overlap or are adjacent
    if (range.min <= last.max + 1) {
      // Merge by extending the last range
      last.max = Math.max(last.max, range.max);
    } else {
      // No overlap, add as new range
      merged.push(range);
    }
  }

  return merged.reduce((sum, range) => {
    return sum + (range.max - range.min + 1);
  }, 0);
}
