import { fetchCardApi } from "../../libs/api";
import { pokemonSchema, getPokemonAsyncTypes } from "./schema";

export const getPokemonListAsync: getPokemonAsyncTypes = async ({
  category,
  page,
}) => {
  console.log(pokemonSchema);

  return await fetchCardApi({
    query: pokemonSchema,
    variables: { category, page },
  })
    .then((response) => {
      const { getPokemonList } = response;
      const { res, errorInfo, data } = getPokemonList;
      if (res !== 0) {
        alert(errorInfo);
        return [];
      }
      return data;
    })
    .catch((err) => {
      if (err) {
        // alert("Sorry, The service is down!");
      }
    });
};
