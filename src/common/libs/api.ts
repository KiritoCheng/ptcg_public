import { postData } from "./http";

export const fetchCategory = () => {
  return postData("http://example.com/answer", { answer: 42 })
    .then((data) => console.log(data)) // JSON from `response.json()` call
    .catch((error) => console.error(error));
};
