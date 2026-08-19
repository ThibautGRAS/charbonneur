/* Export de la liste des inscrits → envoyé par e-mail à EXPORT_TO (jamais en clair dans les logs). */
const KEY = process.env.BREVO_API_KEY, TO = process.env.EXPORT_TO;
const API = 'https://api.brevo.com/v3';
if (!KEY || !TO) { console.log('::error::BREVO_API_KEY ou EXPORT_TO manquant'); process.exit(1); }
async function api(p, o = {}) {
  const r = await fetch(API + p, { ...o, headers: { 'api-key': KEY, accept: 'application/json', 'content-type': 'application/json' } });
  const t = await r.text();
  if (!r.ok) throw new Error(p + ' → ' + r.status + ' ' + t.slice(0, 200));
  return t ? JSON.parse(t) : {};
}
(async () => {
  const all = [];
  for (let off = 0; ; off += 500) {
    const page = (await api('/contacts?limit=500&offset=' + off + '&sort=asc')).contacts || [];
    all.push(...page);
    if (page.length < 500) break;
  }
  const rows = all.map(c => `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee">${c.email}</td><td style="padding:6px 12px;border-bottom:1px solid #eee">${(c.createdAt || '').slice(0, 16).replace('T', ' ')}</td><td style="padding:6px 12px;border-bottom:1px solid #eee">${c.emailBlacklisted ? 'désinscrit' : 'actif'}</td></tr>`).join('');
  const senders = (await api('/senders')).senders.filter(s => s.active);
  await api('/smtp/email', { method: 'POST', body: JSON.stringify({
    sender: { name: 'Charbonneurs', email: senders[0].email },
    to: [{ email: TO }],
    subject: 'Charbonneurs — liste des inscrits (' + all.length + ')',
    htmlContent: `<h3 style="font-family:Arial">Inscrits newsletter Charbonneurs — ${all.length} contact(s)</h3>
<table style="font:13px Arial;border-collapse:collapse"><tr><th style="text-align:left;padding:6px 12px">E-mail</th><th style="text-align:left;padding:6px 12px">Inscrit le</th><th style="text-align:left;padding:6px 12px">Statut</th></tr>${rows}</table>`
  }) });
  console.log('::notice::Export de ' + all.length + ' contact(s) envoyé (adresses non loggées).');
})().catch(e => { console.log('::error::' + String(e.message).slice(0, 300)); process.exit(1); });
