import "../../style/header.css";
import React, { useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import "../../style/cartitem.css";
import OrderSuccess from "../UI/OrderSuccess";



const Cart = ({counter, items, handleEventQueue})=>{

    const [showModal, setShowModal] = useState(false);

    const handleShowModlal = ()=>{
        setShowModal(showModal =>!showModal);
    }
   
    const [successOrder, setSuccessOrder] = useState(false);
    const handleSuccess =  ()=>{
        setShowModal(false);
        setSuccessOrder(successOrder => !successOrder);
    }
    return(
       <React.Fragment>
             <button className="cart-details" onClick={handleShowModlal}>
                <h2>Cart</h2>
                <sup>{counter}</sup>
                <span className="material-symbols-outlined">
                    garden_cart
                </span>
            </button>
     
        {showModal && 
            <Modal onClose={handleShowModlal}>
                <div className="checkout-modal">
                    <h2>Checkout Modal</h2>
                    <div className="checkout-modal-list">
                       { counter ===0? <div className="empty-cart">
                            Please add something to your cart!
                        </div>:
                        items.map((item)=>
                            <CartItem 
                                key={item.id}
                                item={item} 
                                increaseItem={id => handleEventQueue(id,1)}
                                decreaseItem={id =>handleEventQueue(id,-1)} />
                        )
                       }
                    </div>
                   {counter > 0 ? <div className="checkout-modal-footer">
                        <div className="totalAmount">
                            <h4>Total Amount : &nbsp; </h4>
                            <h4>
                            {
                                items.reduce((acc,val)=>{
                                    return acc + (val.quantity*val.discountedPrice)
                                },0)
                            } &nbsp;
                             INR</h4>
                        </div>
                        <button onClick={handleSuccess}>Order Now</button>
                    </div>
                    : null}
                </div>
            </Modal>
        }

        {successOrder && <OrderSuccess onClose={handleSuccess} items={items}/>}

       </React.Fragment>

    )
}

export default Cart;