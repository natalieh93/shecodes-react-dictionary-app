import React, { useState } from "react";
import axios from "axios"; 

import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState (null);

  function handleResponse(response){
      setResults(response.data[0]);  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
   
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse)
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="Dictionary-container">
              <h1 className="Dictionary-header">Dictionary</h1>
      <section>

        <form onSubmit={search}>
              
          <span className="fa fa-search form-control-search"></span>
          <input
            type="text"
            onChange={handleKeywordChange}
            className="form-control"
            placeholder="Search for a word here"
        />

        </form>
              </section>
        <Results results={results}/>
      </div>
          </div>
 
  );
}
