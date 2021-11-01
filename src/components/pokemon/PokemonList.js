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
            {orderedPokemons.map((pokemon, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <PokemonCard
                  imageUrl={pokemon.imageUrl}
                  pokedexNumber={pokemon.pokedexNumber}
                  name={pokemon.name}
                  types={pokemon.types}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <div className="pokemon-list-empty">
            <h2>We're sorry! We couldn't find results for "{props.title}".</h2>
            <h3>
              Please try with a pokedex number between 1 and 151 or a letter.
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
