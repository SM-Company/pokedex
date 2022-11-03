import { useState, useEffect } from "react";
import "./App.css";
import CreatPokemon from "./components/CreatPokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [counter, setCounter] = useState(1);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(50);
  let url = "https://pokeapi.co/api/v2/pokemon/";

  const savePokemon = (pokemon) => {
    setPokemons([...pokemons, pokemon]);
    if (counter < index) {
      setCounter(counter + 1);
    }
  };

  const handleClick = () => {
    setIndex(index + 50);
    setCounter(counter + 1);
  };

  useEffect(() => {
    fetch(url + counter)
      .then((res) => res.json())
      .then((data) =>
        savePokemon({
          id: data.id,
          name: data.name,
          avatar: data.sprites.front_default,
          types: data.types,
          abilities: data.abilities,
          stats: data.stats,
        })
      );
  }, [counter]);

  return (
    <>
      <header className="header">
        <h1 className="title">Escuentra tus pokemones</h1>
        <input
          type="text"
          id="search"
          name="search"
          className="search"
          placeholder="Buscar"
          onKeyUp={(e) => setSearch(e.target.value)}
        />
      </header>
      <CreatPokemon pokemons={pokemons} search={search} />
      <button onClick={handleClick} className="load-button" data-aos="fade-up">
        Cargar mas
      </button>
    </>
  );
}

export default App;
