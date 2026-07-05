#!/usr/bin/env python3
"""Rafraîchit le classement Ligue 1 dans data/club.js depuis lensois.com (widget scoreaxis).
Sans dépendance externe (stdlib) — pensé pour tourner en GitHub Actions.
Ne touche QUE le tableau `standings` ; laisse `lastMatch` et `standingsTitle` intacts.
"""
import os, re, sys, urllib.request

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
SHORT = {"Paris Saint-Germain": "Paris SG", "Paris Saint Germain": "Paris SG"}


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "fr-FR,fr;q=0.9",
                                               "Referer": "https://www.lensois.com/classement/"})
    return urllib.request.urlopen(req, timeout=40).read().decode("utf-8", "replace")


def main():
    # 1) page classement -> leagueId scoreaxis
    page = get("https://www.lensois.com/classement/")
    m = re.search(r"widgets\.scoreaxis\.com/api/football/league-table/([A-Za-z0-9]+)", page)
    if not m:
        sys.exit("leagueId scoreaxis introuvable sur la page")
    lid = m.group(1)

    # 2) widget (JS avec HTML échappé en \uXXXX)
    js = get(f"https://widgets.scoreaxis.com/api/football/league-table/{lid}"
             "?lang=fr&position=1&goals=1&gamesCount=1&diff=1&points=1&teamsLimit=all")
    html = re.sub(r"\\u([0-9a-fA-F]{4})", lambda mm: chr(int(mm.group(1), 16)), js)
    html = html.replace("\\/", "/").replace('\\"', '"')

    # 3) parse chaque ligne d'équipe : <td class="team">…title="NOM"… puis <td> MJ,V,N,D,buts,diff,pts
    rows, seen = [], set()
    for seg in html.split('<td class="team">')[1:]:
        nm = re.search(r'title="([^"]+)"', seg)
        cells = [c.strip() for c in re.findall(r'<td[^>]*>\s*([^<]*?)\s*</td>', seg) if c.strip()][:8]
        if not nm or len(cells) < 7 or nm.group(1) in seen:
            continue
        seen.add(nm.group(1))
        rows.append((nm.group(1), cells))
    if len(rows) < 6:
        sys.exit(f"parsing du classement échoué ({len(rows)} lignes)")

    # 4) construit le tableau standings (top 6)
    out = []
    for i, (name, c) in enumerate(rows[:6], start=1):
        mj, diff, pts = c[0], c[5], c[6]
        if diff and diff[0] not in "+-" and diff != "0":
            diff = "+" + diff  # garde le signe + pour une diff positive
        is_lens = "lens" in name.lower()
        club = "RC Lens" if is_lens else SHORT.get(name, name)
        extra = ", isLens: true" if is_lens else ""
        out.append(f"    {{ pos: {i}, club: '{club}', played: {int(mj)}, "
                   f"diff: '{diff}', pts: {int(pts)}{extra} }}")
    arr = "standings: [\n" + ",\n".join(out) + "\n  ]"
    print("Classement lu :\n" + "\n".join(o.strip() for o in out))

    # 5) remplace UNIQUEMENT le tableau standings dans data/club.js
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data", "club.js")
    src = open(path, encoding="utf-8").read()
    new = re.sub(r"standings:\s*\[[^\]]*\]", arr, src, count=1)
    if new == src:
        print("club.js : aucun changement.")
        return
    open(path, "w", encoding="utf-8").write(new)
    print("club.js : classement mis à jour.")


if __name__ == "__main__":
    main()
