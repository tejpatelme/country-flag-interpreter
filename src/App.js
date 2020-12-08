import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🇦🇨": "Ascension Island",
  "🇦🇩": "Andorra",
  "🇦🇪": "United Arab Emirates",
  "🇦🇫": "Afghanistan",
  "🇦🇬": "Antigua & Barbuda",
  "🇦🇮": "Anguilla",
  "🇦🇱": "Albania",
  "🇦🇲": "Armenia",
  "🇦🇴": "Angola",
  "🇦🇶": "Antarctica",
  "🇦🇷": "Argentina",
  "🇦🇸": "American Samoa",
  "🇦🇹": "Austria",
  "🇦🇺": "Australia",
  "🇦🇼": "Aruba",
  "🇦🇽": "Åland Islands",
  "🇦🇿": "Azerbaijan",
  "🇧🇦": "Bosnia & Herzegovina",
  "🇧🇧": "Barbados",
  "🇧🇩": "Bangladesh",
  "🇧🇪": "Belgium",
  "🇧🇫": "Burkina Faso",
  "🇧🇬": "Bulgaria",
  "🇧🇭": "Bahrain",
  "🇧🇮": "Burundi",
  "🇧🇯": "Benin",
  "🇧🇱": "St. Barthélemy",
  "🇧🇲": "Bermuda",
  "🇧🇳": "Brunei",
  "🇧🇴": "Bolivia",
  "🇧🇶": "Caribbean Netherlands",
  "🇧🇷": "Brazil",
  "🇧🇸": "Bahamas",
  "🇧🇹": "Bhutan",
  "🇧🇻": "Bouvet Island",
  "🇧🇼": "Botswana",
  "🇧🇾": "Belarus",
  "🇧🇿": "Belize",
  "🇨🇦": "Canada",
  "🇨🇨": "Cocos (Keeling) Islands",
  "🇨🇰": "Cook Islands",
  "🇨🇱": "Chile",
  "🇨🇲": "Cameroon",
  "🇨🇳": "China",
  "🇨🇴": "Colombia",
  "🇨🇵": "Clipperton Island",
  "🇨🇷": "Costa Rica",
  "🇨🇺": "Cuba",
  "🇨🇻": "Cape Verde",
  "🇨🇼": "Curaçao",
  "🇨🇽": "Christmas Island",
  "🇨🇾": "Cyprus",
  "🇨🇿": "Czechia",
  "🇩🇪": "Germany",
  "🇩🇬": "Diego Garcia",
  "🇩🇯": "Djibouti",
  "🇩🇰": "Denmark",
  "🇩🇲": "Dominica",
  "🇩🇴": "Dominican Republic",
  "🇩🇿": "Algeria",
  "🇪🇦": "Ceuta & Melilla",
  "🇪🇨": "Ecuador",
  "🇪🇪": "Estonia",
  "🇪🇬": "Egypt",
  "🇪🇭": "Western Sahara",
  "🇪🇷": "Eritrea",
  "🇪🇸": "Spain",
  "🇪🇹": "Ethiopia",
  "🇪🇺": "European Union",
  "🇫🇮": "Finland",
  "🇫🇯": "Fiji",
  "🇫🇰": "Falkland Islands",
  "🇫🇲": "Micronesia",
  "🇫🇴": "Faroe Islands",
  "🇫🇷": "France",
  "🇬🇦": "Gabon",
  "🇬🇧": "United Kingdom",
  "🇬🇵": "Guadeloupe",
  "🇬🇶": "Equatorial Guinea",
  "🇬🇷": "Greece",
  "🇬🇸": "South Georgia & South Sandwich Islands",
  "🇭🇺": "Hungary",
  "🇮🇨": "Canary Islands",
  "🇮🇩": "Indonesia",
  "🇮🇪": "Ireland",
  "🇮🇱": "Israel",
  "🇮🇲": "Isle of Man",
  "🇮🇳": "India",
  "🇮🇴": "British Indian Ocean Territory",
  "🇮🇶": "Iraq",
  "🇮🇷": "Iran",
  "🇮🇸": "Iceland",
  "🇮🇹": "Italy",
  "🇯🇪": "Jersey",
  "🇯🇲": "Jamaica",
  "🇯🇴": "Jordan",
  "🇯🇵": "Japan",
  "🇰🇪": "Kenya",
  "🇰🇬": "Kyrgyzstan",
  "🇰🇭": "Cambodia",
  "🇰🇮": "Kiribati",
  "🇰🇲": "Comoros",
  "🇰🇳": "St. Kitts & Nevis",
  "🇱🇻": "Latvia",
  "🇱🇾": "Libya",
  "🇲🇦": "Morocco",
  "🇲🇱": "Mali",
  "🇲🇲": "Myanmar (Burma)",
  "🇲🇵": "Northern Mariana Islands",
  "🇲🇶": "Martinique",
  "🇲🇷": "Mauritania",
  "🇲🇸": "Montserrat",
  "🇲🇹": "Malta",
  "🇲🇺": "Mauritius",
  "🇲🇻": "Maldives",
  "🇲🇼": "Malawi",
  "🇲🇽": "Mexico",
  "🇲🇾": "Malaysia",
  "🇳🇱": "Netherlands",
  "🇳🇴": "Norway",
  "🇳🇵": "Nepal",
  "🇳🇷": "Nauru",
  "🇳🇺": "Niue",
  "🇳🇿": "New Zealand",
  "🇴🇲": "Oman",
  "🇵🇦": "Panama",
  "🇵🇪": "Peru",
  "🇵🇫": "French Polynesia",
  "🇵🇬": "Papua New Guinea",
  "🇵🇭": "Philippines",
  "🇷🇺": "Russia",
  "🇷🇼": "Rwanda",
  "🇸🇦": "Saudi Arabia",
  "🇸🇧": "Solomon Islands",
  "🇸🇨": "Seychelles",
  "🇸🇩": "Sudan",
  "🇸🇪": "Sweden",
  "🇸🇬": "Singapore",
  "🇸🇿": "Eswatini",
  "🇹🇦": "Tristan Da Cunha",
  "🇹🇨": "Turks & Caicos Islands",
  "🇹🇩": "Chad",
  "🇹🇫": "French Southern Territories",
  "🇹🇬": "Togo",
  "🇹🇭": "Thailand",
  "🇹🇯": "Tajikistan",
  "🇹🇰": "Tokelau",
  "🇹🇱": "Timor-Leste",
  "🇹🇲": "Turkmenistan",
  "🇹🇳": "Tunisia",
  "🇹🇴": "Tonga",
  "🇹🇷": "Turkey",
  "🇻🇦": "Vatican City",
  "🇻🇨": "St. Vincent & Grenadines",
  "🇻🇪": "Venezuela",
  "🇻🇬": "British Virgin Islands",
  "🇻🇮": "U.S. Virgin Islands",
  "🇿🇲": "Zambia",
  "🇿🇼": "Zimbabwe"
};

var flagArray = Object.keys(flagDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Result will come here");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    console.log(userInput);
    var meaning = flagDictionary[userInput];
    if (userInput === "") meaning = "Result will come here";
    else if (meaning === undefined) {
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
      <p>Or click any flag to know which country's it is</p>
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
