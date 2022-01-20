import { transformToGraphqlString } from "../../libs/units";
import { resTypes } from "./../type";
const setSchema = (
  params: pokemonTypes
) => `query getPokemonList($category: String!, $page: Int) {
  getPokemonList(category: $category, page: $page) {
    data ${transformToGraphqlString(params)}
    res
    errorInfo
  }
}`;

export const pokemonSchema = setSchema({
  id: null,
  pid: null,
  category: null,
  name: null,
  hp: null,
  p_type: null,
  abilitys: {
    cost: null,
    skill: null,
    damage: null,
    content: null,
  },
  power: {
    cost: null,
    skill: null,
    damage: null,
    content: null,
  },
  weakness_type: null,
  resistance_type: null,
  weakness_number: null,
  resistance_number: null,
  escape: null,
  img: null,
});

// data types
type powerTypes = {
  cost?: string;
  skill?: string;
  damage?: string;
  content?: string;
};
export interface pokemonTypes {
  id?: number;
  pid?: string;
  category?: string;
  name?: string;
  hp?: number;
  p_type?: string;
  abilitys?: powerTypes | powerTypes[];
  power?: powerTypes | powerTypes[];
  weakness_type?: string;
  resistance_type?: string;
  weakness_number?: string;
  resistance_number?: string;
  escape?: number;
  img?: string;
}

export interface trainerTypes {
  id?: number;
  tid?: string;
  category?: string;
  name?: string;
  t_type?: string;
  effect?: string;
  img?: string;
}

export interface cardTypes extends pokemonTypes, trainerTypes {}

// api types
export type fetchCardApiTypes = (params: {
  query: string;
  variables?: { category?: string; page?: number };
}) => Promise<{
  getPokemonList?: resTypes & { data: pokemonTypes[] };
  getTrainerList?: resTypes & { data: trainerTypes[] };
}>;

// action types
export type getPokemonAsyncTypes = (P: {
  category: string;
  page: number;
}) => Promise<void | pokemonTypes[]>;
export type getTrainerAsyncTypes = (P: {
  category: string;
  page: number;
}) => Promise<void | trainerTypes[]>;
