import { benchmark } from '../../benchmark';
import partOne from './1';
import partTwo from './2';
import input from './input.txt';

const inputArray = input.trim().split('\n');

// Separate the left and right lists
const [leftList, rightList] = inputArray
  .flatMap((line) => line.split(/\s+/))
  .reduce<[number[], number[]]>(
    ([left, right], num, index) => {
      (index % 2 === 0 ? left : right).push(parseInt(num, 10));
      return [left, right];
    },
    [[], []],
  );

// Run benchmarks with 100 iterations each
const partOneResults = benchmark<number>(
  () => partOne(leftList, rightList),
  100,
);
const partTwoResults = benchmark<number>(
  () => partTwo(leftList, rightList),
  100,
);

console.log('\n🎄 Results:');
console.log(`Part One: ${partOneResults.result}`);
console.log(`Part Two: ${partTwoResults.result}`);

console.log('\n⚡ Performance:');
console.log(`Part One: ${partOneResults.executionTime}ms (avg)`);
console.log(`Part Two: ${partTwoResults.executionTime}ms (avg)`);

if (partOneResults.memoryUsed && partTwoResults.memoryUsed) {
  console.log('\n💾 Memory Usage:');
  console.log(
    `Part One: ${(partOneResults.memoryUsed / 1024 / 1024).toFixed(2)}MB`,
  );
  console.log(
    `Part Two: ${(partTwoResults.memoryUsed / 1024 / 1024).toFixed(2)}MB`,
  );
}
