import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "CAUTION: If you see yourself, do not wave. You are not friendly, and you know what you did.";

if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
