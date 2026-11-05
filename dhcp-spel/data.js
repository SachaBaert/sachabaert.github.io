/* Inhoud van de DHCP-oefeningen. Aanpassen kan hier zonder de code te raken. */
window.DHCPDATA = {

  /* ---------- 1. Statisch, dynamisch of reservatie? (dia 9) ---------- */
  soorten: [
    { t: "Statisch", c: "#000000", d: "handmatig, vast", l: "een adres dat een beheerder handmatig op het toestel instelt en dat vast blijft" },
    { t: "Dynamisch", c: "#919E2C", d: "lease uit de pool", l: "een tijdelijk adres uit de adrespool van de DHCP-server" },
    { t: "Reservatie", c: "#EB6008", d: "via DHCP, altijd hetzelfde", l: "een vast adres dat de DHCP-server altijd aan dezelfde client (MAC-adres) geeft" }
  ],
  soortQuiz: [
    { q: "De <b>Windows Server</b> die DNS en DHCP aanbiedt.", h: "Clients moeten deze server altijd op hetzelfde adres vinden. Kan een DHCP-server zijn eigen adres via DHCP krijgen?", a: "Statisch",
      e: "Een DHCP-server krijgt zelf een statisch adres: clients, beheerders en documentatie verwijzen naar dat vaste adres." },
    { q: "De <b>laptop</b> van een student die elke dag in een ander lokaal werkt.", h: "Moet dit toestel altijd op hetzelfde adres bereikbaar zijn?", a: "Dynamisch",
      e: "Een laptop hoeft niet voorspelbaar bereikbaar te zijn. Een lease uit de pool volstaat, en het adres komt vrij als de laptop vertrekt." },
    { q: "Een <b>netwerkprinter</b> die gebruikers via een gekend IP-adres bereiken. De beheerder wil gateway en DNS centraal beheren.", h: "Vast adres én centraal beheer: welke soort combineert die twee?", a: "Reservatie",
      e: "Met een reservatie blijft de printer een DHCP-client (opties centraal beheerd), maar krijgt hij altijd hetzelfde adres." },
    { q: "De <b>router</b> die de default gateway van het subnet is.", h: "Kan een client zijn gateway vinden als die van adres verandert?", a: "Statisch",
      e: "De gateway moet altijd op hetzelfde adres staan: dat adres geeft DHCP (Router-optie) aan alle clients door." },
    { q: "De <b>smartphone</b> van een bezoeker op het gastnetwerk.", h: "Tijdelijk toestel, onbekend MAC-adres.", a: "Dynamisch",
      e: "Gasttoestellen krijgen een gewone lease, liefst met een korte leaseduur zodat adressen snel vrijkomen." },
    { q: "Een <b>NAS</b> waarop de back-ups van alle servers terechtkomen.", h: "Zou je willen dat de back-ups mislukken als de DHCP-server uitvalt?", a: "Statisch",
      e: "Infrastructuur zoals een NAS krijgt doorgaans een statisch adres buiten de pool. (Een reservatie kan ook; het belangrijkste is dat je je keuze kunt verklaren.)" },
    { q: "Een <b>draadloos toegangspunt</b> dat de beheerder via een vast adres wil beheren, maar waarvan hij de DNS-server centraal wil kunnen wijzigen.", h: "Twee wensen: vast adres en centraal beheer.", a: "Reservatie",
      e: "Een reservatie geeft een voorspelbaar adres en behoudt het centraal beheer van de opties." },
    { q: "Twintig <b>desktops</b> in een leslokaal.", h: "Moet elke desktop een gekend adres hebben?", a: "Dynamisch",
      e: "Werkstations krijgen een lease uit de pool. Dat is net het probleem dat DHCP oplost: geen twintig keer handmatig configureren." },
    { q: "De <b>managementinterface van een switch</b>.", h: "Netwerkapparatuur die je ook moet kunnen bereiken als DHCP niet werkt.", a: "Statisch",
      e: "Netwerkapparatuur krijgt een statisch adres in het infrastructuurbereik, buiten de pool." },
    { q: "Een <b>tijdelijke virtuele machine</b> om iets uit te testen.", h: "Hoe lang blijft deze VM bestaan?", a: "Dynamisch",
      e: "Een tijdelijke VM krijgt een gewone lease. Verdwijnt de VM, dan komt het adres na de lease weer vrij." }
  ],

  /* ---------- 2. DORA (begripscheck 1, dia 15) ---------- */
  dora: [
    { m: "DHCPDISCOVER", af: "Client", d: "de client zoekt een DHCP-server" },
    { m: "DHCPOFFER", af: "Server", d: "een server biedt een configuratie aan" },
    { m: "DHCPREQUEST", af: "Client", d: "de client vraagt het gekozen aanbod aan" },
    { m: "DHCPACK", af: "Server", d: "de server bevestigt de lease" }
  ],
  doraQ: [
    { q: "Waarom verstuurt een nieuwe client DHCPDISCOVER als <b>broadcast</b>?",
      o: ["Hij kent het adres van de DHCP-server niet en heeft zelf nog geen bruikbaar IP-adres", "Broadcasts zijn sneller dan unicast", "DHCP-servers luisteren alleen naar broadcasts", "Zo krijgt elke computer in het netwerk een kopie van de lease"],
      a: 0,
      w: [null, "Snelheid speelt geen rol. Het gaat erom dat de client geen bestemming kent.", "Bij het vernieuwen van een lease (T1) stuurt de client net wel unicast naar de server.", "Alle toestellen ontvangen de broadcast, maar alleen DHCP-servers reageren. De lease zelf is voor één client."],
      e: "De client kent zijn eigen bruikbare adres nog niet (bron 0.0.0.0) en ook het adres van de server niet. Daarom stuurt hij naar iedereen (255.255.255.255)." },
    { q: "Vanaf welk bericht mag de client de aangeboden configuratie <b>gebruiken</b>?",
      o: ["Na DHCPACK", "Na DHCPOFFER", "Na DHCPREQUEST", "Meteen na DHCPDISCOVER"],
      a: 0,
      w: [null, "Een OFFER is een aanbod, geen bevestiging. Er kunnen meerdere aanbiedingen zijn.", "Met REQUEST vraagt de client het adres aan. Hij wacht nog op de bevestiging.", "Bij DISCOVER heeft de client nog niets ontvangen."],
      e: "Pas na DHCPACK is de lease bevestigd. Dan past de client adres, masker, DNS-server en de andere opties toe." },
    { q: "Twee DHCP-servers sturen elk een DHCPOFFER. Wat doet de client?",
      o: ["Hij kiest één aanbod en meldt dat via DHCPREQUEST (broadcast)", "Hij neemt beide adressen", "Hij weigert beide en gebruikt APIPA", "Hij vraagt de servers om onderling te beslissen"],
      a: 0,
      w: [null, "Een adapter krijgt via DHCP één IPv4-adres.", "APIPA gebruikt de client alleen als er níemand antwoordt.", "DHCP-servers overleggen niet met elkaar (tenzij in een failoverrelatie, buiten deze les)."],
      e: "De client kiest één aanbod. Omdat REQUEST bij de eerste aanvraag een broadcast is, weet de andere server dat zijn aanbod niet gekozen werd. Zo kan een ongewenste tweede DHCP-server een verkeerde configuratie bezorgen." },
    { q: "Op welke UDP-poort luistert de <b>DHCP-server</b>?",
      o: ["67", "68", "53", "443"],
      a: 0,
      w: [null, "68 is de poort van de client.", "53 is DNS.", "443 is HTTPS."],
      e: "Server: UDP 67. Client: UDP 68." },
    { q: "De server antwoordt op DHCPREQUEST met <b>DHCPNAK</b>. Wat betekent dat voor de client?",
      o: ["Hij mag het gevraagde adres niet gebruiken en moet opnieuw een configuratie zoeken", "De lease is bevestigd", "Hij moet zijn netwerkkabel controleren", "Hij krijgt een reservatie"],
      a: 0,
      w: [null, "Bevestigen doet DHCPACK. NAK is een negatieve bevestiging.", "Een NAK is een antwoord van de server: het netwerk werkt dus.", "Een reservatie is een instelling op de server, geen bericht."],
      e: "DHCPNAK (Negative Acknowledgement): de aanvraag wordt geweigerd, bv. omdat de client naar een ander subnet verhuisde. De client begint opnieuw met DORA." }
  ],

  /* ---------- 3. Scopeplan (exitcheck blok 1 en begripscheck 2, dia 25 en 32) ---------- */
  exitPlan: {
    intro: "Een computerlokaal in <b>192.168.40.0/24</b>. Er is een router op <b>192.168.40.1</b>, een Windows Server met DNS en DHCP op <b>192.168.40.10</b> en een netwerkprinter. Afspraak: 1–99 infrastructuur, 100–199 dynamische clients, 200–219 reservaties. Clients gebruiken de interne DNS-server.",
    fout: [["Startadres pool", "192.168.40.1"], ["Eindadres pool", "192.168.40.255"], ["Router (default gateway)", "192.168.50.1"], ["DNS Servers", "8.8.8.8"], ["Reservatie printer", "192.168.40.10"], ["Leaseduur", "onbeperkt"]],
    fields: [
      { k: "start", l: "Startadres pool", a: "192.168.40.100", o: ["192.168.40.0", "192.168.40.1", "192.168.40.10", "192.168.40.100"],
        x: "De pool begint na het infrastructuurbereik (1–99).",
        why: { "192.168.40.0": "dat is het netwerkadres: nooit aan een host.", "192.168.40.1": "dan zitten router en server in de pool: adresconflicten.", "192.168.40.10": "dat is het adres van de server zelf." } },
      { k: "eind", l: "Eindadres pool", a: "192.168.40.199", o: ["192.168.40.199", "192.168.40.254", "192.168.40.255", "192.168.41.199"],
        x: "Volgens de afspraak eindigen de dynamische clients op .199.",
        why: { "192.168.40.254": "geldig hostadres, maar dan neemt de pool ook het reservatiegebied in.", "192.168.40.255": "dat is het broadcastadres van het subnet.", "192.168.41.199": "dat ligt in een ander subnet." } },
      { k: "router", l: "Router (default gateway)", a: "192.168.40.1", o: ["192.168.40.1", "192.168.50.1", "192.168.40.10", "leeg laten"],
        x: "Hier bestaat er wél een router, op .1 in het eigen subnet.",
        why: { "192.168.50.1": "ligt niet in 192.168.40.0/24: de client kan die gateway niet bereiken.", "192.168.40.10": "de server routeert niet.", "leeg laten": "alleen als er geen router is. Hier is er een, dus clients hebben hem nodig om andere netwerken te bereiken." } },
      { k: "dns", l: "DNS Servers", a: "192.168.40.10", o: ["192.168.40.10", "8.8.8.8", "192.168.40.1", "192.168.40.255"],
        x: "Clients gebruiken de interne DNS-server: die kent de interne namen.",
        why: { "8.8.8.8": "een externe DNS-server kent de interne zone niet.", "192.168.40.1": "de router is geen DNS-server in dit plan.", "192.168.40.255": "dat is het broadcastadres." } },
      { k: "res", l: "Reservatie printer", a: "192.168.40.200", o: ["192.168.40.200", "192.168.40.10", "192.168.40.150", "192.168.40.255"],
        x: "Reservaties komen in 200–219. Let op: Windows vraagt dat het scopebereik dan tot .219 loopt, met een uitsluiting 200–219.",
        why: { "192.168.40.10": "dat is het adres van de server: conflict.", "192.168.40.150": "kan technisch, maar ligt midden in de pool. Het plan houdt reservaties apart.", "192.168.40.255": "broadcastadres." } },
      { k: "lease", l: "Leaseduur", a: "8 dagen", o: ["8 dagen", "1 uur", "onbeperkt", "1 jaar"],
        x: "Een stabiel computerlokaal: 8 dagen is een bruikbare uitgangswaarde.",
        why: { "1 uur": "past bij een gastnetwerk met veel wissels, niet bij vaste pc's: veel vernieuwingsverkeer.", "onbeperkt": "dan komen adressen van verdwenen toestellen nooit meer vrij.", "1 jaar": "adressen van verdwenen toestellen blijven veel te lang bezet." } }
    ],
    motiveer: [
      { q: "Waarom gebruik je niet het volledige subnet (.1 tot .254) als pool?",
        o: ["Infrastructuuradressen (router, server, NAS) moeten buiten de dynamische uitgifte blijven", "Windows aanvaardt maximaal 100 adressen per pool", "Een grote pool maakt DORA trager", "Zo heb je geen uitsluitingen meer nodig"],
        a: 0,
        w: [null, "Er is geen limiet van 100: de grootte kies je zelf.", "De grootte van de pool heeft geen invloed op DORA.", "Net omgekeerd: met het volledige subnet zou je veel uitsluitingen nodig hebben."],
        e: "Statische toestellen zoals router en server mogen nooit dynamisch aan een client gegeven worden. Plan ze buiten de pool, of sluit ze uit." },
      { q: "Je wil de printerreservatie op <b>192.168.40.200</b>. Wat moet je in Windows Server dan ook doen?",
        o: ["Het scopebereik tot minstens .200 laten lopen en 200–219 uitsluiten", "Niets: een reservatie mag overal in het subnet", "De printer een statisch adres geven", "De pool tot .254 uitbreiden zonder uitsluiting"],
        a: 0,
        w: [null, "Windows Server weigert een reservatie buiten het scopebereik.", "Dan is het geen reservatie meer: de printer verliest het centrale beheer.", "Dan deelt DHCP 200–254 ook dynamisch uit en botst dat met de reservaties."],
        e: "Een reservatie moet binnen het scopebereik liggen. Laat het bereik tot .219 lopen en sluit 200–219 uit: reservaties in een uitgesloten deel werken wel, gewone leases niet." },
      { q: "Waarom past 8 dagen hier beter dan 1 uur?",
        o: ["Vaste pc's: weinig wissels, dus minder vernieuwingsverkeer is prima", "Met 1 uur werkt DHCP niet", "8 dagen is verplicht in Windows", "Na 1 uur krijgt elke client een APIPA-adres"],
        a: 0,
        w: [null, "Een korte lease werkt technisch wel, maar is hier niet nodig.", "De standaard in Windows is 8 dagen, maar je mag die aanpassen.", "De client vernieuwt al na 50 %: hij krijgt geen APIPA zolang de server antwoordt."],
        e: "Een lange lease past bij een stabiele omgeving. Een korte lease past bij veel wisselende toestellen (gastnetwerk)." }
    ]
  },
  check2: [
    { s: "Ons labo: SRV01 192.168.10.10, geen router, DNS-zone cursus.local.", q: "Een collega maakte deze scope: bereik <b>192.168.10.1 – 192.168.10.254</b>, DNS 192.168.10.10. Welke fout heeft de grootste impact zodra je activeert?",
      o: ["Het adres van SRV01 zit in de pool: DHCP kan het aan een client geven", "De leaseduur ontbreekt", "Er is geen Router-optie", "De scope heeft geen beschrijving"],
      a: 0,
      w: [null, "Windows gebruikt standaard 8 dagen; dat is geen groot probleem.", "Er is geen router in het labo: geen Router-optie is hier net juist.", "Een beschrijving is goede documentatie, maar breekt niets."],
      e: "Een serveradres in de pool kan een adresconflict veroorzaken. Start de pool later (.100) of sluit de infrastructuur uit." },
    { s: "Scopebereik 192.168.10.100 – 192.168.10.199, geen uitsluitingen.", q: "Je maakt een reservatie voor <b>192.168.10.200</b>. Wat gebeurt er?",
      o: ["Windows weigert: het adres ligt buiten het scopebereik", "Het lukt, een reservatie mag overal in het subnet", "Het lukt, maar de client krijgt toch een pooladres", "De scope wordt automatisch uitgebreid"],
      a: 0,
      w: [null, "Dat kon in Windows Server 2008. Sinds 2008 R2 controleert de server het scopebereik.", "Zo ver komt het niet: de reservatie wordt niet aangemaakt.", "Windows wijzigt je scope nooit zelf."],
      e: "De reservatie moet binnen het scopebereik liggen. Daarom loopt ons bereik tot .219 met een uitsluiting 200–219." },
    { s: "Scopebereik 192.168.10.100 – 192.168.10.219, uitsluiting 200–219.", q: "Lukt een reservatie voor <b>192.168.10.200</b> nu?",
      o: ["Ja: een uitsluiting houdt alleen gewone dynamische uitgifte tegen", "Nee: uitgesloten adressen kan je nooit meer gebruiken", "Ja, maar pas na een herstart van de service", "Nee: eerst de uitsluiting verwijderen"],
      a: 0,
      w: [null, "Een uitgesloten adres kan nog steeds gereserveerd of statisch gebruikt worden.", "Een reservatie werkt meteen; de client moet wel zijn lease vernieuwen.", "Dan zou .200 ook als gewone lease uitgedeeld kunnen worden."],
      e: "Uitsluiting = niet dynamisch uitdelen. Reservatie = alleen aan die ene client. Ze werken samen." },
    { s: "Ons labo heeft geen router.", q: "Moet je de Router-optie <b>192.168.10.1</b> toch invullen ‘voor de volledigheid’?",
      o: ["Nee: configureer alleen een gateway die werkelijk bestaat", "Ja: elke scope heeft een gateway nodig", "Ja: anders weigert de wizard de scope", "Nee: de Router-optie bestaat niet in Windows"],
      a: 0,
      w: [null, "Een client zonder gateway werkt prima in zijn eigen subnet.", "De wizard laat je die pagina leeg laten.", "De optie bestaat wel (optie 3, Router)."],
      e: "Een fictieve gateway doet clients denken dat ze andere netwerken kunnen bereiken. Laat de optie leeg tot er een router is." },
    { s: "Scopeoptie DNS Servers = 8.8.8.8.", q: "Wat werkt er niet bij de clients?",
      o: ["Interne namen zoals srv01.cursus.local omzetten", "Een IP-adres ontvangen", "SRV01 pingen op zijn IP-adres", "De lease vernieuwen"],
      a: 0,
      w: [null, "DHCP werkt gewoon: de client krijgt een adres.", "IP-connectiviteit heeft geen DNS nodig.", "Vernieuwen gebeurt bij de DHCP-server, niet bij de DNS-server."],
      e: "Een externe DNS-server kent de interne zone niet (en in ons labo is hij niet eens bereikbaar)." },
    { s: "De scope is net aangemaakt.", q: "Hoe ontdek je fouten <b>vóór</b> clients er last van hebben?",
      o: ["Scope inactief laten, bereik, uitsluitingen en opties controleren, pas dan activeren", "Meteen activeren en kijken of er klachten komen", "Alle clients statisch zetten tot je klaar bent", "De DHCP-service stoppen tot je klaar bent"],
      a: 0,
      w: [null, "Een foute actieve scope deelt meteen verkeerde instellingen uit.", "Dat is net het werk dat DHCP moet vermijden.", "Een inactieve scope doet hetzelfde, maar netter: per scope."],
      e: "Daarom kozen we in de wizard ‘activate later’ en controleren we met Get-DhcpServerv4Scope, Get-DhcpServerv4ExclusionRange en Get-DhcpServerv4OptionValue." }
  ],

  /* ---------- 4. Lees ipconfig /all (dia 34) ---------- */
  ipconfig: [
    { out: "DHCP Enabled. . . . . . . . . . . : Yes\nIPv4 Address. . . . . . . . . . . : 192.168.10.100(Preferred)\nSubnet Mask . . . . . . . . . . . : 255.255.255.0\nLease Obtained. . . . . . . . . . : donderdag 5 november 2026 11:40:02\nLease Expires . . . . . . . . . . : vrijdag 13 november 2026 11:40:02\nDefault Gateway . . . . . . . . . :\nDHCP Server . . . . . . . . . . . : 192.168.10.10\nDNS Servers . . . . . . . . . . . : 192.168.10.10",
      q: "Van welke server komt deze lease?",
      o: ["192.168.10.10: dat staat in het veld DHCP Server", "192.168.10.100: dat is het eigen adres", "Dat kan je uit ipconfig niet afleiden", "Van de default gateway"],
      a: 0,
      w: [null, "192.168.10.100 is het adres dat de client kreeg, niet de server.", "Het veld DHCP Server vertelt het je net.", "Het veld Default Gateway is leeg."],
      e: "Het veld <b>DHCP Server</b> identificeert de leaseserver. Dat is het eerste wat je controleert bij een vermoeden van een tweede DHCP-server." },
    { out: "DHCP Enabled. . . . . . . . . . . : Yes\nIPv4 Address. . . . . . . . . . . : 192.168.10.100(Preferred)\nLease Obtained. . . . . . . . . . : donderdag 5 november 2026 11:40:02\nLease Expires . . . . . . . . . . : vrijdag 13 november 2026 11:40:02\nDHCP Server . . . . . . . . . . . : 192.168.10.10\nDNS Servers . . . . . . . . . . . : 192.168.10.10",
      q: "Wanneer probeert de client deze lease voor het eerst te <b>vernieuwen</b>?",
      o: ["Rond maandag 9 november, na ± 50 % van de leaseduur (T1)", "Pas op 13 november, als de lease verloopt", "Elke keer als de pc opstart, en anders nooit", "Na ± 87,5 % van de leaseduur"],
      a: 0,
      w: [null, "Dan is het te laat: de client vernieuwt vóór de vervaldatum.", "Opstarten kan een vernieuwing uitlokken, maar de client vernieuwt ook gewoon na T1.", "Dat is T2 (rebinding): alleen als de eerste server niet antwoordt."],
      e: "T1 = 50 % van 8 dagen = 4 dagen. De client stuurt dan een unicast DHCPREQUEST naar de oorspronkelijke server." },
    { out: "DHCP Enabled. . . . . . . . . . . : Yes\nAutoconfiguration IPv4 Address. . : 169.254.71.25(Preferred)\nSubnet Mask . . . . . . . . . . . : 255.255.0.0\nDefault Gateway . . . . . . . . . :",
      q: "Wat weet je zeker?",
      o: ["De client heeft geen geldige DHCP-lease gekregen; de oorzaak moet je nog zoeken", "De DHCP-service is gestopt", "De client staat statisch ingesteld", "De client heeft een reservatie"],
      a: 0,
      w: [null, "Mogelijk, maar ook een inactieve scope, een verkeerd netwerk of een volle pool geven dit symptoom.", "DHCP Enabled staat op Yes: de client vraagt automatisch.", "Een reservatie geeft een adres uit het eigen subnet, geen 169.254."],
      e: "APIPA is een <b>symptoom</b>: de client vroeg, maar kreeg geen geldige lease. Daarna onderzoek je client → netwerk → DHCP-server → scope." },
    { out: "DHCP Enabled. . . . . . . . . . . : Yes\nIPv4 Address. . . . . . . . . . . : 192.168.125.131(Preferred)\nSubnet Mask . . . . . . . . . . . : 255.255.255.0\nDefault Gateway . . . . . . . . . : 192.168.125.2\nDHCP Server . . . . . . . . . . . : 192.168.125.254\nDNS Servers . . . . . . . . . . . : 192.168.125.2",
      q: "SRV01 heeft het adres 192.168.10.10. Wat is hier aan de hand?",
      o: ["De client kreeg een lease van een andere DHCP-server", "SRV01 deelt een verkeerde pool uit", "De client heeft een APIPA-adres", "Alles is in orde"],
      a: 0,
      w: [null, "Dan zou het veld DHCP Server 192.168.10.10 tonen.", "APIPA begint met 169.254.", "De client hoort in 192.168.10.0/24 en SRV01 als DHCP-server te hebben."],
      e: "DHCP Server 192.168.125.254 is niet SRV01. In VMware is dat de DHCP-dienst van het NAT-netwerk (VMnet8): de adapter hangt aan het verkeerde virtuele netwerk." },
    { out: "DHCP Enabled. . . . . . . . . . . : Yes\nIPv4 Address. . . . . . . . . . . : 192.168.10.112(Preferred)\nSubnet Mask . . . . . . . . . . . : 255.255.255.0\nDHCP Server . . . . . . . . . . . : 192.168.10.10\nDNS Servers . . . . . . . . . . . : 8.8.8.8",
      q: "<code>ping 192.168.10.10</code> lukt, <code>nslookup srv01.cursus.local</code> mislukt. Waar zoek je?",
      o: ["De scopeoptie DNS Servers", "De Router-optie", "De adrespool", "De netwerkkabel"],
      a: 0,
      w: [null, "De gateway speelt geen rol bij een server in het eigen subnet.", "Het adres uit de pool is correct.", "Ping lukt: het netwerk werkt."],
      e: "De client kreeg 8.8.8.8 als DNS-server. Corrigeer optie 6 naar 192.168.10.10, vernieuw de lease en maak de DNS-cache leeg." },
    { out: "DHCP Enabled. . . . . . . . . . . : No\nIPv4 Address. . . . . . . . . . . : 192.168.10.60(Preferred)\nSubnet Mask . . . . . . . . . . . : 255.255.255.0\nDNS Servers . . . . . . . . . . . : 192.168.10.10",
      q: "Waarom zie je deze client niet bij de Address Leases op de server?",
      o: ["Hij is statisch ingesteld: hij vraagt geen lease", "De lease is verlopen", "De scope is inactief", "Hij heeft een reservatie"],
      a: 0,
      w: [null, "Een statische client heeft nooit een lease gehad.", "Een inactieve scope geeft APIPA bij een automatische client, geen statisch adres.", "Een gereserveerde client is wél een DHCP-client (DHCP Enabled: Yes)."],
      e: "<b>DHCP Enabled: No</b>: de adapter staat manueel. Zet IP en DNS op automatisch en vraag een lease aan." },
    { out: "Physical Address. . . . . . . . . : 00-0C-29-AA-BB-CC\nDHCP Enabled. . . . . . . . . . . : Yes\nIPv4 Address. . . . . . . . . . . : 192.168.10.101(Preferred)\nDHCP Server . . . . . . . . . . . : 192.168.10.10\n\nOp de server:\nReservatie 192.168.10.200  ClientId 00-0c-29-11-22-33  CLIENT01",
      q: "De reservatie voor CLIENT01 wordt niet toegepast. Waarom?",
      o: ["Het MAC-adres in de reservatie is niet dat van de actieve adapter", "De client moet een statisch adres krijgen", "Reservaties werken alleen na een herstart van de server", ".200 ligt buiten de pool"],
      a: 0,
      w: [null, "Dan is het geen reservatie meer.", "Een reservatie werkt na het vernieuwen van de lease.", ".200 ligt in de uitsluiting, binnen het scopebereik: dat werkt."],
      e: "ClientId 00-0c-29-11-22-33 ≠ Physical Address 00-0C-29-AA-BB-CC. Corrigeer de client-ID en vernieuw de lease." },
    { out: "DHCP Enabled. . . . . . . . . . . : Yes\nIPv4 Address. . . . . . . . . . . : 192.168.10.100(Preferred)\nSubnet Mask . . . . . . . . . . . : 255.255.255.0\nDHCP Server . . . . . . . . . . . : 192.168.10.10\nDNS Servers . . . . . . . . . . . : 192.168.10.10",
      q: "Is hiermee bewezen dat de client interne namen kan omzetten?",
      o: ["Nee: de DNS-server is alleen geconfigureerd, nog niet getest", "Ja: de DNS-server staat correct", "Ja: zonder DNS zou de client geen lease krijgen", "Nee: daarvoor heb je een gateway nodig"],
      a: 0,
      w: [null, "Geconfigureerd ≠ werkend. De server kan uitstaan of de zone kan ontbreken.", "DHCP heeft geen DNS nodig om een lease te geven.", "De DNS-server staat in het eigen subnet: geen gateway nodig."],
      e: "Test afzonderlijk: <code>ping 192.168.10.10</code> (IP) en <code>nslookup srv01.cursus.local</code> (DNS)." }
  ],

  /* ---------- Introschermen ---------- */
  infoTip: "Twijfel je? Tik rechtsboven op <b>ⓘ Info</b>. Daar vind je de theorie en de labomgeving. Dat is geen spieken: ook een systeembeheerder zoekt dingen op in de documentatie.",
  intros: {
    soort: { t: "Statisch, dynamisch of reservatie?", p: [
      "Een toestel kan op drie manieren een IP-adres krijgen: <b>statisch</b> (handmatig ingesteld), <b>dynamisch</b> (een lease uit de pool van de DHCP-server) of via een <b>reservatie</b> (DHCP geeft altijd hetzelfde adres aan dat ene toestel).",
      "Je krijgt 10 toestellen. Kies telkens de soort die het best past. Het is geen absolute regel: het belangrijkste is dat je je keuze kunt verklaren."], cs: "soort" },
    dora: { t: "DORA", p: [
      "Een nieuwe client kent zijn eigen adres niet en ook de DHCP-server niet. Toch krijgt hij een configuratie, in vier berichten.",
      "Stap 1: zet de vier berichten in de juiste volgorde. Stap 2: wie verstuurt elk bericht? Stap 3: vijf vragen over broadcast, aanbod en bevestiging. Probeer het eerst zonder Info."], cs: "dora" },
    exit: { t: "Exitcheck: verbeter het scopeplan", p: [
      "Je krijgt een scopeplan vol fouten. Kies voor elk onderdeel de juiste waarde.",
      "Daarna motiveer je drie keuzes: de pool, het reservatieadres en de leaseduur."], cs: "scope" },
    check2: { t: "Begripscheck 2: controleer vóór activering", p: [
      "De scope is aangemaakt maar nog <b>inactief</b>. Dat is het moment om fouten te vinden.",
      "Zes situaties. Welke fout heeft de grootste impact, en hoe ontdek je ze vóór de clients er last van hebben?"], cs: "scope" },
    ipconfig: { t: "Lees ipconfig /all", p: [
      "<code>ipconfig /all</code> toont wat de client werkelijk gebruikt. Kijk niet alleen naar het IP-adres: ook <b>DHCP Enabled</b>, <b>DHCP Server</b>, <b>DNS Servers</b> en de leasetijden vertellen veel.",
      "Acht stukken uitvoer. Wat lees je eruit, en wat is (nog) niet bewezen?"], cs: "client" }
  },

  /* ---------- Info (theorie) ---------- */
  cheat: [
    { id: "lab", t: "De labomgeving", h:
      "<p><b>Demo's van de docent</b> (zoals in de cursus):</p>" +
      "<table><tr><th>Machine</th><th>Adres</th><th>Rol</th></tr>" +
      "<tr><td>SRV01</td><td><code>192.168.10.10</code> statisch</td><td>Windows Server 2025: DNS (zone cursus.local) en DHCP</td></tr>" +
      "<tr><td>CLIENT01</td><td>automatisch</td><td>Windows 11-client</td></tr>" +
      "<tr><td>Router</td><td>–</td><td>is er niet: geen gateway, geen Router-optie</td></tr></table>" +
      "<pre>Scope        Studentenlabo - 192.168.10.0/24\nScopebereik  192.168.10.100 – 192.168.10.219\nUitsluiting  192.168.10.200 – 192.168.10.219\nPool         192.168.10.100 – 192.168.10.199\nReservatie   192.168.10.200 → CLIENT01\nLeaseduur    8 dagen\nOpties       DNS Servers 192.168.10.10\n             DNS Domain Name cursus.local</pre>" +
      "<p><b>Jouw labo in de namiddag</b> (Orion, Labo DHCP): pool 192.168.10.50–149, printerreservatie 192.168.10.150. Omdat Windows een reservatie alleen binnen het scopebereik aanvaardt, maak je het bereik <b>50–169</b> met uitsluiting <b>150–169</b>.</p>" +
      "<p>Heet jouw server anders (bv. DNS01 met zone campusconnect.test uit de DNS-les)? Gebruik dan jouw naam en domeinnaam.</p>" },
    { id: "soort", t: "Statisch, dynamisch, reservatie", h:
      "<table><tr><th>Soort</th><th>Hoe</th><th>Typisch</th></tr>" +
      "<tr><td><b>Statisch</b></td><td>handmatig op het toestel</td><td>server, router, switch, NAS, firewall</td></tr>" +
      "<tr><td><b>Dynamisch</b></td><td>lease uit de pool</td><td>laptops, desktops, smartphones, gasten, tijdelijke VM's</td></tr>" +
      "<tr><td><b>Reservatie</b></td><td>DHCP, altijd hetzelfde adres (MAC-adres)</td><td>netwerkprinter, scanner, toegangspunt</td></tr></table>" +
      "<p>Een DHCP-server krijgt zelf altijd een <b>statisch</b> adres buiten de pool.</p><p><b>DHCP</b> vertelt de client welke DNS-server hij moet gebruiken. <b>DNS</b> zet daarna namen om naar IP-adressen.</p>" },
    { id: "dora", t: "DORA en poorten", h:
      "<table><tr><th>#</th><th>Bericht</th><th>Afzender</th><th>Doel</th></tr>" +
      "<tr><td>1</td><td>DHCPDISCOVER</td><td>client</td><td>een server zoeken (broadcast, bron 0.0.0.0 → 255.255.255.255)</td></tr>" +
      "<tr><td>2</td><td>DHCPOFFER</td><td>server</td><td>een configuratie aanbieden (nog geen bevestiging)</td></tr>" +
      "<tr><td>3</td><td>DHCPREQUEST</td><td>client</td><td>het gekozen aanbod aanvragen (broadcast: andere servers weten dat ze niet gekozen zijn)</td></tr>" +
      "<tr><td>4</td><td>DHCPACK</td><td>server</td><td>de lease bevestigen: vanaf nu mag de client de configuratie gebruiken</td></tr></table>" +
      "<p><b>DHCPNAK</b>: de server weigert de aanvraag; de client zoekt opnieuw.</p><p>UDP <b>67</b> = server, UDP <b>68</b> = client. Routers sturen broadcasts niet door: daarvoor bestaat een <b>DHCP relay agent</b>.</p>" },
    { id: "lease", t: "Leases en APIPA", h:
      "<p>Een <b>lease</b> is een tijdelijke toewijzing. Bij 8 dagen:</p><pre>T1 (50 %)    na ± 4 dagen  unicast DHCPREQUEST naar dezelfde server\nT2 (87,5 %)  na ± 7 dagen  broadcast naar eender welke server (rebinding)\nverlopen     na 8 dagen    adres niet meer gebruiken</pre>" +
      "<p><b>APIPA</b> = 169.254.0.0/16, masker 255.255.0.0: de client vroeg om een configuratie maar kreeg geen geldige lease. Een <b>symptoom</b>, geen diagnose.</p>" },
    { id: "scope", t: "Scope, pool, uitsluiting, reservatie", h:
      "<p><b>Subnet</b> beschrijft het netwerk. <b>Scope</b> beschrijft het DHCP-beheer voor dat subnet. <b>Adrespool</b> = de adressen die DHCP dynamisch uitdeelt.</p>" +
      "<div class=\"zones\"><span style=\"background:#000\">1–99<br>infrastructuur</span><span style=\"background:#919E2C\">100–199<br>pool</span><span style=\"background:#EB6008\">200–219<br>reservaties</span><span style=\"background:#5a5a5a\">220–254<br>uitbreiding</span></div>" +
      "<p>Netwerkadres (.0) en broadcastadres (.255) gaan nooit naar een host.</p>" +
      "<table><tr><th></th><th>Uitsluiting</th><th>Reservatie</th></tr><tr><td>Doel</td><td>niet dynamisch uitdelen</td><td>één adres aan één client koppelen</td></tr><tr><td>Client gebruikt DHCP</td><td>niet noodzakelijk</td><td>ja</td></tr><tr><td>MAC-adres</td><td>nee</td><td>ja</td></tr></table>" +
      "<p><b>Windows-regel:</b> een reservatie moet binnen het <b>scopebereik</b> liggen. Wil je reservaties apart houden, laat het bereik dan doorlopen en sluit dat deel uit. Een reservatie in een uitsluiting werkt.</p>" },
    { id: "opties", t: "Opties en leaseduur", h:
      "<table><tr><th>Optie</th><th>Nr.</th><th>Labo</th></tr><tr><td>Router (default gateway)</td><td>3</td><td><i>niet ingesteld: geen router</i></td></tr><tr><td>DNS Servers</td><td>6</td><td>192.168.10.10</td></tr><tr><td>DNS Domain Name</td><td>15</td><td>cursus.local</td></tr><tr><td>Lease</td><td>51</td><td>8 dagen (691 200 s)</td></tr></table>" +
      "<p>Configureer alleen een gateway die werkelijk bestaat. Gebruik de <b>interne</b> DNS-server: een externe kent cursus.local niet.</p>" +
      "<p>Niveaus: reservatieoptie → scopeoptie → serveroptie. De meest specifieke wint.</p>" +
      "<p>Korte lease: gastnetwerken, veel wissels. Lange lease: stabiele netwerken.</p><p><b>Autorisatie</b> (alleen in een domein) ≠ <b>scopeactivering</b> (mag deze scope leases uitdelen?).</p>" },
    { id: "client", t: "Commando's op de client", h:
      "<pre>ipconfig /all          volledige configuratie\nipconfig /release      lease vrijgeven\nipconfig /renew        lease aanvragen of vernieuwen\nipconfig /flushdns     DNS-cache leegmaken\nhostname\nping 127.0.0.1\nping 192.168.10.10     IP-connectiviteit\nnslookup srv01.cursus.local   DNS afzonderlijk</pre>" +
      "<p>Controleer in <code>ipconfig /all</code>: DHCP Enabled, IPv4 Address, Subnet Mask, Default Gateway, <b>DHCP Server</b>, DNS Servers, Lease Obtained/Expires, Physical Address.</p>" },
    { id: "server", t: "Commando's op de server", h:
      "<pre>Get-Service DHCPServer\nGet-DhcpServerInDC                          (alleen domein)\nGet-DhcpServerv4Binding\nGet-DhcpServerv4Scope\nGet-DhcpServerv4ExclusionRange -ScopeId 192.168.10.0\nGet-DhcpServerv4OptionValue -ScopeId 192.168.10.0\nGet-DhcpServerv4Lease -ScopeId 192.168.10.0\nGet-DhcpServerv4Reservation -ScopeId 192.168.10.0</pre>" +
      "<p>Console: Server Manager → Tools → DHCP → srv01 → IPv4 → scope → Address Pool, Address Leases, Reservations, Scope Options.</p>" },
    { id: "fail", t: "Troubleshooting", h:
      "<p><b>Eén wijziging, één test, één conclusie.</b></p><ol><li>Omschrijf het symptoom exact.</li><li>Omvang: één client of alle clients?</li><li>Verzamel bewijs per laag: <b>Client → Netwerk → DHCP-server → Scope → DNS</b>.</li><li>Hypothese.</li><li>Eén gerichte wijziging.</li><li>Eindtest (release, renew, ipconfig /all, ping, nslookup).</li></ol>" +
      "<table><tr><th>Waarneming</th><th>Richting</th></tr><tr><td>169.254.x.x</td><td>adapter, netwerk, service, binding, scope, pool</td></tr><tr><td>adres uit ander subnet</td><td>tweede DHCP-server of verkeerd virtueel netwerk: kijk naar DHCP Server</td></tr><tr><td>IP werkt, namen niet</td><td>DNS-optie, DNS-server, zone</td></tr><tr><td>reservatie niet toegepast</td><td>MAC-adres, actieve adapter, scope, lease niet vernieuwd</td></tr><tr><td>DHCP Enabled: No</td><td>client staat statisch</td></tr></table>" }
  ]
};
