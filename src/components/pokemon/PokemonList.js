import "../../css/pokemon/pokemonList.css";
import PokemonCard from "./PokemonCard";
import Title from "./Title";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

function PokemonList(props) {
  const pokemons = props.pokemons;
  const orderedPokemons = pokemons.sort((a, b) => {
    return a.pokedexNumber - b.pokedexNumber;
  });
  return (
    <div className="pokemon-list">
      <header className="pokemon-list-header">
        <Title page={props.page} title={props.title} img={props.imgHeader} />
      </header>
      <section>
        <Grid container spacing={2}>
          {orderedPokemons.map((pokemon, index) => (
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
