import React from 'react'
import '../static/css/index.css'
import {Link ,HashRouter as Router} from 'react-router-dom'
import  git from "../static/icons/github.png"
import f from '../static/icons/4.png'
function FouroFour(){
    return (<>
    <div className="outer">
        <nav>
            <Router>
            <h3><a href="/">Thinn.io</a></h3>
            </Router>
            <a href="https://github.com/amankumarm/URL-Shortner" target="_blank"><img src={git}></img>
            </a>
        </nav>
        <div className="fof"> 
        <img  src={f}></img>
        <p>The page you are looking for could not be found.</p>
        </div>
    </div>
    
    </>)
}

export default FouroFour