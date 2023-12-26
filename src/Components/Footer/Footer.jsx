import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';


export const Footer = () => {
  return (
    <div className='footer'>
      <br/><br/>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
      </div>
      <div className="footer-links">
        <div className="customer-section">
          <p>CUSTOMER</p>
          <ul className="sub-links">
            <li>Log In</li>
            <li>My Account</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="quick-links">
          <p>QUICK LINKS</p>
          <ul className="sub-links">
            <li>Explore Books</li>
            <li>About Asala</li>
            <li>View Catalog</li>
          </ul>
        </div>
        <p>SOCIAL MEDIA</p>
        <div className="social-media-icons">
          <div className="footer-icons-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-PwlexbeDW56TRqSrv86oQ7GGzrAUYJCNr3ihi0cK1H6gkoorAHNAnr67rLlddJc5VI&usqp=CAU" alt="Facebook" />
          </div>
          <div className="footer-icons-container">
            <img src="https://static-00.iconduck.com/assets.00/instagram-rounded-filled-icon-2047x2048-sc0zywj5.png" alt="Instagram" />
          </div>
          <div className="footer-icons-container">
            <img src="https://www.svgrepo.com/show/332182/twitter-circle.svg" alt="Twitter" />
          </div>
          <div className="footer-icons-container">
            <img src="https://cdn-icons-png.flaticon.com/512/80/80648.png" alt="Pinterest" />
          </div>
        </div>
        <div className="quick-links">
          <p>Call US</p>
          <ul className="sub-links">
            <li>Beirut:</li>
            <p>+9611 83 3217</p>
            <li>Istanbul:</li>
            <p>+931 1 83 32 17</p>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;