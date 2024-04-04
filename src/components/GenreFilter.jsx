import React from "react";
import "../styles/navbarStyles.scss";
import { filterMoviesByGenre } from "../redux/features/filterMoviesSlice";
import { useDispatch } from "react-redux";

const GenreFilter = ({ genres }) => {
  const dispatch = useDispatch();
  function filterByGenre(genre) {
    console.log(`Filtering by ${genre}`);
    dispatch(filterMoviesByGenre(genre));
  }
  return (
    <nav className="navbar">
      <h2>Filter by Genre</h2>
      <ul className="genres-list">
        {genres.map((genre) => {
          return (
            <li key={genre} onClick={() => filterByGenre(genre)}>
              <button>{genre}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default GenreFilter;
