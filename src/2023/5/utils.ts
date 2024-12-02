function parseMap(input: string): number[][] {
	return input
		.trim()
		.split(':\n')[1]
		.split('\n')
		.map((row) => row.split(' ').map(Number));
}

export function getMaps(inputArray: string[]): number[][][] {
	return inputArray.map(parseMap);
}
