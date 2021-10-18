import "../../css/pokemon/pokemonList.css";
import PokemonCard from "./PokemonCard";
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
            imageUrl={pokemon.imageUrl}
            pokedexNumber={pokemon.pokedexNumber}
            name={pokemon.name}
            types={pokemon.types}
            key={index}
          />
        ))}
      </section>
    </div>
  );
}

export default PokemonList;
