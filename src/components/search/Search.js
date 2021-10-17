import React, {Component} from "react";
import SearchBtn from './SearchBtn';

import "../../css/search/search.css";

class Search extends Component {
    render() {
      return (
        <form className="search">
          <input
            type="text"
            className="input"
            placeholder="Búsqueda"
          />
          <SearchBtn/>
        </form>
      );
    }
  }
  
  export default Search;