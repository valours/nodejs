// streams.mjs
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { fileURLToPath } from "node:url";

import { dirname, join } from "node:path";

const filename = fileURLToPath(import.meta.url);
const _dirname = dirname(filename);
const inputFilePath = join(_dirname, "open.txt.gz");
const outputFilePath = join(_dirname, "open.txt");

// ensure you have a `package.json` file for this test!
await pipeline(
  createReadStream(inputFilePath),
  createGunzip(),
  createWriteStream(outputFilePath)
);
