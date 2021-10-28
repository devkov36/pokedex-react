import React from "react";
import PropTypes from "prop-types";
import "../../css/pokemon/title.css";
import { useState, useEffect } from "react";
import { getAllTypes } from "../../services/getPokemonInfo";
import { capitalizeStrings } from "../../utils/capitalizeStrings";

function Title(props) {
  const [type, setType] = useState([]);

  // Capitalize the first letter of the title before fetching the pokemon's types
  const title = capitalizeStrings(props.title);

  const types = [
    "Flying",
    "Steel",
    "Rock",
    "Grass",
    "Dark",
    "Ghost",
    "Water",
    "Fairy",
    "Poison",
    "Normal",
    "Fighting",
    "Ground",
    "Fire",
    "Psychic",
    "Bug",
    "Ice",
    "Electric",
    "Dragon",
  ];
  // Compare the types array with the title to see if the search is a type
  const filterType = types.filter((type) => type === title).toString();

  useEffect(() => {
    // Fetch the pokemon's type on title if props.page is equal to type
    if (props.page === "type") {
      getAllTypes(title).then((dataType) => {
        setType(dataType);
      });
      // Fetch the pokemon's type on filterType if props.page is equal to search
    } else if (props.page === "search") {
      getAllTypes(filterType).then((dataType) => {
        setType(dataType);
      });
    }
  }, [title, props.page, filterType]);

  // If the page is home, the title will be "All Pokemon"
  if (props.page === "home") {
    return <h1 className="title-line">{"All Pokemon"}</h1>;
  }
  // If the page is classification, the title will be classification and the title
  if (props.page === "classification") {
    return <h1 className="title-line">{"Classification: " + title}</h1>;
  }
  //If the page is type, the title will be the pokemon's type in the variable type of the state
  if (props.page === "type") {
    return (
      <h1 className="title-line">
        {`Type: ${type.type}`}
        <img className="title-img" src={type.imageUrl} alt="TypeImage" />
      </h1>
    );
  }
  // If the page is search and the title is not a type, the title will be the search
  if (props.page === "search" && filterType !== title) {
    return <h1 className="title-line">{`Search: ${title}`}</h1>;
  }
  // If the page is search and the title is a type, the title will be the pokemon's type in the variable type of the state
  else if (props.page === "search" && filterType === title) {
    return (
      <h1 className="title-line">
        {`Type: ${type.type}`}
        <img className="title-img" src={type.imageUrl} alt="TypeImage" />
      </h1>
    );
  }
}

Title.prototype = {
  title: PropTypes.string,
  page: PropTypes.string.isRequired,
};

export default Title;
