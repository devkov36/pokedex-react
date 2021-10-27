import "../../css/pokemon/pokemonInfo.css";
import PokemonType from "./PokemonType";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PokemonInfo(props) {
  return (
    <div className="info-text">
      <Link className="info-text" to={`/pokemon/${props.pokedexNumber}`}>
        <h2 className="number"># {props.pokedexNumber}</h2>
        <h2 className="name">{props.name}</h2>
      </Link>
      <div className="info-tags">
        {props.types[0] === props.types[1] ? (
          <Link to={`/type/${props.types[0]}`}>
            <PokemonType type={props.types[0]} />
          </Link>
        ) : (
          props.types.map((type, index) => (
            <Link to={`/type/${type}`} key={index}>
              <PokemonType type={type} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

PokemonInfo.propTypes = {
  pokedexNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
};

export default PokemonInfo;
