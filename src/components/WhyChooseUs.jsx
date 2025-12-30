import React from 'react';
import whyImg from '../assets/why-choose.jpg'; 

const WhyChooseUs = () => {
  return (
    <div className="why-choose-container" id="whychoose">
      <div className="why-choose-text">
        <h2 style={{color: '#1a2b56', fontSize: '32px'}}>Why Choose Us?</h2>
        <p style={{margin: '20px 0', color: '#666', lineHeight: '1.6'}}>
          We provide the best healthcare services with modern technology and 
          experienced doctors. Our focus is always on patient comfort and recovery.
        </p>
        <ul style={{listStyle: 'none', padding: 0}}>
          <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center'}}>
            <span style={{color: '#008148', marginRight: '10px'}}>✔</span> 24/7 Emergency Care
          </li>
          <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center'}}>
            <span style={{color: '#008148', marginRight: '10px'}}>✔</span> Expert Specialist Doctors
          </li>
          <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center'}}>
            <span style={{color: '#008148', marginRight: '10px'}}>✔</span> State-of-the-art Facilities
          </li>
        </ul>
      </div>
      <div className="why-choose-image">
        <img src={whyImg} alt="Why Choose Us" style={{width: '100%', borderRadius: '15px'}} />
      </div>
    </div>
  );
};
export default WhyChooseUs;