import React from 'react';

const Departments = () => {
  const depts = ["General Medicine", "General Surgery", "Family Medicine", "Gynecology", "Anesthesiology", "Orthopaedics", "Plastic Surgery", "Urology"];
  return (
    <div className="dept-section" id="departments">
      <h2 style={{textAlign: 'center', color: '#1a2b56'}}>Our Departments</h2>
      <div className="dept-grid">
        {depts.map((name, index) => (
          <div key={index} style={{padding: '20px', background: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', borderRadius: '8px'}}>
            <h4>{name}</h4>
            <p style={{fontSize: '12px', color: '#666', margin: '10px 0'}}>Quality care for your loved ones with experts.</p>
            <span style={{color: '#008148', fontWeight: 'bold', cursor: 'pointer'}}>READ MORE +</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Departments;