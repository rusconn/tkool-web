#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { promisify } from "node:util";

const main = async () => {
  const lastArg = process.argv.at(-1);

  if (!lastArg?.endsWith(".json")) {
    exit(`invalid json path: ${lastArg}`);
  }

  const jsonPath = path.resolve("./", lastArg);

  if (!fs.existsSync(jsonPath)) {
    exit(`invalid json path: ${lastArg}`);
  }

  const { default: obj } = await import(jsonPath, {
    assert: { type: "json" },
  });

  const writes = Object.entries(obj).map(async ([key, value]) => {
    const filename = `${key.replace("RPG ", "").toLowerCase()}.rpgsave`;
    const filepath = `./${filename}`;
    await writeFile(filepath, value);
    return filepath;
  });

  const filepaths = await Promise.all(writes);

  console.log(filepaths.join("\n"));
};

const exit = (msg, code = 1) => {
  console.error(msg);
  process.exit(code);
};

const writeFile = promisify(fs.writeFile);

main();
