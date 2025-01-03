export default function partTwo(rucksacks: string[]): number {
  // Separate the rucksacks into groups of 3
  const groups: string[][] = [];

  for (let i = 0; i < rucksacks.length; i += 3) {
    groups.push(rucksacks.slice(i, i + 3));
  }

  // For each group, find the common characters
  const commonCharacters = groups.map((group) => {
    const elf0 = group[0];
    const elf1 = group[1];
    const elf2 = group[2];

    for (let i = 0; i < elf0.length; i++) {
      if (elf1.includes(elf0[i]) && elf2.includes(elf0[i])) {
        return elf0[i];
      }
    }
  });

  return commonCharacters.reduce((sum, character) => {
    if (!character) return sum;
    if (character >= 'A' && character <= 'Z') {
      return sum + character.charCodeAt(0) - 38;
    } else {
      return sum + character.charCodeAt(0) - 96;
    }
  }, 0);
}
