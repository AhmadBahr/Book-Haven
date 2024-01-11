import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import all_product from '../Assets/all_product';
import shadow from '../Assets/shadow_icon.svg'


const CartHeader = () => (
  <div className="cart-header">
    <h1>Shopping Cart</h1>
    <nav>
      <ul>
        <li>Home</li>.
        <li>Shopping Cart</li>
      </ul>
    </nav>
  </div>
);

const CartItems = () => {
  const {
    getTotalCartItems,
    getTotalCartAmount,
    all_prodcut,
    cartItems,
    removeFromCart,
  } = useContext(ShopContext);

  const footerImageStyle = {
    position: 'relative',
      bottom: '70px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
  };
  
  return (
    <div>
      <CartHeader />

      <div className='cartitems'>
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Price</p>
          <p>Quantity</p>
        </div>
   <hr style={{marginTop: '50px',
    marginLeft: '-410px'}}/>
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id} className="cart-item">
                <div className="cartitems-format cartitems-format-main">
                  <img src={e.image} alt="" className='carticon-product-icon' />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                    className='cartitems-remove-icon'
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className='cart-container'>
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Total products</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cartitems-total-item">
              <p>Shipping cost</p>
              <p>$0.00</p>
            </div>
            <div className="cartitems-total-item">
              <p>VAT</p>
              <p>$0.00</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3 style={{fontWeight:'bold'}}>${getTotalCartAmount()}</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
           </div>
          </div>
         </div>
        </div>
         <button className="btn-contiueshopping">CONTINUE SHOPPING</button>
         <hr className="small-hr" />

         <div className="image-container">
          <img src="https://www.postbank.co.ke/wp-content/uploads/2023/01/Moneygram-scaled.jpg" alt="Image 1" className="cart-image" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Western_Union_Logo_2019.svg/644px-Western_Union_Logo_2019.svg.png" alt="Image 2" className="cart-image" />
        </div>
         
        <div className="interested-products">
          <h2 style={{marginBottom:'6px'}}>You may be interested in ...</h2>
          <div className="product-list">
          {all_product.map((product, index) => (
               <div key={product.id} className="product-item">
               {index === 1 && <div className="sale-badge">Sale</div>}
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">$6.00</p>
              </div>
            ))}
          </div>
          <img
      src={shadow}
      alt="Footer Image"
      style={footerImageStyle}
    />
        </div>
       

      </div>
  );
};

export default CartItems;
