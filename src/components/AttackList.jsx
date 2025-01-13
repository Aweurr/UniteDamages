import React, { useState } from "react";

function AttackList({ attacks, onAttack, onDeselect }) {
  const [selectedAttack, setSelectedAttack] = useState(null);

  return (
    <div style={{ flex: "1", border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
      <h3>Attaques</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {attacks.map((attack, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
              position: "relative",
              cursor: "pointer",
              backgroundColor: selectedAttack === attack ? "#f0f0f0" : "transparent",
            }}
            onClick={() => {
              if (selectedAttack === attack) {
                setSelectedAttack(null);
                onDeselect(); // Désélectionne l'attaque
              } else {
                setSelectedAttack(attack);
                onAttack(attack); // Applique temporairement l'attaque
              }
            }}
          >
            <img
              src={new URL(`../assets/attacks/${attack.icon}`, import.meta.url).href}
              alt={attack.name}
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <span>{attack.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Ceci est l'export par défaut
export default AttackList;
