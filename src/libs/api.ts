import { postData } from "./http";

export const fetchCategoryApi = (query: String) => {
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

export const fetchCardApi = (query: String) => {
  return new Promise((resolve, reject) => {
    postData("http://localhost:4000/api/card", {
      query,
    })
      .then((res) => resolve(res.data))
      .catch((error) => {
        console.error("[ERROR]", error);
        reject(error);
      });
  });
};
