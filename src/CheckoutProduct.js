import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id,title,image,price,rate}) {
    const[{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
       dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id,
       })
    };
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt=""/>
      <div className="checkoutProduct_info">
      <p className='checkoutProduct_title'>{title}</p>
      <p className='checkoutProduct_price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="checkoutProduct_rating">
      </div>
      <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
