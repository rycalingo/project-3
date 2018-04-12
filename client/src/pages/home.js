import React, { Component } from "react";

import Navlist from "../components/Navlist";
import Login from "../components/Login";


// import Signup from "../components/Signup";

import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="App">

                <div className="pad-wrapper">
                    <Navlist />

                    <Login />
                </div>

            </div>
        )
    }

};
export default Home;