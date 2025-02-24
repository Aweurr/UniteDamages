import React, { useState } from "react";
import pokemons from "./pokemons"; // Vos données Pokémon

const PokemonBattle = () => {
  // State pour les PV des deux Pokémon
  const [pokemon1HP, setPokemon1HP] = useState(pokemons[0].stats[0].HP); // HP initial de Venusaur
  const [pokemon2HP, setPokemon2HP] = useState(pokemons[1].stats[0].HP); // HP initial de Charizard

  const calculateDamage = (attacker, defender, attack) => {
    const level = attacker.level || 50; // Niveau du Pokémon attaquant (par défaut 50)
    const attackStat = attacker.stats[0].Attack; // Stat d'attaque
    const defenseStat = defender.stats[0].Defense; // Stat de défense
    const power = attack.power || 50; // Puissance de l'attaque
  
    // STAB : Bonus si l'attaque est du même type que le Pokémon
    const STAB = attacker.type.includes(attack.type) ? 1.5 : 1.0;
  
    // Efficacité en fonction du type
    const typeEffectiveness = getTypeEffectiveness(attack.type, defender.type);
  
    // Facteur critique (1 ou 1.5)
    const isCritical = Math.random() < 0.1 ? 1.5 : 1.0;
  
    // Facteur aléatoire (entre 0.85 et 1.0)
    const randomFactor = 0.85 + Math.random() * 0.15;
  
    // Calcul des dégâts finaux
    const damage = Math.round(
      (((2 * level + 10) / 250) *
        (attackStat / defenseStat) *
        power +
        2) *
        STAB *
        typeEffectiveness *
        isCritical *
        randomFactor
    );
  
    return damage;
  };
  
  // Fonction pour appliquer les dégâts
  const applyDamage = (attacker, defender, attack, setDefenderHP) => {
    
    // DEGAAAAAAAAAAAAAAAAAAAT 
    const damage = calculateDamage(attacker, defender, attack+100);
    setDefenderHP((prevHP) => Math.max(prevHP - damage, 0)); // Applique les dégâts
  };
  

  return (
    <div>
      {/* Pokémon 1 */}
      <div className="pokemon">
        <h2>{pokemons[0].name}</h2>
        <img src={pokemons[0].image} alt={pokemons[0].name} />
        <p>HP: {pokemon1HP}</p>
        <div className="attacks">
          {pokemons[0].skills.map((skill, index) => (
            <button
              key={index}
              onClick={() =>
                applyDamage(pokemons[0], pokemons[1], skill, setPokemon2HP)
              }
              className="attack-button"
            >
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Pokémon 2 */}
      <div className="pokemon">
        <h2>{pokemons[1].name}</h2>
        <img src={pokemons[1].image} alt={pokemons[1].name} />
        <p>HP: {pokemon2HP}</p>
        <div className="attacks">
          {pokemons[1].skills.map((skill, index) => (
            <button
              key={index}
              onClick={() =>
                applyDamage(pokemons[1], pokemons[0], skill, setPokemon1HP)
              }
              className="attack-button"
            >
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonBattle;
