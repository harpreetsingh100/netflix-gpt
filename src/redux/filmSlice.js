import { createSlice } from "@reduxjs/toolkit";

const filmSlice = createSlice({
  name: "film",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = filmSlice.actions;

export default filmSlice.reducer;
