import React from "react";
import PropTypes from "prop-types";
import "../../css/pokemon/title.css";
import { useState, useEffect } from "react";

const URLtype = "https://bedu-pokapi.herokuapp.com/v1/types/";
function Title(props) {
  const [type, setType] = useState([]);

  const capitalizeStrings = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
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
  const filterTypes = types.filter((type) => type === props.title).toString();

  useEffect(() => {
    if (props.page === "type") {
      const getData = async () => {
        const response = await fetch(URLtype + title);
        const dataType = await response.json();
        setType(dataType);
      };
      getData();
    } else if (props.page === "search") {
      const getData = async () => {
        const response = await fetch(URLtype + filterTypes);
        const dataType = await response.json();
        setType(dataType);
      };
      getData();
    }
  }, [title, props.page, filterTypes]);

  if (props.page === "home") {
    return <h1 className="title-line">{"All Pokemon"}</h1>;
  }
  if (props.page === "type") {
    return (
      <h1 className="title-line">
        {`Type: ${type.type}`}
        <img className="title-img" src={type.imageUrl} alt="TypeImage" />
      </h1>
    );
  }
  if (props.page === "search" && filterTypes !== props.title) {
    return <h1 className="title-line">{`Search: ${props.title}`}</h1>;
  } else if (props.page === "search" && filterTypes === props.title) {
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
