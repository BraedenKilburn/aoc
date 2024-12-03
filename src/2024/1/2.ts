export default function partTwo(
	leftList: number[],
	rightList: number[],
): number {
	// Create a frequency map of the right list
	const frequencyMap = rightList.reduce((map, num) => {
		map.set(num, (map.get(num) ?? 0) + 1);
		return map;
	}, new Map<number, number>());

	// This map allows us to avoid recalculating the similarity
	// score for numbers already visited
	const similarityMap = new Map<number, number>();
	return leftList.reduce((acc, curr) => {
		const frequency = frequencyMap.get(curr);
		if (frequency) {
			const similarityScore = curr * frequency;
			similarityMap.set(curr, similarityScore);
			return acc + similarityScore;
		}
		return acc;
	}, 0);
}
