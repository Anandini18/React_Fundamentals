/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {
  return (
    <div>
        <Navbar />
        <Main />

    </div>
  );
}

export default App;
