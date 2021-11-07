import React from "react";
import "../../css/pokemon/pokemonImage.css";
class PokemonImage extends React.Component {
  render() {
    if( this.props.className) {
        return (
            <div className={`single ${this.props.types[0]}-back`}>
                <img className="pokemonImg" src={this.props.src} alt="Pokemon"/>
            </div>
        );
    }
    return (
        <div className={`typeBackground ${this.props.types[0]}-back`}>
            <img className="pokemonImg" src={this.props.src} alt="Pokemon"/>
        </div>
    );
  }
}

export default PokemonImage;