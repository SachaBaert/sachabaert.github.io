/* Gegenereerd uit het lesontwerp (design_*.py). Aanpassen kan ook hier. */
window.FSDATA = {
 "sets": {
  "pad": {
   "t": "Lokaal pad, UNC-pad of netwerkstation?",
   "intro": "Welke soort pad gebruikt de gebruiker hier?",
   "cats": [
    {
     "t": "Lokaal",
     "d": "rechtstreeks op het volume",
     "c": "#14799B",
     "l": "een pad op het bestandssysteem van de computer zelf"
    },
    {
     "t": "UNC",
     "d": "\\\\server\\share",
     "c": "#EB6008",
     "l": "een netwerkpad met servernaam en sharenaam"
    },
    {
     "t": "Station",
     "d": "letter → UNC",
     "c": "#919E2C",
     "l": "een stationsletter die naar een UNC-pad verwijst"
    }
   ],
   "items": [
    {
     "q": "<code>D:\\Shares\\Finance\\Budgetten</code>",
     "a": "Lokaal",
     "e": "Een stationsletter van een lokaal volume met een mappad: rechtstreeks NTFS, geen share."
    },
    {
     "q": "<code>\\\\FS01\\Finance\\Budgetten</code>",
     "a": "UNC",
     "e": "Twee backslashes, servernaam FS01, sharenaam Finance, submap Budgetten."
    },
    {
     "q": "<code>F:\\Budgetten</code>, terwijl <code>net use</code> toont: F: → \\\\FS01\\Finance",
     "a": "Station",
     "e": "F: is hier een netwerkstation: een koppeling naar het UNC-pad. De beveiliging blijft die van share + NTFS."
    },
    {
     "q": "<code>\\\\FS01\\Finance$</code>",
     "a": "UNC",
     "e": "Een verborgen share is nog altijd een UNC-pad. Het dollarteken verbergt alleen bij het bladeren."
    },
    {
     "q": "<code>C:\\Windows\\System32</code> op W11-01",
     "a": "Lokaal",
     "e": "Een map op het eigen systeemvolume van de client."
    },
    {
     "q": "<code>\\\\DC01\\NETLOGON</code>",
     "a": "UNC",
     "e": "NETLOGON is een standaardshare op elke domain controller."
    },
    {
     "q": "Een beheerder opent op FS01 <code>D:\\Shares\\HR</code> in Verkenner.",
     "a": "Lokaal",
     "e": "Hij werkt op de server zelf met een lokaal pad: de sharemachtigingen gelden niet."
    },
    {
     "q": "<code>H:\\</code>, terwijl <code>net use</code> toont: H: → \\\\FS01\\HR",
     "a": "Station",
     "e": "Een gekoppeld netwerkstation. Werkt H: niet en \\\\FS01\\HR wel, dan ligt het probleem bij de koppeling."
    }
   ]
  },
  "laag": {
   "t": "Welke lagen gelden?",
   "intro": "Welke machtigingslagen controleert Windows bij deze toegang?",
   "cats": [
    {
     "t": "NTFS",
     "d": "alleen NTFS",
     "c": "#14799B",
     "l": "toegang zonder share: alleen NTFS"
    },
    {
     "t": "Share + NTFS",
     "d": "beide lagen",
     "c": "#EB6008",
     "l": "toegang via SMB: share én NTFS"
    }
   ],
   "items": [
    {
     "q": "student.finance opent vanaf W11-01 <code>\\\\FS01\\Finance\\Budget-2027.txt</code>.",
     "a": "Share + NTFS",
     "e": "Via het netwerk: eerst de sharemachtiging, dan de NTFS-ACL. Alleen wat beide toestaan blijft over."
    },
    {
     "q": "Een beheerder opent op FS01 zelf <code>D:\\Shares\\Finance</code>.",
     "a": "NTFS",
     "e": "Lokaal passeer je de share niet."
    },
    {
     "q": "Een gebruiker opent <code>F:\\</code>; F: is gekoppeld aan \\\\FS01\\Finance.",
     "a": "Share + NTFS",
     "e": "Een stationsletter is alleen een koppeling naar het UNC-pad: dezelfde twee lagen."
    },
    {
     "q": "Een geplande taak op FS01 kopieert <code>D:\\Shares\\HR</code> naar <code>E:\\Backup</code>.",
     "a": "NTFS",
     "e": "Alles gebeurt lokaal op de server, zonder share."
    },
    {
     "q": "Een gebruiker opent <code>\\\\FS01\\HR$</code> (verborgen share).",
     "a": "Share + NTFS",
     "e": "Verborgen of niet: het is een SMB-share, dus share en NTFS gelden."
    },
    {
     "q": "Een gebruiker opent op FS01 via Remote Desktop <code>D:\\Shares\\Finance</code>.",
     "a": "NTFS",
     "e": "Strikvraag: hij werkt via RDP óp de server, met een lokaal pad. De sharemachtigingen gelden niet."
    },
    {
     "q": "Een gebruiker opent op FS01 via Remote Desktop <code>\\\\FS01\\Finance</code>.",
     "a": "Share + NTFS",
     "e": "Ook op de server zelf: wie het UNC-pad gebruikt, gaat via de SMB-server en dus via de share."
    },
    {
     "q": "Een gebruiker opent <code>\\\\FS01\\Finance</code> via een snelkoppeling op zijn bureaublad.",
     "a": "Share + NTFS",
     "e": "Een snelkoppeling bevat gewoon het UNC-pad: de toegang loopt via SMB, dus share en NTFS."
    }
   ]
  },
  "aa": {
   "t": "Authenticatie of autorisatie?",
   "intro": "Gaat het om ‘wie ben je?’ of om ‘wat mag je?’",
   "cats": [
    {
     "t": "Authenticatie",
     "d": "wie ben je?",
     "c": "#000000",
     "l": "het vaststellen van de identiteit"
    },
    {
     "t": "Autorisatie",
     "d": "wat mag je?",
     "c": "#919E2C",
     "l": "het controleren van machtigingen"
    }
   ],
   "items": [
    {
     "q": "Windows vraagt een Kerberos-ticket voor <b>cifs/FS01.hogent.local</b>.",
     "a": "Authenticatie",
     "e": "Met het ticket bewijst de gebruiker wie hij is tegenover FS01."
    },
    {
     "q": "FS01 controleert of DL_FS_Finance_RW <b>Change</b> heeft op de share.",
     "a": "Autorisatie",
     "e": "Een sharemachtiging nakijken = bepalen wat mag."
    },
    {
     "q": "Het venster ‘Enter network credentials’ verschijnt.",
     "a": "Authenticatie",
     "e": "Windows vraagt een identiteit omdat de huidige niet aanvaard werd of niet bruikbaar is."
    },
    {
     "q": "De NTFS-ACL bevat een <b>Deny Write</b> voor GG_Stagiairs.",
     "a": "Autorisatie",
     "e": "Een ACE in de DACL: dat bepaalt wat de identiteit mag."
    },
    {
     "q": "<code>Get-SmbConnection</code> toont <b>UserName HOGENT\\directeur01</b>.",
     "a": "Authenticatie",
     "e": "De identiteit waarmee de SMB-sessie werd opgebouwd."
    },
    {
     "q": "student.hr krijgt ‘Access is denied’ op \\\\FS01\\Finance.",
     "a": "Autorisatie",
     "e": "Hij is geauthenticeerd (anders vroeg Windows een wachtwoord), maar de machtigingen staan het niet toe."
    },
    {
     "q": "Effective Access berekent de rechten van student.finance.",
     "a": "Autorisatie",
     "e": "Effective Access combineert groepen, ACE's en share: wat mag deze gebruiker?"
    },
    {
     "q": "Na een nieuwe aanmelding staat DL_FS_Finance_RW in de token.",
     "a": "Authenticatie",
     "e": "De token ontstaat bij het aanmelden: identiteit plus groepen. De autorisatie gebruikt die token daarna."
    }
   ]
  },
  "share": {
   "t": "Welk sharerecht volstaat?",
   "intro": "Kies het kleinste sharerecht dat volstaat (least privilege).",
   "cats": [
    {
     "t": "Read",
     "d": "lezen",
     "c": "#14799B",
     "l": "alleen raadplegen"
    },
    {
     "t": "Change",
     "d": "inhoud beheren",
     "c": "#EB6008",
     "l": "lezen, maken, wijzigen, verwijderen"
    },
    {
     "t": "Full",
     "d": "ook share-ACL",
     "c": "#A6090F",
     "l": "ook de sharemachtigingen beheren"
    }
   ],
   "items": [
    {
     "q": "De directie raadpleegt budgetten maar wijzigt niets.",
     "a": "Read",
     "e": "Openen en lezen: Read."
    },
    {
     "q": "Finance-medewerkers maken, wijzigen en verwijderen documenten.",
     "a": "Change",
     "e": "Dagelijks inhoudsbeheer: Change. Full is te ruim."
    },
    {
     "q": "De fileserverbeheerders passen de sharemachtigingen aan.",
     "a": "Full",
     "e": "Alleen Full laat de share-ACL zelf wijzigen."
    },
    {
     "q": "Een medewerker moet bestanden kunnen hernoemen.",
     "a": "Change",
     "e": "Hernoemen is wijzigen: Change."
    },
    {
     "q": "Een externe auditor bekijkt tijdelijk de jaarrapporten.",
     "a": "Read",
     "e": "Raadplegen, tijdelijk: Read, via een eigen groep."
    },
    {
     "q": "Een medewerker ‘moet alles kunnen’ en zegt dat Change niet werkt.",
     "a": "Change",
     "e": "Strikvraag: als Change ‘niet werkt’ ligt de oorzaak elders (NTFS, groep, token). Full lost de oorzaak niet op."
    },
    {
     "q": "Een script kopieert elke nacht nieuwe bestanden naar de share.",
     "a": "Change",
     "e": "Bestanden maken is schrijven: Change. Het script beheert geen machtigingen."
    }
   ]
  },
  "ntfs": {
   "t": "Welke NTFS-machtiging past?",
   "intro": "Kies de standaardmachtiging die het best bij de functionele behoefte past.",
   "cats": [
    {
     "t": "Read & execute",
     "d": "lezen en doorlopen",
     "c": "#14799B",
     "l": "lezen, doorlopen en uitvoeren"
    },
    {
     "t": "Write",
     "d": "maken, schrijven",
     "c": "#919E2C",
     "l": "maken en schrijven, niet verwijderen"
    },
    {
     "t": "Modify",
     "d": "dagelijks beheer",
     "c": "#EB6008",
     "l": "lezen, maken, wijzigen en verwijderen"
    },
    {
     "t": "Full Control",
     "d": "ook ACL en eigenaar",
     "c": "#A6090F",
     "l": "ook machtigingen en eigenaarschap"
    }
   ],
   "items": [
    {
     "q": "Finance-medewerkers lezen, maken, wijzigen en verwijderen documenten.",
     "a": "Modify",
     "e": "Dagelijks inhoudsbeheer inclusief verwijderen: Modify."
    },
    {
     "q": "De directie leest de Finance-documenten.",
     "a": "Read & execute",
     "e": "Alleen lezen: Read & execute (RO in de groepsnaam)."
    },
    {
     "q": "Fileserverbeheerders passen de ACL van de afdelingsmappen aan.",
     "a": "Full Control",
     "e": "Machtigingen wijzigen kan alleen met Full Control."
    },
    {
     "q": "Een scanner mag nieuwe scans in een map plaatsen, maar niets verwijderen.",
     "a": "Write",
     "e": "Maken en schrijven zonder verwijderen: Write (samen met lezen indien nodig)."
    },
    {
     "q": "Een medewerker moet oude versies van zijn documenten kunnen wissen.",
     "a": "Modify",
     "e": "Verwijderen hoort niet bij Write: Modify."
    },
    {
     "q": "Een rapportagetool leest elke nacht de map uit.",
     "a": "Read & execute",
     "e": "Alleen lezen en doorlopen."
    },
    {
     "q": "Een teamleider wil ‘alles’, maar beheert de beveiliging niet.",
     "a": "Modify",
     "e": "Zonder beveiligingsbeheer volstaat Modify. Full Control is te ruim."
    }
   ]
  }
 },
 "matrix": [
  {
   "svg": {
    "u": "student.finance",
    "via": "UNC",
    "share": "Read",
    "ntfs": "Modify"
   },
   "q": "Wat kan student.finance via <code>\\\\FS01\\Finance</code>?",
   "o": [
    "Alleen lezen",
    "Lezen, maken, wijzigen en verwijderen",
    "Niets: de lagen spreken elkaar tegen",
    "Alles, ook machtigingen wijzigen"
   ],
   "a": 0,
   "w": [
    null,
    "Dat is NTFS Modify, maar de share laat via het netwerk alleen Read door.",
    "Lagen ‘spreken’ elkaar niet tegen: je neemt de doorsnede.",
    "Ook NTFS geeft geen Full Control."
   ],
   "e": "Share ∩ NTFS = Read ∩ Modify = <b>Read</b>."
  },
  {
   "svg": {
    "u": "student.finance",
    "via": "lokaal",
    "share": "Read",
    "ntfs": "Modify"
   },
   "q": "Dezelfde rechten, maar student.finance meldt lokaal aan op FS01 en opent <code>D:\\Shares\\Finance</code>. Wat kan hij?",
   "o": [
    "Lezen, maken, wijzigen en verwijderen",
    "Alleen lezen",
    "Niets: lokaal aanmelden is geweigerd",
    "Alleen maken, niet verwijderen"
   ],
   "a": 0,
   "w": [
    null,
    "Read komt van de share, en die passeert hij lokaal niet.",
    "In deze situatie is lokaal aanmelden toegestaan; het gaat om de bestandsrechten.",
    "Modify omvat verwijderen."
   ],
   "e": "Lokaal geldt alleen NTFS: <b>Modify</b>. Daarom bewijst een lokale test de sharelaag niet."
  },
  {
   "svg": {
    "u": "directeur01",
    "via": "UNC",
    "share": "Change",
    "ntfs": "Read & execute"
   },
   "q": "Wat kan directeur01 via <code>\\\\FS01\\Finance</code>?",
   "o": [
    "Alleen lezen",
    "Lezen en wijzigen",
    "Lezen en nieuwe bestanden maken",
    "Niets"
   ],
   "a": 0,
   "w": [
    null,
    "Change op de share helpt niet als NTFS alleen Read & execute geeft.",
    "Maken is schrijven; NTFS geeft dat niet.",
    "Beide lagen geven minstens lezen."
   ],
   "e": "Change ∩ Read & execute = <b>lezen</b>."
  },
  {
   "svg": {
    "u": "student.hr",
    "via": "UNC",
    "share": "Full",
    "ntfs": "geen regel"
   },
   "q": "Wat kan student.hr via <code>\\\\FS01\\Finance</code>?",
   "o": [
    "Niets: toegang geweigerd",
    "Alles: Full op de share",
    "Alleen de mapnamen zien",
    "Lezen, want Full omvat Read"
   ],
   "a": 0,
   "w": [
    null,
    "Full op de share is maar één laag. NTFS geeft hem niets.",
    "Zonder leesrecht op de map kan hij de inhoud niet opsommen.",
    "De share geeft Read, maar NTFS niet: de doorsnede is leeg."
   ],
   "e": "Full ∩ niets = <b>niets</b>."
  },
  {
   "svg": {
    "u": "student.finance",
    "via": "UNC",
    "share": "Change",
    "ntfs": "Modify + Deny Write"
   },
   "s": "<b>Situatie</b><br>student.finance zit in DL_FS_Finance_RW (Allow Modify)<br>en in GG_Stagiairs (Deny Write) op dezelfde map.",
   "q": "Kan student.finance via de share een nieuw bestand opslaan?",
   "o": [
    "Nee: de expliciete Deny blokkeert schrijven",
    "Ja: Allow Modify wint van Deny",
    "Ja: de share geeft Change",
    "Alleen als hij opnieuw aanmeldt"
   ],
   "a": 0,
   "w": [
    null,
    "Een toepasselijke expliciete Deny gaat vóór een Allow.",
    "De share is niet de beperkende laag; NTFS blokkeert.",
    "Opnieuw aanmelden verandert niets: hij zit al in beide groepen."
   ],
   "e": "Een expliciete Deny blokkeert het recht, ook als een andere groep het toestaat."
  },
  {
   "svg": {
    "u": "student01",
    "via": "UNC",
    "share": "Change",
    "ntfs": "RX + Write"
   },
   "s": "<b>Situatie</b><br>student01 zit in DL_FS_Projecten_RO (Read & execute)<br>en in DL_FS_Projecten_W (Write).",
   "q": "Wat kan student01 via <code>\\\\FS01\\Projecten</code>?",
   "o": [
    "Lezen, maken en schrijven, maar niet verwijderen",
    "Alleen lezen: de strengste groep telt",
    "Alles: twee groepen geven samen Modify",
    "Niets: twee groepen botsen"
   ],
   "a": 0,
   "w": [
    null,
    "Allow-rechten uit verschillende groepen tellen op; er is geen ‘strengste’ groep.",
    "Read & execute + Write is geen Modify: Delete ontbreekt.",
    "Allow-regels botsen niet, ze worden samengevoegd."
   ],
   "e": "Allow is cumulatief: RX + W. Verwijderen hoort bij Modify en ontbreekt."
  },
  {
   "svg": {
    "u": "student.finance",
    "via": "UNC",
    "share": "Change",
    "ntfs": "Modify"
   },
   "q": "Wat kan student.finance via <code>\\\\FS01\\Finance</code>, en wat niet?",
   "o": [
    "Inhoud beheren, maar geen machtigingen wijzigen",
    "Alles, ook de NTFS-ACL wijzigen",
    "Alleen lezen en maken",
    "Lezen, maar geen bestanden verwijderen"
   ],
   "a": 0,
   "w": [
    null,
    "Machtigingen wijzigen vraagt Full Control (NTFS) of Full (share).",
    "Wijzigen en verwijderen horen ook bij Change en Modify.",
    "Verwijderen zit in Change én in Modify."
   ],
   "e": "Change ∩ Modify = lezen, maken, wijzigen, hernoemen en verwijderen. <b>Geen</b> beveiligingsbeheer."
  },
  {
   "svg": {
    "u": "fsadmin",
    "via": "UNC",
    "share": "Read",
    "ntfs": "Full Control"
   },
   "q": "Kan fsadmin via <code>\\\\FS01\\Finance</code> een bestand verwijderen?",
   "o": [
    "Nee: de share laat alleen lezen door",
    "Ja: hij heeft Full Control",
    "Ja: beheerders negeren sharemachtigingen",
    "Alleen bestanden die hij zelf maakte"
   ],
   "a": 0,
   "w": [
    null,
    "Full Control is NTFS. Via de share blijft Read over.",
    "Sharemachtigingen gelden voor iedereen die via de share komt.",
    "Wie een bestand maakte, verandert niets aan de sharelaag."
   ],
   "e": "Read ∩ Full Control = <b>Read</b>. Lokaal op FS01 zou hij wel kunnen verwijderen."
  }
 ],
 "agdlp": {
  "order": [
   "Account: student.finance",
   "Global group: GG_Finance_Medewerkers",
   "Domain Local group: DL_FS_Finance_RW",
   "Permission: Modify op D:\\Shares\\Finance"
  ],
  "scopes": [
   {
    "k": "g1",
    "l": "GG_Finance_Medewerkers (alle Finance-medewerkers)",
    "a": "Global",
    "x": "Verzamelt accounts uit het eigen domein volgens hun rol."
   },
   {
    "k": "g2",
    "l": "DL_FS_Finance_RO (alleen lezen op Finance)",
    "a": "Domain Local",
    "x": "Stelt een toegangsniveau op één resource voor."
   },
   {
    "k": "g3",
    "l": "GG_Directie (alle directieleden)",
    "a": "Global",
    "x": "Een organisatorische rol."
   },
   {
    "k": "g4",
    "l": "DL_FS_Beheerders_FC (Full Control op de fileserver)",
    "a": "Domain Local",
    "x": "De groep die Full Control in de ACL krijgt."
   }
  ],
  "scopeOpts": [
   "Global",
   "Domain Local",
   "Universal"
  ],
  "why": {
   "Global": "Global verzamelt accounts met een gemeenschappelijke rol.",
   "Domain Local": "Domain Local draagt de machtiging op een resource.",
   "Universal": "Universal is voor meerdere domeinen in een forest; hier is er één domein."
  },
  "q": [
   {
    "s": "<b>Situatie</b><br>GG_Finance_Medewerkers: student.finance<br>GG_Directie: directeur01<br>GG_Finance_Medewerkers is lid van DL_FS_Finance_RW (Modify op Finance)<br>GG_Directie is lid van DL_FS_Finance_RO (Read & execute op Finance)",
    "q": "Wie kan in Finance bestanden <b>verwijderen</b> (NTFS)?",
    "o": [
     "Alleen student.finance",
     "student.finance en directeur01",
     "Alleen directeur01",
     "Niemand: alleen beheerders"
    ],
    "a": 0,
    "w": [
     null,
     "directeur01 krijgt via GG_Directie alleen Read & execute.",
     "directeur01 heeft alleen leesrechten.",
     "Modify omvat verwijderen."
    ],
    "e": "student.finance → GG_Finance_Medewerkers → DL_FS_Finance_RW → Modify."
   },
   {
    "s": "<b>Situatie</b><br>student.finance verhuist van Finance naar HR.<br>De ACL's van Finance en HR bevatten alleen DL_-groepen.<br>GG_Finance_Medewerkers is lid van DL_FS_Finance_RW; GG_HR_Medewerkers is lid van DL_FS_HR_RW.",
    "q": "Wat pas je aan?",
    "o": [
     "Zijn lidmaatschap: uit GG_Finance_Medewerkers, in GG_HR_Medewerkers",
     "De ACL van Finance en de ACL van HR",
     "De nesting van GG_Finance_Medewerkers in DL_FS_Finance_RW",
     "Zijn account rechtstreeks in DL_FS_HR_RW zetten"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is net wat AGDLP vermijdt: de ACL's blijven ongewijzigd.",
     "Dan verliezen alle Finance-medewerkers hun toegang.",
     "Rechtstreeks in een DL-groep is een uitzondering; zijn rol is HR."
    ],
    "e": "Personeelswijziging = groepslidmaatschap. Daarna opnieuw aanmelden en positief én negatief testen."
   },
   {
    "s": "<b>Situatie</b><br>Externe auditors moeten tijdelijk de map Finance lezen.<br>Er bestaat al DL_FS_Finance_RO met Read & execute op Finance.<br>De auditors zitten in GG_Externe_Auditors.",
    "q": "Wat is de beste aanpak?",
    "o": [
     "GG_Externe_Auditors lid maken van DL_FS_Finance_RO",
     "GG_Externe_Auditors rechtstreeks in de NTFS-ACL zetten",
     "De auditors lid maken van GG_Directie",
     "Een nieuwe share Finance-Audit maken"
    ],
    "a": 0,
    "w": [
     null,
     "Een globale groep hoort niet in de ACL; daarvoor dient de DL-groep.",
     "Dan krijgen ze alles wat de directie krijgt, ook op andere resources.",
     "Een tweede share naar dezelfde map lost niets op en maakt het onoverzichtelijker."
    ],
    "e": "Meerdere rollen hetzelfde toegangsniveau geven: beide GG-groepen in dezelfde DL-groep."
   },
   {
    "s": "<b>Situatie</b><br>Get-ADGroupMember DL_FS_Finance_RW toont: GG_Finance_Medewerkers<br>Get-ADGroupMember GG_Finance_Medewerkers toont: student.finance",
    "q": "Wat toont <code>Get-ADGroupMember DL_FS_Finance_RW -Recursive</code>?",
    "o": [
     "student.finance",
     "GG_Finance_Medewerkers",
     "GG_Finance_Medewerkers en student.finance",
     "Niets: -Recursive werkt alleen op OU's"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is het resultaat zonder -Recursive.",
     "-Recursive toont alleen de uiteindelijke accounts, niet de tussenliggende groepen.",
     "-Recursive volgt geneste groepen."
    ],
    "e": "-Recursive volgt de nesting en toont de accounts die uiteindelijk lid zijn."
   },
   {
    "s": "<b>Situatie</b><br>De groep DL_FS_Finance_RW heeft leden, maar komt in geen enkele share- of NTFS-ACL voor.",
    "q": "Welke toegang geeft de groep tot Finance?",
    "o": [
     "Geen",
     "Read-write, zoals de naam zegt",
     "Read: lidmaatschap geeft altijd leesrecht",
     "Modify, maar pas na opnieuw aanmelden"
    ],
    "a": 0,
    "w": [
     null,
     "Een naam is geen machtiging.",
     "Lidmaatschap alleen geeft niets.",
     "Opnieuw aanmelden zet de groep in de token, maar de groep heeft nergens rechten."
    ],
    "e": "Een groep geeft pas toegang als ze met een machtiging in een ACL staat."
   }
  ]
 },
 "smb": {
  "order": [
   "Gebruiker opent \\\\FS01\\Finance",
   "DNS vertaalt FS01 naar een IP-adres",
   "TCP-verbinding met poort 445",
   "Client en server onderhandelen een SMB-dialect",
   "Authenticatie van de gebruiker",
   "Een SMB-sessie ontstaat",
   "Verbinding met de share Finance",
   "Share- en NTFS-machtigingen worden gecontroleerd",
   "Toegestane bestandsverzoeken worden uitgevoerd"
  ],
  "q": [
   {
    "s": "<b>Situatie</b><br>student.finance opent \\\\FS01\\Finance\\Budgetten.<br>Resolve-DnsName FS01 lukt; Test-NetConnection FS01 -Port 445 geeft True.<br>Windows meldt: Access is denied.",
    "q": "Welke stap moet je nog onderzoeken?",
    "o": [
     "De autorisatie: share-, NTFS-machtigingen en groepen",
     "De naamomzetting van FS01",
     "De TCP-verbinding met poort 445",
     "Of SMB 1 aan staat"
    ],
    "a": 0,
    "w": [
     null,
     "DNS is al bewezen door Resolve-DnsName.",
     "Poort 445 is al bewezen door TcpTestSucceeded True.",
     "SMB 1 inschakelen is nooit de oplossing; Access denied is een autorisatieprobleem."
    ],
    "e": "‘Access is denied’ betekent dat de verbinding tot de autorisatie kwam. Onderzoek share, NTFS, groepen en token."
   },
   {
    "q": "Welke vraag beantwoordt authenticatie?",
    "o": [
     "Wie ben je?",
     "Wat mag je?",
     "Welke versie spreek je?",
     "Waar staat de server?"
    ],
    "a": 0,
    "w": [
     null,
     "Dat is autorisatie.",
     "Dat is de dialectonderhandeling.",
     "Dat is naamomzetting (DNS)."
    ],
    "e": "Authenticatie stelt de identiteit vast; autorisatie bepaalt daarna wat die identiteit mag."
   },
   {
    "s": "<b>Situatie</b><br>Op W11-01 werkt ping FS01.<br>Test-NetConnection FS01 -Port 445 geeft TcpTestSucceeded : False.",
    "q": "Wat is de meest waarschijnlijke oorzaak?",
    "o": [
     "Een firewall blokkeert TCP 445 of FS01 biedt geen SMB aan",
     "De sharemachtigingen zijn te streng",
     "student.finance zit niet in de juiste groep",
     "DNS geeft een verkeerd IP-adres"
    ],
    "a": 0,
    "w": [
     null,
     "Machtigingen komen pas na een geslaagde TCP-verbinding.",
     "Groepen spelen pas bij de autorisatie.",
     "Ping op de naam lukte; het IP is dus bereikbaar. Controleer het wel met Resolve-DnsName."
    ],
    "e": "Ping test ICMP, niet SMB. Een dichte poort 445 wijst op firewall of dienst."
   },
   {
    "q": "Wat is het verschil tussen SMB signing en SMB encryption?",
    "o": [
     "Signing beschermt tegen wijzigen, encryption tegen meelezen",
     "Signing versleutelt, encryption ondertekent",
     "Beide zijn hetzelfde onder een andere naam",
     "Signing is voor SMB 1, encryption voor SMB 3"
    ],
    "a": 0,
    "w": [
     null,
     "Omgekeerd.",
     "Het zijn verschillende functies die je afzonderlijk instelt.",
     "Signing bestaat in alle moderne versies; encryption vanaf SMB 3."
    ],
    "e": "Signing: authenticiteit en integriteit. Encryption: vertrouwelijkheid. Geen van beide vervangt machtigingen."
   }
  ]
 },
 "uitvoer": [
  {
   "out": "PS C:\\> icacls D:\\Shares\\Finance\\Budgetten\nD:\\Shares\\Finance\\Budgetten HOGENT\\DL_FS_Beheerders_FC:(I)(OI)(CI)(F)\n                             HOGENT\\DL_FS_Finance_RW:(I)(OI)(CI)(M)\n                             HOGENT\\DL_FS_Finance_RO:(I)(OI)(CI)(RX)\n                             NT AUTHORITY\\SYSTEM:(I)(OI)(CI)(F)",
   "q": "Wat zegt <b>(I)</b> bij elke regel?",
   "o": [
    "De regel is geërfd van een bovenliggende map",
    "De regel is ongeldig",
    "De regel geldt alleen voor deze map",
    "De regel is expliciet ingesteld op Budgetten"
   ],
   "a": 0,
   "w": [
    null,
    "(I) betekent inherited, niet invalid.",
    "Het toepassingsgebied lees je af aan (OI) en (CI).",
    "Expliciete regels hebben géén (I)."
   ],
   "e": "(I) = inherited. (OI) = ook bestanden, (CI) = ook submappen."
  },
  {
   "out": "PS C:\\> Get-SmbShareAccess -Name Finance\nName    ScopeName AccountName                AccessControlType AccessRight\n----    --------- -----------                ----------------- -----------\nFinance *         HOGENT\\DL_FS_Finance_RW     Allow             Read\nFinance *         HOGENT\\DL_FS_Finance_RO     Allow             Read\nFinance *         HOGENT\\DL_FS_Beheerders_FC  Allow             Full",
   "s": "<b>Situatie</b><br>NTFS geeft DL_FS_Finance_RW Modify op D:\\Shares\\Finance.<br>student.finance zit (via zijn rolgroep) in DL_FS_Finance_RW.",
   "q": "Wat kan student.finance via de share?",
   "o": [
    "Alleen lezen",
    "Lezen, maken, wijzigen en verwijderen",
    "Niets",
    "Machtigingen beheren"
   ],
   "a": 0,
   "w": [
    null,
    "Dat is wat NTFS toestaat; de share laat maar Read door.",
    "Beide lagen geven lezen.",
    "Full staat alleen bij de beheerdersgroep."
   ],
   "e": "DL_FS_Finance_RW heeft op de share maar Read: dat moet Change zijn."
  },
  {
   "out": "PS C:\\> whoami\nhogent\\student.hr\nPS C:\\> Get-SmbConnection | Select ServerName, ShareName, UserName\nServerName ShareName UserName\n---------- --------- --------\nFS01       Finance   HOGENT\\directeur01",
   "q": "Wat is hier aan de hand?",
   "o": [
    "De SMB-sessie gebruikt een andere identiteit dan de aangemelde gebruiker",
    "student.hr zit in GG_Directie",
    "De share Finance is verkeerd geconfigureerd",
    "De token van student.hr is verlopen"
   ],
   "a": 0,
   "w": [
    null,
    "Daarvoor zou whoami /groups nodig zijn; de uitvoer toont iets anders.",
    "De share kan correct zijn: de identiteit klopt niet.",
    "Tokens verlopen niet zo; de sessie gebruikt een ander account."
   ],
   "e": "Een oude verbinding of opgeslagen referentie (net use /user:…) gebruikt directeur01. Verbreek die verbinding; pas geen ACL aan."
  },
  {
   "out": "PS C:\\> whoami /groups | Select-String 'FS_|GG_'\nHOGENT\\GG_Finance_Medewerkers   Group  S-1-5-21-...-1105  Mandatory group, Enabled by default, Enabled group",
   "s": "<b>Situatie</b><br>In AD is GG_Finance_Medewerkers lid van DL_FS_Finance_RW.<br>Die nesting werd tien minuten geleden toegevoegd. De gebruiker is sinds vanochtend aangemeld.",
   "q": "Waarom ontbreekt DL_FS_Finance_RW?",
   "o": [
    "De token dateert van vóór de wijziging",
    "Geneste groepen verschijnen nooit in whoami",
    "DL-groepen staan nooit in de token",
    "De nesting is mislukt"
   ],
   "a": 0,
   "w": [
    null,
    "whoami /groups toont ook groepen via nesting.",
    "Domeinlokale groepen staan wel in de token voor resources in het domein.",
    "Volgens de situatie bestaat de nesting in AD; de sessie is gewoon ouder."
   ],
   "e": "Afmelden en opnieuw aanmelden: de nieuwe token bevat DL_FS_Finance_RW."
  },
  {
   "out": "PS C:\\> Test-NetConnection FS01 -Port 445\nComputerName           : FS01\nRemoteAddress          : 192.168.60.20\nRemotePort             : 445\nPingSucceeded          : True\nTcpTestSucceeded       : False",
   "q": "Welke conclusie is juist?",
   "o": [
    "FS01 is bereikbaar, maar SMB op poort 445 niet",
    "DNS werkt niet",
    "De sharemachtigingen weigeren de gebruiker",
    "Alles werkt: ping is gelukt"
   ],
   "a": 0,
   "w": [
    null,
    "RemoteAddress is ingevuld: de naam werd omgezet.",
    "Zover komt de verbinding niet.",
    "Ping test geen SMB."
   ],
   "e": "Onderzoek de firewallregel File and Printer Sharing (SMB-In) en of de Server-dienst draait."
  },
  {
   "out": "PS C:\\> Get-SmbShare -Name Finance | Select Name, Path\nName    Path\n----    ----\nFinance D:\\Data\\Finance-oud",
   "s": "<b>Situatie</b><br>Het toegangsplan zegt: \\\\FS01\\Finance → D:\\Shares\\Finance.<br>De beheerder paste de ACL van D:\\Shares\\Finance correct aan, maar gebruikers zien oude bestanden.",
   "q": "Wat is het probleem?",
   "o": [
    "De share verwijst naar een andere map dan de beheerder aanpaste",
    "De ACL van D:\\Shares\\Finance is niet doorgevoerd",
    "De gebruikers hebben een oude token",
    "De share is verborgen (Finance$)"
   ],
   "a": 0,
   "w": [
    null,
    "De ACL kan perfect zijn; ze staat alleen op een map die niet gedeeld wordt.",
    "Een oude token verklaart geen oude bestanden.",
    "Een verborgen share toont gewoon de bestanden van haar pad."
   ],
   "e": "Controleer altijd de koppeling sharenaam → lokaal pad met Get-SmbShare. Anders onderzoek je de verkeerde ACL."
  },
  {
   "out": "PS C:\\> (Get-Acl D:\\Shares\\Finance\\Budgetten).AreAccessRulesProtected\nTrue",
   "q": "Wat betekent dit?",
   "o": [
    "De overerving is op Budgetten uitgeschakeld",
    "Budgetten is tegen verwijderen beveiligd",
    "Budgetten heeft een expliciete Deny",
    "Budgetten is versleuteld"
   ],
   "a": 0,
   "w": [
    null,
    "Het gaat over toegangsregels en overerving, niet over verwijderen.",
    "Een Deny zie je in de toegangsregels zelf.",
    "Versleuteling is iets anders."
   ],
   "e": "True = de ACL ontvangt geen geërfde regels van Finance meer. Wijzigingen op Finance komen niet meer door."
  },
  {
   "out": "PS C:\\> icacls D:\\Shares\\Finance\nD:\\Shares\\Finance BUILTIN\\Administrators:(I)(OI)(CI)(F)\n                  NT AUTHORITY\\SYSTEM:(I)(OI)(CI)(F)\n                  CREATOR OWNER:(I)(OI)(CI)(IO)(F)\n                  BUILTIN\\Users:(I)(OI)(CI)(RX)\n                  BUILTIN\\Users:(I)(CI)(AD)\n                  BUILTIN\\Users:(I)(CI)(IO)(WD)",
   "s": "<b>Situatie</b><br>Deze map werd net aangemaakt op een nieuw volume D:.<br>FS01 is lid van het domein; Domain Users is lid van de lokale groep Users.",
   "q": "Wie kan op NTFS-niveau de bestanden in Finance lezen?",
   "o": [
    "Elke domeingebruiker",
    "Alleen Administrators en SYSTEM",
    "Alleen de maker van de map",
    "Niemand tot je een groep toevoegt"
   ],
   "a": 0,
   "w": [
    null,
    "BUILTIN\\Users heeft ook Read & execute.",
    "CREATOR OWNER krijgt rechten op wat hij maakt, maar Users leest alles.",
    "De geërfde regels geven Users al leesrechten."
   ],
   "e": "Users:(I)(OI)(CI)(RX) is geërfd van de root van D:. Daarom schakel je op een afdelingsmap de overerving bewust uit of beperk je ze."
  }
 ],
 "bewijs": [
  {
   "q": "‘Ping FS01 lukt, dus SMB werkt.’",
   "o": [
    "Niet overtuigend: ping test ICMP, niet TCP 445",
    "Overtuigend: de server antwoordt",
    "Overtuigend als ping snel is",
    "Niet overtuigend: ping test alleen DNS"
   ],
   "a": 0,
   "w": [
    null,
    "Antwoorden op ping zegt niets over poort 445.",
    "Snelheid verandert niet wat er getest wordt.",
    "Ping gebruikt DNS, maar test vooral ICMP-bereikbaarheid."
   ],
   "e": "Gebruik Test-NetConnection FS01 -Port 445."
  },
  {
   "q": "‘De beheerder kan op FS01 het bestand wijzigen, dus student.finance kan het ook.’",
   "o": [
    "Niet overtuigend: andere identiteit en andere toegangsweg",
    "Overtuigend: zelfde bestand",
    "Overtuigend als de beheerder in Finance zit",
    "Niet overtuigend: lokaal geldt NTFS niet"
   ],
   "a": 0,
   "w": [
    null,
    "Hetzelfde bestand, maar andere rechten en een andere weg.",
    "Een beheerder heeft hoe dan ook Full Control.",
    "Lokaal geldt NTFS juist wel; de share niet."
   ],
   "e": "Test met het echte account via het UNC-pad."
  },
  {
   "q": "‘Get-ADGroupMember toont student.finance in GG_Finance_Medewerkers, dus hij heeft toegang.’",
   "o": [
    "Niet overtuigend: de nesting, de ACL en de token zijn niet bewezen",
    "Overtuigend: hij is lid",
    "Overtuigend als de groep een duidelijke naam heeft",
    "Niet overtuigend: Get-ADGroupMember toont alleen computers"
   ],
   "a": 0,
   "w": [
    null,
    "Lid zijn van een rolgroep geeft op zich niets.",
    "Een naam is geen machtiging.",
    "Get-ADGroupMember toont gebruikers, groepen en computers."
   ],
   "e": "Volg de hele keten: GG → DL → ACL → token → test."
  },
  {
   "q": "‘student.hr krijgt Access denied op Finance en student.finance kan er schrijven.’",
   "o": [
    "Overtuigend: positieve en negatieve test met echte accounts",
    "Niet overtuigend: je moet ook lokaal testen",
    "Niet overtuigend: alleen Effective Access telt",
    "Overtuigend, maar alleen als de beheerder ook kan schrijven"
   ],
   "a": 0,
   "w": [
    null,
    "Een lokale test zegt niets over de share.",
    "Effective Access is een hulpmiddel; de praktische test is het echte bewijs.",
    "Dat de beheerder kan schrijven bewijst niets over gebruikers."
   ],
   "e": "Zo hoort testbewijs eruit te zien: wat moet slagen én wat moet falen, via de normale toegangsweg."
  },
  {
   "q": "‘Get-SmbShareAccess toont DL_FS_Finance_RW Change, dus Finance-medewerkers kunnen wijzigen.’",
   "o": [
    "Niet overtuigend: NTFS en de groepsketen zijn niet bewezen",
    "Overtuigend: Change omvat wijzigen",
    "Overtuigend als de share bestaat",
    "Niet overtuigend: Change is niet genoeg om te wijzigen"
   ],
   "a": 0,
   "w": [
    null,
    "Change op de share is maar één laag.",
    "Het bestaan van de share bewijst niets over NTFS.",
    "Change is voldoende op de sharelaag."
   ],
   "e": "Share ∩ NTFS: controleer ook icacls en test met het account."
  },
  {
   "q": "‘Op W11-01 toont whoami /groups DL_FS_Finance_RW in de sessie van student.finance.’",
   "o": [
    "Overtuigend voor de token, niet voor de ACL",
    "Overtuigend voor de hele toegangsketen",
    "Niet overtuigend: whoami toont alleen lokale groepen",
    "Niet overtuigend: je moet dit op DC01 doen"
   ],
   "a": 0,
   "w": [
    null,
    "De token klopt, maar staat de groep met de juiste machtiging in de ACL?",
    "whoami /groups toont ook domeingroepen.",
    "De token van de gebruiker zie je alleen in zijn eigen sessie."
   ],
   "e": "Elke controle bewijst één schakel."
  }
 ],
 "overerving": [
  {
   "s": "<b>Situatie</b><br>Op D:\\Shares\\Finance staat: DL_FS_Finance_RW Allow Modify, van toepassing op ‘This folder, subfolders and files’.<br>Een gebruiker maakt de map D:\\Shares\\Finance\\Jaarafsluiting.",
   "q": "Welke regel krijgt Jaarafsluiting?",
   "o": [
    "DL_FS_Finance_RW Modify, als geërfde regel",
    "Geen: nieuwe mappen beginnen leeg",
    "DL_FS_Finance_RW Modify, als expliciete regel",
    "Alleen de maker krijgt rechten"
   ],
   "a": 0,
   "w": [
    null,
    "Overerfbare regels werken automatisch door naar nieuwe objecten.",
    "Hij erft ze; expliciet is iets wat je rechtstreeks op het object zet.",
    "CREATOR OWNER kan extra rechten geven, maar de geërfde regel komt er ook."
   ],
   "e": "Overerfbare regels werken door naar nieuwe submappen en bestanden. icacls toont (I)."
  },
  {
   "s": "<b>Situatie</b><br>Finance\\Directie erft DL_FS_Finance_RW Modify van Finance.<br>Alleen de directie mag in Directie werken.",
   "q": "Waarom volstaat het niet om alleen DL_FS_Finance_Directie_RW toe te voegen?",
   "o": [
    "De geërfde Finance-regel blijft gelden",
    "Een domeinlokale groep mag niet op een submap",
    "Een submap kan maar één regel bevatten",
    "De nieuwe regel werkt pas na een herstart"
   ],
   "a": 0,
   "w": [
    null,
    "Domeinlokale groepen mag je op elke map gebruiken.",
    "Een ACL kan veel ACE's bevatten.",
    "NTFS-wijzigingen gelden meteen voor nieuwe toegangscontroles."
   ],
   "e": "Een extra Allow neemt niets weg. De Finance-regel moet je bewust weghalen."
  },
  {
   "q": "Je schakelt de overerving op een map uit. Welke twee keuzes biedt Windows?",
   "o": [
    "Geërfde regels converteren naar expliciete, of ze allemaal verwijderen",
    "Regels behouden als geërfd, of ze converteren naar Deny",
    "Alleen de eigenaar behouden, of iedereen Full Control geven",
    "Overerving tijdelijk of permanent uitschakelen"
   ],
   "a": 0,
   "w": [
    null,
    "Er is geen keuze om regels in Deny om te zetten.",
    "Zo'n keuze bestaat niet en zou gevaarlijk zijn.",
    "Uitschakelen is gewoon uitschakelen tot je het weer inschakelt."
   ],
   "e": "Convert behoudt alles (nu expliciet); Remove haalt alle geërfde regels weg, ook beheertoegang."
  },
  {
   "q": "Wat is het risico van ‘Remove all inherited permissions’?",
   "o": [
    "Gebruikers en zelfs beheerders kunnen hun toegang verliezen",
    "De map wordt verwijderd",
    "De share wordt uitgeschakeld",
    "Er is geen risico: expliciete regels blijven"
   ],
   "a": 0,
   "w": [
    null,
    "Het gaat om regels, niet om de map zelf.",
    "De share blijft bestaan; alleen NTFS verandert.",
    "Als er geen expliciete regels waren, blijft er niets over."
   ],
   "e": "Controleer vooraf welke beheertoegang moet overblijven."
  },
  {
   "s": "<b>Situatie</b><br>Op D:\\Shares\\Finance staat DL_FS_Finance_RW met Modify, voor deze map, submappen en bestanden.<br>De submap Budgetten erft gewoon van Finance.<br>De beheerder verandert op Finance het recht van DL_FS_Finance_RW naar Read & execute.",
   "q": "Wat gebeurt er op Budgetten?",
   "o": [
    "Budgetten volgt automatisch: de groep heeft daar nu ook Read & execute",
    "Budgetten houdt Modify tot je de map opnieuw aanmaakt",
    "Alleen nieuwe bestanden in Budgetten krijgen Read & execute",
    "Budgetten verandert pas na een herstart van FS01"
   ],
   "a": 0,
   "w": [
    null,
    "Een geërfde regel wordt niet bewaard als kopie; ze volgt de bron.",
    "Ook bestaande objecten die erven, nemen de wijziging over.",
    "NTFS-wijzigingen gelden meteen."
   ],
   "e": "Geërfde regels volgen de bovenliggende map. Daarom beheer je bij voorkeur één ACL bovenaan."
  },
  {
   "s": "<b>Situatie</b><br>icacls D:\\Shares\\Finance\\Directie toont: HOGENT\\DL_FS_Finance_RW:(OI)(CI)(M), zonder (I).<br>(Get-Acl D:\\Shares\\Finance\\Directie).AreAccessRulesProtected geeft True.<br>Op Finance staat dezelfde regel.",
   "q": "Hoe is deze regel er waarschijnlijk gekomen?",
   "o": [
    "Bij het uitschakelen van de overerving werd ‘converteren’ gekozen",
    "Ze wordt op dit moment nog geërfd van Finance",
    "De share Finance heeft ze op de map gezet",
    "Windows zet ze standaard op elke submap"
   ],
   "a": 0,
   "w": [
    null,
    "Een geërfde regel heeft (I), en de overerving staat uit (True).",
    "Sharemachtigingen komen nooit in de NTFS-ACL.",
    "Windows zet geen afdelingsgroepen op mappen."
   ],
   "e": "Converteren maakt van de geërfde regels expliciete regels. Ze blijven gelden tot je ze bewust verwijdert."
  },
  {
   "q": "Waarom kan je een geërfde regel op een submap niet zomaar verwijderen?",
   "o": [
    "Ze hoort bij de bovenliggende map: pas ze daar aan of schakel de overerving uit",
    "Geërfde regels zijn alleen-lezen voor iedereen behalve SYSTEM",
    "Geërfde regels kunnen alleen via de share verwijderd worden",
    "Dat kan pas na een herstart van de server"
   ],
   "a": 0,
   "w": [
    null,
    "Een beheerder kan de ACL wel wijzigen; de regel staat alleen niet op dit object zelf.",
    "Sharemachtigingen en NTFS zijn aparte lagen.",
    "Er is geen herstart nodig."
   ],
   "e": "Op de submap is de regel een gevolg, geen instelling. Wijzig de bron, of maak de submap zelfstandig (overerving uit, converteren) en verwijder dan gericht."
  },
  {
   "s": "<b>Situatie</b><br>Op D:\\Shares\\Finance\\Budgetten werd de overerving uitgeschakeld met ‘Remove all inherited permissions’.<br>Er staan nu alleen DL_FS_Beheerders_FC en SYSTEM.<br>Finance-medewerkers en de directie krijgen ‘Access denied’ op Budgetten; de rest van Finance werkt.",
   "q": "Wat is de beste oplossing?",
   "o": [
    "De overerving opnieuw inschakelen en de expliciete regels nakijken",
    "Everyone Full Control geven op Budgetten",
    "De Finance-medewerkers rechtstreeks toevoegen",
    "De share Finance opnieuw aanmaken"
   ],
   "a": 0,
   "w": [
    null,
    "Dat verbergt het probleem en geeft iedereen toegang.",
    "Rechtstreekse toekenningen vermijd je; de groepen staan al goed op Finance.",
    "De share is in orde: de rest van Finance werkt."
   ],
   "e": "Met overerving aan krijgt Budgetten opnieuw de regels van Finance. Test daarna met een RW- en een RO-gebruiker."
  }
 ],
 "exit1": [
  {
   "q": "Wat is het verschil tussen <code>D:\\Shares\\Finance</code> en <code>\\\\FS01\\Finance</code>?",
   "o": [
    "Lokale map tegenover netwerkpublicatie van die map",
    "Origineel tegenover kopie van de bestanden",
    "NTFS-map tegenover FAT-map",
    "Er is geen verschil"
   ],
   "a": 0,
   "w": [
    null,
    "Een share kopieert niets.",
    "Beide staan op NTFS.",
    "De toegangsweg en de lagen verschillen."
   ],
   "e": "De share is een toegangspunt naar de lokale map."
  },
  {
   "s": "<b>Situatie</b><br>Op W11-01: Resolve-DnsName FS01 lukt.<br>Test-NetConnection FS01 -Port 445 geeft True.<br>\\\\FS01\\Finance geeft ‘The network name cannot be found’.",
   "q": "Wat controleer je eerst?",
   "o": [
    "Of de share Finance bestaat (Get-SmbShare op FS01)",
    "De NTFS-ACL van D:\\Shares\\Finance",
    "De groepen van de gebruiker",
    "Het SMB-dialect"
   ],
   "a": 0,
   "w": [
    null,
    "Een ACL-probleem geeft ‘Access is denied’, niet ‘name cannot be found’.",
    "Groepen spelen pas bij autorisatie.",
    "Het dialect verklaart geen ontbrekende naam."
   ],
   "e": "DNS en poort zijn bewezen; de sharenaam is de volgende schakel."
  },
  {
   "q": "Waarom is <code>Finance$</code> geen beveiligingsmaatregel?",
   "o": [
    "Wie de naam kent, kan nog altijd verbinding maken",
    "Het dollarteken werkt alleen op SMB 1",
    "Verborgen shares hebben geen machtigingen",
    "Het is wél beveiligd: niemand kan erin"
   ],
   "a": 0,
   "w": [
    null,
    "Verborgen shares werken in alle versies.",
    "Ze hebben gewoon share- en NTFS-machtigingen.",
    "Met het juiste pad en de rechten kan je erin."
   ],
   "e": "Verborgen ≠ beveiligd."
  },
  {
   "q": "Welk commando toont onder welke identiteit de client met FS01 verbonden is?",
   "o": [
    "Get-SmbConnection",
    "Get-SmbShare",
    "whoami",
    "Resolve-DnsName FS01"
   ],
   "a": 0,
   "w": [
    null,
    "Get-SmbShare draait op de server en toont shares, geen sessies.",
    "whoami toont de interactieve gebruiker, niet noodzakelijk die van de SMB-sessie.",
    "Dat is naamomzetting."
   ],
   "e": "Get-SmbConnection toont ServerName, ShareName, UserName, Dialect."
  },
  {
   "s": "<b>Situatie</b><br>Je maakt een share met New-SmbShare -Name HR -Path D:\\Shares\\HR, zonder parameters voor toegang.",
   "q": "Welke sharemachtiging staat er dan?",
   "o": [
    "Everyone Read",
    "Everyone Full",
    "Geen enkele",
    "Domain Admins Full"
   ],
   "a": 0,
   "w": [
    null,
    "Full is de standaard van de wizard in Server Manager.",
    "Een share zonder regel zou niemand toelaten; New-SmbShare zet Everyone Read.",
    "Er komt geen aparte regel voor Domain Admins."
   ],
   "e": "Controleer na het aanmaken altijd met Get-SmbShareAccess."
  }
 ],
 "intros": {
  "sorteer": {
   "t": "Sorteer",
   "p": [
    "Je krijgt een situatie en kiest de categorie die past.",
    "Bij een fout zie je waarom je keuze minder past én waarom het juiste antwoord past."
   ],
   "cs": "lagen"
  },
  "matrix": {
   "t": "Toegangsmatrix",
   "p": [
    "Elke vraag toont een tekening van de toegangsweg: de gebruiker, de sharepoort en de NTFS-poort.",
    "Voorspel wat er via die weg overblijft. Lokaal is er geen sharepoort."
   ],
   "cs": "lagen"
  },
  "agdlp": {
   "t": "Bouw de AGDLP-keten",
   "p": [
    "Stap 1: zet de keten in de juiste volgorde.",
    "Stap 2: kies voor elke groep het bereik.",
    "Stap 3: vijf vragen over wie welke toegang krijgt."
   ],
   "cs": "agdlp"
  },
  "smb": {
   "t": "Hoe werkt SMB?",
   "p": [
    "Stap 1: zet de negen stappen van een SMB-verbinding in volgorde.",
    "Stap 2: vier vragen over wat elke stap bewijst."
   ],
   "cs": "smb"
  },
  "exit1": {
   "t": "Exitcheck blok 1",
   "p": [
    "Vijf vragen over paden, shares en de SMB-keten."
   ],
   "cs": "smb"
  },
  "uitvoer": {
   "t": "Lees de uitvoer",
   "p": [
    "Je krijgt echte uitvoer van icacls, Get-SmbShareAccess, Get-SmbConnection en andere commando's.",
    "Wat lees je eruit af?"
   ],
   "cs": "cmd"
  },
  "bewijs": {
   "t": "Welk bewijs is overtuigend?",
   "p": [
    "Een collega trekt een conclusie. Is het bewijs overtuigend?",
    "Elke controle bewijst één schakel van de toegangsketen."
   ],
   "cs": "ladder"
  },
  "overerving": {
   "t": "Overerving en uitzonderingen",
   "p": [
    "Acht vragen over geërfde en expliciete regels, overerving uitschakelen en een bewuste uitzondering op een submap."
   ],
   "cs": "acl"
  },
  "demo": {
   "t": "Voorspel de demo",
   "p": [
    "Kies de demo die de docent toont en voorspel vóór het commando uitgevoerd wordt.",
    "Na de demo tik je op ‘toon het bewijs’ en zie je of je voorspelling klopte."
   ],
   "cs": "lab"
  },
  "status": {
   "t": "Status",
   "p": [
    "Kies je status en leg je gsm naast je laptop. De docent ziet zo wie hulp nodig heeft.",
    "Bij elke status staan drie vragen om jezelf verder te helpen."
   ],
   "cs": "ladder"
  },
  "fout": {
   "t": "Breek het bij je buur",
   "p": [
    "De saboteur trekt een foutkaart en voert de fout uit bij de buur (2 min).",
    "Het slachtoffer krijgt alleen het kaartnummer en een melding van een gebruiker, en werkt het ticket af."
   ],
   "cs": "ladder"
  },
  "ticket": {
   "t": "Ticketformulier",
   "p": [
    "Feiten → verwacht → bewijs per laag → hypothese → oplossing → nacontrole.",
    "Alles blijft op dit toestel. Kopieer of download het voor je werkdocument."
   ],
   "cs": "ladder"
  },
  "werkdoel": {
   "t": "Werkdoel en testmatrix",
   "p": [
    "Noteer vóór je test wat per account moet lukken en wat moet falen.",
    "Vul daarna in wat je zag."
   ],
   "cs": "lab"
  },
  "exitticket": {
   "t": "Exit ticket",
   "p": [
    "Drie meerkeuzevragen en één open vraag."
   ],
   "cs": "ladder"
  }
 },
 "infoTip": "Twijfel je? Tik rechtsboven op <b>ⓘ Info</b>. Daar vind je de theorie en de labomgeving. Dat is geen spieken: ook een systeembeheerder zoekt dingen op in de documentatie.",
 "cheat": [
  {
   "id": "lab",
   "t": "Labomgeving",
   "h": "<p>Domein <b>hogent.local</b> (NetBIOS HOGENT) · netwerk <code>192.168.60.0/24</code>, geen gateway.</p><table><tr><th>Machine</th><th>IP</th><th>Rol</th></tr><tr><td>DC01</td><td>192.168.60.10</td><td>AD DS + DNS voor hogent.local</td></tr><tr><td>FS01</td><td>192.168.60.20</td><td>fileserver (File Server-rol), datavolume D:</td></tr><tr><td>W11-01</td><td>192.168.60.30</td><td>domeinclient, testen via UNC</td></tr></table><p>D:\\Shares\\Finance → <code>\\\\FS01\\Finance</code><br>D:\\Shares\\HR → <code>\\\\FS01\\HR</code></p><ul><li><b>student.finance</b>: Finance-medewerker, moet Finance lezen, maken, wijzigen en verwijderen</li><li><b>student.hr</b>: HR-medewerker, moet HR wijzigen, mag Finance niet openen</li><li><b>directeur01</b>: directielid, mag Finance en HR alleen lezen</li><li><b>fsadmin</b>: fileserverbeheerder, beheert machtigingen (Full Control)</li></ul><p>Testen met een ander account op W11-01: <code>runas /user:HOGENT\\student.hr powershell</code></p>"
  },
  {
   "id": "lagen",
   "t": "Lokaal en via SMB",
   "h": "<p><b>Lokaal</b> (D:\\Shares\\Finance): alleen NTFS.<br><b>Via SMB</b> (\\\\FS01\\Finance of een netwerkstation): share + NTFS.</p><p><b>Effectieve netwerktoegang = share ∩ NTFS</b>: alleen wat beide toestaan.</p><table><tr><th>Share</th><th>NTFS</th><th>Via SMB</th></tr><tr><td>Read</td><td>Modify</td><td>Read</td></tr><tr><td>Change</td><td>Read & execute</td><td>Read</td></tr><tr><td>Change</td><td>Modify</td><td>inhoud beheren</td></tr><tr><td>Full</td><td>Modify</td><td>Modify</td></tr><tr><td>Full</td><td>geen</td><td>geen toegang</td></tr></table><p>Allow via verschillende groepen telt op. Een expliciete Deny blokkeert. Geen Allow is iets anders dan Deny.</p>"
  },
  {
   "id": "smb",
   "t": "De SMB-verbinding",
   "h": "<ol><li>Gebruiker opent \\\\FS01\\Finance</li><li>DNS vertaalt FS01 naar een IP-adres</li><li>TCP-verbinding met poort 445</li><li>Client en server onderhandelen een SMB-dialect</li><li>Authenticatie van de gebruiker</li><li>Een SMB-sessie ontstaat</li><li>Verbinding met de share Finance</li><li>Share- en NTFS-machtigingen worden gecontroleerd</li><li>Toegestane bestandsverzoeken worden uitgevoerd</li></ol><p>Authenticatie = wie ben je? Autorisatie = wat mag je? Signing beschermt tegen wijzigen, encryption tegen meelezen. SMB 1 nooit inschakelen.</p>"
  },
  {
   "id": "rechten",
   "t": "Share- en NTFS-rechten",
   "h": "<p><b>Share</b>: Read (lezen) · Change (+ maken, wijzigen, verwijderen) · Full (+ sharemachtigingen beheren).</p><p><b>NTFS</b>: Read & execute (lezen, doorlopen) · Write (maken, schrijven, niet verwijderen) · Modify (dagelijks beheer, ook verwijderen) · Full Control (+ machtigingen en eigenaar).</p><p>DACL = de lijst; ACE = één regel (wie, welk recht, Allow/Deny, geërfd of expliciet, toepassingsgebied).</p>"
  },
  {
   "id": "agdlp",
   "t": "AGDLP",
   "h": "<p><b>A</b>ccount → <b>G</b>lobal group (rol) → <b>D</b>omain <b>L</b>ocal group (toegang tot één resource) → <b>P</b>ermission.</p><p>GG_&lt;rol&gt; · DL_FS_&lt;resource&gt;_&lt;RW|RO|FC&gt;. RW = Modify, RO = Read & execute.</p><p>Een groepsnaam verleent zelf niets. Na een groepswijziging: afmelden en opnieuw aanmelden (nieuwe token), controleren met <code>whoami /groups</code>.</p>"
  },
  {
   "id": "acl",
   "t": "Overerving",
   "h": "<p>icacls: (I) geërfd · (OI) ook bestanden · (CI) ook submappen · (IO) alleen erven · (F) Full · (M) Modify · (RX) Read & execute · (W) Write.</p><p>Geërfde regels volgen de bovenliggende map. Een afwijking maak je bewust, met een eigen resourcegroep.</p><p>Overerving uitschakelen: <b>converteren</b> (alles blijft, nu expliciet) of <b>verwijderen</b> (alles weg, ook beheer). Controle: <code>(Get-Acl pad).AreAccessRulesProtected</code>. Opnieuw erven: <code>icacls pad /inheritance:e</code> of <code>icacls pad /reset</code>.</p>"
  },
  {
   "id": "cmd",
   "t": "Commando's",
   "h": "<p><code>Resolve-DnsName FS01</code> · <code>Test-NetConnection FS01 -Port 445</code> · <code>Get-SmbConnection</code> (client) · <code>Get-SmbShare</code>, <code>Get-SmbShareAccess -Name Finance</code>, <code>Get-SmbSession</code>, <code>Get-SmbOpenFile</code> (server) · <code>New-SmbShare</code>, <code>Grant-/Revoke-/Block-SmbShareAccess</code> · <code>icacls</code>, <code>Get-Acl</code> · <code>whoami</code>, <code>whoami /groups</code> · <code>Get-ADGroupMember … -Recursive</code> · <code>net use</code></p>"
  },
  {
   "id": "ladder",
   "t": "Diagnoseladder",
   "h": "<p><b>Identiteit → Pad → DNS → Poort 445 → Share → SMB-sessie → Groepen en token → Sharemachtiging → NTFS → Test</b></p><p>Per stap: feit → hypothese → test → waarneming → conclusie. Los de oorzaak op, niet het symptoom. Geen Full Control ‘om te testen’. Altijd een positieve én een negatieve nacontrole.</p>"
  },
  {
   "id": "waarom",
   "t": "Waarom…?",
   "h": "<p><b>Waarom NETLOGON en niet meteen onze eigen share?</b><br>Omdat elke domain controller die share al heeft. Zo zien we de volledige SMB-keten werken voordat we zelf iets bouwen.</p><p><b>Waarom niet gewoon ping?</b><br>Ping test ICMP, niet SMB. Een server kan op ping antwoorden terwijl poort 445 dicht is, of omgekeerd.</p><p><b>Waarom staat Signed op True?</b><br>Windows 11 24H2 en Server 2025 vereisen standaard SMB signing. Dat beschermt tegen wijzigen onderweg, maar versleutelt niets.</p><p><b>Waarom een aparte schijf D:?</b><br>Bedrijfsgegevens op een eigen volume maken opslag, back-up en herstel overzichtelijker, en een volle datamap legt het systeem niet plat.</p><p><b>Waarom kan HR Finance lezen, er staat toch niets voor HR?</b><br>Er staat wel iets: Users, geërfd van de root van D:. Domain Users is lid van Users op FS01, dus elke domeingebruiker leest mee.</p><p><b>Waarom zet de wizard Everyone Full op de share?</b><br>Microsoft kiest daar strategie 2: een ruime sharelaag en de details in NTFS. Dat werkt alleen als NTFS daarna wél streng is.</p><p><b>Waarom runas en niet gewoon afmelden?</b><br>Sneller, en elk runas-venster is een aparte aanmeldsessie met een eigen token en eigen SMB-sessie. Zo test je meerdere rollen naast elkaar.</p><p><b>Waarom zet u nu toch een gebruiker rechtstreeks in de ACL?</b><br>Om één ding te tonen: de werking van twee lagen. In demo 4 halen we die regel weg en doen we het met groepen, zoals het hoort.</p><p><b>Waarom eerst Everyone van de share halen?</b><br>Anders geeft Everyone Full via de share de schrijfrechten alsnog. Allow-regels via verschillende groepen tellen op.</p><p><b>Waarom kijkt Effective Access ook naar de share?</b><br>Effective Access berekent wat via die toegangsweg overblijft en toont welke laag beperkt: Share of File Permissions.</p><p><b>Waarom twee groepen en niet gewoon GG_Finance_Medewerkers in de ACL?</b><br>De globale groep zegt wie iemand is, de domeinlokale groep welke toegang bij een resource hoort. Zo geef je één rol verschillende rechten op verschillende mappen zonder de ACL's aan te raken.</p><p><b>Waarom zijn de groepen niet meteen in mijn sessie zichtbaar?</b><br>De security token wordt bij het aanmelden gemaakt en daarna niet ververst. Afmelden en opnieuw aanmelden maakt een nieuwe token.</p><p><b>Waarom niet gewoon Full Control voor Finance?</b><br>Full Control laat ook machtigingen en eigenaar wijzigen. Medewerkers moeten inhoud beheren, niet de beveiliging: Modify volstaat.</p><p><b>Waarom niet gewoon de directiegroep toevoegen en klaar?</b><br>Een extra Allow neemt niets weg. Finance-medewerkers erven nog altijd Modify van de bovenliggende map.</p><p><b>Waarom converteren en niet alles verwijderen?</b><br>Verwijderen haalt ook SYSTEM en Administrators weg. Converteren is veiliger: je verwijdert daarna gericht wat niet mag blijven.</p><p><b>Waarom is een share geen kopie van de map?</b><br>De share is alleen een toegangspunt via het netwerk. De bestanden staan één keer op D:; wat je via \\\\FS01\\Finance wijzigt, wijzig je in D:\\Shares\\Finance.</p><p><b>Waarom gelden sharemachtigingen niet lokaal?</b><br>Lokaal ga je rechtstreeks naar het bestandssysteem en passeer je de share niet. Alleen NTFS hangt aan het bestand zelf.</p><p><b>Waarom eerst DNS en dan pas de poort?</b><br>Zonder IP-adres weet de client niet naar welke server hij de TCP-verbinding moet opbouwen.</p><p><b>Waarom bestaan er dialecten?</b><br>SMB is in versies gegroeid. Client en server kiezen de hoogste versie die beide kennen, zodat oude en nieuwe systemen nog samenwerken.</p><p><b>Waarom bestaan sharemachtigingen nog, als NTFS fijner is?</b><br>Ze bestaan al van vóór NTFS en ze beperken alleen de netwerkweg. Je kan ermee een share bewust smaller maken dan NTFS.</p><p><b>Waarom Change en niet Full voor medewerkers?</b><br>Full laat ook de sharemachtigingen zelf wijzigen. Dat is beheer, geen dagelijks werk.</p><p><b>Waarom is Write niet genoeg?</b><br>Write laat maken en schrijven toe, maar niet verwijderen. Wie documenten beheert, moet ook oude versies kunnen weggooien: Modify.</p><p><b>Waarom terughoudend met Deny?</b><br>Deny wint van Allow en geldt via elke groep waarin de gebruiker zit. Eén vergeten lidmaatschap blokkeert dan onverwacht iemand.</p><p><b>Waarom (OI)(CI) in icacls?</b><br>Zonder die vlaggen geldt de regel alleen voor de map zelf, niet voor de bestanden en submappen erin.</p><p><b>Waarom is geen Allow iets anders dan Deny?</b><br>Geen Allow betekent: deze regel geeft het niet. Een andere groep kan het nog wel geven. Deny verbiedt het, ook als een andere groep het geeft.</p><p><b>Waarom domeinlokaal voor de resourcegroep?</b><br>Een domeinlokale groep mag globale groepen bevatten en is bedoeld om machtigingen op resources in het eigen domein te dragen.</p><p><b>Waarom zo veel groepen voor één map?</b><br>Eén groep per toegangsniveau maakt in de ACL meteen zichtbaar wie wat krijgt, en een personeelswijziging raakt de ACL niet.</p><p><b>Waarom halen we BUILTIN\\Users weg?</b><br>Domain Users is lid van Users op FS01. Zolang die geërfde regel staat, kan elke domeingebruiker Finance lezen, wat de share ook zegt.</p><p><b>Waarom converteren en niet gewoon de Users-regel verwijderen?</b><br>Een geërfde regel kan je op de map zelf niet verwijderen. Eerst converteren maakt ze expliciet, dan kan je ze weghalen.</p><p><b>Waarom ook negatief testen?</b><br>Een configuratie die iedereen alles geeft, slaagt voor elke positieve test. Pas als HR geweigerd wordt, weet je dat de beveiliging werkt.</p><p><b>Waarom niet met de beheerder testen?</b><br>De beheerder heeft Full Control. Wat bij hem lukt, zegt niets over wat een gewone medewerker kan.</p><p><b>Waarom niet gewoon Full Control geven als het niet werkt?</b><br>Dan verdwijnt het symptoom, maar de oorzaak blijft en je opent toegang voor wie dat niet mag. Zoek de laag die faalt.</p>"
  }
 ]
};
