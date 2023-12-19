import React, { useState } from 'react'
import "../style/products.css";
import Modal from './UI/Modal';
import "../style/listItem.css";


export default function ListItem(props) {
    // console.log(props)
    // const [counter, setCounter] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleModal = ()=>{
        setShowModal(showModal=>!showModal);
    }


  
    const incrementCounter = (e)=>{
        // if(counter === 0){
        //     props.handleAddItem();
        //     props.addItemToCart();
        // }
        // setCounter(counter+1);
        props.addItemToCart(props.item.id);
        
    }
    const decrementCounter=(e)=>{
        // if(counter === 0){
            
        //     return;
        // }
        // if(counter === 1){
        //     props.handleRemoveItem();
        //     props.removeItemFromCart();
        // }
        // setCounter(counter-1);
        props.removeItemFromCart(props.item.id);
    }

  return (
   <>
         <div  className='card'>
            <div onClick={handleModal}>
                <img className='card-image' src={`assets/${props.item.thumbnail}`} alt='img'/>
                <div className='card-title'>
                    {props.item.title}
                </div>
                <div className='card-price'>
                    <span>&#8377; {props.item.discountedPrice}</span>&nbsp; &nbsp;
                    <span><strike> &#8377; {props.item.price}</strike></span>
                </div>
            </div>
           
            {
                props.item.quantity === 0 ? 
                <div className='AddToCart'>
                    <button onClick={incrementCounter}>Add to Cart
                    <span className="material-symbols-outlined">
                        garden_cart
                    </span></button>
                </div>
                :
                <div className='AddToCart counter'>
                    <button onClick={incrementCounter}>+</button>
                    <span>{props.item.quantity}</span>
                    <button onClick={decrementCounter}>-</button>
                </div>
            }
            
        </div>
        {
            showModal && <Modal onClose={handleModal}>
               <div className='content-modal'>
                    <img className='card-image' src={`assets/${props.item.thumbnail}`} alt='img'/>
                    <div className='card-detail'>
                        <div className='card-title'>
                        <b>{props.item.title}</b>
                        </div>
                        <div className='card-price'>
                            <div><b>item Price:</b>  &#8377; {props.item.discountedPrice}</div>
                            <div><b>disocunted price:</b> &#8377; {props.item.price}</div>
                        </div>
                        <div className='card-description'>
                            <b>item description :</b> {props.item.description}
                        </div>
                        {
                            props.item.quantity === 0 ? 
                            <div className='AddToCart'>
                                <button onClick={incrementCounter}>Add to Cart
                                <span className="material-symbols-outlined">
                                    garden_cart
                                </span></button>
                            </div>
                            :
                            <div className='AddToCart counter'>
                                <button onClick={incrementCounter}>+</button>
                                <span>{props.item.quantity}</span>
                                <button onClick={decrementCounter}>-</button>
                            </div>
                        }
                    </div>
                    
                </div>
                
            </Modal>
        }
   </>
       
   
  )
}
