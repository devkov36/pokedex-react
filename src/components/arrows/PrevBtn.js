import React from 'react';
import '../../css/arrows/prevBtn.css';

function PrevBtn(props) {
 const { index, disabledNext, disabledPrev } = this.state
 const profile = this.props.profiles ? this.props.profiles[index] : null
  return (
    <div class="arrow">
        <p><i class="arrow left">     
         <PrevBtn toggle={(e) => this.toggleNext(e)} active={disabledNext} />
        </i>
        </p>
  </div>
  )
};


export default PrevBtn