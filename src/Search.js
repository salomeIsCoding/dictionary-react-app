import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "te659a2ao0cb8e3d11cb64043bff9883";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "2P1AuMrn7c29WtnevLJEi8JpbaAOTxsv0XFrUhNEA6Yoaczur79l1Yb9";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  return (
    <div className="px-5">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="search here"
          autofocus={true}
          onChange={handleKeywordChange}
        />
      </form>
      <div className="mt-5"></div>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}

// 2P1AuMrn7c29WtnevLJEi8JpbaAOTxsv0XFrUhNEA6Yoaczur79l1Yb9 API key Pexels
