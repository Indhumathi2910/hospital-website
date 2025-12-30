import React from 'react';
// Asset images-ah d1, d2 nu neenga vachirukura peyar-padi mathikonga
import d1 from '../assets/doc1.jpg'; 

const Doctors = () => {
  const doctorList = [
    { name: "Dr. R. Manivannasamy", dept: "Anesthesiology", img: d1 },
    { name: "Dr. Lynda Franklin", dept: "Anesthesiology", img: d1 },
    { name: "Dr. M. Prabhu", dept: "Critical Care", img: d1 },
    { name: "Dr. Vijaya Bharathi", dept: "Dental & Maxillofacial", img: d1 },
  ];

  return (
    <div className="doctors-section" id="doctors" style={{padding: '80px 0'}}>
      <h2 style={{textAlign: 'center', color: '#1a2b56', marginBottom: '40px'}}>Our Doctors</h2>
      <div className="doctors-grid">
        {doctorList.map((doc, index) => (
          <div key={index} className="doctor-card" style={{textAlign: 'center', background: '#fff', padding: '15px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)'}}>
            <img src={doc.img} alt={doc.name} style={{width: '100%', borderRadius: '8px', marginBottom: '15px'}} />
            <h4 style={{color: '#1a2b56'}}>{doc.name}</h4>
            <p style={{color: '#008148', fontSize: '14px'}}>{doc.dept}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Doctors;