import React from "react";
import './TodosError.css';

function TodosError({ error }) {
    return (
        <div className="container-error">
            <h3 className="Parrafo-Todo">Ups, algo salió mal, por favor intenta recargando tu página!</h3>
            <img 
            className="Todo-img-error" 
            src="https://www.pngkey.com/png/full/355-3552351_astronauta-universo-tumblr-blancoynegro-imagenes-tumblr-de-astronautas.png"
            alt=""
            />
        </div>
    )
}

export { TodosError };