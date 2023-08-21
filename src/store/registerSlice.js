import { createSlice } from '@reduxjs/toolkit';
import { INITAIL_STATE } from '../constants/login';

const registerSlice = createSlice({
  name: 'register',
  initialState: INITAIL_STATE,
  reducers: {
    register1: (state, action) => {
      const { email, birthday } = action.payload;
      return {
        ...state,
        email,
        birthday,
      };
    },
  },
});

export const { register1 } = registerSlice.actions;
export default registerSlice.reducer;
