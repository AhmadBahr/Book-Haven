<<<<<<< HEAD
import React from 'react'
import './Offers.css'
import exclucive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCT</p>
                <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclucive_image} alt=''/>

        </div>
    </div>
  )
}

=======
import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offer For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCT</p>
                <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=""/>
        </div>
        </div>
  )
}

>>>>>>> 78f4f7c3525f0fbde691745bd9743d511f89ece8
export default Offers