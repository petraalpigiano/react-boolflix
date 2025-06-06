import Header from "./components/Header";
import Main from "./components/Main";
import { SearchProvider } from "./contexts/MoviesContext";

export default function App() {
  return (
    <>
      <SearchProvider>
        <Header />
        <Main />
      </SearchProvider>
    </>
  );
}
