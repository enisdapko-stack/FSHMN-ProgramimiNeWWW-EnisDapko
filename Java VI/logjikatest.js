import test from "node:test";
import assert from "node:assert/strict";
import { llogarit } from "./logjika.js";

test("rast normal (brenda buxhetit)", () => {
  assert.deepEqual(llogarit(3, 2, 20), { ok: true, total: 6, mbetja: 14, brenda: true });
});

test("rast kufitar: total === buxheti", () => {
  assert.deepEqual(llogarit(4, 5, 20), { ok: true, total: 20, mbetja: 0, brenda: true });
});

test("kufi me dhjetore: 0.1 x 3 = 0.3", () => {
  assert.deepEqual(llogarit(0.1, 3, 0.3), { ok: true, total: 0.3, mbetja: 0, brenda: true });
});

test("tejkalim i buxhetit", () => {
  assert.deepEqual(llogarit(4.5, 5, 20), { ok: true, total: 22.5, mbetja: -2.5, brenda: false });
});

test("çmim 0 dhe buxhet 0 janë të vlefshme", () => {
  assert.deepEqual(llogarit(0, 1, 0), { ok: true, total: 0, mbetja: 0, brenda: true });
});

test("hyrje negative", () => {
  assert.equal(llogarit(-1, 2, 20).ok, false);
  assert.equal(llogarit(1, 2, -20).ok, false);
});

test("NaN dhe Infinity", () => {
  assert.equal(llogarit(NaN, 2, 20).ok, false);
  assert.equal(llogarit(1, NaN, 20).ok, false);
  assert.equal(llogarit(1, 2, NaN).ok, false);
  assert.equal(llogarit(Infinity, 2, 20).ok, false);
  assert.equal(llogarit(1, 2, Infinity).ok, false);
});

test("persona jashtë 1–5 ose jo e plotë", () => {
  for (const p of [0, 6, 2.5, -1, NaN]) {
    assert.equal(llogarit(1, p, 20).ok, false, `persona=${p}`);
  }
});

test("jo-numra: string, null, undefined", () => {
  assert.equal(llogarit("4", 2, 20).ok, false);
  assert.equal(llogarit(4, "2", 20).ok, false);
  assert.equal(llogarit(4, 2, null).ok, false);
  assert.equal(llogarit(undefined, 2, 20).ok, false);
});

test("gabimi ka mesazh", () => {
  assert.equal(typeof llogarit(NaN, 1, 1).error, "string");
});
