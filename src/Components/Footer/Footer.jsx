import React from 'react';
import './Footer.css';
import facebook_icon from '../Assets/facebook_icon.png'
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import twitter_icon from '../Assets/twitter.png';
import american_express_logo from '../Assets/american-express.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-section">
            <h4>CUSTOMER</h4>
            <a href="/Login / Register">
              <p>Login / Register</p>
            </a>
            <a href="/My Acount">
              <p>My Account</p>
            </a>
            <a href="/Terms & Condtions">
              <p>Terms & Conditions</p>
            </a>
          </div>

          <div className="sb__footer-section">
            <h4>QUICK LINKS</h4>
            <a href="/Explore Books">
              <p>Explore Books</p>
            </a>
            <a href="/About Asala">
              <p>About Asala</p>
            </a>
            <a href="/View Catalog">
              <p>View Catalog</p>
            </a>
          </div>

          <div className="sb__footer-section">
            <h4>SOCIAL MEDIA</h4>
            <p style={{ marginRight: '20px' }}></p>
            <div className="socialmedia">
            <p style={{ marginRight: '10px' }}>
              <img src={facebook_icon} alt="" style={{ width: '30px', height: '30px' }} /></p>
             <p style={{ marginRight: '10px' }}><img src={pinterest_icon} alt="" style={{ width: '30px', height: '30px' }} /></p>
            <p style={{ marginRight: '10px' }}><img src={instagram_icon} alt="" style={{ width: '30px', height: '30px' }} /></p>
           <p><img src={twitter_icon} alt="" style={{ width: '30px', height: '30px' }} /></p>
          </div>
          </div>

          <div className="sb__footer-section">
        <h4>Contact US</h4>
        <a href="/contact-us"> 
          <p style={{ color: 'black', textDecoration: 'none' }}>info@email.com</p>
        </a>
      </div>

          <div className="sb__footer-section">
          <h4>CALL US</h4>
          <a href="/Beirut">
            <p style={{ color: '#cc2448', textDecoration: 'none' }}>Beirut</p>
            <p style={{ color: '#cc2448', textDecoration: 'underline' }}>
              <a href="tel:+9611833217" style={{ color: '#cc2448', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid darkpink' }}>+961 1 83 32 17</a>
            </p>
          </a>
          <a href="/Istanbul">
            <p style={{ color: '#cc2448', textDecoration: 'none' }}>Istanbul</p>
            <p style={{ color: '#cc2448', textDecoration: 'underline' }}>
              <a href="tel:+9611833217" style={{ color: '#cc2448', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid darkpink' }}>+961 1 83 32 17</a>
            </p>
          </a>
        </div>

        </div>
        <hr style={{ color: 'grey', margin: '10px 0' }} />
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              Copyright &#169; {new Date().getFullYear()} Asala Publishers. All rights reserved
            </p>
          </div>
          <div className="sb__footer-below-links">
          <div className="payment-methods">
          <p>Payment Methods</p>
        <img src="https://asalapublishers.com/assets/img/f1.svg" alt="MoneyGram Logo" />
          <img src="https://asalapublishers.com/assets/img/f2.svg" alt="Western Union Logo" />
          <img src="https://asalapublishers.com/assets/img/f3.svg" alt="Visa Logo" />
          <img src="https://asalapublishers.com/assets/img/f4.svg" alt="MasterCard Logo" />
          <img src="https://asalapublishers.com/assets/img/f5.svg" alt="Discover Logo" />
          <img src={american_express_logo} alt="American Express Logo" style={{ width: '50px', height: '50px', marginTop: '-9px' }} />

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
