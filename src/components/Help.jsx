import React from 'react';
import helpDoctor from '../assets/help-doctor.jpg';

const Help = () => {
  return (
    <div className="help-section" id="help">
      <div className="help-container">
        <div className="help-content" style={{paddingBottom: '60px'}}>
          <h2 style={{fontSize: '36px', marginBottom: '20px'}}>We're Here To Help</h2>
          <p style={{marginBottom: '30px', opacity: '0.9'}}>
            SMF is committed to offering top-notch medical services that are 
            compassionate and mindful of patients' needs.
          </p>
          <button className="btn-appointment" style={{background: '#008148', border: 'none'}}>CONTACT US</button>
        </div>
        <div className="help-image">
          <img src={helpDoctor} alt="Doctor" />
        </div>
      </div>
    </div>
  );
};
export default Help;