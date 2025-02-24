import React, { useState } from "react";
import PokemonPanel from "./PokemonPanel";

function BattleArena() {
  const [leftPreviewHp, setLeftPreviewHp] = useState(null); // Simulation des HP pour le Pokémon de gauche
  const [rightPreviewHp, setRightPreviewHp] = useState(null); // Simulation des HP pour le Pokémon de droite

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* Pokémon de gauche */}
      <PokemonPanel
        position="left"
        previewHp={leftPreviewHp}
        setPreviewHp={setLeftPreviewHp}
        onSimulateAttack={(damage) => setRightPreviewHp((hp) => Math.max(hp - damage, 0))} // Simule les dégâts sur la droite
      />
      {/* Pokémon de droite */}
      <PokemonPanel
        position="right"
        previewHp={rightPreviewHp}
        setPreviewHp={setRightPreviewHp}
        onSimulateAttack={(damage) => setLeftPreviewHp((hp) => Math.max(hp - damage, 0))} // Simule les dégâts sur la gauche
      />
    </div>
  );
}

export default BattleArena;
