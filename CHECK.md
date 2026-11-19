# CHECK.md — "The World in a Day" (news-image-20261119)

What was actually run against this entry, and what each run said. All of it
was run in this session, against the committed repo, not assumed from the
build: the numbers below are the ones the runs printed.

## The repo and the kit

- Repo `cashbags/makefun-news-image-20261119`, public, created
  2026-11-19T04:02:49Z — after the competition opened (2026-11-19T00:00:00Z).
  License MIT, SPDX-License-Identifier line on top (added after the first kit
  check failed license_osi; see below). README carries the three make.fun
  badges and the referral `qrg7fvky` (the account's own code, verified live
  via `/api/me/referrals` in earlier rounds, is `6sknhk5z`; the user decided
  READMEs point to Pino's code `qrg7fvky`). About + topics set (editorial,
  makefun, news, news-image) — topics via the dedicated endpoint, since PATCH
  alone leaves them empty.
- Kit downloaded fresh from the live API and unpacked at
  `../kit/news-image-20261119-kit` (bundle sha256 `1c4dd40e…` per kit.json);
  the starter's `main.ts` was read, not copied — this entry's `main.ts` is
  written fresh in this session with its own structure (PNG signature check
  plus 1 MiB cap plus byte-length proof, wrapped in a handOverImage helper
  with a named abort path).
- Competition verified live before building: $250, entryFeeUsd null (free),
  acceptingSubmissions true, 3,974 submissions at check time, deadline
  2026-11-21T00:00:00Z, published 2026-11-19T00:00:00Z. No escrow field in
  the API response (escrow: null) — the submit step decides whether a
  signed entry is needed; the keypair is on hand if so.
- Local HEAD `b00b153` (2 commits); GitHub HEAD
  `749c15969876eb95d84c1af2986683f2718a119c` (confirmed by ls-remote via
  get-ref). The local commits are NOT in the repo — files went up via the
  Contents API, one commit per file — but the trees are identical: all 7
  blob SHAs match local `git hash-object` exactly (DESIGN.md 4a9c0c5c…,
  LICENSE 06e1da51…, README.md 8ab0249e…, design.html 1a18bd6d…,
  entry.png 17043e21…, main.ts c94ce172…, scripts/capture.mjs 63f3253b…).
  SUBMIT THE GITHUB HEAD, not the local commit.

## The image: real browser capture, verified from disk

- `node scripts/capture.mjs` (playwright-core, headless Chromium, resolved
  via the `bounties/node_modules` symlink — ESM ignores NODE_PATH, so the
  symlink is how the import resolves; the entry tree itself holds no
  node_modules): final capture `entry.png bytes=237120 OK (<=1 MiB)`, zero
  page errors, zero console errors.
- PNG header bytes `89 50 4e 47 0d 0a 1a 0a`; dimensions 1024×1024
  (read from the IHDR, not assumed); sha256
  `d2982abb74e939343ea5700f9df1c8cb0556c1d1e849d706ebaa39480b3c0e7e`.
- Viewed at full size: masthead, date band, lead headline, all six story
  headlines, the red strip and the footer all present and legible. Three
  defects were caught by viewing and fixed, each re-captured and re-viewed
  (see DESIGN.md): the first capture clipped the strip and footer (content
  overflowed the 1024 px page by ~100 px), the second still clipped the
  footer line, and the KUWAIT map label touched its marker's ring. The final
  view confirms all seven stories and the footer are in frame and the KUWAIT
  label sits clear of the marker.
- Downscaled to 300×300 with PIL (LANCZOS) and viewed: the masthead title,
  "THURSDAY · 19 NOVEMBER 2026", the lead headline ("Iran widens the war to
  Kuwait") and all six story headlines still read, plus the strip items and
  the footer line. The deck paragraphs blur at that size, as expected — the
  headlines carry the news.

## Determinism

- `MAKEFUN_OUTPUT_DIR=/tmp/nw19-out1 node main.ts` and the same into
  `/tmp/nw19-out2`, then `diff -r`: byte-identical, output sha256
  `d2982abb…3c0e7e`, identical to `entry.png`. Run once, after the final
  capture; `main.ts` was not edited afterwards.
- No clock, no randomness, no network in `main.ts` or in the capture: the
  program copies one file and checks its length and signature.

## Entry tree size

- The entry tree is 7 files (`main.ts`, `entry.png`, `design.html`,
  `scripts/capture.mjs`, `README.md`, `LICENSE`, `DESIGN.md`) totalling
  268,220 bytes — the image dominates at 237,120 bytes and the text files
  total 31,100 bytes. NOTE on the follow-up spec's "Entry tree ≤8192 bytes"
  line: that cap does not apply to this competition. The kit's own check
  reports the snapshot "within the intake's caps" (each file at most 100
  MiB, repository at most 512 MiB), the competition RULES state no 8,192-byte
  tree cap (that cap belonged to tiny-chess), and the news-17/18 entries
  passed the same check at ~284 KB. The tree was NOT shrunk to 8,192 bytes:
  doing so would mean dropping entry.png, which is the entry itself.

## Kit check (no transcripts — this session, 2026-11-19 ~11:05 WIB)

- Command: `node cli/makefun.mjs check --kit <kit> --repo <entry>`
  (no --transcripts: no bundle could be written from this session, see
  Transcripts below).
- First run: **3 passed, 2 failed, 13 skipped, 5 at submission** —
  `license_osi` FAIL (LICENSE carried no SPDX-License-Identifier line) and
  `transcripts_present` FAIL (no transcripts uploaded). Fixed license_osi
  the same session: SPDX line added to the top of LICENSE, committed
  locally (`b00b153`), pushed via the Contents API (GitHub HEAD now
  `749c1596…`, blob sha matches local).
- Second run, after the fix: **4 passed, 1 failed, 13 skipped, 5 at
  submission** — `not ready: fix transcripts_present, then check again`.
- Passes: competition_open (now between opening 2026-11-19T00:00:00Z and
  deadline 2026-11-21T00:00:00Z), snapshot (7 files, 268,220 bytes, within
  the intake's caps), license_osi (SPDX-License-Identifier: MIT,
  OSI-approved), entrypoint (main.ts, node22).
- The one failure, transcripts_present, is structural to this subagent run
  and expected: bundle refuses to write while the parent-chain link is
  missing (see Transcripts). Nothing needs rebuilding.

## Transcripts — bundle blocked at the parent-chain rule, parent must re-bundle

- Trial bundle attempted in this session with
  `--session <this session> --no-family --no-discover --harness muse-app
  --harness-version 2ade5b007ae0 --provider ipnext
  --model ipnext/avocado-5.17-v2 --effort default --mcp none
  --prompt-file prompt-user.txt --prompt-origin handed-off --prompt-via
  "parent agent handoff carrying the user's own opening instruction"
  --redact "Damai Darmawan" --redact "darmawandamai@gmail.com"`.
  Dry run found: 1 session, 35 turns, 134 lines kept (34 earlier records
  from before the repository was first named left out); system prompt
  uploaded; instruction files collected (AGENTS.md); MCP none.
- Bundle writes NOTHING, verbatim: "missing: the parent chats: its prompt
  is marked handed-off, so the upload must carry its parent chats, every
  session of the chain that started the run up to the one whose opening is
  the person's prompt, but no chain it carries reaches that one:
  sessions/muse-app/f09ff2b6-1b90-49a6-a0d5-8362d1b1b9a0.jsonl carries its
  parent chat at depth 1, and the one at depth 1
  (context-sessions/muse-app/sessions/muse-app/19f2815a-e7b2-4651-b78c-be04e1ee14ca.jsonl)
  opens with 'Submit ketiganya', not the record's prompt, and none of the 3
  later messages the person sent in it is the prompt either".
  A second dry run with `--parent-session <parent file>` fails the same way.
  This parent-chain rule applies to entries received from 18 November 2026
  (12:00 UTC) — the news-17/18 trial bundles predate it, which is why they
  could be written from the builder session and this one cannot.
- Fix (parent, after this run): run bundle from the top-level agent once
  this run completes, with `--session <builder> --session <parent>
  --no-family --no-discover --muse-usage
  ~/.makefun/muse-usage-news-image-20261119.jsonl` and the same
  harness/prompt/system-prompt flags, after SELECTing usage rows from
  muse.db for agent_ids `f09ff2b6-1b90-49a6-a0d5-8362d1b1b9a0` (builder)
  and `19f2815a-e7b2-4651-b78c-be04e1ee14ca` (parent) and appending them to
  `~/.makefun/muse-usage-news-image-20261119.jsonl`. Then re-run the kit
  check with --transcripts. NOTHING needs rebuilding; the entry, repo and
  image are final.
- Prompt file `prompt-user.txt` holds ONLY the user's verbatim words:
  "Gas kalo free" / "Perketat buildnya bro, retest sampai mendekati
  perfect ya". No prompt file with words the user did not say was written.

## News sourcing

Seven stories plus three strip items, each checked against the day's
reporting before it was drawn (see DESIGN.md for the per-story sourcing):
Iran widens Gulf attacks to Kuwait (Ali Al Salem, first since September;
Bahrain third interception in a week; US struck Qeshm Tuesday; casualty
claims carried as claims); first-ever Trump–Xi–Putin trilateral in Shenzhen
today (one hour, nuclear arms/Ukraine/Iran); Jeffries nominated 251–11,
first Black Speaker, gavel 3 January; Anthropic $81bn IPO at $83, $1.5tn,
biggest ever; Gaza ground push + four-nation aid call; EU €45bn Ukraine
loan; strip: Pew Islam largest by 2035, Voyager 1 one light-day, Fed
minutes point to more hikes + GTA VI rollout. Cut: Kerch/Crimea bridge
(yesterday's lead), India–Japan 2+2, Nvidia post-Huang news, Venezuela
oil-revenue report.
