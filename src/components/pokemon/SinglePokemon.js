import "../../css/pokemon/singlePokemon.css";
import PokemonImage from "./PokemonImage";
import PokemonDetail from "./PokemonDetail";

function SinglePokemon(props) {
  const pokemon = props.singlePokemon;
  return (
    <section className="pokemon-details">
      <PokemonImage types={pokemon.types} src={pokemon.imageUrl} />
      <PokemonDetail
        name={pokemon.name}
        number={pokemon.pokedexNumber}
        gen={pokemon.gen}
        classification={pokemon.classification}
        types={pokemon.types}
        abilities={pokemon.abilities}
      />
    </section>
  );
}

export default SinglePokemon;
