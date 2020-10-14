import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Have you Registered?</h1>
      <p>Watch The Newest Trailers</p>
      <p>Create Your Own Watchlist</p>
      <p>Save Your Favorites</p>
      <p>Join Movie Nights</p>
      <p></p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Try it Free
        </Button>
        


        </div>
        
        
        <form className='form'>
        <input class="input"type="text" name="s" placeholder="Search"/>
        
      </form>
         
     
   
   

    </div>
    
    
  
  );
}

export default HeroSection;
