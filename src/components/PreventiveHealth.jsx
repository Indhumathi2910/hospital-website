import React from 'react';
import preventiveImg from '../assets/doctor-patient.jpg'; // Path check pannunga

const PreventiveHealth = () => {
  const programs = [
    { title: "Basic Health Checkup", desc: "Complete health protection for your family and you." },
    { title: "Master & Executive Checkup", desc: "Comprehensive healthcare package for individuals and family." },
    { title: "Advanced Health Checkup", desc: "Specialized care for seniors above 60 years." },
    { title: "Diabetic Package", desc: "Test packages for individuals with diabetic symptoms." }
  ];

  return (
    <div className="preventive-container" id="preventive">
      <div className="preventive-text">
        <h2 style={{color: '#1a2b56', fontSize: '28px'}}>Preventive Health Programs</h2>
        <p style={{color: '#008148', fontWeight: 'bold', margin: '10px 0'}}>Building A Stronger And Healthier Community</p>
        
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px'}}>
          {programs.map((item, index) => (
            <div key={index}>
              <h4 style={{color: '#1a2b56', fontSize: '14px'}}>✚ {item.title}</h4>
              <p style={{fontSize: '12px', color: '#666', marginTop: '5px'}}>{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="btn-appointment" style={{marginTop: '30px'}}>KNOW MORE</button>
      </div>
      <div className="preventive-image">
        <img src={preventiveImg} alt="Preventive Care" style={{width: '100%', borderRadius: '15px'}} />
      </div>
    </div>
  );
};
export default PreventiveHealth;