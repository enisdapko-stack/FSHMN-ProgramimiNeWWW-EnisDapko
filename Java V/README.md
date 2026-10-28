# Java V — Formulari i misionit sekret

Formular regjistrimi me validim HTML dhe tabelë orarësh. Përdoren vetëm të dhëna të sajuara; nuk ruhet asnjë regjistrim real.

## Skedarët

- `index.html` — formulari dhe tabela e orareve
- `style.css` — stili
- `pranuar.html` — faqja e demonstrimit pas validimit

## Planifikimi para kodimit

**Hyrjet:** pseudonimi (tekst, 3–20 karaktere), email-i, numri i personave (1–5), kategoria (Art ose Shkencë) dhe pranimi i rregullave.

**Daljet:** nëse të dhënat janë valide, shfletuesi hap `pranuar.html` me vlerat në URL (GET). Nëse nuk janë, shfaq mesazh gabimi dhe nuk dërgon asgjë.

**Rast normal:** pseudonimi `agjent7`, email `student@example.org`, 3 persona, kategoria Art, rregullat të pranuara → kalon te `pranuar.html`.

**Raste kufitare:**
1. Grup me 0 ose 6 persona (ose pseudonim me 2 karaktere) → nuk kalon.
2. Email pa format email-i, p.sh. `agjent7` pa `@` → nuk kalon.

## Si funksionon validimi

Përdoren `required`, `type="email"`, `type="number"` me `min`/`max`, dhe `minlength`/`maxlength`. Butoni "Kontrollo formularin" e demonstron këtë validim vendas.

## GET dhe URL

Formulari përdor `method="get"`, prandaj vlerat shfaqen në URL, p.sh. `pranuar.html?pseudonimi=agjent7&email=...`. Kjo **nuk ruan regjistrim në server**; është vetëm demonstrim front end. Për këtë arsye përdoren vetëm të dhëna të sajuara.

## Rastet e pranimit

- [x] Formulari bosh nuk kalon.
- [x] Email pa format email-i dhe grup 0 ose 6 nuk kalojnë.
- [x] Të dhënat valide çojnë te faqja e demonstrimit; tabela ka tituj kolonash.

## Reflektim individual

**Pse `required` në frontend nuk provon që të dhënat në një sistem real janë të sigurta?**

Sepse validimi në shfletues kontrollohet nga përdoruesi. Dikush mund ta heqë atributin `required` me DevTools, të çaktivizojë JavaScript-in ose të dërgojë kërkesa direkt te serveri (me curl ose Postman) pa e hapur fare formularin. Prandaj serveri duhet t'i validojë dhe pastrojë gjithmonë të dhënat vetë; validimi në frontend ndihmon vetëm përdoruesin të gabojë më pak, jo sistemin të mbrohet.
