import React, {useState} from "react";
import CreateTodolist from "./CreateTodolist";

export default function TodoList(){
    const listTodo = [];
    const [list , setList] = useState(listTodo);
    const lastIndex = list.length !=0 ?list[list.length -1].id : 0;
    const handleStatusChange = (event) => {
        let changeId = event.currentTarget.parentNode.getAttribute("data-key");  
        let newArray = [];
        for (let i = 0; i < list.length; i++) {
            if(list[i]){
                let contents = {id: list[i].id, text: list[i].text, done: (list[i].id == changeId) ? true : list[i].done}
                newArray.push(contents);
            }
          }
          if(newArray.length !== 0){
            setList(newArray);
          }
    }
    return (
        <div>
            <ul>
                {list.length !=0 && list.map((element) => {
                    return <li 
                    style={{
                        textDecoration: element.done ? 'line-through' : " "
                    }} 
                    key={element.id} data-key={element.id}>{element.text}<button style={{ marginLeft: '1rem', display: element.done ? 'none' : ''}} onClick={handleStatusChange}>Done</button></li>
                })}
            </ul>
            <CreateTodolist setList={setList} lastIndex={lastIndex}/>
        </div>
    )
}