/* Gegenereerd uit het lesontwerp (design*.py). Aanpassen kan ook hier. */
/* Extra oefenen: per onderwerp een poel van 30 vragen; elke ronde kiest de app er 10 willekeurig uit.
   Juiste antwoord = altijd de eerste optie (a: 0); de app schudt de volgorde. */
(function (D) {
 D.extra = {
 "begrippen": {
  "t": "Begrippen",
  "q": [
   {
    "q": "Wat is AD DS?",
    "o": [
     "De directorydienst van Windows Server",
     "De DNS-server van een Windows-domein",
     "De naam van de eerste domain controller",
     "De identiteitsdienst van Microsoft in de cloud"
    ],
    "a": 0,
    "w": [
     null,
     "DNS helpt clients AD vinden, maar is een andere dienst.",
     "Een server wordt pas domain controller doordat hij AD DS draait.",
     "Dat is Microsoft Entra ID."
    ],
    "e": "AD DS bewaart objecten centraal en maakt ze beschikbaar."
   },
   {
    "q": "Wat is het verschil tussen een directory en een directorydienst?",
    "o": [
     "Directory = de gegevens; dienst = de functies erop",
     "Directory = de server; dienst = het netwerk ertussen",
     "Er is geen verschil: het zijn twee namen voor hetzelfde",
     "Directory = gebruikers; dienst = computers en groepen"
    ],
    "a": 0,
    "w": [
     null,
     "Een directory is geen server.",
     "Het zijn verwante maar verschillende begrippen.",
     "Beide bevatten alle soorten objecten."
    ],
    "e": "Opslaan, vinden, beveiligen, beheren: dat doet de dienst."
   },
   {
    "q": "Wat is de hoogste logische structuur in AD DS?",
    "o": [
     "Het forest",
     "Het domein, met daarin alle forests",
     "De eerste domain controller",
     "De bovenste OU van het domein"
    ],
    "a": 0,
    "w": [
     null,
     "Een domein zit in een forest, niet omgekeerd.",
     "Een DC is een server, geen logische structuur.",
     "Een OU zit in een domein."
    ],
    "e": "Forest → domein → OU → object."
   },
   {
    "q": "BrightLearning heeft één forest met als enige domein ad.brightlearning.test. Hoeveel domeinen bevat dat forest?",
    "o": [
     "Eén",
     "Twee: ad en brightlearning",
     "Drie: ad, brightlearning en test",
     "Geen, er is enkel een DC"
    ],
    "a": 0,
    "w": [
     null,
     "De delen van een DNS-naam zijn geen afzonderlijke AD-domeinen.",
     "‘test’ is een gereserveerd topleveldomein, geen AD-domein.",
     "Een DC biedt altijd een domein aan."
    ],
    "e": "In een klein labo vallen forest en domein bijna samen, maar het blijven twee begrippen."
   },
   {
    "q": "Server DC01 is lid van het domein ad.brightlearning.test. Wat is dan ‘dc01.ad.brightlearning.test’?",
    "o": [
     "De FQDN van DC01",
     "De naam van het domein",
     "De naam van het forest",
     "De naam van een SRV-record"
    ],
    "a": 0,
    "w": [
     null,
     "Het domein heet ad.brightlearning.test.",
     "Het forest heet zoals zijn eerste domein.",
     "Een SRV-naam begint met _ldap._tcp…"
    ],
    "e": "Computernaam + domeinnaam = FQDN."
   },
   {
    "q": "Waarom gebruikt een productieomgeving meestal minstens twee DC's?",
    "o": [
     "Beschikbaarheid: één DC mag uitvallen",
     "Eén DC kan maximaal honderd gebruikers aan",
     "Replicatie tussen DC's vervangt een back-up",
     "DNS vereist altijd twee aparte servers"
    ],
    "a": 0,
    "w": [
     null,
     "Zo'n limiet bestaat niet.",
     "Replicatie verspreidt ook fouten; het is geen back-up.",
     "DNS werkt ook met één server."
    ],
    "e": "Meer DC's = meer beschikbaarheid en spreiding."
   },
   {
    "q": "Is replicatie tussen DC's een back-up?",
    "o": [
     "Nee: een foute verwijdering wordt ook gerepliceerd",
     "Ja, een volwaardige back-up van alle gegevens",
     "Ja, op voorwaarde dat er drie DC's of meer zijn",
     "Alleen voor het schema, niet voor de objecten"
    ],
    "a": 0,
    "w": [
     null,
     "Een back-up laat herstel van een vroegere toestand toe.",
     "Het aantal DC's verandert dat niet.",
     "Replicatie geldt voor alle directorygegevens."
    ],
    "e": "Meerdere DC's vervangen geen back-upstrategie."
   },
   {
    "q": "Waarom eindigt een labodomein vaak op ‘.test’?",
    "o": [
     ".test is gereserveerd voor tests",
     "Omdat het domein nog niet af is",
     "Omdat Windows dat suffix verplicht",
     "Om internettoegang te blokkeren voor clients"
    ],
    "a": 0,
    "w": [
     null,
     "Het gaat om een gereserveerd topleveldomein, niet om de toestand.",
     "Windows verplicht geen suffix.",
     "Het blokkeert niets; het vermijdt conflicten met echte namen."
    ],
    "e": "Zo kan de naam nooit botsen met een echt internetdomein."
   },
   {
    "q": "Welke functie heeft het schema van AD DS?",
    "o": [
     "Het bepaalt welke objectklassen en attributen kunnen bestaan",
     "Het bewaart de IP-adressen van alle domain controllers",
     "Het versleutelt de wachtwoorden van alle gebruikers",
     "Het tekent de OU-structuur van het domein uit"
    ],
    "a": 0,
    "w": [
     null,
     "Dat doet DNS.",
     "Daar is het schema niet voor.",
     "Het schema bepaalt types, niet je structuur."
    ],
    "e": "Het schema wordt in het hele forest gedeeld."
   },
   {
    "q": "Wat is een security principal?",
    "o": [
     "Een object dat rechten kan krijgen",
     "De hoofdbeheerder van het domein",
     "Een record in de DNS-zone van AD",
     "Een OU waarop beveiliging staat"
    ],
    "a": 0,
    "w": [
     null,
     "Het is een objecttype, geen persoon.",
     "DNS-records zijn geen identiteiten.",
     "Een OU is geen security principal."
    ],
    "e": "Gebruikers, computers en security groups."
   },
   {
    "q": "Welke vraag beantwoordt authenticatie?",
    "o": [
     "Wie ben je?",
     "Wat mag je doen?",
     "Waar sta je in AD?",
     "Welke DNS-server gebruik je?"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is autorisatie.",
     "Dat is de OU-locatie.",
     "Dat is netwerkconfiguratie."
    ],
    "e": "Eerst authenticatie, dan autorisatie."
   },
   {
    "q": "Een gebruiker is net succesvol aangemeld in het domein. Heeft hij nu toegang tot elke gedeelde map?",
    "o": [
     "Nee, autorisatie bepaalt dat per map",
     "Ja, aanmelden geeft volledige toegang",
     "Ja, tot alle mappen binnen zijn OU",
     "Alleen tot de mappen op de DC zelf"
    ],
    "a": 0,
    "w": [
     null,
     "Authenticatie en autorisatie zijn verschillende stappen.",
     "Een OU verleent geen toegang tot resources.",
     "De plaats van een map maakt geen verschil."
    ],
    "e": "Een badge opent niet elke deur."
   },
   {
    "q": "Welk protocol bewijst in een Windows-domein cryptografisch je identiteit?",
    "o": [
     "Kerberos",
     "DHCP",
     "ICMP",
     "SMTP"
    ],
    "a": 0,
    "w": [
     null,
     "DHCP deelt adressen uit.",
     "ICMP is ping.",
     "SMTP is e-mail."
    ],
    "e": "Kerberos is tijdgevoelig: daarom telt de klok."
   },
   {
    "q": "Wat doet een SRV-record voor AD?",
    "o": [
     "Het wijst naar de server die een dienst aanbiedt",
     "Het koppelt een hostnaam aan een IP-adres",
     "Het koppelt een IP-adres terug aan een naam",
     "Het bewaart de gebruikers van het domein"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is een A-record.",
     "Dat is een PTR-record.",
     "Gebruikers staan in de directory."
    ],
    "e": "Locatorrecords: zo vindt een client een DC."
   },
   {
    "q": "Wat betekent ‘_tcp’ in _ldap._tcp.dc._msdcs.ad.brightlearning.test?",
    "o": [
     "Het transportprotocol",
     "De naam van de server",
     "De naam van het domein",
     "Een foutcode van DNS"
    ],
    "a": 0,
    "w": [
     null,
     "De server staat in het antwoord (svr hostname).",
     "Het domein staat op het einde.",
     "Het is gewoon een label in de naam."
    ],
    "e": "_ldap = dienst, _tcp = protocol, dc = domain controller, _msdcs = Microsoft-records."
   },
   {
    "q": "DC01 (192.168.50.10) host de DNS-zone van het domein. Waarom gebruikt CLIENT01 192.168.50.10 als DNS-server?",
    "o": [
     "Alleen DC01 kent de interne zone en de SRV-records",
     "Omdat 192.168.50.10 ook de standaardgateway is",
     "Omdat elke client een DC als DNS moet hebben",
     "Omdat CLIENT01 anders geen internet krijgt"
    ],
    "a": 0,
    "w": [
     null,
     "Er is geen gateway in dit labo.",
     "Het gaat niet om ‘een DC’ maar om de server die de zone kent.",
     "Internet is voor AD niet nodig."
    ],
    "e": "Een publieke DNS-server kent ad.brightlearning.test niet."
   },
   {
    "q": "Een client opent websites, maar vindt het domein niet. Wat is het meest waarschijnlijk?",
    "o": [
     "Hij gebruikt een externe DNS-server",
     "De domain controller staat uit",
     "De client heeft geen geldig IP-adres",
     "Het domein is uit AD verwijderd"
    ],
    "a": 0,
    "w": [
     null,
     "Daar is geen aanwijzing voor; eerst de DNS-instelling.",
     "Websites openen lukt, dus hij heeft een adres.",
     "Het domein bestaat wel; de client vraagt de verkeerde server."
    ],
    "e": "Internettoegang bewijst geen correcte AD-DNS."
   },
   {
    "q": "Wat is het verschil tussen centralisatie en automatisering?",
    "o": [
     "Centraal = één beheerplek; automatisch = zonder handwerk",
     "Er is geen verschil: centraal beheer is altijd geautomatiseerd",
     "Automatisering kan alleen als alles centraal staat",
     "Centralisatie vereist altijd PowerShell-scripts"
    ],
    "a": 0,
    "w": [
     null,
     "Het zijn verschillende stappen.",
     "Je kan ook lokaal scripts draaien.",
     "Centraal beheer kan ook met ADUC."
    ],
    "e": "Een script dat accounts uit een lijst maakt, is automatisering."
   },
   {
    "q": "Op PC-ADMIN-01 bestaat de lokale account jelle. Bestaat die account ook op PC-ADMIN-02?",
    "o": [
     "Nee, die bestaat enkel op PC-ADMIN-01",
     "Ja, lokale accounts worden gesynchroniseerd",
     "Ja, als het wachtwoord op beide pc's gelijk is",
     "Alleen als beide pc's in dezelfde werkgroep zitten"
    ],
    "a": 0,
    "w": [
     null,
     "Lokale accounts worden niet gesynchroniseerd.",
     "Een zelfde wachtwoord maakt er nog geen zelfde account van.",
     "Een werkgroep heeft geen gedeelde accountdatabase."
    ],
    "e": "Ook een account ‘jelle’ op een andere pc is een andere identiteit."
   },
   {
    "q": "Welke vier kernfuncties heeft AD DS?",
    "o": [
     "Opslaan, vinden, beveiligen, beheren",
     "Routeren, filteren, cachen, loggen",
     "Installeren, updaten, back-uppen, herstellen",
     "Pingen, resolven, joinen, aanmelden"
    ],
    "a": 0,
    "w": [
     null,
     "Dat zijn netwerkfuncties.",
     "Dat zijn algemene beheertaken.",
     "Dat zijn handelingen, geen functies van de dienst."
    ],
    "e": "Ze komen terug in elke beheertaak."
   },
   {
    "q": "Waar staat een domain controller standaard na de promotie?",
    "o": [
     "In OU Domain Controllers",
     "In de container Computers",
     "In de container Users",
     "In de container Builtin"
    ],
    "a": 0,
    "w": [
     null,
     "Computers is voor gewone domeinleden.",
     "Users bevat gebruikers en groepen.",
     "Builtin bevat ingebouwde groepen."
    ],
    "e": "Laat DC's in Domain Controllers."
   },
   {
    "q": "Is ‘Users’ in een nieuw domein een OU?",
    "o": [
     "Nee, een container (CN=Users)",
     "Ja, de eerste OU van elk domein",
     "Ja, maar alleen voor beheerders",
     "Nee, het is een security group"
    ],
    "a": 0,
    "w": [
     null,
     "Domain Controllers is wél een OU; Users niet.",
     "Het is geen OU.",
     "Het is een container, geen groep."
    ],
    "e": "Op een container kan je geen gewone GPO koppelen."
   },
   {
    "q": "Wat bevat de container Builtin?",
    "o": [
     "Ingebouwde groepen",
     "Nieuwe computeraccounts",
     "De DNS-zones van AD",
     "Het schema van het forest"
    ],
    "a": 0,
    "w": [
     null,
     "Die komen in Computers.",
     "Die staan in DNS.",
     "Het schema is forestbreed en staat niet in Builtin."
    ],
    "e": "Wijzig ingebouwde objecten niet zonder reden."
   },
   {
    "q": "Wat doet View › Advanced Features in ADUC?",
    "o": [
     "Extra tabbladen en containers tonen",
     "Extra rechten aan beheerders geven",
     "De console als administrator starten",
     "Het functionele niveau verhogen"
    ],
    "a": 0,
    "w": [
     null,
     "Het verandert geen rechten.",
     "Het is een weergave-instelling.",
     "Er wordt niets gewijzigd aan het domein."
    ],
    "e": "Nodig voor de tabbladen Object en Security."
   },
   {
    "q": "Je promoveert server DC01 tot eerste DC van het nieuwe domein AD. Met welke account meld je daarna aan?",
    "o": [
     "AD\\Administrator, met het oude lokale wachtwoord",
     "DC01\\Administrator, zoals vóór de promotie",
     "De DSRM-account met het Safe Mode-wachtwoord",
     "Een nieuwe account die de wizard aanmaakt"
    ],
    "a": 0,
    "w": [
     null,
     "Een DC heeft geen gewone lokale accounts meer.",
     "DSRM is enkel voor herstel.",
     "De wizard maakt geen nieuwe beheeraccount."
    ],
    "e": "Daarom moet het lokale wachtwoord vooraf sterk zijn."
   },
   {
    "q": "Waarvoor dient het DSRM-wachtwoord?",
    "o": [
     "Herstel in Directory Services Restore Mode",
     "Aanmelden als beheerder van het domein",
     "De DNS-zone van het domein beveiligen",
     "Wachtwoorden van gebruikers resetten"
    ],
    "a": 0,
    "w": [
     null,
     "Daarvoor gebruik je AD\\Administrator.",
     "Het heeft niets met DNS te maken.",
     "Resetten doe je in ADUC."
    ],
    "e": "Bewaar het veilig."
   },
   {
    "q": "Je promoveert de eerste DC van het nieuwe forest ad.brightlearning.test met -InstallDns. Welke zones ontstaan?",
    "o": [
     "ad.brightlearning.test en _msdcs.ad.brightlearning.test",
     "Alleen een reverse zone voor het subnet van de DC",
     "Geen: alle zones maak je achteraf zelf aan",
     "Eén zone per gebruiker en per computer"
    ],
    "a": 0,
    "w": [
     null,
     "Een reverse zone voor je subnet maak je zelf.",
     "De zones worden automatisch aangemaakt.",
     "Gebruikers krijgen geen zones."
    ],
    "e": "Met de locatorrecords."
   },
   {
    "q": "Wat is een objectklasse?",
    "o": [
     "Het type object, bv. user",
     "De OU van het object",
     "Een groep gelijke objecten",
     "Het beveiligingsniveau van een object"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is de locatie.",
     "Dat is een groep.",
     "Dat is geen klasse."
    ],
    "e": "De klasse bepaalt welke attributen beschikbaar zijn."
   },
   {
    "q": "Is AD DS hetzelfde als Microsoft Entra ID?",
    "o": [
     "Nee, het zijn verschillende diensten",
     "Ja, Entra ID is enkel de nieuwe naam",
     "Ja, als je een cloudlicentie hebt",
     "Nee: Entra ID is de DNS-dienst van Azure"
    ],
    "a": 0,
    "w": [
     null,
     "Het zijn verschillende technologieën.",
     "Een licentie maakt ze niet gelijk.",
     "Entra ID is een cloudidentiteitsdienst."
    ],
    "e": "Daarom kies je bij de join expliciet ‘local Active Directory domain’."
   },
   {
    "q": "Waarom installeer je DNS mee bij de promotie van de eerste DC?",
    "o": [
     "Clients vinden de DC via DNS",
     "Om de clients internet te geven",
     "Elke server moet DNS draaien",
     "Omdat DHCP er afhankelijk van is"
    ],
    "a": 0,
    "w": [
     null,
     "Het labo heeft geen internet nodig.",
     "Niet elke server is DNS-server.",
     "DHCP is een andere rol."
    ],
    "e": "De locatorrecords komen in die zone."
   }
  ]
 },
 "groepen": {
  "t": "Gebruikers en groepen",
  "q": [
   {
    "q": "Welk groepstype gebruik je voor toegang tot een gedeelde map?",
    "o": [
     "Security",
     "Distribution",
     "Een OU",
     "Builtin"
    ],
    "a": 0,
    "w": [
     null,
     "Distribution is voor e-mail.",
     "Een OU regelt geen toegang.",
     "Builtin is een container met ingebouwde groepen."
    ],
    "e": "Security groups kunnen machtigingen krijgen."
   },
   {
    "q": "GG_Administratie verzamelt de medewerkers van de afdeling Administratie. Welk bereik past?",
    "o": [
     "Global",
     "Domain Local",
     "Universal",
     "Lokaal op de server"
    ],
    "a": 0,
    "w": [
     null,
     "Domain Local is voor toegang tot een resource.",
     "Universal is voor meerdere domeinen.",
     "Lokale groepen bestaan op één computer."
    ],
    "e": "Een afdeling uit het eigen domein."
   },
   {
    "q": "DL_Lesmateriaal_Read stelt ‘leestoegang tot de map Lesmateriaal’ voor. Welk bereik past?",
    "o": [
     "Domain Local",
     "Global",
     "Universal",
     "Distribution"
    ],
    "a": 0,
    "w": [
     null,
     "Global verzamelt accounts met een rol.",
     "Niet nodig in één domein.",
     "Distribution is een type, geen bereik."
    ],
    "e": "Een toegangsniveau op een resource."
   },
   {
    "q": "Waar staat de P voor in AGDLP?",
    "o": [
     "Permissions",
     "Policies",
     "Principals",
     "Profiles"
    ],
    "a": 0,
    "w": [
     null,
     "GPO's zijn een ander onderwerp.",
     "Accounts zijn principals; de P staat voor machtigingen.",
     "Profielen spelen hier geen rol."
    ],
    "e": "Accounts → Global → Domain Local → Permissions."
   },
   {
    "q": "Waar zie je in ADUC van welke groepen een gebruiker rechtstreeks lid is?",
    "o": [
     "Member Of, bij de gebruiker",
     "Members, bij de gebruiker",
     "General, bij de gebruiker",
     "In de DNS-zone van het domein"
    ],
    "a": 0,
    "w": [
     null,
     "Members bestaat bij groepen.",
     "General toont naam en beschrijving.",
     "DNS bevat geen lidmaatschap."
    ],
    "e": "Members (groep) en Member Of (object) tonen dezelfde relatie vanuit twee kanten."
   },
   {
    "q": "Een gebruiker is net aan een groep toegevoegd en merkt geen verschil. Wat is de eerste stap?",
    "o": [
     "Afmelden en opnieuw aanmelden",
     "De groep opnieuw aanmaken",
     "De domain controller herstarten",
     "De gebruiker opnieuw aanmaken"
    ],
    "a": 0,
    "w": [
     null,
     "De groep is in orde; het token is oud.",
     "Niet nodig.",
     "Dan krijgt hij een nieuwe SID: geen goed idee."
    ],
    "e": "Nieuw token = nieuwe groepsinformatie."
   },
   {
    "q": "Wat staat er onder meer in een access token?",
    "o": [
     "De SID's van gebruiker en groepen",
     "Het wachtwoord in leesbare tekst",
     "De OU waarin de gebruiker staat",
     "De lijst van toegepaste GPO's"
    ],
    "a": 0,
    "w": [
     null,
     "Wachtwoorden staan niet in het token.",
     "De OU-locatie staat er niet in.",
     "Beleid is geen onderdeel van het token."
    ],
    "e": "Gebruikt bij autorisatie."
   },
   {
    "q": "Wat toont whoami /groups?",
    "o": [
     "De groepen in het token van je sessie",
     "Alle groepen die in het domein bestaan",
     "Member Of uit ADUC, altijd actueel",
     "De lokale groepen van de domain controller"
    ],
    "a": 0,
    "w": [
     null,
     "Alleen die van jouw sessie.",
     "Een recente wijziging zie je pas na opnieuw aanmelden.",
     "Het toont jouw token op deze computer."
    ],
    "e": "Token ≠ directoryweergave."
   },
   {
    "q": "Wat is effectieve toegang?",
    "o": [
     "Het resultaat van alle regels samen",
     "De machtiging van de laatst toegevoegde groep",
     "Alle Allow-regels samen; Deny telt niet mee",
     "De toegang die Domain Admins hebben"
    ],
    "a": 0,
    "w": [
     null,
     "Alle regels tellen samen.",
     "Een expliciete Deny kan een Allow blokkeren.",
     "Het gaat om de gebruiker die je onderzoekt."
    ],
    "e": "Controleer lidmaatschap én machtigingen."
   },
   {
    "q": "Waarom wees je voorzichtig met een expliciete Deny op een map?",
    "o": [
     "Ze wint, en treft via groepen soms te veel",
     "Deny-regels worden door Windows genegeerd",
     "Een Deny verwijdert de groep uit Active Directory",
     "Een Deny geldt alleen voor beheerders"
    ],
    "a": 0,
    "w": [
     null,
     "Ze werkt wel, en krachtig.",
     "Een regel verwijdert niets.",
     "Ze geldt voor wie ze toegewezen krijgt."
    ],
    "e": "Een goed groepsontwerp maakt Deny meestal overbodig."
   },
   {
    "q": "Wat is indirect lidmaatschap?",
    "o": [
     "Lid zijn via een geneste groep",
     "Lid zijn van een lege groep",
     "Lid zijn van een distributiegroep",
     "In dezelfde OU staan als de groep"
    ],
    "a": 0,
    "w": [
     null,
     "Een lege groep zegt niets over jouw lidmaatschap.",
     "Dat is nog steeds direct lidmaatschap.",
     "OU-locatie is geen lidmaatschap."
    ],
    "e": "Gebruiker → GG_ → DL_."
   },
   {
    "q": "Welke opdracht toont alle leden van DL_Lesmateriaal_Modify, ook via geneste groepen?",
    "o": [
     "Get-ADGroupMember DL_Lesmateriaal_Modify -Recursive",
     "Get-ADUser DL_Lesmateriaal_Modify -Recursive",
     "whoami /groups /recursive DL_Lesmateriaal_Modify",
     "Get-ADGroup DL_Lesmateriaal_Modify -Members"
    ],
    "a": 0,
    "w": [
     null,
     "Get-ADUser zoekt gebruikers, geen groepsleden.",
     "whoami toont jouw eigen token.",
     "Die parameter bestaat niet zo."
    ],
    "e": "Zonder -Recursive zie je enkel de directe leden."
   },
   {
    "q": "Een gebruiker heeft onverwacht toegang tot een map. Wat controleer je minstens?",
    "o": [
     "Zijn groepen en de machtigingen op de map",
     "Zijn OU-locatie en de leeftijd van zijn wachtwoord",
     "De DNS- en DHCP-instellingen van zijn pc",
     "Zijn profiel en zijn bureaubladinstellingen"
    ],
    "a": 0,
    "w": [
     null,
     "Die bepalen geen toegang.",
     "Netwerkdiensten bepalen geen toegang.",
     "Het profiel bepaalt geen rechten."
    ],
    "e": "Een andere groep verleent mogelijk de toegang."
   },
   {
    "q": "Een gebruiker kan een document lezen, maar niet wijzigen. Wat is je eerste hypothese?",
    "o": [
     "Hij heeft enkel Read",
     "Zijn wachtwoord is fout",
     "DNS werkt niet goed",
     "Hij staat in de verkeerde OU"
    ],
    "a": 0,
    "w": [
     null,
     "Dan zou ook lezen mislukken.",
     "Dan zou de map niet bereikbaar zijn.",
     "De OU bepaalt geen bestandsrechten."
    ],
    "e": "Vergelijk effectieve toegang en de machtigingen."
   },
   {
    "q": "Wat gebeurt er bij Disable Account?",
    "o": [
     "Aanmelden wordt geblokkeerd",
     "Het object wordt uit AD verwijderd",
     "Het wachtwoord wordt leeggemaakt",
     "Het object verhuist naar de container Users"
    ],
    "a": 0,
    "w": [
     null,
     "Verwijderen is een andere handeling.",
     "Het wachtwoord blijft bestaan.",
     "De locatie blijft gelijk."
    ],
    "e": "Kan later ongedaan gemaakt worden."
   },
   {
    "q": "Een gebruiker is zijn wachtwoord vergeten. Wat doet de beheerder?",
    "o": [
     "Reset, na controle van de aanvrager",
     "Change Password met het oude wachtwoord",
     "De account verwijderen en opnieuw maken",
     "‘Password never expires’ aanvinken"
    ],
    "a": 0,
    "w": [
     null,
     "De beheerder kent het oude wachtwoord niet.",
     "Dat is buiten proportie.",
     "Dat lost niets op en is onveilig."
    ],
    "e": "Een aanvaller kan zich als medewerker voordoen."
   },
   {
    "q": "Een account wordt na ontgrendelen meteen opnieuw vergrendeld. Wat onderzoek je?",
    "o": [
     "Oude opgeslagen wachtwoorden elders",
     "Of de DNS-server van de client correct is",
     "Of de OU beschermd is tegen verwijderen",
     "De tijdzone van de domain controller"
    ],
    "a": 0,
    "w": [
     null,
     "DNS vergrendelt geen accounts.",
     "Bescherming tegen verwijderen heeft daar niets mee te maken.",
     "Tijd geeft andere fouten."
    ],
    "e": "Ook een service of geplande taak kan oude credentials gebruiken."
   },
   {
    "q": "Waarom schakel je een account bij vertrek eerst uit en verwijder je hem pas later?",
    "o": [
     "Zo blijven gegevens en fouten herstelbaar",
     "Verwijderen kan pas na 30 dagen",
     "Zo telt hij niet meer voor licenties",
     "Zo kan een opvolger dezelfde SID krijgen"
    ],
    "a": 0,
    "w": [
     null,
     "Verwijderen kan technisch meteen.",
     "Dat is niet de reden.",
     "Een SID wordt nooit hergebruikt voor iemand anders."
    ],
    "e": "Verwijderen is geen eerste reactie."
   },
   {
    "q": "Welke optie kies je voor een gewone nieuwe medewerker?",
    "o": [
     "User must change password at next logon",
     "Password never expires",
     "User cannot change password",
     "Account is disabled, ook al start ze vandaag"
    ],
    "a": 0,
    "w": [
     null,
     "Omzeilt het verloopbeleid.",
     "Ze moet net haar eigen wachtwoord kunnen kiezen.",
     "Dan kan ze vandaag niet starten."
    ],
    "e": "De beheerder deelt enkel een tijdelijk wachtwoord uit."
   },
   {
    "q": "Wat is het verschil tussen Full name en User logon name?",
    "o": [
     "Weergavenaam tegenover aanmeldnaam",
     "Er is geen verschil tussen beide",
     "Full name is de UPN van de gebruiker",
     "Logon name is altijd het e-mailadres"
    ],
    "a": 0,
    "w": [
     null,
     "Het zijn twee velden met een ander doel.",
     "De UPN is logon name + suffix.",
     "Een UPN lijkt op een e-mailadres, maar is het niet noodzakelijk."
    ],
    "e": "Sara Peeters · sara.peeters."
   },
   {
    "q": "Lina heeft als aanmeldnaam lina.desmet in het domein ad.brightlearning.test (NetBIOS: AD). Wat is haar UPN?",
    "o": [
     "lina.desmet@ad.brightlearning.test",
     "AD\\lina.desmet",
     "Lina De Smet",
     "lina.desmet@brightlearning.test"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is de NetBIOS-notatie.",
     "Dat is de volledige naam.",
     "Het suffix is het volledige domein ad.brightlearning.test."
    ],
    "e": "Logon name + @ + UPN-suffix."
   },
   {
    "q": "Een organisatie spreekt af: aanmeldnamen zijn voornaam.familienaam, kleine letters, zonder spaties. Hoe wordt de aanmeldnaam van Youssef El Amrani?",
    "o": [
     "youssef.elamrani",
     "youssef.el amrani",
     "Youssef.ElAmrani",
     "yelamrani"
    ],
    "a": 0,
    "w": [
     null,
     "Spaties horen niet in de afspraak.",
     "De afspraak zegt kleine letters.",
     "De afspraak is voornaam.familienaam."
    ],
    "e": "Documenteer ook hoe je samengestelde en dubbele namen behandelt."
   },
   {
    "q": "Mag een gebruiker rechtstreeks lid worden van DL_Lesmateriaal_Read?",
    "o": [
     "Het kan, maar het breekt AGDLP",
     "Nee, Windows weigert dat altijd",
     "Ja, dat is net de bedoeling",
     "Alleen als de link Enforced is"
    ],
    "a": 0,
    "w": [
     null,
     "Windows laat het toe.",
     "De bedoeling is via een global group.",
     "Enforced hoort bij GPO-links."
    ],
    "e": "Geen losse uitzonderingen."
   },
   {
    "q": "Een medewerker verandert van afdeling. Wat controleer je naast het attribuut Department?",
    "o": [
     "Groepen, effectieve toegang en eventueel de OU",
     "Alleen de weergavenaam van de gebruiker",
     "Alleen het wachtwoord van de gebruiker",
     "Niets, Department volstaat voor de toegang"
    ],
    "a": 0,
    "w": [
     null,
     "Daarmee pas je geen toegang aan.",
     "Het wachtwoord blijft hetzelfde.",
     "Een attribuut verleent geen toegang."
    ],
    "e": "Oude rechten weg, nieuwe gericht toevoegen."
   },
   {
    "q": "Wanneer maak je een nieuwe account aan in de uitgeschakelde toestand?",
    "o": [
     "Als de medewerker pas later start",
     "Voor elke nieuwe beheerder in het domein",
     "Bij een vergeten wachtwoord van een gebruiker",
     "Na een functiewijziging binnen het bedrijf"
    ],
    "a": 0,
    "w": [
     null,
     "Beheerders moeten kunnen werken.",
     "Dan reset je het wachtwoord.",
     "Bij een mover pas je groepen aan."
    ],
    "e": "De identiteit bestaat al, maar kan niet voortijdig gebruikt worden."
   },
   {
    "q": "Waarom deel je geen persoonlijke account tussen collega's?",
    "o": [
     "Acties moeten aan één persoon te koppelen zijn",
     "Een gedeelde account kost een extra licentie",
     "Windows laat maar één aanmelding per dag toe",
     "Het gedeelde profiel wordt dan veel te groot"
    ],
    "a": 0,
    "w": [
     null,
     "Daar gaat het niet om.",
     "Dat is niet zo.",
     "Dat is niet de reden."
    ],
    "e": "Elke persoon een eigen account."
   },
   {
    "q": "Welke rechten geeft lidmaatschap van een distribution group?",
    "o": [
     "Geen beveiligingsrechten",
     "Read op alle gedeelde mappen",
     "Beheerrechten op de eigen OU",
     "Een eigen mailbox op de mailserver"
    ],
    "a": 0,
    "w": [
     null,
     "Distribution groups zijn geen security principals voor rechten.",
     "Dat vereist delegatie.",
     "Een mailbox is iets anders."
    ],
    "e": "Distribution = e-mail."
   },
   {
    "q": "GG_Opleiding is lid van DL_Lesmateriaal_Modify, en DL_Lesmateriaal_Modify heeft Modify op de map. Er start een nieuwe docent. Wat pas je aan?",
    "o": [
     "Het lidmaatschap van GG_Opleiding",
     "De machtigingen op de map",
     "De leden van DL_Lesmateriaal_Modify",
     "De OU waarin de groepen staan"
    ],
    "a": 0,
    "w": [
     null,
     "De map hoeft niet te veranderen.",
     "Die nesting blijft gelijk.",
     "De OU verandert niets aan toegang."
    ],
    "e": "Precies het voordeel van AGDLP."
   },
   {
    "q": "Wat is het voordeel van toegang via groepen?",
    "o": [
     "Eén vermelding op de map",
     "Gebruikers melden sneller aan",
     "Er is minder DNS-verkeer op het netwerk",
     "Gebruikers hebben geen wachtwoord meer nodig"
    ],
    "a": 0,
    "w": [
     null,
     "Het gaat om beheersbaarheid.",
     "Geen invloed op DNS.",
     "Authenticatie blijft nodig."
    ],
    "e": "Beter controleerbaar en minder vergeten toegang."
   },
   {
    "q": "Je hebt één domein. Heb je dan een Universal group nodig?",
    "o": [
     "Nee, dat dient voor meerdere domeinen",
     "Ja, voor elke beheergroep in het domein",
     "Ja, Universal is het standaardbereik",
     "Ja, voor elke distributiegroep"
    ],
    "a": 0,
    "w": [
     null,
     "Beheergroepen zijn Global.",
     "Global is de standaard in de wizard.",
     "Universal is een bereik, geen type."
    ],
    "e": "Kies eerst het doel, dan het bereik."
   }
  ]
 },
 "ou": {
  "t": "OU's en delegatie",
  "q": [
   {
    "q": "Wat is een OU vooral?",
    "o": [
     "Een beheermodel voor delegatie en beleid",
     "Een security group voor toegang tot mappen",
     "Een kopie van het organigram van het bedrijf",
     "Een container die AD zelf automatisch maakt"
    ],
    "a": 0,
    "w": [
     null,
     "Groepen regelen toegang.",
     "Volg beheerbehoeften, niet rapporteringslijnen.",
     "Standaardcontainers ontstaan automatisch; eigen OU's maak je zelf."
    ],
    "e": "Maak een OU alleen met een beheerreden."
   },
   {
    "q": "Kan een gebruiker in twee OU's tegelijk staan?",
    "o": [
     "Nee, wel in meerdere groepen",
     "Ja, in zoveel OU's als nodig",
     "Alleen als hij beheerder is",
     "Ja, via een snelkoppeling"
    ],
    "a": 0,
    "w": [
     null,
     "Een object heeft één plaats in de hiërarchie.",
     "Ook beheerders niet.",
     "AD werkt niet met snelkoppelingen."
    ],
    "e": "Locatie ≠ lidmaatschap."
   },
   {
    "q": "Waarom maak je geen OU per team en per project?",
    "o": [
     "Veel niveaus zonder beheerdoel",
     "Windows laat maar drie OU's toe",
     "OU's vertragen de DNS-resolutie",
     "Geneste OU's zijn niet mogelijk"
    ],
    "a": 0,
    "w": [
     null,
     "Er is geen limiet van drie.",
     "OU's hebben geen invloed op DNS.",
     "Geneste OU's kunnen wel."
    ],
    "e": "Bij elke reorganisatie zou je objecten moeten verplaatsen."
   },
   {
    "q": "Wat doet ‘Protect container from accidental deletion’?",
    "o": [
     "Het verwijderen bemoeilijken",
     "Een back-up van de OU maken",
     "De OU verbergen voor gebruikers",
     "GPO-links op de OU blokkeren"
    ],
    "a": 0,
    "w": [
     null,
     "Er wordt geen kopie bewaard.",
     "Het verbergt niets.",
     "Het heeft geen invloed op beleid."
    ],
    "e": "Een bevoegde beheerder kan het bewust uitschakelen. Het is geen back-up."
   },
   {
    "q": "Waar maak je in het domein ad.brightlearning.test de hoofd-OU BrightLearning?",
    "o": [
     "Rechtstreeks onder de domeinroot",
     "In de standaardcontainer Users",
     "In OU Domain Controllers",
     "In de container Builtin"
    ],
    "a": 0,
    "w": [
     null,
     "Users is een container.",
     "Die OU is voor DC's.",
     "Builtin is voor ingebouwde groepen."
    ],
    "e": "Rechtsklik op ad.brightlearning.test → New → Organizational Unit."
   },
   {
    "q": "In Users staan: Administrator, Guest, krbtgt en je eigen gebruikers Sara, Youssef en Lina. Welke verplaats je naar OU BrightLearning › Gebruikers?",
    "o": [
     "Sara, Youssef en Lina",
     "Alle objecten uit Users",
     "Ook Administrator en Guest",
     "Alleen Administrator"
    ],
    "a": 0,
    "w": [
     null,
     "Ook de ingebouwde accounts en groepen zouden meegaan.",
     "Ingebouwde accounts blijven in Users.",
     "Ingebouwde accounts blijven in Users."
    ],
    "e": "Verplaats alleen je eigen objecten."
   },
   {
    "q": "Wat lees je uit de DN OU=Gebruikers,OU=BrightLearning,DC=ad,DC=brightlearning,DC=test?",
    "o": [
     "Gebruikers zit in BrightLearning",
     "BrightLearning zit in Gebruikers",
     "Het zijn twee security groups",
     "Het is de DNS-naam van een server"
    ],
    "a": 0,
    "w": [
     null,
     "Een DN lees je van object naar domein.",
     "OU= zijn OU's, geen groepen.",
     "Het is een LDAP-pad, geen DNS-naam."
    ],
    "e": "Van klein naar groot."
   },
   {
    "q": "Wat verandert er wanneer je een gebruiker naar een andere OU verplaatst?",
    "o": [
     "De DN, en mogelijk het beleid",
     "De SID van de gebruiker",
     "Zijn groepslidmaatschappen",
     "Het wachtwoord van de gebruiker"
    ],
    "a": 0,
    "w": [
     null,
     "De identiteit blijft dezelfde.",
     "Die blijven behouden.",
     "Het wachtwoord blijft."
    ],
    "e": "Controleer na iedere wijziging locatie én relaties."
   },
   {
    "q": "Wat is delegatie in AD?",
    "o": [
     "Een beperkte taak op één OU toewijzen",
     "Een gebruiker Domain Admin maken",
     "Een GPO aan een OU koppelen",
     "Een gebruiker naar een OU verplaatsen"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is het omgekeerde van least privilege.",
     "Dat is beleid, geen delegatie.",
     "Dat is een verplaatsing."
    ],
    "e": "Wie + wat + waar."
   },
   {
    "q": "Servicedeskmedewerker servicedesk.test is lid van GG_ServiceDesk. Aan wie delegeer je de taak ‘wachtwoorden resetten’?",
    "o": [
     "Aan GG_ServiceDesk",
     "Aan servicedesk.test",
     "Aan Domain Users",
     "Aan Domain Admins"
    ],
    "a": 0,
    "w": [
     null,
     "Bij een personeelswissel moet je dan de delegatie aanpassen.",
     "Dan krijgt iedereen de taak.",
     "Die hebben al alle rechten; dat is geen delegatie."
    ],
    "e": "Rolgebaseerd beheer: bij een wissel pas je enkel het lidmaatschap aan."
   },
   {
    "q": "De gewone medewerkers staan in OU BrightLearning › Gebruikers. Waar start je de Delegation of Control Wizard voor wachtwoordreset?",
    "o": [
     "Op OU BrightLearning › Gebruikers",
     "Op het domein ad.brightlearning.test",
     "Op de groep GG_ServiceDesk",
     "Op de container Builtin"
    ],
    "a": 0,
    "w": [
     null,
     "Te brede scope: ook beheeraccounts vallen eronder.",
     "De groep is de ontvanger, niet de scope.",
     "Daar staan geen gewone gebruikers."
    ],
    "e": "De plaats waar je de wizard start, bepaalt de scope."
   },
   {
    "q": "Waarom test je een delegatie niet met een Domain Admin?",
    "o": [
     "Dan lukt alles en bewijs je niets",
     "Domain Admins kunnen niet resetten",
     "Windows verbiedt dat soort tests",
     "Dan wordt de delegatie verwijderd"
    ],
    "a": 0,
    "w": [
     null,
     "Ze kunnen alles.",
     "Het is niet verboden, maar zinloos als test.",
     "Er wordt niets verwijderd."
    ],
    "e": "Gebruik een niet-administratieve testaccount."
   },
   {
    "q": "Wat is een geslaagde negatieve test bij delegatie?",
    "o": [
     "Een verboden handeling wordt geweigerd",
     "Een toegestane handeling lukt gewoon",
     "Een test die je bewust overslaat",
     "Een foutmelding van de DNS-server"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is een positieve test.",
     "Overslaan is geen bewijs.",
     "Dat test iets anders."
    ],
    "e": "Toont dat least privilege werkt."
   },
   {
    "q": "Waar wordt een delegatie technisch opgeslagen?",
    "o": [
     "Als ACE's in de ACL van de OU",
     "Als record in de DNS-zone",
     "Als attribuut van de groep",
     "In de Default Domain Policy"
    ],
    "a": 0,
    "w": [
     null,
     "DNS bevat geen rechten.",
     "De groep is de principal; de regels staan op de OU.",
     "Delegatie is geen GPO."
    ],
    "e": "Bekijk ze via Security › Advanced of dsacls."
   },
   {
    "q": "Je ziet het tabblad Security van een OU niet in ADUC. Waarom?",
    "o": [
     "Advanced Features staat uit",
     "Je bent geen Domain Admin",
     "De OU is beschermd",
     "Er is geen delegatie"
    ],
    "a": 0,
    "w": [
     null,
     "Ook een admin ziet het pas met Advanced Features.",
     "Bescherming verbergt het tabblad niet.",
     "Het tabblad bestaat altijd."
    ],
    "e": "View › Advanced Features."
   },
   {
    "q": "Je delegeert één wizardtaak, maar ziet daarna meerdere ACE's op de OU. Waarom?",
    "o": [
     "Eén taak vraagt meerdere rechten",
     "De wizard maakte een fout",
     "Er zijn meerdere DC's in het domein",
     "Elke gebruiker krijgt een eigen ACE"
    ],
    "a": 0,
    "w": [
     null,
     "Het is normaal gedrag.",
     "Ook met één DC.",
     "De ACE's gelden voor de groep."
    ],
    "e": "Bv. Reset Password + schrijven op pwdLastSet."
   },
   {
    "q": "De taak ‘wachtwoorden resetten’ is gedelegeerd aan GG_ServiceDesk. Een medewerker verlaat de servicedesk. Wat doe je?",
    "o": [
     "Hem uit GG_ServiceDesk halen",
     "De delegatie op de OU verwijderen",
     "De OU met gebruikers verwijderen",
     "Het wachtwoord van de OU resetten"
    ],
    "a": 0,
    "w": [
     null,
     "Dan verliezen ook de andere leden hun taak.",
     "Veel te ingrijpend.",
     "Een OU heeft geen wachtwoord."
    ],
    "e": "Rol beëindigen ≠ delegatie verwijderen."
   },
   {
    "q": "Waar verwijder je een overgeërfde toegangsregel bij voorkeur?",
    "o": [
     "Bij de bron, waar ze ingesteld werd",
     "Op elk onderliggend object apart",
     "In de DNS-zone van het domein",
     "In de groep die de regel kreeg"
    ],
    "a": 0,
    "w": [
     null,
     "Dat geeft moeilijk te verklaren uitzonderingen.",
     "DNS bevat geen ACL's van AD-objecten.",
     "De groep bevat de regel niet."
    ],
    "e": "Beheer delegatie waar ze ingesteld is."
   },
   {
    "q": "Waarvoor gebruik je dsacls in deze cursus?",
    "o": [
     "Toegangsregels bekijken",
     "ACL's in bulk aanpassen",
     "Gebruikers in bulk aanmaken",
     "DNS-records van de zone opvragen"
    ],
    "a": 0,
    "w": [
     null,
     "Wijzigen via de opdrachtregel vraagt diepe kennis.",
     "Daarvoor dient het niet.",
     "Daarvoor gebruik je nslookup."
    ],
    "e": "GUI en opdrachtregel vullen elkaar aan."
   },
   {
    "q": "Op OU Gebruikers staat een delegatie. Je maakt eronder een sub-OU Stagiairs. Wat controleer je?",
    "o": [
     "Of de delegatie overerft en dat gewenst is",
     "Of DNS de nieuwe sub-OU al kent",
     "Of de sub-OU een IP-adres heeft gekregen",
     "Niets: een sub-OU erft nooit iets"
    ],
    "a": 0,
    "w": [
     null,
     "DNS kent geen OU's.",
     "OU's hebben geen IP-adres.",
     "Gedelegeerde rechten kunnen wel doorwerken."
    ],
    "e": "Maak niet gedachteloos sub-OU's."
   },
   {
    "q": "Waarom laat je een domain controller in OU Domain Controllers staan?",
    "o": [
     "Daar geldt het specifieke DC-beleid",
     "OU Computers is daarvoor te klein",
     "Een DC is geen computerobject",
     "Pas met twee DC's mag hij weg"
    ],
    "a": 0,
    "w": [
     null,
     "Er is geen limiet.",
     "DC01 is wel een computerobject.",
     "Dat geldt ook met één DC."
    ],
    "e": "Verplaats DC's niet."
   },
   {
    "q": "Een domein heeft de container Computers en de OU BrightLearning › Computers. Het werkplekbeleid moet via een GPO-link komen. Waar zet je CLIENT01?",
    "o": [
     "In OU BrightLearning › Computers",
     "In de container Computers",
     "In OU Domain Controllers",
     "In OU BrightLearning › Gebruikers"
    ],
    "a": 0,
    "w": [
     null,
     "Op de container kan je geen gewone GPO koppelen.",
     "CLIENT01 is geen DC.",
     "Die OU is voor gebruikers."
    ],
    "e": "Zo kan computerbeleid gericht toegepast worden."
   },
   {
    "q": "De servicedesk kreeg via de wizard enkel ‘Reset user passwords and force password change at next logon’ op OU Gebruikers. Wat kan ze niet?",
    "o": [
     "Gebruikers verwijderen",
     "Wachtwoorden resetten",
     "Wijziging afdwingen",
     "Zelf aanmelden"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is net de taak.",
     "Dat hoort bij de taak.",
     "Aanmelden is een gewone gebruikersfunctie."
    ],
    "e": "Precies één taak."
   },
   {
    "q": "Wat is least privilege?",
    "o": [
     "Enkel de rechten die de taak vraagt",
     "Zo weinig mogelijk gebruikersaccounts",
     "Zo weinig mogelijk OU's in het domein",
     "Helemaal geen beheerders meer"
    ],
    "a": 0,
    "w": [
     null,
     "Het gaat om rechten.",
     "Het gaat om rechten, niet om de structuur.",
     "Beheerders blijven nodig."
    ],
    "e": "Vermijd routinewerk met Domain Admin."
   },
   {
    "q": "Waarom documenteer je een delegatie?",
    "o": [
     "De wizard toont achteraf niets",
     "Omdat Windows het verplicht",
     "Omdat DNS de documentatie nodig heeft",
     "Om de OU te beschermen tegen verwijderen"
    ],
    "a": 0,
    "w": [
     null,
     "Er is geen verplichting.",
     "Niet relevant.",
     "Bescherming is een andere optie."
    ],
    "e": "Groep, scope, taak, leden, testresultaat."
   },
   {
    "q": "Wat is het verschil tussen een OU en een security group?",
    "o": [
     "OU: beheer en beleid; groep: rechten",
     "Er is geen verschil tussen beide",
     "Een OU heeft leden, een groep heeft er geen",
     "Een groep kan een GPO-link krijgen, een OU niet"
    ],
    "a": 0,
    "w": [
     null,
     "Ze hebben een ander doel.",
     "Omgekeerd: groepen hebben leden.",
     "GPO's link je aan site, domein of OU."
    ],
    "e": "Verplaats nooit iemand naar een OU om toegang te geven."
   },
   {
    "q": "De wachtwoordreset is gedelegeerd op OU Gebruikers. Een reset door de servicedesk wordt geweigerd voor één gebruiker. Wat controleer je eerst?",
    "o": [
     "Of die gebruiker in OU Gebruikers staat",
     "De DNS-server van de pc van de servicedesk",
     "De tijd van de domain controller",
     "De GPO-links op het domein"
    ],
    "a": 0,
    "w": [
     null,
     "DNS is niet het probleem.",
     "Tijd geeft andere symptomen.",
     "GPO's spelen geen rol bij delegatie."
    ],
    "e": "Objectlocatie en delegatiescope."
   },
   {
    "q": "Een test met servicedesk.test slaagt altijd, ook voor acties die verboden zouden moeten zijn. Wat is waarschijnlijk?",
    "o": [
     "De testaccount heeft al meer rechten",
     "De delegatie is te beperkt ingesteld",
     "De DNS-server van de DC is verkeerd ingesteld",
     "De OU is beschermd tegen onbedoeld verwijderen"
    ],
    "a": 0,
    "w": [
     null,
     "Dan zou meer geweigerd worden.",
     "DNS verklaart dat niet.",
     "Bescherming zou net meer weigeren."
    ],
    "e": "Controleer lid van Domain Admins, Account Operators …"
   },
   {
    "q": "Je test een delegatie op DC01 met PowerShell en -Credential AD\\servicedesk.test, in plaats van als servicedesk.test op DC01 aan te melden. Waarom?",
    "o": [
     "Gebruikers mogen niet aanmelden op een DC",
     "-Credential is veel sneller dan aanmelden",
     "Pas zo wordt de delegatie echt actief",
     "Aanmelden op een DC wist het access token"
    ],
    "a": 0,
    "w": [
     null,
     "Snelheid is niet de reden.",
     "De delegatie is al actief.",
     "Dat is niet zo."
    ],
    "e": "Zo test je eerlijk met de rechten van servicedesk.test."
   },
   {
    "q": "Wat bewijst een positieve delegatietest?",
    "o": [
     "Dat de taak lukt zonder beheerrechten",
     "Dat de servicedesk verder niets kan",
     "Dat de DNS-server correct werkt",
     "Dat de OU beschermd is tegen verwijderen"
    ],
    "a": 0,
    "w": [
     null,
     "Dat bewijzen de negatieve tests.",
     "Niet relevant.",
     "Niet relevant."
    ],
    "e": "Combineer positief en negatief bewijs."
   }
  ]
 },
 "join": {
  "t": "Domain join",
  "q": [
   {
    "q": "Welke Windows-editie kan je niet klassiek aan een domein toevoegen?",
    "o": [
     "Home",
     "Pro",
     "Enterprise",
     "Education"
    ],
    "a": 0,
    "w": [
     null,
     "Pro kan het wel.",
     "Enterprise kan het wel.",
     "Education kan het wel."
    ],
    "e": "Controleer Settings › System › About › Edition."
   },
   {
    "q": "Waarom hernoem je een client vóór de domain join?",
    "o": [
     "Het object krijgt meteen de juiste naam",
     "Na de join kan hernoemen niet meer",
     "Een join vereist cijfers in de naam",
     "Hernoemen geeft de pc een nieuwe SID"
    ],
    "a": 0,
    "w": [
     null,
     "Het kan wel, maar geeft extra stappen.",
     "Zo'n regel bestaat niet.",
     "Hernoemen wijzigt de SID niet."
    ],
    "e": "Minder beheerstappen en foutmogelijkheden."
   },
   {
    "q": "Een client toont het IPv4-adres 169.254.12.7. Wat betekent dat?",
    "o": [
     "Er is geen geldige IP-configuratie",
     "Het domein werd gevonden via DNS",
     "De client is al lid van het domein",
     "De DNS-server antwoordt correct"
    ],
    "a": 0,
    "w": [
     null,
     "Met APIPA vindt de client niets.",
     "Dat zie je niet in het IP-adres.",
     "Een APIPA-adres wijst op een ontbrekende configuratie."
    ],
    "e": "Laag 1 eerst."
   },
   {
    "q": "Wat test nltest /dsgetdc:ad.brightlearning.test /force?",
    "o": [
     "Of de client via DC Locator een DC vindt",
     "Of de secure channel van de client werkt",
     "Of de klok van de client gelijk loopt",
     "Of de gebruiker mag aanmelden"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is /sc_query of Test-ComputerSecureChannel.",
     "Daarvoor dient w32tm.",
     "Dat is authenticatie."
    ],
    "e": "Sterker dan een ping."
   },
   {
    "q": "nslookup dc01.ad.brightlearning.test lukt, de SRV-query _ldap._tcp.dc._msdcs.ad.brightlearning.test niet. Wat is waarschijnlijk?",
    "o": [
     "De SRV-records ontbreken op die server",
     "De client heeft geen geldig IP-adres",
     "De klok van de client wijkt af",
     "Het wachtwoord van de beheerder is fout"
    ],
    "a": 0,
    "w": [
     null,
     "Dan zou ook het A-record falen.",
     "Tijd speelt pas bij authenticatie.",
     "Credentials komen later."
    ],
    "e": "Controleer ook welke server antwoordt: misschien vraag je de verkeerde."
   },
   {
    "q": "Het domein heet ad.brightlearning.test (NetBIOS: AD), de DC heet DC01. Welke naam vul je in bij de join?",
    "o": [
     "ad.brightlearning.test",
     "AD",
     "dc01.ad.brightlearning.test",
     "brightlearning.test"
    ],
    "a": 0,
    "w": [
     null,
     "NetBIOS kan, maar de FQDN sluit aan bij DNS en DC Locator.",
     "Dat is de FQDN van de server, niet van het domein.",
     "Het domein heet ad.brightlearning.test; brightlearning.test is geen AD-domein."
    ],
    "e": "Gebruik de DNS-domeinnaam."
   },
   {
    "q": "Welke optie kies je in Settings › Accounts › Access work or school voor een klassieke domain join?",
    "o": [
     "Join to a local AD domain",
     "Connect (werk- of schoolaccount)",
     "Join to Microsoft Entra ID",
     "Add a Microsoft account"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is accountregistratie of Entra ID.",
     "Dat is de cloud, niet je DC.",
     "Dat is een persoonlijk account."
    ],
    "e": "Local Active Directory ≠ Microsoft Entra ID."
   },
   {
    "q": "Welke twee bevoegdheden heb je nodig voor een domain join?",
    "o": [
     "Lokale admin + joinrechten in AD",
     "Alleen lidmaatschap van Domain Admins",
     "Alleen lokale beheerrechten op de client",
     "Schrijfrechten op de DNS-zone van AD"
    ],
    "a": 0,
    "w": [
     null,
     "In productie delegeer je joinrechten gericht.",
     "Ook AD moet gewijzigd worden.",
     "DNS-rechten zijn niet nodig."
    ],
    "e": "De join wijzigt de client én AD."
   },
   {
    "q": "Je voegt een client toe met de account AD\\joinbeheer (geen Domain Admin). Wordt joinbeheer daardoor lokale admin?",
    "o": [
     "Nee",
     "Ja, automatisch",
     "Alleen tot de herstart",
     "Ja, voor 24 uur"
    ],
    "a": 0,
    "w": [
     null,
     "Credentials autoriseren de join, niet het lokale beheer.",
     "Er verandert niets na de herstart.",
     "Zo'n tijdslimiet bestaat niet."
    ],
    "e": "Beheer lokale groepen afzonderlijk."
   },
   {
    "q": "Wat is de sAMAccountName van het computerobject van CLIENT01?",
    "o": [
     "CLIENT01$",
     "CLIENT01",
     "client01.ad.brightlearning.test",
     "AD\\CLIENT01"
    ],
    "a": 0,
    "w": [
     null,
     "Computeraccounts eindigen op $.",
     "Dat is de FQDN.",
     "Dat is een notatie, niet de sAMAccountName."
    ],
    "e": "Een computer is ook een security principal."
   },
   {
    "q": "Waarvoor dient het wachtwoord van een computeraccount?",
    "o": [
     "De secure channel met het domein",
     "Gebruikers melden ermee aan",
     "Het beveiligt de DNS-zone",
     "Het is het lokale adminwachtwoord"
    ],
    "a": 0,
    "w": [
     null,
     "Gebruikers hebben eigen credentials.",
     "Niet voor DNS.",
     "Dat is een ander wachtwoord."
    ],
    "e": "Komen de kopieën niet overeen: trust relationship failed."
   },
   {
    "q": "Je voegt een client toe zonder het computerobject vooraf aan te maken. Waar komt het object terecht?",
    "o": [
     "In de container Computers",
     "In een OU met de naam Computers",
     "In de container Users",
     "In OU Domain Controllers"
    ],
    "a": 0,
    "w": [
     null,
     "Daar komt het alleen bij prestaging of een aangepaste doelcontainer.",
     "Users is voor gebruikers en groepen.",
     "Daar staan alleen DC's."
    ],
    "e": "Verplaats het daarna."
   },
   {
    "q": "Wat is prestaging?",
    "o": [
     "Het computerobject vooraf in de OU maken",
     "De client vooraf een nieuwe naam geven",
     "De DNS-server vooraf correct instellen",
     "Een snapshot nemen vóór de join"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is gewone voorbereiding.",
     "Dat is netwerkconfiguratie.",
     "Dat is een herstelpunt."
    ],
    "e": "Optioneel; let op eigenaarschap en join hardening."
   },
   {
    "q": "Waar staat het logboek van de domain join?",
    "o": [
     "C:\\Windows\\Debug\\Netsetup.log",
     "Event Viewer › Windows Logs › Security",
     "C:\\Users\\Public\\Documents\\join.txt",
     "In ADUC, bij het computerobject"
    ],
    "a": 0,
    "w": [
     null,
     "Daar staan aanmeldgebeurtenissen.",
     "Dat bestand bestaat niet.",
     "ADUC bevat geen logboeken."
    ],
    "e": "Zoek rond het tijdstip naar de eerste fout."
   },
   {
    "q": "De join meldt: ‘The specified domain either does not exist or could not be contacted’. Wat controleer je eerst?",
    "o": [
     "DNS-server, SRV-query en nltest",
     "Het wachtwoord van de joinaccount",
     "Of het computerobject al bestaat",
     "De tijdzone van de client"
    ],
    "a": 0,
    "w": [
     null,
     "Het domein wordt niet eens gevonden.",
     "Dat speelt pas als het domein gevonden is.",
     "Tijd komt later."
    ],
    "e": "DNS of DC Locator."
   },
   {
    "q": "De join meldt ‘Access is denied’. Wat is een mogelijke oorzaak?",
    "o": [
     "Ontbrekende joinrechten",
     "Het domein bestaat niet in DNS",
     "De client heeft een APIPA-adres",
     "De client gebruikt 8.8.8.8 als DNS-server"
    ],
    "a": 0,
    "w": [
     null,
     "Dan krijg je een andere melding.",
     "Dan vind je het domein niet.",
     "Het domein werd gevonden; DNS is hier niet het probleem."
    ],
    "e": "Niet automatisch een fout wachtwoord."
   },
   {
    "q": "Waarom herstart de client na een domain join?",
    "o": [
     "Om het lidmaatschap actief te maken",
     "Om de computer een nieuwe SID te geven",
     "Om de DNS-cache van de DC te wissen",
     "Om alle lokale profielen te wissen"
    ],
    "a": 0,
    "w": [
     null,
     "De SID van de computer verandert niet door de herstart.",
     "DNS draait op de DC.",
     "Profielen blijven."
    ],
    "e": "Daarna kan je domeinaanmelding kiezen."
   },
   {
    "q": "Op CLIENT01 bestaat de lokale account lokalebeheerder. Hoe meld je expliciet met die lokale account aan?",
    "o": [
     ".\\lokalebeheerder",
     "AD\\lokalebeheerder",
     "lokalebeheerder@ad.brightlearning.test",
     "DC01\\lokalebeheerder"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is een domeinnotatie.",
     "Dat is een UPN in het domein.",
     "DC01 is een andere computer."
    ],
    "e": "De punt verwijst naar de lokale computer."
   },
   {
    "q": "Een domeingebruiker meldt voor het eerst aan op een client. Waarom krijgt hij een nieuw profiel?",
    "o": [
     "Zijn domeinaccount heeft een eigen SID",
     "Profielen staan standaard op de DC",
     "Omdat hij zijn wachtwoord wijzigde",
     "Omdat de client herstart is"
    ],
    "a": 0,
    "w": [
     null,
     "Standaard staat het profiel lokaal op de client.",
     "Het wachtwoord heeft niets met het profiel te maken.",
     "Een herstart maakt geen nieuw profiel."
    ],
    "e": "Het profiel hangt aan de SID."
   },
   {
    "q": "Waar registreert Windows welke profielmap bij welke SID hoort?",
    "o": [
     "HKLM\\…\\CurrentVersion\\ProfileList",
     "HKCU\\Software\\Microsoft\\Windows\\Profiles",
     "Bij het gebruikersobject in Active Directory",
     "In NTUSER.DAT van de Administrator"
    ],
    "a": 0,
    "w": [
     null,
     "Die sleutel bestaat niet zo.",
     "Bij een lokaal profiel niet.",
     "NTUSER.DAT is de hive van de gebruiker zelf."
    ],
    "e": "ProfileImagePath per SID."
   },
   {
    "q": "Windows meldt na het aanmelden een tijdelijk profiel. Wat doe je?",
    "o": [
     "Stoppen en de oorzaak laten onderzoeken",
     "Gewoon verder werken en alles opslaan",
     "ProfileList in het register meteen aanpassen",
     "De account meteen verwijderen"
    ],
    "a": 0,
    "w": [
     null,
     "Wijzigingen kunnen verloren gaan.",
     "Niet zonder back-up en diagnose.",
     "Veel te ingrijpend."
    ],
    "e": "Noteer de melding, meld niet onnodig af."
   },
   {
    "q": "Wat toont echo %LOGONSERVER% in een domeinsessie?",
    "o": [
     "De DC die je aanmelding verwerkte",
     "Het IP-adres van de client zelf",
     "De DNS-server die de client gebruikt",
     "Het volledige pad van je eigen profielmap"
    ],
    "a": 0,
    "w": [
     null,
     "Dat toont ipconfig.",
     "Dat toont ipconfig /all.",
     "Dat toont %USERPROFILE%."
    ],
    "e": "Bevestigt dat een DC de aanmelding verwerkte."
   },
   {
    "q": "Test-ComputerSecureChannel geeft False. Wat doe je eerst?",
    "o": [
     "DNS, tijd en het object controleren",
     "Meteen uit het domein halen en opnieuw joinen",
     "Het computerobject in AD verwijderen",
     "De domain controller herstarten"
    ],
    "a": 0,
    "w": [
     null,
     "Dat verstoort bewijs en instellingen.",
     "Verwijder niets zonder onderzoek.",
     "Dat lost een kapot machinegeheim niet op."
    ],
    "e": "Test eerst, herstel daarna eventueel met -Repair."
   },
   {
    "q": "Waarom is de klok belangrijk bij een domeinaanmelding?",
    "o": [
     "Kerberos is tijdgevoelig",
     "DNS weigert een foute tijd",
     "GPO's worden per uur verwerkt",
     "De SID bevat een tijdstempel"
    ],
    "a": 0,
    "w": [
     null,
     "DNS werkt met records, niet met de klok van de client.",
     "Niet de reden.",
     "Dat is niet zo."
    ],
    "e": "Een verkeerde klok kan een gezonde omgeving onbruikbaar doen lijken."
   },
   {
    "q": "Welke tijdbron gebruikt een gewoon domeinlid?",
    "o": [
     "De domeinhiërarchie (een DC)",
     "Altijd time.windows.com",
     "De BIOS-klok van de pc",
     "De DHCP-server van het netwerk"
    ],
    "a": 0,
    "w": [
     null,
     "Dat kan vóór de join.",
     "Niet als bron na de join.",
     "DHCP levert geen tijd aan Windows-domeinleden."
    ],
    "e": "w32tm /query /source → een DC."
   },
   {
    "q": "Waarom zet je geen publieke DNS-server als alternatieve DNS op een domeinclient?",
    "o": [
     "Die kent de interne zone niet",
     "Dat is verboden door Microsoft",
     "Dan wordt ping trager",
     "Dan verdwijnen de SRV-records"
    ],
    "a": 0,
    "w": [
     null,
     "Het is niet verboden, wel onverstandig.",
     "Ping op een IP-adres gebruikt geen DNS.",
     "Een client wijzigt geen records op de server."
    ],
    "e": "Windows kan de alternatieve server gebruiken en dan geen antwoord krijgen. Externe namen via forwarders op de interne DNS."
   },
   {
    "q": "systeminfo toont ‘Domain: ad.brightlearning.test’. Wat bewijst dat?",
    "o": [
     "Dat de client zich als domeinlid ziet",
     "Dat de secure channel werkt",
     "Dat Sara op dit moment aangemeld is",
     "Dat het werkplek-GPO werkt"
    ],
    "a": 0,
    "w": [
     null,
     "Daarvoor test je de secure channel.",
     "Dat toont whoami.",
     "Dat toont gpresult."
    ],
    "e": "Combineer met het object in ADUC."
   },
   {
    "q": "Je zet een snapshot van een domeinclient terug, maar niet van de DC. Wat is het risico?",
    "o": [
     "Het machinegeheim klopt niet meer",
     "Er is geen enkel risico",
     "De DNS-zone van het domein verdwijnt",
     "Alle gebruikers verdwijnen uit AD"
    ],
    "a": 0,
    "w": [
     null,
     "Het machinegeheim wordt periodiek vernieuwd.",
     "DNS staat op de DC.",
     "Gebruikers staan op de DC."
    ],
    "e": "Zet domeinlid en DC samen terug."
   },
   {
    "q": "Wat doe je eerst bij een foutmelding?",
    "o": [
     "Exacte melding en tijdstip noteren",
     "De DNS-server naar 8.8.8.8 zetten",
     "De Windows-firewall volledig uitschakelen",
     "Het computerobject meteen verwijderen"
    ],
    "a": 0,
    "w": [
     null,
     "Dat maakt het erger.",
     "Geen permanente oplossing.",
     "Verwijder niets zonder onderzoek."
    ],
    "e": "Verander één variabele per keer."
   },
   {
    "q": "Wanneer is escaleren de juiste keuze?",
    "o": [
     "Als de oplossing buiten je bevoegdheid valt",
     "Meteen bij elke foutmelding",
     "Nooit, je lost alles zelf op",
     "Nadat je het computerobject verwijderd hebt"
    ],
    "a": 0,
    "w": [
     null,
     "Eerst zelf afbakenen.",
     "Soms is het de juiste keuze.",
     "Dan heb je al bewijs vernietigd."
    ],
    "e": "Lever melding, IP/DNS, SRV, nltest, log en uitgevoerde wijzigingen aan."
   }
  ]
 },
 "gpo": {
  "t": "Group Policy",
  "q": [
   {
    "q": "Wat is een GPO?",
    "o": [
     "Een verzameling beleidsinstellingen",
     "Een koppeling van beleid aan een OU",
     "Een groep computers met hetzelfde beleid",
     "Een OU waarop beleid van toepassing is"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is een link.",
     "Dat is een groep.",
     "Een OU kan een link hebben, maar is geen GPO."
    ],
    "e": "Het object zelf bepaalt nog niet waar het geldt."
   },
   {
    "q": "Waaraan kan je een GPO koppelen?",
    "o": [
     "Site, domein of OU",
     "Een security group",
     "De container Users",
     "Een gebruikersobject"
    ],
    "a": 0,
    "w": [
     null,
     "Groepen gebruik je voor filtering.",
     "Een container kan geen gewone link krijgen.",
     "Je linkt niet aan objecten."
    ],
    "e": "LSDOU."
   },
   {
    "q": "Welke helft van een GPO volgt de plaats van het computerobject?",
    "o": [
     "Computer Configuration",
     "User Configuration",
     "Beide helften",
     "Geen van beide"
    ],
    "a": 0,
    "w": [
     null,
     "Die volgt het gebruikersobject.",
     "Elke helft volgt haar eigen object.",
     "Elke helft volgt een object."
    ],
    "e": "Behalve bij loopback processing."
   },
   {
    "q": "Wanneer wordt computerbeleid verwerkt?",
    "o": [
     "Bij opstarten en op de achtergrond",
     "Alleen wanneer een gebruiker aanmeldt",
     "Alleen na een gpupdate /force",
     "Alleen 's nachts tijdens onderhoud"
    ],
    "a": 0,
    "w": [
     null,
     "Dat geldt voor gebruikersbeleid.",
     "Er is ook automatische verwerking.",
     "Er is periodieke vernieuwing."
    ],
    "e": "Gebruikersbeleid: bij aanmelden + achtergrond."
   },
   {
    "q": "Waar staat LSDOU voor?",
    "o": [
     "Local, Site, Domain, OU",
     "Link, Scope, Domain, Object",
     "Local, Security, DNS, Object",
     "Logon, Startup, Domain, Update"
    ],
    "a": 0,
    "w": [
     null,
     "Het gaat om de verwerkingsvolgorde van niveaus.",
     "DNS en Security zijn geen niveaus.",
     "Dat zijn momenten, geen niveaus."
    ],
    "e": "Later verwerkt wint doorgaans bij een conflict."
   },
   {
    "q": "Wat doet Enforced op een GPO-link?",
    "o": [
     "Lagere niveaus kunnen het niet overschrijven",
     "Het GPO geldt voor alle computers in het domein",
     "Alle andere GPO's worden geblokkeerd",
     "De link wordt tijdelijk uitgeschakeld"
    ],
    "a": 0,
    "w": [
     null,
     "De scope blijft dezelfde.",
     "Niet-conflicterende instellingen blijven samenwerken.",
     "Integendeel."
    ],
    "e": "Werkt ook door Block Inheritance heen."
   },
   {
    "q": "Waar stel je Block Inheritance in?",
    "o": [
     "Op een domein of OU",
     "Op een GPO-link",
     "In een GPO zelf",
     "Op een security group"
    ],
    "a": 0,
    "w": [
     null,
     "Op een link stel je Enforced in.",
     "In een GPO stel je instellingen in.",
     "Groepen gebruik je voor filtering."
    ],
    "e": "Spaarzaam gebruiken."
   },
   {
    "q": "Wat is het verschil tussen Link Enabled en GPO Status?",
    "o": [
     "Eén link tegenover alle links",
     "Er is geen verschil tussen beide",
     "GPO Status geldt voor één OU",
     "Link Enabled schakelt User uit"
    ],
    "a": 0,
    "w": [
     null,
     "Twee verschillende schakelaars.",
     "Omgekeerd.",
     "Helften schakel je via GPO Status."
    ],
    "e": "Controleer ze afzonderlijk."
   },
   {
    "q": "Je verwijdert de link van een GPO op een OU. Wat gebeurt er met het GPO?",
    "o": [
     "Het blijft bestaan",
     "Het wordt verwijderd",
     "Alle links verdwijnen",
     "De OU verdwijnt mee"
    ],
    "a": 0,
    "w": [
     null,
     "Link ≠ GPO.",
     "Andere links blijven bestaan.",
     "De OU blijft."
    ],
    "e": "Veilige eerste rollback: link uitschakelen."
   },
   {
    "q": "Waarom werk je niet in de Default Domain Policy?",
    "o": [
     "Een eigen GPO is beter te testen en terug te draaien",
     "De Default Domain Policy kan je niet bewerken",
     "De Default Domain Policy geldt niet voor clients",
     "De Default Domain Policy wordt maandelijks gewist"
    ],
    "a": 0,
    "w": [
     null,
     "Bewerken kan wel.",
     "Het geldt voor het hele domein.",
     "Dat is niet zo."
    ],
    "e": "Eén doel per GPO."
   },
   {
    "q": "Wat betekent Not Configured bij een instelling?",
    "o": [
     "Dit GPO legt niets op",
     "De instelling staat uit",
     "De instelling is verboden",
     "Hetzelfde als Disabled"
    ],
    "a": 0,
    "w": [
     null,
     "Disabled kan net de tegengestelde waarde afdwingen.",
     "Niet configureren is geen verbod.",
     "Niet hetzelfde."
    ],
    "e": "Noteer de oorspronkelijke toestand."
   },
   {
    "q": "Wat toont gpresult /r?",
    "o": [
     "Een beknopte RSoP",
     "Een HTML-rapport",
     "Alle GPO's van het domein",
     "Alleen de fouten"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is /h.",
     "Alleen wat voor deze computer en gebruiker geldt.",
     "Ook toegepaste GPO's."
    ],
    "e": "RSoP = resultaat."
   },
   {
    "q": "Waarom voer je gpresult /r /scope computer verhoogd uit?",
    "o": [
     "Computer-RSoP vraagt beheerrechten",
     "Anders werkt gpresult helemaal niet",
     "Om het beleid tegelijk te wijzigen",
     "Om de DNS-cache te omzeilen"
    ],
    "a": 0,
    "w": [
     null,
     "Gebruikersinfo krijg je ook zonder.",
     "gpresult wijzigt niets.",
     "Niet relevant."
    ],
    "e": "Alleen gebruikersresultaten? Verhoogd opnieuw proberen."
   },
   {
    "q": "Een GPO staat in gpresult bij ‘filtered out’ (Denied). Is dat altijd een fout?",
    "o": [
     "Nee, het kan bewust uitgesloten zijn",
     "Ja, Denied wijst altijd op een fout",
     "Ja, tenzij de link Enforced is",
     "Nee, Denied betekent toegepast"
    ],
    "a": 0,
    "w": [
     null,
     "Lees eerst de reden.",
     "Enforced gaat over voorrang.",
     "Denied is niet toegepast."
    ],
    "e": "Een correct geweigerd GPO bewijst dat de afbakening werkt."
   },
   {
    "q": "Wat is het verschil tussen Group Policy Results en Modeling?",
    "o": [
     "Werkelijk resultaat tegenover simulatie",
     "Geen verschil: twee namen voor hetzelfde",
     "Modeling toont wat werkelijk gebeurde",
     "Results werkt enkel op domain controllers"
    ],
    "a": 0,
    "w": [
     null,
     "Twee verschillende hulpmiddelen.",
     "Omgekeerd.",
     "Results vraagt gegevens op van de doelcomputer."
    ],
    "e": "Modeling vóór een wijziging, Results voor validatie."
   },
   {
    "q": "Waar vind je de gedetailleerde GPO-verwerking op een client?",
    "o": [
     "GroupPolicy › Operational",
     "Netsetup.log",
     "DNS Manager",
     "ADUC › Advanced Features"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is het joinlogboek.",
     "Niet relevant.",
     "ADUC toont geen verwerking."
    ],
    "e": "Event Viewer › Microsoft › Windows › GroupPolicy › Operational; volg één verwerking met Activity ID."
   },
   {
    "q": "Waarvoor dient de Activity ID in de GroupPolicy-logs?",
    "o": [
     "Eén verwerking samen volgen",
     "Een GPO uniek identificeren",
     "De gebruiker identificeren",
     "Een link identificeren"
    ],
    "a": 0,
    "w": [
     null,
     "Een GPO heeft een GUID.",
     "Daarvoor dient de SID.",
     "Niet relevant."
    ],
    "e": "Begin, verwerking en einde van één poging."
   },
   {
    "q": "Waar stel je een aanmeldbericht (vóór iemand aanmeldt) in?",
    "o": [
     "Computer › Security Options",
     "User › Admin Templates › Desktop",
     "Computer › Preferences › Drive Maps",
     "In de Default Domain Controllers Policy"
    ],
    "a": 0,
    "w": [
     null,
     "Het bericht verschijnt vóór er een gebruiker is.",
     "Drive maps zijn iets anders.",
     "Maak een eigen GPO voor de clients."
    ],
    "e": "Interactive logon: Message title / text."
   },
   {
    "q": "Waarom koppel je werkplekbeleid niet aan het domein?",
    "o": [
     "Dan krijgen ook servers en DC's het",
     "Een domein kan geen links hebben",
     "Dan werkt gpupdate niet meer",
     "Dan heb je altijd Enforced nodig"
    ],
    "a": 0,
    "w": [
     null,
     "Het domein kan wel links hebben.",
     "gpupdate werkt ook dan.",
     "Enforced is niet nodig."
    ],
    "e": "Koppel zo dicht mogelijk bij de doelgroep."
   },
   {
    "q": "Wat doet gpupdate /force?",
    "o": [
     "Alle instellingen opnieuw toepassen",
     "Alle GPO's van de client verwijderen",
     "Het beleid op de DC bewerken",
     "De GPO-link activeren"
    ],
    "a": 0,
    "w": [
     null,
     "Het verwijdert niets.",
     "Het werkt op de lokale computer.",
     "Links beheer je in GPMC."
    ],
    "e": "Lees de uitvoer: soms vraagt het afmelden of herstarten."
   },
   {
    "q": "Een GPO staat bij Applied, maar je ziet het effect niet. Wat controleer je?",
    "o": [
     "Winnende GPO en afmelden/herstart",
     "Of het GPO wel bestaat in GPMC",
     "De DNS-server van de client",
     "De groepen van de domain controller"
    ],
    "a": 0,
    "w": [
     null,
     "Het staat bij Applied, dus het bestaat.",
     "De verwerking lukte al.",
     "De DC doet hier niet ter zake."
    ],
    "e": "Applied ≠ zichtbaar resultaat; controleer ook het instellingspad."
   },
   {
    "q": "Een GPO is gekoppeld aan OU Gebruikers. Je voegt via Security Filtering een groep toe met een gebruiker uit OU Stagiairs. Krijgt die gebruiker het GPO?",
    "o": [
     "Nee, hij staat buiten de link",
     "Ja, via de groep in de filter",
     "Alleen als de link Enforced is",
     "Alleen het computerdeel"
    ],
    "a": 0,
    "w": [
     null,
     "Filtering verplaatst geen objecten naar de scope.",
     "Enforced verandert de scope niet.",
     "Dat geldt voor beide helften."
    ],
    "e": "Read + Apply Group Policy werkt alleen binnen de linkscope."
   },
   {
    "q": "Wat doet loopback processing?",
    "o": [
     "Gebruikersbeleid volgt de OU van de pc",
     "Het computerbeleid wordt tweemaal verwerkt",
     "GPO's worden sneller verwerkt",
     "DNS-vragen worden lokaal herhaald"
    ],
    "a": 0,
    "w": [
     null,
     "Het gaat over gebruikersbeleid.",
     "Niet de bedoeling.",
     "Niets met DNS."
    ],
    "e": "Merge of Replace; zelf een computerinstelling."
   },
   {
    "q": "Wanneer gebruik je een WMI-filter?",
    "o": [
     "Als een eigenschap van de pc telt",
     "Om de leden van een afdeling te selecteren",
     "Om GPO's sneller te laten verwerken",
     "Altijd, als extra beveiliging"
    ],
    "a": 0,
    "w": [
     null,
     "Afdelingen regel je met OU's of groepen.",
     "Integendeel: queries kunnen vertragen.",
     "Complexiteit is een beheerkost."
    ],
    "e": "Spaarzaam."
   },
   {
    "q": "Twee GPO's hangen aan dezelfde OU, met link order 1 en 2. Welke heeft voorrang bij een conflict?",
    "o": [
     "Link order 1",
     "Link order 2",
     "De oudste link op de OU",
     "De link die laatst gewijzigd is"
    ],
    "a": 0,
    "w": [
     null,
     "Laagste nummer = hoogste voorrang.",
     "Ouderdom speelt geen rol.",
     "Ouderdom speelt geen rol."
    ],
    "e": "Hogere voorrang wordt later verwerkt."
   },
   {
    "q": "CLIENT01 staat in OU Computers, en BL - C - Aanmeldbericht is aan OU Computers gekoppeld. gpresult toont het GPO niet. Wat controleer je eerst?",
    "o": [
     "Link Enabled en GPO Status",
     "De UPN van de gebruiker",
     "De tijdzone van de DC",
     "De naam van het GPO"
    ],
    "a": 0,
    "w": [
     null,
     "Computerbeleid hangt niet van de gebruiker af.",
     "Tijd geeft andere symptomen.",
     "De naam doet er niet toe."
    ],
    "e": "Object → link → filter → verwerking."
   },
   {
    "q": "Waarom bewaar je een gpresult-rapport als HTML?",
    "o": [
     "Leesbaar bewijs met Applied en Denied",
     "Om het beleid er later mee te wijzigen",
     "Omdat gpresult /r niet werkt op clients",
     "Om het naar de DC te kunnen kopiëren"
    ],
    "a": 0,
    "w": [
     null,
     "gpresult wijzigt niets.",
     "/r werkt, maar is beknopt.",
     "Niet nodig."
    ],
    "e": "Bewijs koppel je aan een conclusie."
   },
   {
    "q": "Wat is RSoP?",
    "o": [
     "Het beleid dat werkelijk geldt",
     "Een lijst van alle GPO's in het domein",
     "Een sjabloon om nieuwe GPO's te maken",
     "Een speciaal type link op een OU"
    ],
    "a": 0,
    "w": [
     null,
     "Alleen wat werkelijk geldt.",
     "Dat is een Starter GPO.",
     "Niet relevant."
    ],
    "e": "Resultant Set of Policy, voor een concrete gebruiker en computer."
   },
   {
    "q": "BL - U - Bureaublad (User Configuration) hangt aan OU Gebruikers. De lokale account CLIENT01\\lokaletest meldt aan op CLIENT01. Krijgt die het GPO?",
    "o": [
     "Nee",
     "Ja, op dezelfde computer",
     "Ja, als de naam gelijk is",
     "Alleen met loopback"
    ],
    "a": 0,
    "w": [
     null,
     "Gebruikersbeleid volgt een gebruikersobject in AD.",
     "De SID telt, niet de naam.",
     "Loopback werkt voor domeingebruikers via de computer-OU."
    ],
    "e": "Een lokale account heeft geen object in OU Gebruikers."
   },
   {
    "q": "Een GPO-test gaf een ongewenst effect. Wat is een veilige eerste rollback?",
    "o": [
     "De link uitschakelen",
     "Het GPO verwijderen",
     "De OU verwijderen",
     "De DC terugzetten"
    ],
    "a": 0,
    "w": [
     null,
     "Je verliest het object en eventuele andere links.",
     "Veel te ingrijpend.",
     "Te ingrijpend voor één instelling."
    ],
    "e": "Of de instelling op Not Configured zetten. Controleer daarna de impact met gpresult."
   }
  ]
 }
};
})(window.ADDATA);
