import "../../css/pokemon/singlePokemon.css";
import PokemonImage from "./PokemonImage";
import PokemonDetail from "./PokemonDetail";

function SinglePokemon(props) {
  return (
    <section className="pokemon-details">
      <PokemonImage types={props.types} src={props.img} />
      <PokemonDetail
        name={props.name}
        number={props.number}
        gen={props.gen}
        classification={props.classification}
        types={props.types}
        abilities={props.abilities}
      />
    </section>
  );
}

export default SinglePokemon;
