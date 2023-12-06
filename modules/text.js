import chalk from "chalk";
import { HMAC_ENCRYPTION_METHOD } from "./constants.js";

const text = {
  args_error: "Please provide an odd number of arguments (at least 3)",
  repeating_args_error: "The arguments should not repeat! Try again",
  main_message: "Make your choice:",
  help_message: `This is a generalized rock-paper-scissors style game.
- You can provide any ODD number of attacking options in the terminal (at least 3).
- At the start of the game you will get an encrypted message with the computer's choice.
- After the game has ended you will get a key to verify that message.
Good luck!
  `,
  help_opt: "HELP",
  help_description: "Print the rules",
  choose_an_option: "Choose an option:",
  go_back: "GO BACK",
  exit_opt: "EXIT",
  exit_description: "Quit the game",
  opt_description: (opt) => `You choose: ${opt} ${chalk.dim("(press Enter)")}`,
  computer_picked: (choice) => `Computer picked: ${choice}`,
  you_win: chalk.bgGreen("--- YOU WIN! ---"),
  you_lose: chalk.bgRed("--- YOU LOSE! ---"),
  its_a_tie: chalk.bgYellow("--- IT'S A TIE! ---"),
  thanks: "Thanks for playing!",
  tableCornerHeader: "your moves ↓ / computer moves → ",
  tableHeading: "Table of winners",
  your_hmac: (hmac) => `Your hmac: ${hmac}`,
  your_key: (key) => `Your key (${HMAC_ENCRYPTION_METHOD}): ${key}`,
};

export default text;
