import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../containers/hello/helloSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
