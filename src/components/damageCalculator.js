const getTypeEffectiveness = (attackType, targetType) => {
  const effectivenessChart = {
    fire: { grass: 2, water: 0.5, fire: 0.5 },
    water: { fire: 2, grass: 0.5, water: 0.5 },
    grass: { water: 2, fire: 0.5, grass: 0.5 },
  };
  return effectivenessChart[attackType]?.[targetType] || 1;
};

export const calculateDamage = (attacker, target, attack, items, statusEffects) => {
  let baseDamage = (attacker.stats.attack * attack.power) / target.stats.defense;

  // Appliquer les modificateurs d'objets
  items.forEach((item) => {
    baseDamage *= item.attackMultiplier || 1;
  });

  // Appliquer les effets de statut (ex: brûlure réduit l’attaque)
  if (statusEffects.includes("burn")) {
    baseDamage *= 0.5;
  }

  // Appliquer les modificateurs de type
  const typeMultiplier = getTypeEffectiveness(attack.type, target.type);
  baseDamage *= typeMultiplier;

  return Math.round(baseDamage);
};
