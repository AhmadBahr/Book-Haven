import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Components/Context/ShopContext'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div>
      <div className='shop-category'>
        
      </div>
    </div>
  )
}

export default ShopCategory