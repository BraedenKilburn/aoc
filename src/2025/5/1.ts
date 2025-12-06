type IdRange = {
  min: number;
  max: number;
};

let ranges: IdRange[] = [];
function isFresh(idString: string) {
  const id = parseInt(idString, 10);
  return ranges.some(({ min, max }) => id >= min && id <= max);
}

export default function partOne(
  freshIngredientsRange: string[],
  ingredientIds: string[],
): number {
  ranges = freshIngredientsRange.map((range) => {
    const [min, max] = range.split('-').map(Number);
    return { min, max };
  });

  return ingredientIds.filter(isFresh).length;
}
