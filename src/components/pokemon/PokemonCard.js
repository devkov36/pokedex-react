import "../../css/pokemon/pokemonCard.css";
import PokemonImage from "./PokemonImage";
import PokemonInfo from "./PokemonInfo";
import { Link } from "@mui/material";

function PokemonCard(props) {
  return (
    <section className="pokemon-card">
      <Link
        color="inherit"
        underline="none"
        component="button"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        <PokemonImage types={props.types} src={props.imageUrl} />
        <PokemonInfo
          pokedexNumber={props.pokedexNumber}
          name={props.name}
          types={props.types}
        />
      </Link>
    </section>
  );
}

export default PokemonCard;
