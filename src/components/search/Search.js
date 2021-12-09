import { useState } from "react";
import SearchBtn from "./SearchBtn";
import { capitalizeStrings } from "../../utils/capitalizeStrings";
import "../../css/search/search.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";

function Search(props) {
  const [search, setSearch] = useState("");
  const pokemons = props.pokemons;
  const formatSearch = capitalizeStrings(search.toLowerCase().trim());

  return (
    <form className="search">
      <Autocomplete
        id="free-solo"
        freeSolo
        disableClearable
        clearOnBlur
        selectOnFocus
        size="medium"
        value={formatSearch}
        inputValue={formatSearch}
        options={pokemons
          .map((option) => option.name)
          .filter((option) => option.includes(formatSearch))}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search by pokemon name or number"
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <InputAdornment position="end">
                  <SearchBtn search={formatSearch} />
                </InputAdornment>
              ),
            }}
          />
        )}
        onInputChange={(event, newValue) => {
          setSearch(newValue);
        }}
        onChange={(event, newValue) => {
          setSearch(newValue);
        }}
      />
    </form>
  );
}

export default Search;
