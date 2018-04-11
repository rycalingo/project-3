import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import Navbar from "./components/Navbar";

import './styles/main.css';

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={home} />
      
      </Switch>
    </div>
  </Router>;

export default App;