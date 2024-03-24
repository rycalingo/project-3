import React, { Component } from "react";
import Navlist from "../components/Navlist";
import Task from "../components/Task";
import CreateTask from "../components/CreateTask";
import './home.css';

export default class task extends Component {

    render() {
        return (
          <div className="App">
            <div className="pad-wrapper">
            <Navlist />
            <CreateTask />
            <Task />
            
            </div>
          </div>
        );
    }
}