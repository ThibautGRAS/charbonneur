/* Score en direct : interroge football-data.org (clé en secret GitHub) et écrit
   data/live.json si l'état a changé. Le site lit ce fichier via raw.githubusercontent.
   Sort silencieusement s'il n'y a pas de match du jour (économie de commits). */
const fs = require('fs');
const KEY = process.env.FOOTBALL_DATA_KEY;
const TEAM = 546; // RC Lens chez football-data.org
if (!KEY) { console.log('::warning::FOOTBALL_DATA_KEY absent — direct désactivé.'); process.exit(0); }

(async () => {
  const now = new Date();
  const d = x => x.toISOString().slice(0, 10);
  const from = d(new Date(now - 12 * 3600e3)), to = d(new Date(+now + 12 * 3600e3));
  const r = await fetch(`https://api.football-data.org/v4/teams/${TEAM}/matches?dateFrom=${from}&dateTo=${to}`,
    { headers: { 'X-Auth-Token': KEY } });
  if (!r.ok) { console.log('::error::football-data ' + r.status + ' ' + (await r.text()).slice(0, 150)); process.exit(1); }
  const matches = (await r.json()).matches || [];
  if (!matches.length) { console.log('Pas de match Lens sur la fenêtre — rien à faire.'); process.exit(0); }

  const m = matches.find(x => ['IN_PLAY', 'PAUSED'].includes(x.status)) || matches[0];
  const home = m.homeTeam, away = m.awayTeam, sc = m.score;
  const cur = (sc.fullTime.home !== null ? sc.fullTime : sc.halfTime);
  const out = {
    status: m.status, // TIMED, IN_PLAY, PAUSED, FINISHED...
    minute: m.minute || null,
    utcDate: m.utcDate,
    competition: (m.competition || {}).name || '',
    home: { name: home.shortName || home.name, tla: home.tla, score: cur.home },
    away: { name: away.shortName || away.name, tla: away.tla, score: cur.away },
    updated: now.toISOString()
  };
  const path = 'data/live.json';
  const prev = fs.existsSync(path) ? fs.readFileSync(path, 'utf8') : '';
  const next = JSON.stringify(out, null, 1);
  // Ne réécrire que si changement significatif (hors horodatage)
  const strip = s => s.replace(/"updated":[^,}]+/,'');
  if (strip(prev) === strip(next)) { console.log('Direct inchangé (' + m.status + ').'); process.exit(0); }
  fs.writeFileSync(path, next);
  fs.writeFileSync('.live-changed', '1');
  console.log('::notice::Direct mis à jour : ' + out.home.tla + ' ' + (out.home.score ?? '–') + '-' + (out.away.score ?? '–') + ' ' + out.away.tla + ' (' + m.status + ')');
})().catch(e => { console.log('::error::' + String(e.message).slice(0, 200)); process.exit(1); });
