import React from "react";
import "./tasks.css";

function Tasks(props) {
const Taskslist = ["Array", "Will go here"];


const Tasks = Taskslist.map((GetTask) => 
    <div className="tasks-wrapper">;
        <li>{GetTask}</li>
    </div>);
    return (
        <ul>{Tasks}</ul>
    )
}



export default Tasks;

