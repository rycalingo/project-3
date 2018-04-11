import React, { Component } from "react";

import Navlist from "../components/Navlist";

import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="App">

                <div className="pad-wrapper">
                <Navlist />

                </div>

            </div>
        )
    }

};
export default Home;