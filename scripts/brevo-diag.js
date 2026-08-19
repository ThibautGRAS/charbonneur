/* Diagnostic Brevo : derniers contacts (e-mails masqués) + listes.
   Sortie en annotations ::notice:: lisibles via l'API GitHub. */
const KEY = process.env.BREVO_API_KEY;
const API = 'https://api.brevo.com/v3';
const mask = e => e.replace(/^(..)[^@]*(@.).*(\...+)$/, '$1***$2***$3');
async function api(p) {
  const r = await fetch(API + p, { headers: { 'api-key': KEY, accept: 'application/json' } });
  const t = await r.text();
  if (!r.ok) throw new Error(p + ' → ' + r.status + ' ' + t.slice(0, 200));
  return JSON.parse(t);
}
(async () => {
  const lists = (await api('/contacts/lists?limit=10')).lists || [];
  lists.forEach(l => console.log(`::notice::LISTE #${l.id} "${l.name}" — ${l.totalSubscribers} inscrits, ${l.totalBlacklisted} blacklistés`));
  const cts = (await api('/contacts?limit=10&sort=desc')).contacts || [];
  if (!cts.length) console.log('::notice::AUCUN CONTACT dans le compte');
  cts.forEach(c => console.log(`::notice::CONTACT ${mask(c.email)} créé ${c.createdAt} listes=[${(c.listIds||[]).join(',')}] blacklist=${c.emailBlacklisted}`));
  const senders = (await api('/senders')).senders || [];
  senders.forEach(s => console.log(`::notice::SENDER ${mask(s.email)} actif=${s.active}`));
  const camps = (await api('/emailCampaigns?limit=5&sort=desc')).campaigns || [];
  camps.forEach(c => {
    const g = (c.statistics && c.statistics.globalStats) || {};
    console.log('::notice::CAMPAGNE #' + c.id + ' "' + c.name + '" statut=' + c.status + ' envoyés=' + (g.sent||0) + ' délivrés=' + (g.delivered||0) + ' ouverts=' + (g.uniqueViews||0));
  });
})().catch(e => { console.log('::error::' + String(e.message).slice(0, 300)); process.exit(1); });
