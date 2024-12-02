import fs from 'fs';
import partOne from './1';
import partTwo from './2';

const input = fs.readFileSync('input.txt', 'utf8');
const inputArray = input.split('\n');

const start = Date.now();

const one = partOne(inputArray);

const lap = Date.now();

const two = partTwo(inputArray);

const end = Date.now();

console.log(`🎄 Part One: ${one}`);
console.log(`🎄 Part Two: ${two}`);

console.log(`⏰ The script took ${end - start}ms to run.`);
console.log(`⏰ Part one took ${lap - start}ms to run.`);
console.log(`⏰ Part two took ${end - lap}ms to run.`);
