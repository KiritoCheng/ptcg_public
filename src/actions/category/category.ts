import { fetchCategoryApi } from "../../libs/api";
import { categorySchema, categoryTypes } from "./schema";
import { resTypes } from "../type";

interface categoryResTypes extends resTypes {
  data: categoryTypes[];
}

export const getCategoryAsync = async () => {
  return await fetchCategoryApi(categorySchema)
    .then((response: { getCategory: categoryResTypes }) => {
      const { getCategory } = response;
      const { res, errorInfo, data } = getCategory;
      if (res !== 0) {
        alert(errorInfo);
        return [];
      }
      return data;
    })
    .catch((err) => {
      if (err) {
        alert("Sorry, The service is down!");
      }
    });
};
