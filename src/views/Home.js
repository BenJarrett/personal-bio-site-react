import React from 'react';
import AboutMe from '../App/components/Bio';
import Contact from '../App/components/Contact';
import Home from '../App/components/Home';
// import NavBar from '../App/components/NavBar';
import Tech from '../App/components/Technologies';

function HomePage() {
  return (
    <>
    <Home />
    <AboutMe/>
    <Tech />
    <Contact />

    </>
  );
}

export default HomePage;
