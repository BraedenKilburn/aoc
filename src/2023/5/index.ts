import fs from 'fs';
import partOne from './1';
import partTwo from './2';

const input = fs.readFileSync('input.txt', 'utf8');
const inputArray = input.split('\n\n');

const start = Date.now();

const lowestLocationNumber = partOne(inputArray);

const lap = Date.now();

const rangeLocationNumber = partTwo(inputArray);

const end = Date.now();

console.log(`⏰ The script took ${end - start}ms to run.`);
console.log(`⏰ Part one took ${lap - start}ms to run.`);
console.log(`⏰ Part two took ${end - lap}ms to run.`);

console.log(`🌱 Part One: ${lowestLocationNumber}`);
console.log(`🌱 Part Two: ${rangeLocationNumber}`);
