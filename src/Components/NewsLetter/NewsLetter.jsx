import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <div className="rectangle">
      <h1 className="newsletter-header">Newsletter</h1>
      <p className="newsletter-text">Subscribe to our newsletter and get the latest updates!</p>
        <div>
          <input type="email" placeholder='Enter your Email' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter;
