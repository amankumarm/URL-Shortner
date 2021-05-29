import React from 'react'
import '../static/css/index.css'
import image from "../static/icons/link.png" 
import  git from "../static/icons/github.png"
import illus from "../static/icons/illus.png"
import { Link } from 'react-router-dom'
function LandingPage(){
    return(<>
    <div className="outer">
        <nav>
            <h3><Link to="/">Thinn.io</Link></h3>
            <a href="https://github.com/amankumarm/URL-Shortner" target="_blank"><img src={git}></img>
            </a>
        </nav>
        <div className="body">
                <img src={image} className="linkbutton mg-b-2" height='25px' width="25px"/>
            <div className="Head mg-b-2">
                <p>A simple link<br/> 
                but a powerful <br/>
                tool for  &nbsp;
                <span>All.</span>
                </p>
            </div>
            <div className="desc mg-b-2"> 
                <p>Our tool allows you to seamlessly track your audience with simple and easy to remember yet powerful links and provide your customers a unique tailored expeience.
                </p>
                </div>
            <button className="btn"><Link to="/thinn" >Get Started</Link></button>
        </div>
        <img className="illus" src={illus} />
    </div>
    </>)
}
export default LandingPage