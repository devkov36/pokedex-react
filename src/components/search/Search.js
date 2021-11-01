import { useState } from "react";
import SearchBtn from "./SearchBtn";
import { capitalizeStrings } from "../../utils/capitalizeStrings";
import "../../css/search/search.css";

function Search() {
  const [search, setSearch] = useState("");
  const formatSearch = capitalizeStrings(search.toLowerCase().trim());

  return (
    <form className="search">
      <input
        type="text"
        className="input"
        placeholder="Search by name or Pokedex number"
        onFocus={(e) => (e.target.value = "")}
        onChange={(e) =>
          setSearch(e.target.value ? e.target.value : "Empty search")
        }
      />
      <SearchBtn search={formatSearch} />
    </form>
  );
}

export default Search;
