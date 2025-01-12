import React from "react";

function StatsTable({ stats }) {
  return (
    <div style={{ flex: "2", border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
      <h3>Stats</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {Object.entries(stats || {}).map(([statName, statValue], index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            <strong>{statName}:</strong> {statValue}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatsTable;
