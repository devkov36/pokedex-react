import { useState, useEffect } from "react";
import "../../css/pokemon/singlePokemon.css";
import PokemonImage from "./PokemonImage";
import PokemonDetail from "./PokemonDetail";
import NextBtn from "../arrows/NextBtn";
import PrevBtn from "../arrows/PrevBtn";
import { getSinglePokemon } from "../../services/getPokemonInfo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

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
          <img
            src="https://cdn.dribbble.com/users/946764/screenshots/2844436/media/9d3d886c377e8db1eaaec5cf743700c6.gif"
            alt="loading"
          />
        </section>
      ) : (
        <div className="single-pokemon">
          <section className="pokemon-arrows">
            <PrevBtn
              id={
                pokemon.pokedexNumber === 1
                  ? pokemon.pokedexNumber
                  : pokemon.pokedexNumber - 1
              }
            />
            <div className="pokemon-details">
              <PokemonImage
                className="single"
                types={pokemon.types}
                src={pokemon.imageUrl}
              />
              <PokemonDetail
                name={pokemon.name}
                number={pokemon.pokedexNumber}
                gen={pokemon.gen}
                classification={pokemon.classification}
                types={pokemon.types}
                abilities={pokemon.abilities}
              />
            </div>
            <NextBtn id={pokemon.pokedexNumber + 1} />
          </section>
          <section>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                size="medium"
                color="success"
                variant="contained"
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                Go back
              </Button>
            </Link>
          </section>
        </div>
      )}
    </>
  );
}

SinglePokemon.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SinglePokemon;
