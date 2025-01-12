import React from "react";

function ItemSlots() {
  return (
    <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "10px" }}>
      {[1, 2, 3].map((slot) => (
        <div
          key={slot}
          style={{
            width: "80px",
            height: "80px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f9f9f9",
          }}
        >
          Slot {slot}
        </div>
      ))}
    </div>
  );
}

export default ItemSlots;
