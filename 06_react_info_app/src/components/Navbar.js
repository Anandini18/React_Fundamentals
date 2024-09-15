import React from "react";
import ReactDOM from "react";
import logo from '../logo.svg';

function Navbar(){
    return(
        <header>
        <nav className="nav">
            <img src={logo} className="nav-logo"/>
            <h1>ReactFacts</h1>
        </nav>
    </header>
    )
}

export default Navbar;