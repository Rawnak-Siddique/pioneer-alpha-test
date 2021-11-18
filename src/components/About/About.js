import React from 'react';
import './About.css';
import offset_comp from '../../image/offset_comp_772626-opt 3.png';

function About() {
  return (
    <div className="about" >
      <div className="about_Left">
        <img src={offset_comp} alt="" className="about_LeftImg1" />
        <img src={offset_comp} alt="" className="about_LeftImg2" />
        <img src={offset_comp} alt="" className="about_LeftImg3" />
      </div>
      <div className="about_Right">
        <h1>About Us</h1>
        <p>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit</p>
      </div>
    </div>
  );
}

export default About;
