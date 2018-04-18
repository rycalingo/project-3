import React, { Component } from "react";
import "./tasks.css";
import API from "../../utils/API";

const task = [{
    title: "test",
    description: "test",
    assignee: "test",
    duedate: "test"
},{
    title: "test1",
    description: "test1",
    assignee: "test1",
    duedate: "test1"
},{
    title: "test3",
    description: "test3",
    assignee: "test3",
    duedate: "test3"
}

]



class Tasks extends Component {
    
    state = {
            task
        };
    
    componentDidMount() {
        this.getTasks()
;
      };
    
      getTasks = () => {
        API.getTasks( )
        .then(res =>
        this.setState({
            task: res.data
        }))
      }

render () {
    return (
    <div className= "task-wrapper">
        <ul className="list-group">
        {this.state.task.map((task, index) =>
        <li className="list-group-item" key={index}>
            <h4 className="list-group-item-title">{task.title}</h4>
            <h4 className="list-group-item-title">{task.description}</h4>
            <h4 className="list-group-item-title">{task.assignee}</h4>
            <h4 className="list-group-item-title">{task.duedate}</h4>
        </li>
        )}
        </ul>
        </div>)
}

}

export default Tasks;

