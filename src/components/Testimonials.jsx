import React from 'react';

const Testimonials = () => {
  const reviews = [
    { name: "Rajesh Kumar", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: "Anitha Mary", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { name: "Suresh Raina", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }
  ];

  return (
    <div className="testi-section" id="testimonials" style={{padding: '80px 0'}}>
      <div style={{textAlign: 'center', marginBottom: '50px'}}>
        <h2 style={{fontSize: '32px'}}>Testimonials</h2>
        <p style={{color: '#008148', fontWeight: 'bold'}}>Our Patients Reviews</p>
      </div>

      <div className="testi-grid">
        {reviews.map((rev, index) => (
          <div key={index} style={{background: '#fff', color: '#333', padding: '40px 30px', borderRadius: '4px', position: 'relative', boxShadow: '0 10px 20px rgba(0,0,0,0.2)'}}>
            {/* Quote Icon Style */}
            <div style={{fontSize: '50px', color: '#1a2b56', lineHeight: '1', marginBottom: '10px'}}>“</div>
            <p style={{fontSize: '14px', lineHeight: '1.6', marginBottom: '20px'}}>{rev.text}</p>
            <h4 style={{color: '#008148', fontSize: '16px'}}>{rev.name} <span style={{color: '#999', fontSize: '12px', fontWeight: 'normal'}}>- Chennai</span></h4>
          </div>
        ))}
      </div>
      
      <div style={{textAlign: 'center', marginTop: '40px'}}>
        <button style={{background: '#008148', color: '#fff', border: 'none', padding: '10px 25px', borderRadius: '4px', cursor: 'pointer'}}>VIEW ALL</button>
      </div>
    </div>
  );
};
export default Testimonials;