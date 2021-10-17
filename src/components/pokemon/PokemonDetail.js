import "../../css/pokemon/pokemonDetail.css";
import PokemonType from "./PokemonType";

function PokemonDetail(props) {
  return (
    <div className="detail-text">
      <div className="detail-name-number">
        <h1 className="detail-name">{props.name}</h1>
        <h1 className="detail-number"># {props.number}</h1>
      </div>
      <div className="detail-gen">
        <h2 className="gen-title">Generación: </h2>
        <p className="gen-name">{props.gen}</p>
      </div>
      <div className="detail-clas">
        <h2 className="clas-title">Classification: </h2>
        <p className="clas-name">{props.classification}</p>
      </div>
      <h2 className="type-title">Type: </h2>
      <div className="type-tags">
        {/*    {props.types.map((type, index) => (
          <PokemonType type={type} key={index} />
        ))} */}
        <p className="tag1">Type 1</p>
        <p className="tag2">Type 2</p>
      </div>
      <h2 className="abil-title">Abilities: </h2>
      <div className="abilities">
        {/*    {props.abilities.map((ability, index) => (
          <PokemonAbility ability={ability} key={index} /> Este componente todavia no existe
        ))} */}
        <p className="ability">Ability 1</p>
        <p className="ability">Ability 2</p>
      </div>
    </div>
  );
}

export default PokemonDetail;
