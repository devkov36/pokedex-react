import React from "react";
import Title from "./pokemon/Title";
import PokemonType from "./pokemon/PokemonType";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title
          title="Flying Pokémon"
          img="https://cdn2.bulbagarden.net/upload/thumb/b/b5/Flying_icon_SwSh.png/96px-Flying_icon_SwSh.png"
        />
      </header>
      <PokemonType type="flying"/>
    </div>
  );
}

export default App;
