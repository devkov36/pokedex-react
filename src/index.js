import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import Title from "./components/pokemon/Title";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Title
      title="Flying Pokémon"
      img="https://cdn2.bulbagarden.net/upload/thumb/b/b5/Flying_icon_SwSh.png/96px-Flying_icon_SwSh.png"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
