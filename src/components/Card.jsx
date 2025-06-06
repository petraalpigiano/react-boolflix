export default function Card({ movies, series, moviesPlusSeries }) {
  // const flagAPI = `https://flagsapi.com/${currentElement.original_language.toUpperCase()}/shiny/24.png`;
  // const flagAPI = `https://flagsapi.com/JA/shiny/24.png`;
  // const noFlag = "/img/no_flag.png";
  // const img = flagAPI === null ? noFlag : flagAPI;
  const baseImageUrl = `https://image.tmdb.org/t/p/w92`;
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Poster</th>
            <th scope="col">Titolo</th>
            <th scope="col">Titolo Originale</th>
            <th scope="col">Lingua</th>
            <th scope="col">Voto</th>
          </tr>
        </thead>
        <tbody>
          {moviesPlusSeries.map(function (currentElement) {
            return (
              <tr key={currentElement.id}>
                <td>
                  <img src={baseImageUrl + currentElement.poster_path} />
                </td>
                <td>{currentElement.original_title}</td>
                <td>{currentElement.title}</td>
                <td>
                  <img
                    src={`https://flagsapi.com/${currentElement.original_language.toUpperCase()}/shiny/24.png`}
                  ></img>
                </td>
                <td>{currentElement.vote_average}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
