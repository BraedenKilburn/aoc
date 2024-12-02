export default function calculateWinningWays(
	time: number,
	distance: number,
): number {
	const ways =
		Array.from(
			{ length: Math.floor(time / 2) + 1 },
			(_, speed) => speed,
		).filter((speed) => speed * (time - speed) > distance).length * 2;

	return time % 2 === 0 ? ways - 1 : ways;
}
