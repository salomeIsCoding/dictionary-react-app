import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Search />
        </main>
        <footer>Coded by Salomé Erard</footer>
      </div>
    </div>
  );
}

export default App;
