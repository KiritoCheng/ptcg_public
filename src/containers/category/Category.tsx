import React, { useEffect } from "react";
import {
  initCategorys,
  selectCategory,
  fetchCategorysAsync,
} from "./categorySlice";
import { useAppSelector, useAppDispatch } from "../../libs/hook";

export const CategoryPage: React.FunctionComponent = () => {
  // The `state` arg is correctly typed as `RootState` already
  const categoryList = useAppSelector(selectCategory);

  const dispatch = useAppDispatch();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(fetchCategorysAsync());
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(initCategorys([]))}>clean</button>
      <button onClick={() => dispatch(fetchCategorysAsync())}>fetch</button>
      {categoryList.map((k) => (
        <div key={k.name}>
          <a href={`/card?category=${k.name}`}>{k.name}</a>
          <br />
        </div>
      ))}
    </div>
  );
};
