import { configureStore } from "@reduxjs/toolkit";
import filterMoviesReducer from "./features/filterMoviesSlice";

const store = configureStore({
  reducer: {
    filteredMovies: filterMoviesReducer,
  },
});

export default store;