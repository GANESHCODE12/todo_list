import React from "react";
import './EmptyTodos.css';

function EmptyTodos() {
    return (
        <div className="container-empty">
            <h3 className="Parrafo-Todo">Aun no has creado ninguna tarea para hacer seguimiento</h3>
            <img 
            className="Todo-img-empty" 
            src="https://ciberprotector.com/wp-content/uploads/2019/05/informacion-ciberprotector.png"
            alt=""
            />
            <p className="Parrafo-Todo">Has click en el boton <p className="botton-empty">+</p> para agregar una tarea!</p>
        </div>
    )
}

export { EmptyTodos };