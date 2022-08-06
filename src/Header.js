import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
    <div className='header_logo'>
      <h2 className='logo'>FoodMenu</h2>
      </div>
      <ul className='header_items'>
        <li>Home</li>
        <li>About us</li>
        <li>Orders</li>
        <li>Contact us</li>
      </ul>
    </div>
  )
}

export default Header
