import React from 'react';
import '../../css/arrows/prevBtn.css';
import { Link } from "react-router-dom";
class PrevBtn extends React.Component {
//  state = { disabledPrev: false };

  render() {
    
    return (
      
      <div>
        
        <Link to={`/pokemon/${this.props.id}`} activeClassName="active">
        <p><i className="arrow left">          
        </i>
        </p>
        </Link>
        
      </div>
    )
  };

}
export default PrevBtn