import React, { useContext, useState } from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const AdditionalNavbar = () => {
  return (
    <div className="additional-navbar" style={{ background: 'grey', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: 'white' }}>Welcome to Our Publishing House!</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div to='/facebook'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42e87EZd4jg7j2CwptLIsdyww5FVK1OYa4A&usqp=CAU" alt="Facebook" style={{ width: '30px', height: '30px' }} />
        </div>
        <div to='/instagram'>
          <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="Instagram" style={{ width: '30px', height: '30px' }} />
        </div>
        <div to='/twitter'>
          <img src="https://w7.pngwing.com/pngs/265/840/png-transparent-twitter-social-icons-grey-icon-thumbnail.png" alt="Twitter" style={{ width: '30px', height: '30px' }} />
        </div>
        <div to='/pinterest'>
          <img src="https://www.vhv.rs/dpng/d/584-5844080_grey-pinterest-logo-transparent-hd-png-download.png" alt="Pinterest" style={{ width: '30px', height: '30px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'dark-purple' }}>
          <br/>
          <img src="https://p7.hiclipart.com/preview/468/969/249/telephone-mobile-phones-computer-icons-logo-telephone.jpg" alt="Call Us" style={{ width: '20px', height: '20px' }} />
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
            ☰ 
          </div>
        </div>
        <img src="https://asalapublishers.com/assets/img/logo.png" alt="" style={{ width: '50px', height: '50px', marginRight: '5px' }} />
        <ul className='nav-menu'>
          <li onClick={() => { setMenu("shop") }}>
            <Link style={{ textDecoration: 'none' }} to='/'>About us</Link>{menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("men") }}>
            <Link style={{ textDecoration: 'none' }} to='/men'>Shop our Books</Link>{menu === "men" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("women") }}>
            <Link style={{ textDecoration: 'none' }} to='/women'>Our Catalogues</Link>{menu === "women" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("kids") }}>
            <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', position: 'relative' }} to='/kids'>
              <img src="https://asalapublishers.com/assets/img/arabi.jpg" alt="Kids" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/2048px-Globe_icon.svg.png" alt="Globe" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
              <span style={{ color: 'dark-purple' }}>Arabic</span>
              <img src="https://www.svgrepo.com/show/7882/down-arrow.svg" alt="Down Arrow" style={{ width: '20px', height: '20px', marginLeft: '5px', marginRight: '5px' }} />
              <span>|</span>
              <img src="https://i.pinimg.com/736x/19/65/ab/1965ab7ef7de87fe748b3c66efbfc73a.jpg" alt="Search" style={{ width: '50px', height: '50px', marginLeft: '5px', marginRight: '5px' }} />
            </Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
          <img src="https://t4.ftcdn.net/jpg/03/42/99/71/360_F_342997143_wz7x1yR7KWhmhSKF9OHwuQ2W4W7IUDvH.jpg" alt="Profile" style={{ width: '50px', height: '50px' }} />
        </div>
      </div>
    </>
  );
};
