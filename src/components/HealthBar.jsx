import React from "react";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";

export default function HealthBar({ totalHealth, currentHealth }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <p>{t.health}: {currentHealth}/{totalHealth}</p>
      <div style={{ width: "100%", backgroundColor: "#ccc", height: "20px", position: "relative" }}>
        <div
          style={{
            width: `${(currentHealth / totalHealth) * 100}%`,
            backgroundColor: currentHealth > 0 ? "green" : "red",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}
