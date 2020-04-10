﻿
//need to just get the name and key for each champ. IE for aatrox just need key:266, and name: AAtrox
var champData = {
  "type": "champion",
  "format": "standAloneComplex",
  "version": "10.7.1",
  "data": {
    "Aatrox": {
      "version": "10.7.1",
      "id": "Aatrox",
      "key": "266",
      "name": "Aatrox",
      "title": "the Darkin Blade",
      "blurb": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
      "info": {
        "attack": 8,
        "defense": 4,
        "magic": 3,
        "difficulty": 4
      },
      "image": {
        "full": "Aatrox.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 0,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Blood Well",
      "stats": {
        "hp": 580,
        "hpperlevel": 90,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 38,
        "armorperlevel": 3.25,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 3,
        "hpregenperlevel": 1,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 5,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.651
      }
    },
    "Ahri": {
      "version": "10.7.1",
      "id": "Ahri",
      "key": "103",
      "name": "Ahri",
      "title": "the Nine-Tailed Fox",
      "blurb": "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature...",
      "info": {
        "attack": 3,
        "defense": 4,
        "magic": 8,
        "difficulty": 5
      },
      "image": {
        "full": "Ahri.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 48,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 526,
        "hpperlevel": 92,
        "mp": 418,
        "mpperlevel": 25,
        "movespeed": 330,
        "armor": 20.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.04,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2,
        "attackspeed": 0.668
      }
    },
    "Akali": {
      "version": "10.7.1",
      "id": "Akali",
      "key": "84",
      "name": "Akali",
      "title": "the Rogue Assassin",
      "blurb": "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one...",
      "info": {
        "attack": 5,
        "defense": 3,
        "magic": 8,
        "difficulty": 7
      },
      "image": {
        "full": "Akali.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 96,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin"
      ],
      "partype": "Energy",
      "stats": {
        "hp": 575,
        "hpperlevel": 95,
        "mp": 200,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 23,
        "armorperlevel": 3.5,
        "spellblock": 37,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.5,
        "mpregen": 50,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 62.4,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 3.2,
        "attackspeed": 0.625
      }
    },
    "Alistar": {
      "version": "10.7.1",
      "id": "Alistar",
      "key": "12",
      "name": "Alistar",
      "title": "the Minotaur",
      "blurb": "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly...",
      "info": {
        "attack": 6,
        "defense": 9,
        "magic": 5,
        "difficulty": 7
      },
      "image": {
        "full": "Alistar.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 144,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 600,
        "hpperlevel": 106,
        "mp": 350,
        "mpperlevel": 40,
        "movespeed": 330,
        "armor": 44,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.85,
        "mpregen": 8.5,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 62,
        "attackdamageperlevel": 3.75,
        "attackspeedperlevel": 2.125,
        "attackspeed": 0.625
      }
    },
    "Amumu": {
      "version": "10.7.1",
      "id": "Amumu",
      "key": "32",
      "name": "Amumu",
      "title": "the Sad Mummy",
      "blurb": "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe...",
      "info": {
        "attack": 2,
        "defense": 6,
        "magic": 8,
        "difficulty": 3
      },
      "image": {
        "full": "Amumu.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 192,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 613.12,
        "hpperlevel": 84,
        "mp": 287.2,
        "mpperlevel": 40,
        "movespeed": 335,
        "armor": 33,
        "armorperlevel": 3.8,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9,
        "hpregenperlevel": 0.85,
        "mpregen": 7.382,
        "mpregenperlevel": 0.525,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.38,
        "attackdamageperlevel": 3.8,
        "attackspeedperlevel": 2.18,
        "attackspeed": 0.736
      }
    },
    "Anivia": {
      "version": "10.7.1",
      "id": "Anivia",
      "key": "34",
      "name": "Anivia",
      "title": "the Cryophoenix",
      "blurb": "Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland...",
      "info": {
        "attack": 1,
        "defense": 4,
        "magic": 10,
        "difficulty": 10
      },
      "image": {
        "full": "Anivia.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 240,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 480,
        "hpperlevel": 82,
        "mp": 495,
        "mpperlevel": 25,
        "movespeed": 325,
        "armor": 21.22,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 600,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 51.376,
        "attackdamageperlevel": 3.2,
        "attackspeedperlevel": 1.68,
        "attackspeed": 0.625
      }
    },
    "Annie": {
      "version": "10.7.1",
      "id": "Annie",
      "key": "1",
      "name": "Annie",
      "title": "the Dark Child",
      "blurb": "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable...",
      "info": {
        "attack": 2,
        "defense": 3,
        "magic": 10,
        "difficulty": 6
      },
      "image": {
        "full": "Annie.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 288,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 524,
        "hpperlevel": 88,
        "mp": 418,
        "mpperlevel": 25,
        "movespeed": 335,
        "armor": 19.22,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 625,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50.41,
        "attackdamageperlevel": 2.625,
        "attackspeedperlevel": 1.36,
        "attackspeed": 0.579
      }
    },
    "Aphelios": {
      "version": "10.7.1",
      "id": "Aphelios",
      "key": "523",
      "name": "Aphelios",
      "title": "the Weapon of the Faithful",
      "blurb": "Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by...",
      "info": {
        "attack": 6,
        "defense": 2,
        "magic": 1,
        "difficulty": 10
      },
      "image": {
        "full": "Aphelios.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 336,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 500,
        "hpperlevel": 86,
        "mp": 348,
        "mpperlevel": 42,
        "movespeed": 325,
        "armor": 28,
        "armorperlevel": 3,
        "spellblock": 26,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 3.25,
        "hpregenperlevel": 0.55,
        "mpregen": 6.5,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 57,
        "attackdamageperlevel": 2.2,
        "attackspeedperlevel": 2.1,
        "attackspeed": 0.64
      }
    },
    "Ashe": {
      "version": "10.7.1",
      "id": "Ashe",
      "key": "22",
      "name": "Ashe",
      "title": "the Frost Archer",
      "blurb": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice...",
      "info": {
        "attack": 7,
        "defense": 3,
        "magic": 2,
        "difficulty": 4
      },
      "image": {
        "full": "Ashe.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 384,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 539,
        "hpperlevel": 85,
        "mp": 280,
        "mpperlevel": 32,
        "movespeed": 325,
        "armor": 26,
        "armorperlevel": 3.4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 600,
        "hpregen": 3.5,
        "hpregenperlevel": 0.55,
        "mpregen": 6.972,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 2.96,
        "attackspeedperlevel": 3.33,
        "attackspeed": 0.658
      }
    },
    "AurelionSol": {
      "version": "10.7.1",
      "id": "AurelionSol",
      "key": "136",
      "name": "Aurelion Sol",
      "title": "The Star Forger",
      "blurb": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his...",
      "info": {
        "attack": 2,
        "defense": 3,
        "magic": 8,
        "difficulty": 7
      },
      "image": {
        "full": "AurelionSol.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 432,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 575,
        "hpperlevel": 92,
        "mp": 350,
        "mpperlevel": 50,
        "movespeed": 325,
        "armor": 19,
        "armorperlevel": 3.6,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 7,
        "hpregenperlevel": 0.6,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 57,
        "attackdamageperlevel": 3.2,
        "attackspeedperlevel": 1.36,
        "attackspeed": 0.625
      }
    },
    "Azir": {
      "version": "10.7.1",
      "id": "Azir",
      "key": "268",
      "name": "Azir",
      "title": "the Emperor of the Sands",
      "blurb": "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended...",
      "info": {
        "attack": 6,
        "defense": 3,
        "magic": 8,
        "difficulty": 9
      },
      "image": {
        "full": "Azir.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 0,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 552,
        "hpperlevel": 92,
        "mp": 480,
        "mpperlevel": 21,
        "movespeed": 335,
        "armor": 19.04,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 7,
        "hpregenperlevel": 0.75,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 52,
        "attackdamageperlevel": 2.8,
        "attackspeedperlevel": 3,
        "attackspeed": 0.625
      }
    },
    "Bard": {
      "version": "10.7.1",
      "id": "Bard",
      "key": "432",
      "name": "Bard",
      "title": "the Wandering Caretaker",
      "blurb": "A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic...",
      "info": {
        "attack": 4,
        "defense": 4,
        "magic": 5,
        "difficulty": 9
      },
      "image": {
        "full": "Bard.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 48,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 575,
        "hpperlevel": 89,
        "mp": 350,
        "mpperlevel": 50,
        "movespeed": 330,
        "armor": 34,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 6,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 52,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2,
        "attackspeed": 0.625
      }
    },
    "Blitzcrank": {
      "version": "10.7.1",
      "id": "Blitzcrank",
      "key": "53",
      "name": "Blitzcrank",
      "title": "the Great Steam Golem",
      "blurb": "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump...",
      "info": {
        "attack": 4,
        "defense": 8,
        "magic": 5,
        "difficulty": 4
      },
      "image": {
        "full": "Blitzcrank.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 96,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 582.6,
        "hpperlevel": 95,
        "mp": 267.2,
        "mpperlevel": 40,
        "movespeed": 325,
        "armor": 37,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.75,
        "mpregen": 8.5,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61.54,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 1.13,
        "attackspeed": 0.625
      }
    },
    "Brand": {
      "version": "10.7.1",
      "id": "Brand",
      "key": "63",
      "name": "Brand",
      "title": "the Burning Vengeance",
      "blurb": "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the...",
      "info": {
        "attack": 2,
        "defense": 2,
        "magic": 9,
        "difficulty": 4
      },
      "image": {
        "full": "Brand.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 144,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 519.68,
        "hpperlevel": 88,
        "mp": 469,
        "mpperlevel": 21,
        "movespeed": 340,
        "armor": 21.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 10.665,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 57.04,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 1.36,
        "attackspeed": 0.625
      }
    },
    "Braum": {
      "version": "10.7.1",
      "id": "Braum",
      "key": "201",
      "name": "Braum",
      "title": "the Heart of the Freljord",
      "blurb": "Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into...",
      "info": {
        "attack": 3,
        "defense": 9,
        "magic": 4,
        "difficulty": 3
      },
      "image": {
        "full": "Braum.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 192,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 540,
        "hpperlevel": 98,
        "mp": 310.6,
        "mpperlevel": 45,
        "movespeed": 335,
        "armor": 47,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 1,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55.376,
        "attackdamageperlevel": 3.2,
        "attackspeedperlevel": 3.5,
        "attackspeed": 0.644
      }
    },
    "Caitlyn": {
      "version": "10.7.1",
      "id": "Caitlyn",
      "key": "51",
      "name": "Caitlyn",
      "title": "the Sheriff of Piltover",
      "blurb": "Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a...",
      "info": {
        "attack": 8,
        "defense": 2,
        "magic": 2,
        "difficulty": 6
      },
      "image": {
        "full": "Caitlyn.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 240,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 481,
        "hpperlevel": 91,
        "mp": 313.7,
        "mpperlevel": 35,
        "movespeed": 325,
        "armor": 28,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 650,
        "hpregen": 3.5,
        "hpregenperlevel": 0.55,
        "mpregen": 7.4,
        "mpregenperlevel": 0.55,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 62,
        "attackdamageperlevel": 2.88,
        "attackspeedperlevel": 4,
        "attackspeed": 0.681
      }
    },
    "Camille": {
      "version": "10.7.1",
      "id": "Camille",
      "key": "164",
      "name": "Camille",
      "title": "the Steel Shadow",
      "blurb": "Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy...",
      "info": {
        "attack": 8,
        "defense": 6,
        "magic": 3,
        "difficulty": 4
      },
      "image": {
        "full": "Camille.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 288,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 575.6,
        "hpperlevel": 85,
        "mp": 338.8,
        "mpperlevel": 32,
        "movespeed": 340,
        "armor": 35,
        "armorperlevel": 3.8,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.8,
        "mpregen": 8.15,
        "mpregenperlevel": 0.75,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.644
      }
    },
    "Cassiopeia": {
      "version": "10.7.1",
      "id": "Cassiopeia",
      "key": "69",
      "name": "Cassiopeia",
      "title": "the Serpent's Embrace",
      "blurb": "Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was...",
      "info": {
        "attack": 2,
        "defense": 3,
        "magic": 9,
        "difficulty": 10
      },
      "image": {
        "full": "Cassiopeia.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 336,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 575,
        "hpperlevel": 90,
        "mp": 350,
        "mpperlevel": 40,
        "movespeed": 328,
        "armor": 20,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.5,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 1.5,
        "attackspeed": 0.647
      }
    },
    "Chogath": {
      "version": "10.7.1",
      "id": "Chogath",
      "key": "31",
      "name": "Cho'Gath",
      "title": "the Terror of the Void",
      "blurb": "From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts...",
      "info": {
        "attack": 3,
        "defense": 7,
        "magic": 7,
        "difficulty": 5
      },
      "image": {
        "full": "Chogath.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 384,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 574.4,
        "hpperlevel": 80,
        "mp": 272.2,
        "mpperlevel": 40,
        "movespeed": 345,
        "armor": 38,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9,
        "hpregenperlevel": 0.85,
        "mpregen": 7.206,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 69,
        "attackdamageperlevel": 4.2,
        "attackspeedperlevel": 1.44,
        "attackspeed": 0.625
      }
    },
    "Corki": {
      "version": "10.7.1",
      "id": "Corki",
      "key": "42",
      "name": "Corki",
      "title": "the Daring Bombardier",
      "blurb": "The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He...",
      "info": {
        "attack": 8,
        "defense": 3,
        "magic": 6,
        "difficulty": 6
      },
      "image": {
        "full": "Corki.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 432,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 518,
        "hpperlevel": 87,
        "mp": 350.16,
        "mpperlevel": 34,
        "movespeed": 325,
        "armor": 28,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 7.424,
        "mpregenperlevel": 0.55,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55,
        "attackdamageperlevel": 2.5,
        "attackspeedperlevel": 2.3,
        "attackspeed": 0.638
      }
    },
    "Darius": {
      "version": "10.7.1",
      "id": "Darius",
      "key": "122",
      "name": "Darius",
      "title": "the Hand of Noxus",
      "blurb": "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that...",
      "info": {
        "attack": 9,
        "defense": 5,
        "magic": 1,
        "difficulty": 2
      },
      "image": {
        "full": "Darius.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 0,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 582.24,
        "hpperlevel": 100,
        "mp": 263,
        "mpperlevel": 37.5,
        "movespeed": 340,
        "armor": 39,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 10,
        "hpregenperlevel": 0.95,
        "mpregen": 6.6,
        "mpregenperlevel": 0.35,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 5,
        "attackspeedperlevel": 1,
        "attackspeed": 0.625
      }
    },
    "Diana": {
      "version": "10.7.1",
      "id": "Diana",
      "key": "131",
      "name": "Diana",
      "title": "Scorn of the Moon",
      "blurb": "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued...",
      "info": {
        "attack": 7,
        "defense": 6,
        "magic": 8,
        "difficulty": 4
      },
      "image": {
        "full": "Diana.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 48,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 594,
        "hpperlevel": 95,
        "mp": 375,
        "mpperlevel": 25,
        "movespeed": 345,
        "armor": 31,
        "armorperlevel": 3.6,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 7.5,
        "hpregenperlevel": 0.85,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 57.04,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2.25,
        "attackspeed": 0.625
      }
    },
    "Draven": {
      "version": "10.7.1",
      "id": "Draven",
      "key": "119",
      "name": "Draven",
      "title": "the Glorious Executioner",
      "blurb": "In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and...",
      "info": {
        "attack": 9,
        "defense": 3,
        "magic": 1,
        "difficulty": 8
      },
      "image": {
        "full": "Draven.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 96,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 574,
        "hpperlevel": 88,
        "mp": 360.56,
        "mpperlevel": 39,
        "movespeed": 330,
        "armor": 29,
        "armorperlevel": 3.3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 3.75,
        "hpregenperlevel": 0.7,
        "mpregen": 8.042,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 3.61,
        "attackspeedperlevel": 2.7,
        "attackspeed": 0.679
      }
    },
    "DrMundo": {
      "version": "10.7.1",
      "id": "DrMundo",
      "key": "36",
      "name": "Dr. Mundo",
      "title": "the Madman of Zaun",
      "blurb": "Utterly insane, unrepentantly homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. This monosyllabic monstrosity seems to want nothing more than pain—both the giving of it, and the...",
      "info": {
        "attack": 5,
        "defense": 7,
        "magic": 6,
        "difficulty": 5
      },
      "image": {
        "full": "DrMundo.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 144,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "None",
      "stats": {
        "hp": 582.52,
        "hpperlevel": 89,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 36,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.75,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61.27,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 2.8,
        "attackspeed": 0.721
      }
    },
    "Ekko": {
      "version": "10.7.1",
      "id": "Ekko",
      "key": "245",
      "name": "Ekko",
      "title": "the Boy Who Shattered Time",
      "blurb": "A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this...",
      "info": {
        "attack": 5,
        "defense": 3,
        "magic": 7,
        "difficulty": 8
      },
      "image": {
        "full": "Ekko.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 192,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 585,
        "hpperlevel": 85,
        "mp": 280,
        "mpperlevel": 50,
        "movespeed": 340,
        "armor": 32,
        "armorperlevel": 3,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9,
        "hpregenperlevel": 0.9,
        "mpregen": 7,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 3.3,
        "attackspeed": 0.688
      }
    },
    "Elise": {
      "version": "10.7.1",
      "id": "Elise",
      "key": "60",
      "name": "Elise",
      "title": "the Spider Queen",
      "blurb": "Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly...",
      "info": {
        "attack": 6,
        "defense": 5,
        "magic": 7,
        "difficulty": 9
      },
      "image": {
        "full": "Elise.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 240,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 534,
        "hpperlevel": 93,
        "mp": 324,
        "mpperlevel": 50,
        "movespeed": 330,
        "armor": 27,
        "armorperlevel": 3.35,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.6,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 1.75,
        "attackspeed": 0.625
      }
    },
    "Evelynn": {
      "version": "10.7.1",
      "id": "Evelynn",
      "key": "28",
      "name": "Evelynn",
      "title": "Agony's Embrace",
      "blurb": "Within the dark seams of Runeterra, the demon Evelynn searches for her next victim. She lures in prey with the voluptuous façade of a human female, but once a person succumbs to her charms, Evelynn's true form is unleashed. She then subjects her victim...",
      "info": {
        "attack": 4,
        "defense": 2,
        "magic": 7,
        "difficulty": 10
      },
      "image": {
        "full": "Evelynn.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 288,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 572,
        "hpperlevel": 84,
        "mp": 315.6,
        "mpperlevel": 42,
        "movespeed": 335,
        "armor": 37,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.75,
        "mpregen": 8.108,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2.1,
        "attackspeed": 0.667
      }
    },
    "Ezreal": {
      "version": "10.7.1",
      "id": "Ezreal",
      "key": "81",
      "name": "Ezreal",
      "title": "the Prodigal Explorer",
      "blurb": "A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way...",
      "info": {
        "attack": 7,
        "defense": 2,
        "magic": 6,
        "difficulty": 7
      },
      "image": {
        "full": "Ezreal.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 336,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 500,
        "hpperlevel": 86,
        "mp": 375,
        "mpperlevel": 50,
        "movespeed": 325,
        "armor": 22,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 4,
        "hpregenperlevel": 0.55,
        "mpregen": 8.5,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 2.5,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.625
      }
    },
    "Fiddlesticks": {
      "version": "10.7.1",
      "id": "Fiddlesticks",
      "key": "9",
      "name": "Fiddlesticks",
      "title": "the Ancient Fear",
      "blurb": "Something has awoken in Runeterra. Something ancient. Something terrible. The ageless horror known as Fiddlesticks stalks the edges of mortal society, drawn to areas thick with paranoia where it feeds upon terrorized victims. Wielding a jagged scythe...",
      "info": {
        "attack": 2,
        "defense": 3,
        "magic": 9,
        "difficulty": 9
      },
      "image": {
        "full": "Fiddlesticks.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 384,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 580.4,
        "hpperlevel": 92,
        "mp": 500,
        "mpperlevel": 28,
        "movespeed": 335,
        "armor": 34,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 480,
        "hpregen": 5.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55.36,
        "attackdamageperlevel": 2.625,
        "attackspeedperlevel": 2.11,
        "attackspeed": 0.625
      }
    },
    "Fiora": {
      "version": "10.7.1",
      "id": "Fiora",
      "key": "114",
      "name": "Fiora",
      "title": "the Grand Duelist",
      "blurb": "The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier. Born to House Laurent in the kingdom of Demacia, Fiora took control of the family from her father in...",
      "info": {
        "attack": 10,
        "defense": 4,
        "magic": 2,
        "difficulty": 3
      },
      "image": {
        "full": "Fiora.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 432,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 550,
        "hpperlevel": 85,
        "mp": 300,
        "mpperlevel": 40,
        "movespeed": 345,
        "armor": 33,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 8.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 3.2,
        "attackspeed": 0.69
      }
    },
    "Fizz": {
      "version": "10.7.1",
      "id": "Fizz",
      "key": "105",
      "name": "Fizz",
      "title": "the Tidal Trickster",
      "blurb": "Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him—for many are the tales...",
      "info": {
        "attack": 6,
        "defense": 4,
        "magic": 7,
        "difficulty": 6
      },
      "image": {
        "full": "Fizz.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 0,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 570,
        "hpperlevel": 98,
        "mp": 317.2,
        "mpperlevel": 37,
        "movespeed": 335,
        "armor": 22.412,
        "armorperlevel": 3.4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.7,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58.04,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 3.1,
        "attackspeed": 0.658
      }
    },
    "Galio": {
      "version": "10.7.1",
      "id": "Galio",
      "key": "3",
      "name": "Galio",
      "title": "the Colossus",
      "blurb": "Outside the gleaming city of Demacia, the stone colossus Galio keeps vigilant watch. Built as a bulwark against enemy mages, he often stands motionless for decades until the presence of powerful magic stirs him to life. Once activated, Galio makes the...",
      "info": {
        "attack": 1,
        "defense": 10,
        "magic": 6,
        "difficulty": 5
      },
      "image": {
        "full": "Galio.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 48,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 562,
        "hpperlevel": 112,
        "mp": 500,
        "mpperlevel": 40,
        "movespeed": 335,
        "armor": 24,
        "armorperlevel": 3.5,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 8,
        "hpregenperlevel": 0.8,
        "mpregen": 9.5,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 59,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 1.5,
        "attackspeed": 0.625
      }
    },
    "Gangplank": {
      "version": "10.7.1",
      "id": "Gangplank",
      "key": "41",
      "name": "Gangplank",
      "title": "the Saltwater Scourge",
      "blurb": "As unpredictable as he is brutal, the dethroned reaver king Gangplank is feared far and wide. Once, he ruled the port city of Bilgewater, and while his reign is over, there are those who believe this has only made him more dangerous. Gangplank would see...",
      "info": {
        "attack": 7,
        "defense": 6,
        "magic": 4,
        "difficulty": 9
      },
      "image": {
        "full": "Gangplank.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 96,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 540,
        "hpperlevel": 82,
        "mp": 282,
        "mpperlevel": 40,
        "movespeed": 345,
        "armor": 35,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 6,
        "hpregenperlevel": 0.6,
        "mpregen": 7.5,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 3.2,
        "attackspeed": 0.658
      }
    },
    "Garen": {
      "version": "10.7.1",
      "id": "Garen",
      "key": "86",
      "name": "Garen",
      "title": "The Might of Demacia",
      "blurb": "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its...",
      "info": {
        "attack": 7,
        "defense": 7,
        "magic": 1,
        "difficulty": 5
      },
      "image": {
        "full": "Garen.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 144,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "None",
      "stats": {
        "hp": 620,
        "hpperlevel": 84,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 340,
        "armor": 36,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 0.75,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.5,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 4.5,
        "attackspeedperlevel": 3.65,
        "attackspeed": 0.625
      }
    },
    "Gnar": {
      "version": "10.7.1",
      "id": "Gnar",
      "key": "150",
      "name": "Gnar",
      "title": "the Missing Link",
      "blurb": "Gnar is a primeval yordle whose playful antics can erupt into a toddler's outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed...",
      "info": {
        "attack": 6,
        "defense": 5,
        "magic": 5,
        "difficulty": 8
      },
      "image": {
        "full": "Gnar.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 192,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Rage",
      "stats": {
        "hp": 510,
        "hpperlevel": 65,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 335,
        "armor": 32,
        "armorperlevel": 2.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 175,
        "hpregen": 4.5,
        "hpregenperlevel": 1.75,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 59,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 6,
        "attackspeed": 0.625
      }
    },
    "Gragas": {
      "version": "10.7.1",
      "id": "Gragas",
      "key": "79",
      "name": "Gragas",
      "title": "the Rabble Rouser",
      "blurb": "Equal parts jolly and imposing, Gragas is a massive, rowdy brewmaster on his own quest for the perfect pint of ale. Hailing from parts unknown, he now searches for rare ingredients among the unblemished wastes of the Freljord, trying each recipe as he...",
      "info": {
        "attack": 4,
        "defense": 7,
        "magic": 6,
        "difficulty": 5
      },
      "image": {
        "full": "Gragas.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 240,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 600,
        "hpperlevel": 95,
        "mp": 400,
        "mpperlevel": 47,
        "movespeed": 330,
        "armor": 35,
        "armorperlevel": 3.6,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 5.5,
        "hpregenperlevel": 0.5,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 2.05,
        "attackspeed": 0.675
      }
    },
    "Graves": {
      "version": "10.7.1",
      "id": "Graves",
      "key": "104",
      "name": "Graves",
      "title": "the Outlaw",
      "blurb": "Malcolm Graves is a renowned mercenary, gambler, and thief—a wanted man in every city and empire he has visited. Even though he has an explosive temper, he possesses a strict sense of criminal honor, often enforced at the business end of his...",
      "info": {
        "attack": 8,
        "defense": 5,
        "magic": 3,
        "difficulty": 3
      },
      "image": {
        "full": "Graves.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 288,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 555,
        "hpperlevel": 92,
        "mp": 325,
        "mpperlevel": 40,
        "movespeed": 340,
        "armor": 33,
        "armorperlevel": 3.4,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 425,
        "hpregen": 8,
        "hpregenperlevel": 0.7,
        "mpregen": 8,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2.6,
        "attackspeed": 0.475
      }
    },
    "Hecarim": {
      "version": "10.7.1",
      "id": "Hecarim",
      "key": "120",
      "name": "Hecarim",
      "title": "the Shadow of War",
      "blurb": "Hecarim is a spectral fusion of man and beast, cursed to ride down the souls of the living for all eternity. When the Blessed Isles fell into shadow, this proud knight was obliterated by the destructive energies of the Ruination, along with all his...",
      "info": {
        "attack": 8,
        "defense": 6,
        "magic": 4,
        "difficulty": 6
      },
      "image": {
        "full": "Hecarim.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 336,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 580,
        "hpperlevel": 90,
        "mp": 277.2,
        "mpperlevel": 40,
        "movespeed": 345,
        "armor": 36,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 7,
        "hpregenperlevel": 0.75,
        "mpregen": 6.5,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 3.2,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.67
      }
    },
    "Heimerdinger": {
      "version": "10.7.1",
      "id": "Heimerdinger",
      "key": "74",
      "name": "Heimerdinger",
      "title": "the Revered Inventor",
      "blurb": "A brilliant yet eccentric yordle scientist, Professor Cecil B. Heimerdinger is one of the most innovative and esteemed inventors Piltover has ever known. Relentless in his work to the point of neurotic obsession, he thrives on answering the universe's...",
      "info": {
        "attack": 2,
        "defense": 6,
        "magic": 8,
        "difficulty": 8
      },
      "image": {
        "full": "Heimerdinger.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 384,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 488,
        "hpperlevel": 87,
        "mp": 385,
        "mpperlevel": 20,
        "movespeed": 340,
        "armor": 19.04,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55.536,
        "attackdamageperlevel": 2.7,
        "attackspeedperlevel": 1.36,
        "attackspeed": 0.625
      }
    },
    "Illaoi": {
      "version": "10.7.1",
      "id": "Illaoi",
      "key": "420",
      "name": "Illaoi",
      "title": "the Kraken Priestess",
      "blurb": "Illaoi's powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes' spirits from their bodies and shatter their perception of reality. All who challenge the “Truth Bearer...",
      "info": {
        "attack": 8,
        "defense": 6,
        "magic": 3,
        "difficulty": 4
      },
      "image": {
        "full": "Illaoi.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 432,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 585.6,
        "hpperlevel": 95,
        "mp": 300,
        "mpperlevel": 40,
        "movespeed": 340,
        "armor": 35,
        "armorperlevel": 3.8,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9.5,
        "hpregenperlevel": 0.8,
        "mpregen": 7.5,
        "mpregenperlevel": 0.75,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 5,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.571
      }
    },
    "Irelia": {
      "version": "10.7.1",
      "id": "Irelia",
      "key": "39",
      "name": "Irelia",
      "title": "the Blade Dancer",
      "blurb": "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of...",
      "info": {
        "attack": 7,
        "defense": 4,
        "magic": 5,
        "difficulty": 5
      },
      "image": {
        "full": "Irelia.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 0,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 580,
        "hpperlevel": 95,
        "mp": 350,
        "mpperlevel": 30,
        "movespeed": 335,
        "armor": 36,
        "armorperlevel": 3,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 200,
        "hpregen": 8.5,
        "hpregenperlevel": 0.85,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63,
        "attackdamageperlevel": 4,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.656
      }
    },
    "Ivern": {
      "version": "10.7.1",
      "id": "Ivern",
      "key": "427",
      "name": "Ivern",
      "title": "the Green Father",
      "blurb": "Ivern Bramblefoot, known to many as the Green Father, is a peculiar half man, half tree who roams Runeterra's forests, cultivating life everywhere he goes. He knows the secrets of the natural world, and holds deep friendships with all things that grow...",
      "info": {
        "attack": 3,
        "defense": 5,
        "magic": 7,
        "difficulty": 7
      },
      "image": {
        "full": "Ivern.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 48,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 585,
        "hpperlevel": 95,
        "mp": 450,
        "mpperlevel": 60,
        "movespeed": 330,
        "armor": 27,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 475,
        "hpregen": 7,
        "hpregenperlevel": 0.85,
        "mpregen": 6,
        "mpregenperlevel": 0.75,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 3.4,
        "attackspeed": 0.644
      }
    },
    "Janna": {
      "version": "10.7.1",
      "id": "Janna",
      "key": "40",
      "name": "Janna",
      "title": "the Storm's Fury",
      "blurb": "Armed with the power of Runeterra's gales, Janna is a mysterious, elemental wind spirit who protects the dispossessed of Zaun. Some believe she was brought into existence by the pleas of Runeterra's sailors who prayed for fair winds as they navigated...",
      "info": {
        "attack": 3,
        "defense": 5,
        "magic": 7,
        "difficulty": 7
      },
      "image": {
        "full": "Janna.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 96,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 500,
        "hpperlevel": 70,
        "mp": 350,
        "mpperlevel": 64,
        "movespeed": 315,
        "armor": 28,
        "armorperlevel": 3.8,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 11.5,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 46,
        "attackdamageperlevel": 1.5,
        "attackspeedperlevel": 2.95,
        "attackspeed": 0.625
      }
    },
    "JarvanIV": {
      "version": "10.7.1",
      "id": "JarvanIV",
      "key": "59",
      "name": "Jarvan IV",
      "title": "the Exemplar of Demacia",
      "blurb": "Prince Jarvan, scion of the Lightshield dynasty, is heir apparent to the throne of Demacia. Raised to be a paragon of his nation's greatest virtues, he is forced to balance the heavy expectations placed upon him with his own desire to fight on the front...",
      "info": {
        "attack": 6,
        "defense": 8,
        "magic": 3,
        "difficulty": 5
      },
      "image": {
        "full": "JarvanIV.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 144,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 570,
        "hpperlevel": 90,
        "mp": 300,
        "mpperlevel": 40,
        "movespeed": 340,
        "armor": 34,
        "armorperlevel": 3.6,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.7,
        "mpregen": 6.5,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 3.4,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.658
      }
    },
    "Jax": {
      "version": "10.7.1",
      "id": "Jax",
      "key": "24",
      "name": "Jax",
      "title": "Grandmaster at Arms",
      "blurb": "Unmatched in both his skill with unique armaments and his biting sarcasm, Jax is the last known weapons master of Icathia. After his homeland was laid low by its own hubris in unleashing the Void, Jax and his kind vowed to protect what little remained...",
      "info": {
        "attack": 7,
        "defense": 5,
        "magic": 7,
        "difficulty": 5
      },
      "image": {
        "full": "Jax.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 192,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 592.8,
        "hpperlevel": 85,
        "mp": 338.8,
        "mpperlevel": 32,
        "movespeed": 350,
        "armor": 36,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.55,
        "mpregen": 7.576,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.375,
        "attackspeedperlevel": 3.4,
        "attackspeed": 0.638
      }
    },
    "Jayce": {
      "version": "10.7.1",
      "id": "Jayce",
      "key": "126",
      "name": "Jayce",
      "title": "the Defender of Tomorrow",
      "blurb": "Jayce is a brilliant inventor who has pledged his life to the defense of Piltover and its unyielding pursuit of progress. With his transforming hextech hammer in hand, Jayce uses his strength, courage, and considerable intelligence to protect his...",
      "info": {
        "attack": 8,
        "defense": 4,
        "magic": 3,
        "difficulty": 7
      },
      "image": {
        "full": "Jayce.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 240,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 560,
        "hpperlevel": 90,
        "mp": 375,
        "mpperlevel": 45,
        "movespeed": 335,
        "armor": 27,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 125,
        "hpregen": 6,
        "hpregenperlevel": 0.6,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 54,
        "attackdamageperlevel": 4.25,
        "attackspeedperlevel": 3,
        "attackspeed": 0.658
      }
    },
    "Jhin": {
      "version": "10.7.1",
      "id": "Jhin",
      "key": "202",
      "name": "Jhin",
      "title": "the Virtuoso",
      "blurb": "Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin...",
      "info": {
        "attack": 10,
        "defense": 2,
        "magic": 6,
        "difficulty": 6
      },
      "image": {
        "full": "Jhin.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 288,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 556,
        "hpperlevel": 91,
        "mp": 300,
        "mpperlevel": 50,
        "movespeed": 330,
        "armor": 24,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 3.75,
        "hpregenperlevel": 0.55,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 59,
        "attackdamageperlevel": 4.7,
        "attackspeedperlevel": 0,
        "attackspeed": 0.625
      }
    },
    "Jinx": {
      "version": "10.7.1",
      "id": "Jinx",
      "key": "222",
      "name": "Jinx",
      "title": "the Loose Cannon",
      "blurb": "A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake. Jinx...",
      "info": {
        "attack": 9,
        "defense": 2,
        "magic": 4,
        "difficulty": 6
      },
      "image": {
        "full": "Jinx.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 336,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 581,
        "hpperlevel": 84,
        "mp": 245,
        "mpperlevel": 45,
        "movespeed": 325,
        "armor": 28,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 3.75,
        "hpregenperlevel": 0.5,
        "mpregen": 6.7,
        "mpregenperlevel": 1,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 57,
        "attackdamageperlevel": 3.4,
        "attackspeedperlevel": 1,
        "attackspeed": 0.625
      }
    },
    "Kaisa": {
      "version": "10.7.1",
      "id": "Kaisa",
      "key": "145",
      "name": "Kai'Sa",
      "title": "Daughter of the Void",
      "blurb": "Claimed by the Void when she was only a child, Kai'Sa managed to survive through sheer tenacity and strength of will. Her experiences have made her a deadly hunter and, to some, the harbinger of a future they would rather not live to see. Having entered...",
      "info": {
        "attack": 8,
        "defense": 5,
        "magic": 3,
        "difficulty": 6
      },
      "image": {
        "full": "Kaisa.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 384,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 571,
        "hpperlevel": 86,
        "mp": 344.88,
        "mpperlevel": 38,
        "movespeed": 335,
        "armor": 28,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 3.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8.2,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 59,
        "attackdamageperlevel": 1.7,
        "attackspeedperlevel": 1.8,
        "attackspeed": 0.644
      }
    },
    "Kalista": {
      "version": "10.7.1",
      "id": "Kalista",
      "key": "429",
      "name": "Kalista",
      "title": "the Spear of Vengeance",
      "blurb": "A specter of wrath and retribution, Kalista is the undying spirit of vengeance, an armored nightmare summoned from the Shadow Isles to hunt deceivers and traitors. The betrayed may cry out in blood to be avenged, but Kalista only answers those willing...",
      "info": {
        "attack": 8,
        "defense": 2,
        "magic": 4,
        "difficulty": 7
      },
      "image": {
        "full": "Kalista.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 432,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 534,
        "hpperlevel": 100,
        "mp": 250,
        "mpperlevel": 45,
        "movespeed": 325,
        "armor": 23,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 3.75,
        "hpregenperlevel": 0.55,
        "mpregen": 6.3,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 69,
        "attackdamageperlevel": 4,
        "attackspeedperlevel": 4,
        "attackspeed": 0.694
      }
    },
    "Karma": {
      "version": "10.7.1",
      "id": "Karma",
      "key": "43",
      "name": "Karma",
      "title": "the Enlightened One",
      "blurb": "No mortal exemplifies the spiritual traditions of Ionia more than Karma. She is the living embodiment of an ancient soul reincarnated countless times, carrying all her accumulated memories into each new life, and blessed with power that few can...",
      "info": {
        "attack": 1,
        "defense": 7,
        "magic": 8,
        "difficulty": 5
      },
      "image": {
        "full": "Karma.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 0,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 534,
        "hpperlevel": 95,
        "mp": 374,
        "mpperlevel": 50,
        "movespeed": 335,
        "armor": 26,
        "armorperlevel": 3.8,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 11.5,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.544,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 2.3,
        "attackspeed": 0.625
      }
    },
    "Karthus": {
      "version": "10.7.1",
      "id": "Karthus",
      "key": "30",
      "name": "Karthus",
      "title": "the Deathsinger",
      "blurb": "The harbinger of oblivion, Karthus is an undying spirit whose haunting songs are a prelude to the horror of his nightmarish appearance. The living fear the eternity of undeath, but Karthus sees only beauty and purity in its embrace, a perfect union of...",
      "info": {
        "attack": 2,
        "defense": 2,
        "magic": 10,
        "difficulty": 7
      },
      "image": {
        "full": "Karthus.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 48,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 528,
        "hpperlevel": 87,
        "mp": 467,
        "mpperlevel": 30.5,
        "movespeed": 335,
        "armor": 20.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 450,
        "hpregen": 6.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 45.66,
        "attackdamageperlevel": 3.25,
        "attackspeedperlevel": 2.11,
        "attackspeed": 0.625
      }
    },
    "Kassadin": {
      "version": "10.7.1",
      "id": "Kassadin",
      "key": "38",
      "name": "Kassadin",
      "title": "the Void Walker",
      "blurb": "Cutting a burning swath through the darkest places of the world, Kassadin knows his days are numbered. A widely traveled Shuriman guide and adventurer, he had chosen to raise a family among the peaceful southern tribes—until the day his village was...",
      "info": {
        "attack": 3,
        "defense": 5,
        "magic": 8,
        "difficulty": 8
      },
      "image": {
        "full": "Kassadin.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 96,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 576,
        "hpperlevel": 90,
        "mp": 397.6,
        "mpperlevel": 67,
        "movespeed": 335,
        "armor": 19,
        "armorperlevel": 2.8,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 150,
        "hpregen": 6,
        "hpregenperlevel": 0.5,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58.852,
        "attackdamageperlevel": 3.9,
        "attackspeedperlevel": 3.7,
        "attackspeed": 0.64
      }
    },
    "Katarina": {
      "version": "10.7.1",
      "id": "Katarina",
      "key": "55",
      "name": "Katarina",
      "title": "the Sinister Blade",
      "blurb": "Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven...",
      "info": {
        "attack": 4,
        "defense": 3,
        "magic": 9,
        "difficulty": 8
      },
      "image": {
        "full": "Katarina.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 144,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin",
        "Mage"
      ],
      "partype": "None",
      "stats": {
        "hp": 602,
        "hpperlevel": 94,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 340,
        "armor": 27.88,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7.5,
        "hpregenperlevel": 0.7,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58,
        "attackdamageperlevel": 3.2,
        "attackspeedperlevel": 2.74,
        "attackspeed": 0.658
      }
    },
    "Kayle": {
      "version": "10.7.1",
      "id": "Kayle",
      "key": "10",
      "name": "Kayle",
      "title": "the Righteous",
      "blurb": "Born to a Targonian Aspect at the height of the Rune Wars, Kayle honored her mother's legacy by fighting for justice on wings of divine flame. She and her twin sister Morgana were the protectors of Demacia for many years—until Kayle became disillusioned...",
      "info": {
        "attack": 6,
        "defense": 6,
        "magic": 7,
        "difficulty": 7
      },
      "image": {
        "full": "Kayle.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 192,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 600,
        "hpperlevel": 85,
        "mp": 330,
        "mpperlevel": 50,
        "movespeed": 335,
        "armor": 26,
        "armorperlevel": 3,
        "spellblock": 34,
        "spellblockperlevel": 0.5,
        "attackrange": 175,
        "hpregen": 5,
        "hpregenperlevel": 0.5,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50,
        "attackdamageperlevel": 2.5,
        "attackspeedperlevel": 1.5,
        "attackspeed": 0.625
      }
    },
    "Kayn": {
      "version": "10.7.1",
      "id": "Kayn",
      "key": "141",
      "name": "Kayn",
      "title": "the Shadow Reaper",
      "blurb": "A peerless practitioner of lethal shadow magic, Shieda Kayn battles to achieve his true destiny—to one day lead the Order of Shadow into a new era of Ionian supremacy. He wields the sentient darkin weapon Rhaast, undeterred by its creeping corruption of...",
      "info": {
        "attack": 10,
        "defense": 6,
        "magic": 1,
        "difficulty": 8
      },
      "image": {
        "full": "Kayn.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 240,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 585,
        "hpperlevel": 85,
        "mp": 410,
        "mpperlevel": 50,
        "movespeed": 340,
        "armor": 38,
        "armorperlevel": 3.3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.75,
        "mpregen": 11.5,
        "mpregenperlevel": 0.95,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 2.7,
        "attackspeed": 0.669
      }
    },
    "Kennen": {
      "version": "10.7.1",
      "id": "Kennen",
      "key": "85",
      "name": "Kennen",
      "title": "the Heart of the Tempest",
      "blurb": "More than just the lightning-quick enforcer of Ionian balance, Kennen is the only yordle member of the Kinkou. Despite his small, furry stature, he is eager to take on any threat with a whirling storm of shuriken and boundless enthusiasm. Alongside his...",
      "info": {
        "attack": 6,
        "defense": 4,
        "magic": 7,
        "difficulty": 4
      },
      "image": {
        "full": "Kennen.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 288,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Marksman"
      ],
      "partype": "Energy",
      "stats": {
        "hp": 541,
        "hpperlevel": 84,
        "mp": 200,
        "mpperlevel": 0,
        "movespeed": 335,
        "armor": 29,
        "armorperlevel": 3.75,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.65,
        "mpregen": 50,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 48,
        "attackdamageperlevel": 3.75,
        "attackspeedperlevel": 3.4,
        "attackspeed": 0.625
      }
    },
    "Khazix": {
      "version": "10.7.1",
      "id": "Khazix",
      "key": "121",
      "name": "Kha'Zix",
      "title": "the Voidreaver",
      "blurb": "The Void grows, and the Void adapts—in none of its myriad spawn are these truths more apparent than Kha'Zix. Evolution drives the core of this mutating horror, born to survive and to slay the strong. Where it struggles to do so, it grows new, more...",
      "info": {
        "attack": 9,
        "defense": 4,
        "magic": 3,
        "difficulty": 6
      },
      "image": {
        "full": "Khazix.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 336,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 572.8,
        "hpperlevel": 85,
        "mp": 327.2,
        "mpperlevel": 40,
        "movespeed": 350,
        "armor": 36,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7.5,
        "hpregenperlevel": 0.75,
        "mpregen": 7.59,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63,
        "attackdamageperlevel": 3.1,
        "attackspeedperlevel": 2.7,
        "attackspeed": 0.668
      }
    },
    "Kindred": {
      "version": "10.7.1",
      "id": "Kindred",
      "key": "203",
      "name": "Kindred",
      "title": "The Eternal Hunters",
      "blurb": "Separate, but never parted, Kindred represents the twin essences of death. Lamb's bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his...",
      "info": {
        "attack": 8,
        "defense": 2,
        "magic": 2,
        "difficulty": 4
      },
      "image": {
        "full": "Kindred.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 384,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 540,
        "hpperlevel": 85,
        "mp": 300,
        "mpperlevel": 35,
        "movespeed": 325,
        "armor": 29,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 7,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 65,
        "attackdamageperlevel": 2.5,
        "attackspeedperlevel": 3.5,
        "attackspeed": 0.625
      }
    },
    "Kled": {
      "version": "10.7.1",
      "id": "Kled",
      "key": "240",
      "name": "Kled",
      "title": "the Cantankerous Cavalier",
      "blurb": "A warrior as fearless as he is ornery, the yordle Kled embodies the furious bravado of Noxus. He is an icon beloved by the empire's soldiers, distrusted by its officers, and loathed by the nobility. Many claim Kled has fought in every campaign the...",
      "info": {
        "attack": 8,
        "defense": 2,
        "magic": 2,
        "difficulty": 7
      },
      "image": {
        "full": "Kled.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 432,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Courage",
      "stats": {
        "hp": 340,
        "hpperlevel": 70,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 35,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 6,
        "hpregenperlevel": 0.75,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 65,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 3.5,
        "attackspeed": 0.625
      }
    },
    "KogMaw": {
      "version": "10.7.1",
      "id": "KogMaw",
      "key": "96",
      "name": "Kog'Maw",
      "title": "the Mouth of the Abyss",
      "blurb": "Belched forth from a rotting Void incursion deep in the wastelands of Icathia, Kog'Maw is an inquisitive yet putrid creature with a caustic, gaping mouth. This particular Void-spawn needs to gnaw and drool on anything within reach to truly understand it...",
      "info": {
        "attack": 8,
        "defense": 2,
        "magic": 5,
        "difficulty": 6
      },
      "image": {
        "full": "KogMaw.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 0,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 534,
        "hpperlevel": 88,
        "mp": 325,
        "mpperlevel": 40,
        "movespeed": 330,
        "armor": 24,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 3.75,
        "hpregenperlevel": 0.55,
        "mpregen": 8.75,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3.11,
        "attackspeedperlevel": 2.65,
        "attackspeed": 0.665
      }
    },
    "Leblanc": {
      "version": "10.7.1",
      "id": "Leblanc",
      "key": "7",
      "name": "LeBlanc",
      "title": "the Deceiver",
      "blurb": "Mysterious even to other members of the Black Rose cabal, LeBlanc is but one of many names for a pale woman who has manipulated people and events since the earliest days of Noxus. Using her magic to mirror herself, the sorceress can appear to anyone...",
      "info": {
        "attack": 1,
        "defense": 4,
        "magic": 10,
        "difficulty": 9
      },
      "image": {
        "full": "Leblanc.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 48,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 528,
        "hpperlevel": 92,
        "mp": 334,
        "mpperlevel": 50,
        "movespeed": 340,
        "armor": 21.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 7.5,
        "hpregenperlevel": 0.55,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 54.88,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 1.4,
        "attackspeed": 0.625
      }
    },
    "LeeSin": {
      "version": "10.7.1",
      "id": "LeeSin",
      "key": "64",
      "name": "Lee Sin",
      "title": "the Blind Monk",
      "blurb": "A master of Ionia's ancient martial arts, Lee Sin is a principled fighter who channels the essence of the dragon spirit to face any challenge. Though he lost his sight many years ago, the warrior-monk has devoted his life to protecting his homeland...",
      "info": {
        "attack": 8,
        "defense": 5,
        "magic": 3,
        "difficulty": 6
      },
      "image": {
        "full": "LeeSin.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 96,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Assassin"
      ],
      "partype": "Energy",
      "stats": {
        "hp": 575,
        "hpperlevel": 85,
        "mp": 200,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 33,
        "armorperlevel": 3.7,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7.5,
        "hpregenperlevel": 0.7,
        "mpregen": 50,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 70,
        "attackdamageperlevel": 3.2,
        "attackspeedperlevel": 3,
        "attackspeed": 0.651
      }
    },
    "Leona": {
      "version": "10.7.1",
      "id": "Leona",
      "key": "89",
      "name": "Leona",
      "title": "the Radiant Dawn",
      "blurb": "Imbued with the fire of the sun, Leona is a holy warrior of the Solari who defends Mount Targon with her Zenith Blade and the Shield of Daybreak. Her skin shimmers with starfire while her eyes burn with the power of the celestial Aspect within her...",
      "info": {
        "attack": 4,
        "defense": 8,
        "magic": 3,
        "difficulty": 4
      },
      "image": {
        "full": "Leona.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 144,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 576.16,
        "hpperlevel": 87,
        "mp": 302.2,
        "mpperlevel": 40,
        "movespeed": 335,
        "armor": 47,
        "armorperlevel": 3.6,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.85,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60.04,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2.9,
        "attackspeed": 0.625
      }
    },
    "Lissandra": {
      "version": "10.7.1",
      "id": "Lissandra",
      "key": "127",
      "name": "Lissandra",
      "title": "the Ice Witch",
      "blurb": "Lissandra's magic twists the pure power of ice into something dark and terrible. With the force of her black ice, she does more than freeze—she impales and crushes those who oppose her. To the terrified denizens of the north, she is known only as ''The...",
      "info": {
        "attack": 2,
        "defense": 5,
        "magic": 8,
        "difficulty": 6
      },
      "image": {
        "full": "Lissandra.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 192,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 550,
        "hpperlevel": 90,
        "mp": 475,
        "mpperlevel": 30,
        "movespeed": 325,
        "armor": 22,
        "armorperlevel": 3.7,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53,
        "attackdamageperlevel": 2.7,
        "attackspeedperlevel": 1.36,
        "attackspeed": 0.656
      }
    },
    "Lucian": {
      "version": "10.7.1",
      "id": "Lucian",
      "key": "236",
      "name": "Lucian",
      "title": "the Purifier",
      "blurb": "Lucian, a Sentinel of Light, is a grim hunter of undying spirits, pursuing them relentlessly and annihilating them with his twin relic pistols. After the wraith Thresh slew his wife, Lucian embarked on the path of vengeance—but even with her return to...",
      "info": {
        "attack": 8,
        "defense": 5,
        "magic": 3,
        "difficulty": 6
      },
      "image": {
        "full": "Lucian.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 240,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 571,
        "hpperlevel": 86,
        "mp": 348.88,
        "mpperlevel": 38,
        "movespeed": 335,
        "armor": 28,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 3.75,
        "hpregenperlevel": 0.65,
        "mpregen": 8.176,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 2.75,
        "attackspeedperlevel": 3.3,
        "attackspeed": 0.638
      }
    },
    "Lulu": {
      "version": "10.7.1",
      "id": "Lulu",
      "key": "117",
      "name": "Lulu",
      "title": "the Fae Sorceress",
      "blurb": "The yordle mage Lulu is known for conjuring dreamlike illusions and fanciful creatures as she roams Runeterra with her fairy companion Pix. Lulu shapes reality on a whim, warping the fabric of the world, and what she views as the constraints of this...",
      "info": {
        "attack": 4,
        "defense": 5,
        "magic": 7,
        "difficulty": 5
      },
      "image": {
        "full": "Lulu.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 288,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 525,
        "hpperlevel": 74,
        "mp": 350,
        "mpperlevel": 55,
        "movespeed": 330,
        "armor": 29,
        "armorperlevel": 3.7,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6,
        "hpregenperlevel": 0.6,
        "mpregen": 11,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 47,
        "attackdamageperlevel": 2.6,
        "attackspeedperlevel": 2.25,
        "attackspeed": 0.625
      }
    },
    "Lux": {
      "version": "10.7.1",
      "id": "Lux",
      "key": "99",
      "name": "Lux",
      "title": "the Lady of Luminosity",
      "blurb": "Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve...",
      "info": {
        "attack": 2,
        "defense": 4,
        "magic": 9,
        "difficulty": 5
      },
      "image": {
        "full": "Lux.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 336,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 490,
        "hpperlevel": 85,
        "mp": 480,
        "mpperlevel": 23.5,
        "movespeed": 330,
        "armor": 18.72,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.54,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 1,
        "attackspeed": 0.669
      }
    },
    "Malphite": {
      "version": "10.7.1",
      "id": "Malphite",
      "key": "54",
      "name": "Malphite",
      "title": "Shard of the Monolith",
      "blurb": "A massive creature of living stone, Malphite struggles to impose blessed order on a chaotic world. Birthed as a servitor-shard to an otherworldly obelisk known as the Monolith, he used his tremendous elemental strength to maintain and protect his...",
      "info": {
        "attack": 5,
        "defense": 9,
        "magic": 7,
        "difficulty": 2
      },
      "image": {
        "full": "Malphite.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 384,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 574.2,
        "hpperlevel": 90,
        "mp": 282.2,
        "mpperlevel": 40,
        "movespeed": 335,
        "armor": 37,
        "armorperlevel": 3.75,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 7.324,
        "mpregenperlevel": 0.55,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61.97,
        "attackdamageperlevel": 4,
        "attackspeedperlevel": 3.4,
        "attackspeed": 0.736
      }
    },
    "Malzahar": {
      "version": "10.7.1",
      "id": "Malzahar",
      "key": "90",
      "name": "Malzahar",
      "title": "the Prophet of the Void",
      "blurb": "A zealous seer dedicated to the unification of all life, Malzahar truly believes the newly emergent Void to be the path to Runeterra's salvation. In the desert wastes of Shurima, he followed the voices that whispered in his mind, all the way to ancient...",
      "info": {
        "attack": 2,
        "defense": 2,
        "magic": 9,
        "difficulty": 6
      },
      "image": {
        "full": "Malzahar.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 432,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 537,
        "hpperlevel": 87,
        "mp": 375,
        "mpperlevel": 27.5,
        "movespeed": 335,
        "armor": 18,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 6,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 1.5,
        "attackspeed": 0.625
      }
    },
    "Maokai": {
      "version": "10.7.1",
      "id": "Maokai",
      "key": "57",
      "name": "Maokai",
      "title": "the Twisted Treant",
      "blurb": "Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical cataclysm destroyed his home, surviving undeath only through the Waters of Life infused within his...",
      "info": {
        "attack": 3,
        "defense": 8,
        "magic": 6,
        "difficulty": 3
      },
      "image": {
        "full": "Maokai.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 0,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 565,
        "hpperlevel": 95,
        "mp": 377.28,
        "mpperlevel": 43,
        "movespeed": 335,
        "armor": 39,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 5,
        "hpregenperlevel": 0.75,
        "mpregen": 7.2,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63.54,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 2.125,
        "attackspeed": 0.8
      }
    },
    "MasterYi": {
      "version": "10.7.1",
      "id": "MasterYi",
      "key": "11",
      "name": "Master Yi",
      "title": "the Wuju Bladesman",
      "blurb": "Master Yi has tempered his body and sharpened his mind, so that thought and action have become almost as one. Though he chooses to enter into violence only as a last resort, the grace and speed of his blade ensures resolution is always swift. As one of...",
      "info": {
        "attack": 10,
        "defense": 4,
        "magic": 2,
        "difficulty": 4
      },
      "image": {
        "full": "MasterYi.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 48,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 598.56,
        "hpperlevel": 92,
        "mp": 250.56,
        "mpperlevel": 42,
        "movespeed": 355,
        "armor": 33,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7.5,
        "hpregenperlevel": 0.65,
        "mpregen": 7.256,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2,
        "attackspeed": 0.679
      }
    },
    "MissFortune": {
      "version": "10.7.1",
      "id": "MissFortune",
      "key": "21",
      "name": "Miss Fortune",
      "title": "the Bounty Hunter",
      "blurb": "A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city. As a child, she witnessed the reaver king Gangplank murder her family—an act she brutally...",
      "info": {
        "attack": 8,
        "defense": 2,
        "magic": 5,
        "difficulty": 1
      },
      "image": {
        "full": "MissFortune.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 96,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 541,
        "hpperlevel": 91,
        "mp": 325.84,
        "mpperlevel": 35,
        "movespeed": 325,
        "armor": 28,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 3.75,
        "hpregenperlevel": 0.65,
        "mpregen": 8.042,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50,
        "attackdamageperlevel": 2.7,
        "attackspeedperlevel": 2.25,
        "attackspeed": 0.656
      }
    },
    "MonkeyKing": {
      "version": "10.7.1",
      "id": "MonkeyKing",
      "key": "62",
      "name": "Wukong",
      "title": "the Monkey King",
      "blurb": "Wukong is a vastayan trickster who uses his strength, agility, and intelligence to confuse his opponents and gain the upper hand. After finding a lifelong friend in the warrior known as Master Yi, Wukong became the last student of the ancient martial...",
      "info": {
        "attack": 8,
        "defense": 5,
        "magic": 2,
        "difficulty": 3
      },
      "image": {
        "full": "MonkeyKing.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 144,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 540,
        "hpperlevel": 85,
        "mp": 300,
        "mpperlevel": 45,
        "movespeed": 345,
        "armor": 34,
        "armorperlevel": 3.5,
        "spellblock": 28,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 4,
        "hpregenperlevel": 0.65,
        "mpregen": 8,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 4,
        "attackspeedperlevel": 3,
        "attackspeed": 0.711
      }
    },
    "Mordekaiser": {
      "version": "10.7.1",
      "id": "Mordekaiser",
      "key": "82",
      "name": "Mordekaiser",
      "title": "the Iron Revenant",
      "blurb": "Twice slain and thrice born, Mordekaiser is a brutal warlord from a foregone epoch who uses his necromantic sorcery to bind souls into an eternity of servitude. Few now remain who remember his earlier conquests, or know the true extent of his powers—but...",
      "info": {
        "attack": 4,
        "defense": 6,
        "magic": 7,
        "difficulty": 4
      },
      "image": {
        "full": "Mordekaiser.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 192,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter"
      ],
      "partype": "Shield",
      "stats": {
        "hp": 575,
        "hpperlevel": 90,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 335,
        "armor": 37,
        "armorperlevel": 3,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 5,
        "hpregenperlevel": 0.75,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 4,
        "attackspeedperlevel": 1,
        "attackspeed": 0.625
      }
    },
    "Morgana": {
      "version": "10.7.1",
      "id": "Morgana",
      "key": "25",
      "name": "Morgana",
      "title": "the Fallen",
      "blurb": "Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from...",
      "info": {
        "attack": 1,
        "defense": 6,
        "magic": 8,
        "difficulty": 1
      },
      "image": {
        "full": "Morgana.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 240,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 560,
        "hpperlevel": 90,
        "mp": 340,
        "mpperlevel": 60,
        "movespeed": 335,
        "armor": 25,
        "armorperlevel": 3.8,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 450,
        "hpregen": 5.5,
        "hpregenperlevel": 0.4,
        "mpregen": 11,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 56,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 1.53,
        "attackspeed": 0.625
      }
    },
    "Nami": {
      "version": "10.7.1",
      "id": "Nami",
      "key": "267",
      "name": "Nami",
      "title": "the Tidecaller",
      "blurb": "A headstrong young vastaya of the seas, Nami was the first of the Marai tribe to leave the waves and venture onto dry land, when their ancient accord with the Targonians was broken. With no other option, she took it upon herself to complete the sacred...",
      "info": {
        "attack": 4,
        "defense": 3,
        "magic": 7,
        "difficulty": 5
      },
      "image": {
        "full": "Nami.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 288,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 489.32,
        "hpperlevel": 74,
        "mp": 377.24,
        "mpperlevel": 43,
        "movespeed": 335,
        "armor": 29,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 11.5,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 51.208,
        "attackdamageperlevel": 3.1,
        "attackspeedperlevel": 2.61,
        "attackspeed": 0.644
      }
    },
    "Nasus": {
      "version": "10.7.1",
      "id": "Nasus",
      "key": "75",
      "name": "Nasus",
      "title": "the Curator of the Sands",
      "blurb": "Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and peerless strategist whose wisdom guided the ancient...",
      "info": {
        "attack": 7,
        "defense": 5,
        "magic": 6,
        "difficulty": 6
      },
      "image": {
        "full": "Nasus.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 336,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 561.2,
        "hpperlevel": 90,
        "mp": 325.6,
        "mpperlevel": 42,
        "movespeed": 350,
        "armor": 34,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9,
        "hpregenperlevel": 0.9,
        "mpregen": 7.44,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 67,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 3.48,
        "attackspeed": 0.638
      }
    },
    "Nautilus": {
      "version": "10.7.1",
      "id": "Nautilus",
      "key": "111",
      "name": "Nautilus",
      "title": "the Titan of the Depths",
      "blurb": "A lonely legend as old as the first piers sunk in Bilgewater, the armored goliath known as Nautilus roams the dark waters off the coast of the Blue Flame Isles. Driven by a forgotten betrayal, he strikes without warning, swinging his enormous anchor to...",
      "info": {
        "attack": 4,
        "defense": 6,
        "magic": 6,
        "difficulty": 6
      },
      "image": {
        "full": "Nautilus.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 384,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 576.48,
        "hpperlevel": 86,
        "mp": 400,
        "mpperlevel": 47,
        "movespeed": 325,
        "armor": 39,
        "armorperlevel": 3.75,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8.626,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 1,
        "attackspeed": 0.706
      }
    },
    "Neeko": {
      "version": "10.7.1",
      "id": "Neeko",
      "key": "518",
      "name": "Neeko",
      "title": "the Curious Chameleon",
      "blurb": "Hailing from a long lost tribe of vastaya, Neeko can blend into any crowd by borrowing the appearances of others, even absorbing something of their emotional state to tell friend from foe in an instant. No one is ever sure where—or who—Neeko might be...",
      "info": {
        "attack": 1,
        "defense": 1,
        "magic": 9,
        "difficulty": 5
      },
      "image": {
        "full": "Neeko.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 432,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 540,
        "hpperlevel": 90,
        "mp": 450,
        "mpperlevel": 30,
        "movespeed": 340,
        "armor": 21,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 7.5,
        "hpregenperlevel": 0.75,
        "mpregen": 7,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 48,
        "attackdamageperlevel": 2.5,
        "attackspeedperlevel": 3.5,
        "attackspeed": 0.625
      }
    },
    "Nidalee": {
      "version": "10.7.1",
      "id": "Nidalee",
      "key": "76",
      "name": "Nidalee",
      "title": "the Bestial Huntress",
      "blurb": "Raised in the deepest jungle, Nidalee is a master tracker who can shapeshift into a ferocious cougar at will. Neither wholly woman nor beast, she viciously defends her territory from any and all trespassers, with carefully placed traps and deft spear...",
      "info": {
        "attack": 5,
        "defense": 4,
        "magic": 7,
        "difficulty": 8
      },
      "image": {
        "full": "Nidalee.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 0,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 545,
        "hpperlevel": 85,
        "mp": 295.6,
        "mpperlevel": 45,
        "movespeed": 335,
        "armor": 28,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 6,
        "hpregenperlevel": 0.6,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 3.22,
        "attackspeed": 0.638
      }
    },
    "Nocturne": {
      "version": "10.7.1",
      "id": "Nocturne",
      "key": "56",
      "name": "Nocturne",
      "title": "the Eternal Nightmare",
      "blurb": "A demonic amalgamation drawn from the nightmares that haunt every sentient mind, the thing known as Nocturne has become a primordial force of pure evil. It is liquidly chaotic in aspect, a faceless shadow with cold eyes and armed with wicked-looking...",
      "info": {
        "attack": 9,
        "defense": 5,
        "magic": 2,
        "difficulty": 4
      },
      "image": {
        "full": "Nocturne.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 48,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 585,
        "hpperlevel": 85,
        "mp": 275,
        "mpperlevel": 35,
        "movespeed": 345,
        "armor": 38,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 0.75,
        "attackrange": 125,
        "hpregen": 7,
        "hpregenperlevel": 0.75,
        "mpregen": 7,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 62,
        "attackdamageperlevel": 3.1,
        "attackspeedperlevel": 2.7,
        "attackspeed": 0.721
      }
    },
    "Nunu": {
      "version": "10.7.1",
      "id": "Nunu",
      "key": "20",
      "name": "Nunu & Willump",
      "title": "the Boy and His Yeti",
      "blurb": "Once upon a time, there was a boy who wanted to prove he was a hero by slaying a fearsome monster—only to discover that the beast, a lonely and magical yeti, merely needed a friend. Bound together by ancient power and a shared love of snowballs, Nunu...",
      "info": {
        "attack": 4,
        "defense": 6,
        "magic": 7,
        "difficulty": 4
      },
      "image": {
        "full": "Nunu.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 96,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 570,
        "hpperlevel": 82,
        "mp": 280,
        "mpperlevel": 42,
        "movespeed": 345,
        "armor": 32,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 5,
        "hpregenperlevel": 0.8,
        "mpregen": 7,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2.25,
        "attackspeed": 0.625
      }
    },
    "Olaf": {
      "version": "10.7.1",
      "id": "Olaf",
      "key": "2",
      "name": "Olaf",
      "title": "the Berserker",
      "blurb": "An unstoppable force of destruction, the axe-wielding Olaf wants nothing but to die in glorious combat. Hailing from the brutal Freljordian peninsula of Lokfar, he once received a prophecy foretelling his peaceful passing—a coward's fate, and a great...",
      "info": {
        "attack": 9,
        "defense": 5,
        "magic": 3,
        "difficulty": 3
      },
      "image": {
        "full": "Olaf.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 144,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 597.24,
        "hpperlevel": 93,
        "mp": 315.6,
        "mpperlevel": 42,
        "movespeed": 350,
        "armor": 35,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.9,
        "mpregen": 7.466,
        "mpregenperlevel": 0.575,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 2.7,
        "attackspeed": 0.694
      }
    },
    "Orianna": {
      "version": "10.7.1",
      "id": "Orianna",
      "key": "61",
      "name": "Orianna",
      "title": "the Lady of Clockwork",
      "blurb": "Once a curious girl of flesh and blood, Orianna is now a technological marvel comprised entirely of clockwork. She became gravely ill after an accident in the lower districts of Zaun, and her failing body had to be replaced with exquisite artifice...",
      "info": {
        "attack": 4,
        "defense": 3,
        "magic": 9,
        "difficulty": 7
      },
      "image": {
        "full": "Orianna.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 192,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 530,
        "hpperlevel": 91,
        "mp": 418,
        "mpperlevel": 25,
        "movespeed": 325,
        "armor": 17.04,
        "armorperlevel": 3,
        "spellblock": 26,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 40.368,
        "attackdamageperlevel": 2.6,
        "attackspeedperlevel": 3.5,
        "attackspeed": 0.658
      }
    },
    "Ornn": {
      "version": "10.7.1",
      "id": "Ornn",
      "key": "516",
      "name": "Ornn",
      "title": "The Fire below the Mountain",
      "blurb": "Ornn is the Freljordian spirit of forging and craftsmanship. He works in the solitude of a massive smithy, hammered out from the lava caverns beneath the volcano Hearth-Home. There he stokes bubbling cauldrons of molten rock to purify ores and fashion...",
      "info": {
        "attack": 5,
        "defense": 9,
        "magic": 3,
        "difficulty": 5
      },
      "image": {
        "full": "Ornn.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 240,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 590,
        "hpperlevel": 95,
        "mp": 340.6,
        "mpperlevel": 45,
        "movespeed": 335,
        "armor": 36,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 9,
        "hpregenperlevel": 0.9,
        "mpregen": 8.01,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 69,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 2,
        "attackspeed": 0.625
      }
    },
    "Pantheon": {
      "version": "10.7.1",
      "id": "Pantheon",
      "key": "80",
      "name": "Pantheon",
      "title": "the Unbreakable Spear",
      "blurb": "Once an unwilling host to the Aspect of War, Atreus survived when the celestial power within him was slain, refusing to succumb to a blow that tore stars from the heavens. In time, he learned to embrace the power of his own mortality, and the stubborn...",
      "info": {
        "attack": 9,
        "defense": 4,
        "magic": 3,
        "difficulty": 4
      },
      "image": {
        "full": "Pantheon.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 288,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 580,
        "hpperlevel": 95,
        "mp": 317.12,
        "mpperlevel": 31,
        "movespeed": 355,
        "armor": 40,
        "armorperlevel": 3.75,
        "spellblock": 28,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 10,
        "hpregenperlevel": 0.65,
        "mpregen": 7.356,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 2.95,
        "attackspeed": 0.644
      }
    },
    "Poppy": {
      "version": "10.7.1",
      "id": "Poppy",
      "key": "78",
      "name": "Poppy",
      "title": "Keeper of the Hammer",
      "blurb": "Runeterra has no shortage of valiant champions, but few are as tenacious as Poppy. Bearing the legendary hammer of Orlon, a weapon twice her size, this determined yordle has spent untold years searching in secret for the fabled “Hero of Demacia,” said...",
      "info": {
        "attack": 6,
        "defense": 7,
        "magic": 2,
        "difficulty": 6
      },
      "image": {
        "full": "Poppy.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 336,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 540,
        "hpperlevel": 90,
        "mp": 280,
        "mpperlevel": 40,
        "movespeed": 345,
        "armor": 38,
        "armorperlevel": 3.5,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.8,
        "mpregen": 7,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 4,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.625
      }
    },
    "Pyke": {
      "version": "10.7.1",
      "id": "Pyke",
      "key": "555",
      "name": "Pyke",
      "title": "the Bloodharbor Ripper",
      "blurb": "A renowned harpooner from the slaughter docks of Bilgewater, Pyke should have met his death in the belly of a gigantic jaull-fish… and yet, he returned. Now, stalking the dank alleys and backways of his former hometown, he uses his new supernatural...",
      "info": {
        "attack": 9,
        "defense": 3,
        "magic": 1,
        "difficulty": 7
      },
      "image": {
        "full": "Pyke.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 384,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 600,
        "hpperlevel": 90,
        "mp": 415,
        "mpperlevel": 50,
        "movespeed": 330,
        "armor": 45,
        "armorperlevel": 5,
        "spellblock": 32,
        "spellblockperlevel": 1.5,
        "attackrange": 150,
        "hpregen": 7,
        "hpregenperlevel": 0.5,
        "mpregen": 8,
        "mpregenperlevel": 1,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 62,
        "attackdamageperlevel": 2,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.667
      }
    },
    "Qiyana": {
      "version": "10.7.1",
      "id": "Qiyana",
      "key": "246",
      "name": "Qiyana",
      "title": "Empress of the Elements",
      "blurb": "In the jungle city of Ixaocan, Qiyana plots her own ruthless path to the high seat of the Yun Tal. Last in line to succeed her parents, she faces those who stand in her way with brash confidence and unprecedented mastery over elemental magic. With the...",
      "info": {
        "attack": 0,
        "defense": 2,
        "magic": 4,
        "difficulty": 8
      },
      "image": {
        "full": "Qiyana.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 432,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 590,
        "hpperlevel": 90,
        "mp": 320,
        "mpperlevel": 50,
        "movespeed": 335,
        "armor": 28,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 8.5,
        "hpregenperlevel": 0.65,
        "mpregen": 8,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 3.1,
        "attackspeedperlevel": 2.1,
        "attackspeed": 0.625
      }
    },
    "Quinn": {
      "version": "10.7.1",
      "id": "Quinn",
      "key": "133",
      "name": "Quinn",
      "title": "Demacia's Wings",
      "blurb": "Quinn is an elite ranger-knight of Demacia, who undertakes dangerous missions deep in enemy territory. She and her legendary eagle, Valor, share an unbreakable bond, and their foes are often slain before they realize they are fighting not one, but two...",
      "info": {
        "attack": 9,
        "defense": 4,
        "magic": 2,
        "difficulty": 5
      },
      "image": {
        "full": "Quinn.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 0,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 532.8,
        "hpperlevel": 85,
        "mp": 268.8,
        "mpperlevel": 35,
        "movespeed": 335,
        "armor": 28,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 6.972,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 59,
        "attackdamageperlevel": 2.4,
        "attackspeedperlevel": 3.1,
        "attackspeed": 0.668
      }
    },
    "Rakan": {
      "version": "10.7.1",
      "id": "Rakan",
      "key": "497",
      "name": "Rakan",
      "title": "The Charmer",
      "blurb": "As mercurial as he is charming, Rakan is an infamous vastayan troublemaker and the greatest battle-dancer in Lhotlan tribal history. To the humans of the Ionian highlands, his name has long been synonymous with wild festivals, uncontrollable parties...",
      "info": {
        "attack": 2,
        "defense": 4,
        "magic": 8,
        "difficulty": 5
      },
      "image": {
        "full": "Rakan.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 48,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 540,
        "hpperlevel": 85,
        "mp": 315,
        "mpperlevel": 50,
        "movespeed": 335,
        "armor": 32,
        "armorperlevel": 3.9,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 300,
        "hpregen": 5,
        "hpregenperlevel": 0.5,
        "mpregen": 8.75,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 62,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 3,
        "attackspeed": 0.635
      }
    },
    "Rammus": {
      "version": "10.7.1",
      "id": "Rammus",
      "key": "33",
      "name": "Rammus",
      "title": "the Armordillo",
      "blurb": "Idolized by many, dismissed by some, mystifying to all, the curious being Rammus is an enigma. Protected by a spiked shell, he inspires increasingly disparate theories on his origin wherever he goes—from demigod, to sacred oracle, to a mere beast...",
      "info": {
        "attack": 4,
        "defense": 10,
        "magic": 5,
        "difficulty": 5
      },
      "image": {
        "full": "Rammus.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 96,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 564.48,
        "hpperlevel": 95,
        "mp": 310.44,
        "mpperlevel": 33,
        "movespeed": 335,
        "armor": 36,
        "armorperlevel": 4.3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.55,
        "mpregen": 7.84,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55.88,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 2.215,
        "attackspeed": 0.656
      }
    },
    "RekSai": {
      "version": "10.7.1",
      "id": "RekSai",
      "key": "421",
      "name": "Rek'Sai",
      "title": "the Void Burrower",
      "blurb": "An apex predator, Rek'Sai is a merciless Void-spawn that tunnels beneath the ground to ambush and devour unsuspecting prey. Her insatiable hunger has laid waste to entire regions of the once-great empire of Shurima—merchants, traders, even armed...",
      "info": {
        "attack": 8,
        "defense": 5,
        "magic": 2,
        "difficulty": 3
      },
      "image": {
        "full": "RekSai.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 144,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter"
      ],
      "partype": "Rage",
      "stats": {
        "hp": 570,
        "hpperlevel": 85,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 335,
        "armor": 36,
        "armorperlevel": 3.75,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 7.5,
        "hpregenperlevel": 0.65,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2,
        "attackspeed": 0.667
      }
    },
    "Renekton": {
      "version": "10.7.1",
      "id": "Renekton",
      "key": "58",
      "name": "Renekton",
      "title": "the Butcher of the Sands",
      "blurb": "Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the nation's armies to countless victories. However, after the empire's fall, Renekton was entombed...",
      "info": {
        "attack": 8,
        "defense": 5,
        "magic": 2,
        "difficulty": 3
      },
      "image": {
        "full": "Renekton.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 192,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Fury",
      "stats": {
        "hp": 575,
        "hpperlevel": 87,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 35,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.75,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 69,
        "attackdamageperlevel": 3.75,
        "attackspeedperlevel": 2.75,
        "attackspeed": 0.665
      }
    },
    "Rengar": {
      "version": "10.7.1",
      "id": "Rengar",
      "key": "107",
      "name": "Rengar",
      "title": "the Pridestalker",
      "blurb": "Rengar is a ferocious vastayan trophy hunter who lives for the thrill of tracking down and killing dangerous creatures. He scours the world for the most fearsome beasts he can find, especially seeking any trace of Kha'Zix, the void creature who...",
      "info": {
        "attack": 7,
        "defense": 4,
        "magic": 2,
        "difficulty": 8
      },
      "image": {
        "full": "Rengar.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 240,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin",
        "Fighter"
      ],
      "partype": "Ferocity",
      "stats": {
        "hp": 585,
        "hpperlevel": 90,
        "mp": 4,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 34,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7,
        "hpregenperlevel": 0.5,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 3,
        "attackspeed": 0.667
      }
    },
    "Riven": {
      "version": "10.7.1",
      "id": "Riven",
      "key": "92",
      "name": "Riven",
      "title": "the Exile",
      "blurb": "Once a swordmaster in the warhosts of Noxus, Riven is an expatriate in a land she previously tried to conquer. She rose through the ranks on the strength of her conviction and brutal efficiency, and was rewarded with a legendary runic blade and a...",
      "info": {
        "attack": 8,
        "defense": 5,
        "magic": 1,
        "difficulty": 8
      },
      "image": {
        "full": "Riven.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 288,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Assassin"
      ],
      "partype": "None",
      "stats": {
        "hp": 560,
        "hpperlevel": 86,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 340,
        "armor": 33,
        "armorperlevel": 3.2,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.5,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 3.5,
        "attackspeed": 0.625
      }
    },
    "Rumble": {
      "version": "10.7.1",
      "id": "Rumble",
      "key": "68",
      "name": "Rumble",
      "title": "the Mechanized Menace",
      "blurb": "Rumble is a young inventor with a temper. Using nothing more than his own two hands and a heap of scrap, the feisty yordle constructed a colossal mech suit outfitted with an arsenal of electrified harpoons and incendiary rockets. Though others may scoff...",
      "info": {
        "attack": 3,
        "defense": 6,
        "magic": 8,
        "difficulty": 10
      },
      "image": {
        "full": "Rumble.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 336,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Mage"
      ],
      "partype": "Heat",
      "stats": {
        "hp": 589,
        "hpperlevel": 85,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 31,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.6,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3.2,
        "attackspeedperlevel": 1.85,
        "attackspeed": 0.644
      }
    },
    "Ryze": {
      "version": "10.7.1",
      "id": "Ryze",
      "key": "13",
      "name": "Ryze",
      "title": "the Rune Mage",
      "blurb": "Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with immense arcane power and a boundless constitution, he tirelessly hunts for World Runes—fragments...",
      "info": {
        "attack": 2,
        "defense": 2,
        "magic": 10,
        "difficulty": 7
      },
      "image": {
        "full": "Ryze.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 384,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 570.48,
        "hpperlevel": 98,
        "mp": 300,
        "mpperlevel": 50,
        "movespeed": 340,
        "armor": 21.552,
        "armorperlevel": 3,
        "spellblock": 34,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 8,
        "hpregenperlevel": 0.8,
        "mpregen": 8,
        "mpregenperlevel": 1,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55.04,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2.112,
        "attackspeed": 0.625
      }
    },
    "Sejuani": {
      "version": "10.7.1",
      "id": "Sejuani",
      "key": "113",
      "name": "Sejuani",
      "title": "Fury of the North",
      "blurb": "Sejuani is the brutal, unforgiving Iceborn warmother of the Winter's Claw, one of the most feared tribes of the Freljord. Her people's survival is a constant, desperate battle against the elements, forcing them to raid Noxians, Demacians, and Avarosans...",
      "info": {
        "attack": 5,
        "defense": 7,
        "magic": 6,
        "difficulty": 4
      },
      "image": {
        "full": "Sejuani.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 432,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 560,
        "hpperlevel": 100,
        "mp": 400,
        "mpperlevel": 40,
        "movespeed": 340,
        "armor": 34,
        "armorperlevel": 4.25,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 8.5,
        "hpregenperlevel": 1,
        "mpregen": 7,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 4,
        "attackspeedperlevel": 3.5,
        "attackspeed": 0.688
      }
    },
    "Senna": {
      "version": "10.7.1",
      "id": "Senna",
      "key": "235",
      "name": "Senna",
      "title": "the Redeemer",
      "blurb": "Cursed from childhood to be haunted by the supernatural Black Mist, Senna joined a sacred order known as the Sentinels of Light, and fiercely fought back—only to be killed, her soul imprisoned in a lantern by the cruel wraith Thresh. But refusing to...",
      "info": {
        "attack": 7,
        "defense": 2,
        "magic": 6,
        "difficulty": 7
      },
      "image": {
        "full": "Senna.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 0,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 520,
        "hpperlevel": 75,
        "mp": 350,
        "mpperlevel": 45,
        "movespeed": 330,
        "armor": 28,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 600,
        "hpregen": 3.5,
        "hpregenperlevel": 0.55,
        "mpregen": 11.5,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50,
        "attackdamageperlevel": 0,
        "attackspeedperlevel": 4,
        "attackspeed": 0.625
      }
    },
    "Sett": {
      "version": "10.7.1",
      "id": "Sett",
      "key": "875",
      "name": "Sett",
      "title": "the Boss",
      "blurb": "A leader of Ionia's growing criminal underworld, Sett rose to prominence in the wake of the war with Noxus. Though he began as a humble challenger in the fighting pits of Navori, he quickly gained notoriety for his savage strength, and his ability to...",
      "info": {
        "attack": 8,
        "defense": 5,
        "magic": 1,
        "difficulty": 2
      },
      "image": {
        "full": "Sett.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 48,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Grit",
      "stats": {
        "hp": 600,
        "hpperlevel": 93,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 340,
        "armor": 33,
        "armorperlevel": 4,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7,
        "hpregenperlevel": 0.5,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 4,
        "attackspeedperlevel": 1.75,
        "attackspeed": 0.625
      }
    },
    "Shaco": {
      "version": "10.7.1",
      "id": "Shaco",
      "key": "35",
      "name": "Shaco",
      "title": "the Demon Jester",
      "blurb": "Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls...",
      "info": {
        "attack": 8,
        "defense": 4,
        "magic": 6,
        "difficulty": 9
      },
      "image": {
        "full": "Shaco.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 96,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 587,
        "hpperlevel": 89,
        "mp": 297.2,
        "mpperlevel": 40,
        "movespeed": 350,
        "armor": 30,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.55,
        "mpregen": 7.156,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 3,
        "attackspeed": 0.694
      }
    },
    "Shen": {
      "version": "10.7.1",
      "id": "Shen",
      "key": "98",
      "name": "Shen",
      "title": "the Eye of Twilight",
      "blurb": "Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader, the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit...",
      "info": {
        "attack": 3,
        "defense": 9,
        "magic": 3,
        "difficulty": 4
      },
      "image": {
        "full": "Shen.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 144,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank"
      ],
      "partype": "Energy",
      "stats": {
        "hp": 540,
        "hpperlevel": 85,
        "mp": 400,
        "mpperlevel": 0,
        "movespeed": 340,
        "armor": 34,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.75,
        "mpregen": 50,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 3,
        "attackspeed": 0.751
      }
    },
    "Shyvana": {
      "version": "10.7.1",
      "id": "Shyvana",
      "key": "102",
      "name": "Shyvana",
      "title": "the Half-Dragon",
      "blurb": "Shyvana is a creature with the magic of a rune shard burning within her heart. Though she often appears humanoid, she can take her true form as a fearsome dragon, incinerating her foes with fiery breath. Having saved the life of the crown prince Jarvan...",
      "info": {
        "attack": 8,
        "defense": 6,
        "magic": 3,
        "difficulty": 4
      },
      "image": {
        "full": "Shyvana.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 192,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Fury",
      "stats": {
        "hp": 595,
        "hpperlevel": 95,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 350,
        "armor": 38,
        "armorperlevel": 3.35,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.8,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 3.4,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.658
      }
    },
    "Singed": {
      "version": "10.7.1",
      "id": "Singed",
      "key": "27",
      "name": "Singed",
      "title": "the Mad Chemist",
      "blurb": "Singed is a Zaunite alchemist of unmatched intellect, who has devoted his life to pushing the boundaries of knowledge—with no price, even his own sanity, too high to pay. Is there a method to his madness? His concoctions rarely fail, but it appears to...",
      "info": {
        "attack": 4,
        "defense": 8,
        "magic": 7,
        "difficulty": 5
      },
      "image": {
        "full": "Singed.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 240,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 580,
        "hpperlevel": 85,
        "mp": 330,
        "mpperlevel": 45,
        "movespeed": 345,
        "armor": 34,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9.5,
        "hpregenperlevel": 0.55,
        "mpregen": 7.5,
        "mpregenperlevel": 0.55,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63,
        "attackdamageperlevel": 3.375,
        "attackspeedperlevel": 1.9,
        "attackspeed": 0.613
      }
    },
    "Sion": {
      "version": "10.7.1",
      "id": "Sion",
      "key": "14",
      "name": "Sion",
      "title": "The Undead Juggernaut",
      "blurb": "A war hero from a bygone era, Sion was revered in Noxus for choking the life out of a Demacian king with his bare hands—but, denied oblivion, he was resurrected to serve his empire even in death. His indiscriminate slaughter claimed all who stood in his...",
      "info": {
        "attack": 5,
        "defense": 9,
        "magic": 3,
        "difficulty": 5
      },
      "image": {
        "full": "Sion.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 288,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 545,
        "hpperlevel": 73,
        "mp": 330,
        "mpperlevel": 42,
        "movespeed": 345,
        "armor": 32,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 7.5,
        "hpregenperlevel": 0.8,
        "mpregen": 8,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 4,
        "attackspeedperlevel": 1.3,
        "attackspeed": 0.679
      }
    },
    "Sivir": {
      "version": "10.7.1",
      "id": "Sivir",
      "key": "15",
      "name": "Sivir",
      "title": "the Battle Mistress",
      "blurb": "Sivir is a renowned fortune hunter and mercenary captain who plies her trade in the deserts of Shurima. Armed with her legendary jeweled crossblade, she has fought and won countless battles for those who can afford her exorbitant price. Known for her...",
      "info": {
        "attack": 9,
        "defense": 3,
        "magic": 1,
        "difficulty": 4
      },
      "image": {
        "full": "Sivir.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 336,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 532,
        "hpperlevel": 88,
        "mp": 284,
        "mpperlevel": 50,
        "movespeed": 335,
        "armor": 26,
        "armorperlevel": 3.25,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 3.25,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.9,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 1.6,
        "attackspeed": 0.625
      }
    },
    "Skarner": {
      "version": "10.7.1",
      "id": "Skarner",
      "key": "72",
      "name": "Skarner",
      "title": "the Crystal Vanguard",
      "blurb": "Skarner is an immense crystalline scorpion from a hidden valley in Shurima. Part of the ancient Brackern race, Skarner and his kin are known for their great wisdom and deep connection to the land, as their souls are fused with powerful life crystals...",
      "info": {
        "attack": 7,
        "defense": 6,
        "magic": 5,
        "difficulty": 5
      },
      "image": {
        "full": "Skarner.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 384,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 601.28,
        "hpperlevel": 90,
        "mp": 320,
        "mpperlevel": 40,
        "movespeed": 335,
        "armor": 38,
        "armorperlevel": 3.8,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9,
        "hpregenperlevel": 0.85,
        "mpregen": 7.206,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 65,
        "attackdamageperlevel": 4.5,
        "attackspeedperlevel": 2.1,
        "attackspeed": 0.625
      }
    },
    "Sona": {
      "version": "10.7.1",
      "id": "Sona",
      "key": "37",
      "name": "Sona",
      "title": "Maven of the Strings",
      "blurb": "Sona is Demacia's foremost virtuoso of the stringed etwahl, speaking only through her graceful chords and vibrant arias. This genteel manner has endeared her to the highborn, though others suspect her spellbinding melodies to actually emanate magic—a...",
      "info": {
        "attack": 5,
        "defense": 2,
        "magic": 8,
        "difficulty": 4
      },
      "image": {
        "full": "Sona.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 432,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 482.36,
        "hpperlevel": 77,
        "mp": 340.6,
        "mpperlevel": 45,
        "movespeed": 325,
        "armor": 28,
        "armorperlevel": 3.3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 11.5,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 49,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2.3,
        "attackspeed": 0.644
      }
    },
    "Soraka": {
      "version": "10.7.1",
      "id": "Soraka",
      "key": "16",
      "name": "Soraka",
      "title": "the Starchild",
      "blurb": "A wanderer from the celestial dimensions beyond Mount Targon, Soraka gave up her immortality to protect the mortal races from their own more violent instincts. She endeavors to spread the virtues of compassion and mercy to everyone she meets—even...",
      "info": {
        "attack": 2,
        "defense": 5,
        "magic": 7,
        "difficulty": 3
      },
      "image": {
        "full": "Soraka.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 0,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 535,
        "hpperlevel": 74,
        "mp": 375,
        "mpperlevel": 40,
        "movespeed": 325,
        "armor": 32,
        "armorperlevel": 3.8,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 2.5,
        "hpregenperlevel": 0.5,
        "mpregen": 11.5,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2.14,
        "attackspeed": 0.625
      }
    },
    "Swain": {
      "version": "10.7.1",
      "id": "Swain",
      "key": "50",
      "name": "Swain",
      "title": "the Noxian Grand General",
      "blurb": "Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination… and a new...",
      "info": {
        "attack": 2,
        "defense": 6,
        "magic": 9,
        "difficulty": 8
      },
      "image": {
        "full": "Swain.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 48,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 525,
        "hpperlevel": 85,
        "mp": 468,
        "mpperlevel": 28.5,
        "movespeed": 335,
        "armor": 22.72,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 7,
        "hpregenperlevel": 0.65,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58,
        "attackdamageperlevel": 2.7,
        "attackspeedperlevel": 2.11,
        "attackspeed": 0.625
      }
    },
    "Sylas": {
      "version": "10.7.1",
      "id": "Sylas",
      "key": "517",
      "name": "Sylas",
      "title": "the Unshackled",
      "blurb": "Raised in one of Demacia's lesser quarters, Sylas of Dregbourne has come to symbolize the darker side of the Great City. As a boy, his ability to root out hidden sorcery caught the attention of the notorious mageseekers, who eventually imprisoned him...",
      "info": {
        "attack": 3,
        "defense": 4,
        "magic": 8,
        "difficulty": 5
      },
      "image": {
        "full": "Sylas.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 96,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 525,
        "hpperlevel": 115,
        "mp": 280,
        "mpperlevel": 50,
        "movespeed": 340,
        "armor": 27,
        "armorperlevel": 4,
        "spellblock": 32,
        "spellblockperlevel": 1.75,
        "attackrange": 175,
        "hpregen": 9,
        "hpregenperlevel": 0.9,
        "mpregen": 7,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 3.5,
        "attackspeed": 0.645
      }
    },
    "Syndra": {
      "version": "10.7.1",
      "id": "Syndra",
      "key": "134",
      "name": "Syndra",
      "title": "the Dark Sovereign",
      "blurb": "Syndra is a fearsome Ionian mage with incredible power at her command. As a child, she disturbed the village elders with her reckless and wild magic. She was sent away to be taught greater control, but eventually discovered her supposed mentor was...",
      "info": {
        "attack": 2,
        "defense": 3,
        "magic": 9,
        "difficulty": 8
      },
      "image": {
        "full": "Syndra.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 144,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 523,
        "hpperlevel": 90,
        "mp": 480,
        "mpperlevel": 40,
        "movespeed": 330,
        "armor": 24.712,
        "armorperlevel": 3.4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.872,
        "attackdamageperlevel": 2.9,
        "attackspeedperlevel": 2,
        "attackspeed": 0.625
      }
    },
    "TahmKench": {
      "version": "10.7.1",
      "id": "TahmKench",
      "key": "223",
      "name": "Tahm Kench",
      "title": "the River King",
      "blurb": "Known by many names throughout history, the demon Tahm Kench travels the waterways of Runeterra, feeding his insatiable appetite with the misery of others. Though he may appear singularly charming and proud, he swaggers through the physical realm like a...",
      "info": {
        "attack": 3,
        "defense": 9,
        "magic": 6,
        "difficulty": 5
      },
      "image": {
        "full": "TahmKench.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 192,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 600,
        "hpperlevel": 100,
        "mp": 325,
        "mpperlevel": 40,
        "movespeed": 335,
        "armor": 47,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 6.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 1,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 56,
        "attackdamageperlevel": 3.2,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.658
      }
    },
    "Taliyah": {
      "version": "10.7.1",
      "id": "Taliyah",
      "key": "163",
      "name": "Taliyah",
      "title": "the Stoneweaver",
      "blurb": "Taliyah is a nomadic mage from Shurima, torn between teenage wonder and adult responsibility. She has crossed nearly all of Valoran on a journey to learn the true nature of her growing powers, though more recently she has returned to protect her tribe...",
      "info": {
        "attack": 1,
        "defense": 7,
        "magic": 8,
        "difficulty": 5
      },
      "image": {
        "full": "Taliyah.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 240,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 532,
        "hpperlevel": 90,
        "mp": 425,
        "mpperlevel": 30,
        "movespeed": 335,
        "armor": 20,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 7,
        "hpregenperlevel": 0.7,
        "mpregen": 9.335,
        "mpregenperlevel": 0.85,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 1.36,
        "attackspeed": 0.625
      }
    },
    "Talon": {
      "version": "10.7.1",
      "id": "Talon",
      "key": "91",
      "name": "Talon",
      "title": "the Blade's Shadow",
      "blurb": "Talon is the knife in the darkness, a merciless killer able to strike without warning and escape before any alarm is raised. He carved out a dangerous reputation on the brutal streets of Noxus, where he was forced to fight, kill, and steal to survive...",
      "info": {
        "attack": 9,
        "defense": 3,
        "magic": 1,
        "difficulty": 7
      },
      "image": {
        "full": "Talon.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 288,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 588,
        "hpperlevel": 95,
        "mp": 377.2,
        "mpperlevel": 37,
        "movespeed": 335,
        "armor": 30,
        "armorperlevel": 3.5,
        "spellblock": 39,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.75,
        "mpregen": 7.6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.1,
        "attackspeedperlevel": 2.9,
        "attackspeed": 0.625
      }
    },
    "Taric": {
      "version": "10.7.1",
      "id": "Taric",
      "key": "44",
      "name": "Taric",
      "title": "the Shield of Valoran",
      "blurb": "Taric is the Aspect of the Protector, wielding incredible power as Runeterra's guardian of life, love, and beauty. Shamed by a dereliction of duty and exiled from his homeland Demacia, Taric ascended Mount Targon to find redemption, only to discover a...",
      "info": {
        "attack": 4,
        "defense": 8,
        "magic": 5,
        "difficulty": 3
      },
      "image": {
        "full": "Taric.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 336,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 575,
        "hpperlevel": 90,
        "mp": 300,
        "mpperlevel": 60,
        "movespeed": 340,
        "armor": 40,
        "armorperlevel": 3.4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 6,
        "hpregenperlevel": 0.5,
        "mpregen": 8.5,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 2,
        "attackspeed": 0.625
      }
    },
    "Teemo": {
      "version": "10.7.1",
      "id": "Teemo",
      "key": "17",
      "name": "Teemo",
      "title": "the Swift Scout",
      "blurb": "Undeterred by even the most dangerous and threatening of obstacles, Teemo scouts the world with boundless enthusiasm and a cheerful spirit. A yordle with an unwavering sense of morality, he takes pride in following the Bandle Scout's Code, sometimes...",
      "info": {
        "attack": 5,
        "defense": 3,
        "magic": 7,
        "difficulty": 6
      },
      "image": {
        "full": "Teemo.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 384,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 528,
        "hpperlevel": 90,
        "mp": 334,
        "mpperlevel": 20,
        "movespeed": 330,
        "armor": 24.3,
        "armorperlevel": 3.75,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 5.5,
        "hpregenperlevel": 0.65,
        "mpregen": 9.6,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 54,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 3.38,
        "attackspeed": 0.69
      }
    },
    "Thresh": {
      "version": "10.7.1",
      "id": "Thresh",
      "key": "412",
      "name": "Thresh",
      "title": "the Chain Warden",
      "blurb": "Sadistic and cunning, Thresh is an ambitious and restless spirit of the Shadow Isles. Once the custodian of countless arcane secrets, he was undone by a power greater than life or death, and now sustains himself by tormenting and breaking others with...",
      "info": {
        "attack": 5,
        "defense": 6,
        "magic": 6,
        "difficulty": 7
      },
      "image": {
        "full": "Thresh.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 432,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Fighter"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 560.52,
        "hpperlevel": 93,
        "mp": 273.92,
        "mpperlevel": 44,
        "movespeed": 335,
        "armor": 28,
        "armorperlevel": 0,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 450,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 56,
        "attackdamageperlevel": 2.2,
        "attackspeedperlevel": 3.5,
        "attackspeed": 0.625
      }
    },
    "Tristana": {
      "version": "10.7.1",
      "id": "Tristana",
      "key": "18",
      "name": "Tristana",
      "title": "the Yordle Gunner",
      "blurb": "While many other yordles channel their energy into discovery, invention, or just plain mischief-making, Tristana was always inspired by the adventures of great warriors. She had heard much about Runeterra, its factions, and its wars, and believed her...",
      "info": {
        "attack": 9,
        "defense": 3,
        "magic": 5,
        "difficulty": 4
      },
      "image": {
        "full": "Tristana.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 0,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 559,
        "hpperlevel": 88,
        "mp": 250,
        "mpperlevel": 32,
        "movespeed": 325,
        "armor": 26,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 3.75,
        "hpregenperlevel": 0.65,
        "mpregen": 7.2,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 1.5,
        "attackspeed": 0.656
      }
    },
    "Trundle": {
      "version": "10.7.1",
      "id": "Trundle",
      "key": "48",
      "name": "Trundle",
      "title": "the Troll King",
      "blurb": "Trundle is a hulking and devious troll with a particularly vicious streak, and there is nothing he cannot bludgeon into submission—not even the Freljord itself. Fiercely territorial, he chases down anyone foolish enough to enter his domain. Then, his...",
      "info": {
        "attack": 7,
        "defense": 6,
        "magic": 2,
        "difficulty": 5
      },
      "image": {
        "full": "Trundle.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 48,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 616.28,
        "hpperlevel": 96,
        "mp": 281.6,
        "mpperlevel": 45,
        "movespeed": 350,
        "armor": 37,
        "armorperlevel": 2.7,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 6,
        "hpregenperlevel": 0.75,
        "mpregen": 7.508,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2.9,
        "attackspeed": 0.67
      }
    },
    "Tryndamere": {
      "version": "10.7.1",
      "id": "Tryndamere",
      "key": "23",
      "name": "Tryndamere",
      "title": "the Barbarian King",
      "blurb": "Fueled by unbridled fury and rage, Tryndamere once carved his way through the Freljord, openly challenging the greatest warriors of the north to prepare himself for even darker days ahead. The wrathful barbarian has long sought revenge for the...",
      "info": {
        "attack": 10,
        "defense": 5,
        "magic": 2,
        "difficulty": 5
      },
      "image": {
        "full": "Tryndamere.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 96,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Assassin"
      ],
      "partype": "Fury",
      "stats": {
        "hp": 625.64,
        "hpperlevel": 98,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 33,
        "armorperlevel": 3.1,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.9,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 69,
        "attackdamageperlevel": 3.7,
        "attackspeedperlevel": 2.9,
        "attackspeed": 0.67
      }
    },
    "TwistedFate": {
      "version": "10.7.1",
      "id": "TwistedFate",
      "key": "4",
      "name": "Twisted Fate",
      "title": "the Card Master",
      "blurb": "Twisted Fate is an infamous cardsharp and swindler who has gambled and charmed his way across much of the known world, earning the enmity and admiration of the rich and foolish alike. He rarely takes things seriously, greeting each day with a mocking...",
      "info": {
        "attack": 6,
        "defense": 2,
        "magic": 6,
        "difficulty": 9
      },
      "image": {
        "full": "TwistedFate.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 144,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 534,
        "hpperlevel": 94,
        "mp": 333,
        "mpperlevel": 19,
        "movespeed": 335,
        "armor": 20.542,
        "armorperlevel": 3.15,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 5.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 49.954,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 3.22,
        "attackspeed": 0.651
      }
    },
    "Twitch": {
      "version": "10.7.1",
      "id": "Twitch",
      "key": "29",
      "name": "Twitch",
      "title": "the Plague Rat",
      "blurb": "A Zaunite plague rat by birth, but a connoisseur of filth by passion, Twitch is not afraid to get his paws dirty. Aiming a chem-powered crossbow at the gilded heart of Piltover, he has vowed to show those in the city above just how filthy they really...",
      "info": {
        "attack": 9,
        "defense": 2,
        "magic": 3,
        "difficulty": 6
      },
      "image": {
        "full": "Twitch.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 192,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 582,
        "hpperlevel": 84,
        "mp": 287.2,
        "mpperlevel": 40,
        "movespeed": 330,
        "armor": 27,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 3.75,
        "hpregenperlevel": 0.6,
        "mpregen": 7.256,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 59,
        "attackdamageperlevel": 3.11,
        "attackspeedperlevel": 3.38,
        "attackspeed": 0.679
      }
    },
    "Udyr": {
      "version": "10.7.1",
      "id": "Udyr",
      "key": "77",
      "name": "Udyr",
      "title": "the Spirit Walker",
      "blurb": "Udyr is more than a man; he is a vessel for the untamed power of four primal animal spirits. When tapping into the spirits' bestial natures, Udyr can harness their unique strengths: The tiger grants him speed and ferocity, the turtle resilience, the...",
      "info": {
        "attack": 8,
        "defense": 7,
        "magic": 4,
        "difficulty": 7
      },
      "image": {
        "full": "Udyr.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 240,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 593.32,
        "hpperlevel": 99,
        "mp": 270.4,
        "mpperlevel": 30,
        "movespeed": 345,
        "armor": 34,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 6,
        "hpregenperlevel": 0.75,
        "mpregen": 7.506,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 5,
        "attackspeedperlevel": 2.67,
        "attackspeed": 0.658
      }
    },
    "Urgot": {
      "version": "10.7.1",
      "id": "Urgot",
      "key": "6",
      "name": "Urgot",
      "title": "the Dreadnought",
      "blurb": "Once a powerful Noxian headsman, Urgot was betrayed by the empire for which he had killed so many. Bound in iron chains, he was forced to learn the true meaning of strength in the Dredge—a prison mine deep beneath Zaun. Emerging in a disaster that...",
      "info": {
        "attack": 8,
        "defense": 5,
        "magic": 3,
        "difficulty": 8
      },
      "image": {
        "full": "Urgot.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 288,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 585,
        "hpperlevel": 88,
        "mp": 340,
        "mpperlevel": 45,
        "movespeed": 330,
        "armor": 36,
        "armorperlevel": 4.25,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 350,
        "hpregen": 7.5,
        "hpregenperlevel": 0.7,
        "mpregen": 7.25,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63,
        "attackdamageperlevel": 4,
        "attackspeedperlevel": 3.75,
        "attackspeed": 0.625
      }
    },
    "Varus": {
      "version": "10.7.1",
      "id": "Varus",
      "key": "110",
      "name": "Varus",
      "title": "the Arrow of Retribution",
      "blurb": "One of the ancient darkin, Varus was a deadly killer who loved to torment his foes, driving them almost to insanity before delivering the killing arrow. He was imprisoned at the end of the Great Darkin War, but escaped centuries later in the remade...",
      "info": {
        "attack": 7,
        "defense": 3,
        "magic": 4,
        "difficulty": 2
      },
      "image": {
        "full": "Varus.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 336,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 500,
        "hpperlevel": 89,
        "mp": 360,
        "mpperlevel": 33,
        "movespeed": 330,
        "armor": 27,
        "armorperlevel": 3.4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 575,
        "hpregen": 3.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3.11,
        "attackspeedperlevel": 3,
        "attackspeed": 0.658
      }
    },
    "Vayne": {
      "version": "10.7.1",
      "id": "Vayne",
      "key": "67",
      "name": "Vayne",
      "title": "the Night Hunter",
      "blurb": "Shauna Vayne is a deadly, remorseless Demacian monster hunter, who has dedicated her life to finding and destroying the demon that murdered her family. Armed with a wrist-mounted crossbow and a heart full of vengeance, she is only truly happy when...",
      "info": {
        "attack": 10,
        "defense": 1,
        "magic": 1,
        "difficulty": 8
      },
      "image": {
        "full": "Vayne.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 384,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 515,
        "hpperlevel": 89,
        "mp": 231.8,
        "mpperlevel": 35,
        "movespeed": 330,
        "armor": 23,
        "armorperlevel": 3.4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 3.5,
        "hpregenperlevel": 0.55,
        "mpregen": 6.972,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 2.36,
        "attackspeedperlevel": 3.3,
        "attackspeed": 0.658
      }
    },
    "Veigar": {
      "version": "10.7.1",
      "id": "Veigar",
      "key": "45",
      "name": "Veigar",
      "title": "the Tiny Master of Evil",
      "blurb": "An enthusiastic master of dark sorcery, Veigar has embraced powers that few mortals dare approach. As a free-spirited inhabitant of Bandle City, he longed to push beyond the limitations of yordle magic, and turned instead to arcane texts that had been...",
      "info": {
        "attack": 2,
        "defense": 2,
        "magic": 10,
        "difficulty": 7
      },
      "image": {
        "full": "Veigar.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 432,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 505,
        "hpperlevel": 94,
        "mp": 490,
        "mpperlevel": 26,
        "movespeed": 340,
        "armor": 23,
        "armorperlevel": 3.75,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 52,
        "attackdamageperlevel": 2.7,
        "attackspeedperlevel": 2.24,
        "attackspeed": 0.625
      }
    },
    "Velkoz": {
      "version": "10.7.1",
      "id": "Velkoz",
      "key": "161",
      "name": "Vel'Koz",
      "title": "the Eye of the Void",
      "blurb": "It is unclear if Vel'Koz was the first Void-spawn to emerge on Runeterra, but there has certainly never been another to match his level of cruel, calculating sentience. While his kin devour or defile everything around them, he seeks instead to...",
      "info": {
        "attack": 2,
        "defense": 2,
        "magic": 10,
        "difficulty": 8
      },
      "image": {
        "full": "Velkoz.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 0,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 520,
        "hpperlevel": 88,
        "mp": 469,
        "mpperlevel": 21,
        "movespeed": 340,
        "armor": 21.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 54.9379,
        "attackdamageperlevel": 3.1416,
        "attackspeedperlevel": 1.36,
        "attackspeed": 0.625
      }
    },
    "Vi": {
      "version": "10.7.1",
      "id": "Vi",
      "key": "254",
      "name": "Vi",
      "title": "the Piltover Enforcer",
      "blurb": "Once a criminal from the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with only a very loose respect for authority figures. Growing up all but alone, Vi developed finely honed survival instincts as well as a wickedly abrasive...",
      "info": {
        "attack": 8,
        "defense": 5,
        "magic": 3,
        "difficulty": 4
      },
      "image": {
        "full": "Vi.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 48,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 585,
        "hpperlevel": 85,
        "mp": 295,
        "mpperlevel": 45,
        "movespeed": 340,
        "armor": 30,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 10,
        "hpregenperlevel": 1,
        "mpregen": 8,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63,
        "attackdamageperlevel": 3.5,
        "attackspeedperlevel": 2,
        "attackspeed": 0.644
      }
    },
    "Viktor": {
      "version": "10.7.1",
      "id": "Viktor",
      "key": "112",
      "name": "Viktor",
      "title": "the Machine Herald",
      "blurb": "The herald of a new age of technology, Viktor has devoted his life to the advancement of humankind. An idealist who seeks to lift the people of Zaun to a new level of understanding, he believes that only by embracing a glorious evolution of technology...",
      "info": {
        "attack": 2,
        "defense": 4,
        "magic": 10,
        "difficulty": 9
      },
      "image": {
        "full": "Viktor.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 96,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 530,
        "hpperlevel": 90,
        "mp": 405,
        "mpperlevel": 25,
        "movespeed": 335,
        "armor": 23,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 8,
        "hpregenperlevel": 0.65,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2.11,
        "attackspeed": 0.658
      }
    },
    "Vladimir": {
      "version": "10.7.1",
      "id": "Vladimir",
      "key": "8",
      "name": "Vladimir",
      "title": "the Crimson Reaper",
      "blurb": "A fiend with a thirst for mortal blood, Vladimir has influenced the affairs of Noxus since the empire's earliest days. In addition to unnaturally extending his life, his mastery of hemomancy allows him to control the minds and bodies of others as easily...",
      "info": {
        "attack": 2,
        "defense": 6,
        "magic": 8,
        "difficulty": 7
      },
      "image": {
        "full": "Vladimir.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 144,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Crimson Rush",
      "stats": {
        "hp": 537,
        "hpperlevel": 96,
        "mp": 2,
        "mpperlevel": 0,
        "movespeed": 330,
        "armor": 23,
        "armorperlevel": 3.3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 450,
        "hpregen": 7,
        "hpregenperlevel": 0.6,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2,
        "attackspeed": 0.658
      }
    },
    "Volibear": {
      "version": "10.7.1",
      "id": "Volibear",
      "key": "106",
      "name": "Volibear",
      "title": "the Thunder's Roar",
      "blurb": "The thunderous demigod known as the Thousand-Pierced Bear is the battle-spirit of the Freljord. Thousands of years of constant and bitter wars, fought in the coldest winters, have hardened Volibear into a truly indomitable force, hurling bolts of...",
      "info": {
        "attack": 7,
        "defense": 7,
        "magic": 4,
        "difficulty": 3
      },
      "image": {
        "full": "Volibear.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 192,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 584.48,
        "hpperlevel": 86,
        "mp": 270.4,
        "mpperlevel": 30,
        "movespeed": 345,
        "armor": 35,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.65,
        "mpregen": 8.092,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 2.67,
        "attackspeed": 0.658
      }
    },
    "Warwick": {
      "version": "10.7.1",
      "id": "Warwick",
      "key": "19",
      "name": "Warwick",
      "title": "the Uncaged Wrath of Zaun",
      "blurb": "Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. Bursting out of the shadows, he preys upon...",
      "info": {
        "attack": 9,
        "defense": 5,
        "magic": 3,
        "difficulty": 3
      },
      "image": {
        "full": "Warwick.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 240,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 550,
        "hpperlevel": 85,
        "mp": 280,
        "mpperlevel": 35,
        "movespeed": 335,
        "armor": 33,
        "armorperlevel": 3.2,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 4,
        "hpregenperlevel": 0.75,
        "mpregen": 7.466,
        "mpregenperlevel": 0.575,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 65,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2.3,
        "attackspeed": 0.638
      }
    },
    "Xayah": {
      "version": "10.7.1",
      "id": "Xayah",
      "key": "498",
      "name": "Xayah",
      "title": "the Rebel",
      "blurb": "Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover, Rakan, to...",
      "info": {
        "attack": 10,
        "defense": 6,
        "magic": 1,
        "difficulty": 5
      },
      "image": {
        "full": "Xayah.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 288,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 561,
        "hpperlevel": 86,
        "mp": 340,
        "mpperlevel": 40,
        "movespeed": 325,
        "armor": 25,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 3.25,
        "hpregenperlevel": 0.75,
        "mpregen": 8.25,
        "mpregenperlevel": 0.75,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 2.9,
        "attackspeedperlevel": 3.3,
        "attackspeed": 0.625
      }
    },
    "Xerath": {
      "version": "10.7.1",
      "id": "Xerath",
      "key": "101",
      "name": "Xerath",
      "title": "the Magus Ascendant",
      "blurb": "Xerath is an Ascended Magus of ancient Shurima, a being of arcane energy writhing in the broken shards of a magical sarcophagus. For millennia, he was trapped beneath the desert sands, but the rise of Shurima freed him from his ancient prison. Driven...",
      "info": {
        "attack": 1,
        "defense": 3,
        "magic": 10,
        "difficulty": 8
      },
      "image": {
        "full": "Xerath.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 336,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 526,
        "hpperlevel": 92,
        "mp": 459,
        "mpperlevel": 22,
        "movespeed": 340,
        "armor": 21.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 54.7,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 1.36,
        "attackspeed": 0.625
      }
    },
    "XinZhao": {
      "version": "10.7.1",
      "id": "XinZhao",
      "key": "5",
      "name": "Xin Zhao",
      "title": "the Seneschal of Demacia",
      "blurb": "Xin Zhao is a resolute warrior loyal to the ruling Lightshield dynasty. Once condemned to the fighting pits of Noxus, he survived countless gladiatorial bouts, but after being freed by Demacian forces, he swore his life and allegiance to these brave...",
      "info": {
        "attack": 8,
        "defense": 6,
        "magic": 3,
        "difficulty": 2
      },
      "image": {
        "full": "XinZhao.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 384,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Assassin"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 570,
        "hpperlevel": 92,
        "mp": 273.8,
        "mpperlevel": 35,
        "movespeed": 345,
        "armor": 35,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.7,
        "mpregen": 7.256,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 3.5,
        "attackspeed": 0.645
      }
    },
    "Yasuo": {
      "version": "10.7.1",
      "id": "Yasuo",
      "key": "157",
      "name": "Yasuo",
      "title": "the Unforgiven",
      "blurb": "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self...",
      "info": {
        "attack": 8,
        "defense": 4,
        "magic": 4,
        "difficulty": 10
      },
      "image": {
        "full": "Yasuo.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 432,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Assassin"
      ],
      "partype": "Flow",
      "stats": {
        "hp": 523,
        "hpperlevel": 87,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 30,
        "armorperlevel": 3.4,
        "spellblock": 30,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 6.5,
        "hpregenperlevel": 0.9,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 3.2,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.697
      }
    },
    "Yorick": {
      "version": "10.7.1",
      "id": "Yorick",
      "key": "83",
      "name": "Yorick",
      "title": "Shepherd of Souls",
      "blurb": "The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking spirits that he gathers to him. Yorick's monstrous...",
      "info": {
        "attack": 6,
        "defense": 6,
        "magic": 4,
        "difficulty": 6
      },
      "image": {
        "full": "Yorick.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 0,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 580,
        "hpperlevel": 100,
        "mp": 300,
        "mpperlevel": 40,
        "movespeed": 340,
        "armor": 39,
        "armorperlevel": 4,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.8,
        "mpregen": 7.5,
        "mpregenperlevel": 0.75,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 62,
        "attackdamageperlevel": 5,
        "attackspeedperlevel": 2,
        "attackspeed": 0.625
      }
    },
    "Yuumi": {
      "version": "10.7.1",
      "id": "Yuumi",
      "key": "350",
      "name": "Yuumi",
      "title": "the Magical Cat",
      "blurb": "A magical cat from Bandle City, Yuumi was once the familiar of a yordle enchantress, Norra. When her master mysteriously disappeared, Yuumi became the Keeper of Norra's sentient Book of Thresholds, traveling through portals in its pages to search for...",
      "info": {
        "attack": 5,
        "defense": 1,
        "magic": 8,
        "difficulty": 2
      },
      "image": {
        "full": "Yuumi.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 48,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 480,
        "hpperlevel": 70,
        "mp": 400,
        "mpperlevel": 45,
        "movespeed": 330,
        "armor": 25,
        "armorperlevel": 3,
        "spellblock": 25,
        "spellblockperlevel": 0.3,
        "attackrange": 500,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 10,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55,
        "attackdamageperlevel": 3.1,
        "attackspeedperlevel": 1,
        "attackspeed": 0.625
      }
    },
    "Zac": {
      "version": "10.7.1",
      "id": "Zac",
      "key": "154",
      "name": "Zac",
      "title": "the Secret Weapon",
      "blurb": "Zac is the product of a toxic spill that ran through a chemtech seam and pooled in an isolated cavern deep in Zaun's Sump. Despite such humble origins, Zac has grown from primordial ooze into a thinking being who dwells in the city's pipes, occasionally...",
      "info": {
        "attack": 3,
        "defense": 7,
        "magic": 7,
        "difficulty": 8
      },
      "image": {
        "full": "Zac.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 96,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Tank",
        "Fighter"
      ],
      "partype": "None",
      "stats": {
        "hp": 615,
        "hpperlevel": 95,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 340,
        "armor": 33,
        "armorperlevel": 3.5,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.5,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 3.4,
        "attackspeedperlevel": 1.6,
        "attackspeed": 0.736
      }
    },
    "Zed": {
      "version": "10.7.1",
      "id": "Zed",
      "key": "238",
      "name": "Zed",
      "title": "the Master of Shadows",
      "blurb": "Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock...",
      "info": {
        "attack": 9,
        "defense": 2,
        "magic": 1,
        "difficulty": 7
      },
      "image": {
        "full": "Zed.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 144,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Assassin"
      ],
      "partype": "Energy",
      "stats": {
        "hp": 584,
        "hpperlevel": 85,
        "mp": 200,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 32,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7,
        "hpregenperlevel": 0.65,
        "mpregen": 50,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63,
        "attackdamageperlevel": 3.4,
        "attackspeedperlevel": 3.3,
        "attackspeed": 0.651
      }
    },
    "Ziggs": {
      "version": "10.7.1",
      "id": "Ziggs",
      "key": "115",
      "name": "Ziggs",
      "title": "the Hexplosives Expert",
      "blurb": "With a love of big bombs and short fuses, the yordle Ziggs is an explosive force of nature. As an inventor's assistant in Piltover, he was bored by his predictable life and befriended a mad, blue-haired bomber named Jinx. After a wild night on the town...",
      "info": {
        "attack": 2,
        "defense": 4,
        "magic": 9,
        "difficulty": 4
      },
      "image": {
        "full": "Ziggs.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 192,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 536,
        "hpperlevel": 92,
        "mp": 480,
        "mpperlevel": 23.5,
        "movespeed": 325,
        "armor": 21.544,
        "armorperlevel": 3.3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 54.208,
        "attackdamageperlevel": 3.1,
        "attackspeedperlevel": 2,
        "attackspeed": 0.656
      }
    },
    "Zilean": {
      "version": "10.7.1",
      "id": "Zilean",
      "key": "26",
      "name": "Zilean",
      "title": "the Chronokeeper",
      "blurb": "Once a powerful Icathian mage, Zilean became obsessed with the passage of time after witnessing his homeland's destruction by the Void. Unable to spare even a minute to grieve the catastrophic loss, he called upon ancient temporal magic to divine all...",
      "info": {
        "attack": 2,
        "defense": 5,
        "magic": 8,
        "difficulty": 6
      },
      "image": {
        "full": "Zilean.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 240,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Support",
        "Mage"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 504,
        "hpperlevel": 82,
        "mp": 452,
        "mpperlevel": 30,
        "movespeed": 335,
        "armor": 24,
        "armorperlevel": 3.8,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.5,
        "mpregen": 11.335,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 51.64,
        "attackdamageperlevel": 3,
        "attackspeedperlevel": 2.13,
        "attackspeed": 0.625
      }
    },
    "Zoe": {
      "version": "10.7.1",
      "id": "Zoe",
      "key": "142",
      "name": "Zoe",
      "title": "the Aspect of Twilight",
      "blurb": "As the embodiment of mischief, imagination, and change, Zoe acts as the cosmic messenger of Targon, heralding major events that reshape worlds. Her mere presence warps the arcane mathematics governing realities, sometimes causing cataclysms without...",
      "info": {
        "attack": 1,
        "defense": 7,
        "magic": 8,
        "difficulty": 5
      },
      "image": {
        "full": "Zoe.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 288,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 560,
        "hpperlevel": 92,
        "mp": 425,
        "mpperlevel": 25,
        "movespeed": 340,
        "armor": 20.8,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58,
        "attackdamageperlevel": 3.3,
        "attackspeedperlevel": 2.5,
        "attackspeed": 0.625
      }
    },
    "Zyra": {
      "version": "10.7.1",
      "id": "Zyra",
      "key": "143",
      "name": "Zyra",
      "title": "Rise of the Thorns",
      "blurb": "Born in an ancient, sorcerous catastrophe, Zyra is the wrath of nature given form—an alluring hybrid of plant and human, kindling new life with every step. She views the many mortals of Valoran as little more than prey for her seeded progeny, and thinks...",
      "info": {
        "attack": 4,
        "defense": 3,
        "magic": 8,
        "difficulty": 7
      },
      "image": {
        "full": "Zyra.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 336,
        "y": 96,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Mage",
        "Support"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 504,
        "hpperlevel": 79,
        "mp": 418,
        "mpperlevel": 25,
        "movespeed": 340,
        "armor": 29,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 575,
        "hpregen": 5.5,
        "hpregenperlevel": 0.5,
        "mpregen": 13,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.376,
        "attackdamageperlevel": 3.2,
        "attackspeedperlevel": 2.11,
        "attackspeed": 0.625
      }
    }
  }
};
var champions = {};

for(var key in champData['data']){
  let currentChampKey = champData['data'][key]['key'];

  if(champions[currentChampKey] === undefined){
    champions[currentChampKey] = champData['data'][key]['name'];
  }
}


console.log(champions); //should be an object with each key value pair being champname and corresponding key . Works !! now i can easily export it to display each summoners 3 most played champs