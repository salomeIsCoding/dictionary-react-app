import React from "react";
import Meaning from "./Meaning";
import image2 from "./images/hearing.png";
import "./Results.css";

export default function Results(props) {
  console.log(props.phonetics);
  const imagesList = [
    {
      id: 2,
      src: image2,
      alt: "Image 2",
    },
  ];

  if (props.results) {
    return (
      <div className="border-top results text-start">
        <h2 className="mt-5">{props.results.word}</h2>
        <div className="d-flex justify-content-start">
          <div className="row">
            <div className="col pe-0">
              <p className="text-secondary mb-5">/{props.results.phonetic}/</p>
            </div>
            <div className="col ps-2">
              {imagesList.map((image) => (
                <img key={2} src={image2} alt="" height="30" />
              ))}
            </div>
          </div>
        </div>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
