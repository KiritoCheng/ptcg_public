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
    initCategorys: (state, action: PayloadAction<categoryTypes[]>) => {
      state.categoryList = [].concat(action.payload);
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { initCategorys } = slice.actions;

// dispatch
// export const mapToProps = {
export const fetchCategorysAsync = () => (dispatch: AppDispatch) => {
  getCategoryAsync().then((res: categoryTypes[] = []) => {
    dispatch(initCategorys(res));
  });
};
// };
// export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
//   setTimeout(() => {}, 1000);
// };

export const selectCategory = (state: RootState) =>
  state.category.categoryList || [];

export default slice.reducer;
