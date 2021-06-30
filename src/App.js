import Dictionary from "./Dictionary.js"
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <span>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/natalie-hood-4b088a10b/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <strong> Natalie Hood</strong>
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/natalieh93/shecodes-react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <strong>open-sourced</strong>
          </a>{" "}
          on GitHub.
        </span>
      </footer>
    </div>
  );
}

