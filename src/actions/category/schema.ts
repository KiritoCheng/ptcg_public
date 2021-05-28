import { transformToGraphqlString } from "../../libs/units";
import { resTypes } from "./../type";

const setSchema = (params: categoryTypes) => `{
  getCategory {
    data ${transformToGraphqlString(params)}
    res
    errorInfo
  }
}`;
export const categorySchema = setSchema({ name: null });

// data types
export type categoryMapTypes = "name";
export interface categoryTypes {
  name?: string;
}

// api types
export type fetchCategoryApiTypes = (
  query: String
) => Promise<{ getCategory: resTypes & { data: categoryTypes[] } }>;

// action types
export type getCategoryAsyncTypes = () => Promise<void | categoryTypes[]>;
