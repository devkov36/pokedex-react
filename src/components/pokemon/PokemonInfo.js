import "../../css/pokemon/pokemonInfo.css";
import PokemonType from "./PokemonType";

function PokemonInfo(props) {
  return (
    <div className="info-text">
      <h2 className="number"># {props.number}</h2>
      <h2 className="name">{props.name}</h2>
      <div className="info-tags">
        {/*    {props.types.map((type, index) => (
          <PokemonType type={type} key={index} />
        ))} */}
        <p className="tag1">Type 1</p>
        <p className="tag2">Type 2</p>
      </div>
    </div>
  );
}

export default PokemonInfo;
