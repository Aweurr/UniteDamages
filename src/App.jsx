import React, { useState } from "react";
import PokemonPanel from "./components/PokemonPanel";

function App() {
  const [damageToLeft, setDamageToLeft] = useState(0);
  const [damageToRight, setDamageToRight] = useState(0);

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <PokemonPanel
        position="left"
        onAttack={(damage) => setDamageToRight((prev) => prev + damage)} // Applique les dégâts au Pokémon de droite
      />
      <PokemonPanel
        position="right"
        onAttack={(damage) => setDamageToLeft((prev) => prev + damage)} // Applique les dégâts au Pokémon de gauche
      />
    </div>
  );
}

export default App;
