import {useState} from "react";
import {v4 as uuidv4} from "uuid";


export default function  TodoList ()
{
    let [todos, setTodos] = useState([{task:"Sample Task",id:uuidv4()}]);
    let [newTodo,setNewTodos] = useState("");

let addNewTodo = ()=>{
    setTodos([...todos,{task:newTodo,id:uuidv4()}]);
    setNewTodos("");

};
let updateTodoValue = (event)=>{
    setNewTodos(event.target.value);

}
    return<div>
        
        <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
        <br></br><br></br>
        <button onClick={addNewTodo}>Add Task</button>
        <br></br><br></br><br></br>
        <hr></hr>
        <h4>Todo List</h4>
        <ul>
            {todos.map((todo) => 
                <li key= {todo.id}>
                    <span>{todo.task}</span>
                <span>{todo.task}</span>
                &nbsp;&nbsp;&nbsp;
                <button>delete</button>
                </li>
            )}
            
        </ul>
    </div>
}