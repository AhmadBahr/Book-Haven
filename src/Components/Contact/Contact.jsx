import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const containerStyle = {
    backgroundImage: 'url("https://asalapublishers.com/uploads/static_seo_pages/1600x360/asala_about4.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '185px',
    borderRadius: '10px',
    color: 'white', 
  };

  const titleStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center', 
    marginLeft: '70px',
  };

  const findUsContainerStyle = {
    marginTop: '50px',
    padding: '50px',
    borderRadius: '10px',
    backgroundColor: '#ffffff', 
    color: '#000000',
  };

  const iconStyle = {
    color: '#CC2448',
    marginRight: '20px',
    fontSize:'25px',
  };

  const boldTextStyle = {
    fontWeight: 'bold',
  };

  const googleMapsContainerStyle = {
    marginTop: '0px',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const newsletterContainerStyle = {
    marginTop: '-2px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#3498db', 
    color: '#ffffff', 
    textAlign: 'center',
  };

  const sendMessageTextStyle = {
    fontSize: '20px', 
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const roundedInputStyle = {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '8px', 
    border: '1px solid #ddd', 
    width: '100%', 
    boxSizing: 'border-box', 
  };

  const inputContainerStyle = {
    display: 'flex',
    gap: '10px', 
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  };


  const sendMessageButtonStyle = {
    fontSize: '14px', 
    padding: '10px 15px', 
    borderRadius: '25px',
    cursor: 'pointer',
    backgroundColor: '#CC2448', 
    color: 'white',
    border: 'none', 
  };


  return (
    <div>
      <div style={containerStyle} className="contact-us-container">
        <h2 style={titleStyle} className="title">
          Contact Us
        </h2>
        <div style={{ marginLeft: '260px', fontSize: '15px' }}>Home . Contact</div>
      </div>

      <div style={findUsContainerStyle} className="find-us-container">
        <h3 style={{ fontSize: '44px', fontWeight: 'bold', marginBottom: '30px' }}>
          How to Find Us?
        </h3>
        <p style={{ fontSize: '20px' }}>
          Ut enim ad minim veniam, quis
        </p>
        <p style={{ fontSize: '20px' }}>
          Nostrud exercitation ullamco laboris
        </p>

        <div style={findUsContainerStyle} className="find-us-container">
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
            How to Find Us
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <FontAwesomeIcon icon={faLocationDot} style={iconStyle} />
            <p style={{ fontSize: '16px' }}>
                <br />
                <span style={{ ...boldTextStyle }}>Location: </span>
              Al Nour Blg, Al Safarat St.
              <br/>
              Bir Hassan,Beirut
              <br/>
              P.O BOX:11-3434 Beirut, Lebanon
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <FontAwesomeIcon icon={faPhoneVolume} style={iconStyle} />
            <p style={{ fontSize: '16px' }}> 
            <span style={{ ...boldTextStyle }}>Phone: </span>
              +961 1 833217
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
        <p style={{ fontSize: '16px' }}>
            <span style={{ ...boldTextStyle }}>Email:</span>
        </p>
        <div>
            <p>
            <span>&nbsp; &nbsp;info@asalapublishers.com</span>
            </p>
            <p>
            <span>&nbsp; &nbsp;orders@asalapublishers.com</span>
            </p>
            </div>
           </div>

           <div style={googleMapsContainerStyle} className="google-maps-container">
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
          Google Maps
        </h3>
        <iframe
          title="Google Maps"
          width="100%"
          height="400"
          style={{ border: '0', marginBottom: '20px' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2388425532245!2d35.4882399761357!3d33.857735027975096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1750692e3327%3A0x954fdcf774b0b208!2sAsala%20Publishers!5e0!3m2!1sen!2slb!4v1704192404706!5m2!1sen!2slb"
          allowFullScreen
        ></iframe>
          </div>
          <hr/>

          <div style={newsletterContainerStyle} className="newsletter-container">
        <h3 style={sendMessageTextStyle}>Send Message</h3>
        <form>
          <div style={inputContainerStyle}>
            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
              <input
                type="text"
                id="name"
                name="name"
                style={{ ...roundedInputStyle }}
                placeholder="Your Name*"
              />
              <input
                type="email"
                id="email"
                name="email"
                style={{ ...roundedInputStyle }}
                placeholder="Your Email *"
              />
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              style={{ ...roundedInputStyle }}
              placeholder="Subject *"
            />
            <textarea
              id="message"
              name="message"
              rows="4"
              style={{ ...roundedInputStyle, marginBottom: '20px' }}
              placeholder="Your Message"
              required
            ></textarea>
            </div>

            <button
            style={{
                ...sendMessageButtonStyle,
            }}
            >
            Send a Message
            </button>
        </form>
            </div>
            {/* Add the image here */}
            <img
            src="https://asalapublishers.com/assets/img/shadow.svg"
            alt="Newsletter Image"
            style={{
            width: '100%',
            borderRadius: '8px',
            marginTop: '-63px',
  }}
/>
            </div>
            </div>
            </div>
  );
};

export default ContactUs;
