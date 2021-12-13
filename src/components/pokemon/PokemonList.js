import "../../css/pokemon/pokemonList.css";
import PokemonCard from "./PokemonCard";
import Title from "./Title";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./ScrollTop";

function PokemonList(props) {
  const [pokemonStart, setPokemonStart] = useState(12);
  const pokemons = props.pokemons;
  const orderedPokemons = pokemons.sort((a, b) => {
    return a.pokedexNumber - b.pokedexNumber;
  });

  const windowTop = () => {
    setPokemonStart(12);
  };

  const scrollToEnd = () => {
    setPokemonStart(pokemonStart + 8);
  };

  window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      scrollToEnd();
    } else if (window.scrollY === 0) {
      windowTop();
    }
  };

  const isPokemonListEmpty = pokemons.length === 0;
  return (
    <div className="pokemon-list">
      <header className="pokemon-list-header">
        {!isPokemonListEmpty ? (
          <Title page={props.page} title={props.title} img={props.imgHeader} />
        ) : (
          <Title page={props.page} title={props.title} />
        )}
      </header>
      <section>
        {!isPokemonListEmpty ? (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {orderedPokemons.slice(0, pokemonStart).map((pokemon, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <PokemonCard
                  imageUrl={pokemon.imageUrl}
                  pokedexNumber={pokemon.pokedexNumber}
                  name={pokemon.name}
                  types={pokemon.types}
                />
              </Grid>
            ))}
            <ScrollTop {...props}>
              <Fab
                style={{ backgroundColor: "#d62929", color: "white" }}
                size="medium"
                aria-label="scroll back to top"
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
          </Grid>
        ) : props.page === "home" ||
          props.page === "type" ||
          props.page === "classification" ||
          props.page === "generation" ? (
          <div className="pokemon-list-loading">
            <img
              src="https://cdn.dribbble.com/users/946764/screenshots/2844436/media/9d3d886c377e8db1eaaec5cf743700c6.gif"
              alt="loading"
            />
          </div>
        ) : (
          <div className="pokemon-list-empty">
            <h2>We're sorry! We couldn't find results for "{props.title}".</h2>
            <h3>
              Please try with a pokedex number between 1 and 801 or a letter.
            </h3>
          </div>
        )}
      </section>
    </div>
  );
}

PokemonList.propTypes = {
  title: PropTypes.string.isRequired,
  imgHeader: PropTypes.string,
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
