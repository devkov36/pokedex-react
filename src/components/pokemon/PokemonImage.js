import React from "react";
import "../../css/pokemon/pokemonImage.css";

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
class PokemonImage extends React.Component {
  render() {
        const r = document.querySelector(':root');
      if (this.props.types.length === 2)
      {
        r.style.setProperty('--color1', typeColors[this.props.types[0]]);
        r.style.setProperty('--color2', typeColors[this.props.types[1]]);
          return (
            <div className={`typeBackground`}>
                <div className={`typeBackground2`}>
                    <img className="pokemonImg" src={this.props.src} alt="Pokemon"/>
                </div>
            </div>
          );
      }
      r.style.setProperty('--color2', typeColors[this.props.types[0]]);
      return (
        <div className={`typeBackground`}>
            <div className={`typeBackground2`}>
                <img clasName="pokemonImg" src={this.props.src} alt="Pokemon"/>
            </div>
        </div>
      );
  }
}

export default PokemonImage;