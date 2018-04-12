import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import SignUp from "./pages/SignUp";
import overview from "./pages/overview"


// import Navbar from "./components/Navbar";

import './styles/css/main.css';

const App = () =>
  <Router>
    <div className="main-content">
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/overview" component={overview}/>

      </Switch>
    </div>
  </Router>;

export default App;