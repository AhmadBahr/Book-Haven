import React from 'react'
import './Breadcrums.css'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Breadcrumbs = (props) => {
      const {product} = props;
      return (
        <div className='breadcrumbs-container'>
        <div style={{ position: 'relative', backgroundColor: '#4A1474', height: '60px' }}>
          <ArrowBackOutlinedIcon style={{ position: 'absolute', top: '50%', left: '2%', transform: 'translateY(-50%)', fontSize: '25px', color: 'white', marginRight: '5px' }} />
          <span style={{ position: 'absolute', top: '50%', left: '4%', transform: 'translateY(-50%)', fontSize: '20px', color: 'white' }}>Back</span>
        </div>
          </div>
      );
    };
    
    export default Breadcrumbs;
