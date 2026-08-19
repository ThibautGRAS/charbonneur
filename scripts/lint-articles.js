/* Lint anti-fausses-news de data/articles.js — bloque le commit/CI si violation. */
const fs = require('fs');
const window = {};
eval(fs.readFileSync('data/articles.js', 'utf8'));
const A = window.ARTICLES || [];
const errs = [];
const FORBIDDEN_SOLE = ['jeunesfooteux.com', 'mercato.fr']; // agrégateurs non datés : jamais en source unique
const VALID_ST = ['officiel', 'confirme', 'rumeur'];
const ids = new Set();
const today = new Date(); today.setDate(today.getDate() + 1);

A.forEach(a => {
  const w = m => errs.push(`[${a.id || '???'}] ${m}`);
  ['id','date','time','category','title','excerpt'].forEach(k => { if (!a[k]) w('champ manquant: ' + k); });
  if (a.id) { if (ids.has(a.id)) w('id en DOUBLON'); ids.add(a.id); }
  if (a.date && (!/^\d{4}-\d{2}-\d{2}$/.test(a.date) || new Date(a.date) > today)) w('date invalide ou future: ' + a.date);
  if (!Array.isArray(a.body) || !a.body.length) w('body vide');
  if (!Array.isArray(a.sources) || !a.sources.length) w('AUCUNE source');
  else {
    const hasSolid = a.sources.some(s => !FORBIDDEN_SOLE.some(d => (s.url || '').includes(d)));
    if (!hasSolid) w('sourcé UNIQUEMENT par agrégateur non daté (' + FORBIDDEN_SOLE.join(', ') + ')');
  }
  if (a.statut && !VALID_ST.includes(a.statut)) w('statut invalide: ' + a.statut);
  if (a.category === 'mercato' && new Date(a.date) > new Date('2026-08-18') && !a.statut)
    w('article mercato sans statut (officiel/confirme/rumeur obligatoire)');
});
if (errs.length) { errs.forEach(e => console.log('::error::' + e)); process.exit(1); }
console.log('Lint OK — ' + A.length + ' articles valides.');
