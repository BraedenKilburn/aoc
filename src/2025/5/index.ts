import partOne from './1';
import partTwo from './2';

// With Bun, text files can be imported as strings
// import input from './example.txt';
import input from './input.txt';

const [freshIngredientsRange, ingredientIds] = input
  .split('\n\n')
  .map((range) => range.split('\n'));

const start = performance.now();

const one = partOne(freshIngredientsRange, ingredientIds);

const lap = performance.now();

const two = partTwo(freshIngredientsRange);

const end = performance.now();

console.log(`🎄 Part One: ${one}`);
console.log(`🎄 Part Two: ${two}`);

console.log(`⏰ The script took ${end - start}ms to run.`);
console.log(`⏰ Part one took ${lap - start}ms to run.`);
console.log(`⏰ Part two took ${end - lap}ms to run.`);
