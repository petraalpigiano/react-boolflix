import ResultSection from "./ResultSection";
import Loader from "./Loader";
import { useSearch } from "../contexts/MoviesContext";

export default function Main() {
  const { movies } = useSearch();
  return (
    <>
      <ResultSection movies={movies} />
      <Loader />
    </>
  );
}
