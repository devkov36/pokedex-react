import React from "react";
import Title from "./pokemon/Title";
import PokemonType from "./pokemon/PokemonType";
import PokemonImage from "./pokemon/PokemonImage";
import PokemonDetail from "./pokemon/PokemonDetail";
import PokemonInfo from "./pokemon/PokemonInfo";
import SinglePokemon from "./pokemon/SinglePokemon";
import PokemonList from "./pokemon/PokemonList";
const typesP = ["grass", "poison"];
const abilP = ["Overgrow", "Chlorophyll"];
const pokemon = [
  {
    name: "Bulbasaur",
    number: "1",
    types: typesP,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    name: "Bulbasaur2",
    number: "2",
    types: typesP,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    name: "Bulbasaur3",
    number: "3",
    types: typesP,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    name: "Bulbasaur4",
    number: "4",
    types: typesP,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    name: "Bulbasaur5",
    number: "5",
    types: typesP,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    name: "Bulbasaur6",
    number: "6",
    types: typesP,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
];
function App() {
  return (
    <div className="App">
      {/*       <header className="App-header">
        <Title
          title="Flying Pokémon"
          img="https://cdn2.bulbagarden.net/upload/thumb/b/b5/Flying_icon_SwSh.png/96px-Flying_icon_SwSh.png"
        />
      </header>
      <PokemonType type="grass" />
      <PokemonImage
        types={typesP}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
      />
      <PokemonDetail
        name="Bulbasaur"
        number="1"
        gen="1-Kanto"
        classification="Seed"
        types={typesP}
        abilities={abilP}
      />
      <PokemonInfo number="1" name="Bulbasaur" types={typesP} />
      <SinglePokemon
        name="Bulbasaur"
        number="1"
        gen="1-Kanto"
        classification="Seed"
        types={typesP}
        abilities={abilP}
        img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
      /> */}
      <PokemonList
        title="Flying Pokémon"
        imgHeader="https://cdn2.bulbagarden.net/upload/thumb/b/b5/Flying_icon_SwSh.png/96px-Flying_icon_SwSh.png"
        pokemons={pokemon}
      />
    </div>
  );
}

export default App;
