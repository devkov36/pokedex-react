import React from "react";
import "../../css/pokemon/pokemonType.css";

class PokemonType extends React.Component {
  render() {
    return <p className={`type ${this.props.type}`}>{this.props.type}</p>;
  }
}

export default PokemonType;