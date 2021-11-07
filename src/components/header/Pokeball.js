import React  from "react";
import '../../css/header/pokeball.css'
import pokeball from '../../assets//pokeball.png'  //'./pokeball.png'
import Search from "../search/Search";

// TODO: Agregar boton de pokebola
// TODO: Agregar enlace o accion que hara al recibir un click
function PokeBall(){
    return (
        <section id="ext-container">
            <section id="in-container">
                <img src={pokeball} alt="Pokeball" id="pokeButton" />
                <p id="pageTitle">Pokedex</p>
            </section>
            <Search className="search"/>   
        </section>
    );
}

export default PokeBall;