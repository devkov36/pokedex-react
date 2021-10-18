import React from "react";
import Title from "./pokemon/Title";
import PokemonType from "./pokemon/PokemonType";
import PokemonImage from "./pokemon/PokemonImage";
import PokemonDetail from "./pokemon/PokemonDetail";
import PokemonInfo from "./pokemon/PokemonInfo";
import SinglePokemon from "./pokemon/SinglePokemon";
import PokemonList from "./pokemon/PokemonList";
import PokeHeader from './header/PokeHeader';
import NextBtn from "./arrows/NextBtn";
import PrevBtn from "./arrows/PrevBtn";

const pokemon = [
  {
    pokedexNumber: 1,
    name: "Bulbasaur",
    classification: "Seed",
    gen: 1,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["grass"],
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    pokedexNumber: 2,
    name: "Bulbasaur2",
    classification: "Seed",
    gen: 1,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["flying"],
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    pokedexNumber: 3,
    name: "Bulbasaur3",
    classification: "Seed",
    gen: 1,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["grass", "poison"],
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    pokedexNumber: 4,
    name: "Bulbasaur4",
    classification: "Seed",
    gen: 1,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["electric"],
    abilities: ["Overgrow", "Chlorophyll"],
  },
];
const type = {
  type: "Flying",
  imageUrl:
    "https://cdn2.bulbagarden.net/upload/thumb/b/b5/Flying_icon_SwSh.png/96px-Flying_icon_SwSh.png",
};
const singlePokemon = [
  {
    pokedexNumber: 1,
    name: "Bulbasaur",
    classification: "Seed",
    gen: 1,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["grass"],
    abilities: ["Overgrow", "Chlorophyll"],
  },
];
function App() {
  return (
    <div className="App">
      <PokeHeader/>
      <PokemonList
        title={`${type.type} Type`}
        imgHeader={type.imageUrl}
        pokemons={pokemon}
      />
      <SinglePokemon singlePokemon={singlePokemon} />
    </div>
  );
}

export default App;
