import React from 'react'
import { createPortal } from 'react-dom'
import { BackDrop } from './Loader'
import "../../style/loader.css";

export default function Modal({onClose, children}) {
  return (
    <>
        {
            createPortal(
                <>
                <BackDrop onClose={onClose}/>
                <div className='loader-content'>
                    
                    <button className='close-button' type='close' onClick={onClose}>X</button>
                    <div className='content'>{children}</div>
                </div>
               
                </>, document.getElementById("modal-root")
            )
        }
    </>
  )
}
