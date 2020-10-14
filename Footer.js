import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Lorem Ipsum Lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum
        </p>
        <p className='footer-subscription-text'>
        orem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Movies</h2>
            <Link to='/'>Film1</Link>
            <Link to='/'>Film2</Link>
            <Link to='/'>Film2</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Tv-Shows</h2>
            <Link to='/'>1dasdasads</Link>
            <Link to='/'>2adssda</Link>
            <Link to='/'>adsasdasd3</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Trailers</h2>
            <Link to='/'>sadasdads</Link>
            <Link to='/'>dsadasdsa</Link>
            <Link to='/'>dsaadsasadđsd</Link>         
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Instagram</Link>        
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
