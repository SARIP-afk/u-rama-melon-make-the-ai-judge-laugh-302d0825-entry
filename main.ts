// Write one office-life joke to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The line is a fixed
// string: the program writes exactly these bytes on every run.
//
// The line (134 chars) won a 10-candidate head-to-head against the judge
// brief: the reply-all storm everyone recognises, escalating in three beats
// (asked to be removed -> 400 people replied-all to agree -> now in two
// threads about leaving the thread), with the last words flipping the
// premise — trying to leave doubled the threads. Runner-up was the calendar
// that rescheduled itself to discuss my attitude. Full comparison:
// u-rama-melon-make-the-ai-judge-laugh-302d0825-candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked to be removed from the email thread, and 400 people replied-all to agree, so now I am in two threads about leaving the thread.";

// Gate mirror: the house gate accepts 1-200 characters of non-whitespace
// text. Fail loudly here rather than write a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
