import { OPTIONS_ENUM } from "./modules/constants.js";
import {
  askMainPrompt,
  printArgsError,
  printComputerPick,
  printHelp,
  printHmac,
  printKey,
  printResult,
  printThanks,
  printRepeatingArgsError,
} from "./modules/display.js";
import { encryptMove } from "./modules/encryption.js";
import { getMatrix, getWinner } from "./modules/game.js";

const options = process.argv.slice(2);

if (options.length < 3 || options.length % 2 === 0) {
  printArgsError();
  process.exit(1);
}

if (options.length !== [...new Set(options)].length) {
  printRepeatingArgsError();
  process.exit(1);
}

const computerPick = Math.floor(Math.random() * options.length);
const { hmac, key } = encryptMove(options[computerPick]);

const matrix = getMatrix(options);

async function mainCycle() {
  console.clear();
  printHmac(hmac);
  const answer = await askMainPrompt(options);
  if (answer === OPTIONS_ENUM.EXIT) {
    console.clear();
    process.exit(0);
  }
  if (answer === OPTIONS_ENUM.HELP) {
    return await helpScreenCycle();
  }

  printComputerPick(options[computerPick]);
  printResult(getWinner(matrix, answer, computerPick));
  printKey(key);
  printThanks();
  process.exit(0);
}

async function helpScreenCycle() {
  console.clear();
  await printHelp(options, matrix);
  return await mainCycle();
}

mainCycle();
