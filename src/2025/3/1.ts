export default function partOne(inputArray: string[]): number {
  let total = 0;

  for (const bank of inputArray) {
    let maxJoltage = 0;
    let maxTens = 0;

    for (const char of bank) {
      const digit = parseInt(char, 10);

      // If we have seen a valid tens digit previously, calculate the pair
      if (maxTens !== 0) {
        const currentJoltage = maxTens * 10 + digit;
        if (currentJoltage > maxJoltage) {
          maxJoltage = currentJoltage;
        }
      }

      // Update the largest digit available to be a "tens" place for future digits
      if (digit > maxTens) {
        maxTens = digit;
      }
    }

    total += maxJoltage;
  }

  return total;
}
