import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function App() {
  const [PokemonData, setPokemonData] = useState(null); //fetching api
  const [loading, setLoading] = useState(true); // loading icon for time taken to fetching api
  const [error, setError] = useState(""); //showing error

  const Pokemon = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = () => {
    fetch(Pokemon)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <div>
        <AiOutlineLoading3Quarters />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        console.log(`error is:${error.message}`)
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <section>
      <header>
        <h1>Let's catch Pokemon </h1>
      </header>

      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={PokemonData.sprites.other.dream_world.front_default}
              alt={PokemonData.name}
              className="pokemon-image"
            />
          </figure>
          <h1 className="pokemon-name">{PokemonData.name}</h1>
        </li>
      </ul>
    </section>
  );
}

export default App;
