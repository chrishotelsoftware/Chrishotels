import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import About from '../About';
import Contact  from '../Contact';
import Activity from '../Activity';
import News from '../News';
import Awards from '../Awards';
import What from '../What';


function Home() {
  return (
    <>
      <HeroSection />     
       <About/>
       <Contact/>
       <Activity/>
       <News/>
       <Awards/>
      <What/>
       
       

      
      <Footer />
    </>
  );
}

export default Home;
