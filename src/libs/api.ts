import { fetchCardApiTypes } from "../actions/card/schema";
import { fetchCategoryApiTypes } from "../actions/category/schema";
import { postData } from "./http";

export const fetchCategoryApi: fetchCategoryApiTypes = (query) => {
  return new Promise((resolve, reject) => {
    postData("http://localhost:4000/api/category", {
      query,
    })
      .then((res) => resolve(res.data))
      .catch((error) => {
        console.error("[ERROR]", error);
        reject(error);
      });
  });
};

export const fetchCardApi: fetchCardApiTypes = ({ query, variables }) => {
  return new Promise((resolve, reject) => {
    postData("http://localhost:4000/api/card", {
      query,
      variables,
    })
      .then((res) => resolve(res.data))
      .catch((error) => {
        console.error("[ERROR]", error);
        reject(error);
      });
  });
};
