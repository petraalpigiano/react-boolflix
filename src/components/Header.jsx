import { useState } from "react";
import { useMovies } from "../contexts/MoviesContext";

export default function Header() {
  const { search } = useMovies();
  const [input, setInput] = useState("");
  function handleFormSubmit(e) {
    e.preventDefault();
    search(input);
  }

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Boolflix</a>
          <form onSubmit={handleFormSubmit} className="d-flex" role="search">
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
