/* Gegenereerd uit het lesontwerp (design*.py). Aanpassen kan ook hier. */
window.ADDATA = {
 "sets": {
  "lokaal": {
   "t": "Lokaal of centraal?",
   "intro": "Wordt dit op één computer beheerd (lokaal) of één keer centraal in Active Directory?",
   "cats": [
    {
     "t": "Lokaal",
     "d": "op die ene computer",
     "c": "#14799B",
     "l": "iets dat alleen op één computer bestaat"
    },
    {
     "t": "Centraal",
     "d": "één keer in AD",
     "c": "#919E2C",
     "l": "iets dat centraal in het domein beheerd wordt"
    }
   ],
   "items": [
    {
     "q": "De account <b>CLIENT01\\lokaletest</b>.",
     "a": "Lokaal",
     "e": "De naam vóór de backslash is de accountbron: de lokale accountdatabase van CLIENT01."
    },
    {
     "q": "De account <b>sara.peeters@ad.brightlearning.test</b>.",
     "a": "Centraal",
     "e": "Een UPN met het domeinsuffix: de account staat in AD en werkt op elke domeincomputer waar Sara mag aanmelden."
    },
    {
     "q": "Het wachtwoord van <b>.\\lokalebeheerder</b>.",
     "a": "Lokaal",
     "e": "De punt betekent ‘deze computer’. Op twintig pc's zijn dat twintig afzonderlijke wachtwoorden."
    },
    {
     "q": "Het lidmaatschap van <b>GG_Opleiding</b>.",
     "a": "Centraal",
     "e": "Een security group in het domein: één keer aanpassen, overal geldig na een nieuwe aanmelding."
    },
    {
     "q": "De lokale groep <b>Administrators</b> op CLIENT01.",
     "a": "Lokaal",
     "e": "Lokale groepen bestaan per computer. Een domain join maakt Sara er niet automatisch lid van."
    },
    {
     "q": "Een aanmeldbericht dat via <b>secpol.msc</b> op één pc ingesteld is.",
     "a": "Lokaal",
     "e": "Lokaal beleid geldt op die ene pc. Met een GPO op een OU stel je het één keer in voor alle clients."
    },
    {
     "q": "Een aanmeldbericht in een <b>GPO gekoppeld aan OU Computers</b>.",
     "a": "Centraal",
     "e": "Eén GPO, één link: elke computer in de OU ontvangt het."
    },
    {
     "q": "Een vertrekkende medewerker <b>uitschakelen in ADUC</b>.",
     "a": "Centraal",
     "e": "Eén handeling blokkeert nieuwe aanmeldingen op alle domeincomputers."
    },
    {
     "q": "Een gebruiker <b>jelle</b> op PC-ADMIN-01 én een gebruiker <b>jelle</b> op PC-ADMIN-02.",
     "a": "Lokaal",
     "e": "Twee afzonderlijke accounts met elk een eigen wachtwoord en een eigen SID, ook al is de naam gelijk."
    },
    {
     "q": "Het profiel <b>C:\\Users\\sara.peeters</b> op CLIENT01.",
     "a": "Lokaal",
     "e": "Strikvraag: Sara's identiteit is centraal, maar haar standaardprofiel wordt lokaal op CLIENT01 bewaard."
    }
   ]
  },
  "begrip": {
   "t": "Object, attribuut of dienst?",
   "intro": "Bepaal of het om een object, een attribuut of een dienst gaat.",
   "cats": [
    {
     "t": "Object",
     "d": "een ding in de directory",
     "c": "#EB6008",
     "l": "een herkenbaar onderdeel met een eigen identiteit in de directory"
    },
    {
     "t": "Attribuut",
     "d": "een eigenschap",
     "c": "#14799B",
     "l": "een eigenschap die een object beschrijft"
    },
    {
     "t": "Dienst",
     "d": "het systeem dat werkt",
     "c": "#000000",
     "l": "het systeem dat gegevens opslaat, vindt, beveiligt of beheert"
    }
   ],
   "items": [
    {
     "q": "De gebruiker <b>Sara Peeters</b>.",
     "a": "Object",
     "e": "Een gebruikersobject met een eigen identiteit (SID)."
    },
    {
     "q": "De <b>afdeling</b> waarin Sara werkt.",
     "a": "Attribuut",
     "e": "Department is een eigenschap van het gebruikersobject."
    },
    {
     "q": "De computer <b>CLIENT01</b> in AD.",
     "a": "Object",
     "e": "Een computerobject: de voorstelling van het toestel in het domein."
    },
    {
     "q": "Het systeem waarmee objectgegevens worden opgeslagen en beschikbaar gemaakt.",
     "a": "Dienst",
     "e": "Dat is AD DS, de directorydienst."
    },
    {
     "q": "De <b>aanmeldingsnaam</b> sara.peeters.",
     "a": "Attribuut",
     "e": "Een eigenschap (sAMAccountName/UPN) van het object."
    },
    {
     "q": "De groep <b>GG_Opleiding</b>.",
     "a": "Object",
     "e": "Een groepsobject met leden."
    },
    {
     "q": "Het <b>groepsbereik</b> Global van GG_Opleiding.",
     "a": "Attribuut",
     "e": "Scope is een eigenschap van het groepsobject."
    },
    {
     "q": "<b>Active Directory Domain Services</b> op DC01.",
     "a": "Dienst",
     "e": "De rol die de directory aanbiedt."
    },
    {
     "q": "De status <b>Ingeschakeld</b> van een account.",
     "a": "Attribuut",
     "e": "Een eigenschap: dezelfde account kan uitgeschakeld worden zonder een nieuw object."
    },
    {
     "q": "De OU <b>Gebruikers</b>.",
     "a": "Object",
     "e": "Ook een OU is een object in de directory (een containerobject)."
    },
    {
     "q": "Het <b>e-mailadres</b> van Lina.",
     "a": "Attribuut",
     "e": "Contactgegevens zijn attributen."
    }
   ]
  },
  "auth": {
   "t": "Authenticatie of autorisatie?",
   "intro": "Gaat het vooral over <b>wie ben je?</b> (authenticatie) of <b>wat mag je?</b> (autorisatie)",
   "cats": [
    {
     "t": "Authenticatie",
     "d": "wie ben je?",
     "c": "#919E2C",
     "l": "het controleren van een identiteit"
    },
    {
     "t": "Autorisatie",
     "d": "wat mag je?",
     "c": "#A6090F",
     "l": "het bepalen wat een gekende identiteit mag doen"
    }
   ],
   "items": [
    {
     "q": "Sara voert een verkeerd wachtwoord in en kan zich niet aanmelden.",
     "a": "Authenticatie",
     "e": "De aangeboden credentials zijn niet geldig."
    },
    {
     "q": "Youssef meldt zich aan, maar kan de map Personeelszaken niet openen.",
     "a": "Autorisatie",
     "e": "De identiteit is gekend; de toegang tot de resource wordt geweigerd."
    },
    {
     "q": "Een uitgeschakelde account probeert zich op CLIENT01 aan te melden.",
     "a": "Authenticatie",
     "e": "De account mag niet gebruikt worden om aan te melden."
    },
    {
     "q": "Een gebruiker kan een document lezen, maar niet wijzigen.",
     "a": "Autorisatie",
     "e": "Read is toegestaan, Modify niet."
    },
    {
     "q": "De domain controller controleert de identiteit van een domeingebruiker.",
     "a": "Authenticatie",
     "e": "Identiteit controleren is authenticatie."
    },
    {
     "q": "servicedesk.test probeert Lina te verwijderen: <i>Access is denied</i>.",
     "a": "Autorisatie",
     "e": "servicedesk.test is wel aangemeld (geauthenticeerd), maar de handeling is niet gedelegeerd."
    },
    {
     "q": "Een account wordt vergrendeld na vijf foute wachtwoorden.",
     "a": "Authenticatie",
     "e": "Het gaat om mislukte pogingen om de identiteit te bewijzen."
    },
    {
     "q": "CLIENT01 bewijst zijn identiteit aan het domein met het machinegeheim (secure channel).",
     "a": "Authenticatie",
     "e": "Ook een computer authenticeert zich als security principal."
    },
    {
     "q": "Lina is lid van GG_Administratie en krijgt daardoor Read op Lesmateriaal.",
     "a": "Autorisatie",
     "e": "Groepslidmaatschap en machtigingen bepalen wat ze mag."
    },
    {
     "q": "Een gebruiker meldt aan met <b>AD\\sara.peeters</b> in plaats van de UPN.",
     "a": "Authenticatie",
     "e": "Twee notaties voor dezelfde identiteit: het gaat om wie je bent."
    }
   ]
  },
  "jml": {
   "t": "Joiner, mover of leaver?",
   "intro": "In welke fase van de levenscyclus hoort deze beheeractie?",
   "cats": [
    {
     "t": "Joiner",
     "d": "start",
     "c": "#919E2C",
     "l": "de fase waarin een medewerker start"
    },
    {
     "t": "Mover",
     "d": "verandert",
     "c": "#14799B",
     "l": "de fase waarin functie of afdeling verandert"
    },
    {
     "t": "Leaver",
     "d": "vertrekt",
     "c": "#A6090F",
     "l": "de fase waarin een medewerker vertrekt"
    }
   ],
   "items": [
    {
     "q": "De account vandaag aanmaken, maar <b>uitgeschakeld</b> laten tot de startdatum maandag.",
     "a": "Joiner",
     "e": "De identiteit bestaat al, maar kan nog niet voortijdig gebruikt worden."
    },
    {
     "q": "Department aanpassen en de gebruiker uit <b>GG_Opleiding</b> halen.",
     "a": "Mover",
     "e": "Oude toegang weg, nieuwe toegang gericht toevoegen."
    },
    {
     "q": "Account uitschakelen, groepen nakijken en pas na de bewaartermijn verwijderen.",
     "a": "Leaver",
     "e": "Eerst blokkeren, dan afhandelen, later verwijderen."
    },
    {
     "q": "Een tijdelijk wachtwoord via een geschikt kanaal bezorgen met ‘must change at next logon’.",
     "a": "Joiner",
     "e": "Veilige start: de gebruiker kiest zelf een persoonlijk wachtwoord."
    },
    {
     "q": "Youssef werkt tijdelijk bij Administratie.",
     "a": "Mover",
     "e": "Functiewijziging: lidmaatschappen aanpassen zodat rechten zich niet opstapelen."
    },
    {
     "q": "Het eigenaarschap van bestanden overdragen aan een collega.",
     "a": "Leaver",
     "e": "Gegevens en eigenaarschap afhandelen hoort bij vertrek."
    },
    {
     "q": "Alleen de groepen toekennen die voor de nieuwe functie nodig zijn.",
     "a": "Joiner",
     "e": "Basistoegang volgens least privilege."
    },
    {
     "q": "De gebruiker naar een andere OU verplaatsen omdat er ander beleid moet gelden.",
     "a": "Mover",
     "e": "De OU-locatie bepaalt beheer en beleid; bij een functiewijziging kan die veranderen."
    },
    {
     "q": "VPN-toegang en actieve sessies van de medewerker beëindigen.",
     "a": "Leaver",
     "e": "Uitschakelen beëindigt niet noodzakelijk bestaande sessies."
    }
   ]
  },
  "cu": {
   "t": "Computer of User Configuration?",
   "intro": "In welke helft van een GPO hoort deze instelling? Computer Configuration volgt het computerobject, User Configuration het gebruikersobject.",
   "cats": [
    {
     "t": "Computer",
     "d": "volgt het toestel",
     "c": "#000000",
     "l": "een instelling die bij het toestel hoort, voor iedereen die aanmeldt"
    },
    {
     "t": "User",
     "d": "volgt de gebruiker",
     "c": "#EB6008",
     "l": "een instelling die met de gebruiker meereist, op elke computer"
    }
   ],
   "items": [
    {
     "q": "Een aanmeldbericht vóór iemand aanmeldt.",
     "a": "Computer",
     "e": "Er is nog geen gebruiker aangemeld: het hoort bij het toestel (Security Options)."
    },
    {
     "q": "Het pictogram van de Prullenbak van het bureaublad verwijderen voor Sara.",
     "a": "User",
     "e": "User Configuration › Administrative Templates › Desktop: volgt Sara."
    },
    {
     "q": "Loopback processing inschakelen voor de lescomputers.",
     "a": "Computer",
     "e": "Loopback is zelf een computerinstelling."
    },
    {
     "q": "Een firewallregel op alle clients.",
     "a": "Computer",
     "e": "Beveiligingsconfiguratie van het toestel."
    },
    {
     "q": "De toegang tot het Configuratiescherm verbieden voor gewone medewerkers.",
     "a": "User",
     "e": "Een beperking van de gebruikersomgeving."
    },
    {
     "q": "Windows Update-instellingen voor de werkplekken.",
     "a": "Computer",
     "e": "Systeeminstelling van het toestel."
    },
    {
     "q": "Een netwerkschijf koppelen voor de medewerkers van Opleiding (preference).",
     "a": "User",
     "e": "Drive mappings worden per gebruiker toegepast."
    },
    {
     "q": "De schermbeveiliging van de gebruiker na 10 minuten.",
     "a": "User",
     "e": "Een instelling van de gebruikersomgeving."
    },
    {
     "q": "De naam van de lokale Administrator-account op alle clients wijzigen.",
     "a": "Computer",
     "e": "Security Options van het toestel."
    },
    {
     "q": "Een bureaubladachtergrond voor iedereen in OU Gebruikers.",
     "a": "User",
     "e": "Volgt het gebruikersobject in OU Gebruikers."
    }
   ]
  }
 },
 "schema": {
  "intro": "Je tekende de infrastructuur van BrightLearning. Benoem nu de relaties en de gegevens zoals ze in een goed diagram moeten staan.",
  "fields": [
   {
    "k": "r1",
    "l": "Pijl CLIENT01 → DNS op DC01",
    "o": [
     "DNS-vraag",
     "Aanmelding",
     "Replicatie",
     "Biedt AD DS aan"
    ],
    "a": "DNS-vraag",
    "x": "CLIENT01 vraagt aan DNS op DC01 welke server de domeindiensten aanbiedt.",
    "why": {
     "Aanmelding": "Aanmelden kan pas nadat de client een DC gevonden heeft.",
     "Replicatie": "Replicatie gebeurt tussen domain controllers, niet met een client.",
     "Biedt AD DS aan": "Dat is de relatie tussen DC01 en het domein."
    }
   },
   {
    "k": "r2",
    "l": "Pijl DNS → DC01",
    "o": [
     "Locatorrecord (SRV)",
     "A-record van CLIENT01",
     "DHCP-lease",
     "GPO-link"
    ],
    "a": "Locatorrecord (SRV)",
    "x": "Het SRV-record _ldap._tcp.dc._msdcs… verwijst naar DC01.",
    "why": {
     "A-record van CLIENT01": "Dat helpt anderen CLIENT01 vinden, niet de DC.",
     "DHCP-lease": "In dit labo werken we met vaste adressen; DHCP speelt geen rol.",
     "GPO-link": "Een GPO-link hoort bij beleid, niet bij DNS."
    }
   },
   {
    "k": "r3",
    "l": "Pijl domeingebruiker (op CLIENT01) → DC01",
    "o": [
     "Aanmelding: DC01 controleert de identiteit",
     "DNS-vraag",
     "Autorisatie op een map",
     "Domain join"
    ],
    "a": "Aanmelding: DC01 controleert de identiteit",
    "x": "Authenticatie: de DC controleert de domeinidentiteit.",
    "why": {
     "DNS-vraag": "De DNS-vraag komt van de computer, vóór de aanmelding.",
     "Autorisatie op een map": "Autorisatie volgt pas na authenticatie, bij het openen van een resource.",
     "Domain join": "De join is een handeling van de computer, niet van de gebruiker."
    }
   },
   {
    "k": "r4",
    "l": "Pijl DC01 → ad.brightlearning.test",
    "o": [
     "Biedt AD DS aan",
     "Is het domein",
     "Is het forest",
     "DNS-vraag"
    ],
    "a": "Biedt AD DS aan",
    "x": "DC01 is een server waarop AD DS voor het domein draait. Het domein zelf is een logische structuur.",
    "why": {
     "Is het domein": "Een domein is geen server. Teken het als een kader.",
     "Is het forest": "Het forest is de hoogste logische structuur, geen machine.",
     "DNS-vraag": "Een DNS-vraag gaat van client naar DNS-server."
    }
   },
   {
    "k": "d1",
    "l": "DNS-server van CLIENT01",
    "o": [
     "192.168.50.10",
     "8.8.8.8",
     "192.168.50.1",
     "127.0.0.1"
    ],
    "a": "192.168.50.10",
    "x": "DC01 host de interne zone en de locatorrecords.",
    "why": {
     "8.8.8.8": "Een publieke DNS-server kent ad.brightlearning.test niet.",
     "192.168.50.1": "Er is geen router of DNS-server op dat adres in het labo.",
     "127.0.0.1": "Dat is CLIENT01 zelf; CLIENT01 is geen DNS-server."
    }
   },
   {
    "k": "d2",
    "l": "Waar staat het gebruikersobject sara.peeters?",
    "o": [
     "In het domein (de directory op DC01)",
     "Op CLIENT01",
     "In de DNS-zone",
     "In het forest, buiten het domein"
    ],
    "a": "In het domein (de directory op DC01)",
    "x": "De account wordt in het domein bewaard; DC01 biedt de directory aan.",
    "why": {
     "Op CLIENT01": "Op CLIENT01 staat alleen haar lokaal profiel na de eerste aanmelding.",
     "In de DNS-zone": "DNS bevat records, geen gebruikersaccounts.",
     "In het forest, buiten het domein": "Gebruikers horen in een domein van het forest."
    }
   }
  ],
  "fout": [
   {
    "q": "Een student tekent <b>ad.brightlearning.test</b> als een tweede servericoon naast DC01. Wat is fout?",
    "o": [
     "Een domein is een logische structuur: teken het als kader rond de inhoud",
     "Niets, zolang het IP-adres erbij staat",
     "Het domein hoort onder CLIENT01",
     "Het domein hoort niet in het diagram"
    ],
    "a": 0,
    "e": "Forest en domein zijn logische structuren (kaders). DC01 en CLIENT01 zijn machines.",
    "w": [
     null,
     "Een domein heeft geen IP-adres; DC01 wel.",
     "CLIENT01 wordt lid van het domein, niet omgekeerd.",
     "Het domein is net een verplicht onderdeel."
    ]
   },
   {
    "q": "Bij CLIENT01 staat: <i>DNS: 8.8.8.8, dan werkt internet ook</i>. Wat zeg je?",
    "o": [
     "Fout: 8.8.8.8 kent de interne AD-zone niet; gebruik DC01 en laat DC01 doorsturen",
     "Prima, internet is belangrijker",
     "Zet 8.8.8.8 als voorkeurs-DNS en DC01 als alternatief",
     "DNS is niet nodig voor AD"
    ],
    "a": 0,
    "e": "De domeinclient blijft de interne DNS gebruiken. Externe namen lost de interne DNS-server op via forwarders.",
    "w": [
     null,
     "Dan vindt CLIENT01 het domein niet.",
     "Windows kan de publieke server gebruiken en dan geen antwoord krijgen voor de interne zone.",
     "AD is net afhankelijk van DNS om DC's te vinden."
    ]
   },
   {
    "q": "Er staat één pijl CLIENT01 → DC01 met het label <i>ping</i>. Wat ontbreekt er vooral?",
    "o": [
     "De DNS-vraag en het locatorrecord waarmee CLIENT01 de DC vindt",
     "Een tweede ping in de andere richting",
     "Het MAC-adres van DC01",
     "Niets: ping bewijst dat het domein werkt"
    ],
    "a": 0,
    "e": "Teken relaties met betekenis: DNS-vraag, locatorrecord, aanmelding, biedt AD DS aan.",
    "w": [
     null,
     "Ping bewijst alleen IP-bereikbaarheid, in welke richting ook.",
     "MAC-adressen zijn hier niet relevant.",
     "Ping test geen DNS en geen AD-diensten."
    ]
   }
  ]
 },
 "agdlp": {
  "order": [
   "Account: sara.peeters",
   "Global group: GG_Opleiding",
   "Domain Local group: DL_Lesmateriaal_Modify",
   "Permission: Modify op Lesmateriaal"
  ],
  "scopes": [
   {
    "k": "g1",
    "l": "GG_Opleiding",
    "a": "Global",
    "x": "Verzamelt accounts uit het eigen domein volgens hun afdeling."
   },
   {
    "k": "g2",
    "l": "DL_Lesmateriaal_Read",
    "a": "Domain Local",
    "x": "Stelt een toegangsniveau op een resource voor."
   },
   {
    "k": "g3",
    "l": "GG_ServiceDesk",
    "a": "Global",
    "x": "Een beheerrol: verzamelt de servicedeskaccounts."
   },
   {
    "k": "g4",
    "l": "DL_Lesmateriaal_Modify",
    "a": "Domain Local",
    "x": "De groep die later Modify op de map krijgt."
   }
  ],
  "scopeOpts": [
   "Global",
   "Domain Local",
   "Universal"
  ],
  "why": {
   "Global": "Global verzamelt accounts met een gemeenschappelijke rol.",
   "Domain Local": "Domain Local verzamelt machtigingen op een resource.",
   "Universal": "Universal is voor meerdere domeinen in een forest; in dit labo niet nodig."
  },
  "q": [
   {
    "q": "Wie krijgt <b>Modify</b> op Lesmateriaal in de eindsituatie van de praktijkopdracht?",
    "o": [
     "Sara, via GG_Opleiding → DL_Lesmateriaal_Modify",
     "Sara, Youssef en Lina",
     "Niemand: DL-groepen geven geen toegang",
     "Lina, via GG_Administratie"
    ],
    "a": 0,
    "e": "Sara → GG_Opleiding → DL_Lesmateriaal_Modify → Modify.",
    "w": [
     null,
     "Youssef verhuisde naar Administratie en Lina zit daar: zij krijgen Read.",
     "Zodra de machtiging op de map gekoppeld is, geven ze wel toegang.",
     "GG_Administratie is lid van DL_Lesmateriaal_Read, niet Modify."
    ]
   },
   {
    "q": "Youssef verhuist. Je haalt hem uit GG_Opleiding en voegt hem toe aan GG_Administratie. Welke toegang krijgt hij?",
    "o": [
     "Read, via GG_Administratie → DL_Lesmateriaal_Read",
     "Modify én Read",
     "Modify, want dat had hij al",
     "Geen, want zijn Department staat nog op Opleiding"
    ],
    "a": 0,
    "e": "Mover goed afgehandeld: alleen de nieuwe toegang blijft.",
    "w": [
     null,
     "Het oude lidmaatschap is weg; rechten stapelen zich niet op.",
     "Toegang volgt het huidige lidmaatschap, niet het verleden (na een nieuwe aanmelding).",
     "Een attribuut verleent geen toegang."
    ]
   },
   {
    "q": "Sara is lid van GG_Opleiding, maar er is nog geen gedeelde map. Heeft ze nu toegang tot Lesmateriaal?",
    "o": [
     "Nee: een groep geeft pas toegang als er een machtiging aan gekoppeld is",
     "Ja, via AGDLP",
     "Ja, want ze staat in OU Gebruikers",
     "Alleen Read"
    ],
    "a": 0,
    "e": "Lidmaatschap ≠ toegang. Controleer altijd beide kanten: groepen én machtigingen op de resource.",
    "w": [
     null,
     "AGDLP is de structuur; zonder P (permission) geen toegang.",
     "Een OU-locatie geeft geen toegang tot resources.",
     "Er is nog geen enkele machtiging."
    ]
   },
   {
    "q": "Je wilt een mailinglijst voor nieuws. Welk groepstype?",
    "o": [
     "Distribution",
     "Security, Domain Local",
     "Security, Global",
     "Een OU"
    ],
    "a": 0,
    "e": "Distribution = e-maildistributie, geen machtigingen.",
    "w": [
     null,
     "Security groups zijn voor rechten; voor e-mail alleen volstaat distribution.",
     "Kan technisch ook mail ontvangen, maar het doel is hier geen toegang.",
     "Een OU verstuurt geen mail."
    ]
   },
   {
    "q": "Een collega voegt Lina rechtstreeks toe aan DL_Lesmateriaal_Modify ‘omdat het sneller is’. Waarom is dat geen goed idee?",
    "o": [
     "De rol (GG_) en de toegang (DL_) lopen door elkaar: bij een wissel vergeet je die uitzondering",
     "Domain local groups kunnen geen gebruikers bevatten",
     "Lina verliest dan haar Read-toegang",
     "Het werkt pas na een herstart van DC01"
    ],
    "a": 0,
    "e": "Geen losse uitzonderingen: wie hoort bij de rol beheer je in de global group.",
    "w": [
     null,
     "Technisch kan het wel; het probleem is beheersbaarheid.",
     "Read blijft via GG_Administratie bestaan; ze krijgt er Modify bij.",
     "Een nieuwe aanmelding van Lina volstaat."
    ]
   }
  ]
 },
 "diag": {
  "order": [
   "IP-configuratie: juiste adapter, juist subnet, geen APIPA",
   "DNS-server wijst naar DC01",
   "A-record: dc01.ad.brightlearning.test",
   "SRV-record: _ldap._tcp.dc._msdcs…",
   "DC Locator: nltest /dsgetdc",
   "Datum, tijd en tijdzone"
  ],
  "q": [
   {
    "q": "Waarom staat de DNS-server vóór het SRV-record?",
    "o": [
     "Een SRV-query heeft pas zin als je de juiste DNS-server vraagt",
     "Dat is alfabetisch",
     "SRV-records bestaan alleen op publieke DNS-servers",
     "Omdat SRV sneller is"
    ],
    "a": 0,
    "e": "Werk van onder naar boven: iedere laag steunt op de vorige.",
    "w": [
     null,
     "De volgorde volgt de afhankelijkheden, niet het alfabet.",
     "Integendeel: alleen de interne AD-DNS kent ze.",
     "Snelheid speelt geen rol."
    ]
   },
   {
    "q": "nslookup dc01.ad.brightlearning.test lukt. Wat weet je nog <b>niet</b>?",
    "o": [
     "Of de domeindiensten (SRV) gevonden worden",
     "Of de DNS-server antwoordt",
     "Of de naam van DC01 opgelost wordt",
     "Welk IP-adres DC01 heeft"
    ],
    "a": 0,
    "e": "Een A-record vindt een host, geen dienst. Test daarna het SRV-record en nltest.",
    "w": [
     null,
     "Hij antwoordde net.",
     "Dat bewees de test net.",
     "Dat stond in het antwoord."
    ]
   },
   {
    "q": "Alles tot en met nltest is groen, maar de aanmelding mislukt nog. Wat controleer je nu?",
    "o": [
     "Datum, tijd en tijdzone (Kerberos is tijdgevoelig)",
     "Opnieuw de ping",
     "De Windows-editie",
     "De reverse zone"
    ],
    "a": 0,
    "e": "Controleer tijd vóór je diep gaat troubleshooten.",
    "w": [
     null,
     "De netwerklaag is al bewezen.",
     "Die controleerde je vóór de join.",
     "Een reverse zone is niet nodig om aan te melden."
    ]
   },
   {
    "q": "Wanneer neem je een <b>go</b>-beslissing voor de join?",
    "o": [
     "Als editie, naam, IP, DNS, SRV, nltest, tijd en rechten gecontroleerd zijn",
     "Zodra de ping lukt",
     "Zodra internet werkt",
     "Na de eerste foutmelding van de wizard"
    ],
    "a": 0,
    "e": "Een join uitvoeren met een gekende fout maakt het alleen moeilijker.",
    "w": [
     null,
     "Ping bewijst alleen IP.",
     "Internet bewijst niets over de AD-zone.",
     "Dan maak je de foutanalyse net moeilijker."
    ]
   }
  ]
 },
 "uitvoer": [
  {
   "q": "Wat is het eerste probleem?",
   "o": [
    "Er is geen geldige IP-configuratie (APIPA): eerst IPv4 vast instellen",
    "De SRV-records ontbreken",
    "De tijd wijkt af",
    "CLIENT01 is al domeinlid"
   ],
   "a": 0,
   "e": "169.254 = geen geldige configuratie. Laag 1 eerst.",
   "w": [
    null,
    "Zo ver kom je nog niet: zonder geldig adres bereikt de client niets.",
    "Tijd is een hogere laag.",
    "Daar zegt deze uitvoer niets over."
   ],
   "out": "Host Name . . . . . . : CLIENT01\nAutoconfiguration IPv4 Address. : 169.254.37.12(Preferred)\nSubnet Mask . . . . . : 255.255.0.0\nDNS Servers . . . . . : fec0:0:0:ffff::1%1"
  },
  {
   "q": "Wat zegt deze uitvoer?",
   "o": [
    "De client vraagt een publieke DNS-server die de interne zone niet kent",
    "DC01 staat uit",
    "Het A-record van DC01 is verwijderd",
    "De zone heet anders"
   ],
   "a": 0,
   "e": "Kijk altijd bovenaan wélke server antwoordt.",
   "w": [
    null,
    "8.8.8.8 antwoordt wel; het weet gewoon niets van de interne zone.",
    "Je vraagt de verkeerde server: dat kan je niet besluiten.",
    "Je vraagt de verkeerde server: dat kan je niet besluiten."
   ],
   "out": "> nslookup dc01.ad.brightlearning.test\nServer:  dns.google\nAddress:  8.8.8.8\n\n*** dns.google can't find dc01.ad.brightlearning.test: Non-existent domain"
  },
  {
   "q": "Waarom staat er <b>UnKnown</b>?",
   "o": [
    "Er is geen PTR-record (reverse zone) voor 192.168.50.10",
    "DC01 antwoordt niet",
    "De naam dc01 bestaat niet",
    "De client is geen domeinlid"
   ],
   "a": 0,
   "e": "UnKnown gaat over de naam van de DNS-server, niet over je vraag.",
   "w": [
    null,
    "Hij antwoordt wel: de naam werd opgelost.",
    "Ze werd net opgelost.",
    "Ook een werkgroepclient krijgt dit antwoord."
   ],
   "out": "> nslookup dc01.ad.brightlearning.test\nServer:  UnKnown\nAddress:  192.168.50.10\n\nName:    dc01.ad.brightlearning.test\nAddress:  192.168.50.10"
  },
  {
   "q": "Welke controle doe je eerst?",
   "o": [
    "Welke DNS-server de client gebruikt (ipconfig /all) en de SRV-query",
    "Test-ComputerSecureChannel",
    "gpresult /r",
    "Het wachtwoord van Administrator"
   ],
   "a": 0,
   "e": "Domein niet gevonden = DNS of DC Locator.",
   "w": [
    null,
    "Een secure channel bestaat pas na de join.",
    "Beleid speelt pas na de join.",
    "De DC wordt niet eens gevonden; credentials komen later."
   ],
   "out": "> nltest /dsgetdc:ad.brightlearning.test /force\nGetting DC name failed: Status = 1355 0x54b ERROR_NO_SUCH_DOMAIN"
  },
  {
   "q": "Wat stel je vast?",
   "o": [
    "Je bent aangemeld met een lokale account, niet met Sara's domeinaccount",
    "Alles in orde: dit is Sara",
    "CLIENT01 is geen domeinlid meer",
    "Sara heeft een tijdelijk profiel"
   ],
   "a": 0,
   "e": "Zelfde naam, andere identiteit. Meld aan met sara.peeters@ad.brightlearning.test of AD\\sara.peeters.",
   "w": [
    null,
    "De accountbron is CLIENT01, niet AD.",
    "Dat kan je hier niet uit afleiden: er kan ook gewoon een lokale account met die naam bestaan.",
    "Dat zie je niet in whoami."
   ],
   "out": "> whoami\nclient01\\sara.peeters"
  },
  {
   "q": "Wat doe je niet als eerste?",
   "o": [
    "Meteen het computerobject verwijderen en opnieuw joinen",
    "DNS en tijd controleren",
    "Het computerobject in ADUC onderzoeken",
    "Lokaal aanmelden met .\\lokalebeheerder voor diagnose"
   ],
   "a": 0,
   "e": "Test eerst, herstel niet blind. Daarna eventueel -Repair met bevoegde credentials.",
   "w": [
    null,
    "Dat is net een goede eerste controle.",
    "Ook dat hoort bij de diagnose.",
    "Zo kan je onderzoeken zonder domeinaanmelding."
   ],
   "out": "PS> Test-ComputerSecureChannel -Verbose\nVERBOSE: The secure channel between the local computer and the domain ad.brightlearning.test is broken.\nFalse"
  },
  {
   "q": "Waarom ontbreekt BL - C - Aanmeldbericht?",
   "o": [
    "CLIENT01 staat in de container Computers, buiten OU BrightLearning › Computers",
    "Het GPO is uitgeschakeld",
    "Sara is geen lid van GG_Opleiding",
    "De link is Enforced"
   ],
   "a": 0,
   "e": "Lees de DN in gpresult: CN=Computers is niet de OU waar de link op staat.",
   "w": [
    null,
    "Dan zou het GPO in scope komen en als ‘filtered out’ verschijnen.",
    "Computerbeleid hangt niet van Sara af.",
    "Enforced zou het net sterker toepassen."
   ],
   "out": "COMPUTER SETTINGS\n    CN=CLIENT01,CN=Computers,DC=ad,DC=brightlearning,DC=test\n    Applied Group Policy Objects\n        Default Domain Policy"
  },
  {
   "q": "Wat is de oorzaak?",
   "o": [
    "De link op OU Computers is uitgeschakeld",
    "Het GPO bevat geen instellingen",
    "CLIENT01 staat in de verkeerde OU",
    "Security Filtering weigert CLIENT01"
   ],
   "a": 0,
   "e": "Lees de reden: Disabled (Link) → Link Enabled terug aanzetten.",
   "w": [
    null,
    "Dan zou de reden ‘Not Applied (Empty)’ zijn.",
    "Dan komt het GPO niet eens in de lijst.",
    "Dan zou de reden ‘Denied (Security)’ zijn."
   ],
   "out": "The following GPOs were not applied because they were filtered out\n    BL - C - Aanmeldbericht\n        Filtering:  Disabled (Link)"
  }
 ],
 "bewijs": [
  {
   "q": "Bewering: <b>CLIENT01 is domeinlid</b>. Welk bewijs is het sterkst?",
   "o": [
    "systeminfo toont Domain: ad.brightlearning.test én het object CLIENT01 bestaat één keer in AD",
    "ping dc01 lukt",
    "Op het aanmeldscherm staat ‘Other user’",
    "nslookup vindt dc01"
   ],
   "a": 0,
   "e": "Bewijs aan clientzijde én in AD: beide kanten van de relatie.",
   "w": [
    null,
    "Ping lukt ook vanaf een werkgroepcomputer.",
    "Dat zegt niets over lidmaatschap.",
    "Ook een werkgroepclient kan DC01 opzoeken."
   ]
  },
  {
   "q": "Bewering: <b>de secure channel werkt</b>.",
   "o": [
    "Test-ComputerSecureChannel geeft True",
    "Sara kan aanmelden",
    "CLIENT01 staat in OU Computers",
    "nltest /dsgetdc vindt DC01"
   ],
   "a": 0,
   "e": "Test-ComputerSecureChannel (of nltest /sc_query) test precies die relatie.",
   "w": [
    null,
    "Een aanmelding kan ook met gecachte credentials lukken.",
    "De OU-locatie zegt niets over het machinegeheim.",
    "DC Locator werkt ook vóór de join."
   ]
  },
  {
   "q": "Bewering: <b>ik ben aangemeld als Sara's domeinidentiteit</b>.",
   "o": [
    "whoami toont ad\\sara.peeters en whoami /user een domein-SID",
    "Het bureaublad toont ‘Sara’",
    "%USERNAME% is sara.peeters",
    "Ik heb het wachtwoord van Sara ingetypt"
   ],
   "a": 0,
   "e": "De accountbron (AD\\) en de SID tellen.",
   "w": [
    null,
    "Een weergavenaam bewijst geen accountbron.",
    "Ook een lokale account kan die naam hebben.",
    "Een wachtwoord typen bewijst niet welke account gebruikt werd."
   ]
  },
  {
   "q": "Bewering: <b>Sara heeft een eigen domeinprofiel</b>.",
   "o": [
    "%USERPROFILE% verwijst naar C:\\Users\\sara.peeters en ProfileList bevat haar domein-SID",
    "Er staat een map Documents",
    "Ze kan Notepad openen",
    "Haar bureaubladachtergrond is blauw"
   ],
   "a": 0,
   "e": "Profiel en identiteit worden via de SID gekoppeld.",
   "w": [
    null,
    "Elk profiel heeft een map Documents.",
    "Dat zegt niets over het profiel.",
    "Dat is geen bewijs van identiteit of profielkoppeling."
   ]
  },
  {
   "q": "Bewering: <b>Sara is niet onbedoeld lokale administrator</b>.",
   "o": [
    "net localgroup Administrators toont Sara niet (en geen groep waarvan ze lid is)",
    "Ze heeft geen UAC-melding gezien",
    "Ze staat in OU Gebruikers",
    "whoami /upn toont haar UPN"
   ],
   "a": 0,
   "e": "Negatieve controle: ook lidmaatschap via een groep telt.",
   "w": [
    null,
    "Geen melding zien bewijst niets: ze heeft het misschien niet geprobeerd.",
    "De OU zegt niets over lokale groepen.",
    "De UPN zegt niets over rechten."
   ]
  },
  {
   "q": "Bewering: <b>BL - C - Aanmeldbericht wordt toegepast</b>.",
   "o": [
    "gpresult /r /scope computer toont het bij Applied én het bericht verschijnt",
    "Het GPO bestaat in GPMC",
    "De link staat op OU Computers",
    "gpupdate /force meldt succes"
   ],
   "a": 0,
   "e": "RSoP op het eindpunt + zichtbaar resultaat.",
   "w": [
    null,
    "Bestaan is geen toepassen.",
    "Geconfigureerd ≠ toegepast: staat CLIENT01 wel in die OU?",
    "Succesvol vernieuwd zegt niet welk GPO toegepast werd."
   ]
  }
 ],
 "gposcope": [
  {
   "q": "Krijgt CLIENT01 het aanmeldbericht?",
   "o": [
    "Ja",
    "Nee, want Sara staat in OU Gebruikers",
    "Alleen voor beheerders",
    "Pas na Enforced"
   ],
   "a": 0,
   "e": "Object in het pad van de link + juiste helft = in scope.",
   "w": [
    null,
    "Computerinstellingen volgen het computerobject, niet de gebruiker.",
    "Het geldt voor iedereen die op CLIENT01 aanmeldt.",
    "Enforced is niet nodig voor gewone overerving."
   ],
   "s": "Aan <b>OU Computers</b> hangt BL - C - Aanmeldbericht (alleen Computer Configuration). CLIENT01 staat in OU Computers."
  },
  {
   "q": "Krijgt Sara de bureaubladinstelling?",
   "o": [
    "Nee: User Configuration volgt het gebruikersobject",
    "Ja: ze meldt aan op een computer in OU Computers",
    "Ja, maar pas na een herstart",
    "Alleen als CLIENT01 Enforced is"
   ],
   "a": 0,
   "e": "Koppel gebruikersbeleid aan OU Gebruikers.",
   "w": [
    null,
    "Dat zou enkel met loopback processing gelden.",
    "Een herstart verandert de scope niet.",
    "Enforced is een eigenschap van een link, niet van een computer."
   ],
   "s": "BL - U - Bureaublad (User Configuration) hangt aan <b>OU Computers</b>. Sara staat in OU Gebruikers en meldt aan op CLIENT01."
  },
  {
   "q": "Krijgt DC01 het bericht?",
   "o": [
    "Nee",
    "Ja, alle computers in het domein",
    "Ja, want DC01 is de domain controller",
    "Alleen na gpupdate op DC01"
   ],
   "a": 0,
   "e": "Negatieve controle geslaagd.",
   "w": [
    null,
    "Dan had je op het domein moeten koppelen.",
    "De rol van DC01 brengt het niet in scope.",
    "gpupdate verandert de scope niet."
   ],
   "s": "BL - C - Aanmeldbericht hangt aan OU Computers. <b>DC01</b> staat in OU Domain Controllers."
  },
  {
   "q": "Welke objecten ontvangen het?",
   "o": [
    "Geen enkel",
    "Alle objecten in het domein",
    "Alleen DC01",
    "Alleen de maker"
   ],
   "a": 0,
   "e": "GPO zonder link = geen doelgroep.",
   "w": [
    null,
    "Domeinbreed geldt enkel met een link op het domein.",
    "Ook DC01 heeft een link in zijn pad nodig.",
    "GPO's werken niet per maker."
   ],
   "s": "Een GPO bestaat met instellingen, maar is <b>nergens gekoppeld</b>."
  },
  {
   "q": "Welke achtergrond krijgt Sara?",
   "o": [
    "Groen: de OU wordt later verwerkt en wint bij een conflict",
    "Blauw: het domein is belangrijker",
    "Afwisselend",
    "Geen: conflicten heffen elkaar op"
   ],
   "a": 0,
   "e": "LSDOU: Local → Site → Domain → OU.",
   "w": [
    null,
    "Zonder Enforced wint het niveau dichter bij het object.",
    "Er geldt één winnende waarde.",
    "Er wint één waarde volgens de verwerkingsvolgorde."
   ],
   "s": "Aan het domein hangt GPO A (bureaubladachtergrond <b>blauw</b>). Aan OU Gebruikers hangt GPO B (achtergrond <b>groen</b>). Sara staat in OU Gebruikers."
  },
  {
   "q": "Welke achtergrond krijgt Sara nu?",
   "o": [
    "Blauw",
    "Groen",
    "Geen",
    "Groen, tenzij Sara herstart"
   ],
   "a": 0,
   "e": "Enforced: onderliggende containers kunnen de conflicterende instelling niet overschrijven.",
   "w": [
    null,
    "Enforced beschermt de instelling van die link tegen overschrijven.",
    "Er blijft een winnende waarde.",
    "Herstarten verandert de voorrang niet."
   ],
   "s": "Zelfde situatie, maar de link van GPO A op het domein staat op <b>Enforced</b>."
  },
  {
   "q": "Krijgt Sara de instellingen van GPO A?",
   "o": [
    "Nee",
    "Ja",
    "Alleen de computerhelft",
    "Alleen als ze lid is van Domain Users"
   ],
   "a": 0,
   "e": "Behalve enforced links. Gebruik beide uitzonderingen spaarzaam.",
   "w": [
    null,
    "Block Inheritance stopt gewone overerving van hoger gekoppelde GPO's.",
    "Block Inheritance geldt voor beide helften.",
    "Groepslidmaatschap heft Block Inheritance niet op."
   ],
   "s": "Op OU BrightLearning staat <b>Block Inheritance</b>. De domeinlink van GPO A is niet Enforced."
  },
  {
   "q": "Wat toont gpresult op CLIENT01?",
   "o": [
    "Het GPO bij ‘filtered out’, met Disabled (GPO)",
    "Het GPO bij Applied",
    "Niets: het GPO is verwijderd",
    "Een fout in Event Viewer"
   ],
   "a": 0,
   "e": "GPO Status geldt voor alle links van dat GPO.",
   "w": [
    null,
    "De enige helft met instellingen is uitgeschakeld.",
    "Uitschakelen is niet verwijderen.",
    "Het is geen verwerkingsfout maar een bewuste instelling."
   ],
   "s": "BL - C - Aanmeldbericht hangt aan OU Computers, maar in GPO Status is <b>Computer configuration settings disabled</b>."
  }
 ],
 "exit1": [
  {
   "q": "Waarom is DNS essentieel voor Active Directory?",
   "o": [
    "Clients vinden via SRV-records welke server de domeindiensten aanbiedt",
    "DNS bewaart de gebruikersaccounts en wachtwoorden",
    "Zonder DNS kan je DC01 niet pingen",
    "DNS deelt de IP-adressen uit aan de clients"
   ],
   "a": 0,
   "e": "AD DS gebruikt DNS om domain controllers en domeindiensten te lokaliseren (_ldap._tcp.dc._msdcs…). Een verkeerde DNS-server is een van de meest voorkomende oorzaken van problemen.",
   "w": [
    null,
    "Accounts staan in de directory van AD DS, niet in DNS.",
    "Pingen op IP-adres werkt ook zonder DNS; dat bewees demo 7.",
    "Dat is DHCP."
   ]
  },
  {
   "q": "Waarom maak je een eigen OU in plaats van alles in Users te laten?",
   "o": [
    "Om beheer te delegeren en GPO's gericht te koppelen",
    "Om gebruikers toegang te geven tot een gedeelde map",
    "Omdat een gebruiker in Users zich niet kan aanmelden",
    "Om het organigram exact na te bouwen"
   ],
   "a": 0,
   "e": "Een OU ondersteunt structuur, delegatie en Group Policy. Users is een container: daarop kan je geen gewone GPO-link maken.",
   "w": [
    null,
    "Toegang tot resources regel je met security groups, niet met OU's.",
    "Gebruikers in Users kunnen prima aanmelden.",
    "Een OU-structuur volgt beheer- en beleidsbehoeften, niet het organigram."
   ]
  },
  {
   "q": "Waarom ken je rechten toe aan groepen en niet rechtstreeks aan gebruikers?",
   "o": [
    "Bij een personeelswissel pas je alleen het groepslidmaatschap aan",
    "Gebruikers kunnen technisch geen rechten krijgen",
    "Groepen maken aanmelden sneller",
    "Zo hoeft een gebruiker geen wachtwoord te hebben"
   ],
   "a": 0,
   "e": "Rechten volgen de rol: gebruiker → rolgroep (GG_) → resourcegroep (DL_) → recht. Eén lijst op de resource, lidmaatschap centraal beheerd.",
   "w": [
    null,
    "Het kan wel, maar het wordt snel onoverzichtelijk en moeilijk te controleren.",
    "Groepen hebben niets met de snelheid van aanmelden te maken.",
    "Authenticatie blijft per gebruiker nodig."
   ]
  },
  {
   "q": "Je wil dat de servicedesk wachtwoorden kan resetten. Waar start je de Delegation of Control Wizard?",
   "o": [
    "Op OU BrightLearning › Gebruikers",
    "Op het domein ad.brightlearning.test",
    "Op de groep GG_ServiceDesk",
    "Op de container Users"
   ],
   "a": 0,
   "e": "Start de wizard op de OU waarop de taak moet gelden. Least privilege: precies die taak, precies die scope.",
   "w": [
    null,
    "Dan wordt de scope het hele domein, inclusief beheeraccounts: te breed.",
    "De groep ontvangt de rechten; de scope is de plaats waar je de wizard start.",
    "Daar staan de ingebouwde accounts; je eigen gebruikers staan in OU Gebruikers."
   ]
  },
  {
   "q": "Youssef verhuist van Opleiding naar Administratie. Wat is voldoende om zijn toegang aan te passen?",
   "o": [
    "Uit GG_Opleiding halen en aan GG_Administratie toevoegen (en Department bijwerken)",
    "Alleen het attribuut Department wijzigen",
    "Hem naar een andere OU verplaatsen",
    "Hem rechtstreeks lid maken van DL_Lesmateriaal_Read"
   ],
   "a": 0,
   "e": "Mover: oude toegang weg, nieuwe toegang gericht toevoegen. Zo stapelen rechten zich niet op. Youssef krijgt nu Read via GG_Administratie → DL_Lesmateriaal_Read.",
   "w": [
    null,
    "Een attribuut verleent geen toegang: die volgt uit groepslidmaatschap.",
    "De OU-locatie bepaalt geen toegang tot resources.",
    "Geen gebruikers rechtstreeks in DL_-groepen; dat breekt AGDLP."
   ]
  }
 ],
 "intros": {
  "sorteer": {
   "t": "Sorteer",
   "p": [
    "Je krijgt telkens een situatie. Tik op de kaart die het best past.",
    "Na elke keuze lees je waarom je keuze wel of niet past. Juist of fout maakt niet uit: het denkwerk telt.",
    "In de klas kan je ook de <b>stemkaart</b> gebruiken: kies je antwoord en steek je gsm op bij ‘3-2-1’."
   ],
   "cs": "begrip"
  },
  "schema": {
   "t": "Teken de infrastructuur",
   "p": [
    "Eerst teken je zelf (3 minuten, papier of Visio): forest, domein, DC01, CLIENT01, een domeingebruiker en gelabelde relaties.",
    "Daarna benoem je hier de relaties en de belangrijkste gegevens, en beoordeel je drie foute schema's."
   ],
   "cs": "lab"
  },
  "agdlp": {
   "t": "Bouw de AGDLP-keten",
   "p": [
    "Stap 1: zet de keten in de juiste volgorde.",
    "Stap 2: kies voor elke groep het bereik.",
    "Stap 3: vijf vragen over wie welke toegang krijgt."
   ],
   "cs": "groepen"
  },
  "exit1": {
   "t": "Exitcheck blok 1",
   "p": [
    "Vijf korte vragen over wat we deze voormiddag zagen: DNS, OU's, groepen en delegatie.",
    "Je docent bekijkt daarna samen met de klas de meest gekozen foute antwoorden."
   ],
   "cs": "groepen"
  },
  "diag": {
   "t": "Diagnosepad vóór de domain join",
   "p": [
    "Stap 1: zet de controles in de volgorde waarin je ze uitvoert. Elke laag steunt op de vorige.",
    "Stap 2: vier vragen over wat iedere controle wel en niet bewijst."
   ],
   "cs": "join"
  },
  "uitvoer": {
   "t": "Lees de uitvoer",
   "p": [
    "Je krijgt telkens een stuk echte uitvoer. Wat zegt ze, en wat zegt ze niet?",
    "Lees eerst de vraag, dan de uitvoer, en zoek het veld dat de doorslag geeft."
   ],
   "cs": "join"
  },
  "bewijs": {
   "t": "Welk bewijs is overtuigend?",
   "p": [
    "Begripscheck 2. Bij elke bewering kies je het sterkste bewijs.",
    "Let op: veel ‘bewijzen’ tonen iets dat ook zonder domein waar is."
   ],
   "cs": "bewijs"
  },
  "gposcope": {
   "t": "Krijgt dit object het GPO?",
   "p": [
    "Bij elke situatie beslis je welk object welk beleid ontvangt.",
    "Denk telkens: waar staat het object, waar hangt de link, welke helft van het GPO?"
   ],
   "cs": "gpo"
  },
  "demo": {
   "t": "Voorspel de demo",
   "p": [
    "Bij elke demo voorspel je eerst wat er gaat gebeuren. Kies je antwoord vóór de docent het commando uitvoert.",
    "Na de demo tik je op <b>De demo is gebeurd</b>: dan zie je het bewijs en waarom je voorspelling klopte of niet.",
    "Je voorspellingen blijven bewaard op dit toestel."
   ],
   "cs": "lab"
  },
  "status": {
   "t": "Waar sta jij?",
   "p": [
    "Kies je status. Je gsm toont die schermvullend in een kleur. Zet hem rechtop naast je laptop: zo ziet de docent wie hulp nodig heeft.",
    "Bij <b>3 · Probleem</b> komt de docent pas als je het exacte symptoom en twee hypothesen kan benoemen."
   ],
   "cs": "diag"
  },
  "fout": {
   "t": "Foutenpracticum: breek het bij je buur",
   "p": [
    "Werk in duo. De <b>saboteur</b> trekt een foutkaart en voert de fout uit in de omgeving van de buur, terwijl die even wegkijkt.",
    "Het <b>slachtoffer</b> krijgt alleen de melding van de gebruiker en vult het ticketformulier in: symptoom, bewijs per laag, hypothese, één wijziging, eindtest.",
    "Na 10 minuten vast? De saboteur toont de laag van de diagnoseladder als hint. Wissel daarna van rol."
   ],
   "cs": "diag"
  },
  "ticket": {
   "t": "Ticketformulier",
   "p": [
    "Vul de velden in tijdens het troubleshooten. Alles blijft bewaard op dit toestel.",
    "Op het einde kopieer je het ticket naar je werkdocument."
   ],
   "cs": "diag"
  },
  "werkdoel": {
   "t": "Werkdoel voor de namiddag",
   "p": [
    "Kies je startpunt en noteer één concreet technisch doel.",
    "Noteer meteen ook welk bewijs aantoont dat het werkt, en welke negatieve controle je uitvoert.",
    "Kopieer je werkdoel naar je werkdocument."
   ],
   "cs": "lab"
  },
  "exitticket": {
   "t": "Exit ticket",
   "p": [
    "Twee meerkeuzevragen en één open vraag om de dag af te sluiten."
   ],
   "cs": "diag"
  }
 },
 "infoTip": "Twijfel je? Tik rechtsboven op <b>ⓘ Info</b>. Daar vind je de theorie en de labomgeving. Dat is geen spieken: ook een systeembeheerder zoekt dingen op in de documentatie.",
 "cheat": [
  {
   "id": "lab",
   "t": "Labomgeving",
   "h": "<p>Geïsoleerd labonetwerk <code>192.168.50.0/24</code> (host-only, geen gateway, geen DHCP).</p><table><tr><th>Machine</th><th>IP</th><th>DNS</th><th>Rol</th></tr><tr><td>DC01</td><td>192.168.50.10</td><td>192.168.50.10</td><td>domain controller + DNS</td></tr><tr><td>CLIENT01</td><td>192.168.50.20</td><td>192.168.50.10</td><td>Windows 11 Pro, domeinclient</td></tr></table><p>Domein <b>ad.brightlearning.test</b> · NetBIOS <b>AD</b> · DN <code>DC=ad,DC=brightlearning,DC=test</code></p><p>Gebruikers: sara.peeters, youssef.elamrani, lina.desmet, servicedesk.test · Groepen: GG_Opleiding, GG_Administratie, GG_ServiceDesk, DL_Lesmateriaal_Read, DL_Lesmateriaal_Modify</p><p>OU's: BrightLearning › Gebruikers, Computers, Groepen · DC01 blijft in Domain Controllers.</p><p class='muted'>Werk je met eigen VM's uit vorige lessen? Pas IP-adres en DNS aan volgens deze tabel en geef ze de namen DC01 en CLIENT01.</p>"
  },
  {
   "id": "promoveer",
   "t": "DC01 promoveren (stappen)",
   "h": "<ol><li>Labo klaar? DC01: naam DC01, IP 192.168.50.10/24, DNS 192.168.50.10, sterk wachtwoord op de lokale Administrator. Snapshot ‘Voor installatie AD DS’.</li><li>Rol installeren (PowerShell als administrator):<pre><code>Install-WindowsFeature AD-Domain-Services -IncludeManagementTools</code></pre></li><li>Nieuw forest:<pre><code>Install-ADDSForest -DomainName \"ad.brightlearning.test\" -DomainNetbiosName \"AD\" -InstallDns -SafeModeAdministratorPassword (Read-Host -AsSecureString \"DSRM-wachtwoord\") -Force</code></pre>Twee waarschuwingen (cryptografie, DNS-delegatie) zijn normaal.</li><li>DC01 herstart vanzelf (± 5–10 min). Meld aan als AD\\Administrator (zelfde wachtwoord als de vroegere lokale Administrator).</li><li>Controle: Get-ADDomain · Resolve-DnsName -Type SRV _ldap._tcp.dc._msdcs.ad.brightlearning.test · ADUC. Snapshot ‘Na promotie DC01’.</li></ol>"
  },
  {
   "id": "begrip",
   "t": "AD DS, forest, domein, DC",
   "h": "<p><b>AD DS</b> is de directorydienst: opslaan, vinden, beveiligen, beheren. Een <b>domein</b> is een logische en administratieve omgeving (ad.brightlearning.test). Een <b>domain controller</b> is een server waarop AD DS voor het domein draait (DC01). Een <b>forest</b> is de hoogste logische structuur.</p><p>Forest → domein → OU → object. Domeinnaam ≠ servernaam: <code>DC01</code> · <code>dc01.ad.brightlearning.test</code>.</p><p><b>Object</b> = herkenbaar onderdeel (Sara, CLIENT01, GG_Opleiding, OU Gebruikers). <b>Attribuut</b> = eigenschap (afdeling, aanmeldingsnaam). Users en Computers zijn <b>containers</b> (CN=), Domain Controllers is een <b>OU</b> (OU=).</p><p><b>Authenticatie</b>: wie ben je? <b>Autorisatie</b>: wat mag je? Eerst authenticatie, dan autorisatie.</p><p><b>DNS</b>: een A-record vindt een host, een SRV-record (<code>_ldap._tcp.dc._msdcs.ad.brightlearning.test</code>) vindt een domeindienst.</p>"
  },
  {
   "id": "groepen",
   "t": "Gebruikers en groepen",
   "h": "<p>Naamgeving gebruikers: <code>voornaam.familienaam</code>, UPN <code>sara.peeters@ad.brightlearning.test</code>. Nieuwe gebruiker: ‘User must change password at next logon’ aan, ‘Password never expires’ uit.</p><p>Levenscyclus: <b>joiner</b> (aanmaken, eventueel uitgeschakeld tot de start), <b>mover</b> (attributen én groepen aanpassen), <b>leaver</b> (eerst uitschakelen, later verwijderen). Reset (beheerder, oud wachtwoord niet nodig) ≠ wijzigen (gebruiker).</p><p><b>Security</b> group = rechten. <b>Distribution</b> = e-mail. <b>Global</b> (GG_) = rol of afdeling. <b>Domain Local</b> (DL_) = toegang tot een resource.</p><p><b>AGDLP</b>: Account → Global → Domain Local → Permission. sara.peeters → GG_Opleiding → DL_Lesmateriaal_Modify → Modify.</p><p>Members = leden van een groep. Member Of = directe groepen van een object. Indirect: <code>Get-ADGroupMember DL_Lesmateriaal_Modify -Recursive</code>. Nieuwe groep → afmelden en opnieuw aanmelden (nieuw access token).</p>"
  },
  {
   "id": "ou",
   "t": "OU's en delegatie",
   "h": "<p>Een OU is een <b>beheermodel</b>, geen organigram: structuur, delegatie en Group Policy. Een OU is geen security group: toegang regel je met groepen.</p><p>Verplaatsen verandert de <b>DN</b>, niet de SID of de groepen. <code>CN=Sara Peeters,OU=Gebruikers,OU=BrightLearning,DC=ad,DC=brightlearning,DC=test</code></p><p><b>Delegatie</b> = wie (GG_ServiceDesk) + wat (Reset user passwords and force password change at next logon) + waar (OU Gebruikers). Start de wizard op de OU. Delegeer aan een groep. Test met een niet-administratieve account, positief én negatief:</p><pre><code>$sd = Get-Credential AD\\servicedesk.test\nSet-ADAccountPassword lina.desmet -Reset -NewPassword (Read-Host -AsSecureString) -Credential $sd\nRemove-ADUser lina.desmet -Credential $sd   # verwacht: Access is denied</code></pre><p>Controle: View › Advanced Features › Security › Advanced, of <code>dsacls \"OU=Gebruikers,OU=BrightLearning,DC=ad,DC=brightlearning,DC=test\"</code>.</p>"
  },
  {
   "id": "join",
   "t": "Domain join: go/no-go",
   "h": "<ol><li>Editie: Pro, Enterprise of Education</li><li>Naam CLIENT01 (vóór de join)</li><li><code>ipconfig /all</code>: 192.168.50.20, DNS 192.168.50.10, geen 169.254</li><li><code>ping 192.168.50.10</code> (bewijst alleen IP)</li><li><code>nslookup dc01.ad.brightlearning.test</code></li><li><code>nslookup -type=SRV _ldap._tcp.dc._msdcs.ad.brightlearning.test</code></li><li><code>nltest /dsgetdc:ad.brightlearning.test /force</code></li><li>Datum, tijd, tijdzone · <code>w32tm /query /status</code></li><li>Lokale beheerrechten + domeincredentials</li></ol><p>Join: Settings › Accounts › Access work or school › Connect › <b>Join this device to a local Active Directory domain</b> › ad.brightlearning.test. Of <code>sysdm.cpl</code> › Computer Name › Change › Domain. Herstarten. Daarna CLIENT01 van <b>Computers</b> naar OU BrightLearning › Computers.</p><p>Fout? Exacte melding + tijd noteren, <code>C:\\Windows\\Debug\\Netsetup.log</code> lezen.</p>"
  },
  {
   "id": "bewijs",
   "t": "Aanmelden en bewijzen",
   "h": "<p>Domein: <code>sara.peeters@ad.brightlearning.test</code> of <code>AD\\sara.peeters</code>. Lokaal: <code>.\\lokalebeheerder</code>.</p><pre><code>systeminfo | findstr /B /C:\"Domain\"\nwhoami\nwhoami /upn\nwhoami /user\nwhoami /groups\nnet localgroup Administrators\necho %USERPROFILE%\necho %LOGONSERVER%\nklist\nTest-ComputerSecureChannel -Verbose   # Windows PowerShell als admin\nnltest /sc_query:ad.brightlearning.test</code></pre><p>Lokale account en domeinaccount met dezelfde naam zijn verschillende identiteiten (andere SID, ander profiel).</p>"
  },
  {
   "id": "gpo",
   "t": "Group Policy",
   "h": "<p><b>GPO</b> = instellingen. <b>Link</b> = waar (site, domein, OU; niet aan een groep of container). <b>Scope</b> = welke objecten. Computer Configuration volgt het <b>computerobject</b>, User Configuration het <b>gebruikersobject</b>.</p><p><b>LSDOU</b>: Local → Site → Domain → OU (parent → child). Dichtst bij het object wint bij een conflict, behalve bij <b>Enforced</b>. <b>Block Inheritance</b> stopt gewone overerving (niet enforced links).</p><p>GPO Status (helften, voor alle links) ≠ Link Enabled (één link). Link verwijderen ≠ GPO verwijderen. Not Configured ≠ Disabled.</p><pre><code>gpupdate /force\ngpresult /r /scope computer   # verhoogd\ngpresult /r /scope user\ngpresult /h C:\\Temp\\gpresult.html /f</code></pre><p>Pad bij problemen: object → link → filter → verwerking → resultaat → log (Event Viewer › Microsoft › Windows › GroupPolicy › Operational, Activity ID).</p>"
  },
  {
   "id": "diag",
   "t": "Diagnoseladder en fouten",
   "h": "<p><b>Netwerk → DNS → Tijd → Account → Computerobject → OU en link → Beleid</b></p><table><tr><th>Melding</th><th>Eerste controle</th></tr><tr><td>The specified domain either does not exist or could not be contacted</td><td>Preferred DNS, SRV-query, nltest</td></tr><tr><td>Access is denied (join)</td><td>Credentials, joinrechten, bestaand object</td></tr><tr><td>The trust relationship … failed</td><td>Secure channel, computerobject</td></tr><tr><td>Your account has been disabled</td><td>Accountstatus in ADUC</td></tr><tr><td>GPO niet in gpresult</td><td>DN van het object, link, GPO Status</td></tr></table><p>Eén variabele per keer. Exacte melding en tijdstip noteren. Test eerst, herstel daarna.</p>"
  }
 ]
};
