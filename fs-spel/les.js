/* Gegenereerd uit het lesontwerp (design_*.py). Aanpassen kan ook hier. */
/* Hulpmiddelen tijdens de les: voorspellen, status, foutenpracticum, ticket, werkdoel, exit ticket. */
(function (D) {
 var L = {
 "demos": [
  {
   "n": 1,
   "demo": 1,
   "t": "Wat bewijst een geslaagde poorttest?",
   "q": "Op W11-01 geeft <code>Test-NetConnection DC01 -Port 445</code> <b>TcpTestSucceeded : True</b>. Wat is daarmee bewezen?",
   "o": [
    "DC01 aanvaardt TCP-verbindingen op de SMB-poort",
    "De gebruiker mag de share NETLOGON openen",
    "Het SMB-dialect is 3.1.1",
    "De gebruiker is via Kerberos geauthenticeerd"
   ],
   "a": 0,
   "w": [
    null,
    "Een open poort zegt niets over autorisatie: share- en NTFS-machtigingen komen pas later in de keten.",
    "Het dialect wordt pas onderhandeld nadat de TCP-verbinding bestaat. Get-SmbConnection toont het.",
    "Authenticatie volgt na de TCP-verbinding en de dialectonderhandeling."
   ],
   "e": "Elke test bewijst één laag. TcpTestSucceeded True bewijst alleen stap 2: de TCP-verbinding met poort 445. Of de share bestaat en of je ze mag gebruiken, bewijst deze test niet."
  },
  {
   "n": 2,
   "demo": 1,
   "t": "Welke SMB-sessie zie je?",
   "q": "Als HOGENT\\Administrator open je <code>\\\\DC01\\NETLOGON</code> en voer je <code>Get-SmbConnection</code> uit. Welk dialect verwacht je tussen Windows 11 en Windows Server 2025?",
   "o": [
    "3.1.1",
    "1.0",
    "2.0.2",
    "Geen: NETLOGON gebruikt geen SMB"
   ],
   "a": 0,
   "w": [
    null,
    "SMB 1 is verouderd en staat op beide systemen standaard uit.",
    "Client en server kiezen de hoogste versie die beide ondersteunen; dat is hoger dan 2.0.2.",
    "NETLOGON is een gewone SMB-share op elke domain controller."
   ],
   "e": "Client en server onderhandelen de hoogste gemeenschappelijke versie: <b>3.1.1</b>. De uitvoer toont ook <b>UserName</b>: de identiteit van de sessie, en <b>Signed True</b>: Windows 11 24H2 en Server 2025 vereisen standaard SMB signing."
  },
  {
   "n": 3,
   "demo": 2,
   "t": "De map bestaat, de share nog niet",
   "q": "Op FS01 bestaat <code>D:\\Shares\\Finance</code>. Er is nog geen share. Wat gebeurt er als je op W11-01 <code>\\\\FS01\\Finance</code> opent?",
   "o": [
    "Windows vindt het netwerkpad of de netwerknaam niet",
    "De map opent, maar is leeg",
    "Toegang geweigerd",
    "Windows vraagt een gebruikersnaam en wachtwoord"
   ],
   "a": 0,
   "w": [
    null,
    "Er is niets om te openen: zonder share biedt FS01 de map niet aan via het netwerk.",
    "Toegang geweigerd betekent dat de share bestaat en de autorisatie faalt. Zover komen we niet.",
    "Er is geen share om je voor aan te melden. Een aanmeldvenster zou op een identiteitsprobleem wijzen."
   ],
   "e": "Een lokale map is niet automatisch gedeeld. Je krijgt ‘The network name cannot be found’ (0x80070043) of, zolang de firewallregel voor SMB op FS01 nog dicht is, ‘The network path was not found’ (0x80070035). <code>Get-SmbShare</code> op FS01 toont geen Finance."
  },
  {
   "n": 4,
   "demo": 2,
   "t": "Wie kan Finance nu lezen?",
   "q": "Finance is gedeeld met de wizard van Server Manager, zonder iets aan te passen. Kan <b>student.hr</b> via <code>\\\\FS01\\Finance</code> de bestanden lezen?",
   "o": [
    "Ja: de share laat iedereen toe en NTFS geeft Users leesrechten",
    "Nee: een nieuwe share laat alleen beheerders toe",
    "Nee: student.hr staat niet in de Finance-groep",
    "Alleen als student.hr eerst net use uitvoert"
   ],
   "a": 0,
   "w": [
    null,
    "De wizard zet op de share standaard Everyone Full Control. De beveiliging komt dan volledig van NTFS.",
    "Er is nog geen Finance-groep. En een groep geeft pas iets als ze in een ACL staat.",
    "net use koppelt alleen een stationsletter; het verandert de toegang niet."
   ],
   "e": "Share: <b>Everyone Full Control</b> (standaard van de wizard). NTFS: geërfd van de root van D:, met <b>BUILTIN\\Users:(I)(OI)(CI)(RX)</b>. Domain Users is lid van Users op FS01. Dus ja: HR kan Finance lezen. Dat lossen we in blok 2 op."
  },
  {
   "n": 5,
   "demo": 2,
   "t": "New-SmbShare zonder machtigingen",
   "q": "Je maakt HR met <code>New-SmbShare -Name HR -Path D:\\Shares\\HR</code>, zonder -ChangeAccess of -FullAccess. Wat toont <code>Get-SmbShareAccess -Name HR</code>?",
   "o": [
    "Everyone · Allow · Read",
    "Everyone · Allow · Full",
    "Geen regels: niemand heeft toegang",
    "Administrators · Allow · Full en verder niets"
   ],
   "a": 0,
   "w": [
    null,
    "Full is de standaard van de wizard in Server Manager, niet van New-SmbShare.",
    "Een share zonder één regel zou onbruikbaar zijn. New-SmbShare zet een leesregel.",
    "Beheerders krijgen geen aparte regel; ze vallen onder Everyone."
   ],
   "e": "Zonder parameters geeft New-SmbShare <b>Everyone Read</b>. Twee hulpmiddelen, twee standaarden: daarom controleer je altijd met Get-SmbShareAccess wat er werkelijk staat."
  },
  {
   "n": 6,
   "demo": 3,
   "t": "Share Read + NTFS Modify",
   "q": "student.finance heeft <b>NTFS Modify</b> op D:\\Shares\\Finance, maar de share Finance geeft alleen <b>Read</b>. Via <code>\\\\FS01\\Finance</code> maakt hij een nieuw bestand. Wat gebeurt er?",
   "o": [
    "Toegang geweigerd: via SMB blijft alleen Read over",
    "Het lukt: NTFS Modify wint van de share",
    "Het lukt, maar opslaan van wijzigingen niet",
    "Windows vraagt om beheerdersrechten"
   ],
   "a": 0,
   "w": [
    null,
    "Er is geen laag die ‘wint’. Via SMB moeten beide lagen de handeling toestaan.",
    "Maken is ook schrijven: met share Read lukt maken en wijzigen allebei niet.",
    "UAC speelt niet bij toegang tot een share; het is gewoon een weigering."
   ],
   "e": "Effectieve netwerktoegang = share ∩ NTFS = Read ∩ Modify = <b>Read</b>. <code>New-Item</code> geeft ‘Access to the path ... is denied’. Effective Access op FS01 toont bij de schrijfrechten <b>Limited by: Share</b>."
  },
  {
   "n": 7,
   "demo": 4,
   "t": "Nieuwe groep, oude sessie",
   "q": "student.finance is aangemeld op W11-01. Op DC01 wordt GG_Finance_Medewerkers lid van DL_FS_Finance_RW. Wat toont <code>whoami /groups</code> in zijn bestaande sessie?",
   "o": [
    "DL_FS_Finance_RW ontbreekt nog",
    "DL_FS_Finance_RW staat er meteen bij",
    "Een foutmelding: de token is ongeldig",
    "Alleen de groepen waar hij rechtstreeks lid van is"
   ],
   "a": 0,
   "w": [
    null,
    "De security token wordt bij het aanmelden gemaakt en daarna niet bijgewerkt.",
    "De token blijft geldig; ze is alleen verouderd.",
    "whoami /groups toont ook geneste groepen, maar alleen die van bij het aanmelden."
   ],
   "e": "De token bevat de groepen van het moment van aanmelden. Na <b>afmelden en opnieuw aanmelden</b> (of een nieuwe runas-sessie) verschijnt DL_FS_Finance_RW. Bewijs in AD: <code>Get-ADGroupMember DL_FS_Finance_RW -Recursive</code>."
  },
  {
   "n": 8,
   "demo": 5,
   "t": "Overerving uitschakelen: converteren",
   "q": "Op Finance\\Directie schakel je de overerving uit en kies je <b>Convert inherited permissions into explicit permissions</b>. Je voegt DL_FS_Finance_Directie_RW toe. Kan student.finance de map nog openen?",
   "o": [
    "Ja: de Finance-regel is nu expliciet en staat er nog",
    "Nee: overerving uitschakelen verwijdert alle oude regels",
    "Nee: de nieuwe directiegroep vervangt de oude regels",
    "Alleen lokaal op FS01"
   ],
   "a": 0,
   "w": [
    null,
    "Dat is de andere keuze: ‘Remove all inherited permissions’. Converteren behoudt ze als expliciete regels.",
    "Een extra Allow vervangt niets: Allow-regels tellen op.",
    "De NTFS-ACL geldt lokaal én via SMB; via de share heeft hij Change."
   ],
   "e": "Converteren kopieert de geërfde regels als expliciete regels: <b>DL_FS_Finance_RW:(OI)(CI)(M)</b> staat er nog, nu zonder (I). Je moet die regel bewust verwijderen. Pas dan is de uitzondering echt."
  }
 ],
 "status": [
  {
   "n": 1,
   "t": "Plannen",
   "d": "Ik leg vast wie wat moet kunnen en welk bewijs dat toont.",
   "c": "#14799B",
   "q": [
    "Welke rol moet welke handeling kunnen?",
    "Welke groep komt in welke ACL?",
    "Wat moet geweigerd worden?"
   ]
  },
  {
   "n": 2,
   "t": "Configureren",
   "d": "Ik bouw groepen, share en NTFS.",
   "c": "#919E2C",
   "q": [
    "Staan er alleen DL-groepen in de ACL's?",
    "Klopt de sharemachtiging met NTFS?",
    "Is de nesting gecontroleerd met -Recursive?"
   ]
  },
  {
   "n": 3,
   "t": "Probleem",
   "d": "Iets werkt niet. Ik ken het exacte symptoom en heb twee hypothesen.",
   "c": "#EB6008",
   "q": [
    "Wat is de exacte melding?",
    "Op welke laag van de ladder zit je?",
    "Welke ene wijziging test je?"
   ]
  },
  {
   "n": 4,
   "t": "Valideren",
   "d": "Ik verzamel positief én negatief testbewijs.",
   "c": "#000000",
   "q": [
    "Met welke identiteit test je (whoami)?",
    "Via welk pad (UNC)?",
    "Wat werd terecht geweigerd?"
   ]
  }
 ],
 "fouten": [
  {
   "nr": 1,
   "s": 1,
   "t": "Share op Read",
   "laag": "Sharemachtiging",
   "uit": "Op FS01: <code>Revoke-SmbShareAccess -Name Finance -AccountName AD\\DL_FS_Finance_RW -Force</code> en daarna <code>Grant-SmbShareAccess -Name Finance -AccountName AD\\DL_FS_Finance_RW -AccessRight Read -Force</code>",
   "ticket": "Ik kan de Finance-documenten openen, maar ik kan niets opslaan of nieuw maken.",
   "sym": "student.finance: Get-ChildItem lukt, New-Item geeft ‘Access ... is denied’.",
   "opl": "<code>Get-SmbShareAccess -Name Finance</code> → DL_FS_Finance_RW Read. Revoke en Grant met Change. Eindtest: maken, wijzigen, verwijderen als student.finance; directeur01 kan nog steeds alleen lezen."
  },
  {
   "nr": 2,
   "s": 1,
   "t": "Share bestaat niet meer",
   "laag": "Share",
   "uit": "Op FS01: <code>Remove-SmbShare -Name HR -Force</code> (de map blijft bestaan)",
   "ticket": "Mijn HR-map is weg! Gisteren werkte het nog.",
   "sym": "student.hr: ‘The network name cannot be found’. Op FS01 bestaat D:\\Shares\\HR nog.",
   "opl": "<code>Test-NetConnection FS01 -Port 445</code> OK, <code>Get-SmbShare</code> zonder HR. Share opnieuw maken met de juiste sharemachtigingen (Change DL_FS_HR_RW, Read DL_FS_HR_RO, Full DL_FS_Beheerders_FC). Eindtest via UNC."
  },
  {
   "nr": 3,
   "s": 1,
   "t": "Verkeerde DNS-server",
   "laag": "DNS",
   "uit": "Op CLIENT01: <code>Set-DnsClientServerAddress -InterfaceAlias Ethernet0 -ServerAddresses 192.168.50.99</code> (pas de adapternaam aan) en <code>Clear-DnsClientCache</code>",
   "ticket": "Ik kan geen enkele share meer openen, ook de Finance-schijf niet.",
   "sym": "\\\\FS01\\Finance: ‘The network path was not found’. Resolve-DnsName FS01 faalt.",
   "opl": "<code>Resolve-DnsName FS01</code> faalt → <code>Get-DnsClientServerAddress</code> toont 192.168.50.99. Terug naar 192.168.50.10. Eindtest: Resolve-DnsName, poort 445, UNC."
  },
  {
   "nr": 4,
   "s": 2,
   "t": "Nesting ontbreekt",
   "laag": "Groepen en token",
   "uit": "Op DC01: <code>Remove-ADGroupMember DL_FS_Finance_RW -Members GG_Finance_Medewerkers -Confirm:$false</code>",
   "ticket": "Ik zit toch in de Finance-groep? Toch krijg ik toegang geweigerd op Finance.",
   "sym": "student.finance (nieuwe aanmelding): Access denied op \\\\FS01\\Finance. Hij staat wel in GG_Finance_Medewerkers.",
   "opl": "<code>whoami /groups</code> zonder DL_FS_Finance_RW. <code>Get-ADGroupMember DL_FS_Finance_RW</code> leeg. Nesting herstellen, opnieuw aanmelden, testen. Niet student.finance rechtstreeks toevoegen."
  },
  {
   "nr": 5,
   "s": 2,
   "t": "Write in plaats van Modify",
   "laag": "NTFS",
   "uit": "Op FS01: <code>icacls D:\\Shares\\Finance /remove AD\\DL_FS_Finance_RW</code> en <code>icacls D:\\Shares\\Finance /grant 'AD\\DL_FS_Finance_RW:(OI)(CI)(RX,W)'</code>",
   "ticket": "Ik kan nieuwe documenten maken, maar oude versies verwijderen lukt niet.",
   "sym": "student.finance: New-Item lukt, Remove-Item geeft Access denied.",
   "opl": "<code>icacls</code> toont (RX,W) in plaats van (M). Write omvat geen Delete. Terug naar Modify. Eindtest: maken, wijzigen, hernoemen, verwijderen."
  },
  {
   "nr": 6,
   "s": 2,
   "t": "Verkeerde identiteit in de sessie",
   "laag": "SMB-sessie",
   "uit": "Op CLIENT01, in een <b>nieuwe</b> runas-sessie van student.hr die FS01 nog niet opende (anders fout 1219): <code>net use \\\\FS01\\Finance /user:AD\\directeur01 Labo2026!</code>",
   "ticket": "Raar: ik kan ineens in Finance lezen, terwijl ik daar als HR-medewerker niet mag komen.",
   "sym": "student.hr leest Finance. whoami = hogent\\student.hr, maar Get-SmbConnection toont UserName AD\\directeur01.",
   "opl": "<code>Get-SmbConnection</code> en <code>net use</code> tonen de andere identiteit. <code>net use \\\\FS01\\Finance /delete</code> (en eventueel Credential Manager opkuisen). Geen ACL aanpassen. Eindtest: student.hr wordt geweigerd."
  },
  {
   "nr": 7,
   "s": 3,
   "t": "Expliciete Deny via een groep",
   "laag": "NTFS",
   "uit": "Op DC01: <code>New-ADGroup GG_Stagiairs -GroupScope Global -Path 'OU=Groups,DC=ad,DC=brightlearning,DC=test'</code> en <code>Add-ADGroupMember GG_Stagiairs -Members student.finance</code>. Op FS01: <code>icacls D:\\Shares\\Finance\\Budgetten /deny 'AD\\GG_Stagiairs:(OI)(CI)(W)'</code>",
   "ticket": "In Finance kan ik alles, behalve in de map Budgetten: daar mag ik niets meer opslaan.",
   "sym": "student.finance (nieuwe aanmelding): schrijven lukt in Finance, niet in Budgetten.",
   "opl": "<code>icacls D:\\Shares\\Finance\\Budgetten</code> toont een expliciete DENY voor GG_Stagiairs; whoami /groups toont GG_Stagiairs. Deny verwijderen (<code>icacls ... /remove:d AD\\GG_Stagiairs</code>) of het lidmaatschap herzien. Eindtest in Budgetten."
  },
  {
   "nr": 8,
   "s": 3,
   "t": "Overerving verbroken op een submap",
   "laag": "NTFS",
   "uit": "Op FS01: <code>icacls D:\\Shares\\Finance\\Budgetten /inheritance:r</code> en <code>icacls D:\\Shares\\Finance\\Budgetten /grant 'AD\\DL_FS_Beheerders_FC:(OI)(CI)F' 'SYSTEM:(OI)(CI)F'</code>",
   "ticket": "Finance werkt, maar de map Budgetten geeft ‘toegang geweigerd’. Bij de directie ook.",
   "sym": "student.finance en directeur01: Access denied op Budgetten, de rest van Finance werkt.",
   "opl": "<code>(Get-Acl D:\\Shares\\Finance\\Budgetten).AreAccessRulesProtected</code> = True; icacls zonder Finance-groepen. Overerving opnieuw inschakelen (<code>icacls ... /inheritance:e</code>) en de extra expliciete regels nakijken. Eindtest: RW en RO op Budgetten."
  }
 ],
 "ladder": "Identiteit → Pad → DNS → Poort 445 → Share → SMB-sessie → Groepen en token → Sharemachtiging → NTFS → Test",
 "ticketVelden": [
  {
   "k": "nr",
   "l": "Kaartnummer · melding",
   "h": "Neem de melding van de gebruiker letterlijk over.",
   "r": 2
  },
  {
   "k": "sym",
   "l": "1 · Feiten en exact symptoom",
   "h": "Welke gebruiker, welk pad, welke handeling, welke melding?",
   "r": 3
  },
  {
   "k": "verw",
   "l": "2 · Verwacht gedrag",
   "h": "Wat hoort volgens het toegangsplan te werken, en wat niet?",
   "r": 2
  },
  {
   "k": "bew",
   "l": "3 · Bewijs per laag",
   "h": "Identiteit → Pad → DNS → Poort 445 → Share → SMB-sessie → Groepen en token → Sharemachtiging → NTFS → Test: welke controle, welk resultaat?",
   "r": 5
  },
  {
   "k": "hyp",
   "l": "4 · Hypothese",
   "h": "Welke oorzaak verklaart wat je ziet? Welke test bevestigt of verwerpt ze?",
   "r": 3
  },
  {
   "k": "opl",
   "l": "5 · Oplossing",
   "h": "Welke gerichte wijziging, zonder ruimere rechten dan nodig?",
   "r": 2
  },
  {
   "k": "test",
   "l": "6 · Nacontrole",
   "h": "Positieve test (wat moet lukken) én negatieve test (wat moet falen).",
   "r": 3
  }
 ],
 "werkdoel": [
  {
   "k": "start",
   "l": "Mijn startpunt",
   "chips": [
    "Shares maken",
    "Groepen en nesting",
    "Share-ACL",
    "NTFS-ACL",
    "Testen"
   ]
  },
  {
   "k": "matrix",
   "l": "1 · Testmatrix",
   "h": "Per account: wat moet lukken en wat moet falen? Bv. ‘directeur01: Budget-2027 lezen ✔, nieuw bestand ✘’.",
   "r": 5
  },
  {
   "k": "bewijs",
   "l": "2 · Bewijs",
   "h": "Welke commando's tonen je configuratie? (Get-SmbShareAccess, icacls, Get-ADGroupMember -Recursive, whoami /groups)",
   "r": 3
  },
  {
   "k": "neg",
   "l": "3 · Negatieve controle",
   "h": "Welke test toont dat HR níét in Finance kan?",
   "r": 2
  },
  {
   "k": "afw",
   "l": "4 · Afwijkingen",
   "h": "Wat werkte niet meteen, en wat was de oorzaak?",
   "r": 2
  }
 ],
 "exitTicket": {
  "mc": [
   {
    "s": "<b>Situatie</b><br>student.finance kan \\\\FS01\\Finance openen maar niets opslaan.<br>Get-SmbShareAccess toont DL_FS_Finance_RW Change.<br>icacls toont DL_FS_Finance_RW:(OI)(CI)(RX).",
    "q": "Wat is de oorzaak?",
    "o": [
     "NTFS geeft maar Read & execute",
     "De share geeft maar Read",
     "De token is verouderd",
     "SMB signing blokkeert schrijven"
    ],
    "a": 0,
    "w": [
     null,
     "Volgens de situatie geeft de share Change.",
     "Een verouderde token zou de groep doen ontbreken, maar de groep heeft hoe dan ook alleen RX.",
     "Signing beschermt het transport, het weigert geen schrijfacties."
    ],
    "e": "Change ∩ RX = lezen. Zet NTFS op Modify voor DL_FS_Finance_RW."
   },
   {
    "q": "Waarom zet je gebruikers niet rechtstreeks in de ACL?",
    "o": [
     "Elke personeelswijziging wordt dan een ACL-wijziging op veel mappen",
     "Windows laat geen gebruikers in een ACL toe",
     "Gebruikers in een ACL krijgen altijd Full Control",
     "Dat werkt alleen lokaal, niet via de share"
    ],
    "a": 0,
    "w": [
     null,
     "Het kan technisch wel; het is slecht beheer.",
     "Je kiest zelf het recht.",
     "Het werkt ook via de share."
    ],
    "e": "AGDLP: lidmaatschap beheren, niet de ACL."
   },
   {
    "q": "Welke volgorde volg je bij een toegangsprobleem?",
    "o": [
     "Identiteit → Pad → DNS → Poort 445 → Share → SMB-sessie → Groepen en token → Sharemachtiging → NTFS → Test",
     "NTFS → Share → Groepen → DNS → Identiteit",
     "Full Control geven → testen → terugzetten",
     "Herstarten → opnieuw aanmelden → bellen"
    ],
    "a": 0,
    "w": [
     null,
     "Begin bij de identiteit en het pad: anders onderzoek je misschien de verkeerde ACL.",
     "Dat verbergt het symptoom en opent toegang voor wie dat niet mag.",
     "Geen systematische analyse."
    ],
    "e": "Laag per laag, met een hypothese en een gerichte test."
   }
  ],
  "open": "Welke test zou jij morgen als eerste uitvoeren als een collega meldt: ‘ik kan de Finance-map niet openen’? Waarom die?"
 },
 "labo": {
  "intro": "Je bouwt verder op je labo van de AD-les: <b>DC01</b> (192.168.50.10) en <b>CLIENT01</b> (192.168.50.20) in <code>ad.brightlearning.test</code>. Er komt één server bij: <b>FS01</b> (192.168.50.30). Was je AD-labo nog niet af? Geen probleem: het script vult aan wat ontbreekt.",
  "stappen": [
   "<b>Klonen in VMware.</b> Heb je een gesysprept sjabloon van Windows Server 2025 Desktop: <i>Manage › Clone › linked clone</i>, naam <b>FS01</b>. Geen sjabloon: DC01 › snapshot <i>‘Voor installatie AD DS’</i> › <i>Clone › full clone</i>.",
   "<b>FS01 › Settings.</b> Network Adapter: <i>Custom: VMnet11</i>. <i>Add › Hard Disk › 20 GB</i>. Kloon van DC01? Vink bij Network Adapter <i>Connected</i> en <i>Connect at power on</i> uit, anders botst het IP-adres met DC01.",
   "<b>Alleen bij een kloon van DC01:</b> start FS01 en voer uit: <code>C:\\Windows\\System32\\Sysprep\\sysprep.exe /generalize /oobe /shutdown</code>. Zet daarna de netwerkkaart terug op <i>Connected</i>.",
   "<b>Start FS01</b> en doorloop de installatievragen (OOBE). Kies een wachtwoord voor de lokale Administrator.",
   "<b>Script naar de VM.</b> Tik op <i>Script kopiëren</i>, plak in Kladblok op de VM en sla op als <code>C:\\FS_labo_student.ps1</code> (Opslaan als › Alle bestanden). Doe dit op DC01, CLIENT01 en FS01.",
   "<b>Uitvoeren</b> in PowerShell als administrator: <code>powershell -ExecutionPolicy Bypass -File C:\\FS_labo_student.ps1</code>. Eerst op <b>DC01</b> tot KLAAR, dan op <b>CLIENT01</b>, dan op <b>FS01</b>. Herstart de machine? Meld opnieuw aan en voer het script opnieuw uit, tot je in het groen <b>KLAAR</b> ziet.",
   "<b>Alle drie KLAAR?</b> Neem een snapshot <i>‘FS-start’</i> van alle drie de VM's en zet je status in de app op 2."
  ],
  "hulp": [
   "<b>DC01 antwoordt niet op poort 389</b>: staat DC01 aan en zegt het script daar KLAAR? Zitten alle VM's op VMnet11?",
   "<b>Lid worden mislukt</b> bij een kloon van DC01: sysprep vergeten (stap 3).",
   "<b>Plakken in de VM lukt niet</b>: zonder VMware Tools werkt het klembord niet. Gebruik <i>Downloaden</i> en sleep het bestand naar de VM, of vraag je lector.",
   "<b>De eerste domeinaanmelding blijft op ‘Welcome’</b>: normaal in een labo zonder internet. Wacht enkele minuten.",
   "<b>‘Trust relationship failed’ op CLIENT01</b>: het script herstelt dat; voer het uit als lokale beheerder (<code>.\\Administrator</code>)."
  ],
  "script": "<#\n  FS_labo_student.ps1 · Windows System Administration · File Services (HOGENT)\n  Breidt je AD-labo (DC01, CLIENT01, ad.brightlearning.test) uit met FS01.\n\n  Gebruik: voer dit script uit op DC01, op CLIENT01 en op FS01, als administrator.\n           Het kijkt hoe ver de machine staat en vult aan wat ontbreekt.\n           Herstart de machine? Meld opnieuw aan en voer het script opnieuw uit.\n           Herhaal tot je in het groen KLAAR ziet.\n\n  Volgorde: eerst DC01 (tot KLAAR), dan CLIENT01 en FS01.\n  Starten:  PowerShell als administrator →\n            powershell -ExecutionPolicy Bypass -File C:\\FS_labo_student.ps1\n  Wachtwoord van de testaccounts: Labo2026!\n#>\nparam([ValidateSet('DC01', 'FS01', 'CLIENT01')][string]$Rol)\n\nfunction Start-FsLabo {\n    param([string]$Rol)\n    $Domein = 'ad.brightlearning.test'\n    $DomeinDN = 'DC=ad,DC=brightlearning,DC=test'\n    $DcIp = '192.168.50.10'\n\n    function Stap($t) { Write-Host \"`n>> $t\" -ForegroundColor Cyan }\n    function Klaar($t) { Write-Host \"`nKLAAR: $t\" -ForegroundColor Green }\n    function Stop-Fout($t) { Write-Host \"`nSTOP: $t\" -ForegroundColor Red }\n    function Herstart($t) {\n        Write-Host \"`n$t De machine herstart over 10 seconden. Meld daarna opnieuw aan en voer dit script opnieuw uit.\" -ForegroundColor Yellow\n        Start-Sleep 10; Restart-Computer -Force\n    }\n    function Zet-IP($ip, $dns) {\n        $nic = (Get-NetAdapter | Where-Object Status -eq 'Up' | Select-Object -First 1).Name\n        if (-not $nic) { Stop-Fout 'Geen actieve netwerkkaart. Staat de netwerkkaart van de VM op Connected (VMnet11)?'; return $false }\n        $nu = @((Get-NetIPAddress -InterfaceAlias $nic -AddressFamily IPv4 -ErrorAction SilentlyContinue).IPAddress)\n        if ($nu -notcontains $ip) {\n            Stap \"IP-adres $ip/24 instellen op $nic\"\n            Set-NetIPInterface -InterfaceAlias $nic -Dhcp Disabled -ErrorAction SilentlyContinue\n            Get-NetIPAddress -InterfaceAlias $nic -AddressFamily IPv4 -ErrorAction SilentlyContinue | Remove-NetIPAddress -Confirm:$false -ErrorAction SilentlyContinue\n            New-NetIPAddress -InterfaceAlias $nic -IPAddress $ip -PrefixLength 24 | Out-Null\n        }\n        $dnsNu = @((Get-DnsClientServerAddress -InterfaceAlias $nic -AddressFamily IPv4).ServerAddresses)\n        if (($dnsNu -join ',') -ne $dns) { Stap \"DNS-server $dns instellen\"; Set-DnsClientServerAddress -InterfaceAlias $nic -ServerAddresses $dns }\n        return $true\n    }\n    function Test-DC {\n        Stap \"Controle: bereikt deze machine DC01 ($DcIp)?\"\n        if (-not (Test-NetConnection $DcIp -Port 389 -InformationLevel Quiet -WarningAction SilentlyContinue)) {\n            Stop-Fout \"DC01 antwoordt niet op poort 389 (LDAP). Staat DC01 aan, zegt het script daar KLAAR, en zitten beide VM's op VMnet11?\"; return $false }\n        if (-not (Resolve-DnsName $Domein -ErrorAction SilentlyContinue)) {\n            Stop-Fout \"De naam $Domein wordt niet gevonden. Controleer of de DNS-server 192.168.50.10 is.\"; return $false }\n        return $true\n    }\n    function Word-Lid {\n        if (-not (Test-DC)) { return }\n        Stap \"$env:COMPUTERNAME lid maken van $Domein\"\n        $cred = Get-Credential -UserName 'AD\\Administrator' -Message 'Wachtwoord van AD\\Administrator'\n        try { Add-Computer -DomainName $Domein -Credential $cred -ErrorAction Stop }\n        catch {\n            Stop-Fout \"Lid worden mislukt: $($_.Exception.Message)\"\n            Write-Host 'Is deze VM een kloon van DC01 zonder sysprep? Voer dan uit: C:\\Windows\\System32\\Sysprep\\sysprep.exe /generalize /oobe /shutdown' -ForegroundColor Yellow\n            return\n        }\n        Herstart \"$env:COMPUTERNAME is lid van $Domein.\"\n    }\n\n    $isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)\n    if (-not $isAdmin) { Stop-Fout 'Start PowerShell als administrator (rechtsklik › Run as administrator).'; return }\n    if (-not $Rol) {\n        if ($env:COMPUTERNAME -in 'DC01', 'FS01', 'CLIENT01') { $Rol = $env:COMPUTERNAME }\n        else { $Rol = (Read-Host 'Welke machine is dit? Typ DC01, FS01 of CLIENT01').Trim().ToUpper() }\n    }\n    if ($Rol -notin 'DC01', 'FS01', 'CLIENT01') { Stop-Fout \"Onbekende rol '$Rol'.\"; return }\n    $cs = Get-CimInstance Win32_ComputerSystem\n    Write-Host \"FS-labo · rol $Rol · computernaam $env:COMPUTERNAME · domein/werkgroep $($cs.Domain)\" -ForegroundColor White\n\n    switch ($Rol) {\n        'DC01' {\n            if ($cs.DomainRole -lt 4) {\n                # nog geen domain controller: de stappen van de AD-les inhalen\n                if ($env:COMPUTERNAME -ne 'DC01') { Stap 'Computernaam DC01 instellen'; Rename-Computer -NewName DC01 -Force; Herstart 'Naam ingesteld.'; return }\n                if (-not (Zet-IP $DcIp $DcIp)) { return }\n                Stap 'DC01 is nog geen domain controller: AD DS installeren en promoveren (±15 minuten, herstart vanzelf)'\n                Install-WindowsFeature AD-Domain-Services -IncludeManagementTools | Out-Null\n                $dsrm = Read-Host 'Kies een DSRM-wachtwoord (herstelmodus, sterk wachtwoord)' -AsSecureString\n                Install-ADDSForest -DomainName $Domein -DomainNetbiosName AD -InstallDns -SafeModeAdministratorPassword $dsrm -Force\n                return\n            }\n            Import-Module ActiveDirectory\n            $dom = (Get-ADDomain).DNSRoot\n            if ($dom -ne $Domein) { Stop-Fout \"DC01 is domain controller van $dom in plaats van $Domein. Vraag je lector.\"; return }\n            foreach ($ou in 'Medewerkers', 'Groups') {\n                if (-not (Get-ADOrganizationalUnit -Filter \"Name -eq '$ou'\" -SearchBase $DomeinDN -SearchScope OneLevel)) {\n                    Stap \"OU $ou maken\"; New-ADOrganizationalUnit -Name $ou -Path $DomeinDN }\n            }\n            $pw = ConvertTo-SecureString 'Labo2026!' -AsPlainText -Force\n            foreach ($u in 'student.finance', 'student.hr', 'directeur01', 'fsadmin') {\n                if (-not (Get-ADUser -Filter \"SamAccountName -eq '$u'\")) {\n                    Stap \"Testaccount $u maken\"\n                    New-ADUser -Name $u -SamAccountName $u -UserPrincipalName \"$u@$Domein\" -Path \"OU=Medewerkers,$DomeinDN\" `\n                        -AccountPassword $pw -Enabled $true -PasswordNeverExpires $true\n                }\n            }\n            Klaar \"DC01 is domain controller van $Domein, met OU's Medewerkers en Groups en vier testaccounts.\"\n        }\n        'CLIENT01' {\n            if (-not (Zet-IP '192.168.50.20' $DcIp)) { return }\n            if (-not $cs.PartOfDomain) {\n                if ($env:COMPUTERNAME -ne 'CLIENT01') { Stap 'Computernaam CLIENT01 instellen'; Rename-Computer -NewName CLIENT01 -Force; Herstart 'Naam ingesteld.'; return }\n                Word-Lid; return\n            }\n            if ($cs.Domain -ne $Domein) { Stop-Fout \"CLIENT01 is lid van $($cs.Domain) in plaats van $Domein. Vraag je lector.\"; return }\n            if (-not (Test-ComputerSecureChannel -ErrorAction SilentlyContinue)) {\n                Stap 'De vertrouwensrelatie met het domein is verbroken (bv. na het terugzetten van een snapshot): herstellen'\n                $cred = Get-Credential -UserName 'AD\\Administrator' -Message 'Wachtwoord van AD\\Administrator'\n                if (-not (Test-ComputerSecureChannel -Repair -Credential $cred)) { Stop-Fout 'Herstel mislukt. Vraag je lector.'; return }\n            }\n            Klaar \"CLIENT01 is lid van $Domein en de vertrouwensrelatie werkt.\"\n        }\n        'FS01' {\n            if ($cs.PartOfDomain -and $cs.Domain -ne $Domein) { Stop-Fout \"Deze server is lid van $($cs.Domain). Gebruik een nieuwe, gesyspreppte kloon.\"; return }\n            if ($cs.DomainRole -ge 4) { Stop-Fout 'Deze VM is een domain controller. FS01 moet een nieuwe kloon zijn, geen kopie van DC01.'; return }\n            if (-not (Zet-IP '192.168.50.30' $DcIp)) { return }\n            if (-not (Get-Volume -DriveLetter D -ErrorAction SilentlyContinue | Where-Object FileSystem -eq 'NTFS')) {\n                Get-CimInstance Win32_Volume -Filter 'DriveType=5' | Where-Object DriveLetter -eq 'D:' |\n                    ForEach-Object { Stap 'Dvd-station van D: naar Z: verplaatsen'; Set-CimInstance -InputObject $_ -Property @{ DriveLetter = 'Z:' } }\n                $raw = Get-Disk | Where-Object PartitionStyle -eq 'RAW' | Select-Object -First 1\n                if (-not $raw) { Stop-Fout 'Geen lege tweede schijf gevonden. Voeg in VMware een schijf van 20 GB toe (VM › Settings › Add › Hard Disk) en voer het script opnieuw uit.'; return }\n                Stap 'Tweede schijf initialiseren als D: (label Data)'\n                $raw | Initialize-Disk -PartitionStyle GPT -PassThru | New-Partition -DriveLetter D -UseMaximumSize |\n                    Format-Volume -FileSystem NTFS -NewFileSystemLabel Data -Confirm:$false | Out-Null\n            }\n            if (-not (Get-WindowsFeature FS-FileServer).Installed) { Stap 'File Server-rol installeren'; Install-WindowsFeature FS-FileServer -IncludeManagementTools | Out-Null }\n            if (-not $cs.PartOfDomain) {\n                if ($env:COMPUTERNAME -ne 'FS01') { Stap 'Computernaam FS01 instellen'; Rename-Computer -NewName FS01 -Force; Herstart 'Naam ingesteld.'; return }\n                Word-Lid; return\n            }\n            Klaar \"FS01 is lid van $Domein, heeft datavolume D: en de File Server-rol. Neem nu een snapshot 'FS-start' van alle drie de VM's.\"\n        }\n    }\n}\nStart-FsLabo -Rol $Rol\n"
 }
};
 Object.keys(L).forEach(function (k) { D[k] = L[k]; });
})(window.FSDATA);
