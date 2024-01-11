import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const rectangleStyle = {
  width: '400px',
  backgroundColor: 'white',
  margin: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '15px',
  position: 'relative',
};

const editTextStyle = {
  position: 'absolute',
  top: '20px',
  right: '40px',
  color: 'grey',
  fontSize: '20px',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#E5E4E2',
  padding: '20px',
};

const rowContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '50%',
};

const Profile = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', padding: '50px', color: '#71797E', fontSize: '20px' }}>
  <h2>My Profile</h2>
  <br /><br /><br />
  <div>
  <span style={{ borderRadius: '50%', background: '#CC2448', padding: '15px', margin: ' 10px', color:'white', borderRadius: '50%', display: 'inline-block', textAlign: 'center', lineHeight: '20px', fontSize:'20px' }}>1</span>
<span style={{ margin: ' 10px'}}>Edit Profile</span>
&rarr;

<span style={{ borderRadius: '50%', background: '#71797E', padding: '15px', margin: ' 10px', color:'white', borderRadius: '50%', display: 'inline-block', textAlign: 'center', lineHeight: '20px' }}>2</span>
<span style={{ margin: '10px' }}>Delivery Address</span>
&rarr;

<span style={{ borderRadius: '50%', background: '#71797E', padding: '15px', margin: ' 10px', color:'white', borderRadius: '50%', display: 'inline-block', textAlign: 'center', lineHeight: '20px' }}>3</span>
<span style={{ margin: '10px' }}>Order History</span>
&rarr;

<span style={{ borderRadius: '50%', background: '#71797E', padding: '15px', margin: ' 10px', color:'white', borderRadius: '50%', display: 'inline-block', textAlign: 'center', lineHeight: '20px' }}>4</span>
<span style={{ margin: '10px' }}>Logout</span>

  </div>
</div>
      <div style={containerStyle}>
        <div style={rowContainerStyle}>
          <div style={rectangleStyle}>
            <span style={editTextStyle}>Edit</span>
            <h3>Basic Information</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '90px', marginBottom: '50px' }}>
              <div>
                <p style={{ color: 'grey' }}>First Name</p>
                <p>Samer</p>
              </div>
              <div style={{ marginLeft: '190px' }}>
                <p style={{ color: 'grey' }}>Last Name</p>
                <p>Khamil</p>
              </div>
            </div>
          </div>
          
          <div style={rectangleStyle}>
            <span style={editTextStyle}>Edit</span>
            <h3>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '50px' }}>
            <div style={{ marginBottom: '-40px' }}>
                <p style={{ color: 'black' }}>Phone number</p>
                <p style={{ color: 'grey' }}>+961 70 997 666</p>
                <p style={{ color: 'grey' }}>+961 70 997 654</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={rowContainerStyle}>
  <div style={{ ...rectangleStyle, marginLeft: '20px' }}>
    <span style={editTextStyle}>Edit</span>
    <h3>Account Information</h3>
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '50px' }}>
            <div style={{ marginBottom: '-40px',  marginLeft: '200px' }}>
                <p style={{ color: 'black' }}>Password</p>
                <p style={{ color: 'grey' }}>***********</p> 
              </div>
              <p style={{ color: 'black' }}>Email</p>
                <p style={{ color: 'grey' }}>khSamer@gmail.com</p> 
            </div>
          </div>
          <div>

      <div style={rectangleStyle}>
        <span style={editTextStyle}>Edit</span>
        <h3>Additional Information</h3>
        <br></br>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '50px' }}>
          <div style={{ marginBottom: '-40px', marginLeft: '200px' }}>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
            <div style={{ marginRight: '20px' }}>
              <p style={{ color: 'black' }}>City</p>
              <p style={{ color: 'grey' }}>Beirut</p> 
              <br></br>
              <p style={{ color: 'black' }}>Location</p>
              <p style={{ color: 'grey' }}>Baabda, Street 54, 12</p> 
              <p style={{ color: 'grey' }}>Fayes building, floor 3</p>
            </div>
            <div style={{ marginLeft: '200px' }}>
              <p style={{ color: 'black' }}>Region</p>
              <p style={{ color: 'grey' }}>Baabda</p>
              <br></br>
              <p style={{ color: 'black' }}>Phone Number</p>
              <p style={{ color: 'grey' }}>+961 70 997 666</p>
            </div>
          </div>
          <h3 style={{ marginBottom: '40px' }}></h3>
          <h3>Details</h3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p style={{ color: 'grey'}}>arlo provide how all this mistaken idea of denoiningpleasure and sing pain was born and will give you a complete account  of the system, and expound the actual teachings of the eat explorer</p> 
            </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
      <button style={{ marginRight: '10px', padding: '5px', backgroundColor: 'transparent', border: 'none' }}>
    <AddIcon style={{ color: '#ff0000' }} />
    </button>
    <p style={{ color: '#ff0000', fontSize: '16px' }}>ADD NEW ADDRESS</p>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Profile;
