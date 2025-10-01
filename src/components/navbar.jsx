import React,{useState} from 'react';
const Navbar=({onAddTask})=>{
    const [taskText,setTaskText]=useState("");
    const handleAddTask =()=>{
        if(taskText.trim()!==""){
            onAddTask(taskText);
            setTaskText("");
        }
    };
    return (
        <nav className="navbar">
            <div className="navtitle">Progress tracker</div>
             <input type="text" className="search" placeholder="enter new tasks..."value={taskText}  onChange={(e)=>setTaskText(e.target.value)}/>
            <button className="navbutton" onClick={handleAddTask}>+add task</button>
        </nav>
    );
};
export default Navbar;