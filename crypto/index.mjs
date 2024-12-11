import { createHash, createGunzip } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile, unlink, writeFile } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

const hasher = createHash("sha1");
hasher.setEncoding("hex");

const filename = fileURLToPath(import.meta.url);
const _dirname = dirname(filename);
const filePath = join(_dirname, "crypto.txt");

const buffer = await readFile(filePath);

hasher.write(buffer);
hasher.end();

const fileHash = hasher.read();

const outputFilePath = join(_dirname, `${fileHash}.txt`);

await writeFile(outputFilePath, buffer);

const deleteFile = async (filePath) => {
  try {
    await unlink(filePath);
    console.log(`File ${filePath} has been deleted`);
  } catch (error) {
    console.error(`Error deleting file: ${error}`);
  }
};

const decompressGzip = async (inputPath, outputPath) => {
  const gunzip = createGunzip();
  const source = createReadStream(inputPath);
  const destination = createWriteStream(outputPath);

  try {
    await pipeline(source, gunzip, destination);
    console.log(`File ${inputPath} has been decompressed to ${outputPath}`);
  } catch (error) {
    console.error(`Error decompressing file: ${error}`);
  }
};

// Exemple d'utilisation de decompressGzip
const gzFilePath = join(_dirname, "example.gz");
const txtOutputPath = join(_dirname, "example.txt");
await decompressGzip(gzFilePath, txtOutputPath);

setTimeout(() => {
  deleteFile(outputFilePath);
}, 60000);
