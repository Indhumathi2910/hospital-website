import React from 'react';
import heroImg from '../assets/hero-img.jpg'; // Path check pannunga

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-text">
        <p style={{background: '#008148', width: 'fit-content', padding: '5px 10px', borderRadius: '4px'}}>Sundaram Medical Foundation</p>
        <h1 style={{fontSize: '42px', margin: '20px 0'}}>Convenient, Quality Medical Care In The Heart Of Chennai</h1>
        <button className="btn-appointment">CONTACT US</button>
      </div>
      <div className="hero-img-section">
        <img src={heroImg} alt="Hero" />
      </div>
    </div>
  );
};
export default Hero;