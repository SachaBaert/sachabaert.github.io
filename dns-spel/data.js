/* Inhoud van de DNS-oefeningen. Aanpassen kan hier zonder de code te raken. */
window.DNSDATA = {

  /* ---------- 1. Welk record? (dia 13) ---------- */
  records: [
    { t: "A",     c: "#000000", d: "naam → IPv4" },
    { t: "AAAA",  c: "#5a5a5a", d: "naam → IPv6" },
    { t: "CNAME", c: "#919E2C", d: "alias → naam" },
    { t: "PTR",   c: "#EB6008", d: "IP → naam" },
    { t: "NS",    c: "#7C5EAC", d: "zone → naamserver" },
    { t: "SOA",   c: "#A6090F", d: "zone → beheer" },
    { t: "MX",    c: "#14799B", d: "domein → mail" }
  ],
  recordQuiz: [
    { q: "Gebruikers typen <b>intranet.campusconnect.test</b> en moeten uitkomen bij de webserver <b>srv-web01.campusconnect.test</b>, die al een A-record heeft.", h: "Er bestaat al een naam (srv-web01) met een adres. Je wil een tweede naam die naar die naam verwijst.", a: "CNAME",
      e: "Een alias wijst naar een andere naam (srv-web01.campusconnect.test), die zelf een A-record heeft." },
    { q: "Een logboek toont <b>172.16.0.20</b>. Je wil de naam van die computer zien.", h: "Je vertrekt van een IP-adres en zoekt een naam: de omgekeerde richting.", a: "PTR",
      e: "Van IP-adres naar naam = reverse lookup = PTR-record in de reverse zone." },
    { q: "<b>srv-file01.campusconnect.test</b> moet naar 172.16.0.20 wijzen.", h: "Je vertrekt van een naam en zoekt een IPv4-adres.", a: "A",
      e: "Naam → IPv4-adres: dat is een A-record." },
    { q: "Je wil een lijst van <b>alle naamservers</b> die autoritatief zijn voor de zone <b>campusconnect.test</b>.", h: "Welk record beschrijft wie verantwoordelijk is voor een zone?", a: "NS",
      e: "Het NS-record wijst de naamserver van de zone aan. Die naam heeft zelf ook een A-record nodig." },
    { q: "Een secundaire server wil weten of de zone <b>gewijzigd</b> is.", h: "Dit record bevat de beheergegevens van de zone, zoals een versienummer (serial).", a: "SOA",
      e: "Het serienummer in het SOA-record stijgt bij elke wijziging." },
    { q: "Mail voor <b>@campusconnect.test</b> moet bij MAIL01 aankomen.", h: "Het gaat over e-mail.", a: "MX",
      e: "Een MX-record wijst de mailserver van een domein aan. (Zijsprong: configureren we niet.)" },
    { q: "SRV-WEB01 moet ook bereikbaar zijn via het IPv6-adres <b>fd00::20</b>.", h: "IPv6 heeft een eigen recordtype, naast dat voor IPv4.", a: "AAAA",
      e: "AAAA is de IPv6-tegenhanger van A." },
    { q: "nslookup toont <b>Server: UnKnown</b> bij de DNS-server <b>172.16.0.10</b>. nslookup zoekt de naam bij dat IP-adres. Welk record ontbreekt?", h: "nslookup zoekt de naam die hoort bij het IP-adres van de DNS-server.", a: "PTR",
      e: "nslookup zoekt de naam van de DNS-server op via reverse lookup. Zonder PTR voor 172.16.0.10 (naam 10.0 in 16.172.in-addr.arpa): ‘UnKnown’." },
    { q: "Waar lees je hoe lang een <b>negatief antwoord</b> (‘bestaat niet’) in cache mag blijven?", h: "Dit record bevat de beheergegevens en timers van de zone.", a: "SOA",
      e: "Het laatste veld van het SOA-record (minimum TTL) bepaalt de negatieve caching." },
    { q: "<b>www.campusconnect.test</b> moet naar dezelfde server leiden als <b>srv-web01.campusconnect.test</b>, zonder dat je een tweede IP-adres moet bijhouden.", h: "Je wil een extra naam die verwijst naar een bestaande naam.", a: "CNAME",
      e: "Met een alias pas je het adres maar op één plaats aan: in het A-record van srv-web01." }
  ],

  /* ---------- 2. FQDN-puzzel (dia 10) ---------- */
  fqdnTiles: ["srv-web01", "srv-file01", "www", "srv-dc01", "campusconnect", "hogent", "microsoft",
              "test", "be", "com", "https://", "/index.html", ":443", "192.168.100.10"],
  fqdnRounds: [
    { prompt: "De interne webserver", url: "https://srv-web01.campusconnect.test:443/index.html", target: ["srv-web01", ".", "campusconnect", ".", "test", "."],
      labels: { "srv-web01": "hostlabel", "campusconnect": "domein", "test": "TLD", ".": "root" }, zone: true },
    { prompt: "De website van HOGENT", url: "https://www.hogent.be/index.html", target: ["www", ".", "hogent", ".", "be", "."],
      labels: { "www": "hostlabel", "hogent": "domein", "be": "TLD", ".": "root" }, zone: false },
    { prompt: "De bestandsserver", url: "\\\\srv-file01.campusconnect.test\\gedeeld", target: ["srv-file01", ".", "campusconnect", ".", "test", "."],
      labels: { "srv-file01": "hostlabel", "campusconnect": "domein", "test": "TLD", ".": "root" }, zone: true },
    { prompt: "De website van Microsoft", url: "https://www.microsoft.com:443/", target: ["www", ".", "microsoft", ".", "com", "."],
      labels: { "www": "hostlabel", "microsoft": "domein", "com": "TLD", ".": "root" }, zone: false }
  ],
  fqdnDistractors: {
    "https://": "het protocol (URL), geen deel van de naam",
    "/index.html": "een pad op de webserver (URL)",
    ":443": "een poortnummer",
    "192.168.100.10": "een IP-adres: dat is net wat DNS als antwoord geeft"
  },

  /* ---------- 3a. Exitcheck blok 1 (dia 23) ---------- */
  exitcheck: [
    { cmd: "Resolve-DnsName srv-file01.campusconnect.test",
      f: { zone: "campusconnect.test", type: "A", who: "SRV-DC01 (autoritatief)" } },
    { cmd: "Resolve-DnsName 172.16.0.20",
      f: { zone: "16.172.in-addr.arpa", type: "PTR", who: "SRV-DC01 (autoritatief)" } },
    { cmd: "Resolve-DnsName www.hogent.be",
      f: { zone: "geen eigen zone", type: "A", who: "via de forwarder (of cache)" } },
    { cmd: "Resolve-DnsName intranet.campusconnect.test",
      f: { zone: "campusconnect.test", type: "CNAME + A", who: "SRV-DC01 (autoritatief)" } }
  ],
  exitFields: {
    zone: { l: "Zone", o: ["campusconnect.test", "16.172.in-addr.arpa", "geen eigen zone"] },
    type: { l: "Recordtype", o: ["A", "PTR", "CNAME + A", "NS"] },
    who:  { l: "Wie antwoordt?", o: ["SRV-DC01 (autoritatief)", "via de forwarder (of cache)", "het hosts-bestand"] }
  },

  /* ---------- 3b. Voorspel de uitvoer (dia 34 + extra) ---------- */
  predict: [
    { cmd: "Resolve-DnsName srv-file01.campusconnect.test -Server 172.16.0.10", h: "Kijk in de spiekbrief naar de zone campusconnect.test op SRV-DC01.",
      o: ["A  172.16.0.20", "CNAME  srv-web01.campusconnect.test", "DNS name does not exist", "time-out"], a: 0,
      e: "srv-file01 heeft een A-record in de zone van SRV-DC01." },
    { cmd: "Resolve-DnsName intranet.campusconnect.test -Type CNAME -Server 172.16.0.10", h: "Met -Type CNAME vraag je alleen het aliasrecord op.",
      o: ["A  192.168.100.10", "CNAME  srv-web01.campusconnect.test", "PTR  srv-web01.campusconnect.test", "NS  srv-dc01.campusconnect.test"], a: 1,
      e: "Je vraagt expliciet het CNAME-record: de alias wijst naar een naam, niet naar een IP-adres." },
    { cmd: "Resolve-DnsName campusconnect.test -Type NS -Server 172.16.0.10", h: "-Type NS vraagt wie de naamserver van de zone is.",
      o: ["A  172.16.0.10", "SOA  hostmaster", "NS  srv-dc01.campusconnect.test", "DNS name does not exist"], a: 2,
      e: "Het NS-record van de zone wijst naar de naam van de naamserver." },
    { cmd: "Resolve-DnsName printer99.campusconnect.test -Server 172.16.0.10", h: "Staat printer99 in de zone? En kan SRV-DC01 dat met zekerheid zeggen?",
      o: ["time-out", "DNS name does not exist", "A  0.0.0.0", "antwoord van de forwarder"], a: 1,
      e: "SRV-DC01 is autoritatief en weet zeker dat printer99 niet bestaat: een negatief antwoord, geen time-out." },
    { s: "Stel: de reverse zone 16.172.in-addr.arpa bestaat nog <b>niet</b>.", cmd: "Resolve-DnsName 172.16.0.20 -Server 172.16.0.10", h: "Een A-record werkt alleen van naam naar adres.",
      o: ["srv-file01.campusconnect.test", "Geen naam: er bestaat geen PTR", "A  172.16.0.20", "intranet.campusconnect.test"], a: 1,
      e: "Een A-record helpt niet in de omgekeerde richting. Je hebt een reverse zone met een PTR-record nodig." },
    { s: "Stel: de DNS-service op SRV-DC01 is <b>gestopt</b> (de server zelf staat aan).", cmd: "Resolve-DnsName srv-web01.campusconnect.test -Server 172.16.0.10", h: "Een gestopte service kan helemaal niets terugsturen.",
      o: ["DNS name does not exist", "time-out: geen antwoord", "A  192.168.100.10 uit cache van SRV-DC01", "antwoord van de forwarder"], a: 1,
      e: "Een gestopte service antwoordt helemaal niet: time-out. Een negatief antwoord zou betekenen dat de service wél draait." },
    { s: "SRV-DC01 heeft een forwarder ingesteld.", cmd: "Gaat de query voor srv-web01.campusconnect.test naar de forwarder?", h: "Is SRV-DC01 zelf verantwoordelijk (autoritatief) voor campusconnect.test?",
      o: ["Ja, alle query's gaan naar de forwarder", "Nee, SRV-DC01 is autoritatief voor campusconnect.test", "Alleen als de cache leeg is", "Alleen bij een gerichte query"], a: 1,
      e: "Alleen wat niet in de eigen zones of de cache staat, wordt doorgestuurd." }
  ],
  reasoning: {
    q: "Een student zegt: “srv-web01 geeft <b>DNS name does not exist</b>, dus de DNS-service staat uit.” Wat klopt?",
    o: ["Dat klopt: de service staat uit.",
        "Fout: de server antwoordt, dus de service draait. Kijk naar zone, record of cache.",
        "Fout: het is een probleem met de forwarder.",
        "Fout: ADM-W11-01 heeft geen IP-adres."], a: 1,
    e: "Een negatief antwoord IS een antwoord. Bij een gestopte service krijg je een time-out."
  },


  /* ---------- Situatie (zichtbaar bij elke vraag) ---------- */
  situatie: "<p><b>ADM-W11-01</b> (10.0.10.10, clientnetwerk) gebruikt <b>SRV-DC01</b> (172.16.0.10, servernetwerk) als DNS-server; de vraag gaat via router RTR01. SRV-DC01 heeft twee eigen zones en stuurt alle andere namen door naar een <b>forwarder</b>.</p>" +
    "<pre>Zone campusconnect.test\n@         SOA    srv-dc01.campusconnect.test.\n@         NS     srv-dc01.campusconnect.test.\nsrv-dc01     A      172.16.0.10\nsrv-web01    A      192.168.100.10\nsrv-file01   A      172.16.0.20\nintranet     CNAME  srv-web01.campusconnect.test.\n\nZone 16.172.in-addr.arpa\n10.0         PTR    srv-dc01.campusconnect.test.\n20.0         PTR    srv-file01.campusconnect.test.</pre>",

  /* ---------- Introschermen per spel ---------- */
  intros: {
    recordquiz: { t: "Welk record?", p: [
      "Een DNS-server bewaart gegevens als <b>resource records</b>. Elk recordtype vertaalt iets anders: een naam naar een IP-adres, een IP-adres naar een naam, een alias naar een naam …",
      "Je krijgt 10 situaties uit het netwerk van CampusConnect. Kies telkens het recordtype dat je nodig hebt. Elke knop vertelt kort wat dat type vertaalt."],
      cs: "records" },
    fqdn: { t: "FQDN-puzzel", p: [
      "Een <b>FQDN</b> (Fully Qualified Domain Name) is de volledige naam van een computer, bv. <code>srv-web01.campusconnect.test.</code>",
      "Je leest hem van <b>rechts naar links</b>: root (het puntje achteraan) → TLD (<code>test</code>) → domein (<code>campusconnect</code>) → hostlabel (<code>srv-web01</code>).",
      "Per ronde krijg je een adres (een URL of een netwerkpad). Haal daar de FQDN van de server uit. Je bouwt de naam zoals DNS hem leest: <b>van rechts naar links</b>. De root (het puntje) staat al klaar; tik eerst het <b>TLD</b>, dan het <b>domein</b>, dan de <b>host</b>. De puntjes ertussen komen vanzelf.", "Daarna benoem je elk deel en beslis je of SRV-DC01 de naam zelf kan beantwoorden. Opgelet: tussen de tegels zitten afleiders die niet in een FQDN horen."],
      cs: "fqdn" },
    exit: { t: "Exitcheck: welke zone, welk record, wie antwoordt?", p: [
      "ADM-W11-01 gebruikt SRV-DC01 als DNS-server. SRV-DC01 heeft twee eigen zones: <b>campusconnect.test</b> en de reverse zone <b>16.172.in-addr.arpa</b>. Voor alle andere namen stuurt SRV-DC01 de vraag door naar een <b>forwarder</b>.",
      "Kies per query de zone die het antwoord bevat, het recordtype en wie het antwoord geeft."],
      cs: "zones" },
    pred: { t: "Voorspel de uitvoer", p: [
      "Je ziet een PowerShell-commando. <code>Resolve-DnsName</code> vraagt een naam (of IP-adres) op bij DNS. Met <code>-Server 172.16.0.10</code> stuur je de vraag rechtstreeks naar SRV-DC01; met <code>-Type</code> kies je het recordtype.",
      "Voorspel wat er terugkomt. Let vooral op het verschil tussen een <b>negatief antwoord</b> (“DNS name does not exist”) en een <b>time-out</b>."],
      cs: "fail" },
    sim: { t: "Het querypad", p: [
      "Je volgt ADM-W11-01 die een naam opzoekt. ADM-W11-01 gebruikt SRV-DC01 als DNS-server; SRV-DC01 heeft een eigen zone campusconnect.test en een forwarder voor alle andere namen. Bovenaan zie je alle machines; de machine die aan zet is, licht oranje op. Onderaan zie je de caches, het hosts-bestand en de zone van SRV-DC01.",
      "Volgorde op de client: <b>clientcache → hosts-bestand → DNS-server</b>. SRV-DC01 antwoordt zelf voor zijn eigen zone (autoritatief) en stuurt andere vragen door naar de <b>forwarder</b>, die vanaf de root verder zoekt.",
      "5 rondes: interne naam, externe naam, dezelfde vraag opnieuw, een naam die niet bestaat en een bonus over het hosts-bestand."],
      cs: "path" }
  },

  /* ---------- Spiekbrief (theorie, zonder dia's te kennen) ---------- */
  cheat: [
    { id: "lab", t: "De labomgeving van CampusConnect", h:
      "<table><tr><th>Machine</th><th>IP</th><th>Rol</th></tr>" +
      "<tr><td>SRV-DC01</td><td><code>172.16.0.10</code></td><td>Windows Server met de DNS-rol</td></tr>" +
      "<tr><td>ADM-W11-01</td><td><code>10.0.10.10</code></td><td>Windows-client, gebruikt SRV-DC01 als DNS-server</td></tr>" +
      "<tr><td>RTR01</td><td><code>10.0.10.1</code> / <code>172.16.0.1</code></td><td>router tussen clients en servers</td></tr>" +
      "<tr><td>SRV-FILE01</td><td><code>172.16.0.20</code></td><td>fileserver (servernetwerk)</td></tr>" +
      "<tr><td>SRV-WEB01</td><td><code>192.168.100.10</code></td><td>webserver (DMZ)</td></tr></table>" +
      "<p>Clients: 10.0.10.0/24 · servers: 172.16.0.0/16 · DMZ: 192.168.100.0/24.</p>" },
    { id: "zones", t: "Wat staat er op SRV-DC01?", h:
      "<p><b>Zone campusconnect.test</b> (forward: naam → IP)</p><pre>@         SOA    srv-dc01.campusconnect.test.\n@         NS     srv-dc01.campusconnect.test.\nsrv-dc01     A      172.16.0.10\nsrv-web01    A      192.168.100.10\nsrv-file01   A      172.16.0.20\nintranet     CNAME  srv-web01.campusconnect.test.</pre>" +
      "<p><b>Zone 16.172.in-addr.arpa</b> (reverse: IP → naam)</p><pre>10.0   PTR   srv-dc01.campusconnect.test.\n20.0   PTR   srv-file01.campusconnect.test.</pre><p>SRV-WEB01 (192.168.100.10) zit in de DMZ; zijn PTR hoort in een andere reverse zone.</p>" +
      "<p><b>Forwarder</b>: alle andere namen (bv. www.microsoft.com, www.hogent.be) stuurt SRV-DC01 door.</p>" },
    { id: "records", t: "Recordtypes", h:
      "<table><tr><th>Type</th><th>Vertaalt</th></tr>" +
      "<tr><td><b>A</b></td><td>naam → IPv4-adres</td></tr><tr><td><b>AAAA</b></td><td>naam → IPv6-adres</td></tr>" +
      "<tr><td><b>CNAME</b></td><td>alias → andere (echte) naam</td></tr><tr><td><b>PTR</b></td><td>IP-adres → naam (reverse zone)</td></tr>" +
      "<tr><td><b>NS</b></td><td>zone → naamserver die verantwoordelijk is</td></tr><tr><td><b>SOA</b></td><td>zone → beheergegevens: primaire server, serial, timers, duur van negatieve caching</td></tr>" +
      "<tr><td><b>MX</b></td><td>domein → mailserver</td></tr></table>" },
    { id: "fqdn", t: "Een FQDN lezen", h:
      "<p><code>srv-web01 . campusconnect . test .</code></p><p>Van rechts naar links: <b>root</b> (het puntje achteraan) → <b>TLD</b> (topdomein, bv. test, be, com) → <b>domein</b> (bv. campusconnect, hogent) → <b>hostlabel</b> (één computer, bv. srv-web01).</p>" +
      "<p>Een FQDN bevat géén protocol (<code>https://</code>), geen pad (<code>/index.html</code>), geen poort (<code>:443</code>) en geen IP-adres.</p>" },
    { id: "path", t: "De weg van een query", h:
      "<ol><li>ADM-W11-01 kijkt in zijn <b>clientcache</b>.</li><li>Daarna in het <b>hosts-bestand</b> op de eigen pc.</li><li>Dan vraagt hij het aan zijn <b>DNS-server</b> (SRV-DC01): “zoek het voor mij uit” (recursief).</li>" +
      "<li>SRV-DC01 antwoordt zelf als de naam in een <b>eigen zone</b> hoort (autoritatief). Anders kijkt hij in zijn <b>servercache</b>.</li><li>Niet in cache? SRV-DC01 stuurt de vraag naar de <b>forwarder</b>.</li>" +
      "<li>De forwarder zoekt <b>iteratief</b>: root → .com-server → microsoft.com-server. Elke server geeft een verwijzing, alleen de laatste geeft het antwoord.</li><li>Op de terugweg bewaren forwarder, SRV-DC01 en ADM-W11-01 het antwoord in hun cache.</li></ol>" },
    { id: "cache", t: "Caching en TTL", h:
      "<p>Elk antwoord heeft een <b>TTL</b> (Time To Live) in seconden. Zolang de TTL niet op 0 staat, gebruikt de cache het antwoord zonder opnieuw te vragen.</p>" +
      "<p><b>Negatieve caching</b>: ook “bestaat niet” wordt bewaard. Een record dat net is aangemaakt, werkt dus soms pas na <code>Clear-DnsClientCache</code>.</p>" },
    { id: "fail", t: "Drie manieren waarop een query “mislukt”", h:
      "<p><b>Negatief antwoord</b> – “DNS name does not exist”: de server <i>antwoordt</i>, maar de naam bestaat niet. De DNS-service draait dus wel.</p>" +
      "<p><b>Time-out</b>: er komt géén antwoord. Denk aan een gestopte service, firewall, poort 53, netwerk of een verkeerd ingestelde DNS-server.</p>" +
      "<p><b>Foutief positief</b>: er komt een antwoord, maar het is fout (verkeerd record, oude cache, hosts-bestand).</p>" },
    { id: "query", t: "Gewone en gerichte query", h:
      "<p><code>Resolve-DnsName srv-web01.campusconnect.test</code> is een <b>gewone</b> query: via de clientcache, het hosts-bestand en de ingestelde DNS-server.</p>" +
      "<p><code>Resolve-DnsName srv-web01.campusconnect.test -Server 172.16.0.10</code> is een <b>gerichte</b> query: rechtstreeks naar SRV-DC01, zonder hosts-bestand of clientinstelling. <code>172.16.0.10</code> is dus de server die je <i>vraagt</i>, niet het antwoord.</p>" +
      "<p>Werkt de gerichte query wel en de gewone niet? Dan zit het probleem bij de client.</p>" }
  ],

  /* ---------- 4. Querypad-simulatie (dia 15-18, 21) ---------- */
  zone: ["srv-dc01    A      172.16.0.10", "srv-web01   A      192.168.100.10", "srv-file01  A      172.16.0.20",
         "intranet    CNAME  srv-web01.campusconnect.test"],
  rounds: [
    { title: "Ronde 1 · Een interne naam", name: "srv-web01.campusconnect.test", steps: [
      { q: "ADM-W11-01 wil <b>srv-web01.campusconnect.test</b> openen. Waar kijkt hij eerst?", h: "Kijk eerst op de eigen pc, pas daarna in het netwerk.",
        o: ["In zijn eigen clientcache", "Bij SRV-DC01", "Bij de forwarder", "Bij de root-server"], a: 0, on: ["client"],
        e: "Eerst de eigen cache. Die is nog leeg." },
      { q: "Niet in de cache. Wat raadpleegt ADM-W11-01 daarna, nog op zijn eigen pc?", h: "Het bestand C:\\Windows\\System32\\drivers\\etc\\hosts staat ook op ADM-W11-01.",
        o: ["Het hosts-bestand", "De forwarder", "De servercache van SRV-DC01", "Niets meer"], a: 0, on: ["hosts"],
        e: "Het hosts-bestand wordt vóór DNS geraadpleegd. Er staat geen regel voor srv-web01." },
      { q: "Naar wie gaat de vraag nu?", h: "Welke DNS-server is ingesteld op ADM-W11-01?",
        o: ["Naar SRV-DC01, de ingestelde DNS-server", "Rechtstreeks naar de forwarder", "Naar de root-server", "Naar SRV-WEB01 zelf"], a: 0, on: ["dns01"],
        e: "ADM-W11-01 vraagt recursief aan zijn DNS-server: “zoek het voor mij uit”." },
      { q: "Wat doet SRV-DC01 met deze vraag?", h: "Heeft SRV-DC01 een zone voor campusconnect.test? Kijk in het zonevak onderaan.",
        o: ["Antwoordt uit zijn eigen zone campusconnect.test", "Stuurt ze door naar de forwarder", "Vraagt het aan de root-server", "Antwoordt ‘bestaat niet’"], a: 0, on: ["dns01"],
        e: "SRV-DC01 is autoritatief voor campusconnect.test: A 192.168.100.10, TTL 3600. De forwarder doet niets!" },
      { q: "ADM-W11-01 krijgt <b>A 192.168.100.10 (TTL 3600)</b>. Wat doet hij ermee?", h: "Kijk na deze stap naar het vak ‘Clientcache ADM-W11-01’.",
        o: ["Bewaart het in de clientcache voor maximaal 3600 s", "Schrijft het in het hosts-bestand", "Gooit het meteen weg", "Stuurt het naar de forwarder"], a: 0, on: ["client"],
        cache: { where: "client", name: "srv-web01.campusconnect.test", val: "192.168.100.10", ttl: 3600 },
        e: "Positieve caching: de volgende 3600 seconden hoeft ADM-W11-01 niets te vragen." }
    ]},
    { title: "Ronde 2 · Een externe naam", name: "www.microsoft.com", steps: [
      { q: "ADM-W11-01 zoekt <b>www.microsoft.com</b>. Cache en hosts-bestand: niets. Naar wie?", h: "Een client vraagt altijd eerst aan zijn eigen DNS-server.",
        o: ["SRV-DC01", "De forwarder", "De .com-server", "De root-server"], a: 0, on: ["dns01"],
        e: "Altijd eerst naar de ingestelde DNS-server." },
      { q: "SRV-DC01 heeft geen zone microsoft.com. Wat doet hij?", h: "SRV-DC01 heeft alleen een zone voor campusconnect.test (en de reverse zone).",
        o: ["Kijkt in zijn servercache en stuurt daarna door naar de forwarder", "Antwoordt ‘bestaat niet’", "Antwoordt uit campusconnect.test", "Zegt ADM-W11-01 om het zelf te zoeken"], a: 0, on: ["dns01", "fwd"],
        e: "Niet autoritatief, niet in cache → doorsturen naar de forwarder (recursief)." },
      { q: "De forwarder kent het antwoord ook niet. Wie vraagt hij eerst?", h: "Begin bovenaan de DNS-boom.",
        o: ["De root-server", "De .com-server", "De microsoft.com-server", "SRV-DC01"], a: 0, on: ["root"],
        e: "Bovenaan de boom beginnen: de root." },
      { q: "Wat antwoordt de root-server?", h: "De root kent geen namen, alleen wie verantwoordelijk is voor de topdomeinen (.com, .be, …).",
        o: ["Een verwijzing: “vraag het aan de .com-servers”", "Het IP-adres van www.microsoft.com", "“Bestaat niet”", "Hij stuurt de vraag zelf door"], a: 0, on: ["root", "com"],
        e: "Iteratief: de root geeft een verwijzing, geen eindantwoord. De .com-server verwijst daarna naar microsoft.com." },
      { q: "Wie geeft het definitieve antwoord?", h: "Wie is autoritatief voor microsoft.com?",
        o: ["De microsoft.com-server (autoritatief)", "De root-server", "De .com-server", "SRV-DC01"], a: 0, on: ["ms"],
        e: "Alleen de autoritatieve server van microsoft.com kent het adres." },
      { q: "Het antwoord gaat terug langs dezelfde weg. Wie bewaart het in een cache?", h: "Elke server die het antwoord doorgeeft, kan het bewaren.",
        o: ["De forwarder, SRV-DC01 én ADM-W11-01", "Alleen ADM-W11-01", "Alleen de root-server", "Niemand"], a: 0, on: ["fwd", "dns01", "client"],
        cache: [{ where: "dns01", name: "www.microsoft.com", val: "20.70.246.20", ttl: 60 },
                { where: "client", name: "www.microsoft.com", val: "20.70.246.20", ttl: 60 }],
        e: "Elke cache telt de TTL af (hier 60 s, het adres is fictief)." }
    ]},
    { title: "Ronde 3 · Dezelfde vraag opnieuw", name: "www.microsoft.com", steps: [
      { q: "Tien seconden later vraagt ADM-W11-01 opnieuw <b>www.microsoft.com</b>. Wie wordt bevraagd?", h: "Kijk naar de TTL in de clientcache.",
        o: ["Niemand: het antwoord staat in de clientcache", "SRV-DC01", "De forwarder", "Opnieuw de hele keten"], a: 0, on: ["client"],
        e: "Cache-hit: geen enkel netwerkpakket nodig." },
      { q: "Spoel de tijd 60 s vooruit: de TTL is verlopen. Wat gebeurt er bij de volgende vraag?", h: "Wat gebeurt er met een cache-item als de TTL op 0 komt?",
        o: ["ADM-W11-01 vraagt het opnieuw aan SRV-DC01", "ADM-W11-01 gebruikt het oude antwoord toch", "ADM-W11-01 vraagt het rechtstreeks aan microsoft.com", "Het hosts-bestand antwoordt"], a: 0, on: ["dns01"],
        expire: true,
        e: "Verlopen = weg. SRV-DC01 heeft het ook niet meer, dus die vraagt opnieuw aan de forwarder." }
    ]},
    { title: "Ronde 4 · Een naam die niet bestaat", name: "printer99.campusconnect.test", steps: [
      { q: "SRV-DC01 krijgt de vraag voor <b>printer99.campusconnect.test</b>. Er is geen record. Wat antwoordt hij?", h: "SRV-DC01 is autoritatief voor campusconnect.test: als het record er niet staat, bestaat de naam niet.",
        o: ["Negatief antwoord: “DNS name does not exist”", "Hij vraagt het aan de forwarder", "Hij antwoordt niet (time-out)", "Zijn eigen IP-adres"], a: 0, on: ["dns01"],
        e: "SRV-DC01 is autoritatief voor campusconnect.test: als het record er niet is, bestaat de naam niet." },
      { q: "Wat doet ADM-W11-01 met dit negatieve antwoord?", h: "Ook ‘bestaat niet’ is een antwoord met een geldigheidsduur.",
        o: ["Bewaart het ook in de cache (negatieve caching)", "Gooit het meteen weg", "Vraagt het opnieuw aan de forwarder", "Schrijft het in het hosts-bestand"], a: 0, on: ["client"],
        cache: { where: "client", name: "printer99.campusconnect.test", val: "bestaat niet", ttl: 3600, neg: true },
        e: "Ook ‘bestaat niet’ wordt bewaard. De duur staat in het SOA-record." },
      { q: "De beheerder maakt printer99 nu meteen aan. Werkt het meteen op ADM-W11-01?", h: "Kijk in de clientcache: wat staat daar voor printer99?",
        o: ["Nee, pas na Clear-DnsClientCache of als de negatieve cache verlopen is", "Ja, DNS werkt altijd meteen", "Alleen als de forwarder herstart", "Nooit meer"], a: 0, on: ["client"],
        e: "Klassieke valkuil bij troubleshooting: altijd de cache leegmaken vóór je hertest." }
    ]},
    { title: "Bonus · Het hosts-bestand", name: "srv-web01.campusconnect.test", steps: [
      { q: "In het hosts-bestand van ADM-W11-01 staat <b>192.168.100.99 srv-web01.campusconnect.test</b>. Wat geeft een <b>gewone</b> query?", h: "Wat raadpleegt de client nog vóór hij DNS gebruikt?",
        o: ["192.168.100.99", "192.168.100.10", "DNS name does not exist", "time-out"], a: 0, on: ["hosts"],
        hosts: true,
        e: "Het hosts-bestand wint van DNS." },
      { q: "En de <b>gerichte</b> query <code>Resolve-DnsName srv-web01.campusconnect.test -Server 172.16.0.10</code>?", h: "Een gerichte query gaat rechtstreeks naar de DNS-server. Kijk in het zonevak.",
        o: ["192.168.100.10", "192.168.100.99", "172.16.0.10", "DNS name does not exist"], a: 0, on: ["dns01"],
        e: "Een gerichte query gaat rechtstreeks naar SRV-DC01 en slaat het hosts-bestand over. 172.16.0.10 is SRV-DC01 zelf, de server die je <i>vraagt</i>. Het <i>antwoord</i> komt uit de zone: srv-web01 A 192.168.100.10. Gewoon ≠ gericht? Dan zit het probleem bij de client." }
    ]}
  ]
};
