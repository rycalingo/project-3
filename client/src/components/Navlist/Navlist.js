import React from "react";
import { Link } from "react-router-dom";
import "./Navlist.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navlist = props =>
      <ul className="navlist">
        <li className="nav-li arrow-right">
          <span>Create Task</span>
        </li>
        <li className="nav-li arrow-right">
          <span>Group Members</span>
        </li>
        <li className="nav-li arrow-right">
          <span>Overview</span>
        </li>
        <li className="nav-li arrow-right">
          <span>Search</span>
        </li>
      </ul>
      ;

export default Navlist;
