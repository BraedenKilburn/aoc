import getColorAmount from './utils';

function isPossible(color: 'red' | 'green' | 'blue', amount: number): boolean {
	const maxAmounts = { red: 12, green: 13, blue: 14 };
	return amount <= maxAmounts[color];
}

export default function partOne(games: string[]): number {
	return games.reduce((acc, game, index) => {
		const numReds = getColorAmount('red', game);
		const numGreens = getColorAmount('green', game);
		const numBlues = getColorAmount('blue', game);

		const redPossible = isPossible('red', numReds);
		const greenPossible = isPossible('green', numGreens);
		const bluePossible = isPossible('blue', numBlues);

		const possible = redPossible && greenPossible && bluePossible;
		if (possible) acc += index + 1;

		return acc;
	}, 0);
}
