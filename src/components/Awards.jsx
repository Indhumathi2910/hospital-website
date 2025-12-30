import React from 'react';
import awardImg from '../assets/awards-section.jpg';

const Awards = () => {
  return (
    <div className="awards-section">
      <div className="awards-content">
        <h3>Awards</h3>
        <p>Award Winning Healthcare Initiatives That Prove You Are At The Forefront Of Everything We Do!</p>
      </div>
      <div className="awards-image-container">
        <img src={awardImg} alt="Awards" style={{maxWidth: '600px'}} />
      </div>
    </div>
  );
};
export default Awards;