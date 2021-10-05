import axios from 'axios'
import React,{useState} from 'react'
import '../static/css/index.css'
import  git from "../static/icons/github.png"
import illus2 from "../static/icons/illus2.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Main(){
    // const 
    const [link,setlink]=useState("")
    const [shortname,setshortname]=useState("")
    const [shortend,setshortend]=useState("")
    const clickHandler=async e =>{
        e.preventDefault()
        console.log(link,shortname)
        const body={link,shortname}
        setshortend(" Hold on we are preparing your link.")
        const resp= await axios.post(`https://thinn.herokuapp.com/`,body)
        console.log(resp)
        switch (resp.status) {
            case 200:
                toast.warn(`🦄 ${resp.data}`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    setshortend(resp.data)
                break;
            case 201:
                toast.info(`🦄 Short Url Ready`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    var a=resp.data
                    setshortend(a)
                break;
            default:
                break;
        }
        var all_ip=document.getElementsByTagName("input")
        for (let i = 0; i < all_ip.length; i++) {
             all_ip[i].value=""
        }
    }
    
    return (<>
        <ToastContainer />
        <nav className="nav2">
            <h3><a href="/">Thinn.io</a></h3>
            <a href="https://github.com/amankumarm/URL-Shortner" target="_blank"><img src={git}></img>
            </a>
        </nav>
        <div className="mbody test">
            <img src={illus2}  className="illus2 "/>
            <p className="s_a_l">Shorten Any Links</p>
            <p className="desc2"> Build and Protect your Brand using powerful and recognizable short Links. <span className="its_free">its free forever</span></p>
                <p>{shortend}</p>
                <div  className="input-fields">
                            <input type="text" className="form-control" name='link' onChange={e => setlink(e.target.value)} placeholder="Link" />
                            <input type="text" className="form-control" name='shortname' onChange={e=>setshortname(e.target.value)}placeholder="Thinn.herokuapp.com/< Your Reference Here > " aria-describedby="emailHelp" />
                </div>
                            <button type="submit"  onClick={clickHandler} className="form-control" id="submitbtn" >Submit</button>
        </div>          
    </>)
}
export default Main