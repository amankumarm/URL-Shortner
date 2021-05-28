import React,{useState} from 'react'
import '../static/css/index.css'
import  git from "../static/icons/github.png"
import illus2 from "../static/icons/illus2.png"
function Main(){
    // const 
    return (<>
        <nav className="nav2">
            <h3>Thinn.io</h3>
            <a href="https://github.com/amankumarm/URL-Shortner" target="_blank"><img src={git}></img>
            </a>
        </nav>
        <div className="mbody test">
            <img src={illus2}  className="illus2 "/>
            <p className="s_a_l">Shorten Any Links</p>
            <p className="desc2"> Build and Protect your Brand using powerful and recognizable short Links. <span className="its_free">its free forever</span></p>
                <form  className="input-fields " action="/" method="POST">
                {/* <form >  */}
                            <input type="text" className="form-control" name='link' placeholder="Link" />
                            <input type="text" className="form-control" name='shortname' placeholder="Thinn.herokuapp.com/< Your Reference Here > " aria-describedby="emailHelp" />
                </form>
                            <button type="submit" className="form-control" id="submitbtn" >Submit</button>
        </div>          
    </>)
}
export default Main