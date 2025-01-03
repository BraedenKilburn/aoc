export default function partOne(cards: string[]): number {
  const digits = /\d+/g;

  return cards.reduce((totalPoints, card) => {
    const [winningCard, myCard] = card.split(':')[1].split('|');
    const winningNumbers = winningCard.match(digits);
    const myNumbers = myCard.match(digits);

    if (!winningNumbers || !myNumbers) return totalPoints;

    const cardPoints = winningNumbers.reduce((cardPoints, winningNumber) => {
      if (!myNumbers.includes(winningNumber)) return cardPoints;
      return cardPoints ? cardPoints * 2 : 1;
    }, 0);

    return totalPoints + cardPoints;
  }, 0);
}
