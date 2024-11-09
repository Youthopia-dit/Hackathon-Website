import React from "react";
import "./home.css";
// import navbar from "../../components/Navbar/navbar";
import Navbar from '../../components/Navbar/navbar';
import Landingpage from "../../components/landingpage";
import Visioncard from '../../components/VisionCards/visioncard';
import Timeline from  '../../components/TimelineTable/timeline';


function homepage(){
    return(
        <>
            <Navbar/>  
            <Landingpage/>    
            <Visioncard/>
            <Timeline/>  
        </>
        )
}

export default homepage;