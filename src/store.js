import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import commentsReducer from './redux/slices/commentsSlice';

export default configureStore({
    reducer: {
      counter: counterReducer,
      comments: commentsReducer,
    },
  })