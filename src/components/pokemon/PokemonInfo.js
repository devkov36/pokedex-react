import "../../css/pokemon/pokemonInfo.css";
import PokemonType from "./PokemonType";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PokemonInfo(props) {
  return (
    <div className="info-text">
    <Link className="info-text" to={`/${props.pokedexNumber}`}>
      <h2 className="number"># {props.pokedexNumber}</h2>
      <h2 className="name">{props.name}</h2>
    </Link>
      <div className="info-tags">
        { props.types[0] === props.types[1] 
          ? <PokemonType type={props.types[0]} />
          : props.types.map((type, index) => (<PokemonType type={type} key={index} />))
        }
      </div>
    </div>
  );
}

PokemonInfo.propTypes = {
  pokedexNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired
};

export default PokemonInfo;
