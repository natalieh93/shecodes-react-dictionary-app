import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="Dictionary-container">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}
