import getColorAmount from './utils';

export default function partTwo(games: string[]): number {
	return games.reduce((acc, game) => {
		const numReds = getColorAmount('red', game);
		const numGreens = getColorAmount('green', game);
		const numBlues = getColorAmount('blue', game);

		return (acc += numReds * numGreens * numBlues);
	}, 0);
}
