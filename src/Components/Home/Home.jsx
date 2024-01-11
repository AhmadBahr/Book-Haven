import React from 'react';
import './Home.css';
import banners from '../Assets/banners.svg';
import boy_1 from '../Assets/boy_1.png';
import book_stack from '../Assets/book_stack.jpg'

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
       
        <div className="color-boxes-and-image-container">
        <div className="color-boxes-container">
          <div className="color-box red">
          <div className="arrow left">&lt;</div>
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
          <strong><p className="box-text">Reading Series</p></strong>
            <div className="circle-top"></div>
            <div className="circle-image">
            <img
            src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/books-in-circle-icon-Graphics-3393265-1.jpg"
            alt="Arabic Grammar"
            style={{
              width: '140%',
              height: '140%',
              borderRadius: '50%',
              objectFit: 'cover',
              margin: '-60px auto 30px -9px',
            }}
          />
        </div>
        <div className="arrow right">&gt;</div>
      </div>
    </div>

    <div style={{ position: 'relative' }}>
  <img src={book_stack} style={{ width: '100%', marginTop: '20px' }} alt="Book Stack" />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', fontSize: '34px' }}>
    <p>Browse By Stage</p>

<div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '241%', left: '-70%', borderBottom: '2px solid'}}>
    <div style={{ width: '75px', height: '10px', background: '#fff', position: 'absolute', top: '92%', left: '52%', transform: 'translate(-50%, -50%)', borderRadius:'3px' }}></div>
</div>
<div style={{ width: '150px', height: '50px', border: '1px solid ', borderRadius: '20px', position: 'absolute', top: '238%', left: '-70%' }}>
    <p style={{ margin: 0, textAlign: 'center', fontSize: '15px', marginTop: '15px' }}>Intermediate Stage</p>
</div>

<div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '241%', left: '-70%', borderBottom: '2px solid '}}>
    <div style={{ width: '75px', height: '10px', background: '#fff', position: 'absolute', top: '92%', left: '52%', transform: 'translate(-50%, -50%)', borderRadius:'3px' }}></div>
</div>


<div style={{ width: '150px', height: '50px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '10px' }}>
      <p style={{ margin: 0, textAlign: 'center', fontSize: '15px', marginTop: '15px' }}>Pre-Primary Stage</p>
    </div>
<div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '10px' }}></div>


<div style={{ width: '150px', height: '50px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '175px' }}></div>
<div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '175px' }}>
      <p style={{ margin: 0, textAlign: 'center', fontSize: '15px', marginTop: '15px' }}>Primary Stage 1st</p>
    </div>

<div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '175px' }}></div>
<div style={{ width: '150px', height: '50px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '330px' }}></div>
<div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '330px' }}>
      <p style={{ margin: 0, textAlign: 'center', fontSize: '15px', marginTop: '15px' }}>Primary Stage 2nd</p>
    </div>
<div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '330px' }}></div>

<div style={{ width: '150px', height: '50px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '485px' }}></div>
<div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '485px' }}>
      <p style={{ margin: 0, textAlign: 'center', fontSize: '15px', marginTop: '15px' }}>Primary Stage 3rd</p>
    </div>
<div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '485px' }}></div>
     </div>
    </div>
    </div>
   </div>
  </div>
  );
};

export default Home;
