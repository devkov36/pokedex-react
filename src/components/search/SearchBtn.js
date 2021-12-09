import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "../../css/search/searchBtn.css";

function SearchBtn(props) {
  return (
    <Link to={`/search/${props.search}`}>
      <button type="submit" disabled={!props.search} className="button">
        <SearchIcon style={{ fontSize: "4.5vh" }} />
      </button>
    </Link>
  );
}
export default SearchBtn;
