import React from "react";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";

export default function LevelSlider({ level, onLevelChange }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <p>{t.level}: {level}</p>
      <input
        type="range"
        min="1"
        max="15"
        value={level}
        onChange={(e) => onLevelChange(parseInt(e.target.value))}
      />
    </div>
  );
}
