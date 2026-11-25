(function () {
  "use strict";
  var D = window.FSDATA;
  var app = document.getElementById("app");
  var crumb = document.getElementById("crumb");
  var P = "fs.";

  /* ---------- helpers ---------- */
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "html") n.innerHTML = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== null && attrs[k] !== undefined && attrs[k] !== false) n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function clear() { app.innerHTML = ""; window.scrollTo(0, 0); }
  function wrap() { var w = el("div", { class: "wrap" }); app.appendChild(w); return w; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function store(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(P + k)); localStorage.setItem(P + k, JSON.stringify(v)); } catch (e) { return null; } }
  function progress(i, n) { return el("div", { class: "progress", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": n, "aria-valuenow": i }, [el("i", { style: "width:" + Math.round(100 * i / n) + "%" })]); }
  function fb(ok, title, text) { return el("div", { class: "fb " + (ok ? "ok" : "bad"), role: "status" }, [el("b", { text: title }), el("span", { html: text })]); }
  function back() { return el("a", { href: "#/", class: "btn sec", style: "display:block;text-align:center;text-decoration:none;margin-top:12px" }, ["Terug naar overzicht"]); }
  function next(box, label, fn) { box.appendChild(el("button", { class: "btn mt", onclick: fn }, [label])); }
  function strip(s) { return String(s).replace(/<[^>]+>/g, ""); }
  function finish(w, key, score, total, again) {
    store(key, { score: score, total: total });
    w.appendChild(el("div", { class: "card", style: "text-align:center" }, [
      el("div", { class: "muted", text: "Jouw score" }),
      el("div", { class: "score", text: score + " / " + total }),
      el("p", { text: score === total ? "Alles juist. Sterk!" : (score >= total * 0.7 ? "Goed bezig. Bekijk nog even de fouten." : "Neem de uitleg in ⓘ Info nog eens door en probeer opnieuw.") })
    ]));
    w.appendChild(el("button", { class: "btn", onclick: again }, ["Opnieuw"]));
    w.appendChild(back());
  }

  function openCheat(id) {
    var old = document.querySelector(".sheet"); if (old) old.remove();
    var nav = el("nav", null, D.cheat.map(function (c) { return el("a", { href: "#", onclick: function (e) { e.preventDefault(); var t = document.getElementById("cs-" + c.id); if (t) t.scrollIntoView({ behavior: "smooth" }); } }, [c.t]); }));
    var body = el("div", { class: "wrap" }, [nav].concat(D.cheat.map(function (c) {
      return el("section", { id: "cs-" + c.id, class: "card" }, [el("h2", { text: c.t, style: "margin-top:0" }), el("div", { html: c.h })]);
    })));
    var closeBtn = el("button", { type: "button", onclick: function () { s.remove(); document.getElementById("cheatBtn").focus(); } }, ["Sluiten"]);
    var s = el("div", { class: "sheet", role: "dialog", "aria-modal": "true", "aria-label": "Info" }, [
      el("div", { class: "bar" }, [el("b", { text: "ⓘ Info · File Services" }), closeBtn]), body]);
    s.addEventListener("keydown", function (e) { if (e.key === "Escape") s.remove(); });
    document.body.appendChild(s); closeBtn.focus();
    if (id) { var t = document.getElementById("cs-" + id); if (t) setTimeout(function () { t.scrollIntoView(); }, 30); }
  }
  document.getElementById("cheatBtn").addEventListener("click", function () { openCheat(); });

  var EXTRA_FOR = { sorteer: "rechten", matrix: "rechten", agdlp: "agdlp", exit1: "smb", smb: "smb", uitvoer: "trouble", bewijs: "trouble", overerving: "acl" };
  function intro(w, key, start, extraTopic) {
    var I = D.intros[key];
    var box = el("div", { class: "card intro" }, [el("span", { class: "tag black", text: "Zo werkt het" }), el("h2", { text: I.t })]
      .concat(I.p.map(function (p) { return el("p", { html: p }); }))
      .concat([el("div", { class: "infotip", html: D.infoTip })]));
    w.appendChild(box);
    var b3 = null;
    var b1 = el("button", { class: "btn", onclick: function () { box.remove(); b1.remove(); b2.remove(); if (b3) b3.remove(); start(); } }, ["Start"]);
    var b2 = el("button", { class: "btn sec mt", onclick: function () { openCheat(I.cs); } }, ["ⓘ Info bekijken"]);
    w.appendChild(b1); w.appendChild(b2);
    var x = extraTopic || EXTRA_FOR[key];
    if (x && D.extra && D.extra[x]) {
      b3 = el("a", { href: "#/extra/" + x, class: "btn sec mt", style: "display:block;text-align:center;text-decoration:none" }, ["Extra oefenen: " + D.extra[x].t + " (10 vragen)"]);
      w.appendChild(b3);
    }
  }
  function hint(text) {
    if (!text) return null;
    var wrapH = el("div");
    var b = el("button", { class: "hint", type: "button", onclick: function () { b.remove(); wrapH.appendChild(el("div", { class: "hinttext", html: text })); } }, ["Toon een hint"]);
    wrapH.appendChild(b); return wrapH;
  }
  /* Meerkeuzevraag: q = {q, o, a, w, e, s?, out?, h?}. De volgorde van de opties wordt geschud. */
  function mcq(box, q, done) {
    if (q.s) box.appendChild(el("div", { class: "scen", html: q.s }));
    if (q.svg) box.appendChild(drawGates(q.svg));
    if (q.out) box.appendChild(el("div", { class: "out", text: q.out }));
    box.appendChild(el("div", { class: "card" }, [el("div", { class: "q", html: q.q })]));
    var hb = hint(q.h); if (hb) box.appendChild(hb);
    var order = shuffle(q.o.map(function (t, k) { return { t: t, k: k }; }));
    var opts = el("div", { class: "opts" }), m = el("div"), answered = false;
    order.forEach(function (o) {
      var b = el("button", { class: "opt", onclick: function () {
        if (answered) return; answered = true; if (hb) hb.remove();
        var ok = o.k === q.a;
        Array.prototype.forEach.call(opts.children, function (x, idx) { x.disabled = true; if (order[idx].k === q.a) x.className = "opt ok"; });
        if (!ok) b.className = "opt bad";
        m.appendChild(ok ? fb(true, "Juist", q.e) : fb(false, "Niet juist",
          (q.w && q.w[o.k] ? "<b>Jouw keuze:</b> " + q.w[o.k] + "<br>" : "") + "<b>Juist is ‘" + strip(q.o[q.a]) + "’.</b> " + q.e));
        done(ok);
      } }, [el("span", { html: o.t })]);
      opts.appendChild(b);
    });
    box.appendChild(opts); box.appendChild(m);
  }
  function series(box, qs, key, again, label, after) {
    var i = 0, score = 0;
    function show() {
      box.innerHTML = ""; window.scrollTo(0, 0);
      if (i >= qs.length) { if (after) return after(score); return finish(box, key, score, qs.length, again); }
      box.appendChild(el("div", { class: "muted", text: (label || "Vraag") + " " + (i + 1) + " van " + qs.length }));
      box.appendChild(progress(i, qs.length));
      mcq(box, qs[i], function (ok) { if (ok) score++; next(box, i + 1 < qs.length ? "Volgende" : "Resultaat", function () { i++; show(); }); });
    }
    show();
  }
  /* Volgorde-puzzel: items in de juiste volgorde; de app schudt. done(aantalJuist, totaal) */
  function orderPuzzle(box, items, okMsg, badMsg, nextLabel, done) {
    var placed = [], bankItems = shuffle(items), n = items.length;
    var slots = el("div", { class: "order" }), bank = el("div", { class: "bank" }), m = el("div"), checked = false, good = false;
    var go = el("button", { class: "btn mt", disabled: true, onclick: function () {
      if (checked) return done(good ? 1 : 0);
      checked = true;
      good = placed.every(function (p, k) { return p === items[k]; });
      Array.prototype.forEach.call(slots.children, function (s, k) { s.className = "slot " + (placed[k] === items[k] ? "ok" : "bad"); });
      m.appendChild(good ? fb(true, "Juist", okMsg) : fb(false, "Niet helemaal", "De juiste volgorde is:<br>" + items.map(function (t, k) { return (k + 1) + ". " + t; }).join("<br>") + "<br>" + badMsg));
      go.textContent = nextLabel;
    } }, ["Controleer"]);
    function draw() {
      slots.innerHTML = ""; bank.innerHTML = "";
      for (var k = 0; k < n; k++) (function (k) {
        var p = placed[k];
        slots.appendChild(el("div", { class: "slot" }, [el("b", { text: String(k + 1) }),
          p ? el("button", { class: "tl", "aria-label": "Verwijder " + p, onclick: function () { if (checked) return; placed.splice(k, 1); draw(); } }, [p]) : el("span", { class: "muted", text: "tik hieronder een onderdeel" })]));
      })(k);
      bankItems.forEach(function (t) {
        if (placed.indexOf(t) > -1) return;
        bank.appendChild(el("button", { class: "tl", onclick: function () { if (checked || placed.length >= n) return; placed.push(t); draw(); } }, [t]));
      });
      go.disabled = placed.length < n;
    }
    box.appendChild(slots); box.appendChild(bank); box.appendChild(go); box.appendChild(m);
    draw();
  }
  /* Velden met keuzechips: F = {k, l, o, a, x, why}. done(aantalJuist) */
  function chipFields(box, fields, nextLabel, done, onCheck) {
    var sel = {}, groups = {}, m = el("div"), checked = false, right = 0;
    fields.forEach(function (F) {
      var chips = el("div", { class: "chips" });
      shuffle(F.o).forEach(function (o) {
        var c = el("button", { class: "chip", onclick: function () {
          if (checked) return; sel[F.k] = o;
          Array.prototype.forEach.call(chips.children, function (x) { x.className = "chip" + (x === c ? " sel" : ""); });
          go.disabled = Object.keys(sel).length < fields.length;
        } }, [o]);
        c.dataset.v = o; chips.appendChild(c);
      });
      groups[F.k] = chips;
      box.appendChild(el("div", { class: "field" }, [el("label", { text: F.l }), chips]));
    });
    var go = el("button", { class: "btn mt", disabled: true, onclick: function () {
      if (checked) return done(right);
      checked = true;
      fields.forEach(function (F) {
        Array.prototype.forEach.call(groups[F.k].children, function (x) {
          if (x.dataset.v === F.a) x.className = "chip " + (sel[F.k] === F.a ? "ok" : "should");
          else if (sel[F.k] === x.dataset.v) x.className = "chip bad";
        });
        if (sel[F.k] === F.a) right++;
      });
      if (onCheck) onCheck(sel);
      m.appendChild(fb(right === fields.length, right + " / " + fields.length + " juist", fields.map(function (F) {
        var good = sel[F.k] === F.a, why = (F.why && F.why[sel[F.k]]) || (F.whyAll ? F.whyAll(sel[F.k]) : "");
        return "<p style=\"margin:6px 0\">" + (good ? "✔" : "✘") + " <b>" + F.l + ": " + F.a + "</b><br>" + F.x +
          (!good && why ? " <i>Jouw keuze ‘" + sel[F.k] + "’: " + why + "</i>" : "") + "</p>";
      }).join("")));
      go.textContent = nextLabel;
    } }, ["Controleer"]);
    box.appendChild(go); box.appendChild(m);
  }

  /* ---------- home ---------- */
  var GAMES = [
    { r: "sorteer/pad", t: "Sorteer", s: "Paden · lagen · authenticatie of autorisatie · share- en NTFS-rechten", c: "#919E2C", i: "⇄", k: "sorteer" },
    { r: "smb", t: "Hoe werkt SMB?", s: "Zet de negen stappen van een SMB-verbinding in volgorde", c: "#000", i: "1…9", k: "smb" },
    { r: "matrix", t: "Toegangsmatrix", s: "Share ∩ NTFS, Allow, Deny: wat blijft er over?", c: "#EB6008", i: "∩", k: "matrix" },
    { r: "agdlp", t: "Bouw de AGDLP-keten", s: "Account → Global → Domain Local → Permission", c: "#14799B", i: "A→P", k: "agdlp" },
    { r: "exit1", t: "Exitcheck blok 1", s: "Paden, shares en de SMB-keten", c: "#919E2C", i: "✓", k: "exit1" },
    { r: "uitvoer", t: "Lees de uitvoer", s: "icacls, Get-SmbShareAccess, Get-SmbConnection, whoami", c: "#14799B", i: ">_", k: "uitvoer" },
    { r: "overerving", t: "Overerving en uitzonderingen", s: "Geërfd of expliciet, overerving uitschakelen, een afwijkende submap", c: "#000", i: "(I)", k: "overerving" },
    { r: "bewijs", t: "Welk bewijs?", s: "Begripscheck: wat bewijst écht iets?", c: "#EB6008", i: "!", k: "bewijs" }
  ];
  var LES = [
    { r: "demo", t: "Voorspel de demo", s: "Demo's 1–5: eerst voorspellen, dan het bewijs", c: "#EB6008", i: "?" },
    { r: "werkdoel", t: "Werkdoel en testmatrix", s: "Wat moet lukken, wat moet falen, en wat zag je?", c: "#14799B", i: "◎" },
    { r: "status", t: "Status", s: "Toon je status naast je laptop", c: "#000", i: "●" },
    { r: "fout", t: "Foutenpracticum", s: "Foutkaarten voor saboteur en slachtoffer", c: "#A6090F", i: "!" },
    { r: "ticket", t: "Ticketformulier", s: "Feiten → hypothese → test → oplossing → nacontrole", c: "#14799B", i: "#" },
    { r: "exitticket", t: "Exit ticket", s: "Vier vragen om af te sluiten", c: "#919E2C", i: "✓" }
  ];
  function scoreTag(k) {
    if (k === "sorteer") {
      var n = Object.keys(D.sets).filter(function (s) { return store("sort_" + s); }).length;
      return n ? el("span", { class: "done", text: n + "/" + Object.keys(D.sets).length + " sets" }) : null;
    }
    var res = store(k);
    return res ? el("span", { class: "done", text: res.score + "/" + res.total }) : null;
  }
  function tile(g, tag) {
    return el("a", { class: "tile", href: "#/" + g.r }, [
      el("span", { class: "ico", style: "background:" + g.c + (g.i.length > 2 ? ";font-size:14px" : ""), text: g.i }),
      el("span", null, [el("b", { text: g.t }), el("small", { text: g.s })]), tag]);
  }
  function home() {
    clear(); crumb.textContent = "Windows System Administration";
    var w = wrap();
    w.appendChild(el("span", { class: "tag olive", text: "Windows System Administration" }));
    w.appendChild(el("h1", { text: "File Services: SMB en NTFS" }));
    w.appendChild(el("p", { class: "muted", text: "Oefeningen en hulpmiddelen bij de les File Services (Finance-case). Elk onderdeel begint met korte uitleg, en via ‘ⓘ Info’ (rechtsboven) vind je altijd de theorie. Gebruik die gerust: opzoeken hoort bij het vak. Je resultaten blijven alleen op dit toestel." }));
    var t = el("div", { class: "tiles" });
    GAMES.forEach(function (g) { t.appendChild(tile(g, scoreTag(g.k))); });
    w.appendChild(t);
    w.appendChild(el("h2", { text: "Tijdens de les" }));
    var t2 = el("div", { class: "tiles" });
    LES.forEach(function (g) { t2.appendChild(tile(g, g.r === "exitticket" ? scoreTag("exitticket") : null)); });
    w.appendChild(t2);
    w.appendChild(el("h2", { text: "Extra oefenen" }));
    var t3 = el("div", { class: "tiles" });
    Object.keys(D.extra).forEach(function (x) {
      var r = store("extra_" + x);
      t3.appendChild(tile({ r: "extra/" + x, t: D.extra[x].t, s: "10 willekeurige vragen uit " + D.extra[x].q.length, c: "#5a5a5a", i: "+" }, r ? el("span", { class: "done", text: r.score + "/" + r.total }) : null));
    });
    w.appendChild(t3);
    w.appendChild(el("div", { class: "card mt" }, [
      el("b", { text: "Labomgeving" }),
      el("p", { class: "muted", html: "Domein <code>hogent.local</code> (NetBIOS HOGENT) · DC01 <code>192.168.60.10</code> (AD DS + DNS) · FS01 <code>192.168.60.20</code> (fileserver, D:\\Shares) · W11-01 <code>192.168.60.30</code> · netwerk 192.168.60.0/24, geen gateway" })
    ]));
    w.appendChild(el("button", { class: "btn sec mt", onclick: function () {
      if (!window.confirm("Al je scores, voorspellingen en ingevulde gegevens van deze FS-app wissen?")) return;
      try { Object.keys(localStorage).forEach(function (k) { if (k.indexOf(P) === 0) localStorage.removeItem(k); }); } catch (e) {}
      home();
    } }, ["Mijn resultaten wissen"]));
  }

  /* ---------- 1. Sorteer (stemkaart + oefenen) ---------- */
  function sorteer(setId, mode) {
    var S = D.sets[setId]; if (!S) { setId = "pad"; S = D.sets.pad; }
    clear(); crumb.textContent = "Sorteer · " + S.t;
    var w = wrap();
    w.appendChild(el("h1", { text: S.t }));
    var chips = el("div", { class: "chips" });
    Object.keys(D.sets).forEach(function (k) {
      var r = store("sort_" + k);
      chips.appendChild(el("a", { class: "chip" + (k === setId ? " sel" : ""), href: "#/" + (mode === "vote" ? "kaart/" : "sorteer/") + k, style: "text-decoration:none" }, [D.sets[k].t + (r ? " · " + r.score + "/" + r.total : "")]));
    });
    w.appendChild(chips);
    w.appendChild(el("div", { class: "seg", role: "tablist" }, [
      el("button", { class: mode === "quiz" ? "on" : "", role: "tab", "aria-selected": mode === "quiz", onclick: function () { location.hash = "#/sorteer/" + setId; } }, ["Oefenen"]),
      el("button", { class: mode === "vote" ? "on" : "", role: "tab", "aria-selected": mode === "vote", onclick: function () { location.hash = "#/kaart/" + setId; } }, ["Stemkaart (klas)"])
    ]));
    if (mode === "vote") {
      w.appendChild(el("p", { class: "muted", html: S.intro + " Je docent toont een situatie. Kies je antwoord en steek bij ‘3-2-1’ je gsm op. Tik op de grote kaart om terug te gaan." }));
      var g = el("div", { class: "rgrid" + (S.cats.length === 3 ? " three" : "") });
      S.cats.forEach(function (r) { g.appendChild(el("button", { class: "rbtn word", style: "background:" + r.c, onclick: function () { bigCard(r); } }, [r.t, el("small", { text: r.d })])); });
      w.appendChild(g); w.appendChild(back());
    } else {
      var box = el("div"); w.appendChild(box);
      intro(box, "sorteer", function () { sortQuiz(box, S, setId); });
    }
  }
  function bigCard(r) {
    var c = el("div", { class: "bigcard", style: "background:" + r.c + ";font-family:var(--font)", role: "button", "aria-label": "Sluit kaart " + r.t, tabindex: 0 }, [
      el("div", { class: "t", text: r.t, style: "font-size:min(" + Math.round(160 / Math.max(r.t.length, 3)) + "vw,180px)" }), el("div", { class: "h", text: "Tik om te sluiten" })]);
    function close() { c.remove(); }
    c.addEventListener("click", close);
    c.addEventListener("keydown", function (e) { if (e.key === "Escape" || e.key === "Enter") close(); });
    document.body.appendChild(c); c.focus();
  }
  function sortQuiz(box, S, setId) {
    var qs = shuffle(S.items), i = 0, score = 0;
    box.appendChild(el("p", { class: "muted", html: S.intro }));
    var inner = el("div"); box.appendChild(inner);
    function show() {
      inner.innerHTML = ""; window.scrollTo(0, 0);
      if (i >= qs.length) { finish(inner, "sort_" + setId, score, qs.length, function () { sorteer(setId, "quiz"); }); return; }
      var q = qs[i];
      inner.appendChild(el("div", { class: "muted", text: "Situatie " + (i + 1) + " van " + qs.length }));
      inner.appendChild(progress(i, qs.length));
      inner.appendChild(el("div", { class: "card" }, [el("div", { class: "q", html: q.q })]));
      var g = el("div", { class: "rgrid" + (S.cats.length === 3 ? " three" : "") }), done = false;
      S.cats.forEach(function (r) {
        var b = el("button", { class: "rbtn word", style: "background:" + r.c, onclick: function () {
          if (done) return; done = true;
          var ok = r.t === q.a; if (ok) score++;
          Array.prototype.forEach.call(g.children, function (x) { x.style.opacity = x === b || x.dataset.t === q.a ? 1 : .25; });
          inner.appendChild(ok ? fb(true, "Juist: " + q.a, q.e) : fb(false, "Niet juist. Het best past " + q.a + ".",
            "<b>Jouw keuze, " + r.t + ",</b> is " + r.l + ". Dat past hier minder.<br><b>Waarom " + q.a + "?</b> " + q.e));
          next(inner, i + 1 < qs.length ? "Volgende" : "Resultaat", function () { i++; show(); });
        } }, [r.t, el("small", { text: r.d })]);
        b.dataset.t = r.t; g.appendChild(b);
      });
      inner.appendChild(g);
    }
    show();
  }

  /* ---------- 2. Toegangsmatrix: tekening van de toegangsweg ---------- */
  /* o = {u, via: 'UNC'|'lokaal', share, ntfs} */
  function drawGates(o) {
    var lok = o.via === "lokaal";
    function t(x, y, txt, a) { a = a || {}; return '<text x="' + x + '" y="' + y + '" text-anchor="' + (a.anchor || "middle") + '" font-size="' + (a.size || 11) + '" font-weight="' + (a.w || 600) + '" fill="' + (a.fill || "#000") + '">' + txt + '</text>'; }
    var g = '<svg viewBox="-16 0 376 150" role="img" aria-label="Toegangsweg van ' + o.u + ': ' + (lok ? 'lokaal, alleen NTFS' : 'via SMB, share ' + o.share + ' en NTFS ' + o.ntfs) + '" style="width:100%;max-width:560px;display:block;margin:6px auto 10px;font-family:Montserrat,system-ui,sans-serif">';
    g += '<defs><marker id="gah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#000"/></marker></defs>';
    // gebruiker
    g += '<circle cx="32" cy="52" r="10" fill="none" stroke="#000" stroke-width="1.8"/><path d="M14,86 q18,-26 36,0" fill="none" stroke="#000" stroke-width="1.8"/>' + t(32, 104, o.u, { size: 9.5 }) + t(32, 118, lok ? "op FS01" : "op W11-01", { w: 400, size: 9, fill: "#5a5a5a" });
    // pijl met pad
    g += '<line x1="58" y1="66" x2="104" y2="66" stroke="#000" stroke-width="2" marker-end="url(#gah)"/>' + t(81, 58, lok ? "D:\\" : "\\\\FS01", { size: 8.5, w: 700 });
    // sharepoort
    if (lok) {
      g += '<rect x="108" y="30" width="90" height="72" rx="7" fill="#f2f2f2" stroke="#bbb" stroke-dasharray="4 3"/>' + t(153, 54, "SHARE", { w: 800, size: 11, fill: "#999" }) + t(153, 72, "niet gebruikt", { size: 9.5, fill: "#999" }) + t(153, 88, "(lokaal pad)", { w: 400, size: 9, fill: "#999" });
    } else {
      g += '<rect x="108" y="30" width="90" height="72" rx="7" fill="#EB6008"/>' + t(153, 54, "SHARE", { w: 800, size: 11, fill: "#fff" }) + t(153, 76, o.share, { size: o.share.length > 12 ? 9.5 : 12, fill: "#fff", w: 700 });
    }
    g += '<line x1="198" y1="66" x2="214" y2="66" stroke="#000" stroke-width="2" marker-end="url(#gah)"/>';
    // NTFS-poort
    g += '<rect x="218" y="30" width="90" height="72" rx="7" fill="#14799B"/>' + t(263, 54, "NTFS", { w: 800, size: 11, fill: "#fff" }) + t(263, 76, o.ntfs, { size: o.ntfs.length > 12 ? 9 : 12, fill: "#fff", w: 700 });
    g += '<line x1="308" y1="66" x2="322" y2="66" stroke="#000" stroke-width="2" marker-end="url(#gah)"/>';
    // map
    g += '<path d="M326,48 h10 l4,5 h14 v34 h-28 z" fill="#919E2C"/>' + t(340, 104, "Finance", { size: 9 });
    g += t(180, 138, lok ? "Lokaal: alleen NTFS" : "Via SMB: share ∩ NTFS", { size: 10.5, w: 700, fill: "#5a5a5a" });
    return el("div", { class: "card", html: g + "</svg>" });
  }
  function matrix() {
    clear(); crumb.textContent = "Toegangsmatrix";
    var w = wrap();
    w.appendChild(el("h1", { text: "Toegangsmatrix" }));
    var box = el("div"); w.appendChild(box);
    intro(box, "matrix", function () { series(box, D.matrix, "matrix", matrix, "Situatie"); });
  }

  /* ---------- 3. AGDLP ---------- */
  function agdlp() {
    clear(); crumb.textContent = "AGDLP-keten";
    var w = wrap();
    w.appendChild(el("h1", { text: "Bouw de AGDLP-keten" }));
    var box = el("div"); w.appendChild(box);
    var A = D.agdlp, score = 0, total = 1 + A.scopes.length + A.q.length;
    function stap1() {
      box.innerHTML = "";
      box.appendChild(el("div", { class: "muted", text: "Stap 1 van 3 · Zet de keten voor Sara in volgorde" }));
      box.appendChild(progress(0, 3));
      orderPuzzle(box, A.order, "Account → Global group → Domain Local group → Permission. De global group zegt wie bij de rol hoort, de domain local group welke toegang bij de resource hoort.",
        "Geheugensteun: <b>A G DL P</b>. De machtiging komt altijd als laatste, op de resource.", "Stap 2: welk bereik?", function (r) { score += r; stap2(); });
    }
    function stap2() {
      box.innerHTML = ""; window.scrollTo(0, 0);
      box.appendChild(el("div", { class: "muted", text: "Stap 2 van 3 · Kies het groepsbereik" }));
      box.appendChild(progress(1, 3));
      var F = A.scopes.map(function (s) { var why = {}; A.scopeOpts.forEach(function (o) { if (o !== s.a) why[o] = A.why[o]; }); return { k: s.k, l: s.l, o: A.scopeOpts, a: s.a, x: s.x, why: why }; });
      chipFields(box, F, "Stap 3: wie krijgt welke toegang?", function (r) { score += r; stap3(); });
    }
    function stap3() {
      series(box, A.q, "agdlp", agdlp, "Vraag", function (s) { finish(box, "agdlp", score + s, total, agdlp); });
    }
    intro(box, "agdlp", stap1);
  }

  /* ---------- 4. Hoe werkt SMB? ---------- */
  function smb() {
    clear(); crumb.textContent = "Hoe werkt SMB?";
    var w = wrap();
    w.appendChild(el("h1", { text: "Hoe werkt SMB?" }));
    var box = el("div"); w.appendChild(box);
    var G = D.smb, score = 0, total = 1 + G.q.length;
    function stap1() {
      box.innerHTML = "";
      box.appendChild(el("div", { class: "muted", text: "Stap 1 van 2 · Zet de stappen in volgorde" }));
      box.appendChild(progress(0, 2));
      orderPuzzle(box, G.order, "Eerst de naam, dan de TCP-verbinding, dan het dialect, de identiteit en de sessie. Pas dan de share, de machtigingen en het werk zelf.",
        "Elke stap heeft de vorige nodig: zonder IP-adres geen TCP-verbinding, zonder identiteit geen autorisatie.", "Stap 2: vier vragen", function (r) { score += r; stap2(); });
    }
    function stap2() { series(box, G.q, "smb", smb, "Vraag", function (s) { finish(box, "smb", score + s, total, smb); }); }
    intro(box, "smb", stap1);
  }

  /* ---------- 5. Eenvoudige reeksen ---------- */
  function simple(key, title, list, label) {
    return function () {
      clear(); crumb.textContent = title;
      var w = wrap();
      w.appendChild(el("h1", { text: title }));
      var box = el("div"); w.appendChild(box);
      intro(box, key, function () { series(box, list(), key, simple(key, title, list, label), label); });
    };
  }

  /* ---------- 6. Voorspel de demo ---------- */
  function demoPage(start) {
    clear(); crumb.textContent = "Voorspel de demo";
    var w = wrap();
    w.appendChild(el("h1", { text: "Voorspel de demo" }));
    var box = el("div"); w.appendChild(box);
    var saved = store("demos") || {};
    function save() { store("demos", saved); }
    function list() {
      box.innerHTML = ""; window.scrollTo(0, 0);
      box.appendChild(el("p", { class: "muted", text: "Kies de demo die de docent nu toont. Voorspel vóór het commando uitgevoerd wordt." }));
      var g = el("div", { class: "opts" });
      D.demos.forEach(function (d, i) {
        var sv = saved[d.n], tg = !sv ? "" : (sv.shown ? (sv.c === d.a ? "  ✔ klopte" : "  ✘ klopte niet") : "  · voorspeld");
        g.appendChild(el("button", { class: "opt", onclick: function () { one(i); } }, [el("b", { text: "V" + d.n + " · demo " + d.demo + " · " }), d.t, el("span", { class: "muted", text: tg })]));
      });
      box.appendChild(g);
      var done = D.demos.filter(function (d) { return saved[d.n] && saved[d.n].shown; });
      if (done.length) {
        box.appendChild(el("h2", { text: "Jouw voorspelkaart" }));
        var t = el("table", { class: "vk" }, [el("tr", null, [el("th", { text: "V" }), el("th", { text: "Jouw voorspelling" }), el("th", { text: "" })])]);
        done.forEach(function (d) { var sv = saved[d.n]; t.appendChild(el("tr", null, [el("td", { text: String(d.n) }), el("td", { html: d.o[sv.c] }), el("td", { text: sv.c === d.a ? "✔" : "✘" })])); });
        box.appendChild(el("div", { class: "card" }, [t]));
        box.appendChild(el("button", { class: "btn sec mt", onclick: function () { saved = {}; save(); list(); } }, ["Opnieuw beginnen"]));
      }
      box.appendChild(back());
    }
    function one(i) {
      var d = D.demos[i], sv = saved[d.n];
      if (!d.order) d.order = shuffle(d.o.map(function (_, k) { return k; }));
      box.innerHTML = ""; window.scrollTo(0, 0);
      box.appendChild(el("div", { class: "muted", text: "Voorspelling " + d.n + " van " + D.demos.length + " · demo " + d.demo }));
      box.appendChild(progress(i, D.demos.length));
      box.appendChild(el("div", { class: "card" }, [el("span", { class: "tag black", text: "Voorspel" }), el("h2", { text: d.t, style: "margin-top:8px" }), el("div", { class: "q", html: d.q })]));
      var opts = el("div", { class: "opts" });
      d.order.forEach(function (k) {
        var cls = "opt";
        if (sv && sv.shown) cls += k === d.a ? " ok" : (k === sv.c ? " bad" : "");
        else if (sv && sv.c === k) cls += " sel";
        opts.appendChild(el("button", { class: cls, disabled: sv && sv.shown ? true : null, onclick: function () { saved[d.n] = { c: k }; save(); one(i); } }, [el("span", { html: d.o[k] })]));
      });
      box.appendChild(opts);
      if (sv && !sv.shown) {
        box.appendChild(el("div", { class: "fb ok", style: "background:#fff8e6;border-left-color:#e0b000" }, [el("b", { text: "Je voorspelling is bewaard." }), el("span", { text: "Kijk nu naar de demo. Je mag je keuze nog wijzigen zolang het bewijs niet getoond is." })]));
        next(box, "De demo is gebeurd: toon het bewijs", function () { sv.shown = true; save(); one(i); });
      } else if (sv && sv.shown) {
        var ok = sv.c === d.a;
        box.appendChild(fb(ok, ok ? "Je voorspelling klopte" : "Je voorspelling klopte niet",
          (!ok && d.w[sv.c] ? "<b>Jouw voorspelling:</b> " + d.w[sv.c] + "<br>" : "") + "<b>Bewijs:</b> " + d.e));
      } else box.appendChild(el("p", { class: "muted mt", text: "Tik op je voorspelling." }));
      var nav = el("div", { class: "row mt" }, [el("button", { class: "btn sec", onclick: list }, ["Alle voorspellingen"])]);
      if (i + 1 < D.demos.length) nav.appendChild(el("button", { class: "btn", onclick: function () { one(i + 1); } }, ["Volgende voorspelling"]));
      box.appendChild(nav);
    }
    if (start !== undefined && start !== null) one(start); else intro(box, "demo", list);
  }

  /* ---------- 7. Status ---------- */
  function statusPage() {
    clear(); crumb.textContent = "Status";
    var w = wrap();
    w.appendChild(el("h1", { text: "Waar sta jij?" }));
    var box = el("div"); w.appendChild(box);
    function grid() {
      var g = el("div", { class: "opts" });
      D.status.forEach(function (st) {
        g.appendChild(el("button", { class: "stbtn", style: "background:" + st.c, onclick: function () { show(st); } }, [
          el("span", { class: "n", text: String(st.n) }), el("span", null, [el("b", { text: st.t }), el("small", { text: st.d })])]));
      });
      var last = store("status"); if (last) box.appendChild(el("p", { class: "muted", text: "Laatst gekozen: " + last }));
      box.appendChild(g); box.appendChild(back());
    }
    function show(st) {
      store("status", st.n + " · " + st.t);
      var kids = [el("div", { class: "n", text: String(st.n) }), el("div", { class: "t", text: st.t }), el("div", { class: "d", text: st.d })];
      if (st.q) kids.push(el("ol", null, st.q.map(function (x) { return el("li", { text: x }); })));
      kids.push(el("div", { class: "h", text: "Tik om je status te wijzigen" }));
      var c = el("div", { class: "statuscard", style: "background:" + st.c, role: "button", tabindex: 0, "aria-label": "Status " + st.n + " " + st.t + ". Tik om te wijzigen." }, kids);
      function close() { c.remove(); statusPage(); }
      c.addEventListener("click", close);
      c.addEventListener("keydown", function (e) { if (e.key === "Escape" || e.key === "Enter") close(); });
      document.body.appendChild(c); c.focus();
    }
    intro(box, "status", grid);
  }

  /* ---------- 8. Foutenpracticum ---------- */
  function foutPage(mode) {
    clear(); crumb.textContent = "Foutenpracticum";
    var w = wrap();
    w.appendChild(el("h1", { text: "Breek het bij je buur" }));
    var box = el("div"); w.appendChild(box);
    function tabs(cur) {
      return el("div", { class: "seg", role: "tablist" }, [
        el("button", { class: cur === "sab" ? "on" : "", role: "tab", onclick: function () { location.hash = "#/fout/sab"; } }, ["Saboteur"]),
        el("button", { class: cur === "slo" ? "on" : "", role: "tab", onclick: function () { location.hash = "#/fout/slo"; } }, ["Slachtoffer"])]);
    }
    function stars(n) { return "★★★".slice(0, n); }
    function sab() {
      box.appendChild(tabs("sab"));
      var cur = store("foutSab");
      if (!cur) {
        box.appendChild(el("p", { class: "muted", text: "Kies een moeilijkheidsgraad en trek een foutkaart. Je buur kijkt weg." }));
        var g = el("div", { class: "opts" });
        [[1, "★ makkelijk (kaarten 1–3)"], [2, "★★ gemiddeld (kaarten 4–6)"], [3, "★★★ moeilijk (kaarten 7–8)"], [0, "Willekeurig"]].forEach(function (o) {
          g.appendChild(el("button", { class: "opt", onclick: function () {
            var pool = D.fouten.filter(function (f) { return !o[0] || f.s === o[0]; });
            var f = pool[Math.floor(Math.random() * pool.length)];
            store("foutSab", { nr: f.nr, hint: false, opl: false }); foutPage("sab");
          } }, [o[1]]));
        });
        box.appendChild(g); return;
      }
      var f = D.fouten.filter(function (x) { return x.nr === cur.nr; })[0];
      box.appendChild(el("div", { class: "card dark" }, [el("div", { class: "muted", style: "color:#ccc", text: "Geef je buur alleen dit nummer:" }),
        el("div", { class: "score", text: "Kaart " + f.nr }), el("div", { text: stars(f.s) + " · " + f.t })]));
      box.appendChild(el("div", { class: "card" }, [el("b", { text: "Uitvoeren bij je buur (2 min)" }), el("p", { html: f.uit })]));
      if (cur.hint) {
        box.appendChild(el("div", { class: "card" }, [el("b", { text: "Hint voor je buur: de laag" }), el("div", { class: "ladder" },
          D.ladder.split(" → ").map(function (l) { return el("span", { class: l === f.laag ? "on" : "", text: l }); }))]));
      } else box.appendChild(el("button", { class: "btn sec mt", onclick: function () { cur.hint = true; store("foutSab", cur); foutPage("sab"); } }, ["Na 10 min vast? Toon de hint (laag)"]));
      if (cur.opl) {
        box.appendChild(el("div", { class: "card" }, [el("b", { text: "Symptoom" }), el("p", { html: f.sym }), el("b", { text: "Oplossing" }), el("p", { html: f.opl })]));
      } else box.appendChild(el("button", { class: "btn sec mt", onclick: function () { cur.opl = true; store("foutSab", cur); foutPage("sab"); } }, ["Toon symptoom en oplossing (achteraf)"]));
      box.appendChild(el("button", { class: "btn mt", onclick: function () { store("foutSab", null); foutPage("sab"); } }, ["Nieuwe kaart trekken"]));
    }
    function slo() {
      box.appendChild(tabs("slo"));
      var nr = store("foutSlo");
      box.appendChild(el("p", { class: "muted", text: "Welk kaartnummer gaf je buur je?" }));
      var chips = el("div", { class: "chips" });
      D.fouten.forEach(function (f) {
        chips.appendChild(el("button", { class: "chip" + (nr === f.nr ? " sel" : ""), onclick: function () { store("foutSlo", f.nr); foutPage("slo"); } }, [String(f.nr)]));
      });
      box.appendChild(chips);
      if (nr) {
        var f = D.fouten.filter(function (x) { return x.nr === nr; })[0];
        box.appendChild(el("div", { class: "card mt" }, [el("span", { class: "tag", text: "Melding #" + (4100 + f.nr) }), el("p", { class: "q", style: "margin-top:10px", text: "“" + f.ticket + "”" })]));
        box.appendChild(el("p", { class: "muted", text: "Werk de melding af: feiten → verwacht gedrag → bewijs per laag (" + D.ladder + ") → hypothese → oplossing → nacontrole." }));
        box.appendChild(el("a", { href: "#/ticket", class: "btn", style: "display:block;text-align:center;text-decoration:none" }, ["Open het ticketformulier"]));
      }
    }
    if (mode === "sab") sab(); else if (mode === "slo") slo();
    else intro(box, "fout", function () { location.hash = "#/fout/sab"; });
    box.appendChild(back());
  }

  /* ---------- 9. Formulieren: ticket en werkdoel ---------- */
  function formPage(key, title, fields, file, start) {
    clear(); crumb.textContent = title;
    var w = wrap();
    w.appendChild(el("h1", { text: title }));
    var box = el("div"); w.appendChild(box);
    function form() {
      var data = store(key) || {};
      function save() { store(key, data); }
      fields.forEach(function (f) {
        if (f.chips) {
          var ch = el("div", { class: "chips" });
          f.chips.forEach(function (o) {
            var c = el("button", { class: "chip" + (data[f.k] === o ? " sel" : ""), onclick: function () {
              data[f.k] = o; save(); Array.prototype.forEach.call(ch.children, function (x) { x.className = "chip" + (x === c ? " sel" : ""); });
            } }, [o]);
            ch.appendChild(c);
          });
          box.appendChild(el("div", { class: "field" }, [el("label", { text: f.l }), ch]));
          return;
        }
        var ta = el("textarea", { rows: f.r, placeholder: f.h, "aria-label": f.l });
        ta.value = data[f.k] || "";
        ta.addEventListener("input", function () { data[f.k] = ta.value; save(); });
        box.appendChild(el("div", { class: "field" }, [el("label", { text: f.l }), ta]));
      });
      if (key === "ticket") {
        var chips = el("div", { class: "chips" });
        ["Opgelost", "Niet opgelost", "Verder onderzoek"].forEach(function (o) {
          var c = el("button", { class: "chip" + (data.status === o ? " sel" : ""), onclick: function () {
            data.status = o; save(); Array.prototype.forEach.call(chips.children, function (x) { x.className = "chip" + (x === c ? " sel" : ""); });
          } }, [o]);
          chips.appendChild(c);
        });
        box.appendChild(el("div", { class: "field" }, [el("label", { text: "Status" }), chips]));
      }
      var msg = el("div");
      function asText() { return fields.map(function (f) { return f.l + "\n" + (data[f.k] || "") + "\n"; }).join("\n") + (key === "ticket" ? "\nStatus: " + (data.status || "") + "\n" : ""); }
      box.appendChild(el("div", { class: "row mt" }, [
        el("button", { class: "btn", onclick: function () {
          var t = asText(); msg.innerHTML = "";
          (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { msg.appendChild(fb(true, "Gekopieerd", "Plak het nu in je werkdocument.")); },
            function () { var ta = el("textarea", { rows: 8 }); ta.value = t; msg.appendChild(ta); ta.select(); msg.appendChild(el("p", { class: "muted", text: "Kopiëren lukte niet automatisch: selecteer de tekst hierboven en kopieer hem zelf." })); });
        } }, ["Kopiëren"]),
        el("button", { class: "btn sec", onclick: function () {
          var a = el("a", { href: URL.createObjectURL(new Blob([asText()], { type: "text/plain" })), download: file });
          document.body.appendChild(a); a.click(); a.remove();
        } }, ["Downloaden (.txt)"])]));
      box.appendChild(msg);
      box.appendChild(el("button", { class: "btn sec mt", onclick: function () { if (window.confirm("Alles wissen en opnieuw beginnen?")) { store(key, {}); formPage(key, title, fields, file, true); } } }, ["Leegmaken"]));
      box.appendChild(back());
    }
    if (start) form(); else intro(box, key, form);
  }

  /* ---------- 10. Exit ticket ---------- */
  function exitTicketPage() {
    clear(); crumb.textContent = "Exit ticket";
    var w = wrap();
    w.appendChild(el("h1", { text: "Exit ticket" }));
    var box = el("div"); w.appendChild(box);
    var E = D.exitTicket, i = 0, score = 0;
    function show() {
      box.innerHTML = ""; window.scrollTo(0, 0);
      box.appendChild(el("div", { class: "muted", text: "Vraag " + (i + 1) + " van " + (E.mc.length + 1) }));
      box.appendChild(progress(i, E.mc.length + 1));
      if (i < E.mc.length) { mcq(box, E.mc[i], function (ok) { if (ok) score++; next(box, "Volgende", function () { i++; show(); }); }); return; }
      var ta = el("textarea", { rows: 5, "aria-label": E.open });
      ta.value = store("exitOpen") || "";
      ta.addEventListener("input", function () { store("exitOpen", ta.value); });
      box.appendChild(el("div", { class: "card" }, [el("div", { class: "q", text: E.open })]));
      box.appendChild(ta);
      next(box, "Afronden", function () {
        store("exitticket", { score: score, total: E.mc.length });
        box.innerHTML = "";
        box.appendChild(el("div", { class: "card", style: "text-align:center" }, [el("div", { class: "score", text: "Bedankt!" }),
          el("p", { text: "Laat je omgeving werkend achter en neem een snapshot met een betekenisvolle naam, bv. ‘FS-eind’." })]));
        box.appendChild(back());
      });
    }
    intro(box, "exitticket", show);
  }

  /* ---------- 11. Extra oefenen ---------- */
  function extraPage(topic) {
    var X = D.extra && D.extra[topic];
    if (!X) return home();
    clear(); crumb.textContent = X.t + " · extra oefenen";
    var w = wrap();
    w.appendChild(el("h1", { text: X.t }));
    w.appendChild(el("p", { class: "muted", text: "Extra oefenen: 10 willekeurige vragen uit een poel van " + X.q.length + ". Elke ronde krijg je andere vragen." }));
    var box = el("div"); w.appendChild(box);
    series(box, shuffle(X.q).slice(0, 10), "extra_" + topic, function () { extraPage(topic); });
  }

  /* ---------- router ---------- */
  var R = {
    "": home,
    matrix: matrix, agdlp: agdlp, smb: smb,
    exit1: simple("exit1", "Exitcheck blok 1", function () { return D.exit1; }, "Vraag"),
    uitvoer: simple("uitvoer", "Lees de uitvoer", function () { return D.uitvoer; }, "Uitvoer"),
    bewijs: simple("bewijs", "Welk bewijs is overtuigend?", function () { return shuffle(D.bewijs); }, "Bewering"),
    overerving: simple("overerving", "Overerving en uitzonderingen", function () { return D.overerving; }, "Vraag"),
    demo: function () { demoPage(); }, status: statusPage,
    fout: function () { foutPage(); }, "fout/sab": function () { foutPage("sab"); }, "fout/slo": function () { foutPage("slo"); },
    ticket: function () { formPage("ticket", "Ticketformulier", D.ticketVelden, "ticket-fs.txt"); },
    werkdoel: function () { formPage("werkdoel", "Werkdoel en testmatrix", D.werkdoel, "werkdoel-fs.txt"); },
    exitticket: exitTicketPage
  };
  function route() {
    var r = (location.hash || "#/").replace(/^#\//, "");
    document.querySelectorAll(".sheet,.bigcard,.statuscard").forEach(function (n) { n.remove(); });
    var m;
    if (r.indexOf("extra/") === 0) extraPage(r.slice(6));
    else if ((m = r.match(/^sorteer(?:\/(\w+))?$/))) sorteer(m[1] || "pad", "quiz");
    else if ((m = r.match(/^kaart(?:\/(\w+))?$/))) sorteer(m[1] || "pad", "vote");
    else if ((m = r.match(/^demo\/(\d+)$/))) demoPage(Math.max(0, Math.min(D.demos.length - 1, +m[1] - 1)));
    else (R[r] || home)();
    app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);
  route();
})();
