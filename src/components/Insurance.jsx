import React from 'react';
// Asset images (i1, i2, i3, i4, i5) neenga vachirukura maari check pannikonga
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';
import i3 from '../assets/i3.jpg';
import i4 from '../assets/i4.jpg';

const Insurance = () => {
  const logos = [i1, i2, i3, i4, i1, i2, i3, i4]; // Figma-la niraya logos irukku

  return (
    <div className="insurance-section" id="insurance" style={{padding: '60px 0', background: '#fff'}}>
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <h2 style={{color: '#1a2b56'}}>Cover For Your Health</h2>
        <p style={{color: '#008148', maxWidth: '600px', margin: '10px auto', fontSize: '14px'}}>
          SMF Insurance Department Staff Will Assist You And Guide You In The Process Of 
          Obtaining The Cashless Facility From The TPA/Insurance Company.
        </p>
      </div>
      <div className="logo-grid">
        {logos.map((logo, index) => (
          <div key={index} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={logo} alt="Insurance Logo" style={{height: '60px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: '0.7'}} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Insurance;