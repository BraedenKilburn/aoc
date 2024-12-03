interface BenchmarkResult<T> {
	result: T;
	executionTime: number;
	memoryUsed?: number;
}

export function benchmark<T>(fn: () => T, iterations = 1): BenchmarkResult<T> {
	// Must run at least once
	if (iterations < 1) throw new Error('Iterations must be greater than 0');

	// Warm up the function
	fn();

	const times: number[] = [];
	const memoryStart = process.memoryUsage().heapUsed;

	// Run the benchmark
	let result: T;
	for (let i = 0; i < iterations; i++) {
		const start = performance.now();
		result = fn();
		const end = performance.now();
		times.push(end - start);
	}

	const memoryEnd = process.memoryUsage().heapUsed;

	return {
		result: result!,
		executionTime: Number(
			(times.reduce((a, b) => a + b) / iterations).toFixed(3),
		),
		memoryUsed: memoryEnd - memoryStart,
	};
}
