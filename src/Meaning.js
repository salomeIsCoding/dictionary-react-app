import React from "react";

export default function Meaning(props) {
  console.log(props.meaning.definition);

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return <div key="index">{definition}</div>;
      })}

      {/* <p>{props.meaning.definition}</p>
      <em>{props.meaning.example}</em> */}
    </div>
  );
}
