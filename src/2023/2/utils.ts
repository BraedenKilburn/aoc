function maxAmount(colors: string[]): number {
  return Math.max(...colors.map((color) => parseInt(color.split(' ')[0])));
}

export default function getColorAmount(color: string, game: string): number {
  const match = game.match(new RegExp(`\\d+(?: ${color})`, 'g'));
  return match ? maxAmount(match) : 0;
}
