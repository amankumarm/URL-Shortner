import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Landing from './components/Landing'

class App extends Component {
    render() {
        return (
            <div>
                <Landing />
            </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("root"));
