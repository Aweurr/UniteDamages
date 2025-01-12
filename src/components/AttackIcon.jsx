import React from "react";

export default function AttackIcon({ attack, onAttack }) {
  return (
    <div onClick={() => onAttack(attack.damage)}>
      <img src={attack.icon} alt={attack.name} style={{ width: "50px" }} />
      <p>{attack.name}</p>
    </div>
  );
}
