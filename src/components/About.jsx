import React from 'react';
import aboutImg from '../assets/hospital-building.jpg'; // Path check pannunga

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-text">
        <h2 style={{color: '#1a2b56', fontSize: '32px'}}>About SMF</h2>
        <p style={{color: '#666', margin: '20px 0', lineHeight: '1.6'}}>
          Sundaram Medical Foundation (SMF) was established in 1994 as a community-centered 
          hospital. We provide high-quality medical care with a focus on ethical practices 
          and patient-centric services.
        </p>
        <button style={{padding: '10px 20px', background: '#008148', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
          LEARN MORE
        </button>
      </div>
      <div className="about-image">
        <img src={aboutImg} alt="About SMF" style={{width: '100%', borderRadius: '15px'}} />
      </div>
    </div>
  );
};
export default About;