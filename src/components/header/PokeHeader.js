import React from 'react';
import headerStyle from '../../css/header/pokeHeader.css'
import PokeBall from './Pokeball.js';
// TODO: Crear la forma inferior del header

function PokeHeader(){
    return(
        <header  id="leds" class="pokeHeader">
            <PokeBall />
        </header>
    )
}

export default PokeHeader;