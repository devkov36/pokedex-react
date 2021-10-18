import React, {Component} from "react";

import SearchIcon from '@mui/icons-material/Search';

import "../../css/search/searchBtn.css";

class SearchBtn extends Component {
    render() {
      return (
        <button className="button">
            <SearchIcon style={{fontSize:"150%"}}/>
        </button>
      );
    }
  }
  
  export default SearchBtn;