import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/aniajad/react-weather-app"
            target="_blank"
          >
            Open Source on GitHub{" "}
          </a>{" "}
          by Anna Jadczyszyn
        </footer>
      </div>
    </div>
  );
}
