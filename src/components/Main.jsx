import ResultSection from "./ResultSection";
import Loader from "./Loader";
import { useMovies } from "../contexts/MoviesContext";

export default function Main() {
  const { movies } = useMovies();
  return (
    <>
      <ResultSection movies={movies} />
      <Loader />
    </>
  );
}
