const pokemons = [
    {
      id: 1,
      name: "Venusaur",
      stats: [
        { Lvl: 1, HP: 3300, Atk: 134, Def: 45, SpA: 50, SpD: 35, Crit: 0, CDR: 0, Lifesteal: 0, AtkSpd: 10.00, Speed: 3700 },
        { Lvl: 2, HP: 3346, Atk: 136, Def: 48, SpA: 63, SpD: 37, Crit: 0, CDR: 0, Lifesteal: 0, AtkSpd: 10.14, Speed: 3700 },
        { Lvl: 3, HP: 3401, Atk: 139, Def: 51, SpA: 79, SpD: 39, Crit: 0, CDR: 0, Lifesteal: 0, AtkSpd: 10.31, Speed: 3700 },
        { Lvl: 4, HP: 3467, Atk: 142, Def: 55, SpA: 98, SpD: 42, Crit: 0, CDR: 0, Lifesteal: 0, AtkSpd: 10.52, Speed: 3700 },
        { Lvl: 5, HP: 3706, Atk: 154, Def: 69, SpA: 166, SpD: 52, Crit: 0, CDR: 5, Lifesteal: 0, AtkSpd: 11.27, Speed: 3850 },
        { Lvl: 6, HP: 3801, Atk: 159, Def: 74, SpA: 193, SpD: 56, Crit: 0, CDR: 5, Lifesteal: 0, AtkSpd: 11.57, Speed: 3850 },
        { Lvl: 7, HP: 4235, Atk: 180, Def: 99, SpA: 317, SpD: 74, Crit: 0, CDR: 5, Lifesteal: 0, AtkSpd: 12.93, Speed: 4000 },
        { Lvl: 8, HP: 4372, Atk: 187, Def: 107, SpA: 356, SpD: 80, Crit: 0, CDR: 5, Lifesteal: 0, AtkSpd: 13.36, Speed: 4000 },
        { Lvl: 9, HP: 4537, Atk: 195, Def: 116, SpA: 403, SpD: 87, Crit: 0, CDR: 15, Lifesteal: 0, AtkSpd: 13.87, Speed: 4150 },
        { Lvl: 10, HP: 4735, Atk: 205, Def: 127, SpA: 459, SpD: 95, Crit: 0, CDR: 15, Lifesteal: 0, AtkSpd: 14.49, Speed: 4150 },
        { Lvl: 11, HP: 4972, Atk: 217, Def: 140, SpA: 527, SpD: 105, Crit: 0, CDR: 15, Lifesteal: 0, AtkSpd: 15.23, Speed: 4300 },
        { Lvl: 12, HP: 5257, Atk: 231, Def: 156, SpA: 608, SpD: 117, Crit: 0, CDR: 15, Lifesteal: 0, AtkSpd: 16.12, Speed: 4300 },
        { Lvl: 13, HP: 5598, Atk: 248, Def: 175, SpA: 705, SpD: 131, Crit: 0, CDR: 25, Lifesteal: 0, AtkSpd: 17.19, Speed: 4300 },
        { Lvl: 14, HP: 6008, Atk: 268, Def: 198, SpA: 822, SpD: 148, Crit: 0, CDR: 25, Lifesteal: 0, AtkSpd: 18.47, Speed: 4300 },
        { Lvl: 15, HP: 6500, Atk: 292, Def: 225, SpA: 962, SpD: 169, Crit: 0, CDR: 25, Lifesteal: 0, AtkSpd: 20.01, Speed: 4300 },
      ],
      ultCd: 120,
      effects: ["Effet 1", "Effet 2"],
      skills: [
        { name: "Attaque 1", damage: 100, icon: "venu-attack-1.png"},
        { name: "Attaque 2", damage: 200, icon: "venu-attack-2.png" },
        { name: "Attaque 3", damage: 150, icon: "venu-attack-3.png" },
        { name: "Attaque 4", damage: 180, icon: "venu-attack-4.png" },
        { name: "Attaque 5", damage: 220, icon: "venu-attack-5.png" },
        { name: "Attaque 6", icon: "venu-attack-6.png", formules: [{ 
          type: "nom", ticks : 5, formule: "(0.275 * SpA) + (6 * (Level - 1)) + 230"
        }] },
        { name: "Attaque 7", damage: 3500, icon: "venu-attack-7.png" },
      ],
      image: "venusaur.png", // URL d'image temporaire
    },
    {
      id: 2,
      name: "Charizard",
      stats: [
        { Lvl: 1, HP: 3305, Atk: 124, Def: 35, SpA: 40, SpD: 25, Crit: 0, CDR: 0, Lifesteal: 0, AtkSpd: 10.00, Speed: 3700 },
        { Lvl: 2, HP: 3346, Atk: 136, Def: 48, SpA: 63, SpD: 37, Crit: 0, CDR: 0, Lifesteal: 0, AtkSpd: 10.14, Speed: 3700 },
        { Lvl: 3, HP: 3401, Atk: 139, Def: 51, SpA: 79, SpD: 39, Crit: 0, CDR: 0, Lifesteal: 0, AtkSpd: 10.31, Speed: 3700 },
        { Lvl: 4, HP: 3467, Atk: 142, Def: 55, SpA: 98, SpD: 42, Crit: 0, CDR: 0, Lifesteal: 0, AtkSpd: 10.52, Speed: 3700 },
        { Lvl: 5, HP: 3706, Atk: 154, Def: 69, SpA: 166, SpD: 52, Crit: 0, CDR: 5, Lifesteal: 0, AtkSpd: 11.27, Speed: 3850 },
        { Lvl: 6, HP: 3856, Atk: 666, Def: 74, SpA: 193, SpD: 56, Crit: 0, CDR: 5, Lifesteal: 0, AtkSpd: 11.57, Speed: 3850 },
        { Lvl: 7, HP: 4235, Atk: 180, Def: 99, SpA: 317, SpD: 74, Crit: 0, CDR: 5, Lifesteal: 0, AtkSpd: 12.93, Speed: 4000 },
        { Lvl: 8, HP: 4372, Atk: 187, Def: 107, SpA: 356, SpD: 80, Crit: 0, CDR: 5, Lifesteal: 0, AtkSpd: 13.36, Speed: 4000 },
        { Lvl: 9, HP: 4537, Atk: 195, Def: 116, SpA: 403, SpD: 87, Crit: 0, CDR: 15, Lifesteal: 0, AtkSpd: 13.87, Speed: 4150 },
        { Lvl: 10, HP: 4735, Atk: 205, Def: 127, SpA: 459, SpD: 95, Crit: 0, CDR: 15, Lifesteal: 0, AtkSpd: 14.49, Speed: 4150 },
        { Lvl: 11, HP: 4972, Atk: 217, Def: 140, SpA: 527, SpD: 105, Crit: 0, CDR: 15, Lifesteal: 0, AtkSpd: 15.23, Speed: 4300 },
        { Lvl: 12, HP: 5257, Atk: 231, Def: 156, SpA: 608, SpD: 117, Crit: 0, CDR: 15, Lifesteal: 0, AtkSpd: 16.12, Speed: 4300 },
        { Lvl: 13, HP: 5598, Atk: 248, Def: 175, SpA: 705, SpD: 131, Crit: 0, CDR: 25, Lifesteal: 0, AtkSpd: 17.19, Speed: 4300 },
        { Lvl: 14, HP: 6008, Atk: 268, Def: 198, SpA: 822, SpD: 148, Crit: 0, CDR: 25, Lifesteal: 0, AtkSpd: 18.47, Speed: 4300 },
        { Lvl: 15, HP: 6500, Atk: 292, Def: 225, SpA: 962, SpD: 169, Crit: 0, CDR: 25, Lifesteal: 0, AtkSpd: 20.01, Speed: 4300 },
      ],
      ultCd: 110,
      effects: ["Effet A", "Effet B"],
      skills: [
        { name: "Attaque 1", damage: 100, icon: "chari-attack-1.png" },
        { name: "Attaque 2", damage: 200, icon: "chari-attack-2.png" },
        { name: "Attaque 3", damage: 150, icon: "chari-attack-3.png" },
        { name: "Attaque 4", damage: 180, icon: "chari-attack-4.png" },
        { name: "Attaque 5", damage: 220, icon: "chari-attack-5.png" },
        { name: "Attaque 6", damage: 250, icon: "chari-attack-6.png" },
        { name: "Attaque 7", damage: 250, icon: "chari-attack-7.png" },
      ],
      ultimate: { name: "Ultime A", damage: 550 },
      image: "charizard.png",
    },
  ];
  
  export default pokemons;
  