import React from "react";
import Title from "./pokemon/Title";
import PokemonType from "./pokemon/PokemonType";
import PokemonImage from "./pokemon/PokemonImage";
import PokemonDetail from "./pokemon/PokemonDetail";
import PokemonInfo from "./pokemon/PokemonInfo";
import SinglePokemon from "./pokemon/SinglePokemon";
import PokemonList from "./pokemon/PokemonList";
import LateralMenu from './menu/LateralMenu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const pokemon = [
  {
    pokedexNumber: 1,
    name: "Bulbasaur",
    classification: "Seed",
    gen: 1,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["grass"],
    abilities: ["Overgrow", "Chlorophyll"]
  }, {
    pokedexNumber: 2,
    name: "Bulbasaur2",
    classification: "Seed",
    gen: 1,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["flying"],
    abilities: ["Overgrow", "Chlorophyll"]
  }, {
    pokedexNumber: 3,
    name: "Bulbasaur3",
    classification: "Seed",
    gen: 1,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["grass", "poison"],
    abilities: ["Overgrow", "Chlorophyll"]
  }, {
    pokedexNumber: 4,
    name: "Bulbasaur4",
    classification: "Seed",
    gen: 1,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["electric"],
    abilities: ["Overgrow", "Chlorophyll"]
  }
];
const type = { type: "Flying", imageUrl: "https://cdn2.bulbagarden.net/upload/thumb/b/b5/Flying_icon_SwSh.png/96px-Flying_icon_SwSh.png" };
const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
};
function App() {
  return (
    <div className="App" style={style}>
      <Box height="100vh" display="flex" flexDirection="column">
        <LateralMenu flex={1} overflow="auto" />
      </Box>
      <Container>
        <PokemonList
          title={`${type.type} Type`}
          imgHeader={type.imageUrl}
          pokemons={pokemon}
        />
      </Container>
    </div>
  );
}

export default App;
