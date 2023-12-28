import React, { useContext, useState } from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import facebook_icon from '../Assets/facebook.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import twitter_icon from '../Assets/twitter.png';
import phone_icon from '../Assets/phone_icon.png';
import hamburger_icon from '../Assets/hamburger_icon.png';
import search_icon from '../Assets/search_icon.jpg'
import arabi21_icon from '../Assets/arabi21_icon.jpg'
import globe_icon from '../Assets/globe_icon.png'
import down_icon from '../Assets/down_icon.png'

const AdditionalNavbar = () => {
  return (
    <div className="additional-navbar" style={{ background: 'grey', padding: '1px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: 'white', padding: '1px', fontSize: '12px' }}>Welcome to Our Publishing House!</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <div to='/facebook'>
          <img src={facebook_icon} alt="Facebook" style={{ width: '20px', height: '20px' }} />
        </div>
        <div to='/instagram'>
          <img src={instagram_icon} alt="Instagram" style={{ width: '20px', height: '20px' }} />
        </div>
        <div to='/twitter'>
          <img src={twitter_icon} alt="Twitter" style={{ width: '20px', height: '20px' }} />
        </div>
        <div to='/pinterest'>
          <img src={pinterest_icon} alt="Pinterest" style={{ width: '20px', height: '20px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#c60a45' }}>
          <br />
          <img src={phone_icon} alt="Call Us" style={{ width: '20px', height: '20px' }} />
          <br></br>
          <span>Call Us: 961 1 83 32 17</span>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [menu, setMenu] = useState('Shop');
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <>
      <AdditionalNavbar></AdditionalNavbar>
      <div className='navbar'>
        <br />
        <div className="nav-logo">
          <div className="hamburger-button" style={{ color: 'dark-pink', fontSize: '36px' }}>
            <img src={hamburger_icon} alt="" style={{ width: '36px', height: '36px', color: '#c60a45' }} />
          </div>
        </div>
        <img src="https://asalapublishers.com/assets/img/logo.png" alt="" style={{ width: '50px', height: '50px', marginRight: '5px' }} />
        <ul className='nav-menu'>
          <li onClick={() => { setMenu("about") }}>
            <Link style={{ textDecoration: 'none' }} to='/about'>About Us</Link>{menu === "about" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("shop") }}>
            <Link style={{ textDecoration: 'none' }} to='/shop'>Shop for Books</Link>{menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("catalogs") }}>
            <Link style={{ textDecoration: 'none' }} to='/catalogs'>Our Catalogues</Link>{menu === "catalogs" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("contact") }}>
            <Link style={{ textDecoration: 'none' }} to='/contact'>Contact Us</Link>{menu === "contact" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("arabi") }}>
          <a style={{ textDecoration: 'none' }} href='/arabi21'>
            <img src={arabi21_icon} alt='Arabi 21' style={{ width: '50px', height: '50px' }}  />
          </a>
          {menu === "arabi" ? <hr /> : <></>}
        </li>
        </ul>
        <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <div className="nav-icons">
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#c60a45' }}>

            <img src={globe_icon} alt="Globe" style={{ width: '20px', height: '20px', marginLeft: '5px', marginRight: '5px' }} />

            <span style={{ color: 'grey' }}>Arabic</span>
            <img src={down_icon} alt="Down Arrow" style={{ width: '20px', height: '20px', marginLeft: '5px', marginRight: '5px' }} />

            <img src={search_icon} alt="Search" style={{ width: '20px', height: '20px', marginLeft: '5px', marginRight: '2px' }} />

            <span style={{ height: '20px' }}>|</span>
          </div>
        </div>
        
        <Link to='/cart'><img src={cart_icon} alt="Cart" style={{ width: '40px', height: '40px', marginLeft: '5px', marginRight: '5px' }} /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <img src="https://t4.ftcdn.net/jpg/03/42/99/71/360_F_342997143_wz7x1yR7KWhmhSKF9OHwuQ2W4W7IUDvH.jpg" alt="Profile" style={{ width: '50px', height: '50px' }} />
      </div>

      </div>
    </>
  );
};

export default Navbar;
