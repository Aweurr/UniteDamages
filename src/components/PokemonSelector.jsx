import React from "react";

function PokemonSelector({ pokemons, onSelect }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "170px",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        zIndex: 1000,
        maxHeight: "300px",
        overflowY: "auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "600px",
      }}
    >
      <h4 style={{ margin: "0 0 10px 0", textAlign: "center" }}>Choisissez un Pokémon</h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gap: "10px",
          justifyItems: "center",
        }}
      >
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            style={{
              cursor: "pointer",
              textAlign: "center",
              padding: "5px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
            onClick={() => onSelect(pokemon)}
          >
            <img
              src={new URL(`../assets/pokemons/${pokemon.image}`, import.meta.url).href}
              alt={pokemon.name}
              style={{ width: "50px", height: "50px", borderRadius: "5px" }}
            />
            <p style={{ fontSize: "12px", marginTop: "5px" }}>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonSelector;
