const items = [
    {
      id: 1,
      name: "Bouclier de Fer",
      image: "lunettechoix.png", // Image dans le dossier `assets/items/`
      stats: {
        defense: 20,
        hp: 50,
      },
      effect: "Réduit les dégâts subis de 10%.",
    },
    {
      id: 2,
      name: "Épée du Critique",
      image: "lunetteassault.png",
      stats: {
        attack: 15,
        crit: 10,
      },
      effect: "Augmente les chances de coup critique de 15%.",
    },
    {
      id: 3,
      name: "Amulette de Puissance",
      image: "lunettesages.png",
      stats: {
        attack: 25,
      },
      effect: "Augmente l'attaque générale de 10%.",
    },
  ];
  
  export default items;
  