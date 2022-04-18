import React from "react";
import { BsTrash } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <IoMdCheckmarkCircleOutline 
                className={`icon icon-check ${props.completed && 'icon-check--active'}`}
                onClick={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <BsTrash 
                className="icon icon-delete"
                onClick={props.onDelete}
            />
        </li>
    );
}

export { TodoItem };