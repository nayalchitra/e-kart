import React from 'react'
import "../../style/loader.css";
import { createPortal } from 'react-dom';


export const BackDrop = (props)=>{
  const handleModal = ()=>{
    if(props.onClose){
      props.onClose();
    }
 
  }
  return(
    <div onClick={handleModal} className='loader-overlay'></div>
  )
    
 
}

export default function Loader() {
  return (
    createPortal(
      <>
        <BackDrop/>
        <div className='loader-dots'>
        </div>
        
    </>,
    document.getElementById("loader")
    )
  )
}
