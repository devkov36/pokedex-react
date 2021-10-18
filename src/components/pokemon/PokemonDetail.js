import "../../css/pokemon/pokemonDetail.css";
import PokemonType from "./PokemonType";
import PokemonAbility from "./PokemonAbility";

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
        {props.types.map((type, index) => (
          <PokemonType type={type} key={index} />
        ))}
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

export default PokemonDetail;
