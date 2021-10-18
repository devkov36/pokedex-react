import "../../css/pokemon/pokemonCard.css";
import PokemonImage from "./PokemonImage";
import PokemonInfo from "./PokemonInfo";

function PokemonCard(props) {
  return (
    <section className="pokemon-card">
      <PokemonImage types={props.types} src={props.imageUrl} />
      <PokemonInfo 
        pokedexNumber={props.pokedexNumber}
        name={props.name}
        types={props.types}
      />
    </section>
  );
}

export default PokemonCard;
