import React, { useContext, useState } from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../Context/ShopContext';
import hamburger_icon from '../Assets/hamburger_icon.png';
import arabi21_icon from '../Assets/arabi21_icon.jpg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Link, useLocation } from 'react-router-dom';


const AdditionalNavbar = () => {
  return (
    <div className="additional-navbar" style={{ background: '#D3D3D3', padding: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: '#D3D3D3', padding: '1px', fontSize: '12px' }}>Welcome to Our Publishing House!</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div to='/facebook'>
        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="9" viewBox="0 0 320 512"><path fill="#484847" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
        </div>
        <div to='/instagram'>
        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="20" viewBox="0 0 448 512"><path fill="#484847" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg>
        </div>
        <div to='/twitter'>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path  fill="#484847" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
        </div>
        <div to='/pinterest'>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512"><path fill="#484847" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'dark-grey' }}>
          <br />
          <PhoneInTalkOutlinedIcon style={{ filter: 'brightness(60%)', width: '20px' }} />
          <br></br>
          <span style={{ color: '#grey',fontFamily:'Arial' }}>Call us:</span>
          <span style={{ color: '#cc2448', fontWeight: 'bold' }}>961 1 83 32 17</span>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [menu, setMenu] = useState('Shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };
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
        <Link to='/Home'>
          <img src="https://asalapublishers.com/assets/img/logo.png" alt="" style={{ width: '50px', height: '50px', marginRight: '5px' }} />
        </Link>
        <ul className='nav-menu'>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/about'>
              <div className={isActive('/about') ? 'nav-link active' : 'nav-link'}>
                About Us
                {isActive('/about') && <hr />}
              </div>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/shop'>
              <div className={isActive('/shop') ? 'nav-link active' : 'nav-link'}>
                Shop our Books
                {isActive('/shop') && <hr />}
              </div>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/OurCatalogues'>
              <div className={isActive('/OurCatalogues') ? 'nav-link active' : 'nav-link'}>
                Our Catalogues
                {isActive('/OurCatalogues') && <hr />}
              </div>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/Contact-us'>
              <div className={isActive('/Contact-us') ? 'nav-link active' : 'nav-link'}>
                Contact Us
                {isActive('/Contact-us') && <hr />}
              </div>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/arabi21'>
              <div className={isActive('/arabi21') ? 'nav-link active' : 'nav-link'}>
                <img src={arabi21_icon} alt='Arabi 21' style={{ width: '50px', height: '50px' }} />
                {isActive('/arabi21') && <hr />}
              </div>
            </Link>
          </li>
        </ul>
        <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <div className="nav-icons">
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#c60a45' }}>
              <LanguageIcon style={{ color: 'grey' }}/>
              <span style={{ color: 'grey' }}>Arabic</span>
              <ArrowDropDownIcon style={{ color: 'grey' }} />
            <SearchIcon style={{color:'grey'}}/>
          <span style={{ height: '50px', color:'grey', fontSize:'30px' }}>&#124;</span>
          </div>
        </div>
        <Link to='/cart'><img src={cart_icon} alt="Cart" style={{ width: '40px', height: '40px', marginLeft: '5px', marginRight: '5px' }} /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <Link to='/profile'> 
            <img
              src="https://t4.ftcdn.net/jpg/03/42/99/71/360_F_342997143_wz7x1yR7KWhmhSKF9OHwuQ2W4W7IUDvH.jpg"
              alt="Profile"
              style={{ cursor: 'pointer', width: '50px', height: '50px',marginBottom:'1px' }}
            />
            </Link>
      </div>
      </div>
    </>
  );
};

export default Navbar;
