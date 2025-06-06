import Header from "./components/Header";
import Main from "./components/Main";
import { SearchProvider } from "./contexts/SearchContext";

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
