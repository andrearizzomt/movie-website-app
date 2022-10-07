import { configureStore, createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMoviesData",
  initialState: { value: { results: [] } },
  reducers: {
    getPopularMovies: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getPopularMovies } = popularMoviesSlice.actions;

export const store = configureStore({
  reducer: {
    popularMoviesData: popularMoviesSlice.reducer,
  },
});
