import React from 'react';

import '../css/PrevBtn.css';
import PokemonType from "./PokemonType";
import PokemonAbility from "./PokemonAbility";

function NextBtn(props) {
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