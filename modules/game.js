import { WINNERS_ENUM } from "./constants.js";

export function getMatrix(options) {
  return options.map((_, i) => {
    return options.map((_, j) => {
      if (i === j) return WINNERS_ENUM.TIE;

      if (j > i) {
        if (i % 2 === 0) {
          return j % 2 === 0 ? WINNERS_ENUM.HUMAN : WINNERS_ENUM.COMPUTER;
        }
        return j % 2 !== 0 ? WINNERS_ENUM.HUMAN : WINNERS_ENUM.COMPUTER;
      }

      if (i % 2 !== 0) {
        return j % 2 === 0 ? WINNERS_ENUM.HUMAN : WINNERS_ENUM.COMPUTER;
      }
      return j % 2 !== 0 ? WINNERS_ENUM.HUMAN : WINNERS_ENUM.COMPUTER;
    });
  });
}

export function getWinner(matrix, humanOpt, computerOpt) {
  return matrix[humanOpt][computerOpt];
}
