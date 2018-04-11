import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import Navbar from "./components/Navbar";

import './styles/css/main.css';

const App = () =>
  <Router>
    <div className="main-content">
      <Navbar />
      <Switch>
        <Route exact path="/" component={home} />
      
      </Switch>
    </div>
  </Router>;

export default App;