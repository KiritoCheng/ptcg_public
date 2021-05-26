import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "../../reducers/index";

// Define a type for the slice state
interface categoryState {
  id: number;
}

// Define the initial state using that type
const initialState: categoryState[] = [];

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    //   increment: (state) => {
    //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //     // doesn't actually mutate the state because it uses the immer library,
    //     // which detects changes to a "draft state" and produces a brand new
    //     // immutable state based off those changes
    //     state.value += 1;
    //   },
    //   decrement: (state) => {
    //     state.value -= 1;
    //   },
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload;
    //   },
  },
});

// Define a thunk that dispatches those action creators
export const fetchCategorys = () => async (dispatch: AppDispatch) => {
  // dispatch(usersLoading())
  // const response = await usersAPI.fetchAll()
  // dispatch(usersReceived(response.data))
};

export const getCategoryListAsync =
  (amount: number) => (dispatch: AppDispatch) => {
    // setTimeout(() => {
    //   dispatch(incrementByAmount(amount));
    // }, 1000);
  };

export default categorySlice.reducer;
