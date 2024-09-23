import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definiton`);

    let apiKey = "te659a2ao0cb8e3d11cb64043bff9883";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  //api.shecodes.io/dictionary/v1/define?word={word}&key={te659a2ao0cb8e3d11cb64043bff9883}
  https: return (
    <div>
      <form onSubmit={search}>
        <input type="submit" value="" />
        <input
          type="search"
          placeholder="search here"
          autofocus={true}
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
