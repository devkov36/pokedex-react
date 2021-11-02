import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "../../css/search/searchBtn.css";

function SearchBtn(props) {
  return (
    <Link to={`/search/${props.search}`}>
      <button type="submit" className="button">
        <SearchIcon style={{ fontSize: "150%" }} />
      </button>
    </Link>
  );
}
export default SearchBtn;
