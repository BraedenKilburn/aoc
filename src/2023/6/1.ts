import calculateWinningWays from './utils';

export default function partOne(inputArray: string[]): number {
  const [timeString, distanceString] = inputArray;

  const digits = /\d+/g;
  const times = timeString.match(digits)!.map(Number);
  const distances = distanceString.match(digits)!.map(Number);

  return times
    .map((time, index) => calculateWinningWays(time, distances[index]))
    .reduce((acc, curr) => (acc *= curr), 1);
}
