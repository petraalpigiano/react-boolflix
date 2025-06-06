import ResultSection from "./ResultSection";
import Loader from "./Loader";
import { useSearch } from "../contexts/SearchContext";

export default function Main() {
  const { movies, series, moviesPlusSeries } = useSearch();
  return (
    <>
      <ResultSection
        movies={movies}
        series={series}
        moviesPlusSeries={moviesPlusSeries}
      />
      <Loader />
    </>
  );
}
