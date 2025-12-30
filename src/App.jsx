import React from 'react';
import Home from './Home'; // Unga main content inge thaan irukku
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Moththa 9 Sections-um (Hero, Awards, About, Departments, 
        Doctors, Testimonials, Preventive, Blog, Insurance, Footer) 
        Home component kulla irukku.
      */}
      <Home />
    </div>
  );
}

export default App;