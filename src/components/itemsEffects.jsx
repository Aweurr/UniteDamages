export const applyItemEffects = (items, pokemon) => {
  items.forEach((item) => {
    if (item.type === "attackBoost") {
      pokemon.stats.attack *= item.boostMultiplier;
    }
    if (item.type === "defenseBoost") {
      pokemon.stats.defense *= item.boostMultiplier;
    }
  });
};
