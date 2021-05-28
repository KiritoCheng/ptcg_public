import { fetchCategoryApi } from "../../libs/api";
import { categorySchema, getCategoryAsyncTypes } from "./schema";

export const getCategoryAsync: getCategoryAsyncTypes = async () => {
  return await fetchCategoryApi(categorySchema)
    .then((response) => {
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
