import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Landing from './components/Landing'
import Main from './components/Main'
import "regenerator-runtime/runtime.js";
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";  
// import FouroFour from './components/Fourofour';
function App() {
        return (
            // <FouroFour/>
            <Router>
                <Switch>
                    <Route path="/thinn">
                        <Main />
                    </Route>
                    <Route path="/">
                        <Landing />
                    </Route>
            </Switch>
        </Router>
        )
}
ReactDom.render(<App/>,document.getElementById("root"));
