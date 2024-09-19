import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definiton`);
  }

  return (
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
