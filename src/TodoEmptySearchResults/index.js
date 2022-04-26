import React from "react";
import './EmptySearchResults.css';

function TodoEmptySearchResults({searchText}) {
    return (
        <div className="container-empty">
            <h3 className="Parrafo-Todo">¡Lo sentimos, no se han encontrado resultados para {searchText}!</h3>
            <img 
            className="Todo-img-empty" 
            src="https://images.vexels.com/media/users/3/235270/isolated/preview/278350f8d3b8324ac656fab3d16db248-caracter-relajante-astronauta.png"
            alt=""
            />
            <p className="Parrafo-Todo">Has click en el boton <p className="botton-empty">+</p> para agregar esa tarea!</p>
        </div>
    )
}

export { TodoEmptySearchResults };