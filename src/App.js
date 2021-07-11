import Dictionary from "./Dictionary.js";
import "./App.css";
import logo from "./logo.svg";
import swapbutton from "./swapbutton.png";

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="Canada" />
      </main>
      <footer className="App-footer">
        <img src={logo} className="React-logo" alt="logo" />
        <span>
          <a
            href="https://github.com/natalieh93/shecodes-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            {" "}
            Open-source code{" "}
          </a>{" "}
          by {""}
          <a
            href="https://www.linkedin.com/in/natalie-hood-4b088a10b/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            Natalie Hood{" "}
          </a>
        </span>
        <br/>
        <img src={swapbutton} className="Swap-button" alt="swap-button" />
        &nbsp; &nbsp;
        <span>
          <a
            href="https://romantic-lovelace-e67a5e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="weather-app-link"
          >
            React Weather App
          </a>
        </span>
      </footer>
    </div>
  );
}
