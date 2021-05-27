import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../containers/category/categorySlice";
import counterReducer from "../containers/hello/helloSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
