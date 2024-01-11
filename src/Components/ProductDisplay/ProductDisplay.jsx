import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../Context/ShopContext';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityToggle = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity + 1));
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <div className="productdisplay-in-stock">IN STOCK</div>
        <h1>Helium</h1>
        <br />
        <div className="productdisplay-metadata">
          <div className="productdisplay-info">
            <div className="author-info">
              <p className="author">Author: Rex Rios | </p>
            </div>
            <div className="category-info">
              <p className="category">Category: Picture Book | </p>
            </div>
            <div className="illustrator-info">
              <p className="illustrator">Illustrator: Group Bah ya Bah</p>
            </div>
          </div>
        </div>

        <hr style={{marginTop:'10px'}} />

        <br />

        <div className="productdisplay-navigation">
          <div className="productdisplay-arrows">
            <span className="productdisplay-prev"> &lt; Prev</span>
            <span className="productdisplay-next">Next &gt;</span>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdislay-right-price-new">$6.00</div>
          </div>
          <div className="productdisplay-statement">
            Sed voluptatem neque mollittia possimus. Ut quia consequatur ut quia fuga eos et. Vel quo deserunt maiores
            voluptas error. Expedita quo dolormeque illo commodi atque placeat.
          </div>

            <br/>

            <hr/>

            <br/>

            <div className="quantity-label">
            <p>Quantity</p>
          </div>
            <div className="productdisplay-quantity">
              <div className="quantity-button" onClick={handleQuantityToggle}>
                <span className="minus">-</span>
                <span className="plus">+</span>
                <span className="quantity-number">{quantity}</span>
              </div>
              <button onClick={() => { addToCart(product.id, quantity) }}>
            <ShoppingCartIcon />ADD TO CART
            </button>
            <ShareOutlinedIcon style={{ marginLeft: '5px' }} /> SHARE
            </div>

            <hr style={{ marginTop: '9px' }} />

            <div className="productdisplay-info">
            <div className="series-container">
             <p className="series-item">Serie name: <span className="series-number">74748</span></p>
              <p className="series-item">Arabi 21: <span className="category">Picture Book</span></p>
                <p className="series-item">Stage: <span className="stage">Primary Stage 1st</span></p>
                </div>
                
                <div className="additional-container">
                <p className="series-item">Subject:  <span className="reading-type">Leveled Reading</span></p>
              <p className="series-item">Page<span className="pages">16</span></p>
                <p className="series-item">Year: <span className="year">2022</span></p>
              </div>

              <div className="another-container">
              <p className="series-item">SKU: <span className="id">A-1771</span></p>
              <p className="series-item">Weight: <span className="weight">25 g</span></p>
                <p className="series-item">Dimensions: <span className="dimensions">14 x 20 x 2 cm</span></p>
              </div>
            </div>
          </div>
         </div>
  
        </div>
  );
};

export default ProductDisplay;
