import React, {Component} from "react";
import searchIcon from "./searchIcon.png"

import "../../css/search/searchBtn.css";

class SearchBtn extends Component {
    render() {
      return (
        <button className="button">
            <img src={searchIcon} alt="hola"></img>
        </button>
      );
    }
  }
  
  export default SearchBtn;