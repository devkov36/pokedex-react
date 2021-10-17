import "../../css/pokemon/pokemonList.css";
import PokemonCard from "./PokemonCard2";
import Title from "./Title";

function PokemonList(props) {
  return (
    <div className="pokemon-list">
      <header className="pokemon-list-header">
        <Title title={props.title} img={props.imgHeader} />
      </header>
      <section className="pokemon-list-grid">
        {props.pokemons.map((pokemon, index) => (
          <PokemonCard
            img={pokemon.img}
            name={pokemon.name}
            number={pokemon.number}
            types={pokemon.types}
            key={index}
          />
        ))}
      </section>
    </div>
  );
}

export default PokemonList;
