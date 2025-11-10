import { useState,useEffect } from "react";
import './Todolist.css'

const Todolist = () => {
    const [task,setTask] = useState("");
    const [list,setList] = useState([]);

    const addTask = () => {
        if(task.trim() === "") return;
        setList([...list,task]);
        setTask("");
    };
    const deleteTask = (index) => {
        const newList = list.filter((_,i) =>
            i !== index);
        setList(newList)
    };
    useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setList(savedTasks);
    },[]);
    useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
    },[list]);
    

    return(
        <div className="container">
            <h1>TO DO LIST</h1>
            <div className="input_area">  
            <input
                type="text"
                value={task}
                placeholder="Add a task..."
                autoComplete="on"
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn1" onClick={addTask}>Add</button>

            </div>
            <ul>
                {list.map((task,index) =>
                (<li key={index}>{task}
                <button className="btn2" onClick={() => deleteTask(index)}>❌</button></li>)
                )}
            </ul>

        </div>
    );

}
export default Todolist;