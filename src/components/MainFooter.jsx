import React from 'react';

const MainFooter = () => {
  return (
    <footer style={{backgroundColor: '#1a2b56', color: 'white', padding: '60px 10% 20px 10%'}}>
      <div className="footer-links-grid">
        {/* Column 1 */}
        <div>
          <h3 style={{marginBottom: '20px'}}>SMF</h3>
          <p style={{fontSize: '14px', opacity: '0.8'}}>Sundaram Medical Foundation is a community-centered hospital providing quality healthcare.</p>
        </div>
        {/* Column 2 - Quick Links */}
        <div>
          <h4 style={{marginBottom: '20px', color: '#008148'}}>Quick Links</h4>
          <ul style={{listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2.5'}}>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Doctors</li>
            <li>Departments</li>
          </ul>
        </div>
        {/* Column 3 - Patient Care */}
        <div>
          <h4 style={{marginBottom: '20px', color: '#008148'}}>Patient Care</h4>
          <ul style={{listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2.5'}}>
            <li>Find A Doctor</li>
            <li>Health Checkups</li>
            <li>Emergency Services</li>
            <li>Inpatient Services</li>
          </ul>
        </div>
        {/* Column 4 - Contact */}
        <div>
          <h4 style={{marginBottom: '20px', color: '#008148'}}>Contact Us</h4>
          <p style={{fontSize: '14px', lineHeight: '1.8'}}>
            9-C, 4th Avenue, Shanthi Colony,<br />
            Anna Nagar, Chennai - 600040.<br />
            📞 044 - 2626 8844
          </p>
        </div>
      </div>
      <hr style={{margin: '40px 0 20px 0', border: '0.5px solid rgba(255,255,255,0.1)'}} />
      <p style={{textAlign: 'center', fontSize: '12px', opacity: '0.6'}}>
        Copyright © 2024 Sundaram Medical Foundation. All Rights Reserved.
      </p>
    </footer>
  );
};
export default MainFooter;