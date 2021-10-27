const URL = "https://pokemon-bedu.herokuapp.com/v1/pokemons";

export const getAllPokemons = async () => {
  const response = await fetch(URL);
  const dataPokemon = await response.json();
  return dataPokemon;
};
