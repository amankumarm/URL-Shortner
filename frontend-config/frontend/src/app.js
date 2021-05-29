import React, { Component } from 'react'
import ReactDom from 'react-dom'
// import Landing from './components/Landing'
// import Main from './components/Main'
import "regenerator-runtime/runtime.js";
import FouroFour from './components/Fourofour'
// import {
//     HashRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
  
class App extends Component {
    render() {
        return (
        //     <Router>
        //         <Switch>
        //             <Route path="/thinn">
        //                 <Main />
        //             </Route>
        //             <Route path="/">
        //                 <Landing />
        //             </Route>
        //     </Switch>
        // </Router>
        <FouroFour/>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("root"));
