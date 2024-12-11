import { createServer } from "node:http";
import { fileURLToPath } from "node:url";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
