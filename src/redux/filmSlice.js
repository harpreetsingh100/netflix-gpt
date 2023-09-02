import { createSlice } from "@reduxjs/toolkit";

const filmSlice = createSlice({
  name: "film",
  initialState: {
    nowPlayingMovies: null,
    trailerId: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerId: (state, action) => {
      state.trailerId = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerId } = filmSlice.actions;

export default filmSlice.reducer;
