export default function partTwo(cardArray: string[]): number {
  const digits = /\d+/g;

  // Create a map (object) to keep track of the count of each scratch card.
  // Initially, each card count is set to 1.
  const cardCounts: Record<number, number> = {};
  cardArray.forEach((_, index) => (cardCounts[index] = 1));

  // Loop through each card in the array. The reduce method accumulates the total
  // number of cards (including the ones won).
  return cardArray.reduce((totalCards, card, index) => {
    const [winningCard, myCard] = card.split(':')[1].split('|');
    const winningNumbers = winningCard.match(digits);
    const myNumbers = myCard.match(digits);

    if (!winningNumbers || !myNumbers) return totalCards;

    // Count the number of matches (i.e., the same numbers) between the winning card and my card.
    const numOfMatches = winningNumbers.filter((number) =>
      myNumbers.includes(number),
    ).length;

    // For each instance of the current card, check if there are additional copies won.
    while (cardCounts[index] > 0) {
      // For each match, increment the count of subsequent cards by 1.
      for (let i = 1; i <= numOfMatches; i++) {
        cardCounts[index + i]++;
      }

      // Decrement the count of the current card, as it's been 'used',
      // and increment the total number of cards processed.
      cardCounts[index]--;
      totalCards++;
    }

    return totalCards;
  }, 0);
}
