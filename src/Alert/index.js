import React from "react";
import "./Alert.css";
import { withStorageListener } from "./withStorageListener";

function Alert({ show, toggle }) {
    if(show){
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
                <p>¿Quieres sincronizar tus TODOs?</p>
                <button
                    className="ChangeAlert-button"
                    onClick={toggle}
                >
                    Yes!
                </button>
                </div>
            </div>
        );
    } else{
        return null;
    }
}

const AlertWithStorageListener = withStorageListener(Alert);

export { AlertWithStorageListener };