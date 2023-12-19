import Modal from "./Modal";

const OrderSuccess = ({onClose, items})=>{

   
    return(

        <Modal onClose={onClose}>
            <h1>Your Order has been successfully placed.</h1>
            {items.splice(0,items.length)}
        </Modal>
    )
}

export default OrderSuccess;