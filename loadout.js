// Dane do losowania zestawu (listopad 2026, sezon 7).
// Mapy/tryby: oficjalne notki S7 (Steam), Bloxodes, Fandom; amunicja: Bloxodes + Fandom (Ammo Chart); sprzęt: Bloxodes (pancerze, hełmy) + Fandom (plecaki, rigi).
// Grafiki: rendery i screeny z gry © MoreFun Studios (via Bloxodes / Arena Breakout Infinite Wiki, CC BY-SA).
window.LOADOUT = {
 "maps": [
  {
   "name": "Farm",
   "pl": "Farma",
   "modes": [
    "Normal",
    "Lockdown",
    "Heavy Infected Zone"
   ],
   "img": "img/maps/farm.jpg"
  },
  {
   "name": "Valley",
   "pl": "Dolina",
   "modes": [
    "Normal",
    "Infected Zone"
   ],
   "img": "img/maps/valley.jpg"
  },
  {
   "name": "Northridge",
   "pl": "Northridge",
   "modes": [
    "Lockdown",
    "Forbidden"
   ],
   "img": "img/maps/northridge.jpg"
  },
  {
   "name": "Armory",
   "pl": "Zbrojownia",
   "modes": [
    "Lockdown",
    "Forbidden"
   ],
   "img": "img/maps/armory.jpg"
  },
  {
   "name": "TV Station",
   "pl": "Stacja TV",
   "modes": [
    "Lockdown",
    "Forbidden"
   ],
   "img": "img/maps/tv-station.jpg"
  },
  {
   "name": "Airport",
   "pl": "Lotnisko",
   "modes": [
    "Lockdown",
    "Heavy Infected Zone",
    "Zombie Endless"
   ],
   "img": "img/maps/airport.jpg"
  }
 ],
 "modes": {
  "Normal": "Podstawowa wersja mapy do nauki tras; wolno wnieść sprzęt najwyżej klasy 4 (pancerz i penetracja).",
  "Lockdown": "Strefa zamknięta: wyższe ryzyko i lepszy loot; minimum wartości ekwipunku, w S7 limit 900 000 Koen i max klasa 5.",
  "Forbidden": "Strefa zakazana: najlepszy loot, bez limitu sprzętu, sejfy i bossowie, najtwardsi gracze.",
  "Infected Zone": "Zombie PvPvE (S7) w slocie Lockdown na Valley: mutanty plus inni gracze, zasady sprzętu jak w Lockdown.",
  "Heavy Infected Zone": "Zombie PvPvE (S7) w slocie Forbidden na Farm i Airport: dużo mutantów, nagrody jak w Forbidden.",
  "Zombie Endless": "Czysty PvE (S7, tylko Airport): drużyna 1-4 osób, wybór klasy, dostajesz loadout i przetrwasz fale zombie jak najdłużej."
 },
 "weaponCaliber": {
  "A545": "5.45x39mm",
  "ACE31": "7.62x39mm",
  "AEK": "7.62x39mm",
  "AK-102": "5.56x45mm",
  "AK-15SC": "7.62x39mm",
  "AK-74N": "5.45x39mm",
  "AK12": "5.45x39mm",
  "AKM": "7.62x39mm",
  "AKS-74U": "5.45x39mm",
  "AMB-17": "9x39mm",
  "AN-94": "5.45x39mm",
  "AR-57": "5.7x28mm",
  "AUG": "5.56x45mm",
  "CZ 807": "7.62x39mm",
  "DT MDR": "5.56x45mm",
  "F2000": "5.56x45mm",
  "FAL": "7.62x51mm",
  "FAMAS": "5.56x45mm",
  "G3": "7.62x51mm",
  "H416": "5.56x45mm",
  "M4A1": "5.56x45mm",
  "MCX": "5.56x45mm",
  "PCC-9": "9x19mm",
  "SCAR-L": "5.56x45mm",
  "SG550": "5.56x45mm",
  "T03": "5.8x42mm",
  "T191": "5.8x42mm",
  "T192": "5.8x42mm",
  "T951": "5.8x42mm",
  "BM59": "7.62x51mm",
  "M14": "7.62x51mm",
  "M16": "5.56x45mm",
  "M96": "5.56x45mm",
  "Mini14": "5.56x45mm",
  "SA85M": "7.62x39mm",
  "SKS": "7.62x39mm",
  "SVTU": "7.62x54R",
  "RPK16": "5.45x39mm",
  "M110": "7.62x51mm",
  "MK14": "7.62x51mm",
  "ML": ".44",
  "SVDS": "7.62x54R",
  "T88": "5.8x42mm",
  "U191": "5.8x42mm",
  "VSS": "9x39mm",
  "M24": "7.62x51mm",
  "Mosin-Nagant": "7.62x54R",
  "SJ16": ".338",
  "Banshee": "5.7x28mm",
  "M3A1": ".45 ACP",
  "MAC-10": ".45 ACP",
  "MP40": "9x19mm",
  "MP5": "9x19mm",
  "MP9": "9x19mm",
  "MPF45": ".45 ACP",
  "MPX": "9x19mm",
  "P90": "5.7x28mm",
  "PP19": "9x19mm",
  "QC61": "7.62x25mm",
  "T79": "7.62x25mm",
  "T85": "7.62x25mm",
  "UMP45": ".45 ACP",
  "UZI": "9x19mm",
  "Vector 45": ".45 ACP",
  "Vector 9": "9x19mm",
  "M870": "12x70mm (12 gauge)",
  "MP-133": "12x70mm (12 gauge)",
  "S12K": "12x70mm (12 gauge)",
  "SPR310": "12x70mm (12 gauge)",
  "USAS12": "12x70mm (12 gauge)",
  "CZ52": "7.62x25mm",
  "Desert Eagle": ".44",
  "F57": "5.7x28mm",
  "G17": "9x19mm",
  "G18C": "9x19mm",
  "Gold Desert Eagle": ".44",
  "M1911": ".45 ACP",
  "M45A1": ".45 ACP",
  "M9A3": "9x19mm",
  "T05": "9x19mm",
  "T54": "7.62x25mm"
 },
 "ammo": {
  ".338": [
   {
    "name": "UPZ",
    "lv": 4,
    "pen": 42,
    "dmg": 110,
    "img": "img/ammo/338__upz.webp"
   },
   {
    "name": "FMJ",
    "lv": 5,
    "pen": 54,
    "dmg": 94,
    "img": "img/ammo/338__fmj.webp"
   },
   {
    "name": "AP",
    "lv": 6,
    "pen": 64,
    "dmg": 90,
    "img": "img/ammo/338__ap.webp"
   }
  ],
  ".44": [
   {
    "name": "LFNP",
    "lv": 2,
    "pen": 23,
    "dmg": 98,
    "img": "img/ammo/44__lfnp.webp"
   },
   {
    "name": "SJHP",
    "lv": 3,
    "pen": 35,
    "dmg": 76,
    "img": "img/ammo/44__sjhp.webp"
   },
   {
    "name": "JSP",
    "lv": 4,
    "pen": 42,
    "dmg": 67,
    "img": "img/ammo/44__jsp.webp"
   }
  ],
  ".45 ACP": [
   {
    "name": "HS",
    "lv": 1,
    "pen": 11,
    "dmg": 58,
    "img": "img/ammo/45__hs.webp"
   },
   {
    "name": "FMJ",
    "lv": 1,
    "pen": 19,
    "dmg": 54,
    "img": "img/ammo/45__fmj.webp"
   },
   {
    "name": "AP",
    "lv": 3,
    "pen": 32,
    "dmg": 48,
    "img": "img/ammo/45__ap.webp"
   },
   {
    "name": "APWC",
    "lv": 4,
    "pen": 42,
    "dmg": 48,
    "img": "img/ammo/45__apwc.webp"
   }
  ],
  "12x70mm (12 gauge)": [
   {
    "name": "Type 5 Buckshot",
    "lv": 0,
    "pen": 1,
    "dmg": 288,
    "img": "img/ammo/12x70__type-5-buckshot.webp"
   },
   {
    "name": "RIP Slug",
    "lv": 0,
    "pen": 3,
    "dmg": 274,
    "img": "img/ammo/12x70__rip-slug.webp"
   },
   {
    "name": "Type 8 Buckshot",
    "lv": 0,
    "pen": 4,
    "dmg": 344,
    "img": "img/ammo/12x70__type-8-buckshot.webp"
   },
   {
    "name": "Grizzly Slug",
    "lv": 1,
    "pen": 11,
    "dmg": 187,
    "img": "img/ammo/12x70__grizzly-slug.webp"
   },
   {
    "name": "Type 7 Buckshot",
    "lv": 1,
    "pen": 12,
    "dmg": 296,
    "img": "img/ammo/12x70__type-7-buckshot.webp"
   },
   {
    "name": "Led Slug",
    "lv": 1,
    "pen": 18,
    "dmg": 178,
    "img": "img/ammo/12x70__led-slug.webp"
   },
   {
    "name": "Dual Shell",
    "lv": 1,
    "pen": 19,
    "dmg": 172,
    "img": "img/ammo/12x70__dual-shell.webp"
   },
   {
    "name": "GT Slug",
    "lv": 2,
    "pen": 27,
    "dmg": 201,
    "img": "img/ammo/12x70__gt-slug.webp"
   },
   {
    "name": "Dragon's Breath",
    "lv": 2,
    "pen": 29,
    "dmg": 272,
    "img": "img/ammo/12x70__dragon-s-breath.webp"
   },
   {
    "name": "Flechette Buckshot",
    "lv": 3,
    "pen": 33,
    "dmg": 200,
    "img": "img/ammo/12x70__flechette-buckshot.webp"
   },
   {
    "name": "Armor-Piercing Slug",
    "lv": 3,
    "pen": 35,
    "dmg": 163,
    "img": "img/ammo/12x70__armor-piercing-slug.webp"
   }
  ],
  "5.45x39mm": [
   {
    "name": "PRS",
    "lv": 1,
    "pen": 11,
    "dmg": 59,
    "img": "img/ammo/545x39__prs.webp"
   },
   {
    "name": "HP",
    "lv": 1,
    "pen": 15,
    "dmg": 73,
    "img": "img/ammo/545x39__hp.webp"
   },
   {
    "name": "PS",
    "lv": 2,
    "pen": 25,
    "dmg": 53,
    "img": "img/ammo/545x39__ps.webp"
   },
   {
    "name": "PP",
    "lv": 3,
    "pen": 31,
    "dmg": 44,
    "img": "img/ammo/545x39__pp.webp"
   },
   {
    "name": "BP",
    "lv": 4,
    "pen": 41,
    "dmg": 45,
    "img": "img/ammo/545x39__bp.webp"
   },
   {
    "name": "BS",
    "lv": 5,
    "pen": 52,
    "dmg": 40,
    "img": "img/ammo/545x39__bs.webp"
   }
  ],
  "5.56x45mm": [
   {
    "name": "M193",
    "lv": 1,
    "pen": 12,
    "dmg": 52,
    "img": "img/ammo/556x45__m193.webp"
   },
   {
    "name": "HP Hunting",
    "lv": 1,
    "pen": 14,
    "dmg": 69,
    "img": "img/ammo/556x45__hp-hunting.webp"
   },
   {
    "name": "FMJ Hunting",
    "lv": 2,
    "pen": 21,
    "dmg": 53,
    "img": "img/ammo/556x45__fmj-hunting.webp"
   },
   {
    "name": "M855",
    "lv": 3,
    "pen": 34,
    "dmg": 50,
    "img": "img/ammo/556x45__m855.webp"
   },
   {
    "name": "M855A1",
    "lv": 4,
    "pen": 40,
    "dmg": 44,
    "img": "img/ammo/556x45__m855a1.webp"
   },
   {
    "name": "M855A2",
    "lv": 4,
    "pen": 41,
    "dmg": 48,
    "img": "img/ammo/556x45__m855a2.webp"
   },
   {
    "name": "M995",
    "lv": 5,
    "pen": 52,
    "dmg": 41,
    "img": "img/ammo/556x45__m995.webp"
   }
  ],
  "5.7x28mm": [
   {
    "name": "R37.F",
    "lv": 0,
    "pen": 5,
    "dmg": 78,
    "img": "img/ammo/57x28__r37-f.webp"
   },
   {
    "name": "R37.X",
    "lv": 1,
    "pen": 15,
    "dmg": 71,
    "img": "img/ammo/57x28__r37-x.webp"
   },
   {
    "name": "SS197SR",
    "lv": 2,
    "pen": 22,
    "dmg": 62,
    "img": "img/ammo/57x28__ss197sr.webp"
   },
   {
    "name": "L191",
    "lv": 3,
    "pen": 32,
    "dmg": 55,
    "img": "img/ammo/57x28__l191.webp"
   },
   {
    "name": "SS190",
    "lv": 4,
    "pen": 42,
    "dmg": 47,
    "img": "img/ammo/57x28__ss190.webp"
   },
   {
    "name": "SS198",
    "lv": 5,
    "pen": 53,
    "dmg": 43,
    "img": "img/ammo/57x28__ss198.webp"
   }
  ],
  "5.8x42mm": [
   {
    "name": "DBP87",
    "lv": 3,
    "pen": 34,
    "dmg": 52,
    "img": "img/ammo/58x42__dbp87.webp"
   },
   {
    "name": "DVP88",
    "lv": 4,
    "pen": 44,
    "dmg": 37,
    "img": "img/ammo/58x42__dvp88.webp"
   },
   {
    "name": "DVC12",
    "lv": 5,
    "pen": 53,
    "dmg": 44,
    "img": "img/ammo/58x42__dvc12.webp"
   }
  ],
  "7.62x25mm": [
   {
    "name": "LRN",
    "lv": 0,
    "pen": 9,
    "dmg": 64,
    "img": "img/ammo/762x25__lrn.webp"
   },
   {
    "name": "AKBS",
    "lv": 1,
    "pen": 13,
    "dmg": 58,
    "img": "img/ammo/762x25__akbs.webp"
   },
   {
    "name": "PT",
    "lv": 1,
    "pen": 19,
    "dmg": 55,
    "img": "img/ammo/762x25__pt.webp"
   },
   {
    "name": "Pst",
    "lv": 2,
    "pen": 22,
    "dmg": 51,
    "img": "img/ammo/762x25__pst.webp"
   },
   {
    "name": "PS",
    "lv": 3,
    "pen": 31,
    "dmg": 47,
    "img": "img/ammo/762x25__ps.webp"
   }
  ],
  "7.62x39mm": [
   {
    "name": "LP",
    "lv": 1,
    "pen": 13,
    "dmg": 60,
    "img": "img/ammo/762x39__lp.webp"
   },
   {
    "name": "HP",
    "lv": 1,
    "pen": 16,
    "dmg": 78,
    "img": "img/ammo/762x39__hp.webp"
   },
   {
    "name": "US",
    "lv": 2,
    "pen": 27,
    "dmg": 55,
    "img": "img/ammo/762x39__us.webp"
   },
   {
    "name": "T45M",
    "lv": 3,
    "pen": 31,
    "dmg": 60,
    "img": "img/ammo/762x39__t45m.webp"
   },
   {
    "name": "PS",
    "lv": 3,
    "pen": 33,
    "dmg": 55,
    "img": "img/ammo/762x39__ps.webp"
   },
   {
    "name": "BP",
    "lv": 4,
    "pen": 45,
    "dmg": 55,
    "img": "img/ammo/762x39__bp.webp"
   },
   {
    "name": "AP",
    "lv": 5,
    "pen": 54,
    "dmg": 45,
    "img": "img/ammo/762x39__ap.webp"
   }
  ],
  "7.62x51mm": [
   {
    "name": "UN",
    "lv": 1,
    "pen": 16,
    "dmg": 79,
    "img": "img/ammo/762x51__un.webp"
   },
   {
    "name": "BPZ",
    "lv": 3,
    "pen": 32,
    "dmg": 67,
    "img": "img/ammo/762x51__bpz.webp"
   },
   {
    "name": "M80",
    "lv": 4,
    "pen": 42,
    "dmg": 63,
    "img": "img/ammo/762x51__m80.webp"
   },
   {
    "name": "M62",
    "lv": 5,
    "pen": 53,
    "dmg": 56,
    "img": "img/ammo/762x51__m62.webp"
   },
   {
    "name": "M61",
    "lv": 6,
    "pen": 68,
    "dmg": 50,
    "img": "img/ammo/762x51__m61.webp"
   }
  ],
  "7.62x54R": [
   {
    "name": "T46M",
    "lv": 3,
    "pen": 33,
    "dmg": 77,
    "img": "img/ammo/762x54__t46m.webp"
   },
   {
    "name": "LPS",
    "lv": 4,
    "pen": 42,
    "dmg": 75,
    "img": "img/ammo/762x54__lps.webp"
   },
   {
    "name": "7BT1",
    "lv": 5,
    "pen": 54,
    "dmg": 72,
    "img": "img/ammo/762x54__7bt1.webp"
   },
   {
    "name": "SNB",
    "lv": 6,
    "pen": 63,
    "dmg": 67,
    "img": "img/ammo/762x54__snb.webp"
   },
   {
    "name": "7N37",
    "lv": 7,
    "pen": 71,
    "dmg": 50,
    "img": "img/ammo/762x54__7n37.webp"
   }
  ],
  "9x19mm": [
   {
    "name": "DumDum",
    "lv": 0,
    "pen": 4,
    "dmg": 74,
    "img": "img/ammo/9x19__dumdum.webp"
   },
   {
    "name": "PSO",
    "lv": 1,
    "pen": 15,
    "dmg": 54,
    "img": "img/ammo/9x19__pso.webp"
   },
   {
    "name": "Pst",
    "lv": 2,
    "pen": 20,
    "dmg": 50,
    "img": "img/ammo/9x19__pst.webp"
   },
   {
    "name": "AP6.3",
    "lv": 3,
    "pen": 30,
    "dmg": 46,
    "img": "img/ammo/9x19__ap6-3.webp"
   },
   {
    "name": "7N31",
    "lv": 4,
    "pen": 40,
    "dmg": 44,
    "img": "img/ammo/9x19__7n31.webp"
   }
  ],
  "9x39mm": [
   {
    "name": "SP5",
    "lv": 3,
    "pen": 33,
    "dmg": 64,
    "img": "img/ammo/9x39__sp5.webp"
   },
   {
    "name": "SP6",
    "lv": 4,
    "pen": 41,
    "dmg": 53,
    "img": "img/ammo/9x39__sp6.webp"
   },
   {
    "name": "7N9",
    "lv": 4,
    "pen": 47,
    "dmg": 56,
    "img": "img/ammo/9x39__7n9.webp"
   },
   {
    "name": "7N12",
    "lv": 5,
    "pen": 50,
    "dmg": 50,
    "img": "img/ammo/9x39__7n12.webp"
   }
  ]
 },
 "armor": [
  {
   "tier": 1,
   "items": [
    {
     "name": "Old Security Body Armor",
     "img": "img/gear/armor__old-security-body-armor.webp",
     "note": "Pokrycie: Chest; wytrz. 25; Aramid; 3.7 kg; prędkość 0%"
    },
    {
     "name": "Retro Sapper Bulletproof Chest Armor",
     "img": "img/gear/armor__retro-sapper-bulletproof-chest-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen, Lower abdomen; wytrz. 25; Steel; 6 kg; prędkość -1%"
    },
    {
     "name": "Retro Bulletproof Vest",
     "img": "img/gear/armor__retro-bulletproof-vest.webp",
     "note": "Pokrycie: Chest, Upper abdomen; wytrz. 20; Aramid; 3.5 kg; prędkość 0%"
    }
   ]
  },
  {
   "tier": 2,
   "items": [
    {
     "name": "220 Body Armor",
     "img": "img/gear/armor__220-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen; wytrz. 30; Aramid; 4.4 kg; prędkość -1%"
    },
    {
     "name": "Retro Infantry Bulletproof Vest",
     "img": "img/gear/armor__retro-infantry-bulletproof-vest.webp",
     "note": "Pokrycie: Chest, Upper abdomen; wytrz. 30; Aluminum; 3 kg; prędkość -1%"
    },
    {
     "name": "Security Body Armor",
     "img": "img/gear/armor__security-body-armor.webp",
     "note": "Pokrycie: Chest; wytrz. 25; Aramid; 3.8 kg; prędkość -1%"
    }
   ]
  },
  {
   "tier": 3,
   "items": [
    {
     "name": "H-LC Lightweight Body Armor",
     "img": "img/gear/armor__h-lc-lightweight-body-armor.webp",
     "note": "Pokrycie: Chest; wytrz. 55; Composite; 4.5 kg; prędkość -3%"
    },
    {
     "name": "PCA350 Body Armor",
     "img": "img/gear/armor__pca350-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen; wytrz. 50; Aluminum; 6.5 kg; prędkość -3%"
    },
    {
     "name": "KN Assault Body Armor",
     "img": "img/gear/armor__kn-assault-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen, Lower abdomen; wytrz. 50; Titanium; 5 kg; prędkość -6%"
    },
    {
     "name": "Standard SWAT Armor",
     "img": "img/gear/armor__standard-swat-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen; wytrz. 45; Aramid; 4.6 kg; prędkość -3%"
    },
    {
     "name": "KN Regulation Body Armor",
     "img": "img/gear/armor__kn-regulation-body-armor.webp",
     "note": "Pokrycie: Chest; wytrz. 35; Aramid; 4 kg; prędkość -1%"
    },
    {
     "name": "H-Tac SWAT Body Armor",
     "img": "img/gear/armor__h-tac-swat-body-armor.webp",
     "note": "Pokrycie: Chest; wytrz. 35; Polyethylene; 4.1 kg; prędkość -2%"
    }
   ]
  },
  {
   "tier": 4,
   "items": [
    {
     "name": "6B23 Body Armor",
     "img": "img/gear/armor__6b23-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen, Lower abdomen; wytrz. 70; Steel; 11.2 kg; prędkość -9%"
    },
    {
     "name": "6B13 Body Armor",
     "img": "img/gear/armor__6b13-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen; wytrz. 65; Composite; 7 kg; prędkość -5%"
    },
    {
     "name": "IND401 Body Armor",
     "img": "img/gear/armor__ind401-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen; wytrz. 55; Aluminum; 6.8 kg; prędkość -4%"
    },
    {
     "name": "SEK Fortress Body Armor",
     "img": "img/gear/armor__sek-fortress-body-armor.webp",
     "note": "Pokrycie: Chest; wytrz. 50; Aluminum; 5.6 kg; prędkość -3%"
    },
    {
     "name": "Spartan B Body Armor",
     "img": "img/gear/armor__spartan-b-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen; wytrz. 50; Aramid; 5.4 kg; prędkość -4%"
    }
   ]
  },
  {
   "tier": 5,
   "items": [
    {
     "name": "BT6 Heavy Body Armor",
     "img": "img/gear/armor__bt6-heavy-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen; wytrz. 90; Titanium; 8.6 kg; prędkość -6%"
    },
    {
     "name": "IMTV Samurai Full Protection Body Armor",
     "img": "img/gear/armor__imtv-samurai-full-protection-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen, Lower abdomen, Shoulders; wytrz. 90; Aluminum; 11 kg; prędkość -14%"
    },
    {
     "name": "Defender M4 Heavy Body Armor",
     "img": "img/gear/armor__defender-m4-heavy-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen, Lower abdomen; wytrz. 80; Steel; 11.8 kg; prędkość -11%"
    },
    {
     "name": "Defender M4 Heavy Armor (Officer Skin)",
     "img": "img/gear/armor__defender-m4-heavy-armor-officer-skin.webp",
     "note": "Pokrycie: Chest, Upper abdomen, Lower abdomen; wytrz. 80; Steel; 11.8 kg; prędkość -10%"
    },
    {
     "name": "IMTV Samurai Assault Body Armor",
     "img": "img/gear/armor__imtv-samurai-assault-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen, Shoulders; wytrz. 80; Aluminum; 10 kg; prędkość -10%"
    },
    {
     "name": "926 Composite Body Armor",
     "img": "img/gear/armor__926-composite-body-armor.webp",
     "note": "Pokrycie: Chest; wytrz. 70; Composite; 6.2 kg; prędkość -4%"
    },
    {
     "name": "H-LC Tactical Body Armor",
     "img": "img/gear/armor__h-lc-tactical-body-armor.webp",
     "note": "Pokrycie: Chest; wytrz. 70; Composite; 5.9 kg; prędkość -5%"
    },
    {
     "name": "IMTV Samurai Standard Body Armor",
     "img": "img/gear/armor__imtv-samurai-standard-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen, Lower abdomen; wytrz. 70; Aluminum; 9.6 kg; prędkość -9%"
    }
   ]
  },
  {
   "tier": 6,
   "items": [
    {
     "name": "BT201 Full Body Armor",
     "img": "img/gear/armor__bt201-full-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen, Lower abdomen, Shoulders; wytrz. 125; Aluminum; 15 kg; prędkość -18%"
    },
    {
     "name": "6B45 Heavy Body Armor",
     "img": "img/gear/armor__6b45-heavy-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen, Lower abdomen, Shoulders; wytrz. 120; Steel; 14 kg; prędkość -18%"
    },
    {
     "name": "Marshal Heavy Body Armor",
     "img": "img/gear/armor__marshal-heavy-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen, Shoulders; wytrz. 115; Ceramic; 7.8 kg; prędkość -12%"
    },
    {
     "name": "KN Composite Body Armor",
     "img": "img/gear/armor__kn-composite-body-armor.webp",
     "note": "Pokrycie: Chest, Upper abdomen; wytrz. 110; Ceramic; 6.9 kg; prędkość -7%"
    },
    {
     "name": "BT101 Tactical Body Armor",
     "img": "img/gear/armor__bt101-tactical-body-armor.webp",
     "note": "Pokrycie: Chest; wytrz. 100; Ceramic; 5.5 kg; prędkość -4%"
    }
   ]
  }
 ],
 "helmet": [
  {
   "tier": 1,
   "items": [
    {
     "name": "Tanker Protective Cap",
     "img": "img/gear/helmet__tanker-protective-cap.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 20; Aramid; 1.3 kg; prędkość 0%"
    },
    {
     "name": "Lightweight Safety Helmet",
     "img": "img/gear/helmet__lightweight-safety-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 15; Aramid; 1 kg; prędkość 0%"
    },
    {
     "name": "Motorcycle Helmet",
     "img": "img/gear/helmet__motorcycle-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 15; Aramid; 1.2 kg; prędkość 0%"
    },
    {
     "name": "Kelsey Fire Helmet",
     "img": "img/gear/helmet__kelsey-fire-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 10; Aramid; 1 kg; prędkość 0%"
    }
   ]
  },
  {
   "tier": 2,
   "items": [
    {
     "name": "Retro Steel Helmet",
     "img": "img/gear/helmet__retro-steel-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 25; Steel; 2.6 kg; prędkość 0%"
    },
    {
     "name": "PAS Standard Helmet",
     "img": "img/gear/helmet__pas-standard-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 25; Aramid; 3.2 kg; prędkość 0%"
    },
    {
     "name": "Security Riot Helmet",
     "img": "img/gear/helmet__security-riot-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 22; Polyethylene; 1.2 kg; prędkość 0%"
    },
    {
     "name": "Aviator Helmet",
     "img": "img/gear/helmet__aviator-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 20; Polyethylene; 1.2 kg; prędkość 0%"
    },
    {
     "name": "Retro Military Helmet",
     "img": "img/gear/helmet__retro-military-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 20; Steel; 2.6 kg; prędkość 0%"
    },
    {
     "name": "Security Helmet",
     "img": "img/gear/helmet__security-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 20; Polyethylene; 1.1 kg; prędkość 0%"
    }
   ]
  },
  {
   "tier": 3,
   "items": [
    {
     "name": "6B5 Helmet",
     "img": "img/gear/helmet__6b5-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 35; Polyethylene; 1.3 kg; prędkość -4%"
    },
    {
     "name": "6B4 Helmet",
     "img": "img/gear/helmet__6b4-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 30; Aramid; 2.2 kg; prędkość -3%"
    },
    {
     "name": "6B4 Helmet Squad Camo",
     "img": "img/gear/helmet__6b4-helmet-squad-camo.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 30; Aramid; 2.2 kg; prędkość -3%"
    },
    {
     "name": "SH12 Military Helmet",
     "img": "img/gear/helmet__sh12-military-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 30; Steel; 3.4 kg; prędkość -2%"
    },
    {
     "name": "PAS2 Helmet",
     "img": "img/gear/helmet__pas2-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 28; Steel; 2.8 kg; prędkość -1%"
    },
    {
     "name": "F70 Tactical Helmet",
     "img": "img/gear/helmet__f70-tactical-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 25; Composite; 1.4 kg; prędkość -1%"
    }
   ]
  },
  {
   "tier": 4,
   "items": [
    {
     "name": "56K Helicopter Helmet",
     "img": "img/gear/helmet__56k-helicopter-helmet.webp",
     "note": "Pokrycie: Head, Ears, Face; wytrz. 50; Aramid; 2.2 kg; prędkość -6%"
    },
    {
     "name": "SH40 Military Helmet",
     "img": "img/gear/helmet__sh40-military-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 50; Steel; 3.6 kg; prędkość -3%"
    },
    {
     "name": "KSS2 Tactical Helmet",
     "img": "img/gear/helmet__kss2-tactical-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 45; Composite; 2.4 kg; prędkość -3%"
    },
    {
     "name": "SH18 Military Helmet",
     "img": "img/gear/helmet__sh18-military-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 45; Titanium; 2.9 kg; prędkość -4%"
    },
    {
     "name": "IND200 Helmet",
     "img": "img/gear/helmet__ind200-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 40; Composite; 2.2 kg; prędkość -1%"
    },
    {
     "name": "KSS Tactical Helmet",
     "img": "img/gear/helmet__kss-tactical-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 40; Aluminum; 1.9 kg; prędkość -1%"
    },
    {
     "name": "IND Tactical Helmet",
     "img": "img/gear/helmet__ind-tactical-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 35; Composite; 2 kg; prędkość -1%"
    },
    {
     "name": "IND Tactical Helmet (Snow)",
     "img": "img/gear/helmet__ind-tactical-helmet-snow.webp",
     "note": "Pokrycie: Head; wytrz. 35; Composite; 2 kg; prędkość 0%"
    },
    {
     "name": "F80 Tactical Helmet",
     "img": "img/gear/helmet__f80-tactical-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 35; Aluminum; 2 kg; prędkość -1%"
    }
   ]
  },
  {
   "tier": 5,
   "items": [
    {
     "name": "SH Matzka 2 Helmet",
     "img": "img/gear/helmet__sh-matzka-2-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 65; Steel; 3.9 kg; prędkość -4%"
    },
    {
     "name": "SH50 Military Helmet",
     "img": "img/gear/helmet__sh50-military-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 60; Steel; 3.2 kg; prędkość -4%"
    },
    {
     "name": "AN95 Heavy Blast Helmet",
     "img": "img/gear/helmet__an95-heavy-blast-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 55; Titanium; 3.1 kg; prędkość -5%"
    },
    {
     "name": "RSP Heavy Tactical Helmet",
     "img": "img/gear/helmet__rsp-heavy-tactical-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 55; Composite; 2.5 kg; prędkość -4%"
    },
    {
     "name": "FA Assault Tactical Helmet",
     "img": "img/gear/helmet__fa-assault-tactical-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 50; Composite; 2.1 kg; prędkość -1%"
    },
    {
     "name": "SH60 Military Helmet",
     "img": "img/gear/helmet__sh60-military-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 50; Composite; 3.2 kg; prędkość -3%"
    },
    {
     "name": "03 Heavy Tactical Helmet",
     "img": "img/gear/helmet__03-heavy-tactical-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 45; Composite; 2.1 kg; prędkość -1%"
    }
   ]
  },
  {
   "tier": 6,
   "items": [
    {
     "name": "IND70 Tactical Helmet",
     "img": "img/gear/helmet__ind70-tactical-helmet.webp",
     "note": "Pokrycie: Head, Ears, Face; wytrz. 80; Polyethylene; 2.1 kg; prędkość -10%"
    },
    {
     "name": "6BNT Helmet",
     "img": "img/gear/helmet__6bnt-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 75; Steel; 4.1 kg; prędkość -4%"
    },
    {
     "name": "DOD9 Blast Helmet",
     "img": "img/gear/helmet__dod9-blast-helmet.webp",
     "note": "Pokrycie: Head, Ears, Face; wytrz. 75; Composite; 3.5 kg; prędkość -8%"
    },
    {
     "name": "RST Special Forces Helmet",
     "img": "img/gear/helmet__rst-special-forces-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 75; Aluminum; 2.6 kg; prędkość -6%"
    },
    {
     "name": "HG84 Offensive Helmet",
     "img": "img/gear/helmet__hg84-offensive-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 70; Composite; 2.7 kg; prędkość -4%"
    },
    {
     "name": "AS200 Heavy Tactical Helmet",
     "img": "img/gear/helmet__as200-heavy-tactical-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 65; Polyethylene; 1.6 kg; prędkość -7%"
    },
    {
     "name": "SH65 Military Helmet",
     "img": "img/gear/helmet__sh65-military-helmet.webp",
     "note": "Pokrycie: Head, Ears; wytrz. 65; Composite; 3.7 kg; prędkość 0%"
    },
    {
     "name": "IND50 Heavy Tactical Helmet",
     "img": "img/gear/helmet__ind50-heavy-tactical-helmet.webp",
     "note": "Pokrycie: Head; wytrz. 60; Composite; 2.3 kg; prędkość -1%"
    }
   ]
  }
 ],
 "backpack": [
  {
   "tier": "0",
   "label": "Bez plecaka",
   "items": []
  },
  {
   "tier": "S",
   "label": "Mały plecak (6–12 slotów)",
   "items": [
    {
     "name": "Sling Bag",
     "img": "img/gear/backpack__sling-bag.webp",
     "note": "6 slotów (2x3)"
    },
    {
     "name": "Simple Backpack",
     "img": "img/gear/backpack__simple-backpack.webp",
     "note": "8 slotów (2x4)"
    },
    {
     "name": "Canvas Backpack",
     "img": "img/gear/backpack__canvas-backpack.webp",
     "note": "9 slotów (3x3)"
    },
    {
     "name": "Lightweight Camping Backpack",
     "img": "img/gear/backpack__lightweight-camping-backpack.webp",
     "note": "12 slotów (3x4)"
    }
   ]
  },
  {
   "tier": "M",
   "label": "Średni plecak (16–25)",
   "items": [
    {
     "name": "Medium Camping Backpack",
     "img": "img/gear/backpack__medium-camping-backpack.webp",
     "note": "16 slotów (4x4)"
    },
    {
     "name": "Canvas Camping Backpack",
     "img": "img/gear/backpack__canvas-camping-backpack.webp",
     "note": "20 slotów (2x4 + 3x4)"
    },
    {
     "name": "Sports Backpack",
     "img": "img/gear/backpack__sports-backpack.webp",
     "note": "20 slotów (4x5)"
    },
    {
     "name": "RUSH Tactical Backpack",
     "img": "img/gear/backpack__rush-tactical-backpack.webp",
     "note": "24 slotów (4x5 + 4 kieszenie)"
    },
    {
     "name": "Cowhide Backpack",
     "img": "img/gear/backpack__cowhide-backpack.webp",
     "note": "25 slotów (5x4 + 5x1)"
    }
   ]
  },
  {
   "tier": "L",
   "label": "Duży plecak (28–32)",
   "items": [
    {
     "name": "Large Camping Backpack",
     "img": "img/gear/backpack__large-camping-backpack.webp",
     "note": "28 slotów (4x6 + 4x1)"
    },
    {
     "name": "Med Field Backpack",
     "img": "img/gear/backpack__med-field-backpack.webp",
     "note": "28 slotów (4x7)"
    },
    {
     "name": "Retro Marching Backpack",
     "img": "img/gear/backpack__retro-marching-backpack.webp",
     "note": "30 slotów (5x4 + 1x2/3x2/1x2)"
    },
    {
     "name": "Chapman Military Backpack",
     "img": "img/gear/backpack__chapman-military-backpack.webp",
     "note": "30 slotów (5x6)"
    },
    {
     "name": "XA4 Tactical Backpack",
     "img": "img/gear/backpack__xa4-tactical-backpack.webp",
     "note": "32 slotów (3x7 + 3x1 + 2x 1x4)"
    },
    {
     "name": "AMP7 Assault Backpack",
     "img": "img/gear/backpack__amp7-assault-backpack.webp",
     "note": "32 slotów (4x8)"
    }
   ]
  },
  {
   "tier": "XL",
   "label": "Wielki plecak (40–50)",
   "items": [
    {
     "name": "926 Field Backpack",
     "img": "img/gear/backpack__926-field-backpack.webp",
     "note": "40 slotów (5x8)"
    },
    {
     "name": "LUC Expanded Tactical Backpack",
     "img": "img/gear/backpack__luc-expanded-tactical-backpack.webp",
     "note": "45 slotów (5x7 + 1x2/3x2/1x2)"
    },
    {
     "name": "Field Camping Backpack",
     "img": "img/gear/backpack__field-camping-backpack.webp",
     "note": "45 slotów (5x9)"
    },
    {
     "name": "RAL Heavy Military Backpack",
     "img": "img/gear/backpack__ral-heavy-military-backpack.webp",
     "note": "50 slotów (5x7 + 3x3 + 2x 1x3)"
    }
   ]
  }
 ],
 "rig": [
  {
   "tier": "0",
   "label": "Bez rigu",
   "items": []
  },
  {
   "tier": "S",
   "label": "Mały rig (6–10 slotów)",
   "items": [
    {
     "name": "Hunting Vest",
     "img": "img/gear/rig__hunting-vest.webp",
     "note": "6 slotów"
    },
    {
     "name": "Punk Motorcycle Vest",
     "img": "img/gear/rig__punk-motorcycle-vest.webp",
     "note": "8 slotów"
    },
    {
     "name": "Leather Biker Vest",
     "img": "img/gear/rig__leather-biker-vest.webp",
     "note": "10 slotów"
    },
    {
     "name": "ALS Carry Rig",
     "img": null,
     "note": "6 slotów"
    },
    {
     "name": "926 Lightweight Chest Rig",
     "img": null,
     "note": "8 slotów"
    },
    {
     "name": "BH Infantry Chest Rig",
     "img": "img/gear/rig__bh-infantry-chest-rig.webp",
     "note": "10 slotów"
    }
   ]
  },
  {
   "tier": "M",
   "label": "Średni rig (12–16)",
   "items": [
    {
     "name": "Service Tactical Vest",
     "img": "img/gear/rig__service-tactical-vest.webp",
     "note": "12 slotów"
    },
    {
     "name": "926 Hunter Vest",
     "img": "img/gear/rig__926-hunter-vest.webp",
     "note": "14 slotów"
    },
    {
     "name": "BH2 Chest Rig",
     "img": "img/gear/rig__bh2-chest-rig.webp",
     "note": "12 slotów"
    },
    {
     "name": "Stormtrooper Type 2 Chest Rig",
     "img": "img/gear/rig__stormtrooper-type-2-chest-rig.webp",
     "note": "12 slotów"
    },
    {
     "name": "B3 Universal Chest Rig",
     "img": "img/gear/rig__b3-universal-chest-rig.webp",
     "note": "16 slotów"
    },
    {
     "name": "B4 Tactical Chest Rig",
     "img": "img/gear/rig__b4-tactical-chest-rig.webp",
     "note": "15 slotów"
    },
    {
     "name": "RAP Simple Chest Rig",
     "img": "img/gear/rig__rap-simple-chest-rig.webp",
     "note": "14 slotów"
    }
   ]
  },
  {
   "tier": "L",
   "label": "Duży rig (18–24)",
   "items": [
    {
     "name": "926 Premium Field Chest Rig",
     "img": "img/gear/rig__926-premium-field-chest-rig.webp",
     "note": "24 slotów"
    },
    {
     "name": "Stormtrooper Type 3 Tactical Chest Rig",
     "img": "img/gear/rig__stormtrooper-type-3-tactical-chest-rig.webp",
     "note": "20 slotów"
    },
    {
     "name": "Stormtrooper Type 4 Tactical Chest Rig",
     "img": "img/gear/rig__stormtrooper-type-4-tactical-chest-rig.webp",
     "note": "22 slotów"
    },
    {
     "name": "B6 Tactical Chest Rig",
     "img": "img/gear/rig__b6-tactical-chest-rig.webp",
     "note": "20 slotów"
    },
    {
     "name": "FA Multipurpose Chest Rig",
     "img": "img/gear/rig__fa-multipurpose-chest-rig.webp",
     "note": "18 slotów"
    },
    {
     "name": "FA Commander Chest Rig",
     "img": "img/gear/rig__fa-commander-chest-rig.webp",
     "note": "20 slotów"
    }
   ]
  },
  {
   "tier": "A",
   "label": "Rig opancerzony (zastępuje pancerz)",
   "items": [
    {
     "name": "Spartan C Heavy Armored Rig",
     "img": "img/gear/rig__spartan-c-heavy-armored-rig.webp",
     "note": "23 slotów",
     "armorClass": 6
    },
    {
     "name": "926 Security Armored Chest Rig",
     "img": "img/gear/rig__926-security-armored-chest-rig.webp",
     "note": "10 slotów",
     "armorClass": 3
    },
    {
     "name": "Warrior Heavy Armored Chest Rig",
     "img": "img/gear/rig__warrior-heavy-armored-chest-rig.webp",
     "note": "16 slotów",
     "armorClass": 5
    },
    {
     "name": "Sentry 3 Armored Chest Rig",
     "img": "img/gear/rig__sentry-3-armored-chest-rig.webp",
     "note": "10 slotów",
     "armorClass": 3
    },
    {
     "name": "6B5 Armored Rig",
     "img": "img/gear/rig__6b5-armored-rig.webp",
     "note": "12 slotów",
     "armorClass": 3
    },
    {
     "name": "TM1 Armored Rig",
     "img": "img/gear/rig__tm1-armored-rig.webp",
     "note": "14 slotów",
     "armorClass": 4
    },
    {
     "name": "TM2 Armored Rig",
     "img": "img/gear/rig__tm2-armored-rig.webp",
     "note": "16 slotów",
     "armorClass": 4
    },
    {
     "name": "Sentry 305 Armored Chest Rig",
     "img": "img/gear/rig__sentry-305-armored-chest-rig.webp",
     "note": "16 slotów",
     "armorClass": 4
    },
    {
     "name": "H-Tac A8 Armored Rig",
     "img": "img/gear/rig__h-tac-a8-armored-rig.webp",
     "note": "18 slotów",
     "armorClass": 5
    },
    {
     "name": "H-Tac A9 Armored Rig",
     "img": "img/gear/rig__h-tac-a9-armored-rig.webp",
     "note": "20 slotów",
     "armorClass": 5
    },
    {
     "name": "AVS Heavy Armored Rig",
     "img": "img/gear/rig__avs-heavy-armored-rig.webp",
     "note": "20 slotów",
     "armorClass": 6
    },
    {
     "name": "M1955 Combat Vest",
     "img": "img/gear/rig__m1955-combat-vest.webp",
     "note": "8 slotów",
     "armorClass": 2
    },
    {
     "name": "Defender M4 Heavy Armored Rig",
     "img": "img/gear/rig__defender-m4-heavy-armored-rig.webp",
     "note": "20 slotów",
     "armorClass": 5
    },
    {
     "name": "AL Assault Armored Rig",
     "img": "img/gear/rig__al-assault-armored-rig.webp",
     "note": "18 slotów",
     "armorClass": 6
    },
    {
     "name": "AL Tactical Armored Rig",
     "img": "img/gear/rig__al-tactical-armored-rig.webp",
     "note": "18 slotów",
     "armorClass": 6
    },
    {
     "name": "AL Commander Armored Rig",
     "img": "img/gear/rig__al-commander-armored-rig.webp",
     "note": "20 slotów",
     "armorClass": 6
    }
   ]
  }
 ]
};
