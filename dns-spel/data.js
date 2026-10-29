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
    { q: "Gebruikers typen <b>intranet</b> en moeten bij WEB01 uitkomen.", a: "CNAME",
      e: "Een alias wijst naar een andere naam (web01.campusconnect.test), die zelf een A-record heeft." },
    { q: "Een logboek toont <b>192.168.10.30</b>. Je wil de naam van die computer zien.", a: "PTR",
      e: "Van IP-adres naar naam = reverse lookup = PTR-record in de reverse zone." },
    { q: "<b>file01.campusconnect.test</b> moet naar 192.168.10.30 wijzen.", a: "A",
      e: "Naam → IPv4-adres: dat is een A-record." },
    { q: "Welke server is verantwoordelijk (autoritatief) voor <b>campusconnect.test</b>?", a: "NS",
      e: "Het NS-record wijst de naamserver van de zone aan. Die naam heeft zelf ook een A-record nodig." },
    { q: "Een secundaire server wil weten of de zone <b>gewijzigd</b> is.", a: "SOA",
      e: "Het serienummer in het SOA-record stijgt bij elke wijziging." },
    { q: "Mail voor <b>@campusconnect.test</b> moet bij MAIL01 aankomen.", a: "MX",
      e: "Een MX-record wijst de mailserver van een domein aan. (Zijsprong: configureren we niet.)" },
    { q: "WEB01 moet ook bereikbaar zijn via het IPv6-adres <b>fd00::20</b>.", a: "AAAA",
      e: "AAAA is de IPv6-tegenhanger van A." },
    { q: "nslookup op CLIENT01 toont <b>Server: UnKnown</b> voor 192.168.10.10. Welk record ontbreekt?", a: "PTR",
      e: "nslookup zoekt de naam van de DNS-server op via reverse lookup. Zonder PTR voor .10: ‘UnKnown’." },
    { q: "Waar lees je hoe lang een <b>negatief antwoord</b> (‘bestaat niet’) in cache mag blijven?", a: "SOA",
      e: "Het laatste veld van het SOA-record (minimum TTL) bepaalt de negatieve caching." },
    { q: "<b>www.campusconnect.test</b> moet hetzelfde tonen als web01, zonder een tweede IP-adres te beheren.", a: "CNAME",
      e: "Met een alias pas je het adres maar op één plaats aan: in het A-record van web01." }
  ],

  /* ---------- 2. FQDN-puzzel (dia 10) ---------- */
  fqdnTiles: ["web01", "file01", "www", "dns01", "campusconnect", "hogent", "microsoft",
              "test", "be", "com", ".", ".", ".", ".", "https://", "/index.html", ":443", "192.168.10.20"],
  fqdnRounds: [
    { prompt: "De interne webserver van CampusConnect", target: ["web01", ".", "campusconnect", ".", "test", "."],
      labels: { "web01": "hostlabel", "campusconnect": "domein", "test": "TLD", ".": "root" }, zone: true },
    { prompt: "De website van HOGENT", target: ["www", ".", "hogent", ".", "be", "."],
      labels: { "www": "hostlabel", "hogent": "domein", "be": "TLD", ".": "root" }, zone: false },
    { prompt: "De bestandsserver van CampusConnect", target: ["file01", ".", "campusconnect", ".", "test", "."],
      labels: { "file01": "hostlabel", "campusconnect": "domein", "test": "TLD", ".": "root" }, zone: true },
    { prompt: "De website van Microsoft", target: ["www", ".", "microsoft", ".", "com", "."],
      labels: { "www": "hostlabel", "microsoft": "domein", "com": "TLD", ".": "root" }, zone: false }
  ],
  fqdnDistractors: {
    "https://": "het protocol (URL), geen deel van de naam",
    "/index.html": "een pad op de webserver (URL)",
    ":443": "een poortnummer",
    "192.168.10.20": "een IP-adres: dat is net wat DNS als antwoord geeft"
  },

  /* ---------- 3a. Exitcheck blok 1 (dia 23) ---------- */
  exitcheck: [
    { cmd: "Resolve-DnsName file01.campusconnect.test",
      f: { zone: "campusconnect.test", type: "A", who: "DNS01 (autoritatief)" } },
    { cmd: "Resolve-DnsName 192.168.10.30",
      f: { zone: "10.168.192.in-addr.arpa", type: "PTR", who: "DNS01 (autoritatief)" } },
    { cmd: "Resolve-DnsName www.hogent.be",
      f: { zone: "geen eigen zone", type: "A", who: "via de forwarder (of cache)" } },
    { cmd: "Resolve-DnsName intranet.campusconnect.test",
      f: { zone: "campusconnect.test", type: "CNAME + A", who: "DNS01 (autoritatief)" } }
  ],
  exitFields: {
    zone: { l: "Zone", o: ["campusconnect.test", "10.168.192.in-addr.arpa", "geen eigen zone"] },
    type: { l: "Recordtype", o: ["A", "PTR", "CNAME + A", "NS"] },
    who:  { l: "Wie antwoordt?", o: ["DNS01 (autoritatief)", "via de forwarder (of cache)", "het hosts-bestand"] }
  },

  /* ---------- 3b. Voorspel de uitvoer (dia 34 + extra) ---------- */
  predict: [
    { cmd: "Resolve-DnsName file01.campusconnect.test -Server 192.168.10.10",
      o: ["A  192.168.10.30", "CNAME  web01.campusconnect.test", "DNS name does not exist", "time-out"], a: 0,
      e: "file01 heeft een A-record in de zone van DNS01." },
    { cmd: "Resolve-DnsName intranet.campusconnect.test -Type CNAME -Server 192.168.10.10",
      o: ["A  192.168.10.20", "CNAME  web01.campusconnect.test", "PTR  web01.campusconnect.test", "NS  dns01.campusconnect.test"], a: 1,
      e: "Je vraagt expliciet het CNAME-record: de alias wijst naar een naam, niet naar een IP-adres." },
    { cmd: "Resolve-DnsName campusconnect.test -Type NS -Server 192.168.10.10",
      o: ["A  192.168.10.10", "SOA  hostmaster", "NS  dns01.campusconnect.test", "DNS name does not exist"], a: 2,
      e: "Het NS-record van de zone wijst naar de naam van de naamserver." },
    { cmd: "Resolve-DnsName printer99.campusconnect.test -Server 192.168.10.10",
      o: ["time-out", "DNS name does not exist", "A  0.0.0.0", "antwoord van de forwarder"], a: 1,
      e: "DNS01 is autoritatief en weet zeker dat printer99 niet bestaat: een negatief antwoord, geen time-out." },
    { cmd: "Resolve-DnsName 192.168.10.20 -Server 192.168.10.10   (er is nog géén reverse zone)",
      o: ["web01.campusconnect.test", "Geen naam: er bestaat geen PTR", "A  192.168.10.20", "intranet.campusconnect.test"], a: 1,
      e: "Een A-record helpt niet in de omgekeerde richting. Je hebt een reverse zone met een PTR-record nodig." },
    { cmd: "Resolve-DnsName web01.campusconnect.test -Server 192.168.10.10   (de DNS-service is gestopt)",
      o: ["DNS name does not exist", "time-out: geen antwoord", "A  192.168.10.20 uit cache van DNS01", "antwoord van de forwarder"], a: 1,
      e: "Een gestopte service antwoordt helemaal niet: time-out. Een negatief antwoord zou betekenen dat de service wél draait." },
    { cmd: "Er is een forwarder ingesteld. Gaat de query voor web01.campusconnect.test naar de forwarder?",
      o: ["Ja, alle query's gaan naar de forwarder", "Nee, DNS01 is autoritatief voor campusconnect.test", "Alleen als de cache leeg is", "Alleen bij een gerichte query"], a: 1,
      e: "Alleen wat niet in de eigen zones of de cache staat, wordt doorgestuurd." }
  ],
  reasoning: {
    q: "Een student zegt: “web01 geeft <b>DNS name does not exist</b>, dus de DNS-service staat uit.” Wat klopt?",
    o: ["Dat klopt: de service staat uit.",
        "Fout: de server antwoordt, dus de service draait. Kijk naar zone, record of cache.",
        "Fout: het is een probleem met de forwarder.",
        "Fout: CLIENT01 heeft geen IP-adres."], a: 1,
    e: "Een negatief antwoord IS een antwoord. Bij een gestopte service krijg je een time-out."
  },

  /* ---------- 4. Querypad-simulatie (dia 15-18, 21) ---------- */
  rounds: [
    { title: "Ronde 1 · Een interne naam", name: "web01.campusconnect.test", steps: [
      { q: "CLIENT01 wil <b>web01.campusconnect.test</b> openen. Waar kijkt hij eerst?",
        o: ["In zijn eigen clientcache", "Bij DNS01", "Bij de forwarder", "Bij de root-server"], a: 0, on: ["client"],
        e: "Eerst de eigen cache. Die is nog leeg." },
      { q: "Niet in de cache. Wat raadpleegt CLIENT01 daarna, nog op zijn eigen pc?",
        o: ["Het hosts-bestand", "De forwarder", "De servercache van DNS01", "Niets meer"], a: 0, on: ["hosts"],
        e: "Het hosts-bestand wordt vóór DNS geraadpleegd. Er staat geen regel voor web01." },
      { q: "Naar wie gaat de vraag nu?",
        o: ["Naar DNS01, de ingestelde DNS-server", "Rechtstreeks naar de forwarder", "Naar de root-server", "Naar WEB01 zelf"], a: 0, on: ["dns01"],
        e: "CLIENT01 vraagt recursief aan zijn DNS-server: “zoek het voor mij uit”." },
      { q: "Wat doet DNS01 met deze vraag?",
        o: ["Antwoordt uit zijn eigen zone campusconnect.test", "Stuurt ze door naar de forwarder", "Vraagt het aan de root-server", "Antwoordt ‘bestaat niet’"], a: 0, on: ["dns01"],
        e: "DNS01 is autoritatief voor campusconnect.test: A 192.168.10.20, TTL 3600. De forwarder doet niets!" },
      { q: "CLIENT01 krijgt <b>A 192.168.10.20 (TTL 3600)</b>. Wat doet hij ermee?",
        o: ["Bewaart het in de clientcache voor maximaal 3600 s", "Schrijft het in het hosts-bestand", "Gooit het meteen weg", "Stuurt het naar de forwarder"], a: 0, on: ["client"],
        cache: { where: "client", name: "web01.campusconnect.test", val: "192.168.10.20", ttl: 3600 },
        e: "Positieve caching: de volgende 3600 seconden hoeft CLIENT01 niets te vragen." }
    ]},
    { title: "Ronde 2 · Een externe naam", name: "www.microsoft.com", steps: [
      { q: "CLIENT01 zoekt <b>www.microsoft.com</b>. Cache en hosts-bestand: niets. Naar wie?",
        o: ["DNS01", "De forwarder", "De .com-server", "De root-server"], a: 0, on: ["dns01"],
        e: "Altijd eerst naar de ingestelde DNS-server." },
      { q: "DNS01 heeft geen zone microsoft.com. Wat doet hij?",
        o: ["Kijkt in zijn servercache en stuurt daarna door naar de forwarder", "Antwoordt ‘bestaat niet’", "Antwoordt uit campusconnect.test", "Zegt CLIENT01 om het zelf te zoeken"], a: 0, on: ["dns01", "fwd"],
        e: "Niet autoritatief, niet in cache → doorsturen naar de forwarder (recursief)." },
      { q: "De forwarder kent het antwoord ook niet. Wie vraagt hij eerst?",
        o: ["De root-server", "De .com-server", "De microsoft.com-server", "DNS01"], a: 0, on: ["root"],
        e: "Bovenaan de boom beginnen: de root." },
      { q: "Wat antwoordt de root-server?",
        o: ["Een verwijzing: “vraag het aan de .com-servers”", "Het IP-adres van www.microsoft.com", "“Bestaat niet”", "Hij stuurt de vraag zelf door"], a: 0, on: ["root", "com"],
        e: "Iteratief: de root geeft een verwijzing, geen eindantwoord. De .com-server verwijst daarna naar microsoft.com." },
      { q: "Wie geeft het definitieve antwoord?",
        o: ["De microsoft.com-server (autoritatief)", "De root-server", "De .com-server", "DNS01"], a: 0, on: ["ms"],
        e: "Alleen de autoritatieve server van microsoft.com kent het adres." },
      { q: "Het antwoord gaat terug langs dezelfde weg. Wie bewaart het in een cache?",
        o: ["De forwarder, DNS01 én CLIENT01", "Alleen CLIENT01", "Alleen de root-server", "Niemand"], a: 0, on: ["fwd", "dns01", "client"],
        cache: [{ where: "dns01", name: "www.microsoft.com", val: "20.70.246.20", ttl: 60 },
                { where: "client", name: "www.microsoft.com", val: "20.70.246.20", ttl: 60 }],
        e: "Elke cache telt de TTL af (hier 60 s, het adres is fictief)." }
    ]},
    { title: "Ronde 3 · Dezelfde vraag opnieuw", name: "www.microsoft.com", steps: [
      { q: "Tien seconden later vraagt CLIENT01 opnieuw <b>www.microsoft.com</b>. Wie wordt bevraagd?",
        o: ["Niemand: het antwoord staat in de clientcache", "DNS01", "De forwarder", "Opnieuw de hele keten"], a: 0, on: ["client"],
        e: "Cache-hit: geen enkel netwerkpakket nodig." },
      { q: "Spoel de tijd 60 s vooruit: de TTL is verlopen. Wat gebeurt er bij de volgende vraag?",
        o: ["CLIENT01 vraagt het opnieuw aan DNS01", "CLIENT01 gebruikt het oude antwoord toch", "CLIENT01 vraagt het rechtstreeks aan microsoft.com", "Het hosts-bestand antwoordt"], a: 0, on: ["dns01"],
        expire: true,
        e: "Verlopen = weg. DNS01 heeft het ook niet meer, dus die vraagt opnieuw aan de forwarder." }
    ]},
    { title: "Ronde 4 · Een naam die niet bestaat", name: "printer99.campusconnect.test", steps: [
      { q: "DNS01 krijgt de vraag voor <b>printer99.campusconnect.test</b>. Er is geen record. Wat antwoordt hij?",
        o: ["Negatief antwoord: “DNS name does not exist”", "Hij vraagt het aan de forwarder", "Hij antwoordt niet (time-out)", "Zijn eigen IP-adres"], a: 0, on: ["dns01"],
        e: "DNS01 is autoritatief voor campusconnect.test: als het record er niet is, bestaat de naam niet." },
      { q: "Wat doet CLIENT01 met dit negatieve antwoord?",
        o: ["Bewaart het ook in de cache (negatieve caching)", "Gooit het meteen weg", "Vraagt het opnieuw aan de forwarder", "Schrijft het in het hosts-bestand"], a: 0, on: ["client"],
        cache: { where: "client", name: "printer99.campusconnect.test", val: "bestaat niet", ttl: 3600, neg: true },
        e: "Ook ‘bestaat niet’ wordt bewaard. De duur staat in het SOA-record." },
      { q: "De beheerder maakt printer99 nu meteen aan. Werkt het meteen op CLIENT01?",
        o: ["Nee, pas na Clear-DnsClientCache of als de negatieve cache verlopen is", "Ja, DNS werkt altijd meteen", "Alleen als de forwarder herstart", "Nooit meer"], a: 0, on: ["client"],
        e: "Klassieke valkuil bij troubleshooting: altijd de cache leegmaken vóór je hertest." }
    ]},
    { title: "Bonus · Het hosts-bestand", name: "web01.campusconnect.test", steps: [
      { q: "In het hosts-bestand van CLIENT01 staat <b>192.168.10.99 web01.campusconnect.test</b>. Wat geeft een <b>gewone</b> query?",
        o: ["192.168.10.99", "192.168.10.20", "DNS name does not exist", "time-out"], a: 0, on: ["hosts"],
        hosts: true,
        e: "Het hosts-bestand wint van DNS." },
      { q: "En de <b>gerichte</b> query <code>Resolve-DnsName web01.campusconnect.test -Server 192.168.10.10</code>?",
        o: ["192.168.10.20", "192.168.10.99", "time-out", "DNS name does not exist"], a: 0, on: ["dns01"],
        e: "Een gerichte query gaat rechtstreeks naar DNS01. Gewoon ≠ gericht? Dan zit het probleem bij de client." }
    ]}
  ]
};
