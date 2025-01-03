export default function partOne(rucksacks: string[]): number {
  const duplicates: string[] = [];

  rucksacks.forEach((rucksack) => {
    // Split the string into two halves
    const left = rucksack.slice(0, rucksack.length / 2);
    const right = rucksack.slice(rucksack.length / 2);

    // For each character in the left half, add it to a set
    const leftSet = new Set<string>();
    for (let i = 0; i < left.length; i++) {
      leftSet.add(left[i]);
    }

    // For each character in the right half, add it to a set
    const rightSet = new Set<string>();
    for (let i = 0; i < right.length; i++) {
      rightSet.add(right[i]);
    }

    // For each character in the left set, check if it is in the right set
    leftSet.forEach((char) => {
      if (rightSet.has(char)) {
        duplicates.push(char);
      }
    });
  });

  // Return the sum of the priorities of the duplicates
  return duplicates.reduce((sum, character) => {
    if (character >= 'A' && character <= 'Z') {
      return sum + character.charCodeAt(0) - 38;
    } else {
      return sum + character.charCodeAt(0) - 96;
    }
  }, 0);
}
