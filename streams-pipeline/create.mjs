import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const filename = fileURLToPath(import.meta.url);
const _dirname = dirname(filename);
const inputFilePath = join(_dirname, "create.txt");
const outputFilePath = join(_dirname, "create.txt.gz");

// ensure you have a `package.json` file for this test!
await pipeline(
  createReadStream(inputFilePath),
  createGzip(),
  createWriteStream(outputFilePath)
);
