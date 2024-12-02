import fs from 'fs';
import partOne from './1';
import partTwo from './2';

const input = fs.readFileSync('input.txt', 'utf8');
const rounds = input.split('\n');

const start = Date.now();

const partOneFinalScore = partOne(rounds);
console.log(
	`🎄 Part one's final score is ${partOneFinalScore.toLocaleString()}.`,
);

const partTwoFinalScore = partTwo(rounds);
console.log(
	`🎄 Part two's final score is ${partTwoFinalScore.toLocaleString()}.`,
);

const end = Date.now();
console.log(`⏰ The script took ${end - start}ms to run.`);
