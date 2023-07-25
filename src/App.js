import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuItems from './components/MenuItems';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
function App() {
  return (
    <>
      <div className="hero-contaier">
        {/* <MenuItems/> */}
        <Hero/>
      </div>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Education/>
      <Footer/>
      <ScrollUp/>
    </>

  );
}

export default App;
