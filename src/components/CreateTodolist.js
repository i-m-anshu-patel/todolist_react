import React from "react";

export default function CreateTodolist(props){
    
    const handleSubmit = (event) => {
        let lastIndex = props.listTodo[props.listTodo.length -1].id;
        let newTask = {id: lastIndex+1, text: event.target.elements.addTodo.value};
        props.listTodo.push(newTask);
        props.handleEditlist(props.listTodo);
        
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="addTodo" placeholder="Add Todo" />
            <button type="submit">Submit</button>
        </form>
    );
}