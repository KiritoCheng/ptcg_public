import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "./../../reducers/index";
import { getCategoryAsync } from "../../actions/category/category";
import { categoryTypes } from "../../actions/category/schema";

// Define a type for the slice state
interface CounterState {
  categoryList: categoryTypes[];
}

// Define the initial state using that type
const initialState: CounterState = {
  categoryList: [],
};

// reducer
export const slice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // init data
    initCategorys: (state, action: PayloadAction<categoryTypes[]>) => {
      state.categoryList = [].concat(action.payload);
    },
  },
});

export const { initCategorys } = slice.actions;

// mapToProps
export const fetchCategorysAsync = () => (dispatch: AppDispatch) => {
  getCategoryAsync().then((res: categoryTypes[] = []) => {
    dispatch(initCategorys(res));
  });
};

// set data from RootState
export const selectCategory = (state: RootState) =>
  state.category.categoryList || [];

export default slice.reducer;
