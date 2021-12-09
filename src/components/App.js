import React from "react";
import { useState, useEffect } from "react";
import { Grid, Container, Box } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PokemonList from "./pokemon/PokemonList";
import ResponsiveDrawer from "./menu/ResponsiveDrawer";
import PokeHeader from "./header/PokeHeader";
import SinglePokemon from "./pokemon/SinglePokemon";
import { getAllPokemons } from "../services/getPokemonInfo";
import "../css/index.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  //Get all pokemons from API by importing the getAllPokemons function
  useEffect(() => {
    getAllPokemons().then((dataPokemon) => {
      setPokemon(dataPokemon);
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Container disableGutters maxWidth={false}>
          <PokeHeader pokemons={pokemon} />
          <Grid container spacing={0}>
            <Grid item sm={4} md={3} lg={2} xl={2}>
              <div
                style={{
                  minHeight: "80vh",
                  height: "100%",
                }}
              >
                <Box display="flex" flex="1" style={{ height: "100%" }}>
                  <ResponsiveDrawer />
                </Box>
              </div>
            </Grid>
            <Grid pl="16px" item xs={12} sm={8} md={9} lg={10} xl={10}>
              <Box>
                <Switch>
                  <Route
                    path="/"
                    exact
                    render={() => (
                      <PokemonList
                        page="home"
                        title="Home"
                        pokemons={pokemon}
                      />
                    )}
                  />
                  <Route
                    path="/pokemon/:id"
                    render={({ match }) => (
                      <SinglePokemon id={match.params.id} />
                    )}
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
                    path="/class/:class"
                    render={({ match }) => (
                      <PokemonList
                        page="classification"
                        title={match.params.class}
                        pokemons={pokemon.filter(
                          (pokemon) =>
                            pokemon.classification === match.params.class
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
                            pokemon.pokedexNumber.toString() ===
                              match.params.search ||
                            pokemon.types[0] ===
                              match.params.search.toLowerCase() ||
                            pokemon.types[1] ===
                              match.params.search.toLowerCase()
                        )}
                      />
                    )}
                  />
                  <Route
                    path="/gen/:gen"
                    render={({ match }) => (
                      <PokemonList
                        page="generation"
                        title={match.params.gen}
                        pokemons={pokemon.filter(
                          (pokemon) =>
                            pokemon.gen.toString() === match.params.gen
                        )}
                      />
                    )}
                  />
                  <Route
                    path="/documentation"
                    render={() => (
                      <div>
                        <h1>Documentation</h1>
                        <img
                          style={{ width: "100%" }}
                          src="https://cdn.dribbble.com/users/1812146/screenshots/6968859/media/da21883ccb21ef749294ebc85a19dcf4.png"
                          alt="under-construction"
                        />
                      </div>
                    )}
                  />
                </Switch>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
