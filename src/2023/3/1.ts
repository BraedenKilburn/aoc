const getSurroundingString = (
  line: string,
  topLine: string,
  bottomLine: string,
  matchIndex: number,
  digitLength: number,
): string => {
  const leftIndex = matchIndex > 0 ? matchIndex - 1 : 0;
  const rightIndex = matchIndex + digitLength;

  return [
    topLine.slice(leftIndex, rightIndex + 1),
    bottomLine.slice(leftIndex, rightIndex + 1),
    line[leftIndex] ?? '',
    line[rightIndex] ?? '',
  ].join('');
};

export default function partOne(schematic: string[]): number {
  const digitRegex = /\d+/g;
  const hasSymbolRegex = /[^.\d]+/g;

  return schematic.reduce((acc, line, index) => {
    const topLine = index > 0 ? schematic[index - 1] : '';
    const bottomLine = schematic[index + 1] ?? '';

    return (
      acc +
      [...line.matchAll(digitRegex)]
        .map((match) => ({ digit: match[0], matchIndex: match.index! }))
        .filter(({ digit, matchIndex }) => {
          const surroundingString = getSurroundingString(
            line,
            topLine,
            bottomLine,
            matchIndex,
            digit.length,
          );
          hasSymbolRegex.lastIndex = 0;
          return hasSymbolRegex.test(surroundingString);
        })
        .reduce((innerAcc, { digit }) => innerAcc + Number(digit), 0)
    );
  }, 0);
}
