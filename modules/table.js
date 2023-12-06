import { AsciiTable3 } from "ascii-table3";
import chalk from "chalk";
import text from "./text.js";
import { WINNERS_ENUM } from "./constants.js";

export function getTable(options, matrix) {
  const table = new AsciiTable3(text.tableHeading);
  table.setHeading(text.tableCornerHeader, ...options);
  table.addRowMatrix(matrix.map((list, idx) => [options[idx], ...list.map(addStylesToWinner)]));
  return table;
}

function addStylesToWinner(winner) {
  const styles = {
    [WINNERS_ENUM.HUMAN]: chalk.greenBright(winner),
    [WINNERS_ENUM.COMPUTER]: chalk.redBright(winner),
  };
  return styles[winner] || winner;
}
