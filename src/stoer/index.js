import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './registerSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    register: registerSlice,
    user: userSlice,
  },
});

export default store;
