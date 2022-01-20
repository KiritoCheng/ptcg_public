import { cardTypes } from "../../actions/card/schema";
import { getPokemonListAsync } from "../../actions/card/pokemon";
import { RootState, AppDispatch } from "../../reducers/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  cardList: cardTypes[];
}

// Define the initial state using that type
const initialState: CounterState = {
  cardList: [],
};

// reducer
export const slice = createSlice({
  name: "card",
  initialState,
  reducers: {
    // clean data
    cleanCardList: (state) => {
      state.cardList = [];
    },
    // init data
    setCardList: (state, action: PayloadAction<cardTypes[]>) => {
      state.cardList = state.cardList.concat(action.payload);
    },
  },
});

// action
export const { cleanCardList, setCardList } = slice.actions;

// mapToProps
export const fetchCardListAsync =
  ({ category, page }: { category: string; page: number }) =>
  (dispatch: AppDispatch) => {
    getPokemonListAsync({ category, page }).then((res: cardTypes[] = []) => {
      dispatch(setCardList(res));
    });
  };

// set data from RootState
export const selectCardList = (state: RootState) => state.card.cardList || [];

export default slice.reducer;
