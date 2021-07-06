import fs from "fs";
import { compile } from "svelte/compiler";

const all = fs.readdirSync("./pages");

for (const path of all) {
  if (path.slice(-7) !== ".svelte") continue;
  
  const contents = fs.readFileSync("./pages/" + path).toString();
  const result = compile(contents);

  console.log("🚩 [LM]:", result);
}
