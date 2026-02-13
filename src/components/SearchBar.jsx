import { useState, useRef } from "react";

function SearchBar() {
  // Gestion de l'état local du composant de barre de recherche
  const [searchTerm, setSearchTerm] = useState(""); // valeur initiale par défaut est ''

  // Gestion de la réference tu timeout
  let timeoutId = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // désactiver le comportement par défaut de l'évenement onSubmit
    if (searchTerm.trim().length >= 2) {
      console.log(`Recherche immédiate manuelle: ${searchTerm}`);
    }
  };

  const handleChange = (e) => {
    const q = e.target.value;
    console.log(`Terme de recherche pour ${q}`);

    setSearchTerm(q); // stocker le terme de recherche et déclencher un nouveau rendu du composant
    clearTimeout(timeoutId.current); // désactiver le timeout précédent à chaque nouvelle saisie utilisateur
    // Réinitialiser le timeout à chaque nouvelle saisie utilisateur
    timeoutId.current = setTimeout(() => {
      console.log(
        `Recherche envoyée au bout de 3 secondes pour ${e.target.value}`,
      );
    }, 3000);
  };

  return (
    <section>
      <search>
        <form
          onSubmit={handleSubmit}
          action="#"
          method="POST"
          className="d-flex flex-row justify-content-center gap-1"
        >
          <input
            onChange={handleChange}
            type="search"
            name="q"
            id="q"
            value={searchTerm}
            className="form-control"
            placeholder="Trouver un film"
          />
          <input type="submit" value="Chercher" className="form-control" />
        </form>
      </search>
    </section>
  );
}

export default SearchBar;
