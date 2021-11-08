import React from 'react';
import '../../css/arrows/arrowBtn.css';
import { Link } from "react-router-dom";
class PrevBtn extends React.Component {
//  state = { disabledPrev: false };

  render() {
    
    return (
      
      <div className="btn-container">
        <Link to={`/pokemon/${this.props.id}`} activeclassname="active">
        <p><i className="arrow left">          
        </i>
        </p>
        </Link>
        
      </div>
    )
  };

}
export default PrevBtn