import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loadingStatus: false
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loading: (state, action) => {
      state.loadingStatus = action;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.loadingStatus = false;
    },
    logout: (state) => {
      state.user = null;
      // state.loadingStatus = false;
      state.loadingStatus = false;

    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {

  },
});

export const { loading, login, logout } = userSlice.actions;

export const selectLoadingStatus = (state) => state.user.loadingStatus;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
