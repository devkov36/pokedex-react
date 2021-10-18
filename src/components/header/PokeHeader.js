import React from 'react';
import headerStyle from '../../css/header/pokeHeader.css'
import PokeBall from './Pokeball.js';
import Search from "../search/Search";

// TODO: Crear la forma inferior del header

function PokeHeader(){
    return(
        <section>
        <header  id="leds" class="pokeHeader">
            <PokeBall /> 
            <Search class="search"/>          
        </header>  
        <section id="container">
            <section id="bar" ></section>  
            <section id="shadow" ></section> 
        </section>  
        </section>
    )
}

export default PokeHeader;