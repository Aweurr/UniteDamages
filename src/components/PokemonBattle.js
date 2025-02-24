import React, { useState } from "react";
import pokemons from "./pokemons";
import { applyDamage } from "./BattleManager"; // Import de la nouvelle fonction

const PokemonBattle = () => {
  const [pokemon1HP, setPokemon1HP] = useState(pokemons[0].stats[0].HP);
  const [pokemon2HP, setPokemon2HP] = useState(pokemons[1].stats[0].HP);

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
