import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8');

const elves = input
	.split('\n\n')
	.map((elf) => elf.split('\n').map((line) => parseInt(line)))
	.map((elf) => elf.reduce((a, b) => a + b))
	.sort((a, b) => b - a)
	.splice(0, 3);

// The total calories of the top three elves.
const total = elves.reduce((a, b) => a + b);

console.log(
	`🎄 The most calories available from one elf is ${elves[0].toLocaleString()} calories.`,
);
console.log(
	`🎄 The total calories between the top three elves is ${total.toLocaleString()} calories.`,
);
