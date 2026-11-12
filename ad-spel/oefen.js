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
     "Een DNS-server",
     "Een server met de naam DC01",
     "Een cloudidentiteitsdienst"
    ],
    "a": 0,
    "w": [
     null,
     "DNS helpt clients AD vinden, maar is een andere dienst.",
     "Een server wordt pas DC door AD DS te draaien.",
     "Dat is Microsoft Entra ID."
    ],
    "e": "AD DS bewaart objecten centraal en maakt ze beschikbaar."
   },
   {
    "q": "Wat is het verschil tussen een directory en een directorydienst?",
    "o": [
     "De directory is het gegevensarchief; de dienst levert de functies om ermee te werken",
     "Er is geen verschil",
     "De directory is de server, de dienst het netwerk",
     "De dienst bevat alleen gebruikers"
    ],
    "a": 0,
    "w": [
     null,
     "Het zijn verwante maar verschillende begrippen.",
     "Een directory is geen server.",
     "AD DS bevat veel meer dan gebruikers."
    ],
    "e": "Opslaan, vinden, beveiligen, beheren: dat doet de dienst."
   },
   {
    "q": "Wat is de hoogste logische structuur in AD DS?",
    "o": [
     "Het forest",
     "Het domein",
     "De domain controller",
     "De OU"
    ],
    "a": 0,
    "w": [
     null,
     "Een domein zit in een forest.",
     "Een DC is een server, geen logische structuur.",
     "Een OU zit in een domein."
    ],
    "e": "Forest → domein → OU → object."
   },
   {
    "q": "Hoeveel domeinen bevat het forest van BrightLearning?",
    "o": [
     "Eén: ad.brightlearning.test",
     "Twee: ad en brightlearning",
     "Drie: ad, brightlearning en test",
     "Geen: het labo heeft enkel een DC"
    ],
    "a": 0,
    "w": [
     null,
     "De delen van een FQDN zijn geen afzonderlijke domeinen in het forest.",
     "‘test’ is gereserveerd voor labo's, geen AD-domein.",
     "Een DC biedt altijd een domein aan."
    ],
    "e": "In een klein labo vallen forest en domein bijna samen."
   },
   {
    "q": "Wat is ‘dc01.ad.brightlearning.test’?",
    "o": [
     "De volledige DNS-naam (FQDN) van de server DC01",
     "De naam van het domein",
     "De naam van het forest",
     "Een SRV-record"
    ],
    "a": 0,
    "w": [
     null,
     "Het domein heet ad.brightlearning.test.",
     "Het forest heet zoals zijn eerste domein.",
     "Het is een hostnaam; een SRV-naam begint met _ldap._tcp…"
    ],
    "e": "Computernaam + domeinnaam."
   },
   {
    "q": "Waarom gebruikt een productieomgeving meestal minstens twee DC's?",
    "o": [
     "Beschikbaarheid: als één DC uitvalt, blijven de domeindiensten werken",
     "Omdat één DC maximaal 100 gebruikers aankan",
     "Omdat replicatie een back-up vervangt",
     "Omdat DNS twee servers vereist"
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
     "Nee: ook een foutieve verwijdering wordt gerepliceerd",
     "Ja, een volwaardige",
     "Ja, als er drie DC's zijn",
     "Alleen voor het schema"
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
    "q": "Waarom heet het domein ‘…test’?",
    "o": [
     ".test is gereserveerd voor test- en labo-omgevingen",
     "Omdat het domein nog niet af is",
     "Omdat Windows dat verplicht",
     "Om internettoegang te blokkeren"
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
    "q": "Welke functie heeft het schema?",
    "o": [
     "Bepalen welke objectklassen en attributen kunnen bestaan",
     "De IP-adressen van DC's bewaren",
     "De wachtwoorden versleutelen",
     "De OU-structuur tekenen"
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
     "Een object waaraan rechten en machtigingen gekoppeld kunnen worden",
     "De hoofdbeheerder van het domein",
     "Een DNS-record",
     "Een OU met beveiliging"
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
    "q": "Wat beantwoordt authenticatie?",
    "o": [
     "Wie ben je?",
     "Wat mag je?",
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
    "q": "Sara is succesvol aangemeld. Heeft ze nu toegang tot elke map?",
    "o": [
     "Nee: autorisatie bepaalt per resource wat ze mag",
     "Ja, aanmelden geeft volledige toegang",
     "Ja, binnen haar OU",
     "Alleen tot mappen op DC01"
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
    "q": "Welk protocol bewijst in een domein cryptografisch de identiteit?",
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
     "Het vertelt welke server een dienst (bv. LDAP) voor het domein aanbiedt",
     "Het koppelt een hostnaam aan een IP-adres",
     "Het koppelt een IP-adres aan een naam",
     "Het bewaart de gebruikers"
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
     "Het gebruikte transportprotocol",
     "De naam van de server",
     "Het domein",
     "Een foutcode"
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
    "q": "Waarom gebruikt CLIENT01 192.168.50.10 als DNS-server?",
    "o": [
     "DC01 host de interne zone en de locatorrecords",
     "Omdat dat de gateway is",
     "Omdat elke client zichzelf moet gebruiken",
     "Om internet te kunnen gebruiken"
    ],
    "a": 0,
    "w": [
     null,
     "Er is geen gateway in dit labo.",
     "CLIENT01 is geen DNS-server.",
     "Internet is voor AD niet nodig."
    ],
    "e": "Een publieke DNS-server kent ad.brightlearning.test niet."
   },
   {
    "q": "Een client opent websites, maar vindt het domein niet. Wat is waarschijnlijk?",
    "o": [
     "Hij gebruikt een externe DNS-server",
     "DC01 staat uit",
     "De client heeft geen IP-adres",
     "Het domein bestaat niet"
    ],
    "a": 0,
    "w": [
     null,
     "Dat kan je hier niet zomaar besluiten; DNS-instelling eerst.",
     "Websites openen lukt, dus hij heeft een adres.",
     "Het domein bestaat wel; de client vraagt de verkeerde server."
    ],
    "e": "Internettoegang bewijst geen correcte AD-DNS."
   },
   {
    "q": "Wat is het verschil tussen centralisatie en automatisering?",
    "o": [
     "Centraal = één beheeromgeving; automatisering = handelingen zonder manueel werk",
     "Er is geen verschil",
     "Automatisering is altijd centraal",
     "Centralisatie vereist PowerShell"
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
    "q": "Bestaat PC-ADMIN-01\\jelle ook op PC-ADMIN-02?",
    "o": [
     "Nee: een lokale account bestaat op één computer",
     "Ja, lokale accounts worden gesynchroniseerd",
     "Ja, als het wachtwoord gelijk is",
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
    "q": "Welke vier kernfuncties heeft AD DS in deze cursus?",
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
    "q": "In welke OU staat DC01 na de promotie?",
    "o": [
     "Domain Controllers",
     "Computers",
     "Users",
     "BrightLearning › Computers"
    ],
    "a": 0,
    "w": [
     null,
     "Computers is een container voor gewone domeinleden.",
     "Users bevat gebruikers en groepen.",
     "Die OU bestaat nog niet en DC01 hoort er niet."
    ],
    "e": "Laat DC's in Domain Controllers."
   },
   {
    "q": "Is ‘Users’ een OU?",
    "o": [
     "Nee, een standaardcontainer (CN=Users)",
     "Ja, de eerste OU van elk domein",
     "Ja, maar alleen voor beheerders",
     "Het is een groep"
    ],
    "a": 0,
    "w": [
     null,
     "Domain Controllers is wél een OU.",
     "Het is geen OU.",
     "Het is een container, geen groep."
    ],
    "e": "Op een container kan je geen gewone GPO koppelen."
   },
   {
    "q": "Wat bevat de container Builtin?",
    "o": [
     "Ingebouwde groepen voor beheer en rechten",
     "Nieuwe computeraccounts",
     "De DNS-zones",
     "Het schema"
    ],
    "a": 0,
    "w": [
     null,
     "Die komen in Computers.",
     "Die staan in DNS.",
     "Het schema is forestbreed."
    ],
    "e": "Wijzig ingebouwde objecten niet zonder reden."
   },
   {
    "q": "Wat doet View › Advanced Features in ADUC?",
    "o": [
     "Extra tabbladen en containers tonen, zonder iets aan objecten te wijzigen",
     "Geavanceerde rechten toekennen",
     "De console in beheerdersmodus starten",
     "Het domein upgraden"
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
    "q": "Met welke account meld je na de promotie van de eerste DC aan?",
    "o": [
     "AD\\Administrator (wachtwoord van de vroegere lokale Administrator)",
     "DC01\\Administrator",
     "De DSRM-account",
     "Een account die de wizard aanmaakt"
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
     "Aanmelden in Directory Services Restore Mode voor herstel",
     "Aanmelden als domeinbeheerder",
     "De DNS-zone beveiligen",
     "Gebruikers resetten"
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
    "q": "Welke zones maakt een nieuwe forestpromotie met -InstallDns?",
    "o": [
     "ad.brightlearning.test en _msdcs.ad.brightlearning.test",
     "Alleen een reverse zone",
     "Geen enkele",
     "Een zone per gebruiker"
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
     "Het type object, bv. user of computer",
     "De OU waarin een object staat",
     "Een groep objecten",
     "Een beveiligingsniveau"
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
     "Nee: AD DS is de klassieke directorydienst voor domeinomgevingen",
     "Ja, alleen een nieuwe naam",
     "Ja, als je een cloudlicentie hebt",
     "Nee: Entra ID is een DNS-dienst"
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
    "q": "Waarom komt de DNS-rol mee met de promotie?",
    "o": [
     "AD DS heeft DNS nodig om DC's en diensten vindbaar te maken",
     "Om internettoegang te geven",
     "Omdat elke server DNS moet draaien",
     "Voor DHCP"
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
    "q": "Welk bereik past bij GG_Administratie?",
    "o": [
     "Global",
     "Domain Local",
     "Universal",
     "Local"
    ],
    "a": 0,
    "w": [
     null,
     "Domain Local is voor resourcetoegang.",
     "Universal is voor meerdere domeinen.",
     "Lokale groepen bestaan op één computer."
    ],
    "e": "Een afdeling uit het eigen domein."
   },
   {
    "q": "Welk bereik past bij DL_Lesmateriaal_Read?",
    "o": [
     "Domain Local",
     "Global",
     "Universal",
     "Distribution"
    ],
    "a": 0,
    "w": [
     null,
     "Global verzamelt accounts.",
     "Niet nodig in één domein.",
     "Distribution is een type, geen bereik."
    ],
    "e": "Een toegangsniveau op een resource."
   },
   {
    "q": "Wat betekent de P in AGDLP?",
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
    "q": "Waar zie je van welke groepen Sara rechtstreeks lid is?",
    "o": [
     "Tabblad Member Of van Sara",
     "Tabblad Members van Sara",
     "Tabblad General",
     "In DNS"
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
    "q": "Sara is net aan een groep toegevoegd en ziet geen effect. Eerste stap?",
    "o": [
     "Volledig afmelden en opnieuw aanmelden",
     "De groep opnieuw aanmaken",
     "DC01 herstarten",
     "Sara verwijderen en opnieuw aanmaken"
    ],
    "a": 0,
    "w": [
     null,
     "De groep is in orde; het token is oud.",
     "Niet nodig.",
     "Dat geeft een nieuwe SID: geen goed idee."
    ],
    "e": "Nieuw token = nieuwe groepsinformatie."
   },
   {
    "q": "Wat staat er in een access token?",
    "o": [
     "Onder meer de user SID en de SID's van security groups",
     "Het wachtwoord in leesbare tekst",
     "De OU van de gebruiker",
     "De GPO's"
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
     "De groepen in het huidige access token",
     "Alle groepen van het domein",
     "De Member Of-lijst uit ADUC, altijd actueel",
     "De lokale groepen van DC01"
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
     "Het uiteindelijke resultaat van identiteit, groepen en alle toepasselijke regels",
     "De machtiging van de laatst toegevoegde groep",
     "Alle Allow-regels samen, Deny telt niet",
     "De toegang van Domain Admins"
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
    "q": "Waarom voorzichtig met een expliciete Deny?",
    "o": [
     "Ze heeft voorrang en treft via groepen soms meer gebruikers dan bedoeld",
     "Deny werkt niet in Windows",
     "Deny verwijdert de groep",
     "Deny geldt alleen voor beheerders"
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
     "Lid zijn van een uitgeschakelde groep",
     "Lid zijn van een distribution group",
     "In dezelfde OU staan als de groep"
    ],
    "a": 0,
    "w": [
     null,
     "Een groep heeft geen status uitgeschakeld.",
     "Dat is nog steeds direct lidmaatschap.",
     "OU-locatie is geen lidmaatschap."
    ],
    "e": "sara → GG_Opleiding → DL_Lesmateriaal_Modify."
   },
   {
    "q": "Welke opdracht toont alle leden, ook via nesting?",
    "o": [
     "Get-ADGroupMember DL_Lesmateriaal_Modify -Recursive",
     "Get-ADUser -Recursive",
     "whoami /all",
     "Get-ADGroup -Members"
    ],
    "a": 0,
    "w": [
     null,
     "Get-ADUser heeft geen -Recursive.",
     "whoami toont jouw eigen token.",
     "Die parameter bestaat niet zo."
    ],
    "e": "Zonder -Recursive zie je enkel de directe leden."
   },
   {
    "q": "Een gebruiker heeft onverwacht toegang. Welke twee plaatsen controleer je minstens?",
    "o": [
     "Alle directe en indirecte lidmaatschappen én de machtigingen op de resource",
     "Zijn OU en zijn wachtwoord",
     "DNS en DHCP",
     "Zijn profiel en zijn bureaublad"
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
    "q": "Read werkt, Modify niet. Wat is de eerste hypothese?",
    "o": [
     "Er is alleen een leesmachtiging of een beperkende regel",
     "Het wachtwoord is fout",
     "DNS werkt niet",
     "De gebruiker staat in de verkeerde OU"
    ],
    "a": 0,
    "w": [
     null,
     "Dan zou Read ook falen.",
     "Dan zou de map niet bereikbaar zijn.",
     "De OU bepaalt geen bestandsrechten."
    ],
    "e": "Vergelijk effectieve toegang en de machtigingen."
   },
   {
    "q": "Wat doe je bij Disable Account?",
    "o": [
     "Nieuwe aanmeldingen blokkeren; object en groepen blijven",
     "Het object verwijderen",
     "Het wachtwoord wissen",
     "De gebruiker naar Users verplaatsen"
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
     "Reset Password, na controle van de identiteit van de aanvrager",
     "Change Password met het oude wachtwoord",
     "De account verwijderen",
     "Password never expires aanzetten"
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
     "Oude opgeslagen credentials op een ander toestel, service of taak",
     "Of DNS werkt",
     "Of de OU beschermd is",
     "De tijdzone van DC01"
    ],
    "a": 0,
    "w": [
     null,
     "DNS vergrendelt geen accounts.",
     "Bescherming tegen verwijderen heeft daar niets mee te maken.",
     "Tijd geeft andere fouten."
    ],
    "e": "Los niet alleen het symptoom op."
   },
   {
    "q": "Waarom eerst uitschakelen en pas later verwijderen?",
    "o": [
     "Afhankelijkheden, gegevens en eigenaarschap eerst afhandelen; fouten blijven herstelbaar",
     "Verwijderen kan pas na 30 dagen technisch",
     "Uitgeschakelde accounts tellen niet mee voor licenties",
     "Om de SID te bewaren voor een nieuwe medewerker"
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
     "Account is disabled (terwijl ze vandaag start)"
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
     "Full name is de weergavenaam; logon name is de aanmeldnaam",
     "Er is geen verschil",
     "Full name is de UPN",
     "Logon name is het e-mailadres"
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
    "q": "Wat is de UPN van Lina?",
    "o": [
     "lina.desmet@ad.brightlearning.test",
     "AD\\lina.desmet",
     "Lina De Smet",
     "lina.desmet@brightlearning.be"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is de NetBIOS-notatie.",
     "Dat is de volledige naam.",
     "Het suffix is het domein ad.brightlearning.test."
    ],
    "e": "Logon name + @ + UPN-suffix."
   },
   {
    "q": "Waarom laten we spaties weg in youssef.elamrani?",
    "o": [
     "Afgesproken cursusconventie; een organisatie documenteert zulke regels",
     "Windows laat geen spaties toe in namen",
     "Spaties breken DNS",
     "Om de naam korter te maken dan 8 tekens"
    ],
    "a": 0,
    "w": [
     null,
     "Een Full name mag spaties bevatten.",
     "Aanmeldnamen staan niet in DNS.",
     "Er is geen limiet van 8 tekens."
    ],
    "e": "Denk vooraf aan dubbele namen, samengestelde namen, lange namen."
   },
   {
    "q": "Mag een gewone gebruiker rechtstreeks in DL_Lesmateriaal_Read?",
    "o": [
     "Technisch wel, maar het breekt AGDLP",
     "Nee, Windows weigert dat",
     "Ja, dat is de bedoeling",
     "Alleen met Enforced"
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
    "q": "Wat moet je bij een mover controleren naast Department?",
    "o": [
     "Groepslidmaatschappen, effectieve toegang en eventueel de OU",
     "Alleen de weergavenaam",
     "Het wachtwoord",
     "Niets, Department volstaat"
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
    "q": "Wanneer maak je een account vooraf uitgeschakeld?",
    "o": [
     "Wanneer de medewerker pas later start",
     "Voor elke beheerder",
     "Bij een vergeten wachtwoord",
     "Na een functiewijziging"
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
     "Toegangscontrole en acties moeten aan één identiteit gekoppeld zijn",
     "Het kost een extra licentie",
     "Windows laat maar één aanmelding per dag toe",
     "Het profiel wordt te groot"
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
    "q": "Wat geeft lidmaatschap van een distribution group?",
    "o": [
     "Geen beveiligingsrechten",
     "Read op alle mappen",
     "Beheerrechten op de OU",
     "Een mailbox"
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
    "q": "GG_Opleiding is lid van DL_Lesmateriaal_Modify. Wie beheert je bij een nieuwe docent?",
    "o": [
     "Alleen het lidmaatschap van GG_Opleiding",
     "De machtigingen op de map",
     "DL_Lesmateriaal_Modify",
     "De OU Groepen"
    ],
    "a": 0,
    "w": [
     null,
     "De map hoeft niet te veranderen.",
     "Die nest blijft gelijk.",
     "De OU verandert niets aan toegang."
    ],
    "e": "Precies het voordeel van AGDLP."
   },
   {
    "q": "Wat is het voordeel van groepsgebaseerd toegangsbeheer?",
    "o": [
     "Eén vermelding op de resource; lidmaatschap centraal beheerd",
     "Snellere aanmelding",
     "Minder DNS-verkeer",
     "Geen wachtwoorden meer nodig"
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
    "q": "Wat is Universal in dit labo?",
    "o": [
     "Niet nodig: het is voor meerdere domeinen in een forest",
     "Verplicht voor beheergroepen",
     "Het standaardbereik",
     "Een type distribution group"
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
     "Een beheermodel voor structuur, delegatie en beleid",
     "Een security group",
     "Een kopie van het organigram",
     "Een container die automatisch ontstaat"
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
     "Ja",
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
    "q": "Waarom geen OU per team en project?",
    "o": [
     "Veel niveaus zonder beheerdoel en veel verplaatsingen bij reorganisaties",
     "Windows laat maar 3 OU's toe",
     "OU's vertragen DNS",
     "Het kan niet onder een andere OU"
    ],
    "a": 0,
    "w": [
     null,
     "Er is geen limiet van 3.",
     "OU's hebben geen invloed op DNS.",
     "Geneste OU's kunnen wel."
    ],
    "e": "Hou de structuur eenvoudig."
   },
   {
    "q": "Wat doet ‘Protect container from accidental deletion’?",
    "o": [
     "Het bemoeilijkt onbedoeld verwijderen; het is geen back-up",
     "Het maakt een back-up",
     "Het verbergt de OU",
     "Het blokkeert GPO's"
    ],
    "a": 0,
    "w": [
     null,
     "Er wordt geen kopie bewaard.",
     "Het verbergt niets.",
     "Het heeft geen invloed op beleid."
    ],
    "e": "Een bevoegde beheerder kan het bewust uitschakelen."
   },
   {
    "q": "Waar maak je de hoofd-OU BrightLearning?",
    "o": [
     "Rechtstreeks onder de domeinroot",
     "In Users",
     "In Domain Controllers",
     "In Builtin"
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
    "q": "Welke objecten verplaats je naar BrightLearning › Gebruikers?",
    "o": [
     "Sara, Youssef, Lina (de eigen cursusgebruikers)",
     "Ook Administrator, Guest en krbtgt",
     "Alle objecten uit Users, ook groepen",
     "DC01"
    ],
    "a": 0,
    "w": [
     null,
     "Ingebouwde accounts blijven in Users.",
     "Groepen gaan naar OU Groepen; ingebouwde groepen blijven.",
     "DC01 blijft in Domain Controllers."
    ],
    "e": "Alleen eigen objecten."
   },
   {
    "q": "Wat lees je in OU=Gebruikers,OU=BrightLearning,DC=ad,…?",
    "o": [
     "Gebruikers is een sub-OU van BrightLearning",
     "BrightLearning is een sub-OU van Gebruikers",
     "Het zijn twee groepen",
     "Het is een DNS-naam"
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
    "q": "Wat verandert bij het verplaatsen van een object?",
    "o": [
     "De DN; mogelijk ook beleid en delegatie",
     "De SID",
     "De groepslidmaatschappen",
     "Het wachtwoord"
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
    "q": "Wat is delegatie?",
    "o": [
     "Een beperkte beheertaak binnen een afgebakende scope toewijzen",
     "Iemand Domain Admin maken",
     "Een GPO koppelen",
     "Een gebruiker naar een andere OU verplaatsen"
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
    "q": "Waarom delegeer je aan GG_ServiceDesk en niet aan servicedesk.test?",
    "o": [
     "De groep stelt de rol voor; bij een wissel pas je enkel het lidmaatschap aan",
     "Gebruikers kunnen geen rechten krijgen",
     "De wizard laat geen gebruikers toe",
     "Groepen hebben meer rechten"
    ],
    "a": 0,
    "w": [
     null,
     "Het kan technisch wel.",
     "De wizard laat het toe.",
     "Een groep heeft de rechten die je geeft."
    ],
    "e": "Rolgebaseerd beheer."
   },
   {
    "q": "Waar start je de Delegation of Control Wizard voor wachtwoordreset van gewone medewerkers?",
    "o": [
     "Op OU BrightLearning › Gebruikers",
     "Op het domein",
     "Op GG_ServiceDesk",
     "Op Builtin"
    ],
    "a": 0,
    "w": [
     null,
     "Te brede scope.",
     "De groep is de ontvanger, niet de scope.",
     "Daar staan geen gewone gebruikers."
    ],
    "e": "De plaats waar je de wizard start, bepaalt de scope."
   },
   {
    "q": "Waarom test je delegatie niet met een Domain Admin?",
    "o": [
     "Dan slaagt de test door de krachtige rechten en bewijs je niets",
     "Domain Admins kunnen geen wachtwoorden resetten",
     "Het is verboden in Windows",
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
    "q": "Wat is een geslaagde negatieve test?",
    "o": [
     "Een niet-toegestane handeling wordt geweigerd",
     "Een handeling die lukt",
     "Een test die je overslaat",
     "Een foutmelding van DNS"
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
     "In DNS",
     "In de groep GG_ServiceDesk",
     "In de Default Domain Policy"
    ],
    "a": 0,
    "w": [
     null,
     "DNS bevat geen rechten.",
     "De groep is de principal, de regels staan op de OU.",
     "Delegatie is geen GPO."
    ],
    "e": "Bekijk ze via Security › Advanced of dsacls."
   },
   {
    "q": "Waarom zie je het tabblad Security van een OU niet?",
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
    "q": "Waarom verschijnt één wizardtaak als meerdere ACE's?",
    "o": [
     "Een taak vereist meerdere onderliggende directorymachtigingen",
     "De wizard maakt een fout",
     "Er zijn meerdere DC's",
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
    "q": "Een servicedeskmedewerker verlaat de rol. Wat doe je?",
    "o": [
     "Hem uit GG_ServiceDesk verwijderen; de delegatie blijft voor de groep",
     "De delegatie op de OU verwijderen",
     "De OU verwijderen",
     "Zijn account resetten"
    ],
    "a": 0,
    "w": [
     null,
     "Dan verliezen ook de andere leden hun taak.",
     "Veel te ingrijpend.",
     "Dat verandert zijn rechten niet."
    ],
    "e": "Rol beëindigen ≠ delegatie verwijderen."
   },
   {
    "q": "Waar verwijder je een overgeërfde regel bij voorkeur?",
    "o": [
     "Bij de bron: het bovenliggende object waar ze ingesteld werd",
     "Op elk onderliggend object afzonderlijk",
     "In DNS",
     "In de groep"
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
    "q": "Wat doe je met dsacls in deze cursus?",
    "o": [
     "Toegangsregels tekstueel bekijken, niet wijzigen",
     "ACL's in bulk aanpassen",
     "Gebruikers aanmaken",
     "DNS-records bekijken"
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
    "q": "Je maakt later een sub-OU onder OU Gebruikers. Wat controleer je?",
    "o": [
     "Of de bestaande delegatie overerft en of dat gewenst is",
     "Of DNS de OU kent",
     "Of de sub-OU een IP-adres heeft",
     "Niets"
    ],
    "a": 0,
    "w": [
     null,
     "DNS kent geen OU's.",
     "OU's hebben geen IP-adres.",
     "Gedelegeerde rechten kunnen doorwerken."
    ],
    "e": "Maak niet gedachteloos sub-OU's."
   },
   {
    "q": "Waarom staat DC01 niet in OU Computers?",
    "o": [
     "DC's horen in Domain Controllers, waar specifiek DC-beleid geldt",
     "OU Computers is te klein",
     "DC01 is geen computer",
     "Dat kan pas met twee DC's"
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
    "q": "Welke OU gebruik je voor CLIENT01?",
    "o": [
     "BrightLearning › Computers",
     "Computers (de container)",
     "Domain Controllers",
     "BrightLearning › Gebruikers"
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
    "q": "Wat kan de servicedesk na deze delegatie níét?",
    "o": [
     "Een gebruiker verwijderen of groepen beheren",
     "Een wachtwoord resetten in OU Gebruikers",
     "Een wachtwoordwijziging afdwingen",
     "Zich aanmelden"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is net de taak.",
     "Dat hoort bij de taak.",
     "Aanmelden is gewone gebruikersfunctie."
    ],
    "e": "Precies één taak."
   },
   {
    "q": "Wat is least privilege?",
    "o": [
     "Alleen de rechten die nodig zijn voor de taak, binnen de nodige scope",
     "Zo weinig mogelijk gebruikers",
     "Zo weinig mogelijk OU's",
     "Geen beheerders"
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
     "De wizard biedt geen overzicht van eerdere delegaties",
     "Omdat Windows het verplicht",
     "Voor DNS",
     "Om de OU te beschermen"
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
     "OU = beheer en beleid; groep = rechten en machtigingen",
     "Er is geen verschil",
     "Een OU heeft leden, een groep niet",
     "Een groep kan GPO-links krijgen"
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
    "q": "Een reset door de servicedesk wordt geweigerd voor één gebruiker. Wat controleer je eerst?",
    "o": [
     "Of die gebruiker binnen de gedelegeerde OU staat",
     "DNS op CLIENT01",
     "De tijd van DC01",
     "De GPO-links"
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
    "q": "De test met servicedesk.test slaagt altijd, ook voor verboden acties. Wat is waarschijnlijk?",
    "o": [
     "De testaccount heeft al krachtige beheerrechten",
     "De delegatie is te klein",
     "DNS is fout",
     "De OU is beschermd"
    ],
    "a": 0,
    "w": [
     null,
     "Dan zou meer geweigerd worden.",
     "DNS verklaart dat niet.",
     "Bescherming zou net meer weigeren."
    ],
    "e": "Controleer Domain Admins, Account Operators …"
   },
   {
    "q": "Waarom gebruik je in de demo -Credential in plaats van aanmelden op DC01?",
    "o": [
     "Een gewone gebruiker mag standaard niet lokaal aanmelden op een DC",
     "-Credential is sneller",
     "Zo wordt de delegatie actief",
     "Aanmelden op DC01 wist het token"
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
    "q": "Wat bewijst de positieve delegatietest?",
    "o": [
     "Dat de bedoelde handeling met een niet-administratieve account werkt",
     "Dat de servicedesk niets anders kan",
     "Dat DNS werkt",
     "Dat de OU beschermd is"
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
    "q": "Waarom hernoem je de client vóór de join?",
    "o": [
     "Zo krijgt het computerobject meteen een herkenbare naam",
     "Na de join kan het niet meer",
     "De join vereist een naam met cijfers",
     "Om de SID te wijzigen"
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
    "q": "CLIENT01 toont 169.254.x.x. Wat betekent dat?",
    "o": [
     "Geen geldige IP-configuratie",
     "Het domein is gevonden",
     "CLIENT01 is al lid",
     "DNS werkt"
    ],
    "a": 0,
    "w": [
     null,
     "Met APIPA vindt de client niets.",
     "Dat zie je niet in het IP-adres.",
     "Een APIPA-adres zegt niets over DNS behalve dat er geen geldige configuratie is."
    ],
    "e": "Laag 1 eerst."
   },
   {
    "q": "Wat test nltest /dsgetdc?",
    "o": [
     "Of Windows via het DC-locatorproces een DC vindt",
     "De secure channel",
     "Of de tijd klopt",
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
    "q": "A-record werkt, SRV-query niet. Wat is waarschijnlijk?",
    "o": [
     "Onvolledige AD-DNS-registratie of je vraagt de verkeerde DNS-server",
     "De client heeft geen IP",
     "De tijd wijkt af",
     "Het wachtwoord is fout"
    ],
    "a": 0,
    "w": [
     null,
     "Dan zou ook het A-record falen.",
     "Tijd speelt pas bij authenticatie.",
     "Credentials komen later."
    ],
    "e": "Controleer welke server antwoordt."
   },
   {
    "q": "Welke naam vul je in bij de join?",
    "o": [
     "ad.brightlearning.test (FQDN)",
     "AD",
     "DC01",
     "brightlearning"
    ],
    "a": 0,
    "w": [
     null,
     "NetBIOS kan, maar de FQDN sluit aan bij DNS en DC Locator.",
     "DC01 is de server, niet het domein.",
     "Dat is geen domein in het forest."
    ],
    "e": "Gebruik de DNS-domeinnaam."
   },
   {
    "q": "Welke optie kies je in Settings › Access work or school?",
    "o": [
     "Join this device to a local Active Directory domain",
     "Connect (werk- of schoolaccount)",
     "Join this device to Microsoft Entra ID",
     "Add a Microsoft account"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is accountregistratie of Entra ID.",
     "Dat is de cloud, niet DC01.",
     "Dat is een persoonlijk account."
    ],
    "e": "Local Active Directory ≠ Microsoft Entra ID."
   },
   {
    "q": "Welke twee bevoegdheden heb je nodig voor een join?",
    "o": [
     "Lokale beheerrechten op de client en domeinrechten om het computerobject te maken",
     "Alleen Domain Admin",
     "Alleen lokale rechten",
     "Rechten op DNS"
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
    "q": "Wordt de joinaccount lokale administrator van CLIENT01?",
    "o": [
     "Nee",
     "Ja, automatisch",
     "Alleen tot de herstart",
     "Alleen als het Domain Admin is"
    ],
    "a": 0,
    "w": [
     null,
     "Credentials autoriseren de join, niet het lokale beheer.",
     "Er verandert niets na de herstart.",
     "Domain Admins zijn wel lid van de lokale Administrators, maar dat komt door de join-configuratie, niet doordat ze de join deden."
    ],
    "e": "Beheer lokale groepen afzonderlijk."
   },
   {
    "q": "Wat is de sAMAccountName van het computerobject CLIENT01?",
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
    "q": "Waarvoor dient het machine account password?",
    "o": [
     "De computer authenticeert zich via een secure channel bij het domein",
     "Gebruikers melden ermee aan",
     "Het beveiligt DNS",
     "Het is het lokale Administrator-wachtwoord"
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
    "q": "Waar komt een niet-prestaged computerobject terecht?",
    "o": [
     "In de container Computers",
     "In OU Computers",
     "In Users",
     "In Domain Controllers"
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
     "Het computerobject vooraf in de juiste OU aanmaken",
     "De client vooraf hernoemen",
     "De DNS-server vooraf instellen",
     "Een snapshot nemen"
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
    "q": "Waar staat het joinlogboek?",
    "o": [
     "C:\\Windows\\Debug\\Netsetup.log",
     "Event Viewer › Security",
     "C:\\Users\\Public\\join.txt",
     "In ADUC"
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
    "q": "Melding ‘The specified domain either does not exist or could not be contacted’. Eerste controle?",
    "o": [
     "Preferred DNS, SRV-query en nltest",
     "Het wachtwoord",
     "Het computerobject verwijderen",
     "De tijdzone"
    ],
    "a": 0,
    "w": [
     null,
     "Het domein wordt niet eens gevonden.",
     "Verwijder niets zonder onderzoek.",
     "Tijd komt later."
    ],
    "e": "DNS of DC Locator."
   },
   {
    "q": "Melding ‘Access is denied’ bij de join. Wat is mogelijk?",
    "o": [
     "Ontbrekende joinrechten of een bestaand object dat niet hergebruikt mag worden",
     "Het domein bestaat niet",
     "De client heeft geen IP",
     "DNS is fout"
    ],
    "a": 0,
    "w": [
     null,
     "Dan krijg je een andere melding.",
     "Dan vind je het domein niet.",
     "Het domein werd gevonden."
    ],
    "e": "Niet automatisch een fout wachtwoord."
   },
   {
    "q": "Waarom herstart de client na de join?",
    "o": [
     "Om het gewijzigde lidmaatschap volledig actief te maken",
     "Om de SID te wijzigen",
     "Om DNS te herstarten",
     "Om het profiel te wissen"
    ],
    "a": 0,
    "w": [
     null,
     "De SID van de computer verandert niet door de herstart.",
     "DNS draait op DC01.",
     "Profielen blijven."
    ],
    "e": "Daarna kan je domeinaanmelding kiezen."
   },
   {
    "q": "Hoe meld je expliciet lokaal aan?",
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
    "q": "Waarom krijgt Sara een nieuw profiel bij de eerste aanmelding?",
    "o": [
     "Haar domeinaccount heeft een andere SID dan elke lokale account",
     "Profielen worden centraal op DC01 bewaard",
     "Omdat ze haar wachtwoord wijzigde",
     "Omdat CLIENT01 herstart is"
    ],
    "a": 0,
    "w": [
     null,
     "Standaard staat het profiel lokaal op CLIENT01.",
     "Het wachtwoord heeft niets met het profiel te maken.",
     "Een herstart maakt geen nieuw profiel."
    ],
    "e": "Het profiel hangt aan de SID."
   },
   {
    "q": "Waar staat de profielregistratie?",
    "o": [
     "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList",
     "HKCU\\Profiles",
     "In AD bij het gebruikersobject",
     "In NTUSER.DAT van Administrator"
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
    "q": "Windows meldt een tijdelijk profiel. Wat doe je?",
    "o": [
     "Stoppen met normaal werken en de profielstatus laten onderzoeken",
     "Gewoon verder werken en opslaan",
     "ProfileList meteen wijzigen",
     "De account verwijderen"
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
    "q": "Wat toont echo %LOGONSERVER%?",
    "o": [
     "De aanmeldserver van de huidige sessie, bv. \\\\DC01",
     "Het IP van CLIENT01",
     "De DNS-server",
     "De naam van het profiel"
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
    "q": "Test-ComputerSecureChannel geeft False. Wat eerst?",
    "o": [
     "DNS, tijd, computerobject en bevoegdheden controleren, dan eventueel -Repair",
     "Meteen leave and rejoin",
     "Het computerobject verwijderen",
     "De DC herstarten"
    ],
    "a": 0,
    "w": [
     null,
     "Dat verstoort bewijs en instellingen.",
     "Verwijder niets zonder onderzoek.",
     "Dat lost een kapot machinegeheim niet op."
    ],
    "e": "Test eerst, herstel niet blind."
   },
   {
    "q": "Waarom is tijd belangrijk voor een domeinaanmelding?",
    "o": [
     "Kerberos-authenticatie is tijdgevoelig",
     "DNS weigert verkeer met een foute tijd",
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
    "q": "Welke tijdbron gebruikt een normaal domeinlid?",
    "o": [
     "De domeintijdhiërarchie (een DC)",
     "Altijd time.windows.com",
     "De BIOS-klok",
     "De DNS-server"
    ],
    "a": 0,
    "w": [
     null,
     "Dat kan vóór de join.",
     "Niet als bron na de join.",
     "Ook al is DC01 DNS-server, de bron is de domeinhiërarchie."
    ],
    "e": "w32tm /query /source → DC01."
   },
   {
    "q": "Waarom gebruik je geen publieke DNS als alternatieve DNS-server op een client?",
    "o": [
     "Windows kan die gebruiken en dan geen antwoord krijgen voor de interne zone",
     "Het is verboden",
     "Het vertraagt de ping",
     "Het verwijdert SRV-records"
    ],
    "a": 0,
    "w": [
     null,
     "Het is niet verboden, wel onverstandig.",
     "Ping gebruikt geen DNS bij een IP-adres.",
     "Een client wijzigt geen records op de server."
    ],
    "e": "Externe namen via forwarders op de interne DNS."
   },
   {
    "q": "Wat bewijst systeminfo | findstr /B /C:\"Domain\" met ad.brightlearning.test?",
    "o": [
     "Dat de client zichzelf als domeinlid ziet",
     "Dat de secure channel werkt",
     "Dat Sara aangemeld is",
     "Dat de GPO werkt"
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
    "q": "Een snapshot van CLIENT01 terugzetten zonder DC01: risico?",
    "o": [
     "Het machinegeheim kan niet meer overeenkomen met AD (trust failed)",
     "Geen enkel",
     "De DNS-zone verdwijnt",
     "De gebruikers verdwijnen"
    ],
    "a": 0,
    "w": [
     null,
     "Het machinegeheim wordt periodiek vernieuwd.",
     "DNS staat op DC01.",
     "Gebruikers staan op DC01."
    ],
    "e": "Zet domeinlid en DC samen terug."
   },
   {
    "q": "Wat doe je eerst bij een fout?",
    "o": [
     "Exacte melding en tijdstip noteren",
     "DNS wijzigen naar 8.8.8.8",
     "De firewall uitschakelen",
     "Het object verwijderen"
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
    "q": "Wanneer is escaleren correct?",
    "o": [
     "Als je het probleem afgebakend hebt maar de oplossing buiten je bevoegdheid valt",
     "Bij elke fout",
     "Nooit",
     "Na het verwijderen van het object"
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
     "Een koppeling naar een OU",
     "Een groep computers",
     "Een OU met beleid"
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
    "q": "Waaraan kan je een domein-GPO koppelen?",
    "o": [
     "Site, domein of OU",
     "Security group",
     "Container Users",
     "Gebruiker"
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
    "q": "Welke helft volgt de locatie van het computerobject?",
    "o": [
     "Computer Configuration",
     "User Configuration",
     "Beide",
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
     "Bij het opstarten en bij achtergrondvernieuwing",
     "Alleen bij aanmelden",
     "Alleen met gpupdate",
     "Alleen 's nachts"
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
    "q": "Wat betekent LSDOU?",
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
    "q": "Wat doet Enforced?",
    "o": [
     "Onderliggende containers kunnen de instellingen van die link niet gewoon overschrijven",
     "Het GPO wordt op alle computers toegepast",
     "Het blokkeert alle andere GPO's",
     "Het maakt de link inactief"
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
     "Op een GPO",
     "Op een groep"
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
     "Link Enabled geldt voor één link; GPO Status voor alle links van het GPO",
     "Er is geen verschil",
     "GPO Status geldt voor één OU",
     "Link Enabled schakelt de User-helft uit"
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
    "q": "Wat gebeurt als je alleen de link verwijdert?",
    "o": [
     "Het GPO blijft bestaan onder Group Policy Objects",
     "Het GPO wordt verwijderd",
     "Alle links verdwijnen",
     "De OU verdwijnt"
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
    "q": "Waarom werk je niet in Default Domain Policy?",
    "o": [
     "Een eigen GPO is duidelijker te testen, documenteren en terug te draaien",
     "Default Domain Policy kan je niet bewerken",
     "Het geldt niet voor clients",
     "Het wordt na 30 dagen gewist"
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
    "q": "Wat is Not Configured?",
    "o": [
     "Dit GPO legt geen waarde op",
     "De instelling is uitgeschakeld",
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
     "Een beknopte RSoP-samenvatting",
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
     "Voor volledige computer-RSoP-informatie zijn beheerrechten nodig",
     "Anders werkt gpresult niet",
     "Om het beleid te wijzigen",
     "Om DNS te omzeilen"
    ],
    "a": 0,
    "w": [
     null,
     "Gebruikersinfo krijg je ook zonder.",
     "gpresult wijzigt niets.",
     "Niet relevant."
    ],
    "e": "Alleen user-resultaten? Verhoogd opnieuw proberen."
   },
   {
    "q": "Een GPO staat bij Denied. Is dat altijd een fout?",
    "o": [
     "Nee: scope of filtering kan het bewust uitsluiten",
     "Ja, altijd",
     "Ja, tenzij Enforced",
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
    "q": "Group Policy Results tegenover Modeling?",
    "o": [
     "Results = werkelijk verwerkt; Modeling = simulatie",
     "Hetzelfde",
     "Modeling = werkelijkheid",
     "Results werkt alleen op DC's"
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
    "q": "Waar vind je gedetailleerde GPO-verwerking op de client?",
    "o": [
     "Event Viewer › Microsoft › Windows › GroupPolicy › Operational",
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
    "e": "Volg één verwerking met Activity ID."
   },
   {
    "q": "Waarvoor dient Activity ID?",
    "o": [
     "Gebeurtenissen van één verwerkingspoging samenbrengen",
     "Een GPO identificeren",
     "De gebruiker identificeren",
     "De link identificeren"
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
    "q": "Het aanmeldbericht is een instelling in…",
    "o": [
     "Computer Configuration › Security Settings › Local Policies › Security Options",
     "User Configuration › Desktop",
     "Computer Configuration › Preferences › Drive Maps",
     "Default Domain Controllers Policy"
    ],
    "a": 0,
    "w": [
     null,
     "Het bericht verschijnt vóór er een gebruiker is.",
     "Drive maps zijn iets anders.",
     "We maken een eigen GPO voor de clients."
    ],
    "e": "Interactive logon: Message title / text."
   },
   {
    "q": "Waarom koppel je het werkplekbeleid niet op het domein?",
    "o": [
     "Dan zouden ook servers en DC's in scope komen",
     "Het domein kan geen links hebben",
     "Dan werkt gpupdate niet",
     "Dan heb je Enforced nodig"
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
     "Het beleid opnieuw ophalen en alle instellingen opnieuw toepassen",
     "Alle GPO's verwijderen",
     "Beleid op DC01 bewerken",
     "De link activeren"
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
    "q": "Het GPO staat bij Applied, maar het effect ontbreekt. Wat controleer je?",
    "o": [
     "Instellingspad, winnende GPO en of afmelden/herstarten nodig is",
     "Of het GPO bestaat",
     "De DNS-server",
     "Het groepslidmaatschap van DC01"
    ],
    "a": 0,
    "w": [
     null,
     "Het staat bij Applied, dus het bestaat.",
     "De verwerking lukte al.",
     "DC01 doet hier niet ter zake."
    ],
    "e": "Applied ≠ zichtbaar resultaat."
   },
   {
    "q": "Security Filtering voegt een groep toe. Komt een gebruiker buiten de gekoppelde OU nu in scope?",
    "o": [
     "Nee: filtering beperkt binnen de linkscope",
     "Ja",
     "Alleen met Enforced",
     "Alleen voor computers"
    ],
    "a": 0,
    "w": [
     null,
     "Filtering verplaatst geen objecten naar de scope.",
     "Enforced verandert de scope niet.",
     "Dat geldt voor beide helften."
    ],
    "e": "Read + Apply Group Policy binnen de linkscope."
   },
   {
    "q": "Wat doet loopback processing?",
    "o": [
     "Gebruikersbeleid laten afhangen van de OU van de computer",
     "Computerbeleid herhalen",
     "GPO's sneller verwerken",
     "DNS-vragen herhalen"
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
     "Als toepassing afhangt van een technische eigenschap van de client",
     "Om een afdeling te selecteren",
     "Om GPO's sneller te maken",
     "Altijd, als extra veiligheid"
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
    "q": "Welke link heeft binnen dezelfde OU de hoogste voorrang?",
    "o": [
     "De link met de laagste link-orderwaarde (1)",
     "De link met de hoogste waarde",
     "De oudste link",
     "De link met Enforced"
    ],
    "a": 0,
    "w": [
     null,
     "Laagste nummer = hoogste voorrang.",
     "Ouderdom speelt geen rol.",
     "Enforced is een andere uitzondering; de vraag gaat over link order."
    ],
    "e": "Hogere voorrang wordt later verwerkt."
   },
   {
    "q": "CLIENT01 staat in OU Computers, het GPO ook. gpresult toont het niet. Eerste controle?",
    "o": [
     "Is de link ingeschakeld en is de computerhelft niet uitgeschakeld?",
     "De UPN van Sara",
     "De tijdzone van DC01",
     "De naam van het GPO"
    ],
    "a": 0,
    "w": [
     null,
     "Computerbeleid hangt niet af van Sara.",
     "Tijd geeft andere symptomen.",
     "De naam doet er niet toe."
    ],
    "e": "Object → link → filter → verwerking."
   },
   {
    "q": "Waarom bewaar je een gpresult-rapport als HTML?",
    "o": [
     "Leesbaar bewijs met Applied, Denied, Component Status en winnende GPO",
     "Om het beleid te wijzigen",
     "Omdat /r niet werkt",
     "Om het naar DC01 te kopiëren"
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
     "Het resulterende beleid voor een concrete gebruiker en computer",
     "Een lijst van alle GPO's",
     "Een GPO-sjabloon",
     "Een type link"
    ],
    "a": 0,
    "w": [
     null,
     "Alleen wat werkelijk geldt.",
     "Dat is een Starter GPO.",
     "Niet relevant."
    ],
    "e": "Resultant Set of Policy."
   },
   {
    "q": "Een lokaal account op CLIENT01 meldt aan. Krijgt het Sara's gebruikers-GPO?",
    "o": [
     "Nee: het is geen gebruikersobject in OU Gebruikers",
     "Ja, op dezelfde computer",
     "Ja, als de naam gelijk is",
     "Alleen met loopback"
    ],
    "a": 0,
    "w": [
     null,
     "Gebruikersbeleid volgt het gebruikersobject in AD.",
     "De SID telt, niet de naam.",
     "Loopback werkt op domeingebruikers via de computer-OU."
    ],
    "e": "Negatieve controle uit de praktijkopdracht."
   },
   {
    "q": "Wat is een veilige eerste rollback van een GPO-test?",
    "o": [
     "De link uitschakelen of de instelling op Not Configured zetten",
     "Het GPO verwijderen",
     "De OU verwijderen",
     "DC01 terugzetten naar een snapshot"
    ],
    "a": 0,
    "w": [
     null,
     "Je verliest het object en eventuele andere links.",
     "Veel te ingrijpend.",
     "Te ingrijpend voor één instelling."
    ],
    "e": "Controleer daarna de impact met gpresult."
   }
  ]
 }
};
})(window.ADDATA);
