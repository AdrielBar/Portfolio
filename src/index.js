import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience'
import Leadership from './sections/Leadership';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
// import Certifications from './sections/Certifications';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutMe />
    <Experience />
    <Leadership />
    <Projects />
    <Leadership />
    <Contact />
    
  </React.StrictMode>
);

