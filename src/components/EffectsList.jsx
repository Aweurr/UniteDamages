import React from "react";

export default function EffectsList({ effects }) {
  return (
    <div>
      <h3>Effets Actifs :</h3>
      <ul>
        {effects.map((effect, index) => (
          <li key={index}>{effect}</li>
        ))}
      </ul>
    </div>
  );
}
