import React from "react";
import "../../css/pokemon/pokemonType.css";

const typeColors = {
  flying: "#98bcec",
  steel: "#5095a4",
  rock: "#cdbb8b",
  grass: "#6cbc5b",
  dark: "#585661",
  ghost: "#4f6fbc",
  water: "#369edf",
  fairy: "#ec93e5",
  poison:"#af66cf",
  normal: "#a0a29f",
  fighting: "#d6435d",
  ground: "#de7c4d",
  fire: "#ffa44d",
  psychic: "#ff8582",
  bug: "#9bbc31",
  ice: "#74d0c3",
  electric: "#fcd850",
  dragon: "#016dc9"
};
class PokemonType extends React.Component {
  render() {
    //const r = document.querySelector(':root');
    //r.style.setProperty('--colorType',typeColors[this.props.type]);
    return <p className={`type ${this.props.type}`}>{this.props.type}</p>;
  }
}

export default PokemonType;