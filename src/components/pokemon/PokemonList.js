import "../../css/pokemon/pokemonList.css";
import PokemonCard from "./PokemonCard";
import Title from "./Title";
import { Grid } from "@mui/material";

function PokemonList(props) {
  return (
    <div className="pokemon-list">
      <header className="pokemon-list-header">
        <Title title={props.title} img={props.imgHeader} />
      </header>
      <section>
        <Grid container spacing={2}>
          {props.pokemons.map((pokemon, index) => (
            <Grid item xs={3}>
              <PokemonCard
                imageUrl={pokemon.imageUrl}
                pokedexNumber={pokemon.pokedexNumber}
                name={pokemon.name}
                types={pokemon.types}
                key={index}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
}

export default PokemonList;
