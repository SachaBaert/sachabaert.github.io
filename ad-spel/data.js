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
     "e": "Twee afzonderlijke accounts, elk in de lokale accountdatabase van een andere pc, met een eigen wachtwoord. Ook hun SID verschilt, want die begint met de unieke SID van de computer (controleer met <code>whoami /user</code>). Zelfde naam, andere identiteit."
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
  "intro": "Hieronder staat een schema van BrightLearning. De pijlen hebben een nummer in plaats van een label. Kies voor elke pijl wat er gebeurt, en vul de twee gegevens aan.",
  "labels": [
   "DNS-vraag",
   "Antwoord (SRV)",
   "Aanmelding",
   "Biedt AD DS aan"
  ],
  "fields": [
   {
    "k": "p1",
    "l": "Pijl ① CLIENT01 → DC01",
    "a": "DNS-vraag",
    "x": "CLIENT01 vraagt aan de DNS-server op DC01 welke server de domeindiensten aanbiedt."
   },
   {
    "k": "p2",
    "l": "Pijl ② DC01 → CLIENT01",
    "a": "Antwoord (SRV)",
    "x": "DNS antwoordt met het locatorrecord _ldap._tcp.dc._msdcs…: dc01.ad.brightlearning.test."
   },
   {
    "k": "p3",
    "l": "Pijl ③ Sara → DC01",
    "a": "Aanmelding",
    "x": "Sara meldt aan op CLIENT01; DC01 controleert haar domeinidentiteit (authenticatie)."
   },
   {
    "k": "p4",
    "l": "Pijl ④ DC01 → het domein",
    "a": "Biedt AD DS aan",
    "x": "DC01 is een server waarop AD DS voor het domein draait. Het domein zelf is een logische structuur (het kader)."
   },
   {
    "k": "d5",
    "l": "⑤ DNS-server van CLIENT01",
    "o": [
     "192.168.50.10",
     "8.8.8.8",
     "192.168.50.1",
     "127.0.0.1"
    ],
    "a": "192.168.50.10",
    "x": "DC01 (192.168.50.10) host de interne zone en de locatorrecords.",
    "why": {
     "8.8.8.8": "Een publieke DNS-server kent ad.brightlearning.test niet.",
     "192.168.50.1": "In dit schema staat op dat adres niets: er is geen router of DNS-server.",
     "127.0.0.1": "Dat is CLIENT01 zelf, en CLIENT01 is geen DNS-server."
    }
   },
   {
    "k": "d6",
    "l": "⑥ Waar wordt de account sara.peeters bewaard?",
    "o": [
     "In het domein, op DC01",
     "Lokaal op CLIENT01",
     "In de DNS-zone van DC01",
     "In het forest, buiten het domein"
    ],
    "a": "In het domein, op DC01",
    "x": "De account staat in de directory van het domein; DC01 biedt die directory aan.",
    "why": {
     "Lokaal op CLIENT01": "Op CLIENT01 staat alleen haar profiel, na de eerste aanmelding.",
     "In de DNS-zone van DC01": "DNS bevat records, geen gebruikersaccounts.",
     "In het forest, buiten het domein": "Gebruikers horen in een domein van het forest."
    }
   }
  ],
  "fout": [
   {
    "q": "Wat is er fout aan dit schema?",
    "o": [
     "Het domein is als server getekend",
     "DC01 heeft een verkeerd IP-adres",
     "CLIENT01 gebruikt de verkeerde DNS",
     "Sara staat bij de verkeerde pc"
    ],
    "a": 0,
    "e": "Een domein is een logische structuur. Teken het als kader rond DC01 en CLIENT01, niet als een machine met een eigen icoon.",
    "w": [
     null,
     "192.168.50.10 is het IP-adres van DC01 uit de situatie.",
     "CLIENT01 gebruikt 192.168.50.10: dat is DC01.",
     "Sara meldt aan op CLIENT01: dat klopt."
    ],
    "v": "serverdomein"
   },
   {
    "q": "Wat is er fout aan dit schema?",
    "o": [
     "CLIENT01 heeft DNS 8.8.8.8",
     "DC01 staat buiten het domein",
     "Pijl ③ moet naar CLIENT01 wijzen",
     "Het forest ontbreekt in het schema"
    ],
    "a": 0,
    "e": "8.8.8.8 kent de interne zone ad.brightlearning.test niet. CLIENT01 moet DC01 (192.168.50.10) als DNS-server gebruiken.",
    "w": [
     null,
     "DC01 staat binnen het domeinkader.",
     "Bij aanmelden controleert DC01 de identiteit: de pijl wijst naar DC01.",
     "Het buitenste kader is het forest."
    ],
    "v": "dns8"
   },
   {
    "q": "Wat ontbreekt er vooral in dit schema?",
    "o": [
     "De DNS-vraag en het SRV-antwoord",
     "Een tweede ping in de andere richting",
     "Het MAC-adres van DC01",
     "Een kader rond CLIENT01 alleen"
    ],
    "a": 0,
    "e": "Een ping zegt niets over hoe CLIENT01 het domein vindt. Teken de DNS-vraag en het antwoord met het SRV-record.",
    "w": [
     null,
     "Ping bewijst alleen IP-bereikbaarheid, in welke richting ook.",
     "MAC-adressen zijn voor AD niet relevant.",
     "CLIENT01 staat al in het domeinkader."
    ],
    "v": "ping"
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
    "l": "GG_Opleiding (alle docenten van Opleiding)",
    "a": "Global",
    "x": "Verzamelt accounts uit het eigen domein volgens hun afdeling."
   },
   {
    "k": "g2",
    "l": "DL_Lesmateriaal_Read (leestoegang tot een map)",
    "a": "Domain Local",
    "x": "Stelt een toegangsniveau op een resource voor."
   },
   {
    "k": "g3",
    "l": "GG_ServiceDesk (alle servicedeskmedewerkers)",
    "a": "Global",
    "x": "Een beheerrol: verzamelt de servicedeskaccounts."
   },
   {
    "k": "g4",
    "l": "DL_Lesmateriaal_Modify (wijzigtoegang tot een map)",
    "a": "Domain Local",
    "x": "De groep die Modify op de map krijgt."
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
   "Universal": "Universal is voor meerdere domeinen in een forest; hier is er één domein."
  },
  "q": [
   {
    "q": "Wie krijgt <b>Modify</b> op Lesmateriaal?",
    "o": [
     "Alleen Sara",
     "Sara en Youssef",
     "Sara, Youssef en Lina",
     "Niemand: alleen Read"
    ],
    "a": 0,
    "e": "Sara → GG_Opleiding → DL_Lesmateriaal_Modify → Modify.",
    "w": [
     null,
     "Youssef zit in GG_Administratie en krijgt dus Read.",
     "Youssef en Lina zitten in GG_Administratie: zij krijgen Read.",
     "DL_Lesmateriaal_Modify heeft Modify, en GG_Opleiding zit erin."
    ],
    "s": "<b>Situatie</b><br>GG_Opleiding: Sara · GG_Administratie: Youssef, Lina<br>GG_Opleiding is lid van DL_Lesmateriaal_Modify<br>GG_Administratie is lid van DL_Lesmateriaal_Read<br>Op de map Lesmateriaal: DL_Lesmateriaal_Modify = Modify · DL_Lesmateriaal_Read = Read"
   },
   {
    "q": "Sara verhuist naar Administratie. Je haalt haar uit GG_Opleiding en voegt haar toe aan GG_Administratie. Welke toegang heeft ze na opnieuw aanmelden?",
    "o": [
     "Read",
     "Modify",
     "Read en Modify",
     "Geen toegang"
    ],
    "a": 0,
    "e": "Mover goed afgehandeld: alleen de nieuwe toegang blijft. Een nieuw token krijgt ze pas na opnieuw aanmelden.",
    "w": [
     null,
     "Ze is geen lid meer van GG_Opleiding, dus ook niet van DL_Lesmateriaal_Modify.",
     "Het oude lidmaatschap is weg; rechten stapelen zich niet op.",
     "Via GG_Administratie → DL_Lesmateriaal_Read heeft ze Read."
    ],
    "s": "<b>Situatie</b><br>GG_Opleiding: Sara · GG_Administratie: Youssef, Lina<br>GG_Opleiding is lid van DL_Lesmateriaal_Modify<br>GG_Administratie is lid van DL_Lesmateriaal_Read<br>Op de map Lesmateriaal: DL_Lesmateriaal_Modify = Modify · DL_Lesmateriaal_Read = Read"
   },
   {
    "q": "Heeft Sara toegang tot Lesmateriaal?",
    "o": [
     "Nee",
     "Ja, Modify",
     "Ja, Read",
     "Ja, via haar OU"
    ],
    "a": 0,
    "e": "Lidmaatschap ≠ toegang. Een groep geeft pas toegang als er een machtiging aan gekoppeld is.",
    "w": [
     null,
     "Er is nog geen keten naar een machtiging (geen DL, geen P).",
     "Er is nog geen enkele machtiging op de map.",
     "Een OU-locatie geeft geen toegang tot resources."
    ],
    "s": "<b>Situatie</b><br>Sara is lid van GG_Opleiding.<br>GG_Opleiding is nog nergens lid van.<br>Op de map Lesmateriaal staat nog geen enkele machtiging voor een DL-groep."
   },
   {
    "q": "Je wilt een mailinglijst voor nieuwsberichten, zonder toegangsrechten. Welk groepstype kies je?",
    "o": [
     "Distribution",
     "Security, Global",
     "Security, Domain Local",
     "Een OU met de leden"
    ],
    "a": 0,
    "e": "Distribution = e-maildistributie, geen machtigingen.",
    "w": [
     null,
     "Security groups zijn voor rechten; voor enkel e-mail volstaat distribution.",
     "Security groups zijn voor rechten; voor enkel e-mail volstaat distribution.",
     "Een OU verstuurt geen mail en heeft geen leden."
    ]
   },
   {
    "q": "Een collega maakt Lina rechtstreeks lid van DL_Lesmateriaal_Modify ‘omdat het sneller is’. Wat is het gevolg?",
    "o": [
     "Lina krijgt Modify buiten haar rol om",
     "Lina verliest haar leestoegang",
     "Windows weigert de wijziging",
     "Er verandert niets aan haar toegang"
    ],
    "a": 0,
    "e": "Een losse uitzondering: bij een volgende wissel vergeet je ze makkelijk. Wie bij een rol hoort, beheer je in de global group.",
    "w": [
     null,
     "Read blijft via GG_Administratie bestaan; ze krijgt er Modify bij.",
     "Windows laat het technisch toe.",
     "Ze krijgt er wel Modify bij, na opnieuw aanmelden."
    ],
    "s": "<b>Situatie</b><br>GG_Opleiding: Sara · GG_Administratie: Youssef, Lina<br>GG_Opleiding is lid van DL_Lesmateriaal_Modify<br>GG_Administratie is lid van DL_Lesmateriaal_Read<br>Op de map Lesmateriaal: DL_Lesmateriaal_Modify = Modify · DL_Lesmateriaal_Read = Read"
   }
  ]
 },
 "diag": {
  "order": [
   "IP-configuratie: juiste adapter, subnet, geen APIPA",
   "DNS-server wijst naar DC01",
   "A-record: dc01.ad.brightlearning.test",
   "SRV-record: _ldap._tcp.dc._msdcs…",
   "DC Locator: nltest /dsgetdc",
   "Datum, tijd en tijdzone"
  ],
  "q": [
   {
    "q": "Waarom controleer je de DNS-server vóór het SRV-record?",
    "o": [
     "Een SRV-query aan de verkeerde server zegt niets",
     "Omdat SRV-records alleen op publieke servers staan",
     "Omdat de volgorde alfabetisch is",
     "Omdat een SRV-query veel langer duurt"
    ],
    "a": 0,
    "e": "Werk van onder naar boven: iedere laag steunt op de vorige.",
    "w": [
     null,
     "Integendeel: alleen de interne AD-DNS kent ze.",
     "De volgorde volgt de afhankelijkheden, niet het alfabet.",
     "Duur speelt geen rol."
    ]
   },
   {
    "q": "<code>nslookup dc01.ad.brightlearning.test</code> lukt. Wat weet je daarmee nog <b>niet</b>?",
    "o": [
     "Of de domeindiensten gevonden worden",
     "Of de DNS-server van de client antwoordt",
     "Of de naam dc01 opgelost wordt",
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
    "q": "IP, DNS, A-record, SRV-record en nltest zijn in orde, maar aanmelden mislukt. Wat controleer je nu?",
    "o": [
     "Datum, tijd en tijdzone",
     "Opnieuw de ping naar de DC",
     "De Windows-editie van de client",
     "De reverse zone op de DC"
    ],
    "a": 0,
    "e": "Kerberos is tijdgevoelig: controleer de tijd vóór je diep gaat troubleshooten.",
    "w": [
     null,
     "De netwerklaag is al bewezen.",
     "Die controleer je vóór de join.",
     "Een reverse zone is niet nodig om aan te melden."
    ]
   },
   {
    "q": "Wanneer neem je een <b>go</b>-beslissing voor de domain join?",
    "o": [
     "Als alle controles van de lijst groen zijn",
     "Zodra een ping naar de DC lukt",
     "Zodra websites openen op de client",
     "Na de eerste foutmelding van de wizard"
    ],
    "a": 0,
    "e": "Editie, naam, IP, DNS, SRV, nltest, tijd en rechten: pas dan go.",
    "w": [
     null,
     "Ping bewijst alleen IP.",
     "Internet bewijst niets over de AD-zone.",
     "Een join uitvoeren met een gekende fout maakt het alleen moeilijker."
    ]
   }
  ]
 },
 "uitvoer": [
  {
   "q": "Wat is het eerste probleem?",
   "o": [
    "Er is geen geldig IPv4-adres",
    "De SRV-records ontbreken",
    "De klok van de client wijkt af",
    "De client is al domeinlid"
   ],
   "a": 0,
   "e": "169.254 = geen geldige configuratie (APIPA). Laag 1 eerst: IPv4 instellen.",
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
    "De client vraagt een publieke DNS-server",
    "De domain controller DC01 staat uit",
    "Het A-record van DC01 is verwijderd",
    "De zone heeft een andere naam gekregen"
   ],
   "a": 0,
   "e": "Kijk altijd bovenaan wélke server antwoordt. 8.8.8.8 kent de interne zone niet.",
   "w": [
    null,
    "Dat kan je niet besluiten: je vraagt de verkeerde server.",
    "Dat kan je niet besluiten: je vraagt de verkeerde server.",
    "Dat kan je niet besluiten: je vraagt de verkeerde server."
   ],
   "out": "> nslookup dc01.ad.brightlearning.test\nServer:  dns.google\nAddress:  8.8.8.8\n\n*** dns.google can't find dc01.ad.brightlearning.test: Non-existent domain"
  },
  {
   "q": "Waarom staat er <b>UnKnown</b>?",
   "o": [
    "Er is geen PTR-record voor 192.168.50.10",
    "De DNS-server antwoordt niet op tijd",
    "De naam dc01 bestaat niet in de zone",
    "De client is nog geen domeinlid"
   ],
   "a": 0,
   "e": "nslookup zoekt de naam van zijn DNS-server op via een reverse zone. UnKnown gaat over die naam, niet over je vraag.",
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
    "De DNS-server en de SRV-query",
    "Test-ComputerSecureChannel",
    "gpresult /r /scope computer",
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
    "Je bent aangemeld met een lokale account",
    "Je bent aangemeld met Sara's domeinaccount",
    "CLIENT01 is uit het domein gehaald",
    "Sara heeft een tijdelijk profiel gekregen"
   ],
   "a": 0,
   "e": "Zelfde naam, andere identiteit. Meld aan met sara.peeters@ad.brightlearning.test of AD\\sara.peeters.",
   "w": [
    null,
    "De accountbron vóór de backslash is CLIENT01, niet AD.",
    "Dat kan je hier niet uit afleiden: er kan gewoon een lokale account met die naam bestaan.",
    "Dat zie je niet in whoami."
   ],
   "out": "> whoami\nclient01\\sara.peeters"
  },
  {
   "q": "Wat doe je níét als eerste?",
   "o": [
    "Meteen uit het domein halen en opnieuw joinen",
    "DNS en de tijd van de client controleren",
    "Het computerobject in ADUC onderzoeken",
    "Lokaal aanmelden voor verdere diagnose"
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
    "CLIENT01 staat in de verkeerde plaats",
    "Het GPO is uitgeschakeld",
    "De gebruiker zit in de verkeerde groep",
    "De link staat op Enforced"
   ],
   "a": 0,
   "e": "Lees de DN in gpresult: CN=Computers is de standaardcontainer, niet de OU waar de link op staat.",
   "w": [
    null,
    "Dan zou het GPO in scope komen en als ‘filtered out’ verschijnen.",
    "Computerbeleid hangt niet van de groepen van de gebruiker af.",
    "Enforced zou het net sterker toepassen."
   ],
   "s": "<b>Situatie</b><br>BL - C - Aanmeldbericht is gekoppeld aan <b>OU=Computers,OU=BrightLearning</b>,DC=ad,DC=brightlearning,DC=test.",
   "out": "COMPUTER SETTINGS\n    CN=CLIENT01,CN=Computers,DC=ad,DC=brightlearning,DC=test\n    Applied Group Policy Objects\n        Default Domain Policy"
  },
  {
   "q": "Wat is de oorzaak?",
   "o": [
    "De link is uitgeschakeld",
    "Het GPO bevat geen instellingen",
    "De computer staat in de verkeerde OU",
    "Security Filtering weigert de computer"
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
    "systeminfo + het object in ADUC",
    "Een ping naar dc01 die lukt",
    "‘Other user’ op het aanmeldscherm",
    "nslookup vindt dc01 zonder fout"
   ],
   "a": 0,
   "e": "systeminfo toont Domain: ad.brightlearning.test en het object CLIENT01 bestaat in AD: bewijs aan beide kanten van de relatie.",
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
    "Test-ComputerSecureChannel → True",
    "Sara kan zich aanmelden",
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
   "q": "Bewering: <b>ik ben aangemeld met Sara's domeinaccount</b>.",
   "o": [
    "whoami → ad\\sara.peeters",
    "Het bureaublad toont ‘Sara’",
    "%USERNAME% is sara.peeters",
    "Ik typte Sara's wachtwoord"
   ],
   "a": 0,
   "e": "De accountbron (AD\\) telt; whoami /user toont bovendien de domein-SID.",
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
    "ProfileList bevat haar domein-SID",
    "Er staat een map Documents in haar profiel",
    "Ze kan Kladblok openen",
    "Haar achtergrond is blauw"
   ],
   "a": 0,
   "e": "Profiel en identiteit worden via de SID gekoppeld; %USERPROFILE% wijst naar C:\\Users\\sara.peeters.",
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
    "net localgroup Administrators",
    "Ze kreeg geen UAC-melding",
    "Ze staat in OU Gebruikers",
    "whoami /upn toont haar UPN"
   ],
   "a": 0,
   "e": "Negatieve controle: Sara (en geen groep waarvan ze lid is) mag niet in de lijst staan.",
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
    "gpresult: Applied + bericht zichtbaar",
    "Het GPO bestaat in GPMC",
    "De link staat op OU Computers",
    "gpupdate /force meldt succes voor de computer"
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
    "Nee, Sara staat in OU Gebruikers",
    "Alleen voor beheerders",
    "Alleen met Enforced"
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
    "Nee",
    "Ja, via de computer",
    "Ja, na een herstart",
    "Alleen met Enforced"
   ],
   "a": 0,
   "e": "User Configuration volgt het gebruikersobject: koppel gebruikersbeleid aan OU Gebruikers.",
   "w": [
    null,
    "Dat zou enkel met loopback processing gelden.",
    "Een herstart verandert de scope niet.",
    "Enforced is een eigenschap van een link en verandert de scope niet."
   ],
   "s": "BL - U - Bureaublad (User Configuration) hangt aan <b>OU Computers</b>. Sara staat in OU Gebruikers en meldt aan op CLIENT01, die in OU Computers staat."
  },
  {
   "q": "Krijgt DC01 het bericht?",
   "o": [
    "Nee",
    "Ja, zoals elke computer",
    "Ja, als domain controller",
    "Alleen na gpupdate"
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
    "Alle objecten",
    "Alleen de DC's",
    "Alleen de maker"
   ],
   "a": 0,
   "e": "GPO zonder link = geen doelgroep.",
   "w": [
    null,
    "Domeinbreed geldt enkel met een link op het domein.",
    "Ook een DC heeft een link in zijn pad nodig.",
    "GPO's werken niet per maker."
   ],
   "s": "Een GPO bestaat met instellingen, maar is <b>nergens gekoppeld</b>."
  },
  {
   "q": "Welke achtergrond krijgt Sara?",
   "o": [
    "Groen",
    "Blauw",
    "Afwisselend",
    "Geen van beide"
   ],
   "a": 0,
   "e": "LSDOU: Local → Site → Domain → OU. De OU wordt later verwerkt en wint bij een conflict.",
   "w": [
    null,
    "Zonder Enforced wint het niveau dichter bij het object.",
    "Er geldt één winnende waarde.",
    "Er wint één waarde volgens de verwerkingsvolgorde."
   ],
   "s": "Aan het domein hangt GPO A (bureaubladachtergrond <b>blauw</b>). Aan OU Gebruikers hangt GPO B (achtergrond <b>groen</b>). Sara staat in OU Gebruikers. Geen enkele link is Enforced."
  },
  {
   "q": "Welke achtergrond krijgt Sara?",
   "o": [
    "Blauw",
    "Groen",
    "Geen van beide",
    "Groen, na een herstart"
   ],
   "a": 0,
   "e": "Enforced: onderliggende containers kunnen de conflicterende instelling niet overschrijven.",
   "w": [
    null,
    "Enforced beschermt de instelling van die link tegen overschrijven.",
    "Er blijft een winnende waarde.",
    "Herstarten verandert de voorrang niet."
   ],
   "s": "Aan het domein hangt GPO A (achtergrond <b>blauw</b>), en die link staat op <b>Enforced</b>. Aan OU Gebruikers hangt GPO B (achtergrond <b>groen</b>). Sara staat in OU Gebruikers."
  },
  {
   "q": "Krijgt Sara de instellingen van GPO A?",
   "o": [
    "Nee",
    "Ja",
    "Alleen het computerdeel",
    "Alleen via Domain Users"
   ],
   "a": 0,
   "e": "Behalve enforced links. Gebruik beide uitzonderingen spaarzaam.",
   "w": [
    null,
    "Block Inheritance stopt gewone overerving van hoger gekoppelde GPO's.",
    "Block Inheritance geldt voor beide helften.",
    "Groepslidmaatschap heft Block Inheritance niet op."
   ],
   "s": "Aan het domein hangt GPO A (niet Enforced). Op OU BrightLearning staat <b>Block Inheritance</b>. Sara staat in OU BrightLearning › Gebruikers."
  },
  {
   "q": "Wat toont gpresult op CLIENT01?",
   "o": [
    "‘Filtered out’: Disabled (GPO)",
    "Het GPO staat bij Applied",
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
   "s": "BL - C - Aanmeldbericht hangt aan OU Computers, waarin CLIENT01 staat. In GPO Status staat <b>Computer configuration settings disabled</b>."
  }
 ],
 "exit1": [
  {
   "q": "Waarom is DNS essentieel voor Active Directory?",
   "o": [
    "Clients vinden er de domain controllers mee",
    "DNS bewaart de accounts en wachtwoorden",
    "Zonder DNS kan je de DC niet pingen",
    "DNS deelt IP-adressen uit aan clients"
   ],
   "a": 0,
   "e": "AD DS gebruikt DNS om domain controllers en domeindiensten te lokaliseren (SRV-records _ldap._tcp.dc._msdcs…). Een verkeerde DNS-server is een van de meest voorkomende oorzaken van problemen.",
   "w": [
    null,
    "Accounts staan in de directory van AD DS, niet in DNS.",
    "Pingen op IP-adres werkt ook zonder DNS.",
    "Dat doet DHCP."
   ]
  },
  {
   "q": "Waarom maak je een eigen OU in plaats van alles in de container Users te laten?",
   "o": [
    "Om beheer te delegeren en GPO's te koppelen",
    "Om gebruikers toegang te geven tot een map",
    "Omdat gebruikers in Users niet kunnen aanmelden",
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
    "Bij een personeelswissel pas je één lidmaatschap aan",
    "Gebruikers kunnen technisch geen rechten krijgen",
    "Groepen maken het aanmelden sneller",
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
   "q": "De servicedesk (GG_ServiceDesk) mag de wachtwoorden van de gewone medewerkers resetten, maar niet die van de beheeraccounts. Waar start je de Delegation of Control Wizard?",
   "o": [
    "Op OU Gebruikers",
    "Op het domein",
    "Op de groep GG_ServiceDesk",
    "Op de container Users"
   ],
   "a": 0,
   "e": "Start de wizard op de OU waarop de taak moet gelden. Least privilege: precies die taak, precies die scope.",
   "w": [
    null,
    "Dan wordt de scope het hele domein, inclusief de beheeraccounts: te breed.",
    "De groep ontvangt de rechten; de scope is de plaats waar je de wizard start.",
    "Daar staan de beheeraccounts, niet de gewone medewerkers."
   ],
   "s": "<b>Situatie</b><br>ad.brightlearning.test<br>├ Users (container): Administrator, Guest, krbtgt<br>└ OU BrightLearning<br>&nbsp;&nbsp;&nbsp;├ OU Gebruikers: Sara, Youssef, Lina<br>&nbsp;&nbsp;&nbsp;└ OU Groepen: GG_ServiceDesk, …"
  },
  {
   "q": "Youssef verhuist naar Administratie en mag voortaan alleen nog lezen in Lesmateriaal. Wat moet je minstens doen?",
   "o": [
    "GG_Opleiding → GG_Administratie",
    "Alleen Department aanpassen",
    "Hem naar een andere OU verplaatsen",
    "Hem in DL_Lesmateriaal_Read zetten"
   ],
   "a": 0,
   "e": "Mover: uit GG_Opleiding halen en lid maken van GG_Administratie (en Department bijwerken). Zo stapelen rechten zich niet op: Youssef krijgt Read via GG_Administratie → DL_Lesmateriaal_Read.",
   "w": [
    null,
    "Een attribuut verleent geen toegang: die volgt uit groepslidmaatschap.",
    "De OU-locatie bepaalt geen toegang tot resources.",
    "Hij zit dan nog in GG_Opleiding en houdt Modify; bovendien horen geen gebruikers rechtstreeks in een DL_-groep."
   ],
   "s": "<b>Situatie</b><br>Youssef is lid van GG_Opleiding.<br>GG_Opleiding is lid van DL_Lesmateriaal_Modify · GG_Administratie is lid van DL_Lesmateriaal_Read.<br>Department van Youssef: Opleiding."
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
    "Eerst teken je zelf (3 minuten, papier of Visio): forest, domein, DC01, CLIENT01, een domeingebruiker en pijlen met een label.",
    "Deel 1: in de app staat een schema met genummerde pijlen. Kies voor elke pijl het juiste label en vul twee gegevens aan.",
    "Deel 2: je krijgt drie getekende schema's met telkens één fout. Zoek de fout.",
    "Op het einde zie je het modelschema: leg het naast je eigen tekening."
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
