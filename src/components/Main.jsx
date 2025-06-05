import { useMovies } from "../contexts/MoviesContext";

export default function Main() {
  const { movies } = useMovies();
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Titolo</th>
            <th scope="col">Titolo Originale</th>
            <th scope="col">Lingua</th>
            <th scope="col">Voto</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(function (currentMovie) {
            return (
              <tr key={currentMovie.id}>
                <td>{currentMovie.original_title}</td>
                <td>{currentMovie.title}</td>
                <td>{currentMovie.original_language}</td>
                <td>{currentMovie.vote_average}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
