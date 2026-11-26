// Hapi 1: përzgjedhja e elementeve
const emri = document.getElementById('emri');
const titulli = document.getElementById('titulli');
const kartela = document.getElementById('kartela');
const mesazhi = document.getElementById('mesazhi');
const perditeso = document.getElementById('perditeso');
const transformo = document.getElementById('transformo');
const animo = document.getElementById('animo');
const rikthe = document.getElementById('rikthe');

const EMRI_FILLESTAR = 'Klubi i fotografisë';

// Hapi 2: përditëso titullin
perditeso.addEventListener('click', () => {
  const vlera = emri.value.trim();

  if (vlera === '') {
    mesazhi.textContent = 'Shkruaj emrin e aktivitetit.';
    return; // titulli nuk ndryshon
  }

  titulli.textContent = vlera; // textContent => teksti shfaqet literal, jo si HTML
  mesazhi.textContent = 'Titulli u përditësua.';
});

// Hapi 3: transformo / kthe
transformo.addEventListener('click', () => {
  const eshteAktive = kartela.classList.toggle('aktive'); // kthen true/false
  transformo.setAttribute('aria-pressed', String(eshteAktive));
  mesazhi.textContent = eshteAktive ? 'Klasa aktive u shtua.' : 'Klasa aktive u hoq.';
});

// Hapi 4: animacioni
function perfundoAnimacionin() {
  kartela.classList.remove('animuar');
  animo.disabled = false;
}

animo.addEventListener('click', () => {
  kartela.classList.add('animuar');

  // Nëse animacioni është çaktivizuar (prefers-reduced-motion), 
  // animationend nuk do të ndodhë kurrë, ndaj nuk e bllokojmë butonin.
  if (getComputedStyle(kartela).animationName === 'none') {
    perfundoAnimacionin();
    mesazhi.textContent = 'Animacioni përfundoi; mund ta provosh përsëri.';
    return;
  }

  animo.disabled = true;
  mesazhi.textContent = 'Animacioni po luhet.';
});

kartela.addEventListener('animationend', (ngjarja) => {
  // ngjarja mund të vijë edhe nga elemente fëmijë; kontrollojmë burimin dhe emrin
  if (ngjarja.target !== kartela || ngjarja.animationName !== 'shfaqje') return;
  perfundoAnimacionin();
  mesazhi.textContent = 'Animacioni përfundoi; mund ta provosh përsëri.';
});

// Hapi 5: rikthe gjendjen fillestare
rikthe.addEventListener('click', () => {
  emri.value = EMRI_FILLESTAR;
  titulli.textContent = EMRI_FILLESTAR;
  kartela.classList.remove('aktive', 'animuar');
  transformo.setAttribute('aria-pressed', 'false');
  animo.disabled = false; // nëse heqim klasën gjatë animacionit, animationend nuk shkrep
  mesazhi.textContent = 'U rikthye gjendja fillestare.';
});
