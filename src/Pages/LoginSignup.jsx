import React from 'react';
import '../Pages/CSS/LoginSignup.css';

const LoginSignup = () => {
  return (<>
    <div className='loginsignup'>
      <div className="loginsignup-container">
      <img src={"https://asalapublishers.com/assets/img/logo.png" } alt="Logo" />
      <h1>Welcome Back!</h1>
      <p>To keep connected with us </p>
        <p>please login with your info</p>
        <div className="loginsignup-logo">
        </div>
        <div className="loginsignup-fields">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder='' />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder='' />
        </div>
        <p className="loginsignup-login">
          <span to="/login">Forgot my password?</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Keep me signed in</p>
        </div>
        <button>Sign In</button>
      </div>

     <div className="create-account-container">
        <h1>Create Account</h1>
        <div className="create-account-fields">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder='' />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder='' />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" placeholder='+961 &#8595;' />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder='' />
          </div>

          <div>
            <label htmlFor="region">Region</label>
            <input type="text" id="region" placeholder='' />
          </div>

          <div>
            <label htmlFor="building">Building</label>
            <input type="text" id="building" placeholder='' />
          </div>
            
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='' />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder='' />
          </div>
          <button>Create Account</button>
        </div>
      </div>
    </div>
    <div className="footerContainer">
      <div className='bg-5'>
      <img src="https://asalapublishers.com/assets/img/shadow.svg" alt=""/>
      </div>
      </div>
      </>
  );
}

export default LoginSignup;