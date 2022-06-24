import { configureStore } from '@reduxjs/toolkit';
import postSliceReducer from '../features/posts/postSlice';
import userSliceReucer from '../features/users/userSlice';


export const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    users: userSliceReucer,

  },
});
