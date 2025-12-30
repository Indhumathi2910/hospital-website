import React from 'react';
const Navbar = () => {
  return (
    <div className="nav-wrapper">
      {/* Top Mini Navigation */}
      <div className="top-nav">
        <div className="top-nav-links">
          <span>Academics</span>
          <span>Find My Balance</span>
          <span>Community Outreach</span>
          <span>FAQ</span>
          <span>Careers</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="logo-container">
          <h2 className="logo-text">Sundaram Medical <span>Foundation</span></h2>
        </div>
         
        
<ul className="nav-items">
          <li className="active">Home</li>
          <li>About Us</li>
          <li>Patient Care</li>
          <li>Departments</li>
          <li>Our Doctors</li>
          <li>Testimonials</li>
          <li>Resources</li>
          <li>News & Media</li>
          <li>Contact Us</li>
       </ul>

        <button className="btn-appointment">REQUEST AN APPOINTMENT</button>
      </nav>
    </div>
  );
};

export default Navbar;