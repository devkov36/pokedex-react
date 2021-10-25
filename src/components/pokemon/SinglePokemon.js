import { useState, useEffect } from "react";
import "../../css/pokemon/singlePokemon.css";
import PokemonImage from "./PokemonImage";
import PokemonDetail from "./PokemonDetail";
import PropTypes from "prop-types";

const URLsinglePokemon = "https://pokemon-bedu.herokuapp.com/v1/pokemons/";
function SinglePokemon(props) {
  const [single, setSingle] = useState([]);
  useEffect(() => {
    const getDataSinglePokemon = async (id) => {
      const response = await fetch(URLsinglePokemon + id);
      const dataPokemon = await response.json();
      setSingle(dataPokemon);
    };
    getDataSinglePokemon(props.id);
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
