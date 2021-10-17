import React from "react";
import Title from "./pokemon/Title";
import PokemonType from "./pokemon/PokemonType";
import PokemonImage from "./pokemon/PokemonImage";
const typesP = ["grass", "poison"];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title
          title="Flying Pokémon"
          img="https://cdn2.bulbagarden.net/upload/thumb/b/b5/Flying_icon_SwSh.png/96px-Flying_icon_SwSh.png"
        />
      </header>
      <PokemonType type="grass"/>
      <PokemonImage types= {typesP} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"/>
    </div>
  );
}

export default App;
