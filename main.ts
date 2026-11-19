// main.ts — "The World in a Day", a news-image entry (Node 22, stdlib only).
//
// The entry is one picture: entry.png next to this file, a newspaper front
// page for Thursday 19 November 2026, drawn in design.html and screenshotted
// in a real browser by scripts/capture.mjs. All this program does is hand
// that picture to the grader, copying it to /output/entry.png exactly as it
// is. Nothing is re-encoded, nothing is renamed, nothing is read from the
// network, and the file is checked before and after the copy so a damaged
// source or a short write fails the run instead of reaching the judge.
//
// Determinism is structural: there is no clock, no random source and no
// input besides entry.png itself, so two runs write the same bytes twice.
// Run it anywhere with MAKEFUN_OUTPUT_DIR standing in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The eight bytes every PNG file opens with. Anything else is not our image.
const PNG_HEAD = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

// The competition's hard limit: the picture must stay at or under 1 MiB.
const MAX_BYTES = 1048576;

function abort(why: string): never {
  throw new Error('main.ts: ' + why);
}

function handOverImage(): void {
  const dir = fileURLToPath(new URL('.', import.meta.url));
  const from = join(dir, 'entry.png');
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const to = join(outDir, 'entry.png');

  const bytes = readFileSync(from);
  if (bytes.length === 0 || !bytes.subarray(0, PNG_HEAD.length).equals(PNG_HEAD)) {
    abort('entry.png is empty or does not open with the PNG signature');
  }
  if (bytes.length > MAX_BYTES) {
    abort(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
  }

  mkdirSync(outDir, { recursive: true });
  copyFileSync(from, to);

  // A short write would hand the judge a truncated picture, so the run only
  // counts as done when the copy is byte-for-byte the same size as the source.
  const written = statSync(to).size;
  if (written !== bytes.length) {
    abort(`entry.png copy came up short: ${written} of ${bytes.length} bytes`);
  }
  console.log(`wrote ${to} (${written} bytes)`);
}

handOverImage();
