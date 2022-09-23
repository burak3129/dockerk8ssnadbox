import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SOUTHERN-CHARMS</p>
        <a
          className="App-link"
          href="http://www.southern-charms2.com/sandra/photos.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          SANDRA
        </a>
        <a
          className="App-link"
          href="http://www.southern-charms3.com/raven/photos.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          RAVEN
        </a>
      </header>
    </div>
  );
}

export default App;
