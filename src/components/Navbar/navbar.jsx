import './navbar.css';
import logoImg from '../../assets/images/logo-img.png'; 
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function navbar() {
  const navigate= useNavigate();
  return (
    
    <>
    <div className="navbar">
       
       <div className="nav-left">
        <img  className="logo-img" src={logoImg}></img>
        </div>
        <div className="nav-right">
        <button className="btn-outline" onClick={()=> navigate("/PrblmState")}>Problem Statement</button>
        <button className="btn-filled" onClick={()=>navigate("/OurTeam")}>Our Team</button>
        </div>

    </div>
    


    {/* <div className="content">
        <section id="home">
          <h1>Home Section</h1>
          <p>This is the home section content.</p>
        </section>
        <section id="about">
          <h1>About Section</h1>
          <p>This is the about section content.</p>
        </section>
        <section id="services">
          <h1>Services Section</h1>
          <p>This is the services section content.</p>
        </section>
        <section id="contact">
          <h1>Contact Section</h1>
          <p>This is the contact section content.</p>
        </section>
      </div> */}
    
    
    
    
    
    </>
   
  )
}
