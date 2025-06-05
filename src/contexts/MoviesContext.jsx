import axios from "axios";
import { createContext, useContext } from "react";
const MoviesContext = createContext();

function MoviesProvider({ children }) {
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
