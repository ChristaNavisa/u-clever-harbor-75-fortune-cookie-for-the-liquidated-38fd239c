import { mkdirSync, writeFileSync } from "node:fs";

// One fortune cookie line for a crypto trader who was just liquidated.
// Fortune voice up front, then the punchline breaks it.
const FORTUNE =
  "You will meet a tall, dark stranger. He is the liquidator, and he already has your keys.";

// Self-check against the competition gate: 1-160 characters, at most 20 words,
// one line of plain text. Failing here is better than failing in the grader.
const words = FORTUNE.trim().split(/\s+/);
if (FORTUNE.length < 1 || FORTUNE.length > 160) {
  throw new Error(`fortune is ${FORTUNE.length} characters, gate needs 1-160`);
}
if (words.length > 20) {
  throw new Error(`fortune is ${words.length} words, gate needs at most 20`);
}
if (FORTUNE.includes("\n")) {
  throw new Error("fortune must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
