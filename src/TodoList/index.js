import React from "react";
import "./TodoList.css";

function TodoList(props) {
    return (
        <section>
            <ul>
                {props.error && props.onError()}
                {props.loading && props.onLoading()}
                {!props.loading && !props.totalTodos && props.onEmpty()}
                {!props.loading &&
                    !!props.totalTodos &&
                    !props.searchedTodos.length &&
                    props.onEmptySearchResults(props.searchValue)}
                {!props.loading && props.render()}
            </ul>
        </section>
    );
}

export { TodoList };