import React from "react";
// import logo from './logo.svg';
import Header from "./header/Header";
import Home from "./Home";
import "./App.scss";
{
    /* <img src={logo} className="App-logo" alt="logo" /> */
}

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
        </div>
    );
}

export default App;
