import Card from "./Card";
export default function ResultSection({ movies, series, moviesPlusSeries }) {
  return (
    <>
      <Card
        movies={movies}
        series={series}
        moviesPlusSeries={moviesPlusSeries}
      />
    </>
  );
}
