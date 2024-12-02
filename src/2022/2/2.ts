import { Using, NeedsTo } from './enums';

export default function partTwo(rounds: string[]): number {
	let finalScore = 0;

	rounds.forEach((round) => {
		const [opponent, player] = round.split(' ');

		if (player === NeedsTo.Draw) {
			if (opponent === Using.Rock) {
				finalScore += 1; // Using Rock
			} else if (opponent === Using.Paper) {
				finalScore += 2; // Using Paper
			} else {
				finalScore += 3; // Using Scissors
			}
			finalScore += 3; // Draw Outcome
		} else if (player === NeedsTo.Lose) {
			if (opponent === Using.Paper) {
				finalScore += 1; // Using Rock
			} else if (opponent === Using.Scissors) {
				finalScore += 2; // Using Paper
			} else {
				finalScore += 3; // Using Scissors
			}
		} else {
			if (opponent === Using.Scissors) {
				finalScore += 1; // Using Rock
			} else if (opponent === Using.Rock) {
				finalScore += 2; // Using Paper
			} else {
				finalScore += 3; // Using Scissors
			}
			finalScore += 6; // Win Outcome
		}
	});

	return finalScore;
}
