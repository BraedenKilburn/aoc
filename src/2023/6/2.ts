import calculateWinningWays from './utils';

const concatenateStrings = (acc: string, curr: string): string => {
  return acc + curr;
};

export default function partTwo(inputArray: string[]): number {
  const [timeString, distanceString] = inputArray;

  const digits = /\d+/g;
  const time = timeString.match(digits)!.reduce(concatenateStrings, '');
  const distance = distanceString.match(digits)!.reduce(concatenateStrings, '');

  return calculateWinningWays(Number(time), Number(distance));
}
