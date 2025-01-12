import React, { createContext, useState, useContext } from "react";

// Création du contexte
const LanguageContext = createContext();

// Hook personnalisé pour accéder facilement au contexte
export function useLanguage() {
  return useContext(LanguageContext);
}

// Composant Provider
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr"); // Langue par défaut : français

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "fr" ? "en" : "fr"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
