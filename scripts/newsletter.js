/* =====================================================================
   NEWSLETTER CHARBONNEUR — envoi automatisé via l'API Brevo.
   Exécuté par GitHub Actions (.github/workflows/newsletter.yml).

   Env requis :
   - BREVO_API_KEY  (secret GitHub Actions)
   Env optionnels :
   - TEST_EMAIL     → envoi transactionnel à cette seule adresse (mode test)
   - DAYS           → fenêtre d'articles (défaut 7 jours)
   - LIST_ID        → id de liste Brevo (défaut : première liste du compte)
   ===================================================================== */
const fs = require('fs');

const API = 'https://api.brevo.com/v3';
const KEY = process.env.BREVO_API_KEY;
const SITE = 'https://thibautgras.github.io/charbonneur/';
const DAYS = parseInt(process.env.DAYS || '7', 10);

if (!KEY) { console.error('BREVO_API_KEY manquant'); process.exit(1); }

// --- Charger les articles (data/articles.js définit window.ARTICLES) ---
const window = {};
eval(fs.readFileSync('data/articles.js', 'utf8'));
const cutoff = Date.now() - DAYS * 864e5;
const arts = window.ARTICLES
  .filter(a => new Date(a.date + 'T' + (a.time || '12:00')) >= cutoff)
  .sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time));

if (!arts.length) { console.log('Aucun article sur ' + DAYS + ' j → pas d\'envoi.'); process.exit(0); }

// --- Composer le HTML (layout table, compatible clients mail) ---
const CAT = { mercato: 'MERCATO', saison: 'SAISON', news: 'NEWS', interview: 'INTERVIEW', mag: 'MAG' };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rows = arts.map(a => `
  <tr><td style="padding:20px 24px;border-bottom:1px solid #2a2622">
    <span style="display:inline-block;font:700 10px/1 Arial,sans-serif;letter-spacing:.1em;color:#101010;background:#ffd700;padding:5px 10px;border-radius:999px">${CAT[a.category] || 'ACTU'}</span>
    <span style="font:400 11px/1 Arial,sans-serif;color:#8d8578">&nbsp; ${a.date}</span>
    <div style="font:700 19px/1.3 Georgia,'Times New Roman',serif;color:#f3efe8;margin:10px 0 6px">${esc(a.title)}</div>
    <div style="font:400 14px/1.55 Arial,sans-serif;color:#b5ada0">${esc(a.excerpt || '')}</div>
  </td></tr>`).join('');

const LOGO = SITE + 'images/logo/Logo_RC_Lens_-_1955.svg.webp';
const html = `<!doctype html><html lang="fr"><body style="margin:0;background:#0a0807">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0807"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#171310;border:1px solid #2a2622;border-radius:6px;overflow:hidden">
  <tr><td style="background:#0a0807;padding:18px 24px;border-bottom:3px solid #ffd700">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr>
      <td style="padding-right:14px"><img src="${LOGO}" width="44" alt="Blason RC Lens 1955" style="display:block;border:0"></td>
      <td>
        <div style="font:800 24px/1 Georgia,'Times New Roman',serif;color:#ffd700;letter-spacing:.02em">CHARBONNEUR</div>
        <div style="font:400 11px/1.6 Arial,sans-serif;color:#8d8578;letter-spacing:.14em">L&rsquo;HEBDO SANG &amp; OR &mdash; DESCENDU DE LA FOSSE</div>
      </td>
    </tr></table>
  </td></tr>
  ${rows}
  <tr><td align="center" style="padding:24px">
    <a href="${SITE}#actu" style="font:700 14px Arial,sans-serif;color:#101010;background:#ffd700;text-decoration:none;padding:13px 26px;border-radius:4px;display:inline-block">&#9874; Lire sur le site</a>
  </td></tr>
  <tr><td style="padding:14px 24px;background:#0f0c0a;border-top:1px solid #2a2622;font:400 11px/1.6 Arial,sans-serif;color:#6f685e">
    Site non officiel de supporters du RC Lens &mdash; <a href="${SITE}" style="color:#8d8578">${SITE.replace('https://','')}</a><br>
    Vous recevez cet e-mail car vous &ecirc;tes inscrit &agrave; la newsletter. {{ unsubscribe }}
  </td></tr>
</table></td></tr></table></body></html>`;

const subject = 'Charbonneur — ' + esc(arts[0].title);

async function api(path, opts = {}) {
  const r = await fetch(API + path, {
    ...opts,
    headers: { 'api-key': KEY, 'accept': 'application/json', 'content-type': 'application/json', ...(opts.headers || {}) }
  });
  const txt = await r.text();
  if (!r.ok) throw new Error(path + ' → ' + r.status + ' ' + txt);
  return txt ? JSON.parse(txt) : {};
}

(async () => {
  // Expéditeur : premier sender validé du compte
  const senders = (await api('/senders')).senders.filter(s => s.active);
  if (!senders.length) throw new Error('Aucun expéditeur validé dans Brevo');
  const sender = { name: 'Charbonneur', email: senders[0].email };

  if (process.env.TEST_EMAIL) {
    // Mode test : e-mail transactionnel à une seule adresse
    const body = { sender, to: [{ email: process.env.TEST_EMAIL }], subject: '[TEST] ' + subject,
      htmlContent: html.replace('{{ unsubscribe }}', '(lien de désinscription inséré lors des vrais envois)') };
    await api('/smtp/email', { method: 'POST', body: JSON.stringify(body) });
    console.log('Test envoyé à ' + process.env.TEST_EMAIL + ' (' + arts.length + ' articles).');
    return;
  }

  // Envoi réel : campagne à la liste
  let listId = parseInt(process.env.LIST_ID || '0', 10);
  if (!listId) {
    const lists = (await api('/contacts/lists?limit=10')).lists || [];
    if (!lists.length) throw new Error('Aucune liste de contacts Brevo');
    listId = lists[0].id;
  }
  const camp = await api('/emailCampaigns', { method: 'POST', body: JSON.stringify({
    name: 'Charbonneur ' + new Date().toISOString().slice(0, 10),
    subject, sender, type: 'classic',
    htmlContent: html.replace('{{ unsubscribe }}', '<a href="{{ unsubscribe }}" style="color:#888">Se désinscrire</a>'),
    recipients: { listIds: [listId] }
  }) });
  await api('/emailCampaigns/' + camp.id + '/sendNow', { method: 'POST', body: '{}' });
  console.log('Campagne #' + camp.id + ' envoyée à la liste ' + listId + ' (' + arts.length + ' articles).');
})().catch(e => {
  var m = String(e.message).replace(/[\r\n]+/g, ' ').slice(0, 400);
  console.error(m);
  // Annotation GitHub : visible via l'API même quand les logs bruts ne le sont pas
  console.log('::error::' + m);
  process.exit(1);
});
