# Java III

## Skedarët
- `index.html` – afisha e klubit të debatit
- `style.css` – stilet e faqes
- `Fillimi/gabime.css` – rregullimi i gabimeve

## Etiketat
Kam bërë tri etiketa: Falas, Vende të kufizuara: 20 dhe Edhe online. Nuk i dalloj vetëm me ngjyrë: secila ka tekst të ndryshëm dhe etiketa e vendeve të kufizuara ka kufi të ndërprerë.

## Gabimet në gabime.css
1. `#poster` dhe `.poster` kishin ngjyra të ndryshme dhe fitonte `#poster`, kështu që teksti ishte i bardhë mbi sfond të bardhë.
2. Të dyja kishin `width` të ndryshëm: 700px dhe 100%. Fitonte 700px.
3. Me 700px gjerësi dhe 80px padding, paneli dilte jashtë ekranit 360px.

I rregullova pa `!important`: e hoqa selektorin me ID dhe lashë vetëm `.poster`, me `max-width: 672px`.

## box-sizing
Me `box-sizing: border-box`, gjerësia përfshin edhe padding dhe border. Pa të, `width: 100%` plus padding e bën panelin më të gjerë se ekrani dhe del scroll horizontal.

## Focus
Kur shtyp Tab, lidhjet marrin një kornizë portokalli (`a:focus-visible`), kështu që shihet ku je.

## Reflektim
Rregulli që fitoi në kaskadë ishte `#poster`. Selektori me ID ka specifike më të madhe se ai me klasë, dhe specifika vlerësohet përpara rendit të shkrimit. Prandaj `.poster` humbte edhe pse ishte më poshtë. E zgjidha duke e hequr ID-në.
