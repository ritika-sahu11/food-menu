import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import {getBasketTotal} from './reducer';
import {Link} from 'react-router-dom';

function Subtotal() {
    const[{basket}]=useStateValue();
    let value=getBasketTotal(basket);
  return (
    <div className='subtotal'>
            <p>Total({basket.length}: items) <strong>{`$ ${value}`}</strong></p>
        <Link to='/checkout'>
      <button>Checkout</button>
      </Link>
    </div>
  )
}

export default Subtotal
