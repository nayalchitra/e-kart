import React from 'react'
import "../style/header.css";
import Cart from './Cart';

export default function Header({counter,items,handleEventQueue}) {
  return (
    <div className='header-container'>
        <div className='kart-name'>
            <h1>e-kart</h1>
            <span className="material-symbols-outlined">
                    shopping_cart
            </span>
        </div>
        <div className='search-input'>
            <input className='input' type='text' placeholder='Enter product name or category'/>
            <button className='search-button'><span className="material-symbols-outlined">
                search
            </span></button>
        </div>
        <div className="cart-details">
            <Cart counter={counter} items={items} handleEventQueue={handleEventQueue}/>
        </div>
    </div>
  )
}
