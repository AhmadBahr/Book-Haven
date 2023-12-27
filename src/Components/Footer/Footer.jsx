import React from 'react'
import './Footer.css'
import facebook_icon from '../Assets/facebook_icon.jpg'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import twitter_icon from '../Assets/twitter_icon.png'
import american_express_logo from '../Assets/amex.256x164.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
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
          <div className="sb__footer-links_div">
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
          <div className="sb__footer-links_div">
            <h4>Social Media</h4>
            <div className="socialmedia">
            <p><img src={facebook_icon} alt="" style={{ width: '30px', height: '30px' }} /></p>
            <p><img src={pinterest_icon} alt="" style={{ width: '30px', height: '30px' }} /></p>
            <p><img src={instagram_icon} alt="" style={{ width: '30px', height: '30px' }} /></p>
            <p><img src={twitter_icon} alt="" style={{ width: '30px', height: '30px' }} /></p>

            </div>
          </div>
          <div className="sb__footer-links__div">
            <h4>CONTACT US</h4>
            <a href="/about">
            <p>About</p>
            </a>
            <a href="/press">
            <p>Press</p>
            </a>
            <a href="/career">
            <p>Career</p>
            </a>
            <a href="/Contact">
            <p>Contact</p>
            </a>
          </div>
          <div className="sb__footer-links__div">
          <h4>CALL US</h4>
          <a href="/Beirut">
            <p style={{ color: 'purple', textDecoration: 'underline' }}>Beirut</p>
            <p style={{ color: 'purple', textDecoration: 'underline' }}>+961 1 83 32 17</p>
          </a>
          <a href="/Istanbul">
            <p style={{ color: 'purple', textDecoration: 'underline' }}>Istanbul</p>
            <p style={{ color: 'purple', textDecoration: 'underline' }}>+961 1 83 32 17</p>
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
            <a href="/Payment"><p>Payment</p></a>
            <img src="https://asalapublishers.com/assets/img/f1.svg" alt="MoneyGram Logo" />
            <img src="https://asalapublishers.com/assets/img/f2.svg" alt="Western Union Logo" />
            <img src="https://asalapublishers.com/assets/img/f3.svg" alt="Visa Logo" />
            <img src="https://asalapublishers.com/assets/img/f4.svg" alt="MasterCard Logo" />
            <img src="https://asalapublishers.com/assets/img/f5.svg" alt="Discover Logo" />
            <img src={american_express_logo} alt="American Express Logo" style={{ width: '40px', height: 'auto' }} />
          </div>
          </div>
        </div>
      </div>
  )
}

export default Footer