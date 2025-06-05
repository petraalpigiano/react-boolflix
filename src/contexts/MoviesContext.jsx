import axios from "axios";
import { createContext, useContext, useEffect } from "react";
const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const apiURL = "https://api.themoviedb.org/3";
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(`${apiURL}/search/movie?query=Hurry&api_key=${apiKey}`)
      .then((res) => {
        console.log(res.data.results);
      });
  }, []);
  return (
    <>
      <MoviesContext.Provider>{children}</MoviesContext.Provider>
    </>
  );
}

function useMovies() {
  return useContext(MoviesContext);
}

export { useMovies, MoviesProvider };
