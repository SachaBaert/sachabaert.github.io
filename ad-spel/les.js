/* Gegenereerd uit het lesontwerp (design*.py). Aanpassen kan ook hier. */
/* Hulpmiddelen tijdens de les: voorspellen bij de demo's, status, foutenpracticum, ticket, werkdoel, exit ticket. */
(function (D) {
 var L = {
 "demos": [
  {
   "n": 1,
   "t": "DC01 promoveren tot domain controller",
   "q": "We promoveren DC01 tot eerste domain controller van <b>ad.brightlearning.test</b>. Na de automatische herstart: met welke account meld je aan?",
   "o": [
    "AD\\Administrator, met het wachtwoord van de vroegere lokale Administrator",
    "DC01\\Administrator, zoals voorheen",
    "Een nieuwe beheeraccount die de wizard tijdens de promotie aanmaakt",
    "De DSRM-account, met het Safe Mode-wachtwoord"
   ],
   "a": 0,
   "w": [
    null,
    "Een domain controller heeft geen gewone lokale accountdatabase meer: lokale accounts kan je er niet meer gebruiken.",
    "De wizard maakt geen nieuwe beheeraccount: de lokale Administrator wordt de eerste domeinbeheerder AD\\Administrator.",
    "De DSRM-account is enkel voor herstel in Directory Services Restore Mode, niet voor gewone aanmelding."
   ],
   "e": "Bij de eerste DC van een nieuw forest wordt de lokale Administrator <b>AD\\Administrator</b>, met hetzelfde wachtwoord. Een DC heeft geen gewone lokale accounts meer: Local Users and Groups bestaat er niet. Het DSRM-wachtwoord is enkel voor herstel."
  },
  {
   "n": 2,
   "t": "Het resultaat van de promotie",
   "q": "DC01 is herstart. Welke DNS-zones vind je nu in DNS Manager op DC01?",
   "o": [
    "ad.brightlearning.test en _msdcs.ad.brightlearning.test, maar geen reverse zone voor 192.168.50.0/24",
    "Geen enkele: zones moet je na de promotie zelf aanmaken",
    "Alleen ad.brightlearning.test; de SRV-records staan in het register van DC01",
    "ad.brightlearning.test en een reverse zone 50.168.192.in-addr.arpa"
   ],
   "a": 0,
   "w": [
    null,
    "Met -InstallDns maakt de promotie de AD-geïntegreerde zones zelf aan, inclusief de locatorrecords.",
    "De SRV-records staan in DNS; anders kan een client ze niet opvragen.",
    "Een reverse zone maakt de promotie niet aan. Die maak je zelf, zoals in de DNS-les."
   ],
   "e": "De promotie maakt de zone <b>ad.brightlearning.test</b> en de forestzone <b>_msdcs.ad.brightlearning.test</b> met de SRV-records waarmee clients een DC vinden. Een reverse zone voor 192.168.50.0/24 is er niet: daarom toont nslookup straks ‘Server: UnKnown’."
  },
  {
   "n": 3,
   "t": "Een domeingebruiker aanmaken",
   "q": "De wizard voor Sara Peeters is voltooid. Kan Sara zich nu al aanmelden op CLIENT01?",
   "o": [
    "Nee: CLIENT01 is nog geen lid van het domein",
    "Ja: haar account bestaat nu centraal in AD",
    "Ja, maar alleen met haar tijdelijke wachtwoord",
    "Nee: eerst moet ze lid zijn van GG_Opleiding"
   ],
   "a": 0,
   "w": [
    null,
    "De account bestaat, maar CLIENT01 kent het domein nog niet: het is een werkgroepcomputer.",
    "Het wachtwoord is het probleem niet: CLIENT01 kan nog geen domeinaccounts controleren.",
    "Groepslidmaatschap is autorisatie. Voor aanmelden (authenticatie) volstaat Domain Users; het probleem is dat CLIENT01 geen domeinlid is."
   ],
   "e": "Nee. De identiteit bestaat centraal, maar een domeinaanmelding kan alleen op een computer die lid is van het domein. Dat doen we in blok 2. Een geslaagde wizard bewijst alleen dat het object bestaat: controleer altijd locatie, UPN en accountopties."
  },
  {
   "n": 4,
   "t": "Security groups en AGDLP",
   "q": "Sara is lid van GG_Opleiding, en GG_Opleiding is lid van DL_Lesmateriaal_Modify. Wat toont het tabblad <b>Member Of</b> van Sara?",
   "o": [
    "Domain Users en GG_Opleiding, niet DL_Lesmateriaal_Modify",
    "Domain Users, GG_Opleiding en DL_Lesmateriaal_Modify",
    "Alleen DL_Lesmateriaal_Modify, want daar zit de machtiging",
    "Niets: een gebruiker in een geneste groep heeft geen Member Of"
   ],
   "a": 0,
   "w": [
    null,
    "Member Of toont alleen directe lidmaatschappen. Het indirecte lidmaatschap via nesting zie je er niet.",
    "Sara staat niet rechtstreeks in de domain local group, en er is nog geen machtiging gekoppeld.",
    "Sara is rechtstreeks lid van GG_Opleiding (en Domain Users): die zie je wel."
   ],
   "e": "Member Of toont alleen <b>directe</b> lidmaatschappen: Domain Users en GG_Opleiding. Het indirecte lidmaatschap van DL_Lesmateriaal_Modify zie je met <code>Get-ADGroupMember -Recursive</code> of later in <code>whoami /groups</code>. Een groep verleent pas toegang als er een machtiging aan gekoppeld is."
  },
  {
   "n": 5,
   "t": "OU-structuur maken en objecten verplaatsen",
   "q": "We verplaatsen Sara van de container Users naar OU Gebruikers. Wat verandert er aan haar object?",
   "o": [
    "Haar DN (het pad); haar SID en groepslidmaatschappen blijven gelijk",
    "Ze krijgt een nieuwe SID, want ze staat op een nieuwe plaats",
    "Ze verliest haar groepslidmaatschappen",
    "Niets: verplaatsen verandert in AD nooit iets"
   ],
   "a": 0,
   "w": [
    null,
    "Een verplaatsing maakt geen nieuw object: de SID (de identiteit) blijft dezelfde.",
    "OU-locatie en groepslidmaatschap zijn verschillende relaties.",
    "De DN verandert wel, en daarmee mogelijk ook het beleid en de delegatie die op haar van toepassing zijn."
   ],
   "e": "Alleen de <b>DN</b> verandert: CN=Sara Peeters,<b>OU=Gebruikers,OU=BrightLearning</b>,DC=ad,... De SID en de groepen blijven. Wel kan voortaan ander beleid of andere delegatie gelden: precies waarom we OU's maken."
  },
  {
   "n": 6,
   "t": "Wachtwoordreset delegeren en testen",
   "q": "GG_ServiceDesk mag wachtwoorden resetten in OU Gebruikers. Wat gebeurt er als servicedesk.test het wachtwoord van <b>AD\\Administrator</b> probeert te resetten?",
   "o": [
    "Geweigerd: Administrator staat in Users, buiten de gedelegeerde OU",
    "Het lukt: de servicedesk mag wachtwoorden resetten",
    "Het lukt, maar Administrator moet daarna zijn wachtwoord wijzigen",
    "Geweigerd, omdat servicedesk.test geen Domain Admin is en dus niets mag resetten"
   ],
   "a": 0,
   "w": [
    null,
    "De taak is beperkt tot een scope: OU Gebruikers. Administrator staat in de container Users.",
    "Een reset buiten de scope wordt al geweigerd; ‘force change’ speelt dan niet meer.",
    "Binnen OU Gebruikers lukt de reset wél, zonder Domain Admin. Dat is net het doel van delegatie."
   ],
   "e": "Geweigerd (<i>Access is denied</i>). Delegatie = <b>wie</b> (GG_ServiceDesk) + <b>wat</b> (reset en wijziging afdwingen) + <b>waar</b> (OU Gebruikers). Binnen de scope lukt het zonder Domain Admin; daarbuiten niet. Een negatieve test die eindigt met een weigering is een geslaagde test."
  },
  {
   "n": 7,
   "t": "Ping is niet genoeg",
   "q": "CLIENT01 gebruikt per vergissing <b>192.168.50.99</b> als DNS-server (dat toestel bestaat niet). <code>ping 192.168.50.10</code> lukt. Wat geeft <code>nltest /dsgetdc:ad.brightlearning.test /force</code>?",
   "o": [
    "Een fout: ERROR_NO_SUCH_DOMAIN, het domein wordt niet gevonden",
    "DC01, want de ping bewijst dat DC01 bereikbaar is",
    "DC01, maar pas na een time-out van 30 seconden",
    "Een fout over de tijd: de klokken lopen niet gelijk"
   ],
   "a": 0,
   "w": [
    null,
    "Ping test enkel IP. Om het domein te vinden heeft de client DNS (SRV-records) nodig, en zijn DNS-server antwoordt niet.",
    "Zonder werkende DNS-server vindt de client geen SRV-record, hoe lang je ook wacht.",
    "De tijd speelt pas bij authenticatie (Kerberos). Hier lukt zelfs het vinden van een DC niet."
   ],
   "e": "<code>Getting DC name failed: Status = 1355 0x54b ERROR_NO_SUCH_DOMAIN</code>. De ping bewijst IP-bereikbaarheid, niet dat DNS en de AD-locatorrecords werken. Eerst de DNS-server, dan de rest."
  },
  {
   "n": 8,
   "t": "Go/no-go met DC01 als DNS-server",
   "q": "DNS staat nu correct op 192.168.50.10. Wat toont nslookup bovenaan als <b>Server</b>?",
   "o": [
    "UnKnown, met Address 192.168.50.10",
    "dc01.ad.brightlearning.test",
    "DC01",
    "Niets: nslookup toont de server alleen bij een fout"
   ],
   "a": 0,
   "w": [
    null,
    "nslookup zoekt de naam van zijn DNS-server via een PTR-record op. Er is geen reverse zone voor 192.168.50.0/24.",
    "Om een naam te tonen heeft nslookup een PTR-record nodig, en dat bestaat hier niet.",
    "nslookup toont altijd bovenaan welke server antwoordt."
   ],
   "e": "<b>Server: UnKnown</b> · Address: 192.168.50.10. De juiste server antwoordt (het adres telt), maar er is geen reverse zone, dus geen PTR-record voor de naam. Geen probleem voor de domain join; wel een mooie link met de DNS-les."
  },
  {
   "n": 9,
   "t": "CLIENT01 aan het domein toevoegen",
   "q": "We voegen CLIENT01 toe zonder het computerobject vooraf aan te maken. Waar verschijnt CLIENT01 in ADUC?",
   "o": [
    "In de standaardcontainer Computers",
    "In OU BrightLearning › Computers, want die OU heet zo",
    "In OU Domain Controllers",
    "Nergens: een computer is geen object in AD"
   ],
   "a": 0,
   "w": [
    null,
    "AD kijkt niet naar de naam van een OU. Zonder prestaging of aangepaste doelcontainer komt een nieuw computerobject in CN=Computers.",
    "Daar staan alleen domain controllers; CLIENT01 is een gewoon domeinlid.",
    "Een domeinlid krijgt wel een computerobject: een security principal met eigen SID en machinegeheim."
   ],
   "e": "In de standaardcontainer <b>Computers</b> (CN=Computers). Daar kan je geen GPO koppelen; daarom verplaatsen we CLIENT01 naar OU BrightLearning › Computers. Het object heet CLIENT01, de sAMAccountName CLIENT01$."
  },
  {
   "n": 10,
   "t": "Aanmelden als Sara en bewijzen",
   "q": "Sara meldt voor het eerst aan op CLIENT01 met sara.peeters@ad.brightlearning.test en haar tijdelijke wachtwoord. Wat gebeurt er eerst?",
   "o": [
    "Windows vraagt haar meteen een nieuw wachtwoord te kiezen",
    "Ze is meteen aangemeld met haar tijdelijke wachtwoord",
    "De aanmelding mislukt: een domeingebruiker moet lokaal administrator zijn",
    "Ze krijgt een tijdelijk profiel"
   ],
   "a": 0,
   "w": [
    null,
    "Bij het aanmaken vinkten we ‘User must change password at next logon’ aan (pwdLastSet = 0).",
    "Aanmelden vereist geen lokale administratorrechten; Domain Users mag aanmelden op een werkstation.",
    "Een tijdelijk profiel krijg je enkel wanneer het profiel niet geladen kan worden. Bij een eerste aanmelding maakt Windows een nieuw profiel."
   ],
   "e": "Windows meldt dat het wachtwoord gewijzigd moet worden. Daarna maakt Windows een <b>nieuw profiel</b> voor Sara's domein-SID (C:\\Users\\sara.peeters). Bewijs: <code>whoami</code> → ad\\sara.peeters, <code>whoami /user</code> → domein-SID, <code>Test-ComputerSecureChannel</code> → True."
  },
  {
   "n": 11,
   "t": "Een GPO zonder link",
   "q": "BL - C - Aanmeldbericht bestaat en bevat titel en tekst, maar is nergens gekoppeld. Wat toont <code>gpresult /r /scope computer</code> op CLIENT01 na <code>gpupdate /force</code>?",
   "o": [
    "BL - C - Aanmeldbericht staat er helemaal niet in",
    "BL - C - Aanmeldbericht staat bij Applied Group Policy Objects",
    "BL - C - Aanmeldbericht staat bij de GPO's die ‘filtered out’ zijn",
    "Een foutmelding: gpresult kan niet werken zolang er een niet-gekoppeld GPO bestaat"
   ],
   "a": 0,
   "w": [
    null,
    "Toepassen vereist een link op een site, domein of OU in het pad van het object. Die is er nog niet.",
    "In de lijst van weggefilterde GPO's komen alleen GPO's die wel in scope komen (gekoppeld) maar bv. door filtering afvallen.",
    "Een niet-gekoppeld GPO is volkomen normaal; het heeft gewoon geen doelgroep."
   ],
   "e": "Het GPO staat er <b>helemaal niet</b> in: zonder link komt het niet in scope. Je ziet enkel Default Domain Policy. GPO = instellingen, link = waar, scope = welke objecten."
  },
  {
   "n": 12,
   "t": "Het GPO koppelen en het bericht zien",
   "q": "Het GPO is nu gekoppeld aan OU Computers en <code>gpupdate /force</code> meldt succes. Waar en wanneer zie je het aanmeldbericht?",
   "o": [
    "Bij de volgende aanmelding, vóór je je wachtwoord intypt (afmelden of herstarten)",
    "Meteen in een pop-up op het bureaublad van de huidige sessie",
    "Pas na 90 minuten, bij de volgende achtergrondvernieuwing",
    "Nooit: berichten zijn gebruikersinstellingen en Sara staat niet in OU Computers"
   ],
   "a": 0,
   "w": [
    null,
    "Het is een instelling voor het aanmeldscherm; in een lopende sessie verschijnt niets.",
    "gpupdate /force heeft de instelling al opgehaald; je moet enkel tot het aanmeldscherm gaan.",
    "Het aanmeldbericht is een computerinstelling (Security Options): het volgt CLIENT01, niet Sara."
   ],
   "e": "Bij de volgende aanmelding: titel <b>BrightLearning</b> en de tekst, vóór het wachtwoord. Het is <b>Computer Configuration</b> en volgt dus de plaats van CLIENT01, voor iedereen die aanmeldt."
  },
  {
   "n": 13,
   "t": "Effectief beleid bewijzen",
   "q": "Wat toont <code>gpresult /r /scope computer</code> op <b>DC01</b> over BL - C - Aanmeldbericht?",
   "o": [
    "Niets: het GPO staat niet in de lijst, want DC01 staat in OU Domain Controllers",
    "Het staat bij Applied, want DC01 is ook een computer",
    "Het staat bij ‘filtered out’ met de reden ‘Denied (Security)’",
    "Het staat bij Applied, maar het bericht wordt niet getoond op een server"
   ],
   "a": 0,
   "w": [
    null,
    "Computer Configuration volgt de plaats van het computerobject. De link staat op OU Computers, DC01 staat daar niet.",
    "Weggefilterd door security filtering zou betekenen dat het GPO wel in scope komt. Het komt niet eens in scope.",
    "Het GPO wordt niet toegepast, dus van ‘niet tonen’ is geen sprake."
   ],
   "e": "Het GPO staat er <b>niet</b> in: DC01 ligt buiten het pad van de link. Je ziet Default Domain Controllers Policy en Default Domain Policy. Een correct uitgesloten object is een geslaagde negatieve controle."
  }
 ],
 "status": [
  {
   "n": 1,
   "t": "Ontwerpen",
   "d": "Ik bepaal wat ik bouw en waarom.",
   "c": "#14799B",
   "q": [
    "Welk beheerdoel heeft deze OU?",
    "Waarom gebruik je hier een groep?",
    "Welk bewijs toont straks dat het werkt?"
   ]
  },
  {
   "n": 2,
   "t": "Uitvoeren",
   "d": "Ik configureer objecten, client of GPO.",
   "c": "#919E2C",
   "q": [
    "Waar staat het doelobject?",
    "Is dit computer- of gebruikersbeleid?",
    "Welke DNS-server gebruikt de client?"
   ]
  },
  {
   "n": 3,
   "t": "Probleem",
   "d": "Iets werkt niet. Ik ken het exacte symptoom en heb twee hypothesen.",
   "c": "#EB6008",
   "q": [
    "Wat is het exacte symptoom (melding, commando)?",
    "Welke afhankelijkheid test je eerst?",
    "Welke ene wijziging voer je uit?"
   ]
  },
  {
   "n": 4,
   "t": "Valideren",
   "d": "Ik verzamel positief én negatief bewijs.",
   "c": "#000000",
   "q": [
    "Welk bewijs ondersteunt welke conclusie?",
    "Wat is je negatieve controle?",
    "Met welke identiteit test je?"
   ]
  }
 ],
 "fouten": [
  {
   "nr": 1,
   "s": 1,
   "t": "Account uitgeschakeld",
   "laag": "Account",
   "uit": "Op DC01: <code>Disable-ADAccount sara.peeters</code>",
   "ticket": "Ik kan me niet meer aanmelden op mijn pc. Er staat iets over mijn account.",
   "sym": "Aanmelden als Sara: <i>Your account has been disabled. Please see your system administrator.</i>",
   "opl": "<code>Get-ADUser sara.peeters | Select-Object Enabled</code> → False. <code>Enable-ADAccount sara.peeters</code>. Eindtest: aanmelden als Sara."
  },
  {
   "nr": 2,
   "s": 1,
   "t": "Verkeerde DNS-server op de client",
   "laag": "DNS",
   "uit": "Op CLIENT01 (verhoogd): <code>Set-DnsClientServerAddress -InterfaceAlias Ethernet0 -ServerAddresses 192.168.50.99</code>",
   "ticket": "Nieuwe instellingen van IT komen niet meer door op mijn pc. gpupdate geeft een fout.",
   "sym": "<code>gpupdate /force</code> faalt (geen verbinding met een domain controller). <code>ping 192.168.50.10</code> lukt, <code>nltest /dsgetdc:ad.brightlearning.test /force</code> geeft 1355 ERROR_NO_SUCH_DOMAIN.",
   "opl": "<code>ipconfig /all</code> → DNS Servers 192.168.50.99. Terug naar 192.168.50.10, <code>ipconfig /flushdns</code>. Eindtest: nltest en gpupdate /force."
  },
  {
   "nr": 3,
   "s": 1,
   "t": "CLIENT01 terug in de container Computers",
   "laag": "OU en link",
   "uit": "Op DC01: <code>Get-ADComputer CLIENT01 | Move-ADObject -TargetPath \"CN=Computers,DC=ad,DC=brightlearning,DC=test\"</code>",
   "ticket": "Het aanmeldbericht van BrightLearning is verdwenen.",
   "sym": "Na <code>gpupdate /force</code> en afmelden: geen bericht. <code>gpresult /r /scope computer</code>: BL - C - Aanmeldbericht ontbreekt; de DN van de computer eindigt op CN=Computers.",
   "opl": "Object terug naar OU BrightLearning › Computers. Eindtest: gpupdate /force, afmelden, bericht; gpresult toont het GPO bij Applied."
  },
  {
   "nr": 4,
   "s": 2,
   "t": "GPO-link uitgeschakeld",
   "laag": "OU en link",
   "uit": "Op DC01: <code>Set-GPLink -Name \"BL - C - Aanmeldbericht\" -Target \"OU=Computers,OU=BrightLearning,DC=ad,DC=brightlearning,DC=test\" -LinkEnabled No</code>",
   "ticket": "Het aanmeldbericht verschijnt niet meer, maar CLIENT01 staat toch in de juiste OU?",
   "sym": "Computer staat in OU Computers. gpresult: BL - C - Aanmeldbericht bij ‘filtered out’ met <i>Disabled (Link)</i> (of niet vermeld).",
   "opl": "GPMC › OU Computers › Linked Group Policy Objects: Link Enabled = Yes (<code>-LinkEnabled Yes</code>). Eindtest: gpupdate /force, afmelden, gpresult."
  },
  {
   "nr": 5,
   "s": 2,
   "t": "Computerhelft van het GPO uitgeschakeld",
   "laag": "Beleid",
   "uit": "Op DC01: <code>(Get-GPO \"BL - C - Aanmeldbericht\").GpoStatus = \"ComputerSettingsDisabled\"</code>",
   "ticket": "Het aanmeldbericht is weg. De link staat nochtans aan.",
   "sym": "Link enabled, computer in de juiste OU. gpresult: BL - C - Aanmeldbericht bij ‘filtered out’ met <i>Disabled (GPO)</i>.",
   "opl": "GPMC › GPO › Details › GPO Status: Enabled (<code>.GpoStatus = \"AllSettingsEnabled\"</code>). Eindtest: gpupdate /force, gpresult, bericht."
  },
  {
   "nr": 6,
   "s": 2,
   "t": "Servicedesk niet meer in de beheergroep",
   "laag": "Account",
   "uit": "Op DC01: <code>Remove-ADGroupMember GG_ServiceDesk -Members servicedesk.test -Confirm:$false</code>",
   "ticket": "Als servicedeskmedewerker kan ik geen wachtwoorden meer resetten. Gisteren lukte het nog.",
   "sym": "<code>Set-ADAccountPassword lina.desmet -Reset … -Credential $sd</code> → <i>Access is denied</i>. De delegatie op OU Gebruikers bestaat nog (dsacls).",
   "opl": "<code>Get-ADPrincipalGroupMembership servicedesk.test</code> → geen GG_ServiceDesk. Terug toevoegen; nieuwe credentials/sessie (nieuw token). Eindtest: reset lukt, verwijderen nog steeds geweigerd."
  },
  {
   "nr": 7,
   "s": 3,
   "t": "Klok van de client loopt 30 minuten achter",
   "laag": "Tijd",
   "uit": "Op CLIENT01 (verhoogd): <code>Stop-Service w32time; Set-Service w32time -StartupType Disabled; Set-Date (Get-Date).AddMinutes(-30)</code>",
   "ticket": "Mijn pc doet raar: nieuwe instellingen komen niet door en soms krijg ik een fout bij het aanmelden.",
   "sym": "DNS en nltest zijn in orde, maar <code>gpupdate /force</code> faalt; Kerberos-fouten (klokafwijking) in Event Viewer › System. De tijd op CLIENT01 wijkt 30 min af van DC01. (Verwachte meldingen nog te verifiëren in het labo.)",
   "opl": "<code>w32tm /stripchart /computer:dc01.ad.brightlearning.test /samples:1 /dataonly</code> toont de afwijking. <code>Set-Service w32time -StartupType Automatic; Start-Service w32time; w32tm /resync /force</code>. Eindtest: tijd gelijk, gpupdate lukt."
  },
  {
   "nr": 8,
   "s": 3,
   "t": "Secure channel verbroken",
   "laag": "Computerobject",
   "uit": "Op DC01: ADUC › OU Computers › rechtsklik CLIENT01 › <b>Reset Account</b>. Daarna CLIENT01 herstarten.",
   "ticket": "Mijn pc zegt iets over een vertrouwensrelatie en ik kan niet aanmelden.",
   "sym": "Aanmelden als domeingebruiker: <i>The trust relationship between this workstation and the primary domain failed.</i>",
   "opl": "Lokaal aanmelden als <code>.\\lokalebeheerder</code>. <code>Test-ComputerSecureChannel</code> → False. Na diagnose: <code>Test-ComputerSecureChannel -Repair -Credential AD\\Administrator</code> → True, herstarten. Eindtest: aanmelden als Sara."
  }
 ],
 "ladder": "Netwerk → DNS → Tijd → Account → Computerobject → OU en link → Beleid",
 "ticketVelden": [
  {
   "k": "nr",
   "l": "Kaartnummer · melding",
   "h": "Neem de melding van de gebruiker letterlijk over.",
   "r": 2
  },
  {
   "k": "sym",
   "l": "1 · Exact symptoom",
   "h": "Welke melding, welk commando, welke uitvoer?",
   "r": 3
  },
  {
   "k": "omv",
   "l": "2 · Omvang",
   "h": "Eén gebruiker of iedereen? Aanmelden, toegang of beleid? Wat werkte er nog?",
   "r": 2
  },
  {
   "k": "bew",
   "l": "3 · Bewijs per laag",
   "h": "Netwerk → DNS → Tijd → Account → Computerobject → OU en link → Beleid: welke controle, welk resultaat?",
   "r": 5
  },
  {
   "k": "hyp",
   "l": "4 · Twee hypothesen",
   "h": "Welke twee oorzaken zijn mogelijk, en welk bewijs ondersteunt welke?",
   "r": 3
  },
  {
   "k": "wijz",
   "l": "5 · Eén wijziging",
   "h": "Welke ene wijziging voer je uit?",
   "r": 2
  },
  {
   "k": "test",
   "l": "6 · Eindtest",
   "h": "Verwachting, waarneming, conclusie. Ook een negatieve controle?",
   "r": 3
  }
 ],
 "werkdoel": [
  {
   "k": "start",
   "l": "Mijn startpunt",
   "chips": [
    "DC01 promoveren",
    "Gebruikers en groepen",
    "OU's en delegatie",
    "Domain join",
    "Group Policy"
   ]
  },
  {
   "k": "doel",
   "l": "1 · Eén concreet technisch doel",
   "h": "Bv. ‘servicedesk.test kan wachtwoorden resetten in OU Gebruikers’.",
   "r": 2
  },
  {
   "k": "bewijs",
   "l": "2 · Welk bewijs toont dat het werkt?",
   "h": "Commando of venster + verwachte uitvoer.",
   "r": 3
  },
  {
   "k": "neg",
   "l": "3 · Welke negatieve controle?",
   "h": "Wat mag níét lukken of wie mag het níét krijgen?",
   "r": 2
  },
  {
   "k": "afh",
   "l": "4 · Van welke afhankelijkheid hangt dit af?",
   "h": "DNS, objectlocatie, groepslidmaatschap, link …",
   "r": 2
  }
 ],
 "exitTicket": {
  "mc": [
   {
    "q": "Een GPO verschijnt niet in <code>gpresult</code> van CLIENT01. Wat controleer je <b>eerst</b>?",
    "o": [
     "Waar het computerobject CLIENT01 in AD staat (DN/OU)",
     "De DNS-server van DC01",
     "Of Sara lid is van GG_Opleiding",
     "De link op Enforced zetten"
    ],
    "a": 0,
    "e": "Volg object → OU-pad → link → filtering → verwerking → resultaat. Zonder object in het pad van de link is er geen scope.",
    "w": [
     null,
     "DNS is een goede controle bij een domain join; hier kent de client het domein al.",
     "Het computerdeel van een GPO hangt niet af van Sara's groepen.",
     "Enforced lost niets op als het object buiten de scope staat, en maakt beleid moeilijker te voorspellen."
    ]
   },
   {
    "q": "<code>ping 192.168.50.10</code> lukt, maar de domain join meldt dat het domein niet gevonden wordt. Wat is je eerste hypothese?",
    "o": [
     "De client gebruikt een DNS-server die de AD-zone en SRV-records niet kent",
     "De Windows-editie ondersteunt geen domain join",
     "DC01 staat in de verkeerde OU",
     "Het wachtwoord van AD\\Administrator is fout"
    ],
    "a": 0,
    "e": "IP werkt, dus de volgende laag: Preferred DNS, SRV-query en nltest /dsgetdc.",
    "w": [
     null,
     "Dan ontbreekt de optie ‘local Active Directory domain’ meestal al; de melding ‘niet gevonden’ wijst naar DNS.",
     "De OU van DC01 heeft niets met het vinden van het domein te maken.",
     "Een fout wachtwoord geeft een andere melding, en pas nadat het domein gevonden is."
    ]
   }
  ],
  "open": "Welke ene controle voer je voortaan als eerste uit bij een AD-probleem, en waarom precies die?"
 }
};
 Object.keys(L).forEach(function (k) { D[k] = L[k]; });
})(window.ADDATA);
