(function () {
  "use strict";
  var D = window.DNSDATA;
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
  function store(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem("dns." + k)); localStorage.setItem("dns." + k, JSON.stringify(v)); } catch (e) { return null; } }
  function progress(i, n) { return el("div", { class: "progress", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": n, "aria-valuenow": i }, [el("i", { style: "width:" + Math.round(100 * i / n) + "%" })]); }
  function fb(ok, title, text) { return el("div", { class: "fb " + (ok ? "ok" : "bad"), role: "status" }, [el("b", { text: title }), el("span", { html: text })]); }
  function back() { return el("a", { href: "#/", class: "btn sec", style: "display:block;text-align:center;text-decoration:none;margin-top:12px" }, ["Terug naar overzicht"]); }
  function finish(w, key, score, total, again) {
    store(key, { score: score, total: total });
    w.appendChild(el("div", { class: "card", style: "text-align:center" }, [
      el("div", { class: "muted", text: "Jouw score" }),
      el("div", { class: "score", text: score + " / " + total }),
      el("p", { text: score === total ? "Alles juist. Sterk!" : (score >= total * 0.7 ? "Goed bezig. Bekijk nog even de fouten." : "Neem de uitleg nog eens door en probeer opnieuw.") })
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
      el("div", { class: "bar" }, [el("b", { text: "ⓘ Info · DNS-theorie" }), closeBtn]), body]);
    s.addEventListener("keydown", function (e) { if (e.key === "Escape") s.remove(); });
    document.body.appendChild(s); closeBtn.focus();
    if (id) { var t = document.getElementById("cs-" + id); if (t) setTimeout(function () { t.scrollIntoView(); }, 30); }
  }
  document.getElementById("cheatBtn").addEventListener("click", function () { openCheat(); });
  function intro(w, key, start) {
    var I = D.intros[key];
    var box = el("div", { class: "card intro" }, [el("span", { class: "tag black", text: "Zo werkt het" }), el("h2", { text: I.t })]
      .concat(I.p.map(function (p) { return el("p", { html: p }); }))
      .concat([el("div", { class: "infotip", html: D.infoTip })]));
    w.appendChild(box);
    var b1 = el("button", { class: "btn", onclick: function () { box.remove(); b1.remove(); b2.remove(); start(); } }, ["Start"]);
    var b2 = el("button", { class: "btn sec mt", onclick: function () { openCheat(I.cs); } }, ["ⓘ Info bekijken"]);
    w.appendChild(b1); w.appendChild(b2);
    var x = EXTRA_FOR[key];
    if (x && D.extra) {
      var b3 = el("a", { href: "#/extra/" + x, class: "btn sec mt", style: "display:block;text-align:center;text-decoration:none" }, ["Extra oefenen: 10 willekeurige vragen"]);
      w.appendChild(b3);
      b1.addEventListener("click", function () { b3.remove(); });
    }
  }
  var EXTRA_FOR = { recordquiz: "records", fqdn: "fqdn", exit: "uitvoer", pred: "uitvoer", sim: "querypad" };
  var EXTRA_T = { records: ["Welk record?", "recordquiz"], fqdn: ["FQDN-puzzel", "fqdn"], uitvoer: ["Voorspel de uitvoer", "check"], querypad: ["Het querypad", "sim"] };
  var ctxOpen = true;
  function situatie() {
    var d = el("details", { class: "ctx" }, [el("summary", { text: "Situatie: wat staat er op DNS01?" }), el("div", { html: D.situatie })]);
    if (ctxOpen) d.setAttribute("open", "");
    d.addEventListener("toggle", function () { ctxOpen = d.open; });
    return d;
  }
  function hint(text) {
    if (!text) return null;
    var wrapH = el("div");
    var b = el("button", { class: "hint", type: "button", onclick: function () { b.remove(); wrapH.appendChild(el("div", { class: "hinttext", html: text })); } }, ["Toon een hint"]);
    wrapH.appendChild(b); return wrapH;
  }

  /* ---------- home ---------- */
  var GAMES = [
    { r: "recordquiz", t: "Welk record?", s: "10 situaties + stemkaart voor de klas", c: "#919E2C", i: "A" },
    { r: "fqdn", t: "FQDN-puzzel", s: "Bouw en ontleed volledige namen", c: "#000", i: "." },
    { r: "check", t: "Voorspel de uitvoer", s: "Exitcheck blok 1 + begripscheck 2", c: "#EB6008", i: "?" },
    { r: "sim", t: "Het querypad", s: "Volg een DNS-query stap voor stap", c: "#7C5EAC", i: "→" }
  ];
  var LES = [
    { r: "demo", t: "Voorspel de demo", s: "Demo's 0–6: eerst voorspellen, dan het bewijs", c: "#EB6008", i: "1" },
    { r: "status", t: "Status", s: "Toon je status naast je laptop", c: "#000", i: "●" },
    { r: "fout", t: "Foutenpracticum", s: "Foutkaarten voor saboteur en slachtoffer", c: "#A6090F", i: "!" },
    { r: "ticket", t: "Ticketformulier", s: "Symptoom → bewijs → hypothese → wijziging", c: "#14799B", i: "#" },
    { r: "exitticket", t: "Exit ticket", s: "Drie vragen om af te sluiten", c: "#919E2C", i: "✓" }
  ];
  function scoreTag(r) {
    if (r === "check") {
      var a = store("check"), b = store("check2"), t = [];
      if (a) t.push("Exit " + a.score + "/" + a.total);
      if (b) t.push("Begrip " + b.score + "/" + b.total);
      return t.length ? el("span", { class: "done", html: t.join("<br>") }) : null;
    }
    var res = store(r === "recordquiz" ? "records" : r);
    return res ? el("span", { class: "done", text: res.score + "/" + res.total }) : null;
  }
  function home() {
    clear(); crumb.textContent = "Windows System Administration";
    var w = wrap();
    w.appendChild(el("span", { class: "tag olive", text: "CampusConnect" }));
    w.appendChild(el("h1", { text: "DNS op Windows Server" }));
    w.appendChild(el("p", { class: "muted", text: "Oefeningen en hulpmiddelen bij de les DNS. Elk onderdeel begint met korte uitleg, en via de knop ‘ⓘ Info’ (rechtsboven) vind je altijd de theorie. Gebruik die gerust: opzoeken hoort bij het vak. Je resultaten blijven alleen op dit toestel." }));
    var t = el("div", { class: "tiles" });
    GAMES.forEach(function (g) {
      t.appendChild(el("a", { class: "tile", href: "#/" + g.r }, [
        el("span", { class: "ico", style: "background:" + g.c, text: g.i }),
        el("span", null, [el("b", { text: g.t }), el("small", { text: g.s })]),
        scoreTag(g.r)
      ]));
    });
    w.appendChild(t);
    w.appendChild(el("h2", { text: "Tijdens de les" }));
    var t2 = el("div", { class: "tiles" });
    LES.forEach(function (g) {
      t2.appendChild(el("a", { class: "tile", href: "#/" + g.r }, [
        el("span", { class: "ico", style: "background:" + g.c, text: g.i }),
        el("span", null, [el("b", { text: g.t }), el("small", { text: g.s })]),
        g.r === "exitticket" ? scoreTag("exitticket") : null
      ]));
    });
    w.appendChild(t2);
    w.appendChild(el("div", { class: "card mt" }, [
      el("b", { text: "Labomgeving" }),
      el("p", { class: "muted", html: "DNS01 <code>192.168.10.10</code> · CLIENT01 <code>192.168.10.100</code> · RTR01 <code>192.168.10.1</code><br>Records: WEB01 <code>.20</code> · FILE01 <code>.30</code> · intranet → web01" })
    ]));
    w.appendChild(el("button", { class: "btn sec mt", onclick: function () {
      if (!window.confirm("Al je scores, voorspellingen en ingevulde gegevens van deze DNS-app wissen?")) return;
      try { Object.keys(localStorage).forEach(function (k) { if (k.indexOf("dns.") === 0) localStorage.removeItem(k); }); } catch (e) {}
      home();
    } }, ["Mijn resultaten wissen"]));
  }

  /* ---------- 1. Welk record? ---------- */
  function records(mode) {
    clear(); crumb.textContent = "Welk record?";
    mode = mode || "vote";
    var w = wrap();
    w.appendChild(el("h1", { text: "Welk record?" }));
    var seg = el("div", { class: "seg", role: "tablist" }, [
      el("button", { class: mode === "quiz" ? "on" : "", role: "tab", "aria-selected": mode === "quiz", onclick: function () { records("quiz"); } }, ["Oefenen"]),
      el("button", { class: mode === "vote" ? "on" : "", role: "tab", "aria-selected": mode === "vote", onclick: function () { records("vote"); } }, ["Stemkaart (klas)"])
    ]);
    w.appendChild(seg);
    if (mode === "vote") {
      w.appendChild(el("p", { class: "muted", text: "Je docent leest een situatie voor. Kies je record, en steek bij ‘3-2-1’ je gsm op. Tik op de grote kaart om terug te gaan." }));
      var g = el("div", { class: "rgrid" });
      D.records.forEach(function (r) {
        g.appendChild(el("button", { class: "rbtn", style: "background:" + r.c, onclick: function () { bigCard(r); } }, [r.t, el("small", { text: r.d })]));
      });
      w.appendChild(g);
      w.appendChild(back());
    } else intro(w, "recordquiz", function () { recordQuiz(w); });
  }
  function bigCard(r) {
    var c = el("div", { class: "bigcard", style: "background:" + r.c, role: "button", "aria-label": "Sluit kaart " + r.t, tabindex: 0 }, [
      el("div", { class: "t", text: r.t, style: "font-size:min(" + Math.round(150 / Math.max(r.t.length, 2)) + "vw,240px)" }), el("div", { class: "h", text: "Tik om te sluiten" })]);
    function close() { c.remove(); }
    c.addEventListener("click", close);
    c.addEventListener("keydown", function (e) { if (e.key === "Escape" || e.key === "Enter") close(); });
    document.body.appendChild(c); c.focus();
  }
  function recordQuiz(w) {
    var qs = shuffle(D.recordQuiz), i = 0, score = 0;
    var box = el("div"); w.appendChild(box);
    function show() {
      box.innerHTML = "";
      if (i >= qs.length) { finish(box, "records", score, qs.length, function () { records("quiz"); }); return; }
      var q = qs[i];
      box.appendChild(el("div", { class: "muted", text: "Situatie " + (i + 1) + " van " + qs.length }));
      box.appendChild(progress(i, qs.length));
      box.appendChild(el("div", { class: "card" }, [el("div", { class: "q", html: q.q })]));
      var hb = hint(q.h); if (hb) box.appendChild(hb);
      var g = el("div", { class: "rgrid" }), done = false;
      D.records.forEach(function (r) {
        var b = el("button", { class: "rbtn", style: "background:" + r.c, onclick: function () {
          if (done) return; done = true; if (hb) hb.remove();
          var ok = r.t === q.a; if (ok) score++;
          Array.prototype.forEach.call(g.children, function (x) { x.style.opacity = x === b || x.dataset.t === q.a ? 1 : .25; });
          var A = D.records.filter(function (x) { return x.t === q.a; })[0];
          box.appendChild(ok ? fb(true, "Juist: " + q.a, q.e) : fb(false, "Niet juist. Het is " + q.a + ".",
            "<b>Jouw keuze, " + r.t + ",</b> vertaalt " + r.l + ". Dat is hier niet wat je nodig hebt.<br><b>Waarom " + q.a + "?</b> " + q.a + " vertaalt " + A.l + ". " + q.e));
          box.appendChild(el("button", { class: "btn mt", onclick: function () { i++; show(); } }, [i + 1 < qs.length ? "Volgende" : "Resultaat"]));
        } }, [r.t, el("small", { text: r.d })]);
        b.dataset.t = r.t; g.appendChild(b);
      });
      box.appendChild(g);
    }
    show();
  }

  /* ---------- 2. FQDN-puzzel ---------- */
  function fqdn() {
    clear(); crumb.textContent = "FQDN-puzzel";
    var w = wrap();
    w.appendChild(el("h1", { text: "FQDN-puzzel" }));
    var rounds = D.fqdnRounds, ri = 0, score = 0, total = 0;
    var box = el("div"); w.appendChild(box);

    function round() {
      box.innerHTML = "";
      if (ri >= rounds.length) return outro();
      var R = rounds[ri], built = [], tiles = shuffle(D.fqdnTiles.filter(function (t) { return t !== "."; }).map(function (t, k) { return { t: t, k: k, used: false }; }));
      var want = R.target.filter(function (t) { return t !== "."; }).reverse(); // van rechts naar links: TLD, domein, host
      var tries = 0;
      box.appendChild(el("div", { class: "muted", text: "Ronde " + (ri + 1) + " van " + rounds.length + " · stap 1: bouwen" }));
      box.appendChild(progress(ri, rounds.length));
      box.appendChild(el("div", { class: "card" }, [el("div", { class: "q", html: R.prompt + " wordt geopend via:" }),
        el("div", { class: "cmd", style: "margin:8px 0", text: R.url }),
        el("div", { class: "q", style: "font-size:16px", text: "Bouw de volledige FQDN van deze server." }),
        el("div", { class: "muted", text: "Bouw van rechts naar links: de root staat al klaar. Tik eerst het topdomein (TLD), dan het domein, dan de host." })]));
      var ans = el("div", { class: "answer", "aria-live": "polite" });
      var bank = el("div", { class: "bank" });
      var msg = el("div");
      function draw() {
        ans.innerHTML = ""; bank.innerHTML = ""; ans.className = "answer";
        if (!built.length) ans.appendChild(el("span", { class: "ph", text: "← begin hier met het TLD" }));
        built.slice().reverse().forEach(function (o) {
          ans.appendChild(el("button", { class: "tl", "aria-label": "Verwijder " + o.t, onclick: function () { o.used = false; built.splice(built.indexOf(o), 1); draw(); } }, [o.t]));
          ans.appendChild(el("span", { class: "sep", text: "." }));
        });
        ans.appendChild(el("span", { class: "tl root", title: "root" }, [".", el("small", { text: "root" })]));
        tiles.forEach(function (o) {
          bank.appendChild(el("button", { class: "tl" + (o.used ? " used" : ""), "aria-hidden": o.used ? "true" : null, tabindex: o.used ? -1 : null,
            onclick: function () { if (o.used) return; o.used = true; built.push(o); draw(); } }, [o.t]));
        });
      }
      draw();
      box.appendChild(ans); box.appendChild(bank);
      box.appendChild(el("div", { class: "row mt" }, [
        el("button", { class: "btn sec", onclick: function () { tiles.forEach(function (o) { o.used = false; }); built = []; msg.innerHTML = ""; draw(); } }, ["Wissen"]),
        el("button", { class: "btn", onclick: check }, ["Controleer"])
      ]));
      box.appendChild(msg);
      function check() {
        var s = built.map(function (o) { return o.t; });
        msg.innerHTML = ""; tries++;
        var ok = s.join("|") === want.join("|");
        if (ok) {
          if (tries === 1) score++; total++;
          ans.className = "answer ok";
          msg.appendChild(fb(true, "Juist!", "<code>" + R.target.join("") + "</code>"));
          msg.appendChild(el("button", { class: "btn mt", onclick: function () { labels(R); } }, ["Stap 2: delen benoemen"]));
          return;
        }
        ans.className = "answer bad";
        var hint = "Nog niet. ";
        var bad = s.filter(function (t) { return D.fqdnDistractors[t]; });
        if (bad.length) hint += "<code>" + bad[0] + "</code> is " + D.fqdnDistractors[bad[0]] + ".";
        else if (s.join("|") === want.slice().reverse().join("|")) hint += "Je bouwde van links naar rechts. Begin bij de root: tik eerst het topdomein (TLD), dan het domein, dan de host.";
        else if (s.length && s[0] !== want[0]) hint += "Net naast de root hoort het topdomein (TLD). Welk topdomein heeft deze naam?";
        else hint += "Lees van rechts naar links: root → TLD → domein → host.";
        msg.appendChild(fb(false, "Probeer opnieuw", hint));
        if (tries === 1) total++;
      }
    }

    function labels(R) {
      box.innerHTML = "";
      box.appendChild(el("div", { class: "muted", text: "Ronde " + (ri + 1) + " · stap 2: wat is elk deel?" }));
      box.appendChild(progress(ri + 0.5, rounds.length));
      var parts = R.target.filter(function (t, k) { return t !== "." || k === R.target.length - 1; });
      var order = parts.slice().reverse(); // van rechts naar links
      var pi = 0, wrong = 0;
      var view = el("div", { class: "parts" }); var qbox = el("div");
      box.appendChild(el("div", { class: "card" }, [el("div", { class: "q", text: "Benoem elk deel, van rechts naar links." }), view]));
      box.appendChild(qbox);
      function draw() {
        view.innerHTML = "";
        parts.forEach(function (p) {
          var idx = order.indexOf(p);
          var cls = idx < pi ? "lab" : (idx === pi ? "cur" : "");
          view.appendChild(el("span", { class: cls }, [p, idx < pi ? el("em", { text: R.labels[p] }) : null]));
        });
        qbox.innerHTML = "";
        if (pi >= order.length) {
          if (!wrong) score++; total++;
          qbox.appendChild(fb(!wrong, wrong ? "Klaar (met " + wrong + " fout" + (wrong > 1 ? "en" : "") + ")" : "Alles juist benoemd", "Van algemeen (rechts) naar specifiek (links)."));
          qbox.appendChild(el("button", { class: "btn mt", onclick: function () { zoneQ(R); } }, ["Stap 3"]));
          return;
        }
        var p = order[pi];
        qbox.appendChild(el("p", { html: "Wat is <code>" + (p === "." ? ". (het laatste puntje)" : p) + "</code>?" }));
        var opts = el("div", { class: "opts" }), m = el("div");
        shuffle(["hostlabel", "domein", "TLD", "root"]).forEach(function (lab) {
          opts.appendChild(el("button", { class: "opt", onclick: function (e) {
            if (lab === R.labels[p]) { pi++; draw(); }
            else { wrong++; e.currentTarget.className = "opt bad"; m.innerHTML = ""; m.appendChild(fb(false, "Nog niet", "<b>" + lab + "</b> is " + hintFor(lab) + " Kijk naar de plaats van <code>" + p + "</code> in de naam: hoe verder naar rechts, hoe algemener.")); }
          } }, [lab]));
        });
        qbox.appendChild(opts); qbox.appendChild(m);
      }
      function hintFor(l) {
        return { hostlabel: "het meest specifieke deel, helemaal links: de naam van één computer.", domein: "het deel van de organisatie, net links van het TLD (2e niveau).", TLD: "het topdomein, net links van de root (bv. test, be, com).", root: "de wortel van de boom: het puntje helemaal rechts." }[l];
      }
      draw();
    }

    function zoneQ(R) {
      box.innerHTML = "";
      box.appendChild(el("div", { class: "muted", text: "Ronde " + (ri + 1) + " · stap 3" }));
      box.appendChild(progress(ri + 0.8, rounds.length));
      var name = R.target.join("");
      box.appendChild(el("div", { class: "scen", html: "<b>Situatie:</b> DNS01 is de DNS-server van CampusConnect. Hij beheert één eigen zone: <b>campusconnect.test</b>. Voor namen in die zone kent hij zelf het antwoord (hij is <b>autoritatief</b>). Alle andere namen kent hij niet en stuurt hij door naar een <b>forwarder</b>." }));
      box.appendChild(el("div", { class: "card" }, [el("div", { class: "q", html: "Een client vraagt <code style=\"white-space:nowrap\">" + name + "</code> aan DNS01. Kan DNS01 die naam zelf beantwoorden?" })]));
      var hb = hint("Kijk naar het rechterdeel van de naam (TLD + domein). Eindigt de naam op campusconnect.test, dan hoort ze in de eigen zone van DNS01.");
      if (hb) box.appendChild(hb);
      var opts = el("div", { class: "opts" }), m = el("div"), done = false;
      [["Ja, de naam hoort in zijn eigen zone (autoritatief)", true], ["Nee, hij stuurt de vraag door naar de forwarder", false]].forEach(function (o) {
        var b = el("button", { class: "opt", onclick: function () {
          if (done) return; done = true; if (hb) hb.remove();
          var ok = o[1] === R.zone; if (ok) score++; total++;
          b.className = "opt " + (ok ? "ok" : "bad");
          var end = R.target[2] + "." + R.target[4];
          m.appendChild(fb(ok, ok ? "Juist" : "Niet juist", R.zone
            ? "De naam eindigt op <b>" + end + "</b>: dat is precies de eigen zone van DNS01. Hij zoekt het record zelf op in die zone en antwoordt autoritatief. De forwarder komt er niet aan te pas."
            : "De naam eindigt op <b>" + end + "</b>, niet op campusconnect.test. DNS01 heeft geen zone voor " + end + " en kent het antwoord dus niet zelf. Hij kijkt eerst in zijn servercache; staat het daar niet, dan stuurt hij de vraag door naar de forwarder."));
          m.appendChild(el("button", { class: "btn mt", onclick: function () { ri++; round(); } }, [ri + 1 < rounds.length ? "Volgende ronde" : "Afronden"]));
        } }, [o[0]]);
        opts.appendChild(b);
      });
      box.appendChild(opts); box.appendChild(m);
    }

    function outro() {
      box.innerHTML = "";
      box.appendChild(el("h2", { text: "Welke tegels hoorden nooit in een FQDN?" }));
      var ul = el("div", { class: "card" });
      Object.keys(D.fqdnDistractors).forEach(function (k) { ul.appendChild(el("p", { html: "<code>" + k + "</code> – " + D.fqdnDistractors[k] })); });
      box.appendChild(ul);
      finish(box, "fqdn", score, total, fqdn);
    }
    intro(box, "fqdn", round);
  }

  /* ---------- 3. Voorspel de uitvoer ---------- */
  function check(part) {
    clear(); crumb.textContent = "Voorspel de uitvoer";
    part = part || "exit";
    var w = wrap();
    w.appendChild(el("h1", { text: "Voorspel de uitvoer" }));
    w.appendChild(el("div", { class: "seg", role: "tablist" }, [
      el("button", { class: part === "exit" ? "on" : "", role: "tab", onclick: function () { check("exit"); } }, ["Exitcheck blok 1", tabScore("check")]),
      el("button", { class: part === "pred" ? "on" : "", role: "tab", onclick: function () { check("pred"); } }, ["Begripscheck 2", tabScore("check2")])
    ]));
    var holder = el("div"); w.appendChild(holder);
    intro(holder, part === "exit" ? "exit" : "pred", function () { if (part === "exit") exitcheck(holder); else predict(holder); });
  }
  function tabScore(k) { var r = store(k); return r ? el("small", { class: "tabscore", text: "laatste score " + r.score + "/" + r.total }) : null; }
  function exitcheck(w) {
    w.appendChild(el("p", { class: "muted", text: "Kies voor elke query de zone, het recordtype en wie antwoordt. Alle query's komen van CLIENT01, die DNS01 als DNS-server gebruikt." }));
    var items = D.exitcheck, i = 0, score = 0, total = items.length * 3 + 1;
    var box = el("div"); w.appendChild(box);
    function show() {
      box.innerHTML = "";
      if (i === items.length) return reasoning();
      var it = items[i], sel = {};
      box.appendChild(el("div", { class: "muted", text: "Query " + (i + 1) + " van " + items.length }));
      box.appendChild(progress(i, items.length + 1));
      box.appendChild(situatie());
      box.appendChild(el("div", { class: "cmd", text: it.cmd }));
      var groups = {};
      Object.keys(D.exitFields).forEach(function (f) {
        var F = D.exitFields[f], chips = el("div", { class: "chips" });
        F.o.forEach(function (o) {
          var c = el("button", { class: "chip", onclick: function () {
            if (box.dataset.done) return;
            sel[f] = o; Array.prototype.forEach.call(chips.children, function (x) { x.className = "chip" + (x === c ? " sel" : ""); });
            go.disabled = Object.keys(sel).length < 3;
          } }, [o]);
          c.dataset.v = o; chips.appendChild(c);
        });
        groups[f] = chips;
        box.appendChild(el("div", { class: "field" }, [el("label", { text: F.l }), chips]));
      });
      var m = el("div");
      var go = el("button", { class: "btn mt", disabled: true, onclick: function () {
        if (box.dataset.done) { delete box.dataset.done; i++; show(); return; }
        box.dataset.done = "1"; var right = 0;
        Object.keys(groups).forEach(function (f) {
          Array.prototype.forEach.call(groups[f].children, function (x) {
            var v = x.dataset.v;
            if (v === it.f[f]) x.className = "chip " + (sel[f] === v ? "ok" : "should");
            else if (sel[f] === v) x.className = "chip bad";
          });
          if (sel[f] === it.f[f]) right++;
        });
        score += right;
        var html = Object.keys(groups).map(function (f) {
          var good = sel[f] === it.f[f];
          var why = !good && D.exitWhy[sel[f]] ? " <i>Jouw keuze ‘" + sel[f] + "’: " + D.exitWhy[sel[f]] + "</i>" : "";
          return "<p style=\"margin:6px 0\">" + (good ? "✔" : "✘") + " <b>" + D.exitFields[f].l.replace(/\?$/, "") + ": " + it.f[f] + "</b><br>" + it.x[f] + why + "</p>";
        }).join("");
        m.appendChild(fb(right === 3, right + " / 3 juist", html));
        go.textContent = "Volgende";
      } }, ["Controleer"]);
      box.appendChild(go); box.appendChild(m);
    }
    function reasoning() {
      box.innerHTML = "";
      box.appendChild(progress(items.length, items.length + 1));
      mcq(box, { q: D.reasoning.q, o: D.reasoning.o, a: D.reasoning.a, e: D.reasoning.e }, function (ok) {
        if (ok) score++;
        box.appendChild(el("button", { class: "btn mt", onclick: function () { box.innerHTML = ""; finish(box, "check", score, total, function () { check("exit"); }); } }, ["Resultaat"]));
      });
    }
    show();
  }
  function mcq(box, q, done, isCmd) {
    if (isCmd && q.s) box.appendChild(el("div", { class: "scen", html: q.s }));
    box.appendChild(isCmd ? el("div", { class: "cmd", text: q.cmd }) : el("div", { class: "card" }, [el("div", { class: "q", html: q.q })]));
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
      } }, [isCmd ? el("span", { class: /^[A-Z]{1,5}  /.test(o.t) || o.t === "time-out" ? "mono" : "", text: o.t }) : el("span", { html: o.t })]);
      opts.appendChild(b);
    });
    box.appendChild(opts); box.appendChild(m);
  }
  function predict(w) {
    w.appendChild(el("p", { class: "muted", text: "Wat geeft het commando terug? Denk eerst na, kies dan." }));
    var qs = D.predict, i = 0, score = 0, box = el("div"); w.appendChild(box);
    function show() {
      box.innerHTML = "";
      if (i >= qs.length) return finish(box, "check2", score, qs.length, function () { check("pred"); });
      box.appendChild(el("div", { class: "muted", text: "Vraag " + (i + 1) + " van " + qs.length }));
      box.appendChild(progress(i, qs.length));
      box.appendChild(situatie());
      mcq(box, qs[i], function (ok) {
        if (ok) score++;
        box.appendChild(el("button", { class: "btn mt", onclick: function () { i++; show(); } }, [i + 1 < qs.length ? "Volgende" : "Resultaat"]));
      }, true);
    }
    show();
  }

  /* ---------- 4. Querypad-simulatie ---------- */
  var NODES = [
    { id: "client", n: "CLIENT01", s: "clientcache", cls: "int" },
    { id: "hosts", n: "hosts-bestand", short: "hosts", s: "op CLIENT01", cls: "int" },
    { id: "dns01", n: "DNS01", s: "zone campusconnect.test + servercache", cls: "int" },
    { id: "fwd", n: "Forwarder", s: "extern", cls: "" },
    { id: "root", n: "Root-server", short: "root", s: "“.”", cls: "ext" },
    { id: "com", n: ".com-server", short: ".com", s: "TLD", cls: "ext" },
    { id: "ms", n: "microsoft.com-server", short: "microsoft .com", s: "autoritatief voor microsoft.com", cls: "ext" }
  ];
  function sim() {
    clear(); crumb.textContent = "Het querypad";
    var w = wrap();
    w.appendChild(el("h1", { text: "Het querypad" }));
    var introBox = el("div"); w.appendChild(introBox);
    intro(introBox, "sim", function () { introBox.remove(); run(); });
    function run() {
    var caches = { client: [], dns01: [] }, hostsLine = false;
    var ri = 0, si = 0, score = 0, total = 0;
    var net = el("div", { class: "net", "aria-hidden": "true" }); var nodeEls = {}; var cacheEls = {};
    NODES.forEach(function (N) {
      var n = el("div", { class: "node " + N.cls, title: N.s }, [N.short || N.n]);
      nodeEls[N.id] = n; net.appendChild(n);
    });
    var cpanel = el("div", { class: "caches" });
    cpanel.appendChild(el("div", { class: "cbox" }, [el("b", { text: "Situatie" }), el("div", { style: "font-size:13.5px;margin-top:2px", text: "CLIENT01 gebruikt DNS01 als DNS-server. DNS01 heeft een eigen zone campusconnect.test (zie onderaan) en stuurt alle andere namen door naar een forwarder." })]));
    [["client", "Clientcache CLIENT01"], ["hosts", "hosts-bestand CLIENT01"], ["dns01", "Servercache DNS01"]].forEach(function (c) {
      cacheEls[c[0]] = el("div", { class: "cache" });
      cpanel.appendChild(el("div", { class: "cbox" }, [el("b", { text: c[1] }), cacheEls[c[0]]]));
    });
    cpanel.appendChild(el("div", { class: "cbox zone" }, [el("b", { text: "Zone campusconnect.test op DNS01" }),
      el("div", { class: "cache" }, D.zone.map(function (z) { return el("div", null, [el("span", { text: z })]); }))]));
    var title = el("h2"); var qbox = el("div");
    w.appendChild(net); w.appendChild(title); w.appendChild(qbox); w.appendChild(cpanel);

    function drawCache() {
      ["client", "dns01"].forEach(function (k) {
        var c = cacheEls[k]; c.innerHTML = "";
        if (!caches[k].length) { c.appendChild(el("div", { class: "empty", text: "leeg" })); return; }
        caches[k].forEach(function (e) {
          c.appendChild(el("div", { class: e.neg ? "neg" : "" }, [el("span", { text: e.name }), el("span", { text: e.val + " · TTL " + e.ttl + " s" })]));
        });
      });
      cacheEls.hosts.innerHTML = "";
      cacheEls.hosts.appendChild(hostsLine ? el("div", { class: "neg" }, [el("span", { text: "192.168.10.99  web01.campusconnect.test" })]) : el("div", { class: "empty", text: "geen regels" }));
    }
    function light(ids) { Object.keys(nodeEls).forEach(function (k) { nodeEls[k].classList.toggle("on", (ids || []).indexOf(k) > -1); }); }
    // TTL loopt echt af (1 s = 1 s) zodat studenten het zien
    var timer = setInterval(function () {
      if (!document.body.contains(net)) { clearInterval(timer); return; }
      ["client", "dns01"].forEach(function (k) { caches[k] = caches[k].filter(function (e) { e.ttl--; return e.ttl > 0; }); });
      drawCache();
    }, 1000);

    function step() {
      var R = D.rounds[ri];
      if (!R) return end();
      var S = R.steps[si];
      if (!S) { ri++; si = 0; return step(); }
      title.textContent = R.title;
      if (S.hosts) hostsLine = true;
      if (ri === 4 && si === 0) caches.client = caches.client.filter(function (e) { return e.name !== "web01.campusconnect.test"; });
      drawCache(); light(si === 0 ? ["client"] : null);
      qbox.innerHTML = "";
      var done = D.rounds.slice(0, ri).reduce(function (a, r) { return a + r.steps.length; }, 0) + si;
      var all = D.rounds.reduce(function (a, r) { return a + r.steps.length; }, 0);
      qbox.appendChild(progress(done, all));
      mcq(qbox, S, function (ok) {
        total++; if (ok) score++;
        light(S.on);
        if (S.expire) { caches.client = caches.client.filter(function (e) { return e.name !== "www.microsoft.com"; }); caches.dns01 = caches.dns01.filter(function (e) { return e.name !== "www.microsoft.com"; }); }
        if (S.cache) [].concat(S.cache).forEach(function (c) {
          caches[c.where] = caches[c.where].filter(function (e) { return e.name !== c.name; }).concat([{ name: c.name, val: c.val, ttl: c.ttl, neg: c.neg }]);
        });
        drawCache();
        qbox.appendChild(el("button", { class: "btn mt", onclick: function () { si++; step(); } }, ["Volgende stap"]));
        qbox.lastChild.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
    function end() {
      light([]); title.textContent = "Klaar!";
      qbox.innerHTML = "";
      finish(qbox, "sim", score, total, sim);
    }
    step();
    }
  }


  /* ---------- 5. Voorspel de demo (vervangt de papieren voorspelkaart) ---------- */
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
      box.innerHTML = ""; window.scrollTo(0, 0);
      box.appendChild(el("div", { class: "muted", text: "Demo " + d.n + " van " + (D.demos.length - 1) }));
      box.appendChild(progress(i, D.demos.length));
      box.appendChild(el("div", { class: "card" }, [el("span", { class: "tag black", text: "Voorspel" }), el("h2", { text: d.t, style: "margin-top:8px" }), el("div", { class: "q", html: d.q })]));
      var opts = el("div", { class: "opts" });
      d.o.forEach(function (o, k) {
        var cls = "opt";
        if (sv && sv.shown) cls += k === d.a ? " ok" : (k === sv.c ? " bad" : "");
        else if (sv && sv.c === k) cls += " sel";
        opts.appendChild(el("button", { class: cls, disabled: sv && sv.shown ? true : null, onclick: function () { saved[d.n] = { c: k }; save(); one(i); } }, [el("span", { html: o })]));
      });
      box.appendChild(opts);
      if (sv && !sv.shown) {
        box.appendChild(el("div", { class: "fb ok", style: "background:#fff8e6;border-left-color:#e0b000" }, [el("b", { text: "Je voorspelling is bewaard." }), el("span", { text: "Kijk nu naar de demo. Je mag je keuze nog wijzigen zolang het bewijs niet getoond is." })]));
        box.appendChild(el("button", { class: "btn mt", onclick: function () { sv.shown = true; save(); one(i); } }, ["De demo is gebeurd: toon het bewijs"]));
      } else if (sv && sv.shown) {
        var ok = sv.c === d.a;
        box.appendChild(fb(ok, ok ? "Je voorspelling klopte" : "Je voorspelling klopte niet",
          (!ok && d.w[sv.c] ? "<b>Jouw voorspelling:</b> " + d.w[sv.c] + "<br>" : "") + "<b>Bewijs:</b> " + d.e));
      } else {
        box.appendChild(el("p", { class: "muted mt", text: "Tik op je voorspelling." }));
      }
      var nav = el("div", { class: "row mt" }, [el("button", { class: "btn sec", onclick: list }, ["Alle demo's"])]);
      if (i + 1 < D.demos.length) nav.appendChild(el("button", { class: "btn", onclick: function () { one(i + 1); } }, ["Volgende demo"]));
      box.appendChild(nav);
    }
    if (start) list(); else intro(box, "demo", list);
  }

  /* ---------- 6. Status (vervangt de papieren statuskaart) ---------- */
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
      box.appendChild(g); box.appendChild(back());
      var last = store("status"); if (last) box.insertBefore(el("p", { class: "muted", text: "Laatst gekozen: " + last }), g);
    }
    function show(st) {
      store("status", st.n + " · " + st.t);
      var kids = [el("div", { class: "n", text: String(st.n) }), el("div", { class: "t", text: st.t }), el("div", { class: "d", text: st.d })];
      if (st.q) kids.push(el("ol", null, st.q.map(function (x) { return el("li", { text: x }); })));
      kids.push(el("div", { class: "h", text: "Tik om je status te wijzigen" }));
      var c = el("div", { class: "statuscard", style: "background:" + st.c, role: "button", tabindex: 0, "aria-label": "Status " + st.n + " " + st.t + ". Tik om te wijzigen." }, kids);
      function close() { c.remove(); }
      c.addEventListener("click", close);
      c.addEventListener("keydown", function (e) { if (e.key === "Escape" || e.key === "Enter") close(); });
      document.body.appendChild(c); c.focus();
    }
    intro(box, "status", grid);
  }

  /* ---------- 7. Foutenpracticum (vervangt de papieren foutkaarten) ---------- */
  function foutPage(mode) {
    clear(); crumb.textContent = "Foutenpracticum";
    mode = mode || "intro";
    var w = wrap();
    w.appendChild(el("h1", { text: "Breek het bij je buur" }));
    var box = el("div"); w.appendChild(box);
    function tabs(cur) {
      return el("div", { class: "seg", role: "tablist" }, [
        el("button", { class: cur === "sab" ? "on" : "", role: "tab", onclick: function () { foutPage("sab"); } }, ["Saboteur"]),
        el("button", { class: cur === "slo" ? "on" : "", role: "tab", onclick: function () { foutPage("slo"); } }, ["Slachtoffer (ticket)"])]);
    }
    function stars(n) { return "★★★".slice(0, n); }
    function sab() {
      box.appendChild(tabs("sab"));
      var cur = store("foutSab");
      if (!cur) {
        box.appendChild(el("p", { class: "muted", text: "Kies een moeilijkheidsgraad en trek een foutkaart. Je buur kijkt weg." }));
        var g = el("div", { class: "opts" });
        [[1, "★ makkelijk (kaarten 1–2)"], [2, "★★ gemiddeld (kaarten 3–6)"], [3, "★★★ moeilijk (kaarten 7–8)"], [0, "Willekeurig"]].forEach(function (o) {
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
        box.appendChild(el("div", { class: "card mt" }, [el("span", { class: "tag", text: "Ticket #" + (1100 + f.nr) }), el("p", { class: "q", style: "margin-top:10px", text: "“" + f.ticket + "”" })]));
        box.appendChild(el("p", { class: "muted", text: "Werk het ticket af: symptoom → omvang → bewijs per laag (" + D.ladder + ") → hypothese → één wijziging → hertest." }));
        box.appendChild(el("a", { href: "#/ticket", class: "btn", style: "display:block;text-align:center;text-decoration:none" }, ["Open het ticketformulier"]));
      }
    }
    if (mode === "sab") sab(); else if (mode === "slo") slo();
    else intro(box, "fout", function () { foutPage("sab"); });
    box.appendChild(back());
  }

  /* ---------- 8. Ticketformulier (vervangt het papieren formulier) ---------- */
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
      function asText() {
        return D.ticketVelden.map(function (f) { return f.l + "\n" + (data[f.k] || "") + "\n"; }).join("\n") + "\nStatus: " + (data.status || "") + "\n";
      }
      box.appendChild(el("div", { class: "row mt" }, [
        el("button", { class: "btn", onclick: function () {
          var t = asText(); msg.innerHTML = "";
          (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { msg.appendChild(fb(true, "Gekopieerd", "Plak het nu in je werkdocument.")); },
            function () { var ta = el("textarea", { rows: 8 }); ta.value = t; msg.appendChild(ta); ta.select(); msg.appendChild(el("p", { class: "muted", text: "Kopiëren lukte niet automatisch: selecteer de tekst hierboven en kopieer hem zelf." })); });
        } }, ["Kopiëren"]),
        el("button", { class: "btn sec", onclick: function () {
          var a = el("a", { href: URL.createObjectURL(new Blob([asText()], { type: "text/plain" })), download: "ticket-dns.txt" });
          document.body.appendChild(a); a.click(); a.remove();
        } }, ["Downloaden (.txt)"])]));
      box.appendChild(msg);
      box.appendChild(el("button", { class: "btn sec mt", onclick: function () { if (window.confirm("Alles wissen en een nieuw ticket beginnen?")) { store("ticket", {}); ticketPage(true); } } }, ["Nieuw ticket (wissen)"]));
      box.appendChild(back());
    }
    if (start) form(); else intro(box, "ticket", form);
  }

  /* ---------- 9. Exit ticket (zonder inzage door de docent) ---------- */
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
      if (i < E.mc.length) {
        mcq(box, E.mc[i], function (ok) {
          if (ok) score++;
          box.appendChild(el("button", { class: "btn mt", onclick: function () { i++; show(); } }, ["Volgende"]));
        });
        return;
      }
      var ta = el("textarea", { rows: 5, "aria-label": E.open });
      ta.value = store("exitOpen") || "";
      ta.addEventListener("input", function () { store("exitOpen", ta.value); });
      box.appendChild(el("div", { class: "card" }, [el("div", { class: "q", text: E.open })]));
      box.appendChild(ta);
      box.appendChild(el("button", { class: "btn mt", onclick: function () {
        store("exitticket", { score: score, total: E.mc.length });
        box.innerHTML = "";
        box.appendChild(el("div", { class: "card", style: "text-align:center" }, [el("div", { class: "score", text: "Bedankt!" }),
          el("p", { text: "Laat je omgeving werkend en opgeruimd achter en neem een snapshot DNS-eind." })]));
        box.appendChild(back());
      } }, ["Afronden"]));
    }
    intro(box, "exitticket", show);
  }


  /* ---------- 10. Extra oefenen: 10 willekeurige vragen uit een poel van 30 ---------- */
  function extraPage(topic) {
    var pool = D.extra && D.extra[topic], T = EXTRA_T[topic];
    if (!pool || !T) return home();
    clear(); crumb.textContent = T[0] + " · extra oefenen";
    var w = wrap();
    w.appendChild(el("h1", { text: T[0] }));
    w.appendChild(el("p", { class: "muted", text: "Extra oefenen: 10 willekeurige vragen uit een poel van " + pool.length + ". Elke ronde krijg je andere vragen." }));
    var box = el("div"); w.appendChild(box);
    var qs = shuffle(pool).slice(0, 10).map(function (q) {
      if (q.o) return q;
      // recordvraag: juist type + 3 willekeurige andere types
      var types = D.records.map(function (r) { return r.t; });
      var opts = [q.a].concat(shuffle(types.filter(function (t) { return t !== q.a; })).slice(0, 3));
      var lab = function (t) { return D.records.filter(function (r) { return r.t === t; })[0].l; };
      return { q: q.q, o: opts, a: 0, w: opts.map(function (t, k) { return k === 0 ? null : t + " vertaalt " + lab(t) + ". Dat is hier niet wat je nodig hebt."; }),
        e: q.a + " vertaalt " + lab(q.a) + ". " + q.e };
    });
    var i = 0, score = 0;
    function show() {
      box.innerHTML = ""; window.scrollTo(0, 0);
      if (i >= qs.length) {
        finish(box, "extra_" + topic, score, qs.length, function () { extraPage(topic); });
        box.insertBefore(el("a", { href: "#/" + T[1], class: "btn sec", style: "display:block;text-align:center;text-decoration:none;margin-top:12px" }, ["Terug naar " + T[0]]), box.lastChild);
        return;
      }
      box.appendChild(el("div", { class: "muted", text: "Vraag " + (i + 1) + " van " + qs.length }));
      box.appendChild(progress(i, qs.length));
      if (topic === "uitvoer") box.appendChild(situatie());
      mcq(box, qs[i], function (ok) {
        if (ok) score++;
        box.appendChild(el("button", { class: "btn mt", onclick: function () { i++; show(); } }, [i + 1 < qs.length ? "Volgende" : "Resultaat"]));
      }, !!qs[i].cmd);
    }
    show();
  }

  /* ---------- router ---------- */
  function route() {
    var r = (location.hash || "#/").replace(/^#\//, "");
    if (r.indexOf("extra/") === 0) { extraPage(r.slice(6)); app.focus({ preventScroll: true }); return; }
    ({ "": home, records: function () { records("vote"); }, recordquiz: function () { records("quiz"); }, fqdn: fqdn, check: function () { check(); }, check2: function () { check("pred"); }, sim: sim,
       demo: function () { demoPage(); }, status: statusPage, fout: function () { foutPage(); }, ticket: function () { ticketPage(); }, exitticket: exitTicketPage }[r] || home)();
    app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);
  route();
})();
