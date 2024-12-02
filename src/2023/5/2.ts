import { getMaps } from './utils';

function findMapping(map: number[][], source: number): number {
	const correspondence = map.find((row) => {
		const [destStart, , range] = row;
		return source >= destStart && source < destStart + range;
	});

	if (!correspondence) return source;

	const [destStart, sourceStart] = correspondence;
	const difference = sourceStart - destStart;
	return source + difference;
}

function validSeed(seed: number, pairs: number[][]): boolean {
	return pairs.some(([start, end]) => seed >= start && seed < start + end);
}

function lowestLocation(inputArray: string[], pairs: number[][]): number {
	const [
		soilMap,
		fertilizerMap,
		waterMap,
		lightMap,
		temperatureMap,
		humidityMap,
		locationMap,
	] = getMaps(inputArray.slice(1));

	let lowestLocation = Infinity;
	let location = 0;

	while (lowestLocation === Infinity) {
		const humidity = findMapping(locationMap, location);
		const temperature = findMapping(humidityMap, humidity);
		const light = findMapping(temperatureMap, temperature);
		const water = findMapping(lightMap, light);
		const fertilizer = findMapping(waterMap, water);
		const soil = findMapping(fertilizerMap, fertilizer);
		const seed = findMapping(soilMap, soil);

		if (validSeed(seed, pairs)) lowestLocation = location;
		else location++;
	}

	return lowestLocation;
}

export default function partTwo(inputArray: string[]): number {
	const [seedRangeArray] = inputArray;

	const pairs = seedRangeArray
		.split(': ')[1]
		.split(' ')
		.map(Number)
		.map<number[]>((seedStart, index, original) => {
			if (index % 2 !== 0) return [];
			return [seedStart, original[index + 1]];
		})
		.filter((pair) => pair.length > 0);

	return lowestLocation(inputArray, pairs);
}
