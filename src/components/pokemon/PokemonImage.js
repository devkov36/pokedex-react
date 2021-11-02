import React from "react";
import "../../css/pokemon/pokemonImage.css";
class PokemonImage extends React.Component {
  render() {
        //const r = document.querySelector(':root');
      if (this.props.types.length === 2)
      {
        //r.style.setProperty('--color1', typeColors[this.props.types[0]]);
        //r.style.setProperty('--color2', typeColors[this.props.types[1]]);
          return (
            <div className={`typeBackground ${this.props.types[0]}-back`}>
                <div className={`typeBackground2 ${this.props.types[1]}-back2`}>
                    <img className="pokemonImg" src={this.props.src} alt="Pokemon"/>
                </div>
            </div>
          );
      }
      //r.style.setProperty('--color2', typeColors[this.props.types[0]]);
      return (
        <div className={`typeBackground`}>
            <div className={`typeBackground2 ${this.props.types[0]}-back2`}>
                <img className="pokemonImg" src={this.props.src} alt="Pokemon"/>
            </div>
        </div>
      );
  }
}

export default PokemonImage;