import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🇦🇨": "Ascension Island",
  "🇦🇶": "Antarctica",
  "🇦🇷": "Argentina",
  "🇮🇳": "India",
  "🇲🇽": "Mexico",
  "🇵🇹": "Portugal",
  "🇦🇹": "Austria",
  "🇪🇬": "Egypt",
  "🇬🇷": "Greece",
  "🇺🇸": "United States"
};

var flagArray = Object.keys(flagDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    console.log(userInput);
    var meaning = flagDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't know that flag currently :(";
    }
    setMeaning(meaning);
  }

  function flagClickHandler(flag) {
    setMeaning(flagDictionary[flag]);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="flag">
          🎌
        </span>
        Flag Interpreter
      </h1>
      <input
        placeholder="Paste your flag emoji here"
        onChange={onChangeHandler}
      />
      <div className="outputDiv">{meaning}</div>
      <div className="flagDiv">
        <p>Currently we know these flags</p>
        {flagArray.map((flag) => {
          return (
            <span
              role="img"
              aria-label={flag}
              onClick={() => flagClickHandler(flag)}
              key={flag}
              className="flagHolder"
            >
              {flag}
            </span>
          );
        })}
      </div>
    </div>
  );
}
