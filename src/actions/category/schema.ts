const getCategorySchema = (params: categoryMapTypes[]) => `{
  getCategory {
    data {
      ${params.join(" ")}
    }
    res
    errorInfo
  }
}`;

export const categorySchema = getCategorySchema(["name"]);

export type categoryMapTypes = "name";

export interface categoryTypes {
  name: string;
}
