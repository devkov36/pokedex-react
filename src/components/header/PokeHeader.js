import React from 'react';
import '../../css/header/pokeHeader.css'
import PokeBall from './Pokeball.js';
import Search from "../search/Search";

// TODO: Crear la forma inferior del header

function PokeHeader(){
    return(
        <section>
        <header  id="leds" className="pokeHeader">
            <PokeBall /> 
            <Search className="search"/>          
        </header>  
        <section id="container">
            <section id="bar" ></section>  
            <section id="shadow" ></section> 
        </section>  
        </section>
    )
}

export default PokeHeader;