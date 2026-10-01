# Muzeu i sendeve të zakonshme — Java II

Faqe web statike (vetëm front end) që shfaq tri sende të një muzeu të sajuar: çelësin, filxhanin dhe biletën. Ndërtuar sipas fotos referente `Zgjidhje_referenciale.png`.

## Struktura e folderit

| Skedari | Roli |
|---|---|
| `index.html` | Struktura e faqes (HTML semantik) |
| `style.css` | Stili: ngjyrat, kartat, rrjeta responsive |
| `celesi.png`, `filxhani.png`, `bileta.png` | Imazhet e sendeve |
| `celesi.svg`, `filxhani.svg`, `bileta.svg` | Versionet origjinale vektoriale të imazheve |

## Si ta hapësh

Hap `index.html` me dy klikime ose me shfletuesin (Chrome, Edge, Firefox). Nuk nevojitet server apo instalim.

> Imazhet duhet të qëndrojnë në të njëjtin folder me `index.html`.

## Çfarë përmban faqja

- **Kokën** me titullin dhe vijën jeshile poshtë.
- **Navigimin** me lidhje të brendshme (`#celesi`, `#filxhani`, `#bileta`) që çojnë te kartat përkatëse.
- **Datën e ekspozitës** me elementin `<time>`.
- **Tri karta** (`<article>`), secila me titull, imazh me përshkrim (`<figure>` + `<figcaption>`) dhe seksion të palosshëm "Historia e fshehur" (`<details>` / `<summary>`), pa nevojë për JavaScript.
- **Fundin** me shënimin mësimor.

## Qasshmëria

- Lidhja "Kalo te përmbajtja" shfaqet kur shtypet Tab.
- Çdo imazh ka tekst alternativ (`alt`).
- Navigimi ka `aria-label`, faqja ka `lang="sq"`.

## Para kodimit

**Hyrjet**
- Nuk ka të dhëna nga përdoruesi. Hyrjet janë tekstet e faqes dhe tri imazhet.
- Veprimet e përdoruesit: klikim mbi lidhjet e navigimit dhe mbi "Historia e fshehur".

**Daljet**
- Një faqe me tri karta të rreshtuara, e njëjtë me foton referente.
- Teksti i historisë shfaqet vetëm pas klikimit.

**Rasti normal**
- Faqja hapet në ekran të gjerë: tri kartat dalin në një rresht, imazhet shfaqen, klikimi mbi "Historia e fshehur" hap tekstin, klikimi mbi lidhjen e navigimit çon te karta.

**Rast kufitar 1 — ekran i ngushtë (telefon)**
- Rrjeta `auto-fit` i rreshton kartat njëra poshtë tjetrës në vend që t'i shtypë, dhe imazhet zvogëlohen me `max-width: 100%`.

**Rast kufitar 2 — imazhi mungon ose emri është gabim**
- Shfaqet teksti alternativ (`alt`) në vend të fotos, ndaj përmbajtja mbetet e kuptueshme. Kontrollo që emrat të përputhen saktësisht (`celesi.png`, jo `Celesi.png` ose `celesi.png.png`).

## Të dhëna

Të gjitha tekstet janë të sajuara, për qëllim mësimor.
