import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_cross_icon.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo"></div>
          <img src={logo} alt=""/>
          <p>Shopper</p>
          <ul></ul>
        
    </div>
  )
}
