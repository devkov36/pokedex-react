import React from "react";
import { useState, useEffect } from "react";
import { Grid, Container, Box  } from "@mui/material";
import {BrowserRouter, Route} from 'react-router-dom'
import PokemonList from "./pokemon/PokemonList";
import LateralMenu from "./menu/LateralMenu";
import PokeHeader from "./header/PokeHeader";
import "../css/index.css";
import SinglePokemon from "./pokemon/SinglePokemon";

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
    <BrowserRouter>
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
              <Route path="/" exact render={()=> <PokemonList title={`All Pokemón`} pokemons={pokemon} />} />
              <Route path="/:id" render={({match})=> <SinglePokemon id={match.params.id} />} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
