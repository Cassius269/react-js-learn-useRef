import "./assets/styles/App.scss";
import AddFilm from "./components/AddFilm";
import ClickCount from "./components/ClickCount";
import Counter from "./components/Counter";
import ScrollPage from "./components/ScrollPage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <SearchBar />
      <Counter />
      <ClickCount />
      <AddFilm />
      <ScrollPage />
    </>
  );
}

export default App;
