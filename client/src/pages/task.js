import React, { Component } from "react";
import Navlist from "../components/Navlist";
import Task from "../components/Task";
import './home.css';

export default class task extends Component {

  
    render() {
        return (
          <div className="App">
            <div className="pad-wrapper">
            <Navlist />
            <Task />
           
      
            
            </div>
          </div>
        );
      }
}