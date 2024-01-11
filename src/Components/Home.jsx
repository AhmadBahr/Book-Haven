import React from 'react';
import './Home.css';
import banners from '../Assets/banners.svg';
import boy_1 from '../Assets/boy_1.png';

const textUnderImageStyle = {
  fontSize: '25px',
  textAlign: 'center',
  marginTop: '30px',
  color: '#484847',
};

const Home = () => {
  return (
    <div>
      <div className="main-container" style={{ backgroundImage: `url(${banners})` }}>
        <div className="content-container">
          <h1>Educating Our Youth</h1>
          <p>Asala is dedicated to providing the highest quality reading materials to help our youth grow and thrive</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
        <div className="purple-box">
          <div className="circle-container">
            <div className="circle circle-filled" style={{ width: '40px', height: '40px' }}>
            </div>
            <div className="circle circle-empty" style={{ width: '40px', height: '40px', border: '2px solid #fff', borderRadius: '50%', background: 'transparent' }}>
            </div>
            <div className="circle circle-filled" style={{ width: '40px', height: '40px' }}>
            </div>
            <img src={boy_1} alt="Description of the image" style={{ width: '400%', height: 'auto', marginTop: '10px', transform: 'scaleX(-1)' ,marginLeft:'-450px'}} />  
          </div>
        </div>
      </div>

      <div style={textUnderImageStyle}>
        <strong>
          <p>Shop By Categories </p>
        </strong>
        <div className="color-boxes-container">
          <div className="color-box red">
            <div className="circle-top"></div>
            <div className="circle-image">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/books-in-circle-icon-Graphics-3393265-1.jpg"
                alt="Picture Books"
                style={{ width: '140%',
                height: '140%',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '-60px auto 30px -9px', }}
              />
            </div>
            <strong><p className="box-text">Picture Books</p></strong>
          </div>
          <div className="color-box green">
            <div className="circle-top"></div>
            <div className="circle-image">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/books-in-circle-icon-Graphics-3393265-1.jpg"
                alt="Arabic Grammar"
                style={{ width: '140%',
                height: '140%',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '-60px auto 30px -9px', }}
              />
            </div>
            <strong><p className="box-text">Arabic Grammar</p></strong>
          </div>
          <div className="color-box blue">
            <div className="circle-top"></div>
            <div className="circle-image">
            <img
                src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/books-in-circle-icon-Graphics-3393265-1.jpg"
                alt="Arabic Grammar"
                style={{ width: '140%',
                height: '140%',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '-60px auto 30px -9px', }}
              />
            </div>
            <strong><p className="box-text">Activities</p></strong>
          </div>
          <div className="color-box yellow">
            <div className="circle-top"></div>
            <div className="circle-image">
            <img
                src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/books-in-circle-icon-Graphics-3393265-1.jpg"
                alt="Arabic Grammar"
                style={{ width: '140%',
                height: '140%',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '-60px auto 30px -9px', }}
              />
            </div>
            <strong><p className="box-text">Reading Series</p></strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
