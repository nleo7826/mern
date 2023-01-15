import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeSection.css';

function HomeSection() {
  
  return (
    <div className='home-container'>
      <img src={'images/kathakali-home.jpg'} alt="kathakali-home" 
        width="100%"
        height="auto"
      />
      
      <div className='home-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // onClick={() => setShowModal(true)}
        >
          DISCOVER KATHAKALI <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
    
  );
}

export default HomeSection;

/* <iframe 
title="YouTube video player"
width="100%" 
height="1215" 
src="https://www.youtube.com/embed/GBbcYtkqVKQ?autoplay=1" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; web-share" 
allowfullscreen
></iframe> */

