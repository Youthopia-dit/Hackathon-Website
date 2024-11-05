import './visioncard.css';
import React from 'react'
import Vision1 from '../../assets/images/Vision_1.png';
import Vision2 from '../../assets/images/Vision_2.png';
import Vision3 from '../../assets/images/Vision_3.png';
import Vision4 from '../../assets/images/Vision_4.png';

export default function visioncard() {
  return (
    <>

      <div className="vision-container">
        <h2 className="vision-title">VISION</h2>
        <p className="vision-description">
          <strong>“Hack the Hills”</strong> – Innovate from Height, a <span>24-hour hackathon,</span> with the theme
          <strong><span>“SUSTAINABLE TECH FOR THE FUTURE IMPACT”</span></strong> focused on empowering a community of developers and innovators.
          Through this Hackathon, we aim to spotlight and support creative ideas for real-life problems.
        </p>
        <div className="cards-container">
          <div className="card">
            <div className="icon">
              <img src={Vision4} alt='vision' className='vsn_img' />
            </div>
            <h3>Sustainable Social Solutions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque expedita, voluptas porro nemo dolor earum facilis totam in necessitatibus? Dolores nisi architecto corrupti sed, illo officiis sunt laborum quas libero.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={Vision1} alt='vision' className='vsn_img' />
            </div>
            <h3>Green Computing</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam laborum dolore in necessitatibus tempora ratione, nihil eius veniam ipsa, laboriosam, vero autem commodi est. Nemo maxime veritatis iusto rem provident!</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={Vision2} alt='vision' className='vsn_img' />
            </div>
            <h3>Eco Inclusive Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim praesentium veniam modi voluptatibus repellat, neque necessitatibus obcaecati repellendus labore magnam eaque, mollitia culpa perferendis maxime. Vitae ratione dolorem perferendis.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={Vision3} alt='vision' className='vsn_img' />
            </div>
            <h3>Streamline Integration</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit vero, ut a neque nemo nesciunt provident recusandae et eius qui inventore quaerat nobis cum debitis blanditiis earum excepturi ipsum.</p>
          </div>
        </div>
      </div>


    </>

  )
}
