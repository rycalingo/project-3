import React, { Component } from "react";
import Navlist from "../components/Navlist";
import Tasks from "../components/Tasks";
import './home.css';
import Taskslist from "../components/Tasks";

export default class Overview extends Component {

  
    render() {
        return (
          <div className="App">
            <div className="pad-wrapper">
            <Navlist />
            <Tasks />
            <Taskslist />
             
            
            </div>
          </div>
        );
      }
}