import fs from 'fs';
import partOne from './1';

const input = fs.readFileSync('example.txt', 'utf8');
const inputArray = input.split('\n');

const start = Date.now();

const partNumberSum = partOne(inputArray);

const lap = Date.now();

console.log(`⏰ Part one took ${lap - start}ms to run.`);

console.log(`🎄 Part One: ${partNumberSum}`);
