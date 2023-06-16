import React, {useState} from "react";
import CreateTodolist from "./CreateTodolist";

export default function TodoList(){
    const listTodo = [{id: 1, text: 'Working Out'}];
    const [list , editlist] = useState(listTodo);
    const handleEditlist = (childData) => {
        console.log(childData);
        editlist(childData);
    }
    const handleClick = () => {
        console.log(list);
        list.push({id: 2, text: 'Sleep'});
        console.log(list);
        editlist(list);
    }
    return (
        <>
        <div>
            <button onClick={handleClick}>Click</button>
            <ul>
                {list.map((element) => {
                    return <li key={element.id}>{element.text}</li>
                })}
            </ul>
        </div>
        <CreateTodolist handleEditlist={handleEditlist} listTodo={listTodo}/>
        </>
        
    )
}