const URL = "https://pokemon-bedu.herokuapp.com/v1/pokemons";
const URLtype = "https://pokemon-bedu.herokuapp.com/v1/types/";

export const getAllPokemons = async () => {
  const response = await fetch(URL);
  const dataPokemon = await response.json();
  return dataPokemon;
};

export const getSinglePokemon = async (id) => {
  const response = await fetch(`${URL}/${id}`);
  const dataPokemon = await response.json();
  return dataPokemon;
};

export const getAllTypes = async (id) => {
  const response = await fetch(URLtype + id);
  const dataType = await response.json();
  return dataType;
};
