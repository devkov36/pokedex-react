import React  from "react";
import '../../css/header/pokeball.css'
import pokeball from '../../assets//pokeball.png'
import Search from "../search/Search";
import {Link} from 'react-router-dom';


function PokeBall(){
    return (        
        <section id="ext-container">
            <section >
                <Link to='/' id="in-container">
                <img src={pokeball} alt="Pokeball" id="pokeButton" />
                <p id="pageTitle">Pokedex</p>
                </Link>
            </section>
            <Search className="search"/>   
        </section>
    );
}


export default PokeBall;