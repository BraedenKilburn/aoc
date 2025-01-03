export default function partOne(
  leftList: number[],
  rightList: number[],
): number {
  const sortedLeft = leftList.toSorted();
  const sortedRight = rightList.toSorted();
  return sortedLeft.reduce(
    (acc, curr, index) => acc + Math.abs(curr - sortedRight[index]),
    0,
  );
}
