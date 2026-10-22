# Java IV — Festivali që përshtatet në çdo ekran

## Çfarë realizova
- Faqe me **menu fleksibile** (`display:flex; flex-wrap:wrap`) dhe **gjashtë karta aktivitetesh** në një **Grid** responsive.
- Grid: **1 kolonë** nën 600 px, **2 kolona** nga 600 deri në 899 px, **3 kolona** nga 900 px (media queries `min-width`).
- Çdo kartë ka titull, kategori, orar dhe lidhje detajesh. Titujt përdorin `overflow-wrap:anywhere`, kartat kanë `min-width:0`, pa lartësi fikse për tekstin.
- Imazhe fleksibël (`max-width:100%; height:auto`, `aspect-ratio`) me SVG lokale në `assets/`.
- Qasshmëri: lidhje "Kalo te përmbajtja", `nav` me `aria-label`, fokus i dukshëm (`:focus-visible`), `prefers-reduced-motion`.
- Karta e gjashtë ka titull ~130 karakterësh për sfidën e transferimit.

## Hapat e hapjes
1. Hap dosjen `JavaIV/` dhe kliko dy herë `index.html` (nuk duhet server).
2. Për testim: DevTools (F12) → Device Toolbar → vendos gjerësi 360, 768, 1280 px.

## Testet
| Hyrje (gjerësia) | Rezultat i pritur | Rezultat i marrë |
|---|---|---|
| 360 px | 1 kolonë, pa scroll horizontal | _plotëso pas testimit_ |
| 768 px | 2 kolona, pa scroll horizontal | _plotëso pas testimit_ |
| 1280 px | 3 kolona, pa scroll horizontal | _plotëso pas testimit_ |
| Tastierë (Tab) | Fokusi kalon: skip link → menu → lidhjet e kartave, i dukshëm | _plotëso pas testimit_ |
| Titull i gjatë (karta 6) | Kalon në rreshta të rinj pa dalë nga karta | _plotëso pas testimit_ |

## Rastet e pranimit
- [ ] Në 360/768/1280 px shfaqen përkatësisht 1/2/3 kolona.
- [ ] Nuk ka scroll horizontal në faqen e plotë.
- [ ] Menuja mbetet e përdorshme me tastierë.

## Reflektim individual
**Kur do të zgjidhje Flexbox dhe kur Grid?**
Flexbox e përdor kur radha është njëdimensionale: menuja, ose brenda një karte ku elementët renditen në kolonë dhe lidhja shtyhet poshtë. Grid e përdor kur kam nevojë për rrjetë dydimensionale, si këtu me kolona të njëjta që ndryshojnë numër sipas gjerësisë. Në praktikë i kombinoj: Grid për faqen, Flexbox për pjesët e vogla brenda saj.

## Deklarimi i AI/burimeve
Kodi u gjenerua me ndihmën e Claude (Anthropic) dhe duhet rishikuar e testuar nga unë. Burime: MDN Web Docs për Grid, Flexbox dhe media queries; kap. 6–7 të librit.
