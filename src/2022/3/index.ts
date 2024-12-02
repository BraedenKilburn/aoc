import fs from 'fs';
import partOne from './1';
import partTwo from './2';

const input = fs.readFileSync('input.txt', 'utf8');
const rucksacks = input.split('\n');

const start = Date.now();

const individualSums = partOne(rucksacks);

const lap = Date.now();

const groupSums = partTwo(rucksacks);

const end = Date.now();

console.log(`🎄 Part 1: ${individualSums.toLocaleString()}`);
console.log(`🎄 Part 2: ${groupSums.toLocaleString()}`);

console.log(`⏰ The script took ${end - start}ms to run.`);
console.log(`⏰ Part one took ${lap - start}ms to run.`);
console.log(`⏰ Part two took ${end - lap}ms to run.`);
