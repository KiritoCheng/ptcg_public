export const transformToGraphqlString = (obj: Object) => {
  let res = "";

  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) {
      res += ` ${key} `;
      return;
    }
    if (typeof obj[`${key}`] === "object") {
      res += ` ${key} ${transformToGraphqlString(obj[key])} `;
    }
  });
  return `{ ${res} }`;
};
