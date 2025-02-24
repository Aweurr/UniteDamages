export const applyAttackEffects = (attack, target) => {
    if (attack.effect === "paralyze" && Math.random() < 0.3) {
      target.statusEffects.push("paralyze");
    }
    if (attack.effect === "burn" && Math.random() < 0.2) {
      target.statusEffects.push("burn");
    }
  };
  