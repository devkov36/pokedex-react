import React from "react";
import "../../css/pokemon/title.css";

function Title(props) {
  const isImg = props.img;
  if (isImg) {
    return (
      <h1 className="title-line">
        {props.title}
        <img className="title-img" src={isImg} alt="TypeImage" />
      </h1>
    );
  }
  return <h1 className="title-line">{props.title}</h1>;
}
/* class Title extends React.Component {
  render() {
    const isImg = this.props.img;
    if (isImg) {
      return (
        <h1 className="title-line">
          {this.props.title}
          <img className="title-img" src={isImg} alt="TypeImage" />
        </h1>
      );
    }
    return <h1 className="title-line">{this.props.title}</h1>;
  }
} */

export default Title;
