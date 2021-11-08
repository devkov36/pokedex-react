import React from 'react';
import '../../css/arrows/arrowBtn.css';
import { Link } from "react-router-dom";
class NextBtn extends React.Component {
  render() {
    //const { index, disabledNext, disabledPrev } = this.state
    //const profile = this.props.profiles ? this.props.profiles[index] : null
    return (
      <div className="btn-container">
        <Link to={`/pokemon/${this.props.id}`} activeclassname="active">
        <p><i className="arrow right">          
        </i>
        </p>
        </Link>
      </div>
    )
  };

}
export default NextBtn