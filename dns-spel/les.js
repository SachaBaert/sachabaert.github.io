/* Hulpmiddelen tijdens de les: voorspellen bij de demo's, status, foutenpracticum, ticketformulier, exit ticket.
   Vervangt alle papieren werkvormen. Aanpassen kan hier zonder de code te raken. */
(function (D) {
  D.demos = [
    {
      "n": 0,
      "t": "Het hosts-bestand",
      "q": "We voegen één regel toe aan het hosts-bestand van CLIENT01: <code>192.168.10.20 web01.campusconnect.test</code>. Wat doet <code>ping web01.campusconnect.test</code> daarna?",
      "o": [
        "De naam wordt gevonden: ping toont [192.168.10.20]",
        "Nog steeds ‘could not find host’: er is nog geen DNS-server",
        "De ping vraagt de naam eerst aan DNS01",
        "Foutmelding: in het hosts-bestand mogen geen servernamen staan"
      ],
      "a": 0,
      "w": [
        null,
        "Het hosts-bestand wordt vóór DNS geraadpleegd. Je hebt dus geen DNS-server nodig om deze ene naam te vinden.",
        "CLIENT01 kijkt eerst in zijn cache en het hosts-bestand. Daar staat de naam nu al, dus DNS01 komt er niet aan te pas.",
        "Het hosts-bestand is net bedoeld om namen aan IP-adressen te koppelen."
      ],
      "e": "De naam wordt omgezet via het hosts-bestand: ping toont [192.168.10.20]. Of er daar ook een computer antwoordt, is een andere vraag: naamomzetting ≠ bereikbaarheid. En bij 300 pc's moet je die regel 300 keer aanpassen: daarom bestaat DNS."
    },
    {
      "n": 1,
      "t": "DNS Server-rol installeren",
      "q": "De DNS-rol is geïnstalleerd, maar er zijn nog <b>geen zones</b>. Kan DNS01 <b>web01.campusconnect.test</b> beantwoorden? En <b>www.microsoft.com</b>?",
      "o": [
        "web01: nee (negatief antwoord) · microsoft.com: mogelijk wel",
        "Beide: ja, DNS01 is nu een DNS-server",
        "Beide: nee, zonder zones kan DNS01 niets",
        "web01: ja · microsoft.com: nee"
      ],
      "a": 0,
      "w": [
        null,
        "Een DNS-server kent alleen namen uit zijn eigen zones. Voor campusconnect.test is er nog geen zone.",
        "Voor externe namen heeft DNS01 geen eigen zone nodig: hij kan ze opzoeken via de root hints (als hij naar buiten kan).",
        "Omgekeerd: web01 staat nog nergens, microsoft.com kan via de root hints wel lukken."
      ],
      "e": "web01: nee, er is nog geen zone campusconnect.test. microsoft.com: mogelijk wel, via de root hints, als DNS01 naar buiten kan. Daarom is een forwarder later een keuze en geen noodzaak."
    },
    {
      "n": 2,
      "t": "Zone en A-records",
      "q": "We maken een <b>lege</b> zone campusconnect.test. Welke records staan er al in, nog vóór we er één toevoegen?",
      "o": [
        "Geen enkel record",
        "SOA en NS",
        "Een A-record voor dns01",
        "SOA, NS en A-records voor alle servers"
      ],
      "a": 1,
      "w": [
        "Elke zone krijgt automatisch twee beheerrecords: wie verantwoordelijk is (NS) en de beheergegevens (SOA).",
        null,
        "Het A-record voor dns01 maak je zelf. Zonder dat record kan de NS-naam niet omgezet worden.",
        "De A-records van de servers moet je zelf toevoegen; alleen SOA en NS komen vanzelf."
      ],
      "e": "Elke zone krijgt automatisch een SOA- en een NS-record. De A-records maak je zelf, ook dat van dns01: anders kan de naam uit het NS-record niet omgezet worden."
    },
    {
      "n": 3,
      "t": "CNAME, NS en SOA",
      "q": "We maken alias <b>intranet</b> → web01. Hoeveel records krijg je terug bij <code>Resolve-DnsName intranet.campusconnect.test</code>?",
      "o": [
        "Eén: een A-record met 192.168.10.20",
        "Twee: de CNAME én het A-record van web01",
        "Eén: alleen de CNAME",
        "Geen: een alias heeft geen IP-adres"
      ],
      "a": 1,
      "w": [
        "Je krijgt het A-record wel, maar ook de CNAME die toont dat intranet een alias is.",
        null,
        "Zonder -Type CNAME zoekt de server meteen door naar het doel en geeft hij ook het A-record mee.",
        "De alias zelf heeft geen adres, maar de server zoekt het adres van het doel (web01) erbij."
      ],
      "e": "Twee records: de CNAME (intranet → web01) én het A-record van web01. Een CNAME wijst naar een naam, nooit rechtstreeks naar een IP-adres."
    },
    {
      "n": 4,
      "t": "Reverse zone en PTR",
      "q": "Vóór we de reverse zone maken: wat geeft <code>Resolve-DnsName 192.168.10.20 -Server 192.168.10.10</code>?",
      "o": [
        "web01.campusconnect.test",
        "Geen naam: er is nog geen reverse zone met PTR",
        "A 192.168.10.20",
        "time-out"
      ],
      "a": 1,
      "w": [
        "Die naam vind je alleen via een PTR-record in een reverse zone, en die bestaat nog niet.",
        null,
        "Je zoekt een naam bij een IP-adres. Een A-record werkt alleen van naam naar adres.",
        "DNS01 draait en antwoordt; hij heeft alleen geen gegevens voor deze vraag."
      ],
      "e": "Eerst geen naam: het A-record helpt niet in de omgekeerde richting. Pas met de zone 10.168.192.in-addr.arpa en het PTR-record 20 komt web01 terug."
    },
    {
      "n": 5,
      "t": "CLIENT01 als DNS-client",
      "q": "CLIENT01 gebruikt nog een andere DNS-server. Werkt een <b>gerichte</b> query voor web01 (met <code>-Server 192.168.10.10</code>)? En een <b>gewone</b>?",
      "o": [
        "Gericht: ja · gewoon: pas na de instelling",
        "Allebei ja",
        "Allebei nee",
        "Gericht: nee · gewoon: ja"
      ],
      "a": 0,
      "w": [
        null,
        "Een gewone query gaat naar de DNS-server die op CLIENT01 ingesteld is. Die kent campusconnect.test niet.",
        "Bij een gerichte query kies je zelf de server: DNS01 kent web01 wel.",
        "Net omgekeerd: gericht gaat rechtstreeks naar DNS01, gewoon naar de (nog verkeerde) ingestelde server."
      ],
      "e": "Gericht: ja, je kiest zelf de server. Gewoon: pas nadat CLIENT01 DNS01 als DNS-server gebruikt. De korte naam (web01 zonder domein) werkt alleen met een DNS-suffix."
    },
    {
      "n": 6,
      "t": "Een forwarder instellen",
      "q": "Na het instellen van de forwarder: gaat de query voor <b>web01.campusconnect.test</b> naar de forwarder?",
      "o": [
        "Nee, DNS01 is autoritatief voor campusconnect.test",
        "Ja, alle query's gaan nu naar de forwarder",
        "Alleen als de cache leeg is",
        "Ja, maar alleen de eerste keer"
      ],
      "a": 0,
      "w": [
        null,
        "Alleen wat niet in een eigen zone of in de cache staat, gaat naar de forwarder.",
        "Voor zijn eigen zone heeft DNS01 de cache niet nodig: hij leest het antwoord uit de zone.",
        "Ook de eerste keer antwoordt DNS01 zelf uit zijn zone."
      ],
      "e": "Nee. DNS01 is autoritatief voor campusconnect.test en antwoordt zelf. Alleen namen buiten zijn eigen zones (en niet in de cache) gaan naar de forwarder."
    }
  ];
  D.status = [
    {
      "n": 1,
      "t": "Plannen",
      "d": "Netwerkplan en tests klaar?",
      "c": "#000000"
    },
    {
      "n": 2,
      "t": "Configureren",
      "d": "Server, zones, records, client, forwarder",
      "c": "#919E2C"
    },
    {
      "n": 3,
      "t": "Probleem",
      "d": "De docent komt langs. Kun je dit al zeggen?",
      "c": "#EB6008",
      "q": [
        "Het exacte symptoom (welk commando, welke uitvoer)",
        "De omvang (één naam, één client of alles? gewoon of gericht?)",
        "Twee mogelijke oorzaken"
      ]
    },
    {
      "n": 4,
      "t": "Valideren",
      "d": "Welk bewijs ondersteunt welke conclusie?",
      "c": "#7C5EAC"
    }
  ];
  D.fouten = [
    {
      "nr": 1,
      "s": 1,
      "ticket": "Geen enkele interne naam werkt meer op mijn pc, maar ik kan DNS01 wel pingen.",
      "uit": "Op CLIENT01: <code>Set-DnsClientServerAddress -InterfaceAlias \"Ethernet0\" -ServerAddresses 192.168.10.11</code>",
      "sym": "Gewone query: time-out. Gerichte query naar 192.168.10.10 werkt wel.",
      "opl": "<code>Get-DnsClientServerAddress</code> → verkeerde server. Terugzetten naar 192.168.10.10 en <code>Clear-DnsClientCache</code>.",
      "laag": "client"
    },
    {
      "nr": 2,
      "s": 1,
      "ticket": "Niemand kan nog een servernaam opzoeken. De servers zelf staan wel aan.",
      "uit": "Op DNS01: <code>Stop-Service DNS</code> en <code>Set-Service DNS -StartupType Disabled</code>",
      "sym": "Alle query's (ook gericht): time-out. Ping naar 192.168.10.10 lukt.",
      "opl": "<code>Get-Service DNS</code> → Stopped/Disabled. <code>Set-Service DNS -StartupType Automatic</code> en <code>Start-Service DNS</code>.",
      "laag": "service"
    },
    {
      "nr": 3,
      "s": 2,
      "ticket": "FILE01 werkt, maar WEB01 kan niet gevonden worden. Ook ‘intranet’ werkt niet meer.",
      "uit": "Op DNS01: <code>Remove-DnsServerResourceRecord -ZoneName \"campusconnect.test\" -Name \"web01\" -RRType A -Force</code>",
      "sym": "Negatief antwoord (DNS name does not exist) voor web01; intranet geeft enkel de CNAME, geen adres.",
      "opl": "A-record opnieuw aanmaken. Valkuil: de client heeft het negatieve antwoord gecachet → <code>Clear-DnsClientCache</code> vóór de hertest.",
      "laag": "record"
    },
    {
      "nr": 4,
      "s": 2,
      "ticket": "De naam van WEB01 wordt gevonden, maar ik kom bij de verkeerde server uit.",
      "uit": "Op DNS01: A-record web01 verwijderen (zie kaart 3) en <code>Add-DnsServerResourceRecordA -ZoneName \"campusconnect.test\" -Name \"web01\" -IPv4Address 192.168.10.99</code>",
      "sym": "Foutief positief: A 192.168.10.99. Reverse lookup van 192.168.10.20 geeft nog steeds web01 → A en PTR komen niet overeen.",
      "opl": "Record corrigeren naar 192.168.10.20; forward én reverse hertesten.",
      "laag": "record"
    },
    {
      "nr": 5,
      "s": 2,
      "ticket": "De naam van WEB01 werkt, maar in de logboeken zie ik alleen het IP-adres 192.168.10.20.",
      "uit": "Op DNS01: <code>Remove-DnsServerResourceRecord -ZoneName \"10.168.192.in-addr.arpa\" -Name \"20\" -RRType Ptr -Force</code>",
      "sym": "<code>Resolve-DnsName 192.168.10.20</code> → negatief antwoord; forward werkt.",
      "opl": "PTR-record 20 → web01.campusconnect.test opnieuw maken.",
      "laag": "record"
    },
    {
      "nr": 6,
      "s": 2,
      "ticket": "WEB01 werkt via zijn servernaam, maar intranet werkt niet.",
      "uit": "Op DNS01: CNAME intranet verwijderen (<code>-RRType CName</code>) en opnieuw maken met <code>-HostNameAlias \"webs01.campusconnect.test\"</code>",
      "sym": "intranet geeft een CNAME naar webs01, maar geen adres: de doelnaam bestaat niet.",
      "opl": "CNAME-doel corrigeren naar web01.campusconnect.test.",
      "laag": "record"
    },
    {
      "nr": 7,
      "s": 3,
      "ticket": "Ik kan alle interne servers bereiken, maar websites op het internet worden niet meer gevonden.",
      "uit": "Op DNS01: <code>Set-DnsServerForwarder -IPAddress 192.168.10.254 -UseRootHint $false</code> en daarna <code>Clear-DnsServerCache -Force</code>",
      "sym": "Interne namen: ok. Externe namen: time-out of server failure.",
      "opl": "<code>Get-DnsServerForwarder</code> → verkeerd adres. Juiste forwarder (192.168.125.2) instellen, <code>-UseRootHint $true</code> terugzetten, intern én extern hertesten.",
      "laag": "service"
    },
    {
      "nr": 8,
      "s": 3,
      "ticket": "CLIENT01 blijft voor WEB01 een oud adres gebruiken, ook al zegt de beheerder dat DNS juist staat.",
      "uit": "Op CLIENT01 (als Administrator) onderaan het hosts-bestand: <code>192.168.10.99   web01.campusconnect.test</code>",
      "sym": "Gewone query of ping → 192.168.10.99. Gerichte query naar DNS01 → 192.168.10.20 (juist).",
      "opl": "Verschil gewoon/gericht wijst naar de client. Hosts-bestand nakijken, regel verwijderen, <code>Clear-DnsClientCache</code>.",
      "laag": "client"
    }
  ];
  D.ladder = "client → netwerk → service → zone → record → cache → toepassing";
  D.ticketVelden = [
    {
      "k": "nr",
      "l": "Ticketnummer · melding",
      "h": "Neem de melding letterlijk over.",
      "r": 2
    },
    {
      "k": "sym",
      "l": "1 · Exact symptoom",
      "h": "Welk commando, welke uitvoer?",
      "r": 3
    },
    {
      "k": "omv",
      "l": "2 · Omvang",
      "h": "Eén naam / één client / alles? Gewone vs. gerichte query?",
      "r": 2
    },
    {
      "k": "bew",
      "l": "3 · Bewijs",
      "h": "Welke controles per laag (client → netwerk → service → zone → record → cache)?",
      "r": 5
    },
    {
      "k": "hyp",
      "l": "4 · Hypothese",
      "h": "Wat is volgens jou de oorzaak, en waarom?",
      "r": 2
    },
    {
      "k": "wijz",
      "l": "5 · Eén wijziging",
      "h": "Welke ene wijziging voer je uit?",
      "r": 2
    },
    {
      "k": "test",
      "l": "6 · Oorspronkelijke test herhaald",
      "h": "Verwachting · waarneming · conclusie",
      "r": 3
    },
    {
      "k": "reg",
      "l": "7 · Regressietest",
      "h": "Forward · alias · NS/SOA · reverse · extern · client · service",
      "r": 3
    }
  ];
  D.exitTicket = {
    "mc": [
      {
        "q": "Een query geeft <b>DNS name does not exist</b>. Wat weet je dan <b>zeker</b>?",
        "o": [
          "Een DNS-server antwoordt: de service draait. Of het record echt ontbreekt, weet je pas na een gerichte query met lege cache.",
          "De DNS-service staat uit.",
          "Het record bestaat zeker niet in de zone.",
          "Er is een netwerkprobleem tussen client en server."
        ],
        "a": 0,
        "w": [
          null,
          "Een gestopte service antwoordt niet: dan krijg je een time-out.",
          "Niet zeker: het kan een negatief antwoord uit de cache zijn, of de client vraagt het aan de verkeerde server.",
          "Bij een netwerkprobleem komt er geen antwoord: time-out."
        ],
        "e": "Een negatief antwoord is een antwoord: er draait een DNS-server. Maar welke server antwoordde (gewoon of gericht?) en komt het uit de cache? Dat moet je nog controleren."
      },
      {
        "q": "Waarom gaat de query voor <b>web01.campusconnect.test</b> niet naar de forwarder?",
        "o": [
          "DNS01 is autoritatief voor campusconnect.test en antwoordt zelf",
          "De forwarder is alleen voor reverse lookups",
          "CLIENT01 vraagt het rechtstreeks aan WEB01",
          "De forwarder kent geen namen die op .test eindigen"
        ],
        "a": 0,
        "w": [
          null,
          "De forwarder is voor alle namen buiten de eigen zones van DNS01, forward en reverse.",
          "CLIENT01 vraagt alles aan zijn DNS-server (DNS01), nooit rechtstreeks aan WEB01.",
          "Dat is niet de reden: de vraag komt gewoon nooit bij de forwarder, omdat DNS01 zelf het antwoord heeft."
        ],
        "e": "DNS01 heeft de zone campusconnect.test en is daarvoor autoritatief. Alleen namen buiten zijn eigen zones (en niet in de cache) gaan naar de forwarder."
      }
    ],
    "open": "Welke fout uit het foutenpracticum vind je nu sneller? Waarom?"
  };
  var I = {
    "demo": {
      "t": "Voorspel de demo",
      "p": [
        "Bij elke demo voorspel je eerst wat er gaat gebeuren. Kies je antwoord vóór de docent het commando uitvoert.",
        "Na de demo tik je op <b>De demo is gebeurd</b>: dan zie je het bewijs en waarom je voorspelling klopte of niet. Juist of fout maakt niet uit: het denkwerk telt.",
        "Je voorspellingen blijven bewaard op dit toestel. Onderaan vind je je overzicht."
      ],
      "cs": "path"
    },
    "status": {
      "t": "Waar sta jij?",
      "p": [
        "Kies je status. Je gsm toont die dan schermvullend in een kleur. Zet hem rechtop naast je laptop: zo ziet de docent van achteraan wie hulp nodig heeft.",
        "Bij <b>3 · Probleem</b> komt de docent langs. Zorg dat je dan het symptoom, de omvang en twee mogelijke oorzaken kunt noemen. Tik op het scherm om terug te gaan."
      ],
      "cs": "fail"
    },
    "fout": {
      "t": "Foutenpracticum: breek het bij je buur",
      "p": [
        "Maak eerst een snapshot <b>voor-fout</b> van DNS01 en CLIENT01.",
        "<b>Saboteur</b>: trek een foutkaart en voer de fout uit bij je buur (2 min, je buur kijkt weg). Geef je buur alleen het kaartnummer.",
        "<b>Slachtoffer</b>: vul het kaartnummer in en lees het ticket (de melding van de gebruiker). Zoek de oorzaak en noteer alles in het <b>ticketformulier</b>.",
        "Na 10 min vastzitten? De saboteur mag één hint geven: de laag waarin de fout zit."
      ],
      "cs": "fail"
    },
    "ticket": {
      "t": "Ticketformulier",
      "p": [
        "Werk een ticket systematisch af: symptoom → omvang → bewijs → hypothese → één wijziging → hertest.",
        "Wat je typt, wordt automatisch bewaard op dit toestel. Klaar? Kopieer alles naar je werkdocument of download het als tekstbestand."
      ],
      "cs": "fail"
    },
    "exitticket": {
      "t": "Exit ticket",
      "p": [
        "Drie korte vragen om de dag af te sluiten. Je antwoorden blijven alleen op dit toestel; de docent ziet ze niet.",
        "Bij de eerste twee vragen krijg je meteen feedback. De derde is een korte reflectie."
      ],
      "cs": "fail"
    }
  };
  Object.keys(I).forEach(function (k) { D.intros[k] = I[k]; });
})(window.DNSDATA);
