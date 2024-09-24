import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning.definition);

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p className="mb-0">{props.meaning.definition}</p>
      <em>{props.meaning.example}</em>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
