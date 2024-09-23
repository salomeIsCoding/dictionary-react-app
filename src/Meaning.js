import React from "react";

export default function Meaning(props) {
  console.log(props.meaning.definition);

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definition.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition}
              <br />
              {definition.example}
            </p>
          </div>
        );
      })}
    </div>
  );
}
