import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  accessToken: null,
  isValid: false,
};

const tokeSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAccessToken(state, action) {
      return { isValid: true, accessToken: action.payload };
    },
  },
});

export const { setAccessToken } = tokeSlice.actions;
const tokenReducer = tokeSlice.reducer;
export default tokenReducer;
