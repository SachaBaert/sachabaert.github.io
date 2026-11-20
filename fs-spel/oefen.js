/* Gegenereerd uit het lesontwerp (design_*.py). Aanpassen kan ook hier. */
/* Extra oefenen: per onderwerp een poel van 30 vragen; elke ronde kiest de app er 10 willekeurig uit.
   Juiste antwoord = altijd de eerste optie (a: 0); de app schudt de volgorde. */
(function (D) {
 D.extra = {
 "smb": {
  "t": "SMB en shares",
  "q": [
   {
    "q": "Wat is SMB?",
    "o": [
     "Een netwerkprotocol om bestanden en printers te delen",
     "Een bestandssysteem zoals NTFS",
     "Een groepstype in Active Directory",
     "Een versleutelingsmethode voor schijven"
    ],
    "a": 0,
    "w": [
     null,
     "SMB werkt over het netwerk; NTFS is het bestandssysteem.",
     "Groepstypen zijn security en distribution.",
     "Versleuteling van schijven is BitLocker."
    ],
    "e": "Server Message Block: client vraagt, server biedt de share aan."
   },
   {
    "q": "Welke TCP-poort gebruikt direct gehost SMB?",
    "o": [
     "445",
     "139",
     "3389",
     "53"
    ],
    "a": 0,
    "w": [
     null,
     "139 is NetBIOS over TCP, de oude weg.",
     "3389 is Remote Desktop.",
     "53 is DNS."
    ],
    "e": "Test met Test-NetConnection server -Port 445."
   },
   {
    "q": "Wat is in <code>\\\\FS01\\Finance\\Budgetten</code> de sharenaam?",
    "o": [
     "Finance",
     "FS01",
     "Budgetten",
     "\\\\FS01"
    ],
    "a": 0,
    "w": [
     null,
     "FS01 is de server.",
     "Budgetten is een submap in de share.",
     "Dat is het begin van het pad met de servernaam."
    ],
    "e": "\\\\server\\share\\subpad."
   },
   {
    "q": "Wat doet een share met de bestanden van de lokale map?",
    "o": [
     "Niets: ze biedt dezelfde bestanden via het netwerk aan",
     "Ze maakt een kopie op een netwerklocatie",
     "Ze verplaatst de bestanden naar C:\\Shares",
     "Ze versleutelt de bestanden"
    ],
    "a": 0,
    "w": [
     null,
     "Er is geen kopie.",
     "De bestanden blijven waar ze staan.",
     "Versleuteling is een aparte instelling."
    ],
    "e": "Een share is een toegangspunt, geen tweede kopie."
   },
   {
    "q": "Welke machtigingen gelden als een beheerder op FS01 <code>D:\\Shares\\Finance</code> opent?",
    "o": [
     "Alleen NTFS",
     "Alleen de sharemachtigingen",
     "Share en NTFS",
     "Geen: beheerders worden niet gecontroleerd"
    ],
    "a": 0,
    "w": [
     null,
     "De share wordt lokaal niet gebruikt.",
     "Lokaal passeer je de share niet.",
     "Ook beheerders worden door NTFS gecontroleerd."
    ],
    "e": "Lokaal = NTFS."
   },
   {
    "q": "Welke machtigingen gelden bij <code>\\\\FS01\\Finance</code> vanaf W11-01?",
    "o": [
     "Share en NTFS",
     "Alleen NTFS",
     "Alleen de share",
     "Alleen de groepen van de gebruiker"
    ],
    "a": 0,
    "w": [
     null,
     "Via SMB komt de sharelaag erbij.",
     "NTFS geldt altijd mee.",
     "Groepen bepalen welke regels van toepassing zijn, maar zijn geen machtigingslaag."
    ],
    "e": "Via SMB: share ∩ NTFS."
   },
   {
    "q": "Wat doet <code>net use F: \\\\FS01\\Finance</code>?",
    "o": [
     "Station F: koppelen aan de share",
     "De share Finance aanmaken op F:",
     "De machtigingen van F: kopiëren",
     "F: delen als nieuwe share"
    ],
    "a": 0,
    "w": [
     null,
     "Een share maak je op de server met New-SmbShare.",
     "net use kopieert geen machtigingen.",
     "Het maakt een koppeling op de client."
    ],
    "e": "Een netwerkstation is een koppeling; de beveiliging blijft share + NTFS."
   },
   {
    "q": "Wat betekent het dollarteken in <code>Finance$</code>?",
    "o": [
     "De share verschijnt niet bij het bladeren",
     "De share is versleuteld",
     "Alleen beheerders hebben toegang",
     "De share is alleen-lezen"
    ],
    "a": 0,
    "w": [
     null,
     "Encryptie stel je apart in.",
     "De machtigingen bepalen wie toegang heeft.",
     "Het teken zegt niets over rechten."
    ],
    "e": "Verborgen is niet beveiligd."
   },
   {
    "q": "Wat bewijst <code>Resolve-DnsName FS01</code> als het lukt?",
    "o": [
     "Dat de naam naar een IP-adres omgezet wordt",
     "Dat poort 445 open staat",
     "Dat de share Finance bestaat",
     "Dat de gebruiker toegang heeft"
    ],
    "a": 0,
    "w": [
     null,
     "De poort test je met Test-NetConnection.",
     "Get-SmbShare toont shares.",
     "Toegang test je met de gebruiker zelf."
    ],
    "e": "Elke test bewijst één laag."
   },
   {
    "q": "Welk commando toont op de <b>client</b> de actieve SMB-verbindingen?",
    "o": [
     "Get-SmbConnection",
     "Get-SmbSession",
     "Get-SmbShare",
     "Get-SmbOpenFile"
    ],
    "a": 0,
    "w": [
     null,
     "Get-SmbSession toont op de server de binnenkomende sessies.",
     "Get-SmbShare toont shares op de server.",
     "Get-SmbOpenFile toont op de server geopende bestanden."
    ],
    "e": "Get-SmbConnection: ServerName, ShareName, UserName, Dialect."
   },
   {
    "q": "Welk commando toont op de <b>server</b> welke bestanden via SMB geopend zijn?",
    "o": [
     "Get-SmbOpenFile",
     "Get-SmbConnection",
     "Get-SmbShareAccess",
     "net use"
    ],
    "a": 0,
    "w": [
     null,
     "Get-SmbConnection draait op de client.",
     "Get-SmbShareAccess toont sharemachtigingen.",
     "net use toont stationskoppelingen op de client."
    ],
    "e": "Handig bij ‘bestand in gebruik’."
   },
   {
    "q": "Wat is een SMB-dialect?",
    "o": [
     "Een protocolversie, zoals 3.1.1",
     "Een taalinstelling van Windows",
     "Een type share",
     "Een groep in AD"
    ],
    "a": 0,
    "w": [
     null,
     "Het gaat over SMB-versies.",
     "Shares hebben geen dialect.",
     "Het heeft niets met groepen te maken."
    ],
    "e": "Client en server kiezen de hoogste gemeenschappelijke versie."
   },
   {
    "q": "Waarom schakel je SMB 1 niet in om een verbindingsprobleem op te lossen?",
    "o": [
     "SMB 1 is verouderd en onveilig",
     "SMB 1 werkt alleen op Linux",
     "SMB 1 ondersteunt geen bestanden",
     "SMB 1 vereist een aparte licentie"
    ],
    "a": 0,
    "w": [
     null,
     "SMB 1 is net een oude Windows-versie.",
     "Het deelt wel bestanden.",
     "Er is geen licentie nodig; het is gewoon onveilig."
    ],
    "e": "Zoek de echte oorzaak laag per laag."
   },
   {
    "q": "Wat beschermt SMB encryption?",
    "o": [
     "De vertrouwelijkheid van de gegevens onderweg",
     "De NTFS-machtigingen",
     "De sharenaam",
     "Het wachtwoord in AD"
    ],
    "a": 0,
    "w": [
     null,
     "Machtigingen zijn een andere laag.",
     "De naam wordt niet versleuteld als beveiliging.",
     "AD-wachtwoorden worden anders beschermd."
    ],
    "e": "Encryption: meelezen voorkomen. Signing: wijzigen detecteren."
   },
   {
    "q": "In een AD-domein wordt bij SMB bij voorkeur ... gebruikt voor authenticatie.",
    "o": [
     "Kerberos",
     "NTLM",
     "Basic authentication",
     "Een gedeeld wachtwoord per share"
    ],
    "a": 0,
    "w": [
     null,
     "NTLM is de terugvaloptie.",
     "Basic authentication hoort bij web, niet bij SMB in een domein.",
     "Shares hebben geen eigen wachtwoord."
    ],
    "e": "klist toont een ticket voor cifs/server."
   },
   {
    "q": "Wat is het verschil tussen authenticatie en autorisatie?",
    "o": [
     "Wie ben je tegenover wat mag je",
     "Wat mag je tegenover wie ben je",
     "Lokaal tegenover via het netwerk",
     "Share tegenover NTFS"
    ],
    "a": 0,
    "w": [
     null,
     "Omgekeerd.",
     "Dat zijn toegangswegen.",
     "Dat zijn machtigingslagen."
    ],
    "e": "Eerst de identiteit, dan de rechten."
   },
   {
    "q": "Welke sharemachtigingen zet de wizard ‘SMB Share - Quick’ in Server Manager standaard?",
    "o": [
     "Everyone Full Control",
     "Everyone Read",
     "Administrators Full, verder niets",
     "Geen enkele"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is de standaard van New-SmbShare zonder parameters.",
     "Er komt een regel voor Everyone.",
     "Een share zonder regel zou onbruikbaar zijn."
    ],
    "e": "De wizard laat de beveiliging aan NTFS over."
   },
   {
    "q": "Je maakt <code>New-SmbShare -Name HR -Path D:\\Shares\\HR</code>. Welke sharemachtiging staat er?",
    "o": [
     "Everyone Read",
     "Everyone Full",
     "Authenticated Users Change",
     "Geen enkele"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is de standaard van de wizard.",
     "Die regel wordt niet automatisch gezet.",
     "New-SmbShare zet een leesregel."
    ],
    "e": "Controleer altijd met Get-SmbShareAccess."
   },
   {
    "q": "Wat doet <code>Remove-SmbShare -Name FinanceTest -Force</code>?",
    "o": [
     "Alleen de netwerkpublicatie verwijderen",
     "De map en de bestanden verwijderen",
     "De NTFS-ACL wissen",
     "De share tijdelijk verbergen"
    ],
    "a": 0,
    "w": [
     null,
     "De lokale map blijft bestaan.",
     "NTFS blijft ongewijzigd.",
     "Verbergen doe je met een $ in de naam."
    ],
    "e": "Bestaande verbindingen worden wel verbroken."
   },
   {
    "q": "Welke vraag beantwoordt <code>Get-SmbShare -Name Finance | Select Name, Path</code>?",
    "o": [
     "Naar welke lokale map verwijst de share?",
     "Wie heeft toegang tot de share?",
     "Wie is nu verbonden?",
     "Welk dialect wordt gebruikt?"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is Get-SmbShareAccess.",
     "Dat is Get-SmbSession of Get-SmbConnection.",
     "Dat zie je in Get-SmbConnection."
    ],
    "e": "Anders onderzoek je misschien de verkeerde ACL."
   },
   {
    "q": "Waarom test je een share niet alleen lokaal op de server?",
    "o": [
     "Een lokale test passeert de share en het netwerk niet",
     "Lokaal geldt NTFS niet",
     "Lokaal kan je geen bestanden openen",
     "Lokale tests zijn trager"
    ],
    "a": 0,
    "w": [
     null,
     "Lokaal geldt NTFS juist wel.",
     "Dat kan wel.",
     "Snelheid is niet het probleem."
    ],
    "e": "Test via het UNC-pad vanaf een client."
   },
   {
    "q": "Een server is client én server tegelijk. Wanneer is FS01 SMB-client?",
    "o": [
     "Als FS01 zelf een share op DC01 opent",
     "Als W11-01 \\\\FS01\\Finance opent",
     "Als FS01 een share aanmaakt",
     "Nooit: een server is altijd SMB-server"
    ],
    "a": 0,
    "w": [
     null,
     "Dan is FS01 de server.",
     "Een share aanmaken maakt hem server.",
     "De rol hangt af van wie aanvraagt."
    ],
    "e": "Wie aanvraagt is client; wie aanbiedt is server."
   },
   {
    "q": "Wat toont <code>Get-SmbSession</code> op FS01?",
    "o": [
     "De sessies die FS01 van clients ontvangt",
     "De shares van FS01",
     "De verbindingen van FS01 naar andere servers",
     "De groepen van de gebruiker"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is Get-SmbShare.",
     "Dat is Get-SmbConnection op FS01.",
     "Dat is whoami /groups."
    ],
    "e": "Server: Get-SmbSession, Get-SmbOpenFile. Client: Get-SmbConnection."
   },
   {
    "q": "Een melding zegt dat een bestand ‘in gebruik’ is. Wat is de beste eerste controle?",
    "o": [
     "Get-SmbOpenFile op de server",
     "De NTFS-ACL aanpassen",
     "De share opnieuw aanmaken",
     "SMB 1 inschakelen"
    ],
    "a": 0,
    "w": [
     null,
     "Een vergrendeling is geen ACL-probleem.",
     "Dat verbreekt alle verbindingen en lost de oorzaak niet op.",
     "Nooit een oplossing."
    ],
    "e": "Kijk wie het bestand open heeft."
   },
   {
    "q": "Wat doet ABE (Access-Based Enumeration)?",
    "o": [
     "Items zonder leesrecht niet tonen",
     "Alle bestanden versleutelen",
     "Toegang geven aan wie de map ziet",
     "De share verbergen in het netwerk"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is encryption.",
     "Het omgekeerde: ABE geeft niets.",
     "Een verborgen share maak je met $."
    ],
    "e": "ABE verbergt, NTFS beveiligt."
   },
   {
    "q": "Met welk commando zet je ABE aan op Finance?",
    "o": [
     "Set-SmbShare -Name Finance -FolderEnumerationMode AccessBased",
     "New-SmbShare -Name Finance -ABE",
     "icacls D:\\Shares\\Finance /abe",
     "Grant-SmbShareAccess -Name Finance -AccessRight ABE"
    ],
    "a": 0,
    "w": [
     null,
     "Die parameter bestaat niet en de share bestaat al.",
     "icacls kent geen ABE.",
     "ABE is geen toegangsrecht."
    ],
    "e": "Controle: Get-SmbShare | Select FolderEnumerationMode."
   },
   {
    "q": "Welk resultaat geeft een open poort 445 maar een ontbrekende share meestal?",
    "o": [
     "The network name cannot be found",
     "Access is denied",
     "Enter network credentials",
     "The specified network password is not correct"
    ],
    "a": 0,
    "w": [
     null,
     "Access denied: de share bestaat, de machtiging ontbreekt.",
     "Dat is een identiteitsprobleem.",
     "Dat is een fout wachtwoord."
    ],
    "e": "Controleer Get-SmbShare."
   },
   {
    "q": "Wat bevat een SMB-sessie onder meer?",
    "o": [
     "De identiteit, het dialect en of signing actief is",
     "De NTFS-ACL van alle mappen",
     "De DNS-records van de server",
     "Het wachtwoord van de gebruiker in leesbare vorm"
    ],
    "a": 0,
    "w": [
     null,
     "De ACL staat op het bestandssysteem.",
     "DNS is een andere dienst.",
     "Wachtwoorden worden niet zo opgeslagen."
    ],
    "e": "Get-SmbConnection | Select UserName, Dialect, Signed, Encrypted."
   },
   {
    "q": "Waarom gebruik je bij voorkeur een apart datavolume D: voor shares?",
    "o": [
     "Opslagbeheer, back-up en herstel worden overzichtelijker",
     "Shares werken niet op C:",
     "NTFS-machtigingen bestaan niet op C:",
     "Een share op C: is altijd verborgen"
    ],
    "a": 0,
    "w": [
     null,
     "Dat kan technisch wel.",
     "C: is ook NTFS.",
     "Verborgen hangt af van het $-teken."
    ],
    "e": "Een volle datamap legt ook het systeem niet plat."
   },
   {
    "q": "Welke handeling test je om een share écht te valideren?",
    "o": [
     "De concrete handeling met een representatieve gebruiker via UNC",
     "Alleen of de map opent",
     "Alleen of ping lukt",
     "Of de beheerder alles kan"
    ],
    "a": 0,
    "w": [
     null,
     "Openen bewijst geen schrijven of verwijderen.",
     "Ping test geen SMB.",
     "De beheerder is niet representatief."
    ],
    "e": "Positief én negatief testen."
   }
  ]
 },
 "rechten": {
  "t": "Share, NTFS en effectief",
  "q": [
   {
    "q": "Welke sharemachtiging laat lezen, maken, wijzigen en verwijderen toe, maar geen beheer van de share-ACL?",
    "o": [
     "Change",
     "Read",
     "Full",
     "Modify"
    ],
    "a": 0,
    "w": [
     null,
     "Read laat alleen lezen toe.",
     "Full laat ook de share-ACL beheren.",
     "Modify is een NTFS-recht, geen sharerecht."
    ],
    "e": "Share: Read · Change · Full."
   },
   {
    "q": "Welke NTFS-machtiging past bij dagelijks inhoudsbeheer, inclusief verwijderen?",
    "o": [
     "Modify",
     "Write",
     "Read & execute",
     "Full Control"
    ],
    "a": 0,
    "w": [
     null,
     "Write omvat niet alle verwijderrechten.",
     "Alleen lezen.",
     "Te ruim: ook machtigingen en eigenaar."
    ],
    "e": "Modify is meestal de juiste keuze voor medewerkers."
   },
   {
    "q": "Wat kan Full Control (NTFS) méér dan Modify?",
    "o": [
     "Machtigingen wijzigen en eigenaarschap overnemen",
     "Bestanden verwijderen",
     "Nieuwe mappen maken",
     "Bestanden hernoemen"
    ],
    "a": 0,
    "w": [
     null,
     "Dat kan Modify ook.",
     "Dat kan Modify ook.",
     "Dat kan Modify ook."
    ],
    "e": "Full Control = inhoud + beveiliging."
   },
   {
    "q": "Een gebruiker heeft Read & execute en Write. Wat lukt niet?",
    "o": [
     "Een bestand verwijderen",
     "Een bestand maken",
     "Een bestand lezen",
     "Gegevens schrijven"
    ],
    "a": 0,
    "w": [
     null,
     "Write laat maken toe.",
     "Read & execute laat lezen toe.",
     "Write laat schrijven toe."
    ],
    "e": "Delete hoort bij Modify, niet bij Write."
   },
   {
    "q": "Wat is een ACE?",
    "o": [
     "Eén toegangsregel in een ACL",
     "De volledige lijst met regels",
     "De eigenaar van een object",
     "Een groepstype"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is de DACL.",
     "De eigenaar is apart.",
     "Groepstypen zijn security en distribution."
    ],
    "e": "Een ACE bevat principal, rechten, Allow/Deny, geërfd en toepassingsgebied."
   },
   {
    "q": "Wat staat in een DACL?",
    "o": [
     "De Allow- en Deny-regels voor een object",
     "De auditinstellingen",
     "De SMB-sessies",
     "De groepsleden"
    ],
    "a": 0,
    "w": [
     null,
     "Auditing staat in de SACL.",
     "Sessies zijn SMB, niet NTFS.",
     "Groepsleden staan in AD."
    ],
    "e": "Discretionary Access Control List."
   },
   {
    "q": "Share Read, NTFS Modify. Wat kan de gebruiker via SMB?",
    "o": [
     "Alleen lezen",
     "Alles behalve verwijderen",
     "Lezen en wijzigen",
     "Niets"
    ],
    "a": 0,
    "w": [
     null,
     "Ook maken en wijzigen blokkeert de share.",
     "De share laat geen schrijfactie door.",
     "Beide lagen geven lezen."
    ],
    "e": "Read ∩ Modify = Read."
   },
   {
    "q": "Share Change, NTFS Read & execute. Wat kan de gebruiker via SMB?",
    "o": [
     "Alleen lezen",
     "Lezen en wijzigen",
     "Alles",
     "Niets"
    ],
    "a": 0,
    "w": [
     null,
     "NTFS geeft geen schrijfrechten.",
     "NTFS beperkt tot lezen.",
     "Beide lagen geven lezen."
    ],
    "e": "Change ∩ RX = lezen."
   },
   {
    "q": "Share Full, geen enkele NTFS-regel voor de gebruiker of zijn groepen. Resultaat?",
    "o": [
     "Geen toegang",
     "Volledige toegang",
     "Alleen lezen",
     "Alleen de mapnamen zien"
    ],
    "a": 0,
    "w": [
     null,
     "NTFS geeft niets.",
     "Ook lezen vraagt een NTFS-recht.",
     "Zonder leesrecht ook geen opsomming."
    ],
    "e": "Full ∩ niets = niets."
   },
   {
    "q": "Lokaal op FS01, NTFS Modify, share Read. Wat kan de gebruiker?",
    "o": [
     "Lezen, maken, wijzigen en verwijderen",
     "Alleen lezen",
     "Niets",
     "Alleen maken"
    ],
    "a": 0,
    "w": [
     null,
     "Read is de share, die lokaal niet geldt.",
     "NTFS geeft Modify.",
     "Modify omvat meer."
    ],
    "e": "Lokaal = alleen NTFS.",
    "s": "<b>Situatie</b><br>De gebruiker mag lokaal aanmelden op FS01 en opent D:\\Shares\\Finance."
   },
   {
    "q": "Twee groepen: Allow Read & execute en Allow Write. Wat krijgt de gebruiker?",
    "o": [
     "Beide samen: lezen en schrijven",
     "Alleen de strengste: lezen",
     "Alleen de laatste regel",
     "Niets: ze botsen"
    ],
    "a": 0,
    "w": [
     null,
     "Er is geen ‘strengste’ bij Allow.",
     "De volgorde van Allow-regels doet er niet toe.",
     "Allow-regels tellen op."
    ],
    "e": "Allow is cumulatief."
   },
   {
    "q": "Allow Modify via de ene groep, Deny Write via een andere groep. Wat geldt?",
    "o": [
     "Schrijven is geblokkeerd",
     "Modify wint",
     "De eerste groep in de lijst wint",
     "Alleen de beheerder kan dit oplossen door Full te geven"
    ],
    "a": 0,
    "w": [
     null,
     "Een expliciete Deny gaat vóór Allow.",
     "Het gaat niet om de volgorde van groepen.",
     "Full lost een Deny niet op; verwijder de Deny of herzie het lidmaatschap."
    ],
    "e": "Gebruik Deny terughoudend."
   },
   {
    "q": "Wat is het verschil tussen ‘geen Allow’ en ‘Deny’?",
    "o": [
     "Geen Allow geeft niets; Deny verbiedt ook wat elders toegestaan is",
     "Er is geen verschil",
     "Deny geldt alleen lokaal",
     "Geen Allow blokkeert alles, ook beheerders"
    ],
    "a": 0,
    "w": [
     null,
     "Ze werken anders bij meerdere groepen.",
     "Deny geldt ook via SMB.",
     "Beheerders krijgen rechten via hun eigen regels."
    ],
    "e": "Zonder Allow geen toegang; Deny is meestal niet nodig."
   },
   {
    "q": "Wat betekent <code>(OI)(CI)</code> in icacls?",
    "o": [
     "De regel geldt ook voor bestanden en submappen",
     "De regel is geërfd",
     "Alleen lezen",
     "De regel is een Deny"
    ],
    "a": 0,
    "w": [
     null,
     "Geërfd = (I).",
     "Rechten staan in de laatste haakjes, bv. (RX).",
     "Deny staat als DENY in de uitvoer."
    ],
    "e": "OI = object inherit, CI = container inherit."
   },
   {
    "q": "Wat betekent <code>(M)</code> in icacls?",
    "o": [
     "Modify",
     "Map",
     "Machtiging",
     "Members"
    ],
    "a": 0,
    "w": [
     null,
     "Mappen hebben geen eigen afkorting.",
     "Geen afkorting.",
     "Groepsleden staan niet in icacls."
    ],
    "e": "F, M, RX, R, W."
   },
   {
    "q": "Welk commando voegt Change toe op de share Finance voor een groep?",
    "o": [
     "Grant-SmbShareAccess -Name Finance -AccountName HOGENT\\DL_FS_Finance_RW -AccessRight Change -Force",
     "icacls D:\\Shares\\Finance /grant HOGENT\\DL_FS_Finance_RW:C",
     "Set-Acl -Path \\\\FS01\\Finance -Change",
     "New-SmbShare -Name Finance -Change"
    ],
    "a": 0,
    "w": [
     null,
     "icacls wijzigt NTFS, niet de share.",
     "Set-Acl werkt op NTFS en kent geen -Change.",
     "Dat maakt een nieuwe share."
    ],
    "e": "Controle: Get-SmbShareAccess -Name Finance."
   },
   {
    "q": "Welk commando toont de NTFS-regels met de kolom IsInherited?",
    "o": [
     "(Get-Acl D:\\Shares\\Finance).Access",
     "Get-SmbShareAccess -Name Finance",
     "whoami /groups",
     "Get-SmbShare -Name Finance"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is de share.",
     "Dat is de token.",
     "Dat toont share-eigenschappen."
    ],
    "e": "Ook icacls toont (I)."
   },
   {
    "q": "Waarom geef je medewerkers niet standaard Full Control?",
    "o": [
     "Ze kunnen dan ook machtigingen en eigenaar wijzigen",
     "Full Control is trager",
     "Full Control werkt niet via SMB",
     "Full Control vervalt na 30 dagen"
    ],
    "a": 0,
    "w": [
     null,
     "Snelheid is niet het punt.",
     "Het werkt wel via SMB.",
     "Rechten vervallen niet."
    ],
    "e": "Least privilege."
   },
   {
    "q": "Welke combinatie hoort in de cursus bij een ‘RW’-groep?",
    "o": [
     "Share Change en NTFS Modify",
     "Share Full en NTFS Full Control",
     "Share Read en NTFS Write",
     "Share Change en NTFS Write"
    ],
    "a": 0,
    "w": [
     null,
     "Te ruim.",
     "Read op de share blokkeert schrijven.",
     "Write laat niet verwijderen."
    ],
    "e": "RW = read-write = Modify."
   },
   {
    "q": "Welke combinatie hoort bij een ‘RO’-groep?",
    "o": [
     "Share Read en NTFS Read & execute",
     "Share Change en NTFS Read",
     "Share Read en NTFS Modify",
     "Share Full en NTFS Read"
    ],
    "a": 0,
    "w": [
     null,
     "Change op de share is te ruim voor alleen lezen.",
     "Modify is te ruim.",
     "Full op de share is te ruim."
    ],
    "e": "RO = read-only."
   },
   {
    "q": "Effective Access op FS01 toont ‘Access limited by: Share’. Wat betekent dat?",
    "o": [
     "De sharemachtiging beperkt dit recht",
     "De NTFS-ACL beperkt dit recht",
     "De share is uitgeschakeld",
     "De gebruiker heeft geen token"
    ],
    "a": 0,
    "w": [
     null,
     "Dan zou ‘File Permissions’ vermeld staan.",
     "Dan zou de share niet bereikbaar zijn.",
     "Effective Access berekent de rechten voor een gekozen account."
    ],
    "e": "Effective Access combineert share en NTFS."
   },
   {
    "q": "Welke strategie is ‘brede sharelaag, detail in NTFS’?",
    "o": [
     "Share ruim voor de doelgroep, alle details in NTFS",
     "Share en NTFS allebei gedetailleerd",
     "Alleen sharemachtigingen, NTFS op Everyone Full",
     "Geen sharemachtigingen gebruiken"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is strategie 1.",
     "Dan beveiligt alleen de share en lokaal niets.",
     "Een share heeft altijd een share-ACL."
    ],
    "e": "Kies en documenteer één strategie."
   },
   {
    "q": "Wat doet <code>Revoke-SmbShareAccess</code>?",
    "o": [
     "Een Allow-regel van de share verwijderen",
     "Een Deny-regel toevoegen",
     "De share verwijderen",
     "De NTFS-rechten verwijderen"
    ],
    "a": 0,
    "w": [
     null,
     "Dat doet Block-SmbShareAccess.",
     "Dat doet Remove-SmbShare.",
     "Dat doe je met icacls of Set-Acl."
    ],
    "e": "Controleer daarna met Get-SmbShareAccess."
   },
   {
    "q": "Wat doet <code>Block-SmbShareAccess</code>?",
    "o": [
     "Een expliciete Deny op de share zetten",
     "De share tijdelijk offline halen",
     "Alle sessies verbreken",
     "De share verbergen"
    ],
    "a": 0,
    "w": [
     null,
     "Offline halen gebeurt niet zo.",
     "Sessies verbreek je met Close-SmbSession.",
     "Verbergen doe je met $."
    ],
    "e": "Gebruik Deny terughoudend."
   },
   {
    "q": "Een gebruiker kan een map openen. Wat is daarmee bewezen?",
    "o": [
     "Dat lezen of opsommen lukt, niet dat schrijven lukt",
     "Dat hij Modify heeft",
     "Dat hij Full Control heeft",
     "Dat de share Change geeft"
    ],
    "a": 0,
    "w": [
     null,
     "Openen vraagt alleen leesrechten.",
     "Nog minder.",
     "Openen zegt niets over Change."
    ],
    "e": "Test per handeling."
   },
   {
    "q": "Waar lees je de rechten van een sharemachtiging af in <code>Get-SmbShareAccess</code>?",
    "o": [
     "In de kolom AccessRight",
     "In de kolom ScopeName",
     "In de kolom Name",
     "In de kolom AccountName"
    ],
    "a": 0,
    "w": [
     null,
     "ScopeName is de netwerkscope (meestal *).",
     "Name is de sharenaam.",
     "AccountName is wie de regel krijgt."
    ],
    "e": "AccessControlType = Allow of Deny."
   },
   {
    "q": "Welke instelling past bij een scanner die scans plaatst maar niets mag verwijderen?",
    "o": [
     "NTFS Write (met lezen indien nodig)",
     "NTFS Modify",
     "NTFS Full Control",
     "Share Full"
    ],
    "a": 0,
    "w": [
     null,
     "Modify laat verwijderen toe.",
     "Veel te ruim.",
     "Share Full is te ruim en niet nodig."
    ],
    "e": "Write: maken en schrijven, geen Delete."
   },
   {
    "q": "Een gebruiker is lid van DL_FS_Finance_RO en DL_FS_Finance_RW. Welke NTFS-toegang krijgt hij?",
    "o": [
     "Modify",
     "Read & execute",
     "Niets: tegenstrijdig",
     "Full Control"
    ],
    "a": 0,
    "w": [
     null,
     "Allow is cumulatief; RW geeft meer.",
     "Allow-regels botsen niet.",
     "Geen van beide groepen geeft Full Control."
    ],
    "e": "De ruimste Allow telt, tenzij een Deny blokkeert.",
    "s": "<b>Situatie</b><br>DL_FS_Finance_RO heeft Read & execute, DL_FS_Finance_RW heeft Modify op D:\\Shares\\Finance."
   },
   {
    "q": "Welke laag beperkt hier?",
    "o": [
     "De share",
     "NTFS",
     "De token",
     "DNS"
    ],
    "a": 0,
    "w": [
     null,
     "NTFS geeft Modify.",
     "De groepen zijn correct.",
     "DNS werkt."
    ],
    "e": "Change ontbreekt op de share.",
    "s": "<b>Situatie</b><br>NTFS: DL_FS_Finance_RW Modify.<br>Share: DL_FS_Finance_RW Read.<br>whoami /groups bevat DL_FS_Finance_RW. Resolve-DnsName FS01 lukt.<br>De gebruiker kan via UNC lezen, maar niet opslaan."
   },
   {
    "q": "Wat is ‘least privilege’?",
    "o": [
     "Alleen de rechten geven die voor de taak nodig zijn",
     "Iedereen Read geven",
     "Zo weinig mogelijk groepen gebruiken",
     "Alleen beheerders toegang geven"
    ],
    "a": 0,
    "w": [
     null,
     "Ook Read kan te veel zijn.",
     "Het gaat om rechten, niet om het aantal groepen.",
     "Gebruikers moeten hun werk kunnen doen."
    ],
    "e": "Zo weinig als nodig, zoveel als nodig."
   }
  ]
 },
 "agdlp": {
  "t": "Groepen en AGDLP",
  "q": [
   {
    "q": "Waar staat de A in AGDLP voor?",
    "o": [
     "Accounts",
     "Administrators",
     "Access",
     "Allow"
    ],
    "a": 0,
    "w": [
     null,
     "Beheerders zijn ook accounts, maar dat is niet de betekenis.",
     "Toegang is het doel, niet de letter.",
     "Allow is een type regel."
    ],
    "e": "Accounts → Global → Domain Local → Permissions."
   },
   {
    "q": "Welke groep komt in de ACL van de resource volgens AGDLP?",
    "o": [
     "De domeinlokale groep",
     "De globale groep",
     "Het gebruikersaccount",
     "De universele groep"
    ],
    "a": 0,
    "w": [
     null,
     "De globale groep wordt lid van de DL-groep.",
     "Accounts horen in een rolgroep.",
     "Universal is voor meerdere domeinen."
    ],
    "e": "DL draagt de machtiging."
   },
   {
    "q": "Wat beschrijft een globale groep in AGDLP?",
    "o": [
     "Een rol: wie hoort bij Finance, HR, Directie",
     "Een toegangsniveau tot één map",
     "Een server",
     "Een share"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is de domeinlokale groep.",
     "Servers zijn computeraccounts.",
     "Een share is een resource."
    ],
    "e": "GG_Finance_Medewerkers = wie."
   },
   {
    "q": "Wat beschrijft een domeinlokale groep in AGDLP?",
    "o": [
     "Een toegangsniveau tot een concrete resource",
     "Een afdeling",
     "Alle gebruikers van het domein",
     "Een OU"
    ],
    "a": 0,
    "w": [
     null,
     "Een afdeling is een rol: globale groep.",
     "Dat is Domain Users.",
     "Een OU is een container, geen groep."
    ],
    "e": "DL_FS_Finance_RW = welke toegang."
   },
   {
    "q": "Welk groepstype gebruik je voor machtigingen op een share?",
    "o": [
     "Security",
     "Distribution",
     "Mail-enabled",
     "Local"
    ],
    "a": 0,
    "w": [
     null,
     "Distributiegroepen dienen voor e-mail.",
     "Geen groepstype in AD.",
     "Lokaal is een bereik op één computer, geen type."
    ],
    "e": "Controleer GroupCategory Security."
   },
   {
    "q": "Welk commando maakt een domeinlokale beveiligingsgroep?",
    "o": [
     "New-ADGroup -Name DL_FS_HR_RO -GroupScope DomainLocal -GroupCategory Security",
     "New-ADGroup -Name DL_FS_HR_RO -GroupScope Global",
     "New-LocalGroup -Name DL_FS_HR_RO",
     "Add-ADGroupMember -Identity DL_FS_HR_RO"
    ],
    "a": 0,
    "w": [
     null,
     "Dat maakt een globale groep.",
     "Dat maakt een lokale groep op één computer.",
     "Dat voegt leden toe aan een bestaande groep."
    ],
    "e": "Controleer met Get-ADGroup … | Select GroupScope, GroupCategory."
   },
   {
    "q": "Welk commando nest GG_Directie in DL_FS_Finance_RO?",
    "o": [
     "Add-ADGroupMember -Identity DL_FS_Finance_RO -Members GG_Directie",
     "Add-ADGroupMember -Identity GG_Directie -Members DL_FS_Finance_RO",
     "New-ADGroup GG_Directie -Path DL_FS_Finance_RO",
     "Set-ADGroup DL_FS_Finance_RO -Nest GG_Directie"
    ],
    "a": 0,
    "w": [
     null,
     "Omgekeerd: de globale groep wordt lid van de DL-groep.",
     "-Path is een OU, geen groep.",
     "Die parameter bestaat niet."
    ],
    "e": "-Identity = de groep die leden krijgt."
   },
   {
    "q": "Wat toont <code>Get-ADGroupMember DL_FS_Finance_RW</code> (zonder -Recursive)?",
    "o": [
     "De rechtstreekse leden, bv. GG_Finance_Medewerkers",
     "Alle uiteindelijke gebruikers",
     "De machtigingen van de groep",
     "De ACL van Finance"
    ],
    "a": 0,
    "w": [
     null,
     "Dat doet -Recursive.",
     "Machtigingen staan in de ACL, niet in AD.",
     "icacls toont de ACL."
    ],
    "e": "Met -Recursive volg je de nesting.",
    "s": "<b>Situatie</b><br>GG_Finance_Medewerkers is lid van DL_FS_Finance_RW; student.finance is lid van GG_Finance_Medewerkers."
   },
   {
    "q": "Wat gebeurt er met de token van een aangemelde gebruiker als je hem aan een groep toevoegt?",
    "o": [
     "Niets: de nieuwe groep komt pas na opnieuw aanmelden in de token",
     "De token wordt meteen bijgewerkt",
     "De gebruiker wordt afgemeld",
     "De groep werkt alleen lokaal"
    ],
    "a": 0,
    "w": [
     null,
     "De token is een momentopname.",
     "Windows meldt niemand automatisch af.",
     "Groepen werken overal in het domein."
    ],
    "e": "Controleer met whoami /groups in de sessie van de gebruiker."
   },
   {
    "q": "Waarom niet één groep GG_Finance_Medewerkers rechtstreeks Modify geven?",
    "o": [
     "Rol en resourcetoegang raken vermengd; schaalt slecht bij meerdere resources",
     "Een globale groep kan technisch geen machtiging krijgen",
     "Dan krijgt iedereen Full Control",
     "Globale groepen bestaan alleen in multi-domein"
    ],
    "a": 0,
    "w": [
     null,
     "Technisch kan het wel.",
     "Het recht kies je zelf.",
     "Globale groepen bestaan in elk domein."
    ],
    "e": "De DL-laag maakt rol en resource onafhankelijk."
   },
   {
    "q": "Een medewerker verandert van afdeling. Wat pas je in een AGDLP-ontwerp aan?",
    "o": [
     "Zijn lidmaatschap van de rolgroepen",
     "De ACL's van de oude en de nieuwe afdeling",
     "De nesting tussen GG- en DL-groepen",
     "De sharemachtigingen"
    ],
    "a": 0,
    "w": [
     null,
     "De ACL's blijven ongewijzigd.",
     "Dat raakt alle collega's.",
     "De share-ACL bevat groepen, geen personen."
    ],
    "e": "Daarna opnieuw aanmelden en testen."
   },
   {
    "q": "Het toegangsniveau van een resource verandert voor een hele rol. Wat pas je aan?",
    "o": [
     "De koppeling tussen rolgroep en resourcegroep",
     "Elk gebruikersaccount afzonderlijk",
     "De naam van de rolgroep",
     "Niets: AGDLP regelt dat vanzelf"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is net wat AGDLP vermijdt.",
     "Een naam verleent niets.",
     "Iemand moet de wijziging uitvoeren."
    ],
    "e": "Bv. GG_Finance_Medewerkers uit DL_FS_Finance_RW en in DL_FS_Finance_RO."
   },
   {
    "q": "Wat drukt RW in DL_FS_Finance_RW uit?",
    "o": [
     "De bedoeling: read-write, in de cursus NTFS Modify",
     "Een technische instelling die Windows leest",
     "Read-Write op de share alleen",
     "Een regel die Write verbiedt"
    ],
    "a": 0,
    "w": [
     null,
     "Windows leest geen groepsnamen als rechten.",
     "RW hoort bij share Change én NTFS Modify.",
     "Het is geen Deny."
    ],
    "e": "Een naam is geen beveiligingsinstelling."
   },
   {
    "q": "Wat is een goede naam voor een globale groep met alle projectleden van Atlas?",
    "o": [
     "GG_Project_Atlas_Leden",
     "DL_FS_Atlas_RW",
     "Atlas",
     "GG_Toegang_Map1"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is een resourcegroep.",
     "Geen bereik of functie zichtbaar.",
     "Beschrijft een map, geen rol."
    ],
    "e": "GG_<rol>."
   },
   {
    "q": "Externe auditors en de directie moeten beide Finance lezen. Wat doe je?",
    "o": [
     "Beide rolgroepen lid maken van DL_FS_Finance_RO",
     "Alle auditors in GG_Directie zetten",
     "Een tweede share maken voor auditors",
     "De auditors rechtstreeks in de ACL zetten"
    ],
    "a": 0,
    "w": [
     null,
     "Dan krijgen ze ook alle directierechten elders.",
     "Overbodig: één DL-groep volstaat.",
     "Rechtstreekse toekenningen vermijd je."
    ],
    "e": "Meerdere GG's in één DL.",
    "s": "<b>Situatie</b><br>Er bestaan GG_Directie, GG_Externe_Auditors en DL_FS_Finance_RO (Read & execute op Finance)."
   },
   {
    "q": "Een DL-groep heeft leden maar staat in geen enkele ACL. Welke toegang geeft ze?",
    "o": [
     "Geen",
     "Read",
     "Wat de naam zegt",
     "Modify na opnieuw aanmelden"
    ],
    "a": 0,
    "w": [
     null,
     "Lidmaatschap alleen geeft niets.",
     "Windows leest geen namen.",
     "Zonder ACL-regel geen recht."
    ],
    "e": "Groep + machtiging in een ACL = toegang."
   },
   {
    "q": "In welk scenario is Universal nodig?",
    "o": [
     "Bij meerdere domeinen in een forest",
     "Altijd voor fileservers",
     "Voor één domein met één fileserver",
     "Voor distributiegroepen alleen"
    ],
    "a": 0,
    "w": [
     null,
     "Niet in ons labo.",
     "Daar volstaan Global en Domain Local.",
     "Universal bestaat ook als security group."
    ],
    "e": "Eén domein: AGDLP."
   },
   {
    "q": "Waar maak je de groepen bij voorkeur aan?",
    "o": [
     "In een vaste OU, bv. OU=Groups",
     "Op FS01 als lokale groepen",
     "In de container Computers",
     "In de share Finance"
    ],
    "a": 0,
    "w": [
     null,
     "Lokale groepen bestaan alleen op die server.",
     "Die container is voor computerobjecten.",
     "Groepen staan in AD, niet in een share."
    ],
    "e": "Een vaste plaats maakt beheer en delegatie eenvoudiger."
   },
   {
    "q": "Welke beschrijving past bij DL_FS_Finance_RW?",
    "o": [
     "Verleent Modify op D:\\Shares\\Finance",
     "Alle Finance-medewerkers",
     "Finance-server",
     "Tijdelijke groep"
    ],
    "a": 0,
    "w": [
     null,
     "Dat beschrijft een rolgroep.",
     "Te vaag.",
     "Zegt niets over de toegang."
    ],
    "e": "Resource en toegangsniveau in de beschrijving."
   },
   {
    "q": "Waarom laat je een gebruiker na een groepswijziging opnieuw aanmelden?",
    "o": [
     "Om een nieuwe token met de nieuwe groepen te krijgen",
     "Om het wachtwoord te vernieuwen",
     "Om de share opnieuw te maken",
     "Om DNS te vernieuwen"
    ],
    "a": 0,
    "w": [
     null,
     "Het wachtwoord verandert niet.",
     "De share heeft daar niets mee te maken.",
     "DNS staat los van groepen."
    ],
    "e": "Of open een nieuwe sessie met runas."
   },
   {
    "q": "Welke controle toont dat de nesting werkt tot op de gebruiker?",
    "o": [
     "Get-ADGroupMember DL_FS_Finance_RW -Recursive",
     "Get-SmbShareAccess -Name Finance",
     "icacls D:\\Shares\\Finance",
     "Resolve-DnsName DC01"
    ],
    "a": 0,
    "w": [
     null,
     "Dat toont de share-ACL.",
     "Dat toont NTFS.",
     "Dat test DNS."
    ],
    "e": "Toont de accounts via geneste groepen."
   },
   {
    "q": "Wat staat er in de ACL van Finance in een consequent AGDLP-ontwerp?",
    "o": [
     "Alleen domeinlokale groepen (plus systeemaccounts)",
     "Alle Finance-medewerkers",
     "Globale groepen",
     "Everyone"
    ],
    "a": 0,
    "w": [
     null,
     "Gebruikers horen in rolgroepen.",
     "GG's horen in DL's.",
     "Everyone is te breed."
    ],
    "e": "SYSTEM en Administrators blijven bewust staan."
   },
   {
    "q": "Een gebruiker zit in GG_Finance_Medewerkers, maar krijgt geen toegang. Wat controleer je eerst in AD?",
    "o": [
     "Of GG_Finance_Medewerkers lid is van DL_FS_Finance_RW",
     "Of de gebruiker een postvak heeft",
     "Of de groep Universal is",
     "Of de gebruiker lokaal beheerder is"
    ],
    "a": 0,
    "w": [
     null,
     "Geen invloed op bestandstoegang.",
     "Global is hier juist.",
     "Beheerdersrechten horen niet bij gewone toegang."
    ],
    "e": "Volg de keten: A → G → DL → P.",
    "s": "<b>Situatie</b><br>De ACL van Finance bevat DL_FS_Finance_RW Modify. De gebruiker meldde opnieuw aan."
   },
   {
    "q": "Wat is het voordeel van AGDLP bij een toegangsaudit?",
    "o": [
     "De ACL toont meteen welk toegangsniveau welke groep heeft",
     "Er is geen audit meer nodig",
     "Audits worden versleuteld",
     "Gebruikers kunnen zichzelf toevoegen"
    ],
    "a": 0,
    "w": [
     null,
     "Audits blijven nodig.",
     "Heeft er niets mee te maken.",
     "Zelf toevoegen is net onveilig."
    ],
    "e": "Wie toegang heeft, volg je via de groepen."
   },
   {
    "q": "Welke groep hoort Full Control op Finance te krijgen?",
    "o": [
     "DL_FS_Beheerders_FC",
     "GG_Finance_Medewerkers",
     "DL_FS_Finance_RW",
     "Domain Users"
    ],
    "a": 0,
    "w": [
     null,
     "Een rolgroep hoort niet in de ACL.",
     "RW is Modify: medewerkers beheren inhoud, geen beveiliging.",
     "Veel te breed."
    ],
    "e": "Beheer via een aparte resourcegroep.",
    "s": "<b>Situatie</b><br>Het domein werkt volgens AGDLP.<br>Bestaande groepen: GG_Finance_Medewerkers (rol), GG_FS_Beheerders (rol), DL_FS_Finance_RW (Modify op Finance), DL_FS_Beheerders_FC (bedoeld voor beheer van de fileserver).<br>Alleen de fileserverbeheerders mogen machtigingen wijzigen."
   },
   {
    "q": "Wat is de juiste AGDLP-volgorde?",
    "o": [
     "Account → Global → Domain Local → Permission",
     "Account → Domain Local → Global → Permission",
     "Global → Account → Permission → Domain Local",
     "Permission → Domain Local → Global → Account"
    ],
    "a": 0,
    "w": [
     null,
     "DL komt na G.",
     "Accounts zitten in G.",
     "Omgekeerd gelezen, niet de opbouw."
    ],
    "e": "A G DL P."
   },
   {
    "q": "Waarom vermijd je een individuele gebruiker rechtstreeks in een DL-groep?",
    "o": [
     "Zijn toegang volgt dan niet meer uit zijn rol",
     "Een DL-groep mag geen gebruikers bevatten",
     "Dan krijgt hij Full Control",
     "Dan werkt de token niet"
    ],
    "a": 0,
    "w": [
     null,
     "Technisch mag het; het is een uitzondering.",
     "Het recht hangt van de ACL af.",
     "De token werkt wel."
    ],
    "e": "Alleen als bewuste, gedocumenteerde uitzondering."
   },
   {
    "q": "Wat zegt <code>whoami /groups</code>?",
    "o": [
     "Welke groepen in de huidige token van deze sessie staan",
     "Welke groepen in AD bestaan",
     "Welke groepen in de ACL staan",
     "Welke groepen een andere gebruiker heeft"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is Get-ADGroup.",
     "Dat is icacls.",
     "Alleen de eigen sessie."
    ],
    "e": "Voer het uit in de sessie van de betrokken gebruiker."
   },
   {
    "q": "Welke groep past bij ‘alle directieleden’?",
    "o": [
     "GG_Directie",
     "DL_FS_Directie_RO",
     "Directie_Map",
     "Domain Admins"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is een resourcegroep.",
     "Geen bereik zichtbaar.",
     "Beheerders zijn geen directieleden."
    ],
    "e": "Rol = globale groep."
   },
   {
    "q": "HR mag Finance niet openen. Hoe realiseer je dat in AGDLP het eenvoudigst?",
    "o": [
     "GG_HR_Medewerkers in geen enkele Finance-resourcegroep stoppen",
     "Een Deny voor GG_HR_Medewerkers op Finance",
     "HR-gebruikers uitschakelen",
     "Een verborgen share Finance$"
    ],
    "a": 0,
    "w": [
     null,
     "Werkt, maar Deny is meestal onnodig en onvoorspelbaar.",
     "Dan kunnen ze ook niet meer werken.",
     "Verborgen is niet beveiligd."
    ],
    "e": "Geen Allow = geen toegang."
   }
  ]
 },
 "acl": {
  "t": "Overerving, eigenaar, kopiëren",
  "q": [
   {
    "q": "Wat is een geërfde ACE?",
    "o": [
     "Een regel afkomstig van een bovenliggende map",
     "Een regel rechtstreeks op het object",
     "Een regel van de share",
     "Een Deny-regel"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is expliciet.",
     "Share en NTFS zijn verschillende lagen.",
     "Allow en Deny kunnen beide geërfd zijn."
    ],
    "e": "icacls toont (I)."
   },
   {
    "q": "Waarom gebruik je overerving?",
    "o": [
     "Eén ACL bovenaan beheren in plaats van op elke submap",
     "Om de share sneller te maken",
     "Om Deny te vermijden",
     "Omdat expliciete regels niet bestaan"
    ],
    "a": 0,
    "w": [
     null,
     "Het heeft niets met snelheid te maken.",
     "Een Deny kan ook geërfd worden.",
     "Expliciete regels bestaan wel."
    ],
    "e": "Minder dubbel beheer, voorspelbare structuur."
   },
   {
    "q": "Welke vlag geeft aan dat een regel naar submappen doorwerkt?",
    "o": [
     "(CI)",
     "(OI)",
     "(I)",
     "(IO)"
    ],
    "a": 0,
    "w": [
     null,
     "(OI) = bestanden.",
     "(I) = geërfd.",
     "(IO) = alleen voor erven, niet op dit object."
    ],
    "e": "CI = container inherit."
   },
   {
    "q": "Je schakelt overerving uit en kiest Convert. Wat gebeurt er?",
    "o": [
     "De geërfde regels blijven, nu als expliciete regels",
     "Alle regels worden verwijderd",
     "Alleen de eigenaar blijft",
     "De map erft voortaan van de root"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is Remove.",
     "Er blijven regels staan.",
     "Integendeel: de map erft niet meer."
    ],
    "e": "Daarna verwijder je gericht wat niet mag blijven."
   },
   {
    "q": "Je schakelt overerving uit en kiest Remove. Wat is het grootste risico?",
    "o": [
     "Ook beheerders verliezen hun toegang",
     "De share verdwijnt",
     "Bestanden worden verplaatst",
     "De overerving gaat naar de bovenliggende map"
    ],
    "a": 0,
    "w": [
     null,
     "De share blijft.",
     "Er wordt niets verplaatst.",
     "Overerving gaat van boven naar onder."
    ],
    "e": "Controleer vooraf welke beheertoegang moet blijven."
   },
   {
    "q": "Welk commando toont of de overerving op Budgetten uitgeschakeld is?",
    "o": [
     "(Get-Acl D:\\Shares\\Finance\\Budgetten).AreAccessRulesProtected",
     "Get-SmbShare -Name Budgetten",
     "icacls D:\\Shares\\Finance\\Budgetten /reset",
     "whoami /groups"
    ],
    "a": 0,
    "w": [
     null,
     "Budgetten is geen share.",
     "Dat herstelt de overerving, het toont niets.",
     "Dat toont de token."
    ],
    "e": "True = beveiligd tegen overerving."
   },
   {
    "q": "Wat doet <code>icacls pad /inheritance:d</code>?",
    "o": [
     "Overerving uitschakelen en de regels converteren",
     "Overerving uitschakelen en alle geërfde regels verwijderen",
     "Overerving inschakelen",
     "Alle Deny-regels verwijderen"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is /inheritance:r.",
     "Dat is /inheritance:e.",
     "Dat doe je met /remove:d."
    ],
    "e": "d = disable (copy), r = remove, e = enable."
   },
   {
    "q": "Wat doet <code>icacls pad /reset</code>?",
    "o": [
     "De expliciete regels weghalen en de geërfde opnieuw toepassen",
     "Alle rechten verwijderen",
     "De eigenaar wijzigen",
     "De share herstellen"
    ],
    "a": 0,
    "w": [
     null,
     "Het object krijgt de geërfde regels.",
     "Dat is takeown of /setowner.",
     "icacls werkt niet op shares."
    ],
    "e": "Handig na een verplaatsing binnen hetzelfde volume."
   },
   {
    "q": "Een bestand wordt van C: naar D: verplaatst. Welke rechten krijgt het normaal?",
    "o": [
     "Die van de doelmap: het wordt gekopieerd en daarna verwijderd",
     "Die van de bron",
     "Geen",
     "Die van de bron én de doelmap"
    ],
    "a": 0,
    "w": [
     null,
     "Tussen volumes is verplaatsen kopiëren + verwijderen.",
     "Het erft wel.",
     "Er wordt niets samengevoegd."
    ],
    "e": "Binnen hetzelfde volume is dat anders."
   },
   {
    "q": "Een bestand wordt binnen D: verplaatst. Wat gebeurt er normaal met de ACL?",
    "o": [
     "Het bestand behoudt zijn ACL",
     "Het bestand erft de doelmap",
     "De ACL wordt gewist",
     "De bron-ACL en doel-ACL worden samengevoegd"
    ],
    "a": 0,
    "w": [
     null,
     "Dat gebeurt bij kopiëren.",
     "Ze blijft bestaan.",
     "Er wordt niets samengevoegd."
    ],
    "e": "Controleer na verplaatsen altijd de ACL."
   },
   {
    "q": "Welke robocopy-optie neemt de NTFS-ACL mee?",
    "o": [
     "/COPY:DATS",
     "/COPY:DAT",
     "/MIR",
     "/E"
    ],
    "a": 0,
    "w": [
     null,
     "Zonder S geen beveiligingsinformatie.",
     "/MIR spiegelt, maar kopieert de ACL niet per se.",
     "/E neemt submappen mee."
    ],
    "e": "D = data, A = attributes, T = timestamps, S = security."
   },
   {
    "q": "Wanneer is de bron-ACL behouden bij een migratie géén goed idee?",
    "o": [
     "Als de bestemming een andere beveiligingszone is",
     "Altijd, het is altijd goed",
     "Als de bestanden groot zijn",
     "Als de bron op C: staat"
    ],
    "a": 0,
    "w": [
     null,
     "Oude rechten kunnen ongewenste toegang geven.",
     "Grootte speelt geen rol.",
     "De locatie van de bron is niet het criterium."
    ],
    "e": "Kies bewust tussen behouden en opnieuw erven."
   },
   {
    "q": "Wat kan de eigenaar van een bestand altijd?",
    "o": [
     "De machtigingen van het bestand wijzigen",
     "Het bestand lezen",
     "Het bestand verwijderen",
     "Het bestand delen als share"
    ],
    "a": 0,
    "w": [
     null,
     "Eigenaarschap geeft geen leesrecht.",
     "Ook dat vraagt een recht.",
     "Shares maken vraagt beheerdersrechten."
    ],
    "e": "Eigenaar ≠ Modify."
   },
   {
    "q": "Wat doet <code>takeown /f pad /a</code>?",
    "o": [
     "Administrators worden eigenaar",
     "De huidige gebruiker krijgt Full Control",
     "De eigenaar wordt verwijderd",
     "De ACL wordt hersteld"
    ],
    "a": 0,
    "w": [
     null,
     "Eigenaar worden is geen Full Control.",
     "Een object heeft altijd een eigenaar.",
     "Het herstelt geen rechten."
    ],
    "e": "Daarna de ACL gecontroleerd herstellen."
   },
   {
    "q": "Waarom is <code>takeown /r</code> op een grote map riskant?",
    "o": [
     "Oorspronkelijke eigenaars gaan verloren en veel objecten wijzigen",
     "De map wordt verwijderd",
     "De share wordt ontkoppeld",
     "Overerving wordt overal uitgeschakeld"
    ],
    "a": 0,
    "w": [
     null,
     "Er wordt niets verwijderd.",
     "De share blijft.",
     "takeown raakt de overerving niet."
    ],
    "e": "Wijzig niet meer objecten dan nodig."
   },
   {
    "q": "In een ACL staat een onbekende SID zoals S-1-5-21-…-1240. Wat is waarschijnlijk?",
    "o": [
     "Het account of de groep bestaat niet meer",
     "Het is een nieuwe beheerder",
     "De share is beschadigd",
     "Het is een geërfde Deny"
    ],
    "a": 0,
    "w": [
     null,
     "Een bestaand account toont een naam.",
     "Shares staan los van NTFS-SID's.",
     "Of het Allow of Deny is, lees je apart."
    ],
    "e": "Bv. na verwijderen van een account of een migratie."
   },
   {
    "q": "Wat toont het tabblad Effective Access?",
    "o": [
     "De berekende rechten van een gekozen gebruiker of groep",
     "De geschiedenis van wijzigingen",
     "Wie nu het bestand geopend heeft",
     "De SMB-versie"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is auditing.",
     "Dat is Get-SmbOpenFile.",
     "Dat is Get-SmbConnection."
    ],
    "e": "Hulpmiddel; test daarna praktisch."
   },
   {
    "q": "Waarom voeg je dezelfde regel niet expliciet op elke submap toe?",
    "o": [
     "Dubbel beheer en kans op tegenstrijdigheden",
     "Windows laat het niet toe",
     "Het maakt bestanden alleen-lezen",
     "Expliciete regels worden niet geërfd"
    ],
    "a": 0,
    "w": [
     null,
     "Het mag technisch.",
     "Niet waar.",
     "Ook expliciete regels kunnen overerfbaar zijn."
    ],
    "e": "Laat overerving het werk doen."
   },
   {
    "q": "Je wil dat alleen de directie in Finance\\Directie kan. Wat is de juiste volgorde?",
    "o": [
     "Eigen groep, overerving bewust aanpassen, Finance-regel weg, testen",
     "Directiegroep toevoegen en klaar",
     "Overerving uitschakelen met Remove en klaar",
     "Een Deny voor Everyone"
    ],
    "a": 0,
    "w": [
     null,
     "De Finance-regel blijft dan gelden.",
     "Dan verliezen ook beheerders toegang.",
     "Deny Everyone blokkeert ook de directie."
    ],
    "e": "Controleer ook de share en test positief én negatief."
   },
   {
    "q": "Wat is het toepassingsgebied ‘This folder only’?",
    "o": [
     "De regel geldt alleen op de map zelf, niet erin",
     "De regel geldt alleen op bestanden",
     "De regel geldt alleen op submappen",
     "De regel geldt overal op het volume"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is ‘Files only’.",
     "Dat is ‘Subfolders only’.",
     "Een regel werkt alleen naar beneden door."
    ],
    "e": "Lees elke ACE volledig."
   },
   {
    "q": "Wat betekent <code>(IO)</code> in icacls?",
    "o": [
     "Inherit only: de regel geldt niet op dit object, alleen voor wat eronder komt",
     "Input/output",
     "Inherited object",
     "Ingeschakeld en overerfbaar"
    ],
    "a": 0,
    "w": [
     null,
     "Geen afkorting voor I/O.",
     "Geërfd = (I).",
     "Bestaat niet zo."
    ],
    "e": "Bv. CREATOR OWNER:(OI)(CI)(IO)(F)."
   },
   {
    "q": "Na een verplaatsing staat op een Finance-bestand nog <code>DL_FS_HR_RW:(I)(M)</code>. Wat doe je?",
    "o": [
     "icacls bestand /reset en daarna testen",
     "student.finance rechtstreeks toevoegen",
     "Full Control geven aan Everyone",
     "De share Finance opnieuw maken"
    ],
    "a": 0,
    "w": [
     null,
     "Rechtstreekse toekenningen vermijd je.",
     "Veel te breed.",
     "De share is het probleem niet."
    ],
    "e": "De geërfde Finance-regels komen terug."
   },
   {
    "q": "Waarom heeft een nieuwe map op D:\\ meteen regels voor BUILTIN\\Users?",
    "o": [
     "Ze erft die van de root van het volume",
     "De File Server-rol voegt ze toe",
     "SMB voegt ze toe",
     "De gebruiker die de map maakt, voegt ze toe"
    ],
    "a": 0,
    "w": [
     null,
     "De rol verandert de ACL van D:\\ niet.",
     "SMB heeft geen invloed op NTFS.",
     "De maker wordt eigenaar; de Users-regels komen van de root."
    ],
    "e": "Daarom pas je de ACL van afdelingsmappen bewust aan."
   },
   {
    "q": "Welke van deze is een gevolg van uitgeschakelde overerving op een submap?",
    "o": [
     "Wijzigingen op de bovenliggende map komen er niet meer door",
     "De submap wordt verborgen",
     "De submap kan niet meer gedeeld worden",
     "De eigenaar verandert"
    ],
    "a": 0,
    "w": [
     null,
     "Verbergen is ABE of $.",
     "Delen kan nog.",
     "De eigenaar blijft dezelfde."
    ],
    "e": "Een zelfstandige ACL moet apart beheerd worden."
   },
   {
    "q": "Na een herstel uit back-up toont een map een oude eigenaar. Wat doe je?",
    "o": [
     "Eigenaar en ACL controleren en gecontroleerd herstellen",
     "De map verwijderen",
     "De back-up opnieuw terugzetten",
     "Niets: eigenaars spelen geen rol"
    ],
    "a": 0,
    "w": [
     null,
     "Dan verlies je de gegevens.",
     "Dan krijg je hetzelfde resultaat.",
     "Een oude eigenaar kan beheer bemoeilijken."
    ],
    "e": "Test daarna met gebruikers."
   },
   {
    "q": "Wat bewijst <code>icacls</code> niet?",
    "o": [
     "Wat de gebruiker via de share kan",
     "Welke regels geërfd zijn",
     "Welke groepen in de ACL staan",
     "Of een regel Deny is"
    ],
    "a": 0,
    "w": [
     null,
     "Dat toont (I).",
     "Dat toont het.",
     "Dat toont DENY."
    ],
    "e": "De share is een andere laag."
   },
   {
    "q": "Je kopieert een map met <code>Copy-Item</code> naar Finance. Welke regels krijgt de kopie?",
    "o": [
     "De geërfde regels van Finance",
     "De regels van de bron",
     "Geen",
     "De bronregels plus Everyone"
    ],
    "a": 0,
    "w": [
     null,
     "Copy-Item maakt nieuwe objecten.",
     "Ze erft.",
     "Er komt geen Everyone bij."
    ],
    "e": "Controleer met icacls."
   },
   {
    "q": "Wat is het verschil tussen ABE en NTFS?",
    "o": [
     "ABE regelt zichtbaarheid, NTFS de toegang",
     "ABE regelt toegang, NTFS zichtbaarheid",
     "Er is geen verschil",
     "ABE geldt lokaal, NTFS via de share"
    ],
    "a": 0,
    "w": [
     null,
     "Omgekeerd.",
     "Ze doen iets anders.",
     "ABE werkt via de share."
    ],
    "e": "ABE verbergt, NTFS beveiligt."
   },
   {
    "q": "Een gebruiker ziet met ABE een map niet meer, maar typt het pad. Wat gebeurt er?",
    "o": [
     "Toegang geweigerd: NTFS blijft beveiligen",
     "De map opent toch",
     "ABE geeft een andere map",
     "De share sluit"
    ],
    "a": 0,
    "w": [
     null,
     "NTFS geeft geen leesrecht.",
     "ABE verandert geen paden.",
     "De share blijft open."
    ],
    "e": "ABE is geen beveiliging op zich."
   },
   {
    "q": "Waarom moet je na een migratie ook met gebruikers testen?",
    "o": [
     "De ACL kan er correct uitzien terwijl de effectieve toegang afwijkt",
     "Gebruikers moeten het wachtwoord vernieuwen",
     "Anders werkt DNS niet",
     "Omdat icacls niet werkt na een migratie"
    ],
    "a": 0,
    "w": [
     null,
     "Wachtwoorden blijven gelijk.",
     "DNS staat los hiervan.",
     "icacls werkt gewoon."
    ],
    "e": "Positieve en negatieve tests."
   }
  ]
 },
 "trouble": {
  "t": "Troubleshooting",
  "q": [
   {
    "q": "Wat noteer je eerst bij een toegangsprobleem?",
    "o": [
     "Gebruiker, pad, handeling en exacte melding",
     "De oplossing die je gaat proberen",
     "Welke rechten je extra wil geven",
     "Het IP-adres van DC01"
    ],
    "a": 0,
    "w": [
     null,
     "Eerst feiten, dan hypothesen.",
     "Ruimere rechten zijn geen analyse.",
     "Alleen relevant als DNS het probleem is."
    ],
    "e": "Een nauwkeurige probleemomschrijving bespaart tijd."
   },
   {
    "q": "Welke volgorde past bij de diagnoseladder?",
    "o": [
     "Identiteit → Pad → DNS → Poort 445 → Share → Sessie → Groepen → Share-ACL → NTFS → Test",
     "NTFS → Share → DNS → Identiteit",
     "Share → DNS → NTFS → Identiteit",
     "Test → NTFS → Groepen → Pad"
    ],
    "a": 0,
    "w": [
     null,
     "Van boven naar onder zonder basis.",
     "Geen logische volgorde.",
     "Testen is het einde, niet het begin."
    ],
    "e": "Elke schakel bouwt op de vorige."
   },
   {
    "q": "<code>\\\\FS01\\Finance</code>: ‘The network path was not found’. Wat controleer je eerst?",
    "o": [
     "Naamomzetting en poort 445",
     "De NTFS-ACL",
     "De token",
     "ABE"
    ],
    "a": 0,
    "w": [
     null,
     "Een ACL-fout geeft Access denied.",
     "De token speelt pas bij autorisatie.",
     "ABE verbergt items, geen paden."
    ],
    "e": "Resolve-DnsName en Test-NetConnection -Port 445."
   },
   {
    "q": "Lokaal werkt het voor de gebruiker, via de share niet. Wat is de eerste hypothese?",
    "o": [
     "De sharemachtiging is beperkter dan NTFS",
     "De NTFS-ACL is fout",
     "DNS is fout",
     "De gebruiker heeft geen account"
    ],
    "a": 0,
    "w": [
     null,
     "Lokaal werkt het: NTFS is in orde.",
     "Dan zou de share niet gevonden worden.",
     "Lokaal aanmelden lukt toch."
    ],
    "e": "Controleer Get-SmbShareAccess en Get-SmbConnection."
   },
   {
    "q": "Een nieuw groepslidmaatschap lijkt niet te werken. Wat controleer je eerst?",
    "o": [
     "whoami /groups in de sessie van de gebruiker",
     "De NTFS-ACL opnieuw instellen",
     "De share opnieuw maken",
     "SMB signing uitschakelen"
    ],
    "a": 0,
    "w": [
     null,
     "De ACL kan correct zijn.",
     "De share staat er los van.",
     "Signing heeft er niets mee te maken."
    ],
    "e": "Een oude token is de meest voorkomende oorzaak."
   },
   {
    "q": "Slechts één bestand geeft Access denied. Welke hypothese past?",
    "o": [
     "Het bestand heeft een afwijkende ACL, bv. na verplaatsen",
     "DNS werkt niet",
     "De share bestaat niet",
     "Poort 445 is dicht"
    ],
    "a": 0,
    "w": [
     null,
     "Dan zou niets werken.",
     "Dan zou de hele share falen.",
     "Dan zou niets werken."
    ],
    "e": "icacls op dat bestand."
   },
   {
    "q": "Een gebruiker kan maken maar niet verwijderen. Wat is waarschijnlijk?",
    "o": [
     "Write in plaats van Modify",
     "Share Read",
     "Een oude token",
     "DNS"
    ],
    "a": 0,
    "w": [
     null,
     "Met share Read kan hij ook niet maken.",
     "Dan zou hij ook niet kunnen maken.",
     "DNS staat los van rechten."
    ],
    "e": "Modify omvat Delete."
   },
   {
    "q": "De gebruiker opent de share onder een ander account. Wat doe je?",
    "o": [
     "De verbinding verbreken en opnieuw verbinden met de juiste identiteit",
     "De ACL uitbreiden voor het aangemelde account",
     "De share verwijderen",
     "Het andere account uitschakelen"
    ],
    "a": 0,
    "w": [
     null,
     "De ACL is het probleem niet.",
     "Veel te drastisch.",
     "Lost de verkeerde sessie niet op."
    ],
    "e": "net use /delete, Credential Manager."
   },
   {
    "q": "Na een functiewijziging heeft een gebruiker nog toegang tot zijn oude afdeling. Wat controleer je?",
    "o": [
     "Oude lidmaatschappen, rechtstreekse toekenningen en zijn token",
     "De DNS-server",
     "Het SMB-dialect",
     "De eigenaar van de map"
    ],
    "a": 0,
    "w": [
     null,
     "Heeft niets met rechten te maken.",
     "Heeft niets met rechten te maken.",
     "Eigenaar geeft geen toegang tot inhoud."
    ],
    "e": "Daarna afmelden, aanmelden en negatief testen."
   },
   {
    "q": "Iemand stelt voor: ‘geef Everyone Full Control, dan werkt het’. Waarom niet?",
    "o": [
     "Het verbergt de oorzaak en opent toegang voor wie dat niet mag",
     "Het werkt technisch niet",
     "Everyone bestaat niet in een domein",
     "Het vertraagt de server"
    ],
    "a": 0,
    "w": [
     null,
     "Het werkt wel, en dat is net het gevaar.",
     "Everyone bestaat wel.",
     "Snelheid is het probleem niet."
    ],
    "e": "Los de oorzaak op, niet het symptoom."
   },
   {
    "q": "Welke vraag hoort bij ‘verwacht gedrag’?",
    "o": [
     "Wat moet volgens het toegangsplan werken, en wat niet?",
     "Welke fout zie je?",
     "Welke commando's heb je al uitgevoerd?",
     "Hoe lang werkt het al niet?"
    ],
    "a": 0,
    "w": [
     null,
     "Dat zijn de feiten.",
     "Dat is bewijs.",
     "Dat is context."
    ],
    "e": "Vergelijk verwacht met werkelijk."
   },
   {
    "q": "Wat is een toetsbare hypothese?",
    "o": [
     "‘De share geeft DL_FS_Finance_RW maar Read’, te controleren met Get-SmbShareAccess",
     "‘Er is iets mis met de rechten’",
     "‘Windows doet raar’",
     "‘Het netwerk is traag’"
    ],
    "a": 0,
    "w": [
     null,
     "Te vaag om te testen.",
     "Niet toetsbaar.",
     "Geen verband met het symptoom."
    ],
    "e": "Een hypothese wijst naar één laag en één test."
   },
   {
    "q": "Waarom voer je na een oplossing ook een negatieve test uit?",
    "o": [
     "Om te bewijzen dat je geen ruimere toegang hebt gegeven",
     "Om de server te herstarten",
     "Omdat positieve tests niet tellen",
     "Om de token te vernieuwen"
    ],
    "a": 0,
    "w": [
     null,
     "Geen herstart nodig.",
     "Positieve tests tellen ook.",
     "De token vernieuw je door aan te melden."
    ],
    "e": "Bv. student.hr moet nog steeds geweigerd worden."
   },
   {
    "q": "Welke laag is het probleem?",
    "o": [
     "De share",
     "DNS",
     "Poort 445",
     "NTFS"
    ],
    "a": 0,
    "w": [
     null,
     "DNS lukt.",
     "TcpTestSucceeded is True.",
     "Er is nog geen autorisatie gebeurd."
    ],
    "e": "‘Network name cannot be found’ = de sharenaam.",
    "s": "<b>Situatie</b><br>Resolve-DnsName FS01 lukt.<br>Test-NetConnection FS01 -Port 445: True.<br>\\\\FS01\\Financien: The network name cannot be found.<br>Get-SmbShare op FS01 toont Finance en HR."
   },
   {
    "q": "Welke laag is het probleem?",
    "o": [
     "Groepen en token",
     "De share",
     "NTFS",
     "DNS"
    ],
    "a": 0,
    "w": [
     null,
     "De share geeft de groep Change.",
     "NTFS geeft de groep Modify.",
     "De share opent."
    ],
    "e": "De gebruiker zit niet (meer) in de keten of de token is oud.",
    "s": "<b>Situatie</b><br>Get-SmbShareAccess: DL_FS_Finance_RW Change.<br>icacls: DL_FS_Finance_RW:(OI)(CI)(M).<br>In de sessie van de gebruiker: whoami /groups zonder DL_FS_Finance_RW.<br>Hij krijgt Access is denied."
   },
   {
    "q": "Welke laag is het probleem?",
    "o": [
     "NTFS",
     "De share",
     "Groepen en token",
     "SMB-sessie"
    ],
    "a": 0,
    "w": [
     null,
     "De share geeft Change.",
     "De groep staat in de token.",
     "De sessie gebruikt het juiste account."
    ],
    "e": "RX geeft geen schrijfrechten.",
    "s": "<b>Situatie</b><br>Get-SmbShareAccess: DL_FS_Finance_RW Change.<br>whoami /groups bevat DL_FS_Finance_RW.<br>Get-SmbConnection: UserName HOGENT\\student.finance.<br>icacls: DL_FS_Finance_RW:(OI)(CI)(RX).<br>Opslaan mislukt."
   },
   {
    "q": "Welke laag is het probleem?",
    "o": [
     "DNS",
     "Poort 445",
     "De share",
     "NTFS"
    ],
    "a": 0,
    "w": [
     null,
     "De poort kan je zonder IP niet testen.",
     "Zover komt het niet.",
     "Zover komt het niet."
    ],
    "e": "De client gebruikt een verkeerde DNS-server.",
    "s": "<b>Situatie</b><br>Resolve-DnsName FS01: DNS name does not exist.<br>Get-DnsClientServerAddress op W11-01: 192.168.60.99.<br>DC01 is de DNS-server (192.168.60.10)."
   },
   {
    "q": "Welke laag is het probleem?",
    "o": [
     "SMB-sessie (identiteit)",
     "NTFS",
     "De share",
     "DNS"
    ],
    "a": 0,
    "w": [
     null,
     "NTFS is correct voor student.hr.",
     "De share is correct.",
     "De naam wordt opgelost."
    ],
    "e": "De sessie gebruikt een ander account.",
    "s": "<b>Situatie</b><br>whoami: hogent\\student.hr.<br>Get-SmbConnection: FS01 Finance HOGENT\\directeur01.<br>student.hr kan onverwacht Finance lezen."
   },
   {
    "q": "Welke laag is het probleem?",
    "o": [
     "NTFS (overerving)",
     "De share",
     "Groepen en token",
     "DNS"
    ],
    "a": 0,
    "w": [
     null,
     "De rest van Finance werkt.",
     "De rest van Finance werkt met dezelfde groepen.",
     "De naam werkt."
    ],
    "e": "AreAccessRulesProtected True: Budgetten erft niet meer.",
    "s": "<b>Situatie</b><br>Finance werkt voor RW- en RO-gebruikers.<br>Alleen Finance\\Budgetten geeft Access denied, voor beide.<br>(Get-Acl …\\Budgetten).AreAccessRulesProtected: True.<br>icacls Budgetten toont alleen DL_FS_Beheerders_FC en SYSTEM."
   },
   {
    "q": "Welke laag is het probleem?",
    "o": [
     "NTFS (expliciete Deny)",
     "De share",
     "DNS",
     "Poort 445"
    ],
    "a": 0,
    "w": [
     null,
     "De share geeft Change en elders werkt schrijven.",
     "Lezen werkt.",
     "Lezen werkt."
    ],
    "e": "Deny wint van Allow.",
    "s": "<b>Situatie</b><br>student.finance kan overal in Finance schrijven, behalve in Budgetten.<br>icacls Budgetten: HOGENT\\GG_Stagiairs:(OI)(CI)(DENY)(W).<br>whoami /groups bevat GG_Stagiairs."
   },
   {
    "q": "Welke tool gebruik je voor een snelle berekening van de rechten van één gebruiker op FS01?",
    "o": [
     "Effective Access (Advanced Security Settings)",
     "Get-SmbConnection",
     "Resolve-DnsName",
     "net use"
    ],
    "a": 0,
    "w": [
     null,
     "Dat toont de clientverbinding.",
     "Dat test DNS.",
     "Dat toont koppelingen."
    ],
    "e": "Daarna praktisch bevestigen."
   },
   {
    "q": "Station F: werkt niet, <code>\\\\FS01\\Finance</code> wel. Waar ligt het probleem?",
    "o": [
     "Bij de stationskoppeling",
     "Bij NTFS",
     "Bij de share",
     "Bij DNS"
    ],
    "a": 0,
    "w": [
     null,
     "NTFS werkt via het UNC-pad.",
     "De share werkt.",
     "DNS werkt."
    ],
    "e": "Controleer net use; koppel opnieuw."
   },
   {
    "q": "Wat doe je eerst als je zelf een fout introduceerde in het labo en het niet meer weet?",
    "o": [
     "Configuratie vergelijken met het toegangsplan, laag per laag",
     "Alles opnieuw installeren",
     "Everyone Full geven",
     "De DC herstarten"
    ],
    "a": 0,
    "w": [
     null,
     "Te drastisch zonder analyse.",
     "Verbergt de oorzaak.",
     "Lost zelden iets op."
    ],
    "e": "Of revert naar een snapshot als het labo stuk is."
   },
   {
    "q": "Waarom test je niet met een beheerdersaccount?",
    "o": [
     "De beheerder heeft rechten die gebruikers niet hebben",
     "Beheerders mogen geen shares openen",
     "Beheerders gebruiken geen SMB",
     "Beheerders hebben geen token"
    ],
    "a": 0,
    "w": [
     null,
     "Dat mogen ze wel.",
     "Ze gebruiken wel SMB.",
     "Iedereen heeft een token."
    ],
    "e": "Test met representatieve accounts."
   },
   {
    "q": "Welke controle hoort bij ‘Share’ op de ladder?",
    "o": [
     "Get-SmbShare: bestaat de share en naar welk pad verwijst ze?",
     "whoami /groups",
     "icacls",
     "Resolve-DnsName"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is de token.",
     "Dat is NTFS.",
     "Dat is DNS."
    ],
    "e": "Daarna de sessie en de share-ACL."
   },
   {
    "q": "Welke controle hoort bij ‘SMB-sessie’?",
    "o": [
     "Get-SmbConnection op de client",
     "Get-SmbShareAccess",
     "Get-ADGroupMember",
     "icacls"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is de share-ACL.",
     "Dat is AD.",
     "Dat is NTFS."
    ],
    "e": "Identiteit en dialect van de verbinding."
   },
   {
    "q": "Een ticket zegt: ‘Opgelost: Full Control gegeven.’ Wat ontbreekt?",
    "o": [
     "De oorzaak en een negatieve nacontrole",
     "Niets: het werkt",
     "Een herstart",
     "De naam van de server"
    ],
    "a": 0,
    "w": [
     null,
     "Werkt is niet hetzelfde als veilig.",
     "Geen herstart nodig.",
     "Bijzaak."
    ],
    "e": "Documenteer oorzaak, oplossing en nacontrole."
   },
   {
    "q": "Je bevestigt een hypothese. Wat doe je dan?",
    "o": [
     "Eén gerichte wijziging en meteen testen",
     "Meerdere wijzigingen tegelijk om zeker te zijn",
     "Niets: de hypothese volstaat",
     "De gebruiker vragen opnieuw te proberen over een uur"
    ],
    "a": 0,
    "w": [
     null,
     "Dan weet je niet welke wijziging hielp.",
     "Een hypothese moet je ook oplossen en testen.",
     "Test zelf, meteen."
    ],
    "e": "Eén wijziging tegelijk."
   },
   {
    "q": "Welk bewijs toont dat HR Finance niet kan openen?",
    "o": [
     "Een runas-sessie als student.hr geeft Access denied op \\\\FS01\\Finance",
     "icacls toont geen HR-groep",
     "Get-SmbShareAccess toont geen HR-groep",
     "student.hr staat in GG_HR_Medewerkers"
    ],
    "a": 0,
    "w": [
     null,
     "Nodig, maar nog geen praktische test.",
     "Eén laag; NTFS kan nog iets geven.",
     "Zegt niets over Finance."
    ],
    "e": "Het praktische bewijs telt."
   },
   {
    "q": "Wat is de beste reden om een snapshot te nemen vóór het foutenpracticum?",
    "o": [
     "Je kan snel terug naar een werkende stand",
     "Snapshots versnellen de VM",
     "Anders werken de foutkaarten niet",
     "Een snapshot maakt back-ups overbodig"
    ],
    "a": 0,
    "w": [
     null,
     "Snapshots vertragen eerder.",
     "Foutkaarten werken ook zonder.",
     "Een snapshot is geen back-up."
    ],
    "e": "Revert bij een echt kapot labo."
   }
  ]
 }
};
})(window.FSDATA);
