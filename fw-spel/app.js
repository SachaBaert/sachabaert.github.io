(function () {
  "use strict";
  var D = window.FWDATA;
  var app = document.getElementById("app");
  var crumb = document.getElementById("crumb");
  var P = "fw.";

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
      el("div", { class: "bar" }, [el("b", { text: "ⓘ Info · Netwerksegmentatie" }), closeBtn]), body]);
    s.addEventListener("keydown", function (e) { if (e.key === "Escape") s.remove(); });
    document.body.appendChild(s); closeBtn.focus();
    if (id) { var t = document.getElementById("cs-" + id); if (t) setTimeout(function () { t.scrollIntoView(); }, 30); }
  }
  document.getElementById("cheatBtn").addEventListener("click", function () { openCheat(); });

  var EXTRA_FOR = { sorteer: "segmentatie", ontwerp: "segmentatie", pakket: "dhcp", regel: "firewall", exit1: "pfsense", exit2: "dhcp", uitvoer: "trouble", bewijs: "trouble" };
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
    if (q.svg) box.appendChild(drawNet(q.svg));
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
    { r: "sorteer/lokaal", t: "Sorteer", s: "Lokaal of gateway · welke interface · wie doet wat · welke laag faalt", c: "#919E2C", i: "⇄", k: "sorteer" },
    { r: "ontwerp", t: "Ontwerp het netwerk", s: "Adresplan invullen op de tekening en ontwerpfouten herkennen", c: "#000", i: "⌗", k: "ontwerp" },
    { r: "pakket", t: "Volg het pakket", s: "De weg van een ping en van een DHCP-aanvraag via de relay", c: "#14799B", i: "→", k: "pakket" },
    { r: "exit1", t: "Exitcheck blok 1", s: "Segmentatie, ontwerp en pfSense", c: "#919E2C", i: "✓", k: "exit1" },
    { r: "regel", t: "Lees de regel", s: "Interface, bron, bestemming, volgorde en stateful", c: "#EB6008", i: "≡", k: "regel" },
    { r: "uitvoer", t: "Lees de uitvoer", s: "ipconfig, ping, arp, Test-NetConnection en het firewalllog", c: "#14799B", i: ">_", k: "uitvoer" },
    { r: "bewijs", t: "Welk bewijs?", s: "Begripscheck: wat bewijst écht iets?", c: "#EB6008", i: "!", k: "bewijs" },
    { r: "exit2", t: "Exitcheck blok 2", s: "Regels, diensten testen en DHCP-relay", c: "#919E2C", i: "✓", k: "exit2" }
  ];
  var LES = [
    { r: "labo", t: "Labo klaarzetten", s: "VMnets, SRV01, CLIENT01 en pfSense voor de namiddag", c: "#2e7d32", i: "▶" },
    { r: "demo", t: "Voorspel de demo", s: "Demo's 1–8: eerst voorspellen, dan het bewijs", c: "#EB6008", i: "?" },
    { r: "werkdoel", t: "Werkdoel en bewijslijst", s: "Wat moet je per fase aantonen, en met welke test?", c: "#14799B", i: "◎" },
    { r: "status", t: "Status", s: "Toon je status naast je laptop", c: "#000", i: "●" },
    { r: "fout", t: "Foutenpracticum", s: "Foutkaarten voor saboteur en slachtoffer", c: "#A6090F", i: "!" },
    { r: "ticket", t: "Ticketformulier", s: "Feiten → hypothese → test → oplossing → nacontrole", c: "#14799B", i: "#" },
    { r: "exitticket", t: "Exit ticket", s: "Vier vragen en één open vraag om af te sluiten", c: "#919E2C", i: "✓" }
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
    w.appendChild(el("h1", { text: "Netwerksegmentatie met pfSense" }));
    w.appendChild(el("p", { class: "muted", text: "Oefeningen en hulpmiddelen bij de les over pfSense, firewallregels en DHCP-relay. Elk onderdeel begint met korte uitleg, en via ‘ⓘ Info’ (rechtsboven) vind je altijd de theorie. Gebruik die gerust: opzoeken hoort bij het vak. Je resultaten blijven alleen op dit toestel." }));
    w.appendChild(el("div", { class: "card", html: drawNet({}).innerHTML }));
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
      el("p", { class: "muted", html: "Domein <code>cursus.local</code> · SRV01 <code>192.168.10.10</code> (VMnet2) · CLIENT01 in <code>192.168.20.0/24</code> (VMnet3) · pfSense SERVER <code>192.168.10.1</code>, CLIENT <code>192.168.20.1</code>, WAN via VMnet8. Volledig plan: ⓘ Info › Labomgeving." })
    ]));
    w.appendChild(el("button", { class: "btn sec mt", onclick: function () {
      if (!window.confirm("Al je scores, voorspellingen en ingevulde gegevens van deze FW-app wissen?")) return;
      try { Object.keys(localStorage).forEach(function (k) { if (k.indexOf(P) === 0) localStorage.removeItem(k); }); } catch (e) {}
      home();
    } }, ["Mijn resultaten wissen"]));
  }

  /* ---------- Netwerktekening: client — pfSense — server ----------
     o: c, cgw, cdns (client) · s, sgw, sdns (server) · pc, ps (pfSense CLIENT/SERVER) · vc, vs (VMnet)
        rule: 'CLIENT'|'SERVER' (regelbadge) · x: 'pc'|'ps'|'s' (hier stopt het) · same: 1 (zelfde VMnet)
     Een waarde die met '?' begint, wordt als gevraagd veld getoond. */
  function drawNet(o) {
    o = o || {};
    var dv = { c: "192.168.20.100/24", cgw: "gw 192.168.20.1", cdns: "DNS 192.168.10.10", s: "192.168.10.10/24", sgw: "gw 192.168.10.1", sdns: "DNS 192.168.10.10",
      pc: "192.168.20.1/24", ps: "192.168.10.1/24", vc: "VMnet3", vs: "VMnet2" };
    var qlab = { c: "IP ?", cgw: "gw ?", cdns: "DNS ?", s: "IP ?", sgw: "gw ?", sdns: "DNS ?", pc: "?", ps: "?", vc: "?", vs: "?" };
    function v(k) {
      var x = o[k] !== undefined ? String(o[k]) : dv[k];
      if (x.charAt(0) === "?") return { t: k === "c" && x === "?client" ? "DHCP-bereik ?" : qlab[k], q: true };
      if ((k === "cgw" || k === "sgw") && x.indexOf("gw") !== 0) x = "gw " + x;
      if ((k === "cdns" || k === "sdns") && x.indexOf("DNS") !== 0) x = "DNS " + x;
      return { t: x, q: false };
    }
    function t(x, y, txt, a) { a = a || {}; return '<text x="' + x + '" y="' + y + '" text-anchor="' + (a.anchor || "middle") + '" font-size="' + (a.size || 14) + '" font-weight="' + (a.w || 600) + '" fill="' + (a.fill || "#000") + '">' + txt + '</text>'; }
    function f(x, y, k, a) { var r = v(k); a = a || {}; if (r.q) { a.fill = "#EB6008"; a.w = 800; } return t(x, y, r.t, a); }
    var same = o.same;
    var H = same ? 300 : 270;
    var g = '<svg class="netsvg" viewBox="0 0 460 ' + H + '" role="img" aria-label="Netwerktekening: client, pfSense en server">';
    g += '<rect x="170" y="2" width="120" height="30" rx="15" fill="#f2f2f2" stroke="#999"/>' + t(230, 23, "WAN · VMnet8", { size: 13, fill: "#5a5a5a" });
    g += '<line x1="230" y1="32" x2="230" y2="60" stroke="#999" stroke-width="2"/>';
    g += '<rect x="170" y="60" width="120" height="64" rx="10" fill="#000"/>' + t(230, 86, "pfSense", { fill: "#fff", w: 800, size: 17 }) + t(230, 108, "router · firewall", { fill: "#ccc", size: 12, w: 400 });
    g += '<rect x="2" y="60" width="118" height="64" rx="10" fill="#14799B"/>' + t(61, 86, "CLIENT01", { fill: "#fff", w: 800, size: 16 }) + t(61, 108, "Windows 11", { fill: "#d8eef4", size: 12, w: 400 });
    g += '<rect x="340" y="60" width="118" height="64" rx="10" fill="#919E2C"/>' + t(399, 86, "SRV01", { fill: "#fff", w: 800, size: 16 }) + t(399, 108, "AD · DNS · DHCP", { fill: "#f3f5e2", size: 12, w: 400 });
    g += '<line x1="120" y1="92" x2="170" y2="92" stroke="#EB6008" stroke-width="4"/><line x1="290" y1="92" x2="340" y2="92" stroke="#919E2C" stroke-width="4"/>';
    // interfacelabels onder de lijnen
    g += t(145, 146, "CLIENT", { size: 12, w: 800, fill: "#EB6008" }) + f(145, 164, "pc", { size: 12 });
    g += t(315, 146, "SERVER", { size: 12, w: 800, fill: "#7a8524" }) + f(315, 164, "ps", { size: 12 });
    if (!same) g += f(145, 182, "vc", { size: 12, fill: "#5a5a5a", w: 400 }) + f(315, 182, "vs", { size: 12, fill: "#5a5a5a", w: 400 });
    var yb = same ? 236 : 210;
    if (same) {
      g += '<path d="M61,124 C61,200 399,200 399,124" fill="none" stroke="#A6090F" stroke-width="3" stroke-dasharray="7 5"/>' + t(230, 200, "zelfde switch: pfSense omzeild", { fill: "#A6090F", size: 13, w: 800 });
      g += f(61, 142, "vc", { size: 13, fill: "#A6090F", w: 800 }) + f(399, 142, "vs", { size: 13, fill: "#A6090F", w: 800 });
    }
    g += f(61, yb, "c", { size: 14, w: 700 }) + f(61, yb + 20, "cgw", { size: 13, w: 400 }) + f(61, yb + 40, "cdns", { size: 13, w: 400 });
    g += f(399, yb, "s", { size: 14, w: 700 }) + f(399, yb + 20, "sgw", { size: 13, w: 400 }) + f(399, yb + 40, "sdns", { size: 13, w: 400 });
    if (!same) g += t(230, yb, "192.168.20.0/24 | 192.168.10.0/24", { size: 11, fill: "#5a5a5a", w: 400 });
    if (o.rule) { var rx = o.rule === "CLIENT" ? 145 : 315; g += '<rect x="' + (rx - 36) + '" y="36" width="72" height="20" rx="6" fill="#2e7d32"/>' + t(rx, 51, "regel ✓", { fill: "#fff", size: 12, w: 800 }); }
    if (o.x) { var sx = o.x === "pc" ? 158 : (o.x === "ps" ? 302 : 340); g += '<circle cx="' + sx + '" cy="92" r="13" fill="#A6090F"/>' + t(sx, 98, "✕", { fill: "#fff", size: 15, w: 800 }); }
    return el("div", { class: "card", html: g + "</svg>" });
  }

  /* ---------- Ontwerp ---------- */
  function ontwerp() {
    clear(); crumb.textContent = "Ontwerp het netwerk";
    var w = wrap();
    w.appendChild(el("h1", { text: "Ontwerp het netwerk" }));
    var box = el("div"); w.appendChild(box);
    var O = D.ontwerp, score = 0, total = O.fields.length + O.q.length;
    function stap1() {
      box.innerHTML = "";
      box.appendChild(el("div", { class: "muted", text: "Stap 1 van 2 · Vul het adresplan in (oranje ? = gevraagd)" }));
      box.appendChild(progress(0, 2));
      box.appendChild(drawNet(O.svg));
      box.appendChild(el("div", { class: "scen", html: "<b>Gegeven</b><br>SERVER-netwerk 192.168.10.0/24 · CLIENT-netwerk 192.168.20.0/24 · Windows Server 192.168.10.10 (AD DS, DNS, DHCP) · afspraak: de router krijgt .1 · DHCP deelt alleen het midden van het bereik uit." }));
      chipFields(box, O.fields, "Stap 2: vier ontwerpvragen", function (r) { score += r; stap2(); });
    }
    function stap2() { series(box, O.q, "ontwerp", ontwerp, "Vraag", function (s) { finish(box, "ontwerp", score + s, total, ontwerp); }); }
    intro(box, "ontwerp", stap1);
  }

  /* ---------- Volg het pakket ---------- */
  function pakket() {
    clear(); crumb.textContent = "Volg het pakket";
    var w = wrap();
    w.appendChild(el("h1", { text: "Volg het pakket" }));
    var box = el("div"); w.appendChild(box);
    var G = D.pakket, score = 0, total = 2 + G.q.length;
    function stap1() {
      box.innerHTML = "";
      box.appendChild(el("div", { class: "muted", text: "Stap 1 van 3 · Een client (192.168.20.100) pingt de server (192.168.10.10). Er staat een Pass-regel op CLIENT." }));
      box.appendChild(progress(0, 3));
      box.appendChild(drawNet({ rule: "CLIENT" }));
      orderPuzzle(box, G.ping, "Eerst beslist de client ‘niet lokaal’, dan gaat het naar de gateway. pfSense controleert de regel op de inkomende interface en routeert pas daarna. Het antwoord mag terug dankzij de state.",
        "Routering en firewall zijn twee stappen: eerst de regel op CLIENT, dan de route naar SERVER.", "Stap 2: de DHCP-relay", function (r) { score += r; stap2(); });
    }
    function stap2() {
      box.innerHTML = ""; window.scrollTo(0, 0);
      box.appendChild(el("div", { class: "muted", text: "Stap 2 van 3 · Een client zonder adres vraagt een lease aan via de relay (downstream CLIENT, upstream 192.168.10.10)." }));
      box.appendChild(progress(1, 3));
      box.appendChild(drawNet({ c: "nog geen adres", cgw: "gw ?", cdns: "DNS ?" }));
      orderPuzzle(box, G.relay, "Broadcast in CLIENT → relay ontvangt op CLIENT → gericht naar de server met het relayadres → scope kiezen → antwoord via pfSense → client past toe.",
        "De relay deelt niets uit: de server kiest scope en adres op basis van het relayadres 192.168.20.1.", "Stap 3: vier vragen", function (r) { score += r; stap3(); });
    }
    function stap3() { series(box, G.q, "pakket", pakket, "Vraag", function (s) { finish(box, "pakket", score + s, total, pakket); }); }
    intro(box, "pakket", stap1);
  }

/* ---------- 1. Sorteer (stemkaart + oefenen) ---------- */
  function sorteer(setId, mode) {
    var S = D.sets[setId]; if (!S) { setId = "lokaal"; S = D.sets.lokaal; }
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

  /* ---------- Labo klaarzetten: stappen + script met kopieerknop ---------- */
  function laboPage() {
    clear(); crumb.textContent = "Labo klaarzetten";
    var w = wrap(), L = D.labo;
    w.appendChild(el("h1", { text: "Je labo klaarzetten voor de FW-les" }));
    w.appendChild(el("p", { class: "muted", html: L.intro }));
    var ol = el("ol");
    L.stappen.forEach(function (st) { ol.appendChild(el("li", { html: st })); });
    w.appendChild(el("div", { class: "card" }, [ol]));
    w.appendChild(el("h2", { text: "Het script FW_labo_student.ps1" }));
    var msg = el("div");
    var pre = el("pre", { class: "code", text: L.script, style: "white-space:pre-wrap;word-break:break-word;max-height:340px;overflow:auto;background:#1e1e1e;color:#e6e6e6;padding:10px;border-radius:8px;font-size:12px" });
    w.appendChild(el("div", { class: "row mt" }, [
      el("button", { class: "btn", onclick: function () {
        msg.innerHTML = "";
        (navigator.clipboard ? navigator.clipboard.writeText(L.script) : Promise.reject()).then(function () { msg.appendChild(fb(true, "Gekopieerd", "Plak het in Kladblok op de VM en sla op als C:\\FW_labo_student.ps1 (Opslaan als › Alle bestanden).")); },
          function () { msg.appendChild(el("p", { class: "muted", text: "Kopiëren lukte niet automatisch: selecteer de tekst hieronder en kopieer hem zelf." })); });
      } }, ["Script kopiëren"]),
      el("button", { class: "btn sec", onclick: function () {
        var a = el("a", { href: URL.createObjectURL(new Blob(["\ufeff" + L.script], { type: "text/plain" })), download: "FW_labo_student.ps1" });
        document.body.appendChild(a); a.click(); a.remove();
      } }, ["Downloaden (.ps1)"])]));
    w.appendChild(msg);
    w.appendChild(pre);
    w.appendChild(el("div", { class: "card mt" }, [el("b", { text: "Lukt het niet?" }), el("ul", {}, L.hulp.map(function (h) { return el("li", { html: h }); }))]));
    w.appendChild(back());
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
          el("p", { text: "Laat je omgeving werkend achter en neem een snapshot met een betekenisvolle naam, bv. ‘FW-eind’." })]));
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
    ontwerp: ontwerp, pakket: pakket,
    regel: simple("regel", "Lees de regel", function () { return D.regel; }, "Regelset"),
    uitvoer: simple("uitvoer", "Lees de uitvoer", function () { return D.uitvoer; }, "Uitvoer"),
    bewijs: simple("bewijs", "Welk bewijs is overtuigend?", function () { return shuffle(D.bewijs); }, "Bewering"),
    exit1: simple("exit1", "Exitcheck blok 1", function () { return D.exit1; }, "Vraag"),
    exit2: simple("exit2", "Exitcheck blok 2", function () { return D.exit2; }, "Vraag"),
    demo: function () { demoPage(); }, status: statusPage,
    fout: function () { foutPage(); }, "fout/sab": function () { foutPage("sab"); }, "fout/slo": function () { foutPage("slo"); },
    labo: laboPage,
    ticket: function () { formPage("ticket", "Ticketformulier", D.ticketVelden, "ticket-fw.txt"); },
    werkdoel: function () { formPage("werkdoel", "Werkdoel en bewijslijst", D.werkdoel, "werkdoel-fw.txt"); },
    exitticket: exitTicketPage
  };
  function route() {
    var r = (location.hash || "#/").replace(/^#\//, "");
    document.querySelectorAll(".sheet,.bigcard,.statuscard").forEach(function (n) { n.remove(); });
    var m;
    if (r.indexOf("extra/") === 0) extraPage(r.slice(6));
    else if ((m = r.match(/^sorteer(?:\/(\w+))?$/))) sorteer(m[1] || "lokaal", "quiz");
    else if ((m = r.match(/^kaart(?:\/(\w+))?$/))) sorteer(m[1] || "lokaal", "vote");
    else if ((m = r.match(/^demo\/(\d+)$/))) demoPage(Math.max(0, Math.min(D.demos.length - 1, +m[1] - 1)));
    else (R[r] || home)();
    app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);
  route();
})();
