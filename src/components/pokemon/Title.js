import React from "react";
import PropTypes from "prop-types";
import "../../css/pokemon/title.css";
import { useState, useEffect } from "react";

const URLtype = "https://bedu-pokapi.herokuapp.com/v1/types/";
function Title(props) {
  const capitalizeTitle = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1);
  };
  const title = capitalizeTitle(props.title);

  const [type, setType] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(URLtype + title);
      const dataType = await response.json();
      setType(dataType);
    };
    getData();
  }, [title]);

  if (props.title === "home") {
    return <h1 className="title-line">{"All Pokemon"}</h1>;
  } else {
    return (
      <h1 className="title-line">
        {`Type: ${type.type}`}
        <img className="title-img" src={type.imageUrl} alt="TypeImage" />
      </h1>
    );
  }
}

Title.prototype = {
  title: PropTypes.string.isRequired,
};

export default Title;
