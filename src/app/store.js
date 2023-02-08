import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import counterReducer from '../features/counter/counterSlice';
=======
import userReducer from '../features/userSlice';
>>>>>>> e7a7532 (preReleaseWithoutStipe)

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
