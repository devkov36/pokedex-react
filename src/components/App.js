import React from "react";
import { useState, useEffect } from "react";
import { Grid, Container, Box } from "@mui/material";
import { BrowserRouter, Route } from "react-router-dom";
import PokemonList from "./pokemon/PokemonList";
import LateralMenu from "./menu/LateralMenu";
import PokeHeader from "./header/PokeHeader";
import SinglePokemon from "./pokemon/SinglePokemon";
import { getAllPokemons } from "../services/getAllPokemons";
import "../css/index.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getAllPokemons().then((dataPokemon) => {
      setPokemon(dataPokemon);
    });
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
                <Route
                  path="/"
                  exact
                  render={() => (
                    <PokemonList page="home" title="Home" pokemons={pokemon} />
                  )}
                />
                <Route
                  path="/pokemon/:id"
                  render={({ match }) => <SinglePokemon id={match.params.id} />}
                />
                <Route
                  path="/type/:type"
                  render={({ match }) => (
                    <PokemonList
                      page="type"
                      title={match.params.type}
                      pokemons={pokemon.filter(
                        (pokemon) =>
                          pokemon.types[0] === match.params.type ||
                          pokemon.types[1] === match.params.type
                      )}
                    />
                  )}
                />
                <Route
                  path="/search/:search"
                  render={({ match }) => (
                    <PokemonList
                      page="search"
                      title={match.params.search}
                      pokemons={pokemon.filter(
                        (pokemon) =>
                          pokemon.name.includes(match.params.search) ||
                          pokemon.pokedexNumber
                            .toString()
                            .includes(match.params.search) ||
                          pokemon.types[0] ===
                            match.params.search.toLowerCase() ||
                          pokemon.types[1] === match.params.search.toLowerCase()
                      )}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
