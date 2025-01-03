function checkIfSafe(
  levelOne: number,
  levelTwo: number,
  isIncreasing: boolean,
) {
  const difference = levelOne - levelTwo;
  if (isIncreasing && difference >= 0) return false;
  else if (!isIncreasing && difference <= 0) return false;
  else {
    const absoluteDifference = Math.abs(difference);
    return absoluteDifference > 0 && absoluteDifference < 4;
  }
}

export default function partOne(reportArray: string[]): number {
  return reportArray.reduce((safeReports, report) => {
    const levels = report.split(/\s+/).map((level) => parseInt(level, 10));

    const isIncreasing = levels[0] - levels[1] < 0;

    levels.every((level, index) => {
      if (index + 1 === levels.length) safeReports++;
      return checkIfSafe(level, levels[index + 1], isIncreasing);
    });
    return safeReports;
  }, 0);
}
