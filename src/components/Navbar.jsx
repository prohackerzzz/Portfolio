    import React from 'react'
    import './NAvbar.css'
    import {
        Link, animateScroll
      } from "react-scroll";
import Mainc from './Mainc';
      

    function Navbar() {
        const show=()=>{
            document.getElementById('center').className="centers";
            const f=document.getElementById('open').className;
            document.getElementById('open').className="hide-icon1";
            document.getElementById('clo').className=f;
            
            
        }
        const close=()=>{
            document.getElementById('center').className="center";
            const f=document.getElementById('clo').className;
            document.getElementById('clo').className="hide-icon1";
            document.getElementById('open').className=f;
        } 
        return (
        
            <div>
                <nav>
                    <div className="contain">
                    <div className="hide-icon1" id="clo">
                    <i onClick={close} class="fa fa-2x fa-times" aria-hidden="true"></i>

                        </div>
                        <div className="hide-icon" id="open">
                        <i  onClick={show} class="fa fa-2x fa-bars" aria-hidden="true"></i>
                        </div>
                        <div className="left">
                            <h1 onClick={()=>{
                                animateScroll.scrollToBottom();
                            }}>Report</h1>
                            <p>Rehan's Portfolio</p>
                        </div>
                        <div id="center" className="center">
                            <ul>
                                <li><a id="lis">Home</a></li>
                                <li><Link to="proj" smooth={true} duration={1000} id="lis">My Projects</Link></li>
                                <li><Link to="about" smooth={true} duration={1000} id="lis">About Me</Link></li>
                                <li><Link to="foot" smooth={true} duration={1000} id="lis">Contact</Link></li>
                                
                            </ul>
                        </div>
                        <div className="right">
                        <button onClick={()=>{
                            animateScroll.scrollToBottom();
                        }} class="butt">Contact</button>
                        </div>
                        
                    </div>
                </nav>
            
            </div>
            
            
        )
    }

    export default Navbar
