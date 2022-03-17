import React, {useState} from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import "./index.css";

function ToDoList(){
    const [toDoList, setToDoList] = useState([]);
    console.log(toDoList);

    function handleDelete(id){
        setToDoList(toDoList.filter(todo=> todo.id !== id));
    }

    function handleSuccess(id){
        const card = document.getElementById(id);
        if (card.classList.contains('isFinish')){
            card.classList.remove('isFinish');
        }else{
           card.classList.add('isFinish');

        }
    }

    return(
        <div>
            <ToDoForm setToDoList ={setToDoList} />
            {toDoList.map(
                todo=>(
                    <ToDo titre ={todo.titre} message={todo.message} handleSuccess={handleSuccess} handleDelete={handleDelete} id={todo.id} key={todo.id}/>
                )
            )}
        </div>
    )
}
 export default ToDoList;