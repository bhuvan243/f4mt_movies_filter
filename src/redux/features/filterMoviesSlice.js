import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../../resources/moviesList";

const initialState = {
  movies: [],
};

const filterMoviesSlice = createSlice({
  name: "filteredMovies",
  initialState: initialState,
  reducers: {
    filterByGenre: (state, action) => {
      state.movies = action.payload;
    },
  },
});

const { filterByGenre } = filterMoviesSlice.actions;

export default filterMoviesSlice.reducer;

export function filterMoviesByGenre(genre) {
  const filteredMovies = movies.filter(
    (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
  );
  return (dispatch) => {
    dispatch(filterByGenre(filteredMovies));
  };
}
