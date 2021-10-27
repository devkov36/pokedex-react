import "../../css/pokemon/pokemonDetail.css";
import PokemonType from "./PokemonType";
import PokemonAbility from "./PokemonAbility";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PokemonDetail(props) {
  return (
    <div className="detail-text">
      <div className="detail-name-number">
        <h1 className="detail-name">{props.name}</h1>
        <h1 className="detail-number"># {props.number}</h1>
      </div>
      <div className="detail-gen">
        <h3 className="gen-title">Generación: </h3>
        <p className="gen-name">{props.gen}</p>
      </div>
      <div className="detail-clas">
        <h3 className="clas-title">Classification: </h3>
        <p className="clas-name">{props.classification}</p>
      </div>
      <h3 className="type-title">Type: </h3>
      <div className="type-tags">
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
      <h3 className="abil-title">Abilities: </h3>
      <div className="abilities">
        {props.abilities.map((ability, index) => (
          <PokemonAbility ability={ability} key={index} />
        ))}
      </div>
    </div>
  );
}

PokemonDetail.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  gen: PropTypes.number.isRequired,
  classification: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  abilities: PropTypes.array.isRequired,
};

export default PokemonDetail;
