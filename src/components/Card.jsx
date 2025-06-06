export default function Card({ movies, series, moviesPlusSeries }) {
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
          {moviesPlusSeries.map(function (currentElement) {
            return (
              <tr key={currentElement.id}>
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
