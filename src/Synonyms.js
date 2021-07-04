import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms"><h7 className="Synonyms-header">Synonyms:</h7><br/> {""} 
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym} </li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
