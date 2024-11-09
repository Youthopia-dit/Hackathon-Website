import './navbar.css';
import logoImg from '../../assets/images/logo-img.png'; 

import React from 'react'

export default function navbar() {
  return (
    <>
    <div className="navbar">
       
       <div className="nav-left">
        <img  className="logo-img" src={logoImg}></img>
        </div>
        <div className="nav-right">
        <button className="btn-outline">Problem Statement</button>
        <button className="btn-filled">Our Team</button>
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
