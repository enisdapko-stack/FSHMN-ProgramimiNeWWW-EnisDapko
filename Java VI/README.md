# Java VI — Planifiko një pasdite me 20 euro

## Çfarë mëson

Tipa, kushte, funksione, numra dhe raste kufitare.

Referencë tematike: kap. 8 të librit. Shembulli është i krijuar për këtë kurs.

## Skenari

Ndërto logjikën e një kalkulatori që tregon nëse aktivitetet e një grupi futen në buxhet.

## Kërkesat për studentin

1. Shkruaj funksionin llogarit(cmimi, persona, buxheti), pa varësi nga DOM.
2. Prano vetëm numra të fundëm; cmimi dhe buxheti >=0; persona numër i plotë 1–5. Në hyrje të pavlefshme kthe {ok:false,error:...}.
3. Për hyrje valide kthe {ok:true,total,mbetja,brenda}; brenda është true edhe kur total === buxheti.
4. Shndërro eurot në centë me Math.round para shumëzimit dhe krahasimit; mos përdor toFixed si vlerë numerike.
5. Shkruaj teste për normal, kufi, tejkalim, hyrje negative dhe NaN. UI është opsionale këtë javë.

## Rastet e pranimit

- [x] llogarit(4,5,20) → total 20, mbetja 0, brenda true.
- [x] llogarit(4.5,5,20) → total 22.5, mbetja -2.5, brenda false.
- [x] llogarit(0.1,3,0.3) → total 0.3, mbetja 0; persona=0 ose NaN → ok false.

## Si ta nisësh

Testet ekzekutohen me:

```
node --test
```

Skedarët: `logjika.js` (funksioni `llogarit`), `logjika.test.js` (testet), `package.json` (aktivizon moduset ES).

## Reflektim individual

Çfarë dallimi ka mes 0, "0", null dhe NaN?

- `0` është numër i vlefshëm. Në këtë detyrë çmimi dhe buxheti mund të jenë 0, por numri i personave jo (duhet 1–5).
- `"0"` është tekst (string), jo numër. JavaScript e kthen vetë në numër në disa veprime (`"0" * 5` jep 0), prandaj e kontrolloj tipin me `typeof` që të mos kalojë si numër.
- `null` do të thotë "pa vlerë". Në veprime sillet si 0 (`null >= 0` është `true`), prandaj do të kalonte validimin po të mos kontrollohej tipi.
- `NaN` është i tipit number, por do të thotë "jo numër i vlefshëm". Nuk është i barabartë as me veten (`NaN === NaN` është `false`), prandaj e kontrolloj me `Number.isFinite`.
