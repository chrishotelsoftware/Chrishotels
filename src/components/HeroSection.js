import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
       <video src='/videos/video3.mp4' autoPlay loop muted />
       <h1>ADMISSION OPEN FOR <br/>A.Y 2023-24</h1>
      <h3 > ENROLL NOW </h3>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          REGISTER NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
