import logo from "./logo.svg";
import "./App.scss";
import MovieList from "./components/MovieList";
import GenreFilter from "./components/GenreFilter";
import { movies } from "./resources/moviesList";
import { genres } from "./resources/moviesList";
import store from "./redux";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="header">Top 15 Movies of All Time</h1>
        <GenreFilter genres={genres} />
        <MovieList movies={movies} />
      </div>
    </Provider>
  );
}

export default App;
