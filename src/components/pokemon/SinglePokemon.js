import { useState, useEffect } from "react";
import "../../css/pokemon/singlePokemon.css";
import PokemonImage from "./PokemonImage";
import PokemonDetail from "./PokemonDetail";
import { getSinglePokemon } from "../../services/getPokemonInfo";
import PropTypes from "prop-types";

function SinglePokemon(props) {
  const [single, setSingle] = useState([]);
  useEffect(() => {
    getSinglePokemon(props.id).then((dataPokemon) => {
      setSingle(dataPokemon);
    });
  }, [props.id]);
  const pokemon = single;
  return (
    <>
      {pokemon.length === 0 ? (
        <section className="pokemon-details">
          <h1>Loading...</h1>
        </section>
      ) : (
        <section className="pokemon-details">
          <PokemonImage types={pokemon.types} src={pokemon.imageUrl} />
          <PokemonDetail
            name={pokemon.name}
            number={pokemon.pokedexNumber}
            gen={pokemon.gen}
            classification={pokemon.classification}
            types={pokemon.types}
            abilities={pokemon.abilities}
          />
        </section>
      )}
    </>
  );
}

SinglePokemon.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SinglePokemon;
