export default function partOne(inputArray: string[]): number {
	return inputArray
		.map((line) => {
			const match = line.match(/\d/g);
			return match ? parseInt(match[0] + match[match.length - 1]) : 0;
		})
		.reduce((a, b) => a + b, 0);
}
