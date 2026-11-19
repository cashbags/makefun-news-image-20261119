# makefun-news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/cashbags/makefun-news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/cashbags/makefun-news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

**The World in a Day** — the world's news of Thursday 19 November 2026, set as a
single newspaper front page. The date is the loudest fact on the page, and
seven stories share it: Iran widening its Gulf attacks to a U.S. air base in
Kuwait; the first-ever Trump–Xi–Putin three-way meeting in Shenzhen; Hakeem
Jeffries' nomination as the first Black Speaker of the House; Anthropic's
$81bn market debut, the largest IPO ever; a ground push in Gaza as four
nations demand aid in; the EU's €45bn loan to Ukraine; and, in the strip,
a Pew projection, Voyager 1's one-light-day milestone and the Fed minutes.

## The image

`entry.png` is a 1024×1024 PNG (237,120 bytes) made by opening `design.html`
in a real headless Chromium and screenshotting the page — a front page, not a
photo collage. The masthead carries the day in full; the lead story gets a
drawn map of the Gulf with Kuwait, Bahrain and Qeshm Island marked; the
Shenzhen, Washington, business, Gaza and Europe stories each get a small
drawing of their own (three leaders at one table, the Capitol dome, a rising
chart, an aid convoy, a €45bn loan). Every fact on the page was checked
against the day's reporting (Reuters, AP, BBC) before it was drawn; where the
reporting itself was split — Tehran's casualty claims against Washington's
silence — the page carries both sides. See `DESIGN.md` for the sourcing.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — byte-identical on every run
```

## How it is built

- `main.ts` — the entry program (Node 22, standard library only): checks
  `entry.png` opens with the PNG signature and sits under the 1 MiB cap,
  copies it to `/output/entry.png`, and refuses to finish if the copy is
  short by even one byte.
- `design.html` — the front page itself: HTML + inline SVG, every
  illustration drawn from scratch for this entry, no photographs, no copied
  artwork.
- `scripts/capture.mjs` — the capture step: loads `design.html` in headless
  Chromium (playwright-core) and screenshots the page at 1024×1024. Any page
  error or console error fails the run.
- `DESIGN.md` — why the page looks the way it does and where each fact
  comes from.
- `CHECK.md` — what was actually run against this entry, and the numbers
  each run printed.

## Verification

Real-browser capture verified from disk (1024×1024, 237,120 bytes, under the
1 MiB cap); viewed at full size and at 300 pixels across, where the masthead,
the date, the lead headline and all six story headlines still read. `main.ts`
run twice into two directories: byte-identical output, same sha256.
See `CHECK.md`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=qrg7fvky&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
