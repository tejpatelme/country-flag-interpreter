import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🇦🇨": "Ascension Island",
  "🇦🇶": "Antarctica",
  "🇦🇷": "Argentina",
  "🇮🇳": "India",
  "🇲🇽": "Mexico",
  "🇵🇹": "Portugal"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    console.log(userInput);
    var meaning = flagDictionary[userInput];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Flag Interpreter</h1>
      <input onChange={onChangeHandler} />
      <div className="outputDiv">{meaning}</div>
    </div>
  );
}
