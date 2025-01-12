import React from "react";

function AttackList({ attacks, onAttack }) {
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
            }}
            onClick={() => onAttack(attack)}
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

export default AttackList;
