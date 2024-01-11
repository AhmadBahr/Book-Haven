import React from 'react';
import './RelatedProducts.css';
import allProductsData from '../Assets/all_product'; 
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import shadow from '../Assets/shadow_icon.svg'


const footerImageStyle = {
  position: 'relative',
  bottom: '-405px',
  left: '-235%',
  transform: 'translateX(-50%)',
  width: '394%',
  marginTop: '30px',
};

const RelatedProducts = () => {
  return (
    <div className="related-products-container">
      <h2>&nbsp;&nbsp;&nbsp;&nbsp;Related Products</h2>
      <div className="product-grid">
        {allProductsData.map((product, index) => (
          <div key={product.id} className="product-item">
            {index === 0 && <div className="back-arrow">&lt;</div>}
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className={index === 1 ? 'sale-text-box' : 'price-box'}>
                <div className="price">$6.00</div>
                {index === 1 && <div className="sale-text">Sale!</div>}
              </div>
              {index === 2 && (
                <div className="add-to-cart-center">
                  <button className="rounded-button">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}/>
                    <ShoppingCartOutlinedIcon style={{ marginRight: '5px', color: 'white',
                  marginTop:'5px' }} />
                    ADD TO CART
                  </button>
                </div>
              )}
            </div>
            {index === 0 && <div className="front-arrow">&#62;</div>}
          </div>
        ))}
         <img
                src={shadow}
                alt="Footer Image"
                style={footerImageStyle}
    />
       </div>
      </div>
  );
};

export default RelatedProducts;
