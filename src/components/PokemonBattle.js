import React, { useState } from "react";
import pokemons from "./pokemons"; // Vos données Pokémon

const PokemonBattle = () => {
  // State pour les PV des deux Pokémon
  const [pokemon1HP, setPokemon1HP] = useState(pokemons[0].stats[0].HP); // HP initial de Venusaur
  const [pokemon2HP, setPokemon2HP] = useState(pokemons[1].stats[0].HP); // HP initial de Charizard

  // Fonction pour appliquer les dégâts
  const applyDamage = (attackerId, damage) => {
    if (attackerId === pokemons[0].id) {
      setPokemon2HP((prevHP) => Math.max(prevHP - damage, 0)); // Réduit les HP de Charizard
    } else if (attackerId === pokemons[1].id) {
      setPokemon1HP((prevHP) => Math.max(prevHP - damage, 0)); // Réduit les HP de Venusaur
    }
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
              onClick={() => applyDamage(pokemons[0].id, skill.damage)} // Lors du clic, applique les dégâts
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
              onClick={() => applyDamage(pokemons[1].id, skill.damage)} // Lors du clic, applique les dégâts
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
