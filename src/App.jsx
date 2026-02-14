import "./assets/styles/App.scss";
import ClickCount from "./components/ClickCount";
import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";

function App() {

  return (
    <>
      <h1>Hello world</h1>
      <SearchBar />
      <Counter />
      <ClickCount />
    </>
  );
}

export default App;
