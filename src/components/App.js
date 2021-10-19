import React from "react";
import { useState, useEffect } from "react";
import PokemonList from "./pokemon/PokemonList";
import LateralMenu from "./menu/LateralMenu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PokeHeader from "./header/PokeHeader";
import { Grid } from "@mui/material";
import "../css/index.css";

const URL = "https://pokemon-bedu.herokuapp.com/v1/pokemons";

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(URL);
      const dataPokemon = await response.json();
      setPokemon(dataPokemon);
    };
    getData();
  }, []);
  return (
    <div className="App">
      <Container disableGutters maxWidth={false}>
        <PokeHeader />
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Box height="100%" overflow="auto" backgroundColor="#D9D9D9">
              <LateralMenu />
            </Box>
          </Grid>
          <Grid pl="16px" item xs={10}>
            <Box>
              <PokemonList title={`All Pokemón`} pokemons={pokemon} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
