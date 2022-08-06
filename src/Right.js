import React from 'react';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import './Right.css'

function Right() {
    const[{basket}]=useStateValue();
  return (
    <div className='right'>
    {basket?.length===0?(
        <div>
            <h2 className='text'>Add something</h2>
        </div>
    ):
    (
        <div>
            <h2 className='right_title'>My Order</h2>
            {basket?.map(item=>(
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rate={item.rate}/>
            ))}
        </div>
        )}
        {basket?.length>0 && (
            <div className='right_total'>
                <Subtotal/>
            </div>
        )}
 
      
    </div>
  )
}

export default Right
