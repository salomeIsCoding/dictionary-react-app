import React from "react";
import "./Synonym.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="mt-3">
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index} className="synonym me-2">
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
