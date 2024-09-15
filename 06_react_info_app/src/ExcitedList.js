import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg"

function ExcitedList(){
    return(
        <div>
        <header>
            <nav>
                <img src={logo}  width="100px"/>
                <h1>Reasons I'm excited to learn React</h1>
            </nav>
        </header>
        
        <ul>
            <li>JSX fun 🎨 – Code like art!</li>
            <li>Reusable bits 🔄 – Less work, more magic!</li>
            <li>Speed boost ⚡ – Fast, like a ninja!</li>
        </ul>

        <footer><p>© 20xx Ag. development. All rights reserved.</p></footer>
        </div>
    );
}

export default ExcitedList;