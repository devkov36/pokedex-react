import React from 'react';
import '../../css/arrows/nextBtn.css';

function NextBtn(props) {
 const { index, disabledNext, disabledPrev } = this.state
 const profile = this.props.profiles ? this.props.profiles[index] : null
  return (
    <div className="arrow">
        <p><i className="arrow right">     
         <NextBtn toggle={(e) => this.toggleNext(e)} active={disabledNext} />
        </i>
        </p>
  </div>
  )
};


export default NextBtn