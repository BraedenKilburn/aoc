import { getMaps } from './utils';

function findMapping(map: number[][], source: number): number {
  const correspondence = map.find((row) => {
    const [, sourceStart, range] = row;
    return source >= sourceStart && source < sourceStart + range;
  });

  if (!correspondence) return source;

  const [destStart, sourceStart] = correspondence;
  const difference = destStart - sourceStart;
  return source + difference;
}

function lowestLocation(inputArray: string[], seeds: number[]): number {
  const [
    soilMap,
    fertilizerMap,
    waterMap,
    lightMap,
    temperatureMap,
    humidityMap,
    locationMap,
  ] = getMaps(inputArray.slice(1));

  let lowestLocation: number = Infinity;

  for (const seed of seeds) {
    const soil = findMapping(soilMap, seed);
    const fertilizer = findMapping(fertilizerMap, soil);
    const water = findMapping(waterMap, fertilizer);
    const light = findMapping(lightMap, water);
    const temperature = findMapping(temperatureMap, light);
    const humidity = findMapping(humidityMap, temperature);
    const location = findMapping(locationMap, humidity);

    lowestLocation = Math.min(lowestLocation, location);
  }

  return lowestLocation;
}

export default function partOne(inputArray: string[]): number {
  const [seedString] = inputArray;

  const seeds = seedString.split(': ')[1].split(' ').map(Number);

  return lowestLocation(inputArray, seeds);
}
