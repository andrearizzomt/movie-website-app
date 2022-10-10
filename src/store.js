import { configureStore, createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesData",
  initialState: { value: { results: [] } },
  reducers: {
    getMovies: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getMovies } = moviesSlice.actions;

export const store = configureStore({
  reducer: {
    moviesData: moviesSlice.reducer,
  },
});
