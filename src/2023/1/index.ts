import fs from 'fs';
import partOne from './1';
import partTwo from './2';

const input = fs.readFileSync('input.txt', 'utf8');
const values = input.split('\n');

const start = Date.now();

const partOneTotal = partOne(values);

const lap = Date.now();

const partTwoTotal = partTwo(values);

const end = Date.now();

console.log(`⏰ The script took ${end - start}ms to run.`);
console.log(`⏰ Part one took ${lap - start}ms to run.`);
console.log(`⏰ Part two took ${end - lap}ms to run.`);

console.log(`🚀 The answer to part one is ${partOneTotal}.`);
console.log(`🚀 The answer to part two is ${partTwoTotal}.`);
