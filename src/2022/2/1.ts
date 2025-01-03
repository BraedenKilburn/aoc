import { Using } from './enums';

export default function partOne(rounds: string[]): number {
  let finalScore = 0;

  rounds.forEach((round) => {
    const [opponent, playerTemp] = round.split(' ');
    let player = playerTemp;

    // Make the player's move look the same as the opponent's move.
    player = String.fromCharCode(player.charCodeAt(0) - 23);

    if (player === opponent) {
      if (player === Using.Rock) {
        finalScore += 1; // Using Rock
      } else if (player === Using.Paper) {
        finalScore += 2; // Using Paper
      } else {
        finalScore += 3; // Using Scissors
      }
      finalScore += 3; // Draw Outcome
    } else {
      if (player === Using.Rock) {
        if (opponent === Using.Scissors) {
          finalScore += 6; // Win Outcome
        }
        finalScore += 1; // Using Rock
      } else if (player === Using.Paper) {
        if (opponent === Using.Rock) {
          finalScore += 6; // Win Outcome
        }
        finalScore += 2; // Using Paper
      } else {
        if (opponent === Using.Paper) {
          finalScore += 6; // Win Outcome
        }
        finalScore += 3; // Using Scissors
      }
    }
  });

  return finalScore;
}
