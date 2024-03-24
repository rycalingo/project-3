import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Overview from "./pages/Overview"
import TaskDisplay from "./pages/TaskDisplay";


// import Navbar from "./components/Navbar";

import './styles/css/main.css';

const App = () =>
  <Router>
    <div className="main-content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/overview" component={Overview}/>
        <Route exact path="/task" component={TaskDisplay}/> 

      </Switch>
    </div>
  </Router>;

export default App;