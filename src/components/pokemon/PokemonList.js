import "../../css/pokemon/pokemonList.css";
import PokemonCard from "./PokemonCard";
import Title from "./Title";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

function PokemonList(props) {
  const pokemons = props.pokemons;
  const orderedPokemons = pokemons.sort(function (a, b) {
    return a.pokedexNumber - b.pokedexNumber;
  });
  return (
    <div className="pokemon-list">
      <header className="pokemon-list-header">
        <Title title={props.title} img={props.imgHeader} />
      </header>
      <section>
        <Grid container spacing={2}>
          {orderedPokemons.slice(0, 52).map((pokemon, index) => (
            <Grid key={index} item xs={3}>
              <PokemonCard
                imageUrl={pokemon.imageUrl}
                pokedexNumber={pokemon.pokedexNumber}
                name={pokemon.name}
                types={pokemon.types}
              />
            </Grid>
          ))}
        </Grid>
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
