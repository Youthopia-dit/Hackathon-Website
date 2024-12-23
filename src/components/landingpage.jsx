import React from "react";
import "./landingpage.css";
import Hack from '../assets/hack.png';
import A1 from '../assets/A1.png';
import A2 from '../assets/A2.png';
import A3 from '../assets/A3.png';
import A4 from '../assets/A4.png';
import { useNavigate } from "react-router-dom";

 
function landingpage() {
    const navigate= useNavigate();
    
    return (
        <div className="main">
            <div className="text">2024</div>
            <div className="main-text"><img className="img" src={Hack} /></div>
            <div className="text2">Hack the Change, Sustain the World</div>
            <div className="venue">
                <div className="bulign">
                <div className="button">WHEN?</div>
                <div className="info">12-13 November</div>
                </div>
                <div className="bulign2">
                <div className="button">WHERE?</div>
                <div className="info">DIT University</div>
                </div>
            </div>
            <div className="bulign">
                <button className="button2" onClick ={()=> navigate("/PrblmState")}>Problem Statements</button>
            </div>
            {/* <div className="wavy">
                <img src={A1} alt="wave" id="wave" />
                <img src={A2} alt="wave2" id="wave1" />
                <img src={A3} alt="wave2" id="wave2" />
                <img src={A4} alt="wave2" id="wave3" />
            </div> */}
        </div>
    )
}

export default landingpage;