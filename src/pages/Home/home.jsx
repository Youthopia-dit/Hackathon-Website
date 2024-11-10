import React from "react";
import "./home.css";
import Navbar from '../../components/Navbar/navbar';
import Landingpage from "../../components/landingpage";
import Visioncard from '../../components/VisionCards/visioncard';
import Timeline from  '../../components/TimelineTable/timeline';


function homepage(){
    return(
        <div className="homepage">
            <Navbar/>  
            <Landingpage/>    
            <Visioncard/>
            <Timeline/>  
        </div>
        )
}

export default homepage;