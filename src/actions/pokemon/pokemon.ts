import { fetchCardApi } from "../../libs/api";
import { resTypes } from "../type";

export const getPokemonAsync = async () => {
  return await fetchCardApi(``)
    .then((res: any) => {
      const { getCategory } = res.data;
      return getCategory;
    })
    .catch((error) => console.error("[ERROR]", error));
};
