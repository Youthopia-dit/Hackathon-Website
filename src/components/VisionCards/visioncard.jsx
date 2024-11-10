import './visioncard.css';

import React from 'react'

export default function visioncard() {
  return (
    <>

<div className="vision-container">
      <div className="vision-title">VISION</div>
      <p className="vision-description">
        <strong>“Hack the Hills”</strong> – Innovate from Height, a <span>24-hour hackathon,</span> with the theme <br></br>
        <strong><span>“SUSTAINABLE TECH FOR THE FUTURE IMPACT”</span></strong> focused on empowering a community of developers and innovators.
        Through this Hackathon, we aim to spotlight and support creative ideas for real-life problems.
      </p>
      <div className="cards-container">
        <div className="card">
          <div className="icon">
            {/* Place your icon here */}
            🌍
          </div>
          <h3>Sustainable Social Solutions</h3>
        </div>
        <div className="card">
          <div className="icon">
            {/* Place your icon here */}
            🌱
          </div>
          <h3>Green Computing</h3>
        </div>
        <div className="card">
          <div className="icon">
            {/* Place your icon here */}
            💡
          </div>
          <h3>Eco Inclusive Design</h3>
        </div>
        <div className="card">
          <div className="icon">
            {/* Place your icon here */}
            🔄
          </div>
          <h3>Streamline Integration</h3>
        </div>
      </div>
    </div>
    
    
    </>
    
  )
}
