import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Landing from './components/Landing'
import Main from './components/Main'
class App extends Component {
    render() {
        return (
            <div>
                {/* <Landing /> */}
                <Main />
            </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("root"));
