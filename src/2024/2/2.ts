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

export default function partTwo(reportArray: string[]): number {
  return reportArray.reduce((safeReports, report) => {
    const levels = report.split(/\s+/).map(Number);

    let isIncreasing = levels[0] - levels[1] < 0;
    for (let index = 0; index < levels.length; index++) {
      if (index + 1 === levels.length) {
        safeReports++;
        break;
      }

      const isSafe = checkIfSafe(
        levels[index],
        levels[index + 1],
        isIncreasing,
      );
      if (!isSafe) {
        if (index === 1) {
          isIncreasing = levels[0] - levels[2] < 0;
          if (checkIfSafe(levels[0], levels[2], isIncreasing)) continue;
          else break;
        }

        if (checkIfSafe(levels[index], levels[index + 2], isIncreasing))
          continue;
        break;
      }
    }
    return safeReports;
  }, 0);
}
