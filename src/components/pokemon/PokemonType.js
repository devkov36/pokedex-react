import React from "react";
import "../../css/pokemon/pokemonType.css";

class PokemonType extends React.Component {
  render() {
    //const r = document.querySelector(':root');
    //r.style.setProperty('--colorType',typeColors[this.props.type]);
    return <p className={`type ${this.props.type}`}>{this.props.type}</p>;
  }
}

export default PokemonType;