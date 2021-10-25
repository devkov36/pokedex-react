import "../../css/pokemon/pokemonCard.css";
import PokemonImage from "./PokemonImage";
import PokemonInfo from "./PokemonInfo";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function PokemonCard(props) {
  return (
    <section className="pokemon-card">
      <Link to={`/${props.pokedexNumber}`}>
        <PokemonImage types={props.types} src={props.imageUrl} />
      </Link>
        <PokemonInfo
          pokedexNumber={props.pokedexNumber}
          name={props.name}
          types={props.types}
        />
    </section>
  );
}

PokemonCard.propTypes = {
  pokedexNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default PokemonCard;
