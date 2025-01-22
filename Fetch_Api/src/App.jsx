import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [PokemonData, setPokemonData] = useState(null);

  const Pokemon = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = () => {
    fetch(Pokemon)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(PokemonData);

  if (PokemonData) {
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
}

export default App;
