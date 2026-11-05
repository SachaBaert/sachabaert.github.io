(function () {
  "use strict";
  var D = window.DHCPDATA;
  var app = document.getElementById("app");
  var crumb = document.getElementById("crumb");

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
  function store(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem("dhcp." + k)); localStorage.setItem("dhcp." + k, JSON.stringify(v)); } catch (e) { return null; } }
  function progress(i, n) { return el("div", { class: "progress", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": n, "aria-valuenow": i }, [el("i", { style: "width:" + Math.round(100 * i / n) + "%" })]); }
  function fb(ok, title, text) { return el("div", { class: "fb " + (ok ? "ok" : "bad"), role: "status" }, [el("b", { text: title }), el("span", { html: text })]); }
  function back() { return el("a", { href: "#/", class: "btn sec", style: "display:block;text-align:center;text-decoration:none;margin-top:12px" }, ["Terug naar overzicht"]); }
  function next(box, label, fn) { box.appendChild(el("button", { class: "btn mt", onclick: fn }, [label])); }
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
      el("div", { class: "bar" }, [el("b", { text: "ⓘ Info · DHCP-theorie" }), closeBtn]), body]);
    s.addEventListener("keydown", function (e) { if (e.key === "Escape") s.remove(); });
    document.body.appendChild(s); closeBtn.focus();
    if (id) { var t = document.getElementById("cs-" + id); if (t) setTimeout(function () { t.scrollIntoView(); }, 30); }
  }
  document.getElementById("cheatBtn").addEventListener("click", function () { openCheat(); });

  var EXTRA_FOR = { soort: "soort", dora: "dora", exit: "scope", check2: "scope", ipconfig: "ipconfig" };
  var EXTRA_T = { soort: ["Statisch of dynamisch?", "soortquiz"], dora: ["DORA", "dora"], scope: ["Scopeplan", "scope"], ipconfig: ["Lees ipconfig /all", "ipconfig"] };
  function intro(w, key, start) {
    var I = D.intros[key];
    var box = el("div", { class: "card intro" }, [el("span", { class: "tag black", text: "Zo werkt het" }), el("h2", { text: I.t })]
      .concat(I.p.map(function (p) { return el("p", { html: p }); }))
      .concat([el("div", { class: "infotip", html: D.infoTip })]));
    w.appendChild(box);
    var b1 = el("button", { class: "btn", onclick: function () { box.remove(); b1.remove(); b2.remove(); if (b3) b3.remove(); start(); } }, ["Start"]);
    var b2 = el("button", { class: "btn sec mt", onclick: function () { openCheat(I.cs); } }, ["ⓘ Info bekijken"]);
    w.appendChild(b1); w.appendChild(b2);
    var x = EXTRA_FOR[key], b3 = null;
    if (x && D.extra) {
      b3 = el("a", { href: "#/extra/" + x, class: "btn sec mt", style: "display:block;text-align:center;text-decoration:none" }, ["Extra oefenen: 10 willekeurige vragen"]);
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
        var corr = q.o[q.a].replace(/<[^>]+>/g, "");
        m.appendChild(ok ? fb(true, "Juist", q.e) : fb(false, "Niet juist",
          (q.w && q.w[o.k] ? "<b>Jouw keuze:</b> " + q.w[o.k] + "<br>" : "") + "<b>Juist is ‘" + corr + "’.</b> " + q.e));
        done(ok);
      } }, [el("span", { html: o.t })]);
      opts.appendChild(b);
    });
    box.appendChild(opts); box.appendChild(m);
  }
  function series(box, qs, key, again, label) {
    var i = 0, score = 0;
    function show() {
      box.innerHTML = ""; window.scrollTo(0, 0);
      if (i >= qs.length) return finish(box, key, score, qs.length, again);
      box.appendChild(el("div", { class: "muted", text: (label || "Vraag") + " " + (i + 1) + " van " + qs.length }));
      box.appendChild(progress(i, qs.length));
      mcq(box, qs[i], function (ok) { if (ok) score++; next(box, i + 1 < qs.length ? "Volgende" : "Resultaat", function () { i++; show(); }); });
    }
    show();
  }

  /* ---------- home ---------- */
  var GAMES = [
    { r: "soortquiz", t: "Statisch of dynamisch?", s: "10 toestellen + stemkaart voor de klas", c: "#919E2C", i: "IP", k: "soort" },
    { r: "dora", t: "DORA", s: "Begripscheck 1: volgorde, afzender, broadcast", c: "#000", i: "D", k: "dora" },
    { r: "scope", t: "Scopeplan", s: "Exitcheck blok 1 + begripscheck 2", c: "#EB6008", i: "/24", k: "scope" },
    { r: "ipconfig", t: "Lees ipconfig /all", s: "Wat zegt de uitvoer, en wat niet?", c: "#14799B", i: ">_", k: "ipconfig" }
  ];
  var LES = [
    { r: "demo", t: "Voorspel de demo", s: "Demo's 1–7: eerst voorspellen, dan het bewijs", c: "#EB6008", i: "?" },
    { r: "status", t: "Status", s: "Toon je status naast je laptop", c: "#000", i: "●" },
    { r: "fout", t: "Foutenpracticum", s: "Foutkaarten voor saboteur en slachtoffer", c: "#A6090F", i: "!" },
    { r: "ticket", t: "Ticketformulier", s: "Symptoom → bewijs → hypothese → wijziging → eindtest", c: "#14799B", i: "#" },
    { r: "exitticket", t: "Exit ticket", s: "Drie vragen om af te sluiten", c: "#919E2C", i: "✓" }
  ];
  function scoreTag(k) {
    if (k === "scope") {
      var a = store("scope"), b = store("scope2"), t = [];
      if (a) t.push("Exit " + a.score + "/" + a.total);
      if (b) t.push("Begrip " + b.score + "/" + b.total);
      return t.length ? el("span", { class: "done", html: t.join("<br>") }) : null;
    }
    var res = store(k);
    return res ? el("span", { class: "done", text: res.score + "/" + res.total }) : null;
  }
  function tile(g, tag) {
    return el("a", { class: "tile", href: "#/" + g.r }, [
      el("span", { class: "ico", style: "background:" + g.c, text: g.i }),
      el("span", null, [el("b", { text: g.t }), el("small", { text: g.s })]), tag]);
  }
  function home() {
    clear(); crumb.textContent = "Windows System Administration";
    var w = wrap();
    w.appendChild(el("span", { class: "tag olive", text: "Windows System Administration" }));
    w.appendChild(el("h1", { text: "DHCP op Windows Server" }));
    w.appendChild(el("p", { class: "muted", text: "Oefeningen en hulpmiddelen bij de les DHCP. Elk onderdeel begint met korte uitleg, en via de knop ‘ⓘ Info’ (rechtsboven) vind je altijd de theorie. Gebruik die gerust: opzoeken hoort bij het vak. Je resultaten blijven alleen op dit toestel." }));
    var t = el("div", { class: "tiles" });
    GAMES.forEach(function (g) { t.appendChild(tile(g, scoreTag(g.k))); });
    w.appendChild(t);
    w.appendChild(el("h2", { text: "Tijdens de les" }));
    var t2 = el("div", { class: "tiles" });
    LES.forEach(function (g) { t2.appendChild(tile(g, g.r === "exitticket" ? scoreTag("exitticket") : null)); });
    w.appendChild(t2);
    w.appendChild(el("div", { class: "card mt" }, [
      el("b", { text: "Labomgeving (demo's)" }),
      el("p", { class: "muted", html: "SRV01 <code>192.168.10.10</code> (DNS + DHCP, zone cursus.local) · CLIENT01 automatisch · geen router<br>Scopebereik <code>.100–.219</code>, uitsluiting <code>.200–.219</code>, pool <code>.100–.199</code>, reservatie <code>.200</code>" })
    ]));
    w.appendChild(el("button", { class: "btn sec mt", onclick: function () {
      if (!window.confirm("Al je scores, voorspellingen en ingevulde gegevens van deze DHCP-app wissen?")) return;
      try { Object.keys(localStorage).forEach(function (k) { if (k.indexOf("dhcp.") === 0) localStorage.removeItem(k); }); } catch (e) {}
      home();
    } }, ["Mijn resultaten wissen"]));
  }

  /* ---------- 1. Statisch, dynamisch of reservatie? ---------- */
  function soort(mode) {
    clear(); crumb.textContent = "Statisch of dynamisch?";
    var w = wrap();
    w.appendChild(el("h1", { text: "Statisch, dynamisch of reservatie?" }));
    w.appendChild(el("div", { class: "seg", role: "tablist" }, [
      el("button", { class: mode === "quiz" ? "on" : "", role: "tab", "aria-selected": mode === "quiz", onclick: function () { location.hash = "#/soortquiz"; } }, ["Oefenen"]),
      el("button", { class: mode === "vote" ? "on" : "", role: "tab", "aria-selected": mode === "vote", onclick: function () { location.hash = "#/soort"; } }, ["Stemkaart (klas)"])
    ]));
    if (mode === "vote") {
      w.appendChild(el("p", { class: "muted", text: "Je docent toont een toestel. Kies je antwoord en steek bij ‘3-2-1’ je gsm op. Tik op de grote kaart om terug te gaan." }));
      var g = el("div", { class: "rgrid" });
      D.soorten.forEach(function (r) { g.appendChild(el("button", { class: "rbtn", style: "background:" + r.c, onclick: function () { bigCard(r); } }, [r.t, el("small", { text: r.d })])); });
      w.appendChild(g); w.appendChild(back());
    } else intro(w, "soort", function () { soortQuiz(w, D.soortQuiz, "soort", function () { soort("quiz"); }); });
  }
  function bigCard(r) {
    var c = el("div", { class: "bigcard", style: "background:" + r.c, role: "button", "aria-label": "Sluit kaart " + r.t, tabindex: 0 }, [
      el("div", { class: "t", text: r.t, style: "font-size:min(" + Math.round(150 / Math.max(r.t.length, 2)) + "vw,200px)" }), el("div", { class: "h", text: "Tik om te sluiten" })]);
    function close() { c.remove(); }
    c.addEventListener("click", close);
    c.addEventListener("keydown", function (e) { if (e.key === "Escape" || e.key === "Enter") close(); });
    document.body.appendChild(c); c.focus();
  }
  function soortQuiz(w, list, key, again) {
    var qs = shuffle(list).slice(0, 10), i = 0, score = 0;
    var box = el("div"); w.appendChild(box);
    function show() {
      box.innerHTML = ""; window.scrollTo(0, 0);
      if (i >= qs.length) { finish(box, key, score, qs.length, again); return; }
      var q = qs[i];
      box.appendChild(el("div", { class: "muted", text: "Toestel " + (i + 1) + " van " + qs.length }));
      box.appendChild(progress(i, qs.length));
      box.appendChild(el("div", { class: "card" }, [el("div", { class: "q", html: q.q })]));
      var hb = hint(q.h); if (hb) box.appendChild(hb);
      var g = el("div", { class: "rgrid" }), done = false;
      D.soorten.forEach(function (r) {
        var b = el("button", { class: "rbtn", style: "background:" + r.c, onclick: function () {
          if (done) return; done = true; if (hb) hb.remove();
          var ok = r.t === q.a; if (ok) score++;
          Array.prototype.forEach.call(g.children, function (x) { x.style.opacity = x === b || x.dataset.t === q.a ? 1 : .25; });
          var A = D.soorten.filter(function (x) { return x.t === q.a; })[0];
          box.appendChild(ok ? fb(true, "Juist: " + q.a, q.e) : fb(false, "Niet juist. Het best past " + q.a + ".",
            "<b>Jouw keuze, " + r.t + ",</b> is " + r.l + ". Dat past hier minder.<br><b>Waarom " + q.a + "?</b> " + q.e));
          next(box, i + 1 < qs.length ? "Volgende" : "Resultaat", function () { i++; show(); });
        } }, [r.t, el("small", { text: r.d })]);
        b.dataset.t = r.t; g.appendChild(b);
      });
      box.appendChild(g);
    }
    show();
  }

  /* ---------- 2. DORA ---------- */
  function dora() {
    clear(); crumb.textContent = "DORA";
    var w = wrap();
    w.appendChild(el("h1", { text: "DORA" }));
    var box = el("div"); w.appendChild(box);
    var score = 0, total = 1 + D.dora.length + D.doraQ.length;
    function stap1() {
      box.innerHTML = "";
      box.appendChild(el("div", { class: "muted", text: "Stap 1 van 3 · Zet de berichten in de juiste volgorde" }));
      box.appendChild(progress(0, 3));
      var placed = [], bankItems = shuffle(D.dora.map(function (d) { return d.m; }));
      var slots = el("div", { class: "order" }), bank = el("div", { class: "bank" }), m = el("div"), checked = false;
      var go = el("button", { class: "btn mt", disabled: true, onclick: function () {
        if (checked) return stap2();
        checked = true;
        var good = placed.every(function (p, k) { return p === D.dora[k].m; });
        if (good) score++;
        Array.prototype.forEach.call(slots.children, function (s, k) { s.className = "slot " + (placed[k] === D.dora[k].m ? "ok" : "bad"); });
        m.appendChild(good ? fb(true, "Juist", "Discover → Offer → Request → Ack: de client zoekt, de server biedt aan, de client vraagt, de server bevestigt.")
          : fb(false, "Niet helemaal", "De juiste volgorde is <b>DHCPDISCOVER → DHCPOFFER → DHCPREQUEST → DHCPACK</b>. Een aanbod (OFFER) kan pas na een zoekvraag (DISCOVER), en de client vraagt (REQUEST) pas nadat hij een aanbod kreeg. Pas ACK bevestigt."));
        go.textContent = "Stap 2: wie verstuurt wat?";
      } }, ["Controleer"]);
      function draw() {
        slots.innerHTML = ""; bank.innerHTML = "";
        for (var k = 0; k < 4; k++) (function (k) {
          var p = placed[k];
          slots.appendChild(el("div", { class: "slot" }, [el("b", { text: String(k + 1) }),
            p ? el("button", { class: "tl", "aria-label": "Verwijder " + p, onclick: function () { if (checked) return; placed.splice(k, 1); draw(); } }, [p]) : el("span", { class: "muted", text: "tik hieronder een bericht" })]));
        })(k);
        bankItems.forEach(function (t) {
          if (placed.indexOf(t) > -1) return;
          bank.appendChild(el("button", { class: "tl", onclick: function () { if (checked || placed.length >= 4) return; placed.push(t); draw(); } }, [t]));
        });
        go.disabled = placed.length < 4;
      }
      box.appendChild(slots); box.appendChild(bank); box.appendChild(go); box.appendChild(m);
      draw();
    }
    function stap2() {
      box.innerHTML = ""; window.scrollTo(0, 0);
      box.appendChild(el("div", { class: "muted", text: "Stap 2 van 3 · Wie verstuurt elk bericht?" }));
      box.appendChild(progress(1, 3));
      var sel = {}, groups = {}, m = el("div"), checked = false;
      D.dora.forEach(function (d) {
        var chips = el("div", { class: "chips" });
        ["Client", "Server"].forEach(function (o) {
          var c = el("button", { class: "chip", onclick: function () {
            if (checked) return; sel[d.m] = o;
            Array.prototype.forEach.call(chips.children, function (x) { x.className = "chip" + (x === c ? " sel" : ""); });
            go.disabled = Object.keys(sel).length < D.dora.length;
          } }, [o]);
          c.dataset.v = o; chips.appendChild(c);
        });
        groups[d.m] = chips;
        box.appendChild(el("div", { class: "field" }, [el("label", { text: d.m }), chips]));
      });
      var go = el("button", { class: "btn mt", disabled: true, onclick: function () {
        if (checked) return stap3();
        checked = true; var right = 0;
        D.dora.forEach(function (d) {
          Array.prototype.forEach.call(groups[d.m].children, function (x) {
            if (x.dataset.v === d.af) x.className = "chip " + (sel[d.m] === d.af ? "ok" : "should");
            else if (sel[d.m] === x.dataset.v) x.className = "chip bad";
          });
          if (sel[d.m] === d.af) right++;
        });
        score += right;
        m.appendChild(fb(right === 4, right + " / 4 juist", D.dora.map(function (d) { return (sel[d.m] === d.af ? "✔ " : "✘ ") + "<b>" + d.m + "</b>: " + d.af.toLowerCase() + ", " + d.d + "."; }).join("<br>") +
          "<br>Geheugensteun: de <b>client</b> zoekt en vraagt (D, R), de <b>server</b> biedt aan en bevestigt (O, A)."));
        go.textContent = "Stap 3: vijf vragen";
      } }, ["Controleer"]);
      box.appendChild(go); box.appendChild(m);
    }
    function stap3() {
      var i = 0;
      function show() {
        box.innerHTML = ""; window.scrollTo(0, 0);
        if (i >= D.doraQ.length) return finish(box, "dora", score, total, dora);
        box.appendChild(el("div", { class: "muted", text: "Stap 3 van 3 · Vraag " + (i + 1) + " van " + D.doraQ.length }));
        box.appendChild(progress(2, 3));
        mcq(box, D.doraQ[i], function (ok) { if (ok) score++; next(box, i + 1 < D.doraQ.length ? "Volgende" : "Resultaat", function () { i++; show(); }); });
      }
      show();
    }
    intro(box, "dora", stap1);
  }

  /* ---------- 3. Scopeplan ---------- */
  function scope(part) {
    clear(); crumb.textContent = "Scopeplan";
    part = part || "exit";
    var w = wrap();
    w.appendChild(el("h1", { text: "Scopeplan" }));
    function tabScore(k) { var r = store(k); return r ? el("small", { class: "tabscore", text: "laatste score " + r.score + "/" + r.total }) : null; }
    w.appendChild(el("div", { class: "seg", role: "tablist" }, [
      el("button", { class: part === "exit" ? "on" : "", role: "tab", onclick: function () { location.hash = "#/scope"; } }, ["Exitcheck blok 1", tabScore("scope")]),
      el("button", { class: part === "check2" ? "on" : "", role: "tab", onclick: function () { location.hash = "#/scope2"; } }, ["Begripscheck 2", tabScore("scope2")])
    ]));
    var holder = el("div"); w.appendChild(holder);
    if (part === "exit") intro(holder, "exit", function () { exitcheck(holder); });
    else intro(holder, "check2", function () { series(holder, D.check2, "scope2", function () { scope("check2"); }, "Situatie"); });
  }
  function exitcheck(box) {
    var P = D.exitPlan, score = 0, total = P.fields.length + P.motiveer.length;
    box.innerHTML = "";
    box.appendChild(el("div", { class: "muted", text: "Deel 1 · Verbeter het plan" }));
    box.appendChild(progress(0, 2));
    box.appendChild(el("div", { class: "scen", html: P.intro }));
    box.appendChild(el("h2", { text: "Het foute plan" }));
    box.appendChild(el("table", { class: "plan" }, P.fout.map(function (r) { return el("tr", null, [el("td", { text: r[0] }), el("td", { class: "fout", text: r[1] })]); })));
    box.appendChild(el("h2", { text: "Jouw verbetering" }));
    var sel = {}, groups = {}, m = el("div"), checked = false;
    P.fields.forEach(function (F) {
      var chips = el("div", { class: "chips" });
      F.o.forEach(function (o) {
        var c = el("button", { class: "chip", onclick: function () {
          if (checked) return; sel[F.k] = o;
          Array.prototype.forEach.call(chips.children, function (x) { x.className = "chip" + (x === c ? " sel" : ""); });
          go.disabled = Object.keys(sel).length < P.fields.length;
        } }, [o]);
        c.dataset.v = o; chips.appendChild(c);
      });
      groups[F.k] = chips;
      box.appendChild(el("div", { class: "field" }, [el("label", { text: F.l }), chips]));
    });
    var go = el("button", { class: "btn mt", disabled: true, onclick: function () {
      if (checked) return motiveer();
      checked = true; var right = 0;
      P.fields.forEach(function (F) {
        Array.prototype.forEach.call(groups[F.k].children, function (x) {
          if (x.dataset.v === F.a) x.className = "chip " + (sel[F.k] === F.a ? "ok" : "should");
          else if (sel[F.k] === x.dataset.v) x.className = "chip bad";
        });
        if (sel[F.k] === F.a) right++;
      });
      score += right;
      m.appendChild(fb(right === P.fields.length, right + " / " + P.fields.length + " juist", P.fields.map(function (F) {
        var good = sel[F.k] === F.a;
        return "<p style=\"margin:6px 0\">" + (good ? "✔" : "✘") + " <b>" + F.l + ": " + F.a + "</b><br>" + F.x +
          (!good && F.why[sel[F.k]] ? " <i>Jouw keuze ‘" + sel[F.k] + "’: " + F.why[sel[F.k]] + "</i>" : "") + "</p>";
      }).join("")));
      go.textContent = "Deel 2: motiveer drie keuzes";
    } }, ["Controleer"]);
    box.appendChild(go); box.appendChild(m);
    function motiveer() {
      var i = 0;
      function show() {
        box.innerHTML = ""; window.scrollTo(0, 0);
        if (i >= P.motiveer.length) return finish(box, "scope", score, total, function () { scope("exit"); });
        box.appendChild(el("div", { class: "muted", text: "Deel 2 · Motiveer " + (i + 1) + " van " + P.motiveer.length }));
        box.appendChild(progress(1, 2));
        mcq(box, P.motiveer[i], function (ok) { if (ok) score++; next(box, i + 1 < P.motiveer.length ? "Volgende" : "Resultaat", function () { i++; show(); }); });
      }
      show();
    }
  }

  /* ---------- 4. Lees ipconfig /all ---------- */
  function ipconfig() {
    clear(); crumb.textContent = "Lees ipconfig /all";
    var w = wrap();
    w.appendChild(el("h1", { text: "Lees ipconfig /all" }));
    var box = el("div"); w.appendChild(box);
    intro(box, "ipconfig", function () { series(box, D.ipconfig, "ipconfig", ipconfig, "Uitvoer"); });
  }

  /* ---------- 5. Voorspel de demo ---------- */
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
        g.appendChild(el("button", { class: "opt", onclick: function () { one(i); } }, [el("b", { text: "Demo " + d.n + " · " }), d.t, el("span", { class: "muted", text: tg })]));
      });
      box.appendChild(g);
      var done = D.demos.filter(function (d) { return saved[d.n] && saved[d.n].shown; });
      if (done.length) {
        box.appendChild(el("h2", { text: "Jouw voorspelkaart" }));
        var t = el("table", { class: "vk" }, [el("tr", null, [el("th", { text: "Demo" }), el("th", { text: "Jouw voorspelling" }), el("th", { text: "" })])]);
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
      box.appendChild(el("div", { class: "muted", text: "Demo " + d.n + " van " + D.demos.length }));
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
      var nav = el("div", { class: "row mt" }, [el("button", { class: "btn sec", onclick: list }, ["Alle demo's"])]);
      if (i + 1 < D.demos.length) nav.appendChild(el("button", { class: "btn", onclick: function () { one(i + 1); } }, ["Volgende demo"]));
      box.appendChild(nav);
    }
    if (start) list(); else intro(box, "demo", list);
  }

  /* ---------- 6. Status ---------- */
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

  /* ---------- 7. Foutenpracticum ---------- */
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
        el("div", { class: "score", text: "Kaart " + f.nr }), el("div", { text: stars(f.s) })]));
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
        box.appendChild(el("div", { class: "card mt" }, [el("span", { class: "tag", text: "Melding #" + (2100 + f.nr) }), el("p", { class: "q", style: "margin-top:10px", text: "“" + f.ticket + "”" })]));
        box.appendChild(el("p", { class: "muted", text: "Werk de melding af: symptoom → omvang → bewijs per laag (" + D.ladder + ") → hypothese → één wijziging → eindtest." }));
        box.appendChild(el("a", { href: "#/ticket", class: "btn", style: "display:block;text-align:center;text-decoration:none" }, ["Open het ticketformulier"]));
      }
    }
    if (mode === "sab") sab(); else if (mode === "slo") slo();
    else intro(box, "fout", function () { location.hash = "#/fout/sab"; });
    box.appendChild(back());
  }

  /* ---------- 8. Ticketformulier ---------- */
  function ticketPage(start) {
    clear(); crumb.textContent = "Ticketformulier";
    var w = wrap();
    w.appendChild(el("h1", { text: "Ticketformulier" }));
    var box = el("div"); w.appendChild(box);
    function form() {
      var data = store("ticket") || {};
      function save() { store("ticket", data); }
      D.ticketVelden.forEach(function (f) {
        var ta = el("textarea", { rows: f.r, placeholder: f.h, "aria-label": f.l });
        ta.value = data[f.k] || "";
        ta.addEventListener("input", function () { data[f.k] = ta.value; save(); });
        box.appendChild(el("div", { class: "field" }, [el("label", { text: f.l }), ta]));
      });
      var chips = el("div", { class: "chips" });
      ["Opgelost", "Niet opgelost", "Verder onderzoek"].forEach(function (o) {
        var c = el("button", { class: "chip" + (data.status === o ? " sel" : ""), onclick: function () {
          data.status = o; save(); Array.prototype.forEach.call(chips.children, function (x) { x.className = "chip" + (x === c ? " sel" : ""); });
        } }, [o]);
        chips.appendChild(c);
      });
      box.appendChild(el("div", { class: "field" }, [el("label", { text: "Status" }), chips]));
      var msg = el("div");
      function asText() { return D.ticketVelden.map(function (f) { return f.l + "\n" + (data[f.k] || "") + "\n"; }).join("\n") + "\nStatus: " + (data.status || "") + "\n"; }
      box.appendChild(el("div", { class: "row mt" }, [
        el("button", { class: "btn", onclick: function () {
          var t = asText(); msg.innerHTML = "";
          (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { msg.appendChild(fb(true, "Gekopieerd", "Plak het nu in je werkdocument.")); },
            function () { var ta = el("textarea", { rows: 8 }); ta.value = t; msg.appendChild(ta); ta.select(); msg.appendChild(el("p", { class: "muted", text: "Kopiëren lukte niet automatisch: selecteer de tekst hierboven en kopieer hem zelf." })); });
        } }, ["Kopiëren"]),
        el("button", { class: "btn sec", onclick: function () {
          var a = el("a", { href: URL.createObjectURL(new Blob([asText()], { type: "text/plain" })), download: "ticket-dhcp.txt" });
          document.body.appendChild(a); a.click(); a.remove();
        } }, ["Downloaden (.txt)"])]));
      box.appendChild(msg);
      box.appendChild(el("button", { class: "btn sec mt", onclick: function () { if (window.confirm("Alles wissen en een nieuw ticket beginnen?")) { store("ticket", {}); ticketPage(true); } } }, ["Nieuw ticket (wissen)"]));
      box.appendChild(back());
    }
    if (start) form(); else intro(box, "ticket", form);
  }

  /* ---------- 9. Exit ticket ---------- */
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
          el("p", { text: "Laat je omgeving werkend achter en neem een snapshot DHCP-eind." })]));
        box.appendChild(back());
      });
    }
    intro(box, "exitticket", show);
  }

  /* ---------- 10. Extra oefenen ---------- */
  function extraPage(topic) {
    var pool = D.extra && D.extra[topic], T = EXTRA_T[topic];
    if (!pool || !T) return home();
    clear(); crumb.textContent = T[0] + " · extra oefenen";
    var w = wrap();
    w.appendChild(el("h1", { text: T[0] }));
    w.appendChild(el("p", { class: "muted", text: "Extra oefenen: 10 willekeurige vragen uit een poel van " + pool.length + ". Elke ronde krijg je andere vragen." }));
    var box = el("div"); w.appendChild(box);
    if (topic === "soort") { soortQuiz(box, pool, "extra_soort", function () { extraPage(topic); }); return; }
    series(box, shuffle(pool).slice(0, 10), "extra_" + topic, function () { extraPage(topic); });
  }

  /* ---------- router ---------- */
  function route() {
    var r = (location.hash || "#/").replace(/^#\//, "");
    document.querySelectorAll(".sheet,.bigcard,.statuscard").forEach(function (n) { n.remove(); });
    if (r.indexOf("extra/") === 0) { extraPage(r.slice(6)); app.focus({ preventScroll: true }); return; }
    ({ "": home, soort: function () { soort("vote"); }, soortquiz: function () { soort("quiz"); }, dora: dora,
       scope: function () { scope("exit"); }, scope2: function () { scope("check2"); }, ipconfig: ipconfig,
       demo: function () { demoPage(); }, status: statusPage, fout: function () { foutPage(); }, "fout/sab": function () { foutPage("sab"); }, "fout/slo": function () { foutPage("slo"); },
       ticket: function () { ticketPage(); }, exitticket: exitTicketPage }[r] || home)();
    app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);
  route();
})();
