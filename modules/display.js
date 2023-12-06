import { select, Separator } from "@inquirer/prompts";
import text from "./text.js";
import { getTable } from "./table.js";
import { OPTIONS_ENUM, WINNERS_ENUM } from "./constants.js";

export function printArgsError() {
  console.log(text.args_error);
}

export function printRepeatingArgsError() {
  console.log(text.repeating_args_error);
}

export async function askMainPrompt(options) {
  return await select({
    message: text.main_message,
    loop: false,
    pageSize: 10,
    choices: options
      .map((opt, idx) => ({
        name: opt,
        value: idx,
        description: text.opt_description(opt),
      }))
      .concat(MAIN_FOOTER),
  });
}

export async function printHelp(options, matrix) {
  console.log(text.help_message);
  console.log(getTable(options, matrix).toString());
  return await select({
    message: text.choose_an_option,
    choices: HELP_FOOTER,
  });
}

export function printHmac(hmac) {
  console.log(text.your_hmac(hmac));
}

export function printKey(key) {
  console.log(text.your_key(key));
}

export function printComputerPick(computerPick) {
  console.log(text.computer_picked(computerPick));
}

export function printResult(winner) {
  const logs = {
    [WINNERS_ENUM.HUMAN]: () => console.log(text.you_win),
    [WINNERS_ENUM.COMPUTER]: () => console.log(text.you_lose),
    [WINNERS_ENUM.TIE]: () => console.log(text.its_a_tie),
  };
  logs[winner]();
}

export function printThanks() {
  console.log(text.thanks);
}

const MAIN_FOOTER = [
  new Separator(),
  {
    name: text.help_opt,
    value: OPTIONS_ENUM.HELP,
    description: text.help_description,
  },
  {
    name: text.exit_opt,
    value: OPTIONS_ENUM.EXIT,
    description: text.exit_description,
  },
  new Separator(),
];

const HELP_FOOTER = [
  new Separator(),
  {
    name: text.go_back,
  },
  new Separator(),
];
