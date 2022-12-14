#!/usr/bin/env node

import { sleep } from "@cpbuildtools/lib-node-utilities";
import { exit } from "process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

(async () => {
  try {
    await yargs(hideBin(process.argv))
      .scriptName("devenv")
      .commandDir("../cli/commands/devenv", { extensions: ["js"], recurse: true })
      .parse();
  } catch (e) {
    console.error(e);
    await sleep(60 * 1000);
    exit(1);
  }
})();
