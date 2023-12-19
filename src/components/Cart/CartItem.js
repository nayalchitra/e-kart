
import "../../style/cartitem.css";


const CartItem = ({item, increaseItem, decreaseItem})=>{

    return(
        <div className="checkout-modal-list-item">
            <div className="img-wrap">
                <img className='card-image' src={`assets/${item.thumbnail}`} alt="placeholder"/>
            </div>
            <div className="information">
                <div className="checkout-cart-details">
                    <h4>{item.title}</h4>
                    <div className="pricing">
                        <span>{item.discountedPrice}</span>&nbsp;&nbsp;
                        <small>
                            <strike>{item.price}</strike>
                        </small>
                    </div>
                </div>
                <div className="checkout-cart-addon">
                    <button onClick={()=>increaseItem(item.id)}>+</button>
                    <span className="counter">{item.quantity}</span>
                    <button onClick={()=>decreaseItem(item.id)}>-</button>
                </div>
            </div>
    </div>
    )

}

export default CartItem;