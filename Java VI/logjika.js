const gabim = (error) => ({ ok: false, error });

const eshteNumerIFundem = (x) => typeof x === "number" && Number.isFinite(x);

export function llogarit(cmimi, persona, buxheti) {
  // 1. Validimi (typeof bllokon "0", null, undefined; isFinite bllokon NaN dhe Infinity)
  if (!eshteNumerIFundem(cmimi) || cmimi < 0) {
    return gabim("Çmimi duhet të jetë numër i fundëm >= 0.");
  }
  if (!eshteNumerIFundem(buxheti) || buxheti < 0) {
    return gabim("Buxheti duhet të jetë numër i fundëm >= 0.");
  }
  if (!Number.isInteger(persona) || persona < 1 || persona > 5) {
    return gabim("Personat duhet të jenë numër i plotë nga 1 deri në 5.");
  }

  // 2. Punojmë në centë (numra të plotë) për të shmangur gabimet e pikës lundruese
  const cmimiCent = Math.round(cmimi * 100);
  const buxhetCent = Math.round(buxheti * 100);
  const totalCent = cmimiCent * persona;
  const mbetjaCent = buxhetCent - totalCent;

  // 3. Kthimi në euro; "|| 0" heq -0
  return {
    ok: true,
    total: totalCent / 100 || 0,
    mbetja: mbetjaCent / 100 || 0,
    brenda: totalCent <= buxhetCent, // true edhe kur total === buxheti
  };
}
