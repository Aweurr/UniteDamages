import React, { useState } from "react";
import PokemonSelector from "./PokemonSelector";
import AttackList from "./AttackList";
import ItemSlots from "./ItemSlots";
import StatsTable from "./StatsTable";
import pokemons from "../data/pokemons";

function PokemonPanel({ position, onAttack }) {
  const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0]);
  const [showPokemonList, setShowPokemonList] = useState(false);
  const [level, setLevel] = useState(1); // Niveau initial
  const [hp, setHp] = useState(selectedPokemon.stats[0].HP); // HP initial
  const [shield, setShield] = useState(0); // Valeur de shield
const [previewHp, setPreviewHp] = useState(hp); // Gère les HP "simulés"

  const isMirrored = position === "right";

  // Fonction pour recevoir des dégâts
  const receiveDamage = (damage) => {
    const effectiveDamage = damage - shield > 0 ? damage - shield : 0;
    setShield((prevShield) => Math.max(prevShield - damage, 0)); // Réduit le bouclier
    setHp((prevHp) => Math.max(prevHp - effectiveDamage, 0)); // Réduit les PV
  };

  // Changer le niveau
  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
    setHp(selectedPokemon.stats[newLevel - 1].HP); // Met à jour les HP selon le niveau
  };

  // Réinitialise lors du changement de Pokémon
  const handlePokemonChange = (pokemon) => {
    setSelectedPokemon(pokemon);
    setLevel(1); // Réinitialise le niveau
    setHp(pokemon.stats[0].HP); // Réinitialise les PV
    setShield(0); // Réinitialise le shield
    setShowPokemonList(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        width: "400px",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px",
          marginBottom: "10px",
        }}
      >
        {isMirrored ? (
          <>
            <h2 style={{ flex: "1", textAlign: "center" }}>{selectedPokemon.name}</h2>
            <div style={{ cursor: "pointer" }} onClick={() => setShowPokemonList(true)}>
              <img
                src={new URL(`../assets/pokemons/${selectedPokemon.image}`, import.meta.url).href}
                alt={selectedPokemon.name}
                style={{ width: "100px", height: "100px", borderRadius: "10px" }}
              />
            </div>
          </>
        ) : (
          <>
            <div style={{ cursor: "pointer" }} onClick={() => setShowPokemonList(true)}>
              <img
                src={new URL(`../assets/pokemons/${selectedPokemon.image}`, import.meta.url).href}
                alt={selectedPokemon.name}
                style={{ width: "100px", height: "100px", borderRadius: "10px" }}
              />
            </div>
            <h2 style={{ flex: "1", textAlign: "center" }}>{selectedPokemon.name}</h2>
          </>
        )}
      </div>

      {/* Slider pour changer le niveau */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label>
          Niveau : <strong>{level}</strong>
        </label>
        <input
          type="range"
          min="1"
          max="15"
          value={level}
          onChange={(e) => handleLevelChange(parseInt(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      {/* Barre de vie */}
<div style={{ marginBottom: "20px", position: "relative", height: "30px" }}>
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#e0e0e0",
      borderRadius: "5px",
      overflow: "hidden",
    }}
  >
    {/* Marques tous les 500 HP */}
    {Array.from(
      { length: Math.floor(selectedPokemon.stats[level - 1].HP / 500) },
      (_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${(i + 1) * 500 / selectedPokemon.stats[level - 1].HP * 100}%`,
            top: 0,
            bottom: 0,
            width: "2px",
            backgroundColor: "#aaa",
          }}
        />
      )
    )}
    {/* HP Bar */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `${(previewHp / selectedPokemon.stats[level - 1].HP) * 100}%`,
        height: "100%",
        backgroundColor: "#76c7c0",
      }}
    />
  </div>
  <span style={{ position: "absolute", right: "10px", top: "5px" }}>
    {previewHp} / {selectedPokemon.stats[level - 1].HP}
  </span>
</div>


      {/* Body */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: isMirrored ? "row-reverse" : "row",
        }}
      >
        <ItemSlots />
        <StatsTable stats={selectedPokemon.stats[level - 1]} />
        <AttackList
  attacks={selectedPokemon.skills}
  onAttack={(attack) => {
    const damage = Math.round(attack.damage * (1 + level / 10)); // Calcul des dégâts
    setPreviewHp((prevHp) => Math.max(prevHp - damage, 0)); // Simule les dégâts
  }}
  onDeselect={() => setPreviewHp(hp)} // Réinitialise quand l'attaque est désélectionnée
/>

      </div>

      {/* Footer */}
      {showPokemonList && (
        <PokemonSelector
          pokemons={pokemons}
          onSelect={handlePokemonChange}
        />
      )}
    </div>
  );
}

export default PokemonPanel;
