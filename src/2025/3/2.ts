export default function partTwo(inputArray: string[]): number {
  const TARGET_LENGTH = 12;
  let total = 0;

  for (const bank of inputArray) {
    const stack: number[] = [];
    const n = bank.length;

    for (let i = 0; i < n; i++) {
      const digit = parseInt(bank[i], 10);

      // While the stack has items, AND the current digit is bigger than the
      // last one we picked, AND we have enough remaining characters in the
      // bank to fill our quota even if we delete the top of the stack:
      while (
        stack.length > 0 &&
        stack[stack.length - 1] < digit &&
        stack.length - 1 + (n - i) >= TARGET_LENGTH
      ) {
        stack.pop();
      }

      // If we haven't hit the length limit yet, add the digit
      if (stack.length < TARGET_LENGTH) {
        stack.push(digit);
      }
    }

    total += parseInt(stack.join(''), 10);
  }

  return total;
}
