import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by Salomé Erard and open-sourced on{" "}
          <a href="https://github.com/salomeIsCoding/dictionary-react-app">
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://dico-react-shecodes.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
