import React from 'react';
import './App.css';

// --- Assets ---
import heroImg from './assets/hero-img.jpg';
import awardsImg from './assets/awards-section.jpg'; // Awards Image
import hospitalImg from './assets/hospital-building.jpg'; 
import doctorPatient from './assets/doctor-patient.jpg'; 
import blog1 from './assets/blog1.jpg';
import blog2 from './assets/blog2.jpg';
import blog3 from './assets/blog3.jpg';

// Departments (d1 to d8)
import d1 from './assets/d1.jpg'; import d2 from './assets/d2.jpg';
import d3 from './assets/d3.jpg'; import d4 from './assets/d4.jpg';
import d5 from './assets/d5.jpg'; import d6 from './assets/d6.jpg';
import d7 from './assets/d7.jpg'; import d8 from './assets/d8.jpg';

// Doctors (doc1 to doc8)
import doc1 from './assets/doc1.jpg'; import doc2 from './assets/doc2.jpg';
import doc3 from './assets/doc3.jpg'; import doc4 from './assets/doc4.jpg';
import doc5 from './assets/doc5.jpg'; import doc6 from './assets/doc6.jpg';
import doc7 from './assets/doc7.jpg'; import doc8 from './assets/doc8.jpg';

// Insurance (i1 to i5)
import i1 from './assets/i1.jpg'; import i2 from './assets/i2.jpg';
import i3 from './assets/i3.jpg'; import i4 from './assets/i4.jpg';
import i5 from './assets/i5.jpg';

const Home = () => {
  return (
    <div className="corporate-site">
      
      {/* 1. NAVBAR */}
      <header className="sticky-header">
        <div className="top-utility-bar">
          <div className="container flex-between">
            <div className="brand-identity">
              <h2 className="main-logo">SMF</h2>
              <div className="brand-titles">
                <strong className="bold-name">Sundaram Medical Foundation</strong>
                <span className="sub-name">Dr. Rangarajan Memorial Hospital</span>
              </div>
            </div>
            <div className="utility-links">
              <span>Academics</span> <span>Find My Balance</span> <span>Careers</span>
              <button className="btn-appointment">REQUEST AN APPOINTMENT</button>
            </div>
          </div>
        </div>
        <nav className="main-navigation">
          <ul className="nav-list">
            <li>Home</li><li>About Us</li><li>Patient Care</li><li>Departments</li>
            <li>Our Doctors</li><li>Testimonials</li><li>Resources</li><li>Contact Us</li>
          </ul>
        </nav>
      </header>

      {/* 2. HERO */}
      <section className="hero-hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="top-label">Sundaram Medical Foundation</span>
            <h1>Convenient, Quality Medical Care In The Heart Of Chennai</h1>
            <p>Providing expert healthcare for over 30 years with a community focus.</p>
            <button className="btn-contact">CONTACT US</button>
          </div>
          <div className="hero-visual">
            <img src={heroImg} alt="Hero" className="prof-img" />
          </div>
        </div>
      </section>

      {/* 3. AWARDS (Text Left, Image Right) */}
      <section className="awards-figma">
        <div className="container awards-flex">
          <div className="awards-text-content">
            <h2 className="awards-title">Awards</h2>
            <p className="awards-desc">Award Winning Healthcare & Initiatives That Prove You Are At The Forefront Of Everything We Do!</p>
          </div>
          <div className="awards-image-container">
            <img src={awardsImg} alt="Awards Banner" className="awards-banner-img" />
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="section-padding bg-light">
        <div className="container split-flex">
          <div className="image-side">
            <img src={hospitalImg} alt="Hospital" className="prof-img rounded-lg" />
          </div>
          <div className="text-side">
            <h2>Why Choose Us?</h2>
            <p>Choosing our hospital means choosing a legacy of trust and care.</p>
            <ul className="feature-bullets">
              <li>Modern Clinical Infrastructure</li>
              <li>Compassionate Nursing Care</li>
              <li>Advanced Diagnostics Laboratory</li>
            </ul>
            <button className="btn-outline">KNOW MORE</button>
          </div>
        </div>
      </section>

      {/* 5. DEPARTMENTS */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header"><h2>Our Departments</h2></div>
          <div className="grid-four">
            {[d1, d2, d3, d4, d5, d6, d7, d8].map((img, i) => (
              <div key={i} className="prof-card">
                <div className="img-container"><img src={img} alt="Dept" /></div>
                <div className="card-body"><h3>Specialty Dept</h3><p>READ MORE →</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DOCTORS */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header"><h2>Our Doctors</h2></div>
          <div className="grid-four">
            {[doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8].map((img, i) => (
              <div key={i} className="prof-card doctor-card">
                <div className="img-container circle"><img src={img} alt="Doc" /></div>
                <div className="card-body text-center">
                  <h4>Consultant</h4>
                  <button className="btn-small">VIEW PROFILE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (Figma Layout) */}
      <section className="testimonials-figma">
        <div className="container">
          <div className="testimonial-header">
            <div className="header-left">
              <h2>Testimonials</h2>
              <p>Our Patients Reviews</p>
            </div>
            <div className="header-right-btns">
              <button className="btn-filter active">WRITTEN</button>
              <button className="btn-filter">VIDEO</button>
            </div>
          </div>
          <div className="testimonial-grid-figma">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="test-card-white">
                <div className="quote-icon">“</div>
                <p className="test-text">Excellent treatment and very supportive staff. The environment is very professional.</p>
                <div className="test-footer">
                  <span className="test-name">Rajesh Kumar</span>
                  <span className="test-loc"> - Chennai</span>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-container">
            <button className="btn-view-all">VIEW ALL</button>
          </div>
        </div>
      </section>

      {/* 8. PREVENTIVE HEALTH (Figma Layout - Image Left, Cards Right) */}
      <section className="section-padding">
        <div className="container">
          <div className="preventive-layout">
            <div className="preventive-img-side">
              <img src={doctorPatient} alt="Preventive" className="prof-img rounded-lg shadow" />
            </div>
            <div className="preventive-content-side">
              <h2 className="title-blue">Preventive Health Programs</h2>
              <p className="subtitle-gray">Building a Stronger and Healthier Community</p>
              
              <div className="preventive-grid-small">
                <div className="blue-check-card">
                   <div className="card-inner">
                      <span>★</span>
                      <h4>Basic Health Checkup</h4>
                   </div>
                   <div className="green-bar"></div>
                </div>
                <div className="blue-check-card">
                   <div className="card-inner">
                      <span>✚</span>
                      <h4>Master Health Checkup</h4>
                   </div>
                   <div className="green-bar"></div>
                </div>
                <div className="blue-check-card">
                   <div className="card-inner">
                      <span>♥</span>
                      <h4>Advanced Health Checkup</h4>
                   </div>
                   <div className="green-bar"></div>
                </div>
                <div className="blue-check-card">
                   <div className="card-inner">
                      <span>👤</span>
                      <h4>Family Health Package</h4>
                   </div>
                   <div className="green-bar"></div>
                </div>
              </div>
              <button className="btn-book">BOOK NOW</button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BLOG */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header"><h2>Our Blog</h2></div>
          <div className="grid-three">
            {[blog1, blog2, blog3].map((img, i) => (
              <div key={i} className="blog-card">
                <img src={img} alt="blog" />
                <h4>Medical Updates</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INSURANCE */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header"><h2>Cover For Your Health</h2></div>
          <div className="insurance-flex">
            {[i1, i2, i3, i4, i5].map((img, i) => <img key={i} src={img} alt="ins" />)}
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="corporate-footer">
        <div className="container footer-grid">
          <div><h3>SMF Hospital</h3><p>Anna Nagar, Chennai</p></div>
          <div><h4>Quick Links</h4><p>Home</p><p>About</p></div>
          <div><h4>Contact</h4><p>044 2626 8844</p></div>
        </div>
        <div className="footer-bottom">© 2025 Sundaram Medical Foundation.</div>
      </footer>
    </div>
  );
};

export default Home;