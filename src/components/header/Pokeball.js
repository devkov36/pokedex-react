import React  from "react";
import '../../css/header/pokeball.css'
import pokeball from '../../assets//pokeball.png'  //'./pokeball.png'

// TODO: Agregar boton de pokebola
// TODO: Agregar enlace o accion que hara al recibir un click
function PokeBall(){
    return (
        <img src={pokeball} alt="Pokeball" id="pokeButton" />
    );
}

export default PokeBall;