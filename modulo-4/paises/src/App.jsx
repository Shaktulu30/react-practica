import PokemonCard from "./components/PokemonCard";
import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20",
        );
        if (!response.ok) {
          throw new Error("Error en la respuesta HTTP");
        }
        const data = await response.json();
        setPokemons(data.results);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Listado de Pokemon</h1>
      {loading && <p>Cargando...</p>}
      {error && <p style={{color: "red" }}>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {pokemons.map((item) => (
            <PokemonCard key={item.name} pokemon={item} />
          ))}
        </ul>
      )}
      
    </div>
  );
}

export default App;
