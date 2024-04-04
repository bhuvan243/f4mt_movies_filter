import React from "react";
import "../styles/moviesList.scss";
import { useSelector } from "react-redux";

const MovieList = ({ movies }) => {
  const filteredMovies = useSelector((state) => {
    return state.filteredMovies.movies;
  });

  const moviesList = filteredMovies.length > 0 ? filteredMovies : movies;

  return (
    <main className="table-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {moviesList.map((movie) => {
            return (
              <tr key={movie.title}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default MovieList;
