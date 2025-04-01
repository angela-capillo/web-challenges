import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(currentPage);
        const data = await response.json();
        
        setNextPage(data.next);
        setPreviousPage(data.previous);

        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [currentPage]);


  //console.log(pokemon);

  return (
    <main>
      <button type="button" onClick={() => setCurrentPage(previousPage)} disabled={!previousPage}>Previous Page</button>
      <button type="button" onClick={() => setCurrentPage(nextPage)} disabled={!nextPage}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
