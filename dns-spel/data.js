/* Inhoud van de DNS-oefeningen. Aanpassen kan hier zonder de code te raken. */
window.DNSDATA = {

  /* ---------- 1. Welk record? (dia 13) ---------- */
  records: [
    { t: "A",     c: "#000000", d: "naam → IPv4" , l: "een naam naar een IPv4-adres" },
    { t: "AAAA",  c: "#5a5a5a", d: "naam → IPv6" , l: "een naam naar een IPv6-adres" },
    { t: "CNAME", c: "#919E2C", d: "alias → naam" , l: "een alias naar een andere (echte) naam" },
    { t: "PTR",   c: "#EB6008", d: "IP → naam" , l: "een IP-adres naar een naam (in een reverse zone)" },
    { t: "NS",    c: "#7C5EAC", d: "zone → naamserver" , l: "een zone naar de naamserver die ervoor verantwoordelijk is" },
    { t: "SOA",   c: "#A6090F", d: "zone → beheer" , l: "een zone naar haar beheergegevens: primaire server, serial, timers en de duur van negatieve caching" },
    { t: "MX",    c: "#14799B", d: "domein → mail" , l: "een domein naar zijn mailserver" }
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
      f: { zone: "campusconnect.test", type: "A", who: "SRV-DC01 (autoritatief)" },
      x: {"zone": "De naam eindigt op campusconnect.test: dat is een eigen zone van SRV-DC01.", "type": "Je zoekt het IPv4-adres bij een naam: een A-record (srv-file01 A 172.16.0.20).", "who": "SRV-DC01 heeft die zone zelf en antwoordt dus autoritatief. De forwarder komt er niet aan te pas."} },
    { cmd: "Resolve-DnsName 172.16.0.20",
      f: { zone: "16.172.in-addr.arpa", type: "PTR", who: "SRV-DC01 (autoritatief)" },
      x: {"zone": "Je zoekt de naam bij een IP-adres: dat gebeurt in een reverse zone. 172.16.0.20 ligt in 172.16.0.0/16, dus in 16.172.in-addr.arpa.", "type": "IP-adres → naam is een PTR-record (20.0 PTR srv-file01.campusconnect.test).", "who": "De reverse zone staat op SRV-DC01, dus hij antwoordt zelf (autoritatief)."} },
    { cmd: "Resolve-DnsName www.hogent.be",
      f: { zone: "geen eigen zone", type: "A", who: "via de forwarder (of cache)" },
      x: {"zone": "hogent.be is geen zone van SRV-DC01: hij heeft alleen campusconnect.test en de reverse zone 16.172.in-addr.arpa.", "type": "Je zoekt het adres van een website: een A-record (naam → IPv4-adres).", "who": "SRV-DC01 kent hogent.be niet. Hij kijkt in zijn servercache en stuurt de vraag anders door naar de forwarder."} },
    { cmd: "Resolve-DnsName intranet.campusconnect.test",
      f: { zone: "campusconnect.test", type: "CNAME + A", who: "SRV-DC01 (autoritatief)" },
      x: {"zone": "De naam eindigt op campusconnect.test: dat is een eigen zone van SRV-DC01.", "type": "intranet is een alias. SRV-DC01 geeft het CNAME-record (intranet → srv-web01) en meteen het A-record van srv-web01 erbij (192.168.100.10).", "who": "Beide records staan in de eigen zone van SRV-DC01: hij antwoordt autoritatief."} }
  ],
  /* Waarom een gekozen (fout) antwoord niet klopt, per keuzemogelijkheid */
  exitWhy: {
    "het hosts-bestand": "In het hosts-bestand van ADM-W11-01 staan in deze situatie geen regels. Het antwoord komt dus van DNS.",
    "NS": "Een NS-record zegt wie de naamserver van een zone is. Dat krijg je alleen als je er expliciet om vraagt (-Type NS).",
    "geen eigen zone": "Kijk naar het rechterdeel van de naam: hoort die bij campusconnect.test of bij de reverse zone 16.172.in-addr.arpa?",
    "via de forwarder (of cache)": "De forwarder krijgt alleen vragen over namen die niet in een eigen zone van SRV-DC01 staan.",
    "SRV-DC01 (autoritatief)": "SRV-DC01 is alleen autoritatief voor zijn eigen zones: campusconnect.test en 16.172.in-addr.arpa.",
    "campusconnect.test": "Die zone bevat alleen namen die eindigen op campusconnect.test.",
    "16.172.in-addr.arpa": "Dat is de reverse zone: die gebruik je alleen als je bij een IP-adres (172.16.x.x) de naam zoekt.",
    "A": "Een A-record geeft het IPv4-adres bij een gewone naam. Is de naam een alias, of zoek je een naam bij een IP-adres, dan heb je iets anders nodig.",
    "PTR": "Een PTR-record gebruik je alleen om bij een IP-adres de naam te zoeken (in een reverse zone).",
    "CNAME + A": "Dat krijg je alleen als de naam een alias (CNAME) is die naar een andere naam wijst."
  },
  exitFields: {
    zone: { l: "Zone", o: ["campusconnect.test", "16.172.in-addr.arpa", "geen eigen zone"] },
    type: { l: "Recordtype", o: ["A", "PTR", "CNAME + A", "NS"] },
    who:  { l: "Wie antwoordt?", o: ["SRV-DC01 (autoritatief)", "via de forwarder (of cache)", "het hosts-bestand"] }
  },

  /* ---------- 3b. Voorspel de uitvoer (dia 34 + extra) ---------- */
  predict: [
    { cmd: "Resolve-DnsName srv-file01.campusconnect.test -Server 172.16.0.10", h: "Kijk in het kader ‘Situatie’ hierboven: welk record staat er voor srv-file01 in de zone campusconnect.test?",
      o: ["A  172.16.0.20", "CNAME  srv-web01.campusconnect.test", "DNS name does not exist", "time-out"], a: 0, w: [null, "Een CNAME is een alias die naar een andere naam wijst. In de zone heeft srv-file01 geen CNAME, maar een A-record.", "Dat krijg je als de naam niet in de zone staat. srv-file01 staat er wél in: srv-file01 A 172.16.0.20.", "Een time-out betekent dat er géén antwoord komt, bv. omdat de DNS-service gestopt is. Hier draait SRV-DC01 gewoon."],
      e: "Je vraagt rechtstreeks aan SRV-DC01 (-Server 172.16.0.10). Die heeft de zone campusconnect.test, en daarin staat srv-file01 A 172.16.0.20. Dat A-record krijg je terug." },
    { cmd: "Resolve-DnsName intranet.campusconnect.test -Type CNAME -Server 172.16.0.10", h: "Met -Type CNAME vraag je alleen het aliasrecord op.",
      o: ["A  192.168.100.10", "CNAME  srv-web01.campusconnect.test", "PTR  srv-web01.campusconnect.test", "NS  srv-dc01.campusconnect.test"], a: 1, w: ["Dat is het adres waar je uiteindelijk uitkomt, maar met -Type CNAME vraag je alleen het aliasrecord zelf op. Dat wijst naar een naam, niet naar een IP-adres.", null, "Een PTR-record vertaalt een IP-adres naar een naam en staat in de reverse zone. intranet is een naam, geen IP-adres.", "Het NS-record hoort bij de zone zelf (@), niet bij intranet. Het zegt wie de naamserver van de zone is."],
      e: "In de zone staat: intranet CNAME srv-web01.campusconnect.test. Met -Type CNAME krijg je precies dat record: de alias wijst naar de echte naam srv-web01, niet naar een IP-adres." },
    { cmd: "Resolve-DnsName campusconnect.test -Type NS -Server 172.16.0.10", h: "-Type NS vraagt wie de naamserver van de zone is.",
      o: ["A  172.16.0.10", "SOA  hostmaster", "NS  srv-dc01.campusconnect.test", "DNS name does not exist"], a: 2, w: ["172.16.0.10 is het adres van SRV-DC01, maar met -Type NS vraag je niet naar een adres. Je vraagt wie de naamserver van de zone is: dat is een naam.", "Het SOA-record bevat de beheergegevens van de zone (serial, timers). Je vroeg -Type NS, dus je krijgt het NS-record.", null, "De zone campusconnect.test bestaat wel op SRV-DC01, en elke zone heeft een NS-record."],
      e: "In de zone staat: @ NS srv-dc01.campusconnect.test. (@ betekent: de zone zelf). Het NS-record wijst naar de naam van de naamserver; die naam heeft zelf een A-record." },
    { cmd: "Resolve-DnsName printer99.campusconnect.test -Server 172.16.0.10", h: "Staat printer99 in de zone? En kan SRV-DC01 dat met zekerheid zeggen?",
      o: ["time-out", "DNS name does not exist", "A  0.0.0.0", "antwoord van de forwarder"], a: 1, w: ["Een time-out betekent: geen antwoord. SRV-DC01 draait wel, dus hij antwoordt.", null, "DNS verzint geen adres. Als er geen record is, krijg je ook geen IP-adres terug.", "SRV-DC01 is autoritatief voor campusconnect.test. Voor namen in die zone vraagt hij niets aan de forwarder: wat niet in de zone staat, bestaat niet."],
      e: "printer99 staat niet in de zone campusconnect.test. Omdat SRV-DC01 autoritatief is voor die zone, weet hij zeker dat de naam niet bestaat en geeft hij een negatief antwoord: “DNS name does not exist”." },
    { s: "Stel: de reverse zone 16.172.in-addr.arpa bestaat nog <b>niet</b>.", cmd: "Resolve-DnsName 172.16.0.20 -Server 172.16.0.10", h: "Een A-record werkt alleen van naam naar adres.",
      o: ["srv-file01.campusconnect.test", "Geen naam: er bestaat geen PTR", "A  172.16.0.20", "intranet.campusconnect.test"], a: 1, w: ["Die naam vind je alleen via een PTR-record in een reverse zone, en die zone bestaat hier nog niet. Het A-record helpt niet: dat werkt alleen van naam naar adres.", null, "Je zoekt een naam bij een IP-adres. Een A-record werkt net in de omgekeerde richting: het geeft een adres bij een naam.", "intranet is een alias (CNAME) voor srv-web01, niet voor 172.16.0.20. En zonder reverse zone kan SRV-DC01 sowieso geen naam bij een IP-adres geven."],
      e: "Een naam zoeken bij een IP-adres (reverse lookup) gebeurt in een reverse zone met PTR-records. Die zone (16.172.in-addr.arpa) bestaat hier nog niet, dus er komt geen naam terug. De A-records in campusconnect.test werken alleen van naam naar adres." },
    { s: "Stel: de DNS-service op SRV-DC01 is <b>gestopt</b> (de server zelf staat aan).", cmd: "Resolve-DnsName srv-web01.campusconnect.test -Server 172.16.0.10", h: "Een gestopte service kan helemaal niets terugsturen.",
      o: ["DNS name does not exist", "time-out: geen antwoord", "A  192.168.100.10 uit cache van SRV-DC01", "antwoord van de forwarder"], a: 1, w: ["Een negatief antwoord is wél een antwoord: daarvoor moet de DNS-service draaien. Een gestopte service zegt helemaal niets.", null, "De servercache hoort bij de DNS-service. Staat de service stil, dan antwoordt ook de cache niet.", "Alleen een draaiende DNS-service kan vragen doorsturen naar de forwarder. Een gestopte service stuurt niets door."],
      e: "Met -Server 172.16.0.10 vraag je rechtstreeks aan SRV-DC01. De server staat aan, maar het programma dat DNS-vragen beantwoordt (de DNS-service) niet. Niemand antwoordt, dus Resolve-DnsName geeft na een tijd op: time-out." },
    { s: "SRV-DC01 heeft een forwarder ingesteld.", cmd: "Gaat de query voor srv-web01.campusconnect.test naar de forwarder?", h: "Is SRV-DC01 zelf verantwoordelijk (autoritatief) voor campusconnect.test?",
      o: ["Ja, alle query's gaan naar de forwarder", "Nee, SRV-DC01 is autoritatief voor campusconnect.test", "Alleen als de cache leeg is", "Alleen bij een gerichte query"], a: 1, w: ["Niet alle query's: de forwarder krijgt alleen vragen die SRV-DC01 zelf niet kan beantwoorden.", null, "Voor zijn eigen zone heeft SRV-DC01 de cache niet nodig: hij leest het antwoord rechtstreeks uit de zone. De forwarder komt er nooit aan te pas.", "Gericht of gewoon maakt niet uit: beide komen bij SRV-DC01 terecht, en die antwoordt zelf uit zijn zone."],
      e: "srv-web01.campusconnect.test hoort in de zone campusconnect.test, en die zone staat op SRV-DC01. Hij is dus autoritatief en antwoordt zelf. Alleen namen buiten zijn eigen zones (en niet in de cache) gaan naar de forwarder." }
  ],
  reasoning: {
    q: "Een student zegt: “srv-web01 geeft <b>DNS name does not exist</b>, dus de DNS-service staat uit.” Wat klopt?",
    o: ["Dat klopt: de service staat uit.",
        "Fout: de server antwoordt, dus de service draait. Kijk naar zone, record of cache.",
        "Fout: het is een probleem met de forwarder.",
        "Fout: ADM-W11-01 heeft geen IP-adres."], a: 1, w: ["Een gestopte service antwoordt niet: dan krijg je een time-out. ‘DNS name does not exist’ is een antwoord, dus de service draait.", null, "Voor campusconnect.test komt de forwarder niet aan bod: SRV-DC01 is daar zelf autoritatief voor.", "Zonder IP-adres zou ADM-W11-01 SRV-DC01 niet eens bereiken. Dan krijg je een time-out of netwerkfout, geen antwoord van de server."],
    e: "Een negatief antwoord IS een antwoord. Bij een gestopte service krijg je een time-out."
  },


  /* ---------- Situatie (zichtbaar bij elke vraag) ---------- */
  situatie: "<p><b>ADM-W11-01</b> (10.0.10.10, clientnetwerk) gebruikt <b>SRV-DC01</b> (172.16.0.10, servernetwerk) als DNS-server; de vraag gaat via router RTR01. SRV-DC01 heeft twee eigen zones en stuurt alle andere namen door naar een <b>forwarder</b>.</p>" +
    "<pre>Zone campusconnect.test\n@         SOA    srv-dc01.campusconnect.test.\n@         NS     srv-dc01.campusconnect.test.\nsrv-dc01     A      172.16.0.10\nsrv-web01    A      192.168.100.10\nsrv-file01   A      172.16.0.20\nintranet     CNAME  srv-web01.campusconnect.test.\n\nZone 16.172.in-addr.arpa\n10.0         PTR    srv-dc01.campusconnect.test.\n20.0         PTR    srv-file01.campusconnect.test.</pre>",

  /* ---------- Introschermen per spel ---------- */
  infoTip: "Twijfel je? Tik rechtsboven op <b>ⓘ Info</b>. Daar vind je de theorie, de labomgeving en wat er op SRV-DC01 staat. Dat is geen spieken: ook een systeembeheerder zoekt dingen op in de documentatie.",
  intros: {
    recordquiz: { t: "Welk record?", p: [
      "Een DNS-server bewaart gegevens als <b>resource records</b>. Elk recordtype vertaalt iets anders: een naam naar een IP-adres, een IP-adres naar een naam, een alias naar een naam …",
      "Je krijgt 10 situaties uit het netwerk van CampusConnect. Kies telkens het recordtype dat je nodig hebt. Elke knop vertelt kort wat dat type vertaalt."],
      cs: "records" },
    fqdn: { t: "FQDN-puzzel", p: [
      "Een <b>FQDN</b> (Fully Qualified Domain Name) is de volledige naam van een computer, bv. <code>srv-web01.campusconnect.test.</code>",
      "Je leest hem van <b>rechts naar links</b>: root (het puntje achteraan) → TLD (<code>test</code>) → domein (<code>campusconnect</code>) → hostlabel (<code>srv-web01</code>).",
      "Per ronde krijg je een adres (een URL of een netwerkpad). Haal daar de FQDN van de server uit. Je bouwt de naam zoals DNS hem leest: <b>van rechts naar links</b>. De root (het puntje) staat al klaar; tik eerst het <b>TLD</b>, dan het <b>domein</b>, dan de <b>host</b>. De puntjes ertussen komen vanzelf.", "Daarna benoem je elk deel. Tot slot beslis je of <b>SRV-DC01</b>, de DNS-server van CampusConnect met de eigen zone <b>campusconnect.test</b>, de naam zelf kan beantwoorden of moet doorsturen naar een forwarder. Opgelet: tussen de tegels zitten afleiders die niet in een FQDN horen."],
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

  /* ---------- Info (theorie, zonder dia's te kennen) ---------- */
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
        o: ["In zijn eigen clientcache", "Bij SRV-DC01", "Bij de forwarder", "Bij de root-server"], a: 0, w: [null, "Dat komt later. Eerst kijkt ADM-W11-01 op zijn eigen pc: misschien kent hij het antwoord al uit zijn cache, dan is er geen netwerkverkeer nodig.", "De client praat nooit rechtstreeks met de forwarder. Alleen SRV-DC01 stuurt vragen door naar de forwarder.", "De client praat nooit met de root-server. Dat doet de forwarder, en alleen als niemand eerder het antwoord kent."], on: ["client"],
        e: "Een DNS-client kijkt altijd eerst in zijn eigen clientcache. Staat het antwoord daar, dan is er geen netwerkverkeer nodig. Hier is de cache nog leeg." },
      { q: "Niet in de cache. Wat raadpleegt ADM-W11-01 daarna, nog op zijn eigen pc?", h: "Het bestand C:\\Windows\\System32\\drivers\\etc\\hosts staat ook op ADM-W11-01.",
        o: ["Het hosts-bestand", "De forwarder", "De servercache van SRV-DC01", "Niets meer"], a: 0, w: [null, "De forwarder staat buiten de pc, en de client spreekt hem nooit rechtstreeks aan.", "Die cache staat op SRV-DC01, niet op ADM-W11-01. De vraag zegt: nog op zijn eigen pc.", "Er is nog één bron op de pc zelf: het hosts-bestand (C:\\Windows\\System32\\drivers\\etc\\hosts)."], on: ["hosts"],
        e: "Na de clientcache kijkt Windows in het hosts-bestand op de eigen pc. Pas als ook daar niets staat, gaat de vraag het netwerk op. Er staat geen regel voor srv-web01." },
      { q: "Naar wie gaat de vraag nu?", h: "Welke DNS-server is ingesteld op ADM-W11-01?",
        o: ["Naar SRV-DC01, de ingestelde DNS-server", "Rechtstreeks naar de forwarder", "Naar de root-server", "Naar SRV-WEB01 zelf"], a: 0, w: [null, "De client kent de forwarder niet. Op ADM-W11-01 staat alleen SRV-DC01 (172.16.0.10) als DNS-server ingesteld.", "De client vraagt nooit zelf aan de root-server. Hij vraagt het aan zijn DNS-server en laat die het werk doen (recursief).", "SRV-WEB01 is een webserver, geen DNS-server. Bovendien kent ADM-W11-01 zijn adres nog niet: dat is net wat hij zoekt."], on: ["dns01"],
        e: "Op ADM-W11-01 is SRV-DC01 (172.16.0.10) ingesteld als DNS-server. Daar gaat de vraag naartoe, met de boodschap “zoek het voor mij uit” (recursieve query)." },
      { q: "Wat doet SRV-DC01 met deze vraag?", h: "Heeft SRV-DC01 een zone voor campusconnect.test? Kijk in het zonevak onderaan.",
        o: ["Antwoordt uit zijn eigen zone campusconnect.test", "Stuurt ze door naar de forwarder", "Vraagt het aan de root-server", "Antwoordt ‘bestaat niet’"], a: 0, w: [null, "De forwarder is alleen voor namen die SRV-DC01 zelf niet kent. campusconnect.test is zijn eigen zone.", "SRV-DC01 heeft de zone campusconnect.test zelf: hij hoeft niemand iets te vragen.", "srv-web01 staat wél in de zone (kijk in het zonevak): srv-web01 A 192.168.100.10."], on: ["dns01"],
        e: "SRV-DC01 heeft de zone campusconnect.test, en daarin staat srv-web01 A 192.168.100.10. Hij is autoritatief en antwoordt meteen zelf (TTL 3600). De forwarder doet niets!" },
      { q: "ADM-W11-01 krijgt <b>A 192.168.100.10 (TTL 3600)</b>. Wat doet hij ermee?", h: "Kijk na deze stap naar het vak ‘Clientcache ADM-W11-01’.",
        o: ["Bewaart het in de clientcache voor maximaal 3600 s", "Schrijft het in het hosts-bestand", "Gooit het meteen weg", "Stuurt het naar de forwarder"], a: 0, w: [null, "Het hosts-bestand vult alleen de beheerder in. DNS-antwoorden komen in de cache, niet in het hosts-bestand.", "Dan zou hij bij elke klik opnieuw moeten vragen. Daarom bewaart hij het antwoord zolang de TTL het toelaat.", "De forwarder heeft er niets mee te maken: het antwoord kwam van SRV-DC01 en is nu bij de client."], on: ["client"],
        cache: { where: "client", name: "srv-web01.campusconnect.test", val: "192.168.100.10", ttl: 3600 },
        e: "Positieve caching: de client bewaart het antwoord zo lang als de TTL zegt (3600 s). Zolang hoeft ADM-W11-01 niets meer te vragen." }
    ]},
    { title: "Ronde 2 · Een externe naam", name: "www.microsoft.com", steps: [
      { q: "ADM-W11-01 zoekt <b>www.microsoft.com</b>. Cache en hosts-bestand: niets. Naar wie?", h: "Een client vraagt altijd eerst aan zijn eigen DNS-server.",
        o: ["SRV-DC01", "De forwarder", "De .com-server", "De root-server"], a: 0, w: [null, "De client kent alleen zijn ingestelde DNS-server (SRV-DC01). Dat SRV-DC01 een forwarder gebruikt, weet de client niet.", "De client zoekt nooit zelf de .com-server op. Dat werk laat hij over aan zijn DNS-server.", "De client vraagt nooit zelf aan de root-server. Hij vraagt het aan SRV-DC01: “zoek het voor mij uit”."], on: ["dns01"],
        e: "Een client vraagt altijd aan zijn ingestelde DNS-server, ook voor externe namen. Wat er daarna gebeurt, is het werk van SRV-DC01." },
      { q: "SRV-DC01 heeft geen zone microsoft.com. Wat doet hij?", h: "SRV-DC01 heeft alleen een zone voor campusconnect.test (en de reverse zone).",
        o: ["Kijkt in zijn servercache en stuurt daarna door naar de forwarder", "Antwoordt ‘bestaat niet’", "Antwoordt uit campusconnect.test", "Zegt ADM-W11-01 om het zelf te zoeken"], a: 0, w: [null, "‘Bestaat niet’ mag SRV-DC01 alleen zeggen voor zijn eigen zone. Over microsoft.com weet hij niets, dus hij moet het navragen.", "www.microsoft.com eindigt niet op campusconnect.test; de naam hoort dus niet in die zone.", "De client vroeg recursief: “zoek het voor mij uit”. SRV-DC01 moet het antwoord dus zelf gaan halen."], on: ["dns01", "fwd"],
        e: "SRV-DC01 is niet autoritatief voor microsoft.com. Hij kijkt eerst in zijn servercache; die is leeg. Dan stuurt hij de vraag door naar de forwarder." },
      { q: "De forwarder kent het antwoord ook niet. Wie vraagt hij eerst?", h: "Begin bovenaan de DNS-boom.",
        o: ["De root-server", "De .com-server", "De microsoft.com-server", "SRV-DC01"], a: 0, w: [null, "De forwarder weet nog niet welke server verantwoordelijk is voor .com. Dat hoort hij van de root.", "De forwarder weet nog niet waar de microsoft.com-server staat. Die zoektocht begint bovenaan, bij de root.", "SRV-DC01 heeft de vraag net doorgestuurd omdat hij het antwoord niet kent. Terugvragen heeft geen zin."], on: ["root"],
        e: "Wie niets weet, begint bovenaan de DNS-boom: bij de root (het puntje achteraan in www.microsoft.com.). Van daaruit gaat het stap voor stap naar beneden." },
      { q: "Wat antwoordt de root-server?", h: "De root kent geen namen, alleen wie verantwoordelijk is voor de topdomeinen (.com, .be, …).",
        o: ["Een verwijzing: “vraag het aan de .com-servers”", "Het IP-adres van www.microsoft.com", "“Bestaat niet”", "Hij stuurt de vraag zelf door"], a: 0, w: [null, "De root kent geen individuele namen. Hij weet alleen welke servers verantwoordelijk zijn voor de topdomeinen (.com, .be, …).", "De naam bestaat wel. De root weet het antwoord gewoon niet zelf, maar weet wie verder kan helpen.", "Root-servers zoeken niet voor anderen. Ze geven een verwijzing en de forwarder vraagt zelf verder: dat heet iteratief."], on: ["root", "com"],
        e: "Iteratief: de root geeft een verwijzing, geen eindantwoord. De .com-server verwijst daarna naar microsoft.com." },
      { q: "Wie geeft het definitieve antwoord?", h: "Wie is autoritatief voor microsoft.com?",
        o: ["De microsoft.com-server (autoritatief)", "De root-server", "De .com-server", "SRV-DC01"], a: 0, w: [null, "De root gaf alleen een verwijzing naar de .com-servers.", "De .com-server weet alleen wie verantwoordelijk is voor microsoft.com en geeft dus ook een verwijzing.", "SRV-DC01 kent microsoft.com niet: daarom stuurde hij de vraag net door."], on: ["ms"],
        e: "Alleen de server die autoritatief is voor microsoft.com heeft het record voor www. Root en .com geven enkel verwijzingen." },
      { q: "Het antwoord gaat terug langs dezelfde weg. Wie bewaart het in een cache?", h: "Elke server die het antwoord doorgeeft, kan het bewaren.",
        o: ["De forwarder, SRV-DC01 én ADM-W11-01", "Alleen ADM-W11-01", "Alleen de root-server", "Niemand"], a: 0, w: [null, "Ook de DNS-servers onderweg bewaren het antwoord. Zo kan SRV-DC01 een volgende client meteen helpen.", "De root heeft het eindantwoord nooit gezien: hij gaf alleen een verwijzing.", "Elke server die het antwoord doorgeeft, bewaart het zolang de TTL het toelaat. Zo wordt DNS sneller."], on: ["fwd", "dns01", "client"],
        cache: [{ where: "dns01", name: "www.microsoft.com", val: "20.70.246.20", ttl: 60 },
                { where: "client", name: "www.microsoft.com", val: "20.70.246.20", ttl: 60 }],
        e: "Elke cache telt de TTL af (hier 60 s, het adres is fictief)." }
    ]},
    { title: "Ronde 3 · Dezelfde vraag opnieuw", name: "www.microsoft.com", steps: [
      { q: "Tien seconden later vraagt ADM-W11-01 opnieuw <b>www.microsoft.com</b>. Wie wordt bevraagd?", h: "Kijk naar de TTL in de clientcache.",
        o: ["Niemand: het antwoord staat in de clientcache", "SRV-DC01", "De forwarder", "Opnieuw de hele keten"], a: 0, w: [null, "Het antwoord staat nog in de clientcache van ADM-W11-01 (de TTL is niet verlopen). Hij hoeft het dus aan niemand te vragen.", "De client vraagt nooit rechtstreeks aan de forwarder, en hier hoeft hij zelfs niets te vragen.", "De TTL is nog niet verlopen: het antwoord staat nog in de cache."], on: ["client"],
        e: "De TTL was 60 s en er zijn pas 10 s voorbij. Het antwoord staat nog in de clientcache: cache-hit, geen enkel netwerkpakket nodig." },
      { q: "Spoel de tijd 60 s vooruit: de TTL is verlopen. Wat gebeurt er bij de volgende vraag?", h: "Wat gebeurt er met een cache-item als de TTL op 0 komt?",
        o: ["ADM-W11-01 vraagt het opnieuw aan SRV-DC01", "ADM-W11-01 gebruikt het oude antwoord toch", "ADM-W11-01 vraagt het rechtstreeks aan microsoft.com", "Het hosts-bestand antwoordt"], a: 0, w: [null, "Na de TTL is het antwoord weg uit de cache. Het mag niet meer gebruikt worden, want het kan intussen veranderd zijn.", "De client vraagt altijd aan zijn ingestelde DNS-server. Hij weet niet eens waar de microsoft.com-server staat.", "In het hosts-bestand staat niets over www.microsoft.com."], on: ["dns01"],
        expire: true,
        e: "Verlopen = weg. SRV-DC01 heeft het ook niet meer, dus die vraagt opnieuw aan de forwarder." }
    ]},
    { title: "Ronde 4 · Een naam die niet bestaat", name: "printer99.campusconnect.test", steps: [
      { q: "SRV-DC01 krijgt de vraag voor <b>printer99.campusconnect.test</b>. Er is geen record. Wat antwoordt hij?", h: "SRV-DC01 is autoritatief voor campusconnect.test: als het record er niet staat, bestaat de naam niet.",
        o: ["Negatief antwoord: “DNS name does not exist”", "Hij vraagt het aan de forwarder", "Hij antwoordt niet (time-out)", "Zijn eigen IP-adres"], a: 0, w: [null, "Voor zijn eigen zone vraagt SRV-DC01 niets aan de forwarder. Wat niet in campusconnect.test staat, bestaat niet.", "De service draait en de server weet het antwoord: de naam bestaat niet. Dat zegt hij dan ook.", "DNS verzint nooit een adres. Geen record betekent geen adres."], on: ["dns01"],
        e: "SRV-DC01 is autoritatief voor campusconnect.test: als het record er niet is, bestaat de naam niet." },
      { q: "Wat doet ADM-W11-01 met dit negatieve antwoord?", h: "Ook ‘bestaat niet’ is een antwoord met een geldigheidsduur.",
        o: ["Bewaart het ook in de cache (negatieve caching)", "Gooit het meteen weg", "Vraagt het opnieuw aan de forwarder", "Schrijft het in het hosts-bestand"], a: 0, w: [null, "Ook ‘bestaat niet’ wordt bewaard, zodat de client niet steeds opnieuw dezelfde vraag stelt.", "De client vraagt nooit aan de forwarder. Bovendien gaf SRV-DC01 al een definitief antwoord.", "Het hosts-bestand vult alleen de beheerder in, nooit DNS zelf."], on: ["client"],
        cache: { where: "client", name: "printer99.campusconnect.test", val: "bestaat niet", ttl: 3600, neg: true },
        e: "Ook ‘bestaat niet’ wordt bewaard. De duur staat in het SOA-record." },
      { q: "De beheerder maakt printer99 nu meteen aan. Werkt het meteen op ADM-W11-01?", h: "Kijk in de clientcache: wat staat daar voor printer99?",
        o: ["Nee, pas na Clear-DnsClientCache of als de negatieve cache verlopen is", "Ja, DNS werkt altijd meteen", "Alleen als de forwarder herstart", "Nooit meer"], a: 0, w: [null, "In de clientcache staat nog ‘printer99 bestaat niet’. Zolang dat er staat, vraagt de client het niet opnieuw.", "De forwarder heeft hier niets mee te maken: het negatieve antwoord zit in de clientcache van ADM-W11-01.", "Het negatieve antwoord heeft een TTL. Na Clear-DnsClientCache of na het verlopen van die TTL vraagt de client het opnieuw en werkt het wel."], on: ["client"],
        e: "In de clientcache staat nog het negatieve antwoord. Zolang de TTL loopt, gebruikt ADM-W11-01 dat. Leeg de cache met Clear-DnsClientCache (of wacht) en test opnieuw. Klassieke valkuil bij troubleshooting!" }
    ]},
    { title: "Bonus · Het hosts-bestand", name: "srv-web01.campusconnect.test", steps: [
      { q: "In het hosts-bestand van ADM-W11-01 staat <b>192.168.100.99 srv-web01.campusconnect.test</b>. Wat geeft een <b>gewone</b> query?", h: "Wat raadpleegt de client nog vóór hij DNS gebruikt?",
        o: ["192.168.100.99", "192.168.100.10", "DNS name does not exist", "time-out"], a: 0, w: [null, "Dat adres staat in de zone, maar een gewone query kijkt eerst in het hosts-bestand. Daar staat al een regel voor srv-web01.", "Het hosts-bestand geeft al een antwoord voor srv-web01, dus DNS komt er niet aan te pas.", "Het hosts-bestand geeft meteen een antwoord; er wordt niets op het netwerk gevraagd."], on: ["hosts"],
        hosts: true,
        e: "Een gewone query volgt de volgorde clientcache → hosts-bestand → DNS-server. In het hosts-bestand staat 192.168.100.99 srv-web01.campusconnect.test, dus dat antwoord wint, ook al is het fout." },
      { q: "En de <b>gerichte</b> query <code>Resolve-DnsName srv-web01.campusconnect.test -Server 172.16.0.10</code>?", h: "Een gerichte query gaat rechtstreeks naar de DNS-server. Kijk in het zonevak.",
        o: ["192.168.100.10", "192.168.100.99", "172.16.0.10", "DNS name does not exist"], a: 0, w: [null, "Dat adres komt uit het hosts-bestand. Een gerichte query (-Server) slaat het hosts-bestand over en vraagt rechtstreeks aan SRV-DC01.", "172.16.0.10 is SRV-DC01 zelf: de server die je vraagt, niet het antwoord.", "srv-web01 staat wel in de zone van SRV-DC01."], on: ["dns01"],
        e: "Een gerichte query gaat rechtstreeks naar SRV-DC01 en slaat het hosts-bestand over. 172.16.0.10 is SRV-DC01 zelf, de server die je <i>vraagt</i>. Het <i>antwoord</i> komt uit de zone: srv-web01 A 192.168.100.10. Gewoon ≠ gericht? Dan zit het probleem bij de client." }
    ]}
  ]
};
