import React, { useState, useEffect, useCallback } from "react";
import {
  initCategorys,
  selectCategory,
  fetchCategorysAsync,
} from "./categorySlice";
import { useAppSelector, useAppDispatch } from "../../libs/hook";
import { categoryTypes } from "../../actions/category/schema";

export const Category = () => {
  // The `state` arg is correctly typed as `RootState` already
  const categoryList = useAppSelector(selectCategory);

  const dispatch = useAppDispatch();
  //   const [categoryState, setCategoryState] = useState<categoryTypes[]>([]);

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
        <div key={k.name}>{k.name}</div>
      ))}
    </div>
  );
};
