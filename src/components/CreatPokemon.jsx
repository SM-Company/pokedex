import "./CreatPokemon.css";

export default function CreatPokemon({ pokemons, search }) {
  let results = [];

  if (!search) {
    results = pokemons;
  } else {
    results = pokemons.filter((poke) =>
      poke.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="pokeContainer">
      {results.map((poke) => (
        <div className="poke-card" key={poke.id} data-aos="fade-up">
          <img className="poke-avatar" src={poke.avatar} alt="Avatar" />
          <p className="poke-number">{poke.id.toString().padStart(3, 0)}</p>
          <h2 className="poke-name">{poke.name}</h2>
          {poke.types.map((types) => {
            return (
              <span className="poke-type" key={poke.id + types.type.name}>
                {types.type.name}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
