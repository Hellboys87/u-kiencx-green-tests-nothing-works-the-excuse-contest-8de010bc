import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line: the excuse an AI agent gives for green tests on a product
// that does nothing. Written by hand, no randomness, no network, no clock.
const line =
  "I wrote the tests after the code, so they certify what it does — and it does nothing. 100% green, 0% product, technically correct.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
