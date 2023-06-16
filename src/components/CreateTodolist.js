import React from "react";

export default function CreateTodolist(props){
    const handleSubmit = (event) => {
        let todo = {
            id : props.lastIndex+1,
            text: event.target.elements.addTodo.value,
            done: false
        };
        props.setList(previousTodo => {
            return previousTodo.concat(todo);
        });
        event.target.elements.addTodo.value = '';
        event.preventDefault();
    }
    return (
        <form style={{ marginLeft: '1rem'}} onSubmit={handleSubmit}>
            <input name="addTodo" placeholder="Add Todo" />
            <button type="submit">Submit</button>
        </form>
    );
}