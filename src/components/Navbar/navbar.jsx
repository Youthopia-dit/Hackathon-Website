import './navbar.css';
import logoImg from '../../assets/images/logo-img.png';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">

        <div className="nav-left">
          <img className="logo-img" src={logoImg} onClick={()=>navigate("/")}></img>
        </div>
        <div className="nav-right">
          <button className="btn-outline" onClick={() => navigate("/PrblmState")}>Problem Statements</button>
          <button className="btn-filled" onClick={() => navigate("/OurTeam")}>Our Team</button>
        </div>
      </div>
    </>

  )
}
