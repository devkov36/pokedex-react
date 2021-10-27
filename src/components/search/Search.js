import React, { useState } from "react";
import SearchBtn from "./SearchBtn";

import "../../css/search/search.css";

function Search() {
  const [search, setSearch] = useState("");

  const capitalizeStrings = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const formatSearch = capitalizeStrings(search.toLowerCase().trim());

  return (
    <form className="search">
      <input
        type="text"
        className="input"
        placeholder="Search by name, number or type"
        onInput={(e) => setSearch(e.target.value ? e.target.value : "404")}
      />
      <SearchBtn search={formatSearch} />
    </form>
  );
}

export default Search;
