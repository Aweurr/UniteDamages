// damageCalculator.js
export function calculateDamage(currentHP, damage) {
    return Math.max(currentHP - damage, 0); // Assure que les HP ne deviennent pas négatifs
  }
  