import React from "react";
import "./Navlist.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navlist = props =>
      <ul className="navlist">
        <li className="nav-li arrow-right">
        <a href="/signup"><span>Create Task</span></a>
        </li>
        <li className="nav-li arrow-right">
        <a href="/signup"><span>Group Members</span></a>
        </li>
        <li className="nav-li arrow-right">
        <a href="/overview"><span>Overview</span></a>
        </li>
        <li className="nav-li arrow-right">
        <a href="/"><span>Search</span></a>
        </li>
      </ul>
      ;

export default Navlist;
