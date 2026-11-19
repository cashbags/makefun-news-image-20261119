# DESIGN.md — "The World in a Day" (news-image-20261119)

## The idea

One day, one page, one picture. The judge has no news feed and is never told
which day the contest is about, so the page has to do three jobs at once:
name the day in letters too big to miss, show that day's most consequential
stories rather than one country's or one beat's, and let a viewer who missed
the day tell what happened from the image alone. The front-page form serves
all three: a masthead and a black date band do the naming, a lead plus six
stories do the breadth, and short decks under bold headlines do the telling.

The title is "The World in a Day". The masthead is set in a heavy serif with
"IN A DAY" picked out in dark red, and the tagline under it states the rule
the whole page follows: every story below happened, or was first reported, on
this day. The black band under the masthead repeats the date a second time —
THURSDAY · 19 NOVEMBER 2026 — because the judge's first criterion is that the
image names its day, and a date that appears twice cannot be missed.

## The stories, and why these seven

The lead is the Gulf, because it is the day's most consequential story and
the one still moving: Iran fired on American drone and missile sites at Ali
Al Salem air base in Kuwait, its first attack on Kuwait since September, two
days after the United States bombed an Iranian missile site on Qeshm Island,
and Bahrain says it has now intercepted Iranian attacks three times in a
week. The deck gives the sequence in one breath; the facts line underneath
carries the split in the reporting honestly — Kuwait says the drones were
intercepted with no damage, Tehran claims American casualties, Washington has
confirmed none — instead of picking one side's version as fact.

The second row pairs the day's two other headline acts. In Shenzhen, Trump,
Xi and Putin sit down together today at APEC — the first three-way meeting of
the American, Chinese and Russian leaders, with nuclear arms, Ukraine and
Iran on the table and one hour set aside, per the Kremlin. In Washington,
House Democrats nominate Hakeem Jeffries for Speaker, 251–11, putting him on
course to take the gavel on 3 January as the first Black lawmaker ever to
hold it.

The third row widens the field: business (Anthropic priced at $83 a share on
Wednesday, a $1.5 trillion valuation, trading from today, the biggest IPO
ever — ahead of SpaceX's $75bn in June), Gaza (an Israeli ground operation in
central Gaza, an area left under last year's ceasefire, as Australia, Canada,
Italy and Britain jointly demand unrestricted aid access while flooding
deepens the suffering), and Europe (the EU's €45bn loan to Kyiv, to be repaid
from Russian reparations). The red strip at the bottom holds three more items
so the page's breadth is not only politics and war: Pew's projection that
Islam becomes the world's largest faith by 2035, Voyager 1 reaching one
light-day from Earth fifty years after launch, and the Fed minutes pointing
to more rate rises beside GTA VI's global rollout.

What was cut: the Kerch/Crimea bridge attacks (yesterday's lead, still
developing but not today's news), the India–Japan 2+2 dialogue (real but
narrower than the seven chosen), Nvidia's post-Huang pay and chip news
(covered in yesterday's edition through its earnings; the Anthropic debut is
the bigger business story of this day), and the Venezuela oil-revenue report
(a State Department accounting release, less consequential than the loan and
the IPO).

## Sourcing

Each fact was checked against the day's reporting before it was drawn, in my
own words throughout — no wire copy is reproduced anywhere on the page:

- Gulf: Reuters briefing, "Iran says it fired on US drone and missile sites
  in Kuwait overnight, after the US struck Qeshm Island"; "Bahrain says it
  has now intercepted Iranian attacks three times in a week"; first Iranian
  attack on Kuwait since September; AP/Reuters on the Qeshm strike as
  self-defence after the Bahrain radar attacks; Fox/AP on Ali Al Salem and
  the Patriot systems; casualty claims carried as claims, unconfirmed by the
  Pentagon.
- Shenzhen: AP, "Trump is set to meet with China's Xi Jinping and Russia's
  Vladimir Putin on Thursday. It's the first-ever sit-down between the
  leaders of these three countries"; Reuters on the Kremlin's one hour for
  the three-way meeting and the handshake at Wednesday's welcome event.
- Jeffries: AP, nominated Wednesday 251–11 in closed-door voting, on track
  to be the first Black Speaker, gavel 3 January.
- Anthropic: AP, priced at $83 a share on Wednesday, $1.5 trillion
  valuation, debut Thursday, $81bn proceeds ahead of SpaceX's ~$75bn.
- Gaza: reports of the ground operation in central Gaza in an area left
  under last year's ceasefire; Australia, Canada, Italy and the UK jointly
  calling for immediate, unrestricted humanitarian access as flooding adds to
  the suffering.
- EU loan: €45bn loan to Ukraine, to be repaid after Russia pays reparations.
- Strip: Pew Research projection (Islam largest by 2035); NASA's Voyager 1
  at one light-day, fifty years after launch; Fed minutes showing most
  officials expect further rate hikes; GTA VI's global rollout beginning.

## The drawings

Every illustration is inline SVG drawn from scratch for this entry — no
photographs, no copied artwork, no external assets, so the page renders the
same way in any browser with no network:

- Lead map: a stylised Gulf — sand-coloured land around a blue sea, red
  markers on Kuwait and Bahrain joined by a dashed line, a black marker on
  Qeshm Island, and a black bar naming the two U.S. carriers on station.
- Shenzhen: three leaders as coloured discs (US red, CN blue, RU dark) seated
  around an oval table, labelled SHENZHEN.
- Washington: a grey Capitol dome on its steps, labelled CAPITOL.
- Business: a green rising line with a red dot at $83 a share.
- Gaza: two grey aid trucks, labelled AID CONVOY.
- Europe: a € inside a circle between "45bn" and "LOAN".

Labels sit clear of the artwork they name: the KUWAIT label was moved above
its marker after the first capture showed it touching the marker's ring.

## Layout and legibility

The page is a fixed 1024×1024 sheet with a cream paper background, dark
serif headlines and a sans-serif for kickers, facts and the strip — the
contrast between the two families is what makes the page scan like a paper
rather than a poster. The lead takes the top third with its map; two stories
share the second row (the Shenzhen illustration floats left of its text, the
Capitol beside the Washington story); three stories share the third row; the
red strip and a footer line close the page. The footer repeats the date a
third time and names the sources.

Two defects were caught by viewing the capture and fixed, each re-captured
and re-viewed: the first capture clipped the strip and footer (the content
ran about 100 px past the sheet, fixed by tightening the masthead, the lead
headline and the row padding), and a second pass still clipped the footer
line (fixed by shortening the map caption to one line and shrinking the three
row illustrations). The final capture shows every element in frame.

At 300 pixels across — the size the judge's craft criterion cares about —
the masthead, the black date band, the lead headline and all six story
headlines still read, as do the strip's three items. The deck paragraphs blur
at that size, as expected; the headlines carry the news.
