// streams.mjs
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

// ensure you have a `package.json` file for this test!
await pipeline(
  createReadStream("infos.txt"),
  createGzip(),
  createWriteStream("infos.txt.gz")
);
