import React from 'react'
import about_05 from '../Assets/about_05.jpg'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import Jkrowling from '../Assets/J.K.-Rowling.jpg'
import author2 from '../Assets/author2.jpg'
import author3 from '../Assets/author3.jpg'
import author4 from '../Assets/author4.jpg'
import article1 from '../Assets/article1.webp'
import titanic from '../Assets/Titanic_front_page.jpg'
import shadow from '../Assets/shadow.svg'


const AuthorCard = ({ imageSrc, name }) => (
  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
    <img src={imageSrc} alt={name} style={{ width: '100%',height: 'auto', borderRadius: '10px' }} />
    <p style={{ marginTop: '10px', fontSize: '16px' }}>{name}</p>
  </div>
);

const imageContainerStyle = {
  position: 'relative',
  backgroundImage: 'url("https://asalapublishers.com/uploads/static_seo_pages/1600x360/asala_about4.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '185px',
  borderRadius: '10px',
  color: 'white',
  marginBottom: '20px', 
};

const titleStyle = {
  fontSize: '30px',
  fontWeight: 'bold',
  marginBottom: '10px',
  textAlign: 'center',
};

const textUnderImageStyle = {
  fontSize: '25px',
  textAlign: 'center',
  marginTop: '30px',
  color:'#484847'
};

const secondImageContainerStyle = {
  borderRadius: '20px',
  overflow: 'hidden', 
  marginTop: '30px',

};

const featureColumnStyle = {
  textAlign: 'center', 
};

const iconStyle = {
  fontSize: '40px', 
};

const footerImageStyle = {
  position: 'relative',
    bottom: '70px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
};


const About = () => {

  const authors = [
    { name: 'J.K Rwoling', imageSrc: Jkrowling},
    { name: 'Da Vinci', imageSrc: author2 },
    { name: 'Franklin', imageSrc: author3 },
    { name: 'Marks', imageSrc: author4 },
  ];

  return (
    <div>
      <div style={imageContainerStyle} className="contact-us-container">
        <h2 style={titleStyle} className="title">
        About Us
        </h2>
        <div style={{ marginLeft: '720px', fontSize: '15px' }}>Home .  About US
      </div>
      </div>

      <div style={textUnderImageStyle}>
        <strong><p>We will take care of your kids</p></strong>
        <p style={{marginTop:'30px'}}> Dar Asala was established in 1998 as part of Dar Annaha</p>
        <p>Alarabiya, and specilizes in Arabic childrens' books</p>
     </div>

     <div style={secondImageContainerStyle}>
        <img
          src="https://asalapublishers.com/uploads/about_us/About_04.jpg" 
          alt="Second Image"
          style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
        />
      </div>

      <div style={textUnderImageStyle}>
     <strong><p style={{ fontSize: '25px', marginBottom:'50px' }}>Our Story</p></strong>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p>To date, it has published more than 1600 titles. Asala's books have won tens of national and international awards including Khalifa Award and The Arab Thought Foundation's Kitabi Awars</p>
            <br></br>
              <p>Dar Asala's books target chilren in all Arab countries. They provide young readers with new ideas from their enviroment. Asala's books are sold to schools, ministries of education and culture, NGOs, and distributors in Arab World </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>Dar Asala has a specialized educational team that follows up thr process of publishing with much care and knowledge. This proccess is based on recent research developments in children's literatue, and aims to prepare the child for today's needs.</p>
          <br></br>
            <p>Asala has worked with partners on creating bilingual books for Syrian refugees and thousands of copies have been distributed to the refugees in Lebanon and other countirs. The bools in this project have been approved by the ministry of Education in Lebanon</p>
    </div>
  </div>

  <br></br>

  <div>
      <div style={{ marginTop: '30px', textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '65%' }}>
        <div style={{ flex: '1', textAlign: 'left', marginRight: '10px', marginLeft: '770px' }}>
          <h4 style={{ width: '114%', fontSize: '21px' }}>We Commit To Give You The Best Experience</h4>
          <br></br>
          <p style={{ fontSize: '12px' }}>Not only do we sell toys, but we also try to make sure that your children are safe playing, learning, and having fun!</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            src={about_05}
            alt="Third Image"
            style={{ width: '100%', maxWidth: '200px', height: 'auto', borderRadius: '20px' }}
          />
          <br></br>
        </div>
      </div>
      <br></br>
      
      <div>
         <div style={{ gridArea: '2 / 1 / 3 / 2', backgroundColor: '#3498db', color: '#fff', padding: '20px', textAlign: 'center', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <div style={featureColumnStyle}>
       <LocalShippingOutlinedIcon/>
          <h4>FREE SHIPPING</h4>
          <p>Most products are free shipping</p>
        </div>

        <div style={featureColumnStyle}>
       <LockOutlinedIcon/>
          <h4>SECURE PAYMENT</h4>
          <p>100% Secure Payment</p>
        </div>

        <div style={featureColumnStyle}>
          <PercentOutlinedIcon/>
          <h4>BEST PRICE</h4>
          <p>Guaranteed Price</p>
        </div>

        <div style={featureColumnStyle}>
         <ContentCutOutlinedIcon/>
          <h4>BEST DEAL</h4>
          <p>100% Secure Payment</p>
      </div>
      </div>

      <div>
      <div style={{ marginTop: '30px', textAlign: 'left', fontSize: '18px', marginLeft: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '25px' }}>
        <h2>Meet Our Authors</h2>
        <button style={{ padding: '10px 20px', background: '#CC2448', color: 'white', border: 'none', borderRadius: '25px', cursor: 'pointer' }}>See All Authors</button>
      </div>
       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '70px' }}>
        {authors.map((author, index) => (
          <AuthorCard key={index} name={author.name} imageSrc={author.imageSrc} />
        ))}
      </div>
      </div>
       
      <div style={{ background: '#f0f0f0', padding: '20px' }}>
      <div style={{ marginTop: '50px', textAlign: 'left', fontSize: '18px', marginLeft: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '25px' }}>
        <h2>Best Articles</h2>
        <button style={{ padding: '10px 20px', background: '#CC2448', color: 'white', border: 'none', borderRadius: '25px', cursor: 'pointer' }}>See All Articles</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ marginLeft: '25px', display: 'flex', alignItems: 'center' }}>
          <img src={article1} alt="Article Image 1" style={{ width: '200px', borderRadius: '50%', marginRight: '20px' }} />
          <div>
            <h3>Hiroshima</h3>
            <p>The Japan Bomb </p>
          </div>
        </div> 
        <div style={{ marginLeft: '25px', display: 'flex', alignItems: 'center' }}>
          <img src={titanic} alt="Article Image 2" style={{ width: '200px', borderRadius: '50%', marginRight: '20px' }} />
          <div>
            <h3>Titanic</h3>
            <p>A Boat sank</p>
        </div>
       </div>
      </div>
      </div>

      <img
      src={shadow}
      alt="Footer Image"
      style={footerImageStyle}
    />
    
     </div>
    </div>
   </div>
  </div>
  );
};

export default About
