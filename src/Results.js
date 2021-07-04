import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
       <div className="word-and-phonetic"> <h2>{props.results.word}</h2>
       <span className="phonetic-result">{props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              {" "}
              <Phonetic phonetic={phonetic} />{" "}
            </div>
          );
        })}</span></div>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
      
    );
  } else {
    return null;
  }
}
