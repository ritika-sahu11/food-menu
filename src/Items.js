import React ,{useState} from 'react';
import './Items.css';
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {useStateValue} from './StateProvider';

function Items({id,rate,title,image,price,weigh}) {
    // const newPrice={'200':{price},'400':{price*2},'800':{price*5}};
    // const[newPrice,setNewPrice]=useState({price});
    const[{basket},dispatch]=useStateValue();
    // const handleChange=(value)=>{
    //     if(value==='100')
    //     setNewPrice({price});
    //     else if(value==='400')
    //     setNewPrice({price}*2);
    //     else
    //     setNewPrice({price}*4);
    // }
    const addToBasket=()=>{
        dispatch({
          type:"ADD_TO_BASKET",
          item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rate:rate,
            weigh:weigh
          }
         } )
      }
  return (
    <div className='items' >
    <div className="first_row">
        <div className="rating">
            <StarIcon className='starIcon'/>
            <p className='rating_point'>{rate}</p>
        </div>
        <div className='liked'>
            <FavoriteBorderIcon className='heartIcon'/>
        </div>
    </div>
    <img className="image" src={image} alt=""/>
    <div className='row2'>
        <p>{title}</p>
        <div className='amount'>
        <select class="form-select" aria-label="Default select example">
  <option selected value='200' >200g</option>
  <option value="400" >400g</option>
  <option value="800">800g</option>
</select>
        </div>
    </div>
    <div className='price'>
        <strong>{price}</strong>
    
    <button onClick={addToBasket} className='add'>
        Add to Cart
    </button>
    </div>
    </div>
  )
}

export default Items
