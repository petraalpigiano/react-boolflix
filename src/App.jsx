import Header from "./components/Header";
import { MoviesProvider } from "./contexts/MoviesContext";

export default function App() {
  return (
    <>
      <MoviesProvider>
        <Header />
      </MoviesProvider>
    </>
  );
}
